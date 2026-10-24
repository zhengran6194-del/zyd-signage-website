'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageSwitch from '@/components/LanguageSwitch';
import { headerCopy, headerCta, localeFromPath, navItems } from '@/config/i18n';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = localeFromPath(usePathname());
  const copy = headerCopy[locale];
  const cta = headerCta[locale];

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        {/* Logo, left aligned */}
        <Link className="brand" href="/" aria-label={copy.homeLabel}>
          {/* Desktop CSS crops the master image whitespace within a proportional logo window. */}
          <Image src="/assets/images/logo-correct.png" alt={copy.logoAlt} width={160} height={113} loading="eager" sizes="(max-width: 1024px) 80px, (max-width: 1625px) 16vw, 260px" />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={copy.menuLabel}
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
        >
          <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>

        {/* Navigation, pushed to the right of the logo */}
        <nav id="primary-nav" className={`primary-nav ${isMenuOpen ? 'open' : ''}`}>
          {navItems[locale].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          {/* Mobile: the switcher sits at the end of the panel. Hidden on
              desktop, where .nav-actions carries it instead. */}
          <LanguageSwitch className="lang-mobile" />
        </nav>

        {/* Quote button, far right */}
        <div className="nav-actions">
          <LanguageSwitch className="lang-desktop" />
          <Link 
            className="button button-green-base" 
            href={cta.href}
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
