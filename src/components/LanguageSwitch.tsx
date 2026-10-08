'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeFromPath, toEnglish, toJapanese } from '@/config/i18n';

/**
 * Language switcher.
 *
 * Only languages that have real pages are listed, and each entry resolves to a
 * page that exists: a Japanese page maps back to its English counterpart by
 * dropping the /ja prefix, and an English page with no Japanese translation yet
 * sends the reader to the Japanese home page instead of a missing address.
 */
const LANGUAGES = [
  { code: 'en' as const, label: 'EN' },
  { code: 'ja' as const, label: '日本語' },
];

export default function LanguageSwitch({ className = '' }: { className?: string }) {
  const pathname = usePathname();
  const current = localeFromPath(pathname);
  const hrefs = {
    en: current === 'en' ? pathname : toEnglish(pathname),
    ja: current === 'ja' ? pathname : toJapanese(pathname),
  };

  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label="Language">
      {LANGUAGES.map((language) =>
        language.code === current ? (
          <span key={language.code} className="lang-switch-current" lang={language.code} aria-current="true">
            {language.label}
          </span>
        ) : (
          <Link key={language.code} href={hrefs[language.code]} className="lang-switch-link" lang={language.code}>
            {language.label}
          </Link>
        ),
      )}
    </div>
  );
}
