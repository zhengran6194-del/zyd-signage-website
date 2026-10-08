'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { isRtlLocale, localeFromPath } from '@/config/i18n';

type DocumentShellProps = {
  fontClassName: string;
  /**
   * The document head, built by the root layout. It stays declared there — this
   * component only supplies the <html> element and its language, so the head
   * markup and the analytics snippet keep the exact position they had before
   * the shell existed.
   */
  head: ReactNode;
  children: ReactNode;
};

/**
 * The document shell.
 *
 * `<html lang>` has to differ per language tree, but in the App Router the root
 * layout owns the document and a nested layout cannot change an attribute on an
 * element that is already rendered above it — a nested `<html lang="ja">` is
 * simply ignored by the browser. Rendering the shell from a Client Component
 * keeps the single root layout (so no existing English route has to move) while
 * still letting the language be decided from the path, which is known during
 * the server render: the attribute is therefore already correct in the HTML
 * that is served, not patched in afterwards.
 */
export default function DocumentShell({ fontClassName, head, children }: DocumentShellProps) {
  const locale = localeFromPath(usePathname());

  // dir is only set where it differs from the default, so the pages that were
  // already published keep exactly the markup they had.
  return (
    <html lang={locale} dir={isRtlLocale(locale) ? 'rtl' : undefined} className={fontClassName}>
      {head}
      <body>{children}</body>
    </html>
  );
}
