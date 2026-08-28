'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        {/* Logo 居左 */}
        <Link className="brand" href="/" aria-label="ZYD Home">
          <img src="/assets/images/logo-correct.jpg" alt="ZYD logo" width={320} height={160} loading="eager" />
        </Link>

        {/* 移动端切换按钮 */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>

        {/* 导航居中偏右 */}
        <nav id="primary-nav" className={`primary-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
          <Link href="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>

        {/* 按钮居右 */}
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
