'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        {/* Logo 居左 */}
        <Link className="brand" href="/" aria-label="ZYD Home">
          {/* The true PNG size is 4961x3508 (1.41:1). The old 320x160 pair
              described a 2:1 box and was only saved from distortion by the
              object-fit on .brand img. */}
          <Image src="/assets/images/logo-correct.png" alt="ZYD logo" width={4961} height={3508} loading="eager" sizes="(max-width: 1024px) 80px, 160px" />
        </Link>

        {/* 移动端切换按钮 */}
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

        {/* 导航居中偏右 */}
        <nav id="primary-nav" className={`primary-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
          <Link href="/guides" onClick={() => setIsMenuOpen(false)}>Guides</Link>
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
