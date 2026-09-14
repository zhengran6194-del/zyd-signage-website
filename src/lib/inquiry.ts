import { siteConfig } from '@/config/site';

export const INQUIRY_LIMITS = {
  fullName: 120,
  email: 160,
  company: 160,
  details: 4000,
} as const;

export type InquirySource = 'contact_page' | 'home_page';

export type InquiryPayload = {
  fullName: string;
  email: string;
  company: string;
  details: string;
};

export type InquiryInput = InquiryPayload & {
  source: InquirySource;
  /** Honeypot. Must stay empty; bots tend to fill every field they find. */
  companyWebsite?: string;
  /** Client mount timestamp in ms, used for a minimum fill-time check. */
  formStartedAt?: number;
};

export type InquiryErrorCode = 'validation' | 'rejected' | 'rate_limited' | 'server';

export type InquiryResponse = {
  ok: boolean;
  message: string;
  id?: string;
  /** true when the inquiry was stored but the notification email was skipped or failed. */
  degraded?: boolean;
  emailNotification?: 'sent' | 'skipped_no_key' | 'failed';
  code?: InquiryErrorCode;
  fieldErrors?: Record<string, string>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiryPayload(
  payload: Partial<InquiryPayload>,
): { ok: true; value: InquiryPayload } | { ok: false; fieldErrors: Record<string, string> } {
  const fullName = String(payload.fullName ?? '').trim();
  const email = String(payload.email ?? '').trim();
  const company = String(payload.company ?? '').trim();
  const details = String(payload.details ?? '').trim();

  const fieldErrors: Record<string, string> = {};

  if (!fullName) fieldErrors.fullName = 'Please enter your full name.';
  else if (fullName.length > INQUIRY_LIMITS.fullName) fieldErrors.fullName = 'Please shorten your full name.';

  if (!details) fieldErrors.details = 'Please describe your project.';
  else if (details.length > INQUIRY_LIMITS.details) fieldErrors.details = 'Please shorten your project details.';

  if (email && !EMAIL_PATTERN.test(email)) {
    fieldErrors.email = 'Please enter a valid email address or leave it blank.';
  } else if (email.length > INQUIRY_LIMITS.email) {
    fieldErrors.email = 'Please shorten your email address.';
  }

  if (company.length > INQUIRY_LIMITS.company) fieldErrors.company = 'Please shorten your company name.';

  if (Object.keys(fieldErrors).length > 0) return { ok: false, fieldErrors };
  return { ok: true, value: { fullName, email, company, details } };
}

export function buildWhatsAppMessage(payload: InquiryPayload, extra?: string) {
  const lines = [
    '*Project Inquiry from ZYD Website*',
    '',
    `*Name:* ${payload.fullName}`,
    `*Email:* ${payload.email || 'N/A'}`,
    `*Company:* ${payload.company || 'N/A'}`,
    `*Details:* ${payload.details}`,
  ];
  if (extra) lines.push(extra);
  return lines.join('\n');
}

export function buildWhatsAppUrl(payload: InquiryPayload, extra?: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage(payload, extra))}`;
}

export async function submitInquiry(input: InquiryInput): Promise<InquiryResponse> {
  const fallbackMessage =
    'We could not submit your inquiry. Please try again, or message us on WhatsApp for a faster reply.';

  try {
    const response = await fetch('/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });

    const data = (await response.json().catch(() => null)) as InquiryResponse | null;
    if (!data || typeof data.ok !== 'boolean') {
      return { ok: false, code: 'server', message: fallbackMessage };
    }
    return data;
  } catch {
    return {
      ok: false,
      code: 'server',
      message: 'Network error. Please check your connection and try again, or message us on WhatsApp.',
    };
  }
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Pushes the conversion event. Must only be called after the server confirmed
 * the inquiry was stored, so a failed submission never reports a conversion.
 */
export function pushGenerateLead(response: InquiryResponse, source: InquirySource) {
  if (typeof window === 'undefined') return false;
  if (!response.ok || !response.id) return false;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'generate_lead',
    lead_source: source,
    inquiry_id: response.id,
    email_notification: response.emailNotification ?? 'unknown',
    degraded: Boolean(response.degraded),
  });
  return true;
}
