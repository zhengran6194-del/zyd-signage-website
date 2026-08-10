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
          {/* 1. Left Branding Section (approx 1/3) */}
          <div className="lg:w-1/3">
            <Link href="/" className="inline-block mb-12">
              <img src="/assets/images/logo-correct.jpg" alt="ZYD Signage" className="max-h-12 opacity-95 hover:opacity-100 transition-all" />
            </Link>
            <p className="text-slate-400 text-[10px] font-black leading-loose uppercase tracking-[0.4em] max-w-[320px]">
              Global Benchmark in Architectural Signage & Precision Fabrication Engineering. 
              Reliability built through innovation since 2006.
            </p>
          </div>

          {/* 2. Right Info Sections Grid (approx 2/3) */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-12 border-b-2 border-slate-100 pb-6 inline-block">Signage Lines</h4>
              <ul className="space-y-8">
                <li><Link href="/products/custom-halo-lit-letters" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Halo-Lit Letters</Link></li>
                <li><Link href="/products/ultra-slim-led-light-box" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">LED Light Boxes</Link></li>
                <li><Link href="/products/architectural-wayfinding-system" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Wayfinding Systems</Link></li>
                <li><Link href="/products/outdoor-pylon-monument-sign" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Outdoor Signage</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-12 border-b-2 border-slate-100 pb-6 inline-block">Corporate</h4>
              <ul className="space-y-8">
                <li><Link href="/about" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Production Base</Link></li>
                <li><Link href="/projects" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Project Portfolio</Link></li>
                <li><Link href="/faq" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Engineering Hub</Link></li>
                <li><Link href="/contact" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Consult Now</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-12 border-b-2 border-slate-100 pb-6 inline-block">Social Media</h4>
              <ul className="space-y-8">
                <li className="text-sm text-slate-300 font-black uppercase tracking-[0.2em] cursor-default hover:text-slate-400 transition-colors">LinkedIn</li>
                <li className="text-sm text-slate-300 font-black uppercase tracking-[0.2em] cursor-default hover:text-slate-400 transition-colors">Facebook</li>
                <li className="text-sm text-slate-300 font-black uppercase tracking-[0.2em] cursor-default hover:text-slate-400 transition-colors">Instagram</li>
                <li className="text-sm text-slate-300 font-black uppercase tracking-[0.2em] cursor-default hover:text-slate-400 transition-colors">YouTube</li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-12 border-b-2 border-slate-100 pb-6 inline-block">B2B Inquiry</h4>
              <div className="space-y-8">
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
