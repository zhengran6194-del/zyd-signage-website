'use client';

import React, { useState } from 'react';
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
        <a className="brand" href="/" aria-label="ZYD Home">
          <img src="/assets/images/logo-correct.jpg" alt="ZYD Zhiyudao Sign logo" width={166} height={78} />
        </a>


        <button 
          className="menu-toggle" 
          aria-expanded={isMenuOpen} 
          aria-controls="primary-nav" 
          aria-label="Open navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav id="primary-nav" className={`primary-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          <a href="/products">Products</a>
          <a href="/projects">Case Studies</a>
          <a href="/faq">FAQ</a>
          <a href="/about">About</a>
          <a href="/#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a 
            className="button button-primary small js-whatsapp" 
            href="#contact" 
            onClick={(e) => handleWhatsApp(e, "Hi Aaron, I would like a free signage quote.")}
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
