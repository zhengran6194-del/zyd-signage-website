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
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span><span></span><span></span>
        </button>

        <nav id="primary-nav" className={`primary-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/products">Products</Link>
          <Link href="/projects">Case Studies</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <a 
            className="button button-green-base small px-6 py-2" 
            href="#contact" 
            onClick={(e) => handleWhatsApp(e, "I am interested in a signage quote.")}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
