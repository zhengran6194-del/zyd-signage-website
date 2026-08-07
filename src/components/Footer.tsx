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
    <footer className="bg-white border-t border-slate-100 pt-32 pb-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-24 mb-32">
          {/* Left: Extreme Left Logo Section */}
          <div className="lg:w-1/4">
            <Link href="/" className="inline-block mb-12">
              <img src="/assets/images/logo-correct.jpg" alt="ZYD Signage" className="max-h-12 opacity-95 transition-opacity hover:opacity-100" />
            </Link>
            <p className="text-slate-400 text-xs font-black leading-loose uppercase tracking-[0.2em] max-w-[240px]">
              Global Leader in Architectural Wayfinding & Precision Engineering.
            </p>
          </div>

          {/* Right: Concentrated Info Sections Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-16 lg:gap-20">
            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-10 border-b border-slate-100 pb-4 inline-block">Solutions</h4>
              <ul className="space-y-6">
                <li><Link href="/products/custom-halo-lit-letters" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Halo-Lit</Link></li>
                <li><Link href="/products/ultra-slim-led-light-box" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Light Boxes</Link></li>
                <li><Link href="/products/architectural-wayfinding-system" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Wayfinding</Link></li>
                <li><Link href="/products/outdoor-pylon-monument-sign" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Outdoor</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-10 border-b border-slate-100 pb-4 inline-block">Company</h4>
              <ul className="space-y-6">
                <li><Link href="/about" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">About Us</Link></li>
                <li><Link href="/projects" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Case Studies</Link></li>
                <li><Link href="/faq" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Resources</Link></li>
                <li><Link href="/contact" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-10 border-b border-slate-100 pb-4 inline-block">Social Media</h4>
              <ul className="space-y-6">
                <li className="text-sm text-slate-400 font-black uppercase tracking-widest opacity-60 hover:opacity-100 cursor-default transition-opacity">LinkedIn</li>
                <li className="text-sm text-slate-400 font-black uppercase tracking-widest opacity-60 hover:opacity-100 cursor-default transition-opacity">Facebook</li>
                <li className="text-sm text-slate-400 font-black uppercase tracking-widest opacity-60 hover:opacity-100 cursor-default transition-opacity">Instagram</li>
                <li className="text-sm text-slate-400 font-black uppercase tracking-widest opacity-60 hover:opacity-100 cursor-default transition-opacity">YouTube</li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-10 border-b border-slate-100 pb-4 inline-block">Inquiry</h4>
              <div className="space-y-6">
                <a href={`mailto:${siteConfig.salesEmail}`} className="text-xs text-slate-500 hover:text-blue-600 font-bold block transition-all break-all">{siteConfig.salesEmail}</a>
                <p className="text-xs text-slate-500 font-black tracking-widest block">+{siteConfig.whatsappNumber}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-10">
          <span className="text-[10px] text-slate-300 font-black uppercase tracking-[0.3em]">© 2026 {siteConfig.companyName}</span>
          <a href="#top" className="text-[10px] text-blue-600 font-black uppercase tracking-widest hover:text-blue-800 transition-all">Back to top ↑</a>
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
