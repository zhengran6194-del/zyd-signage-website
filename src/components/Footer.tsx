'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const handleWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>, message: string) => {
    e.preventDefault();
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/assets/images/logo-correct.jpg" alt="ZYD Signage" />
          <p>{siteConfig.companyName} Factory-direct custom signage solutions since 2006.</p>
        </div>

        <div>
          <h3>Products</h3>
          <Link href="/products">Illuminated Letters</Link>
          <Link href="/products">LED Light Boxes</Link>
          <Link href="/products">Wayfinding Systems</Link>
          <Link href="/products">Outdoor Signs</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About Us</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <h3>Support</h3>
          <span>Email: {siteConfig.salesEmail}</span>
          <span>WhatsApp: +{siteConfig.whatsappNumber} (Aaron)</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 {siteConfig.companyName}. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
      
      {/* 郑总优化：终极版 150px 3D 悬浮图标 (无文字、无白边) */}
      <a 
        className="floating-whatsapp" 
        href="#contact" 
        onClick={(e) => handleWhatsApp(e, "Hi Aaron, I have a question about signage.")}
        aria-label="Chat on WhatsApp"
      >
        <img src="/assets/images/whatsapp-icon-3d.jpg" alt="WhatsApp" />
      </a>
    </footer>
  );
}
