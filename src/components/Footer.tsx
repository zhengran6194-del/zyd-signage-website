'use client';

import React from 'react';
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
          <a href="/products">Illuminated Letters</a>
          <a href="/products">LED Light Boxes</a>
          <a href="/products">Wayfinding Systems</a>
          <a href="/products">Outdoor Signs</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="/about">About Us</a>
          <a href="/projects">Projects</a>
          <a href="/faq">FAQ</a>
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
      
      <a 
        className="floating-whatsapp" 
        href="#contact" 
        onClick={(e) => handleWhatsApp(e, "Hi Aaron, I have a question about signage.")}
      >
        <svg viewBox="0 0 24 24"><path d="M19.1 4.9A9.9 9.9 0 0 0 3.6 16.8L2.2 22l5.4-1.4A10 10 0 1 0 19.1 4.9Zm-7.1 15a8 8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3a8 8 0 1 1 6.8 3.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.2-.2-.2-.4-.2-.6-.3Z"/></svg>
        <span>Chat with Aaron</span>
      </a>
    </footer>
  );
}
