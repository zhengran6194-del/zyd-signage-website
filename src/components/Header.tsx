'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        {/* Logo, left aligned */}
        <Link className="brand" href="/" aria-label="ZYD Home">
          {/* The master PNG is 4961x3508 (1.41:1), but .brand img caps the
              rendered height at 56px on mobile and 92-112px from 1025px up, so
              the logo is never wider than about 158px. Declaring that rendered
              box instead of the master file keeps the reserved space and the
              generated srcset in scale with what is actually painted; the ratio
              matches the master, so nothing is distorted. */}
          <Image src="/assets/images/logo-correct.png" alt="ZYD logo" width={160} height={113} loading="eager" sizes="(max-width: 1024px) 80px, 160px" />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
        >
          <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>

        {/* Navigation, pushed to the right of the logo */}
        <nav id="primary-nav" className={`primary-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
          <Link href="/guides" onClick={() => setIsMenuOpen(false)}>Guides</Link>
          <Link href="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>

        {/* Quote button, far right */}
        <div className="nav-actions">
          <Link 
            className="button button-green-base" 
            href="/contact"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
