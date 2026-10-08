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
          {/* The master PNG is 4961x3508 (1.41:1), but .brand img caps the
              rendered height at 56px on mobile and 92-112px from 1025px up, so
              the logo is never wider than about 158px. Declaring that rendered
              box instead of the master file keeps the reserved space and the
              generated srcset in scale with what is actually painted; the ratio
              matches the master, so nothing is distorted. */}
          <Image src="/assets/images/logo-correct.png" alt={copy.logoAlt} width={160} height={113} loading="eager" sizes="(max-width: 1024px) 80px, 160px" />
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
