'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LOCALES,
  languageNames,
  languageSwitchCopy,
  localeFromPath,
  localeHomePath,
  translatedPathFor,
  type Locale,
} from '@/config/i18n';

/**
 * Language switch.
 *
 * A disclosure rather than a select: the trigger shows a globe, the word for
 * "languages" in the language currently being read, and a chevron; opening it
 * reveals the languages arranged in a grid with the current one marked.
 *
 * A language whose page exists for the page being read is a link to that page.
 * A language that has no version of this page is not a link at all: moving the
 * reader to an unrelated home page would lose their place, so it explains, in
 * the language they asked for, that the page is not translated yet and offers
 * that language's home page as a choice they can make themselves.
 */
export default function LanguageSwitch({ className = '' }: { className?: string }) {
  const pathname = usePathname();
  const current = localeFromPath(pathname);
  const copy = languageSwitchCopy[current];
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [noticeRequest, setNoticeRequest] = useState<{ locale: Locale; pathname: string } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // A notice belongs to the page it was raised on: it is only shown while the
  // reader is still on that page, so navigating away clears it without an
  // effect that would set state during render.
  const noticeLocale = noticeRequest && noticeRequest.pathname === pathname ? noticeRequest.locale : null;

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsidePress = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    // Escape closes the panel and returns focus to the trigger, so keyboard
    // users are never left with focus inside a panel that has been dismissed.
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', closeOnOutsidePress);
    document.addEventListener('touchstart', closeOnOutsidePress);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsidePress);
      document.removeEventListener('touchstart', closeOnOutsidePress);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const notice = noticeLocale ? languageSwitchCopy[noticeLocale] : null;

  return (
    <div className={`lang-switch ${className}`.trim()} ref={containerRef}>
      <button
        ref={triggerRef}
        type="button"
        className="lang-switch-trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        {/* Globe */}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
        </svg>
        <span>{copy.label}</span>
        <svg className="lang-switch-chevron" width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M2.5 4.5 6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div id={panelId} className="lang-panel" role="group" aria-label={copy.panelTitle} hidden={!isOpen}>
        <p className="lang-panel-title">{copy.panelTitle}</p>
        <ul className="lang-panel-grid">
          {LOCALES.map((locale) => {
            const isCurrent = locale === current;
            if (isCurrent) {
              return (
                <li key={locale}>
                  <span className="lang-panel-item" lang={locale} aria-current="true">
                    {languageNames[locale]}
                  </span>
                </li>
              );
            }

            const target = translatedPathFor(pathname, locale);
            if (target) {
              return (
                <li key={locale}>
                  <Link className="lang-panel-item" href={target} lang={locale} onClick={() => setIsOpen(false)}>
                    {languageNames[locale]}
                  </Link>
                </li>
              );
            }

            return (
              <li key={locale}>
                <button
                  type="button"
                  className={`lang-panel-item lang-panel-item-unavailable${noticeLocale === locale ? ' is-active' : ''}`}
                  lang={locale}
                  onClick={() => setNoticeRequest({ locale, pathname })}
                >
                  {languageNames[locale]}
                  <span className="sr-only"> — {languageSwitchCopy[locale].unavailable}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {notice && noticeLocale && (
          <div className="lang-panel-notice" role="status" lang={noticeLocale}>
            <p className="lang-panel-notice-text">{notice.unavailable}</p>
            <Link className="lang-panel-notice-link" href={localeHomePath(noticeLocale)} onClick={() => setIsOpen(false)}>
              {notice.homeLink} →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
