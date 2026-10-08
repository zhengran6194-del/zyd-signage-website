'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Language switcher.
 *
 * Only languages that have real pages are listed, so neither entry can lead to a
 * 404. English is the site root and Japanese lives under /ja; every other route
 * exists in English only, so the Japanese entry points at the Japanese home
 * page rather than at a translation that has not been published yet.
 */
const LANGUAGES = [
  { code: 'en' as const, href: '/', label: 'EN' },
  { code: 'ja' as const, href: '/ja', label: '日本語' },
];

export default function LanguageSwitch({ className = '' }: { className?: string }) {
  const pathname = usePathname();
  const current = pathname === '/ja' || pathname.startsWith('/ja/') ? 'ja' : 'en';

  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label="Language">
      {LANGUAGES.map((language) =>
        language.code === current ? (
          <span key={language.code} className="lang-switch-current" lang={language.code} aria-current="true">
            {language.label}
          </span>
        ) : (
          <Link key={language.code} href={language.href} className="lang-switch-link" lang={language.code}>
            {language.label}
          </Link>
        ),
      )}
    </div>
  );
}
