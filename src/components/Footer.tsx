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

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-32 pb-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-32 mb-32">
          {/* Column 1: Extreme Left Logo Section (1/3) */}
          <div className="lg:w-1/3">
            <Link href="/" className="inline-block mb-12">
              <img src="/assets/images/logo-correct.jpg" alt="ZYD Signage" width={320} height={160} loading="lazy" className="h-[160px] opacity-95 hover:opacity-100 transition-all" />
            </Link>
            <p className="text-slate-400 text-xs font-black leading-loose uppercase tracking-[0.4em] max-w-[280px]">
              Global Benchmark in Architectural Signage & Precision Fabrication.
            </p>
          </div>

          {/* Right Section: Concentrated grid (2/3) */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-12 border-b-2 border-slate-100 pb-4 inline-block">Product Lines</h4>
              <ul className="space-y-8">
                <li><Link href="/products/custom-halo-lit-letters" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Halo-Lit Letters</Link></li>
                <li><Link href="/products/ultra-slim-led-light-box" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">LED Light Boxes</Link></li>
                <li><Link href="/products/architectural-wayfinding-system" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Wayfinding Systems</Link></li>
                <li><Link href="/products/outdoor-pylon-monument-sign" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Outdoor Signage</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-12 border-b-2 border-slate-100 pb-4 inline-block">Corporate</h4>
              <ul className="space-y-8">
                <li><Link href="/about" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Production Base</Link></li>
                <li><Link href="/projects" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Case Portfolio</Link></li>
                <li><Link href="/faq" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Resources</Link></li>
                <li><Link href="/contact" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all tracking-tight">Consult Now</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-12 border-b-2 border-slate-100 pb-4 inline-block">Social Identity</h4>
              <ul className="space-y-8">
                <li><a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">LinkedIn</a></li>
                <li><a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">Twitter (X)</a></li>
                <li><a href={siteConfig.links.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-blue-600 font-bold transition-all">TikTok</a></li>
              </ul>
            </div>

            <div className="lg:pl-4">
              <h4 className="text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-12 border-b-2 border-slate-100 pb-4 inline-block">B2B Connect</h4>
              <div className="space-y-8">
                <div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2">Direct Mail</div>
                  <a href={`mailto:${siteConfig.salesEmail}`} className="text-xs text-slate-500 hover:text-blue-600 font-bold block transition-all break-all">{siteConfig.salesEmail}</a>
                </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2">Technical Lead</div>
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi Aaron, I have a question about signage.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-green-600 font-black tracking-widest block transition-all"
                    >
                      +{siteConfig.whatsappNumber}
                    </a>
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
          <a 
            href="#top" 
            onClick={scrollToTop}
            className="text-[10px] text-blue-600 font-black uppercase tracking-widest hover:text-blue-800 transition-all group flex items-center gap-4"
          >
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
        <img src="/assets/images/whatsapp-icon-3d.jpg" alt="WhatsApp" width={150} height={150} loading="lazy" />
      </a>
    </footer>
  );
}
