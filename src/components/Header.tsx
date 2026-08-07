'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>, message: string) => {
    e.preventDefault();
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="ZYD Home">
          <img src="/assets/images/logo-correct.jpg" alt="ZYD logo" />
        </Link>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="w-6 h-0.5 bg-slate-900 block mb-1"></span>
          <span className="w-6 h-0.5 bg-slate-900 block mb-1"></span>
          <span className="w-6 h-0.5 bg-slate-900 block"></span>
        </button>

        <nav id="primary-nav" className={`primary-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/products">Products</Link>
          <Link href="/projects">Case Studies</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link 
            className="button button-green-base small" 
            href="/contact"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
