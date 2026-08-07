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
    <footer className="bg-white border-t border-slate-100 pt-48 pb-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start gap-32 mb-48">
          {/* Left: 1/3 Branding Section */}
          <div className="lg:w-1/3">
            <Link href="/" className="inline-block mb-16">
              <img src="/assets/images/logo-correct.jpg" alt="ZYD Signage" className="max-h-12 opacity-95 transition-all hover:opacity-100" />
            </Link>
            <p className="text-slate-400 text-xs font-black leading-loose uppercase tracking-[0.4em] max-w-[320px]">
              The Global Benchmark in Architectural-Grade Wayfinding & Custom Signage Engineering. 
              Reliability built through precision manufacturing since 2006.
            </p>
          </div>

          {/* Right: 2/3 Info Grid Section */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-12 border-b-2 border-slate-100 pb-6 inline-block">Product Lines</h4>
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
                <li><Link href="/about" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Industrial Facility</Link></li>
                <li><Link href="/projects" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Case Portfolio</Link></li>
                <li><Link href="/faq" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Engineering Hub</Link></li>
                <li><Link href="/contact" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Consult Aaron</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-12 border-b-2 border-slate-100 pb-6 inline-block">Social Identity</h4>
              <ul className="space-y-8">
                <li className="text-sm text-slate-300 font-black uppercase tracking-[0.2em] cursor-default hover:text-slate-400 transition-colors">LinkedIn</li>
                <li className="text-sm text-slate-300 font-black uppercase tracking-[0.2em] cursor-default hover:text-slate-400 transition-colors">Facebook</li>
                <li className="text-sm text-slate-300 font-black uppercase tracking-[0.2em] cursor-default hover:text-slate-400 transition-colors">Instagram</li>
                <li className="text-sm text-slate-300 font-black uppercase tracking-[0.2em] cursor-default hover:text-slate-400 transition-colors">YouTube</li>
              </ul>
            </div>

            <div className="lg:pl-8">
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-12 border-b-2 border-slate-100 pb-6 inline-block">B2B Connect</h4>
              <div className="space-y-8">
                <div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2">Direct Mail</div>
                  <a href={`mailto:${siteConfig.salesEmail}`} className="text-xs text-slate-500 hover:text-blue-600 font-bold block transition-all break-all">{siteConfig.salesEmail}</a>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2">Technical Lead</div>
                  <p className="text-xs text-slate-500 font-black tracking-widest block">+{siteConfig.whatsappNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-8">
            <span className="text-[10px] text-slate-300 font-black uppercase tracking-[0.6em]">© 2026 {siteConfig.companyName}</span>
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
