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
        <img src="/assets/images/whatsapp-icon.jpg" alt="WhatsApp" className="whatsapp-icon-img !w-[50px] !h-[50px]" />
        <span>Chat with Aaron</span>
      </a>
    </footer>
  );
}
