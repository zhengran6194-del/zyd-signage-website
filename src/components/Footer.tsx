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
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-20">
          {/* Left: Logo and Brand Info */}
          <div className="lg:w-1/3">
            <img src="/assets/images/logo-correct.jpg" alt="ZYD Signage" className="max-h-8 mb-8" />
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
              {siteConfig.companyName} is a global leader in architectural-grade wayfinding and custom signage solutions. 
              Engineering precision into every weld since 2006.
            </p>
          </div>

          {/* Right: Info Sections Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            <div>
              <h4 className="text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] mb-8">Solutions</h4>
              <ul className="space-y-4">
                <li><Link href="/products/custom-halo-lit-letters" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-colors">Halo-Lit Letters</Link></li>
                <li><Link href="/products/ultra-slim-led-light-box" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-colors">LED Light Boxes</Link></li>
                <li><Link href="/products/architectural-wayfinding-system" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-colors">Wayfinding</Link></li>
                <li><Link href="/products/outdoor-pylon-monument-sign" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-colors">Outdoor Signs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] mb-8">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-colors">Our Factory</Link></li>
                <li><Link href="/projects" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-colors">Case Studies</Link></li>
                <li><Link href="/faq" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-colors">Resources</Link></li>
                <li><Link href="/contact" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] mb-8">Social Media</h4>
              <ul className="space-y-4">
                <li className="text-sm text-slate-400 font-bold uppercase tracking-widest cursor-default">LinkedIn</li>
                <li className="text-sm text-slate-400 font-bold uppercase tracking-widest cursor-default">Facebook</li>
                <li className="text-sm text-slate-400 font-bold uppercase tracking-widest cursor-default">Instagram</li>
                <li className="text-sm text-slate-400 font-bold uppercase tracking-widest cursor-default">YouTube</li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[10px] uppercase tracking-[0.2em] mb-8">Direct Contact</h4>
              <div className="space-y-4">
                <p className="text-xs text-slate-400 font-bold">{siteConfig.salesEmail}</p>
                <p className="text-xs text-slate-400 font-bold">+{siteConfig.whatsappNumber} (Aaron)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">© 2026 {siteConfig.companyName}. Global DDP Enabled.</span>
          <a href="#top" className="text-[10px] text-blue-600 font-black uppercase tracking-widest hover:text-blue-800 transition-colors">Back to top ↑</a>
        </div>
      </div>

      {/* WhatsApp Floating Icon */}
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
