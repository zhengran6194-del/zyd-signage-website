import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';
import { validateInquiryPayload, type InquiryPayload, type InquirySource } from '@/lib/inquiry';

export const runtime = 'nodejs';

/** Minimum time a human plausibly needs to fill the form. */
const MIN_FILL_MS = 2000;
/** Same-IP cooldown between accepted submissions. */
const RATE_LIMIT_MS = 20000;
const EMAIL_TIMEOUT_MS = 8000;
const MAX_TRACKED_IPS = 500;

/** Best-effort per-instance throttle. Serverless instances do not share state. */
const recentSubmissions = new Map<string, number>();

type LogFields = Record<string, unknown>;

function log(event: string, fields: LogFields = {}) {
  // Structured log line: this is the durable trace of every inquiry.
  console.log(JSON.stringify({ event, timestamp: new Date().toISOString(), ...fields }));
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function rememberIp(ip: string, now: number) {
  recentSubmissions.set(ip, now);
  if (recentSubmissions.size > MAX_TRACKED_IPS) {
    for (const [key, at] of recentSubmissions) {
      if (now - at > RATE_LIMIT_MS * 5) recentSubmissions.delete(key);
    }
  }
}

function buildNotificationText(payload: InquiryPayload, meta: { id: string; source: InquirySource; receivedAt: string }) {
  return [
    `New signage inquiry (${meta.id})`,
    `Received: ${meta.receivedAt}`,
    `Source: ${meta.source}`,
    '',
    `Name: ${payload.fullName}`,
    `Email: ${payload.email || 'N/A'}`,
    `Company: ${payload.company || 'N/A'}`,
    '',
    'Project details:',
    payload.details,
  ].join('\n');
}

/**
 * Sends the notification email when a provider key is configured.
 * Returns 'skipped_no_key' when unset so the caller can degrade instead of failing.
 */
async function sendNotificationEmail(
  payload: InquiryPayload,
  meta: { id: string; source: InquirySource; receivedAt: string },
): Promise<'sent' | 'skipped_no_key' | 'failed'> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return 'skipped_no_key';

  const to = process.env.INQUIRY_NOTIFY_EMAIL || siteConfig.salesEmail;
  const from = process.env.INQUIRY_FROM_EMAIL || 'ZYD Website <onboarding@resend.dev>';

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), EMAIL_TIMEOUT_MS);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New signage inquiry ${meta.id} — ${payload.company || payload.fullName}`,
        text: buildNotificationText(payload, meta),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      log('inquiry_email_failed', { id: meta.id, status: response.status });
      return 'failed';
    }
    return 'sent';
  } catch (error) {
    log('inquiry_email_error', {
      id: meta.id,
      error: error instanceof Error ? error.message : 'unknown error',
    });
    return 'failed';
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    log('inquiry_unreadable_body');
    return NextResponse.json(
      { ok: false, code: 'validation', message: 'We could not read this submission. Please try again.' },
      { status: 400 },
    );
  }

  const ip = getClientIp(request);

  // Anti-abuse: honeypot must stay empty.
  if (String(body.companyWebsite ?? '').trim()) {
    log('inquiry_rejected', { reason: 'honeypot', ip });
    return NextResponse.json(
      {
        ok: false,
        code: 'rejected',
        message: 'We could not verify this submission. Please review your details and try again.',
      },
      { status: 400 },
    );
  }

  // Anti-abuse: a submission faster than a human could type is rejected.
  const formStartedAt = Number(body.formStartedAt ?? 0);
  const now = Date.now();
  if (formStartedAt > 0 && now - formStartedAt < MIN_FILL_MS) {
    log('inquiry_rejected', { reason: 'submitted_too_fast', ip, elapsedMs: now - formStartedAt });
    return NextResponse.json(
      {
        ok: false,
        code: 'rejected',
        message: 'We could not verify this submission. Please review your details and try again.',
      },
      { status: 400 },
    );
  }

  const lastSubmission = recentSubmissions.get(ip);
  if (lastSubmission && now - lastSubmission < RATE_LIMIT_MS) {
    log('inquiry_rate_limited', { ip, sinceLastMs: now - lastSubmission });
    return NextResponse.json(
      {
        ok: false,
        code: 'rate_limited',
        message: 'You just sent an inquiry. Please wait a moment before sending another one.',
      },
      { status: 429 },
    );
  }

  const validated = validateInquiryPayload(body as Partial<InquiryPayload>);
  if (!validated.ok) {
    log('inquiry_invalid', { ip, fieldErrors: validated.fieldErrors });
    return NextResponse.json(
      {
        ok: false,
        code: 'validation',
        message: 'Please check the highlighted fields and try again.',
        fieldErrors: validated.fieldErrors,
      },
      { status: 400 },
    );
  }

  const payload = validated.value;
  const source: InquirySource = body.source === 'home_page' ? 'home_page' : 'contact_page';
  const id = `inq_${now.toString(36)}${Math.random().toString(36).slice(2, 8)}`;
  const receivedAt = new Date(now).toISOString();

  // Durable trace of the inquiry itself.
  log('inquiry_received', {
    id,
    receivedAt,
    source,
    ip,
    userAgent: request.headers.get('user-agent') ?? 'unknown',
    fullName: payload.fullName,
    email: payload.email || null,
    company: payload.company || null,
    details: payload.details,
  });

  rememberIp(ip, now);

  const emailNotification = await sendNotificationEmail(payload, { id, source, receivedAt });
  const degraded = emailNotification !== 'sent';

  log('inquiry_stored', { id, source, emailNotification, degraded });

  return NextResponse.json(
    {
      ok: true,
      id,
      degraded,
      emailNotification,
      message: degraded
        ? 'Your inquiry has been received and recorded. Our team will follow up. You can also reach us on WhatsApp for a faster reply.'
        : 'Thank you. Your inquiry has been received. Our team will get back to you shortly.',
    },
    { status: 200 },
  );
}
