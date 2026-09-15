'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';

/**
 * Last-resort boundary: this file replaces the root layout, so globals.css and
 * Tailwind are not guaranteed to be loaded here. Every value below is therefore
 * inlined rather than class-based. The retry button is the primary recovery
 * action because it does not depend on navigation at all.
 */
const palette = {
  ink: '#12213a',
  muted: '#667085',
  blue950: '#082554',
  blue700: '#1459b8',
  green: '#10b981',
  line: '#e4e9f1',
} as const;

const linkStyle: CSSProperties = {
  display: 'inline-block',
  padding: '14px 32px',
  borderRadius: '999px',
  border: `2px solid ${palette.line}`,
  color: palette.ink,
  fontSize: '13px',
  fontWeight: 900,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  textDecoration: 'none',
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 20px',
          background: '#eef1f4',
          color: palette.ink,
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
          lineHeight: 1.6,
        }}
      >
        <main style={{ maxWidth: '640px', width: '100%', textAlign: 'center' }}>
          <p
            style={{
              margin: '0 0 16px',
              fontSize: '11px',
              fontWeight: 900,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: palette.blue700,
            }}
          >
            Application Error
          </p>
          <h1
            style={{
              margin: '0 0 20px',
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: palette.blue950,
            }}
          >
            The site failed to load
          </h1>
          <p style={{ margin: '0 0 32px', color: palette.muted, fontWeight: 500 }}>
            A top-level error stopped the application from rendering. Reloading usually resolves
            it. If it continues, your project enquiry can still reach us by email.
          </p>
          {error.digest ? (
            <p
              style={{
                margin: '0 0 32px',
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: palette.muted,
              }}
            >
              Reference: {error.digest}
            </p>
          ) : null}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                padding: '14px 32px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                background: palette.green,
                color: '#fff',
                fontSize: '13px',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Reload the site
            </button>
            <Link href="/" style={linkStyle}>
              Back to Home
            </Link>
            <Link href="/contact" style={linkStyle}>
              Contact Sales
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
