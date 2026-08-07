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
            <Link href="/" className="inline-block mb-10">
              <img src="/assets/images/logo-correct.jpg" alt="ZYD Signage" className="max-h-7 opacity-90" />
            </Link>
            <p className="text-slate-400 text-sm font-semibold leading-loose uppercase tracking-widest">
              Global Leader in Architectural Wayfinding
            </p>
          </div>

          {/* Right: Concentrated Info Sections */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-16 lg:gap-20">
            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-10">Solutions</h4>
              <ul className="space-y-5">
                <li><Link href="/products/custom-halo-lit-letters" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Halo-Lit</Link></li>
                <li><Link href="/products/ultra-slim-led-light-box" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Light Boxes</Link></li>
                <li><Link href="/products/architectural-wayfinding-system" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Wayfinding</Link></li>
                <li><Link href="/products/outdoor-pylon-monument-sign" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Outdoor</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-10">Company</h4>
              <ul className="space-y-5">
                <li><Link href="/about" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">About Us</Link></li>
                <li><Link href="/projects" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Projects</Link></li>
                <li><Link href="/faq" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Resources</Link></li>
                <li><Link href="/contact" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-10">Social Media</h4>
              <ul className="space-y-5">
                <li className="text-sm text-slate-400 font-black uppercase tracking-widest opacity-60">LinkedIn</li>
                <li className="text-sm text-slate-400 font-black uppercase tracking-widest opacity-60">Facebook</li>
                <li className="text-sm text-slate-400 font-black uppercase tracking-widest opacity-60">Instagram</li>
                <li className="text-sm text-slate-400 font-black uppercase tracking-widest opacity-60">YouTube</li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-10">Inquiry</h4>
              <div className="space-y-6">
                <a href={`mailto:${siteConfig.salesEmail}`} className="text-xs text-slate-500 font-bold block hover:text-blue-600 transition-all">{siteConfig.salesEmail}</a>
                <p className="text-xs text-slate-500 font-bold block">+{siteConfig.whatsappNumber}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-10">
          <span className="text-[11px] text-slate-300 font-black uppercase tracking-[0.2em]">© 2026 {siteConfig.companyName}</span>
          <a href="#top" className="text-[11px] text-blue-600 font-black uppercase tracking-widest hover:text-blue-800 transition-all">Back to top ↑</a>
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
