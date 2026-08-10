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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-16 mb-32 items-start">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-block mb-10">
              <img src="/assets/images/logo-correct.jpg" alt="ZYD Signage" className="max-h-12 opacity-95 hover:opacity-100 transition-all" />
            </Link>
            <p className="text-slate-400 text-[10px] font-black leading-loose uppercase tracking-[0.4em] max-w-[200px]">
              The Global Benchmark in Architectural-Grade Wayfinding.
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-10 border-b-2 border-slate-100 pb-4 inline-block">Solutions</h4>
            <ul className="space-y-6">
              <li><Link href="/products/custom-halo-lit-letters" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Halo-Lit Letters</Link></li>
              <li><Link href="/products/ultra-slim-led-light-box" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">LED Light Boxes</Link></li>
              <li><Link href="/products/architectural-wayfinding-system" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Wayfinding Systems</Link></li>
              <li><Link href="/products/outdoor-pylon-monument-sign" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Outdoor Signage</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-10 border-b-2 border-slate-100 pb-4 inline-block">Company</h4>
            <ul className="space-y-6">
              <li><Link href="/about" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Our Factory</Link></li>
              <li><Link href="/projects" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Case Studies</Link></li>
              <li><Link href="/faq" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Consult Aaron</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-10 border-b-2 border-slate-100 pb-4 inline-block">Social Media</h4>
            <ul className="space-y-6">
              <li className="text-sm text-slate-300 font-black uppercase tracking-[0.2em] cursor-default hover:text-slate-400 transition-colors">LinkedIn</li>
              <li className="text-sm text-slate-300 font-black uppercase tracking-[0.2em] cursor-default hover:text-slate-400 transition-colors">Facebook</li>
              <li className="text-sm text-slate-300 font-black uppercase tracking-[0.2em] cursor-default hover:text-slate-400 transition-colors">Instagram</li>
              <li className="text-sm text-slate-300 font-black uppercase tracking-[0.2em] cursor-default hover:text-slate-400 transition-colors">YouTube</li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-10 border-b-2 border-slate-100 pb-4 inline-block">B2B Connect</h4>
            <div className="space-y-6">
              <div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2">Direct Mail</div>
                <a href={`mailto:${siteConfig.salesEmail}`} className="text-xs text-slate-500 hover:text-blue-600 font-bold block transition-all break-all">{siteConfig.salesEmail}</a>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2">Lead Engineer</div>
                <p className="text-xs text-slate-500 font-black tracking-widest block">+{siteConfig.whatsappNumber}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-8">
            <span className="text-[10px] text-slate-300 font-black uppercase tracking-[0.5em]">© 2026 {siteConfig.companyName}</span>
            <span className="h-px w-12 bg-slate-100 hidden md:block"></span>
            <span className="text-[10px] text-slate-300 font-black uppercase tracking-[0.4em]">Global DDP Certified</span>
          </div>
          <a href="#top" className="text-[10px] text-blue-600 font-black uppercase tracking-widest hover:text-blue-800 transition-all group flex items-center gap-4">
            Back to top 
            <span className="group-hover:-translate-y-2 transition-transform duration-300">↑</span>
          </a>
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
