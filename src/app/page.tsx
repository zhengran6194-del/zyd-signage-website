'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Home() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const steps = [
    { no: '01', title: 'Technical Consultation', desc: 'Expert analysis of signage requirements and site conditions.' },
    { no: '02', title: 'Precision 3D Mockup', desc: 'Visualizing final aesthetics with industrial-grade 3D renderings.' },
    { no: '03', title: 'Shop Drawing', desc: 'Detailed engineering schematics for structural and electrical systems.' },
    { no: '04', title: 'CNC Fabrication', desc: 'High-precision cutting and assembly using advanced automation.' },
    { no: '05', title: 'Automotive Coating', desc: 'Dust-free finish application for 10+ years of weather resistance.' },
    { no: '06', title: 'LED Integration', desc: 'Multi-point wiring with high-efficiency Samsung/Epistar modules.' },
    { no: '07', title: '48H Burn-in Test', desc: 'Rigorous multi-stage QC including extended illumination trials.' },
    { no: '08', title: 'Global DDP Shipping', desc: 'Secure industrial crating and door-to-door logistics management.' },
  ];

  return (
    <>
      <main id="main">
        {/* 1. REFINED HERO */}
        <section className="hero relative flex items-center bg-slate-950 text-white overflow-hidden py-20 lg:py-24">
          <div className="absolute inset-0 z-0">
            <img src="/assets/images/hero-bg-seafront.png" alt="ZYD Factory" className="w-full h-full object-cover opacity-60" />
            <div className="hero-overlay-dark"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <div className="reveal">
                <div className="text-blue-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Precision Engineering Since 2006</div>
                <h1 className="mb-6 uppercase">Precision Built <br/><span className="text-blue-500 italic font-medium">B2B Signage</span> Solutions</h1>
                <p className="text-base text-slate-300 mb-10 font-medium leading-relaxed opacity-90">
                  A 20,000sqm manufacturing powerhouse delivering architectural-grade wayfinding and custom identification systems with Global DDP capabilities.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact" className="button button-green-base">Get a Free Quote</Link>
                  <Link href="/products" className="px-6 py-2.5 border border-white/20 rounded font-bold uppercase text-[11px] hover:bg-white hover:text-slate-950 transition-all flex items-center">Explore Catalog</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PRODUCTION PROCESS (Restored) */}
        <section className="section bg-white py-20 lg:py-24">
          <div className="container">
            <div className="text-left mb-12 reveal">
              <div className="text-blue-600 font-bold uppercase text-[10px] tracking-widest mb-2">The ZYD Way</div>
              <h2 className="mb-4">Our 8-Step Manufacturing Process</h2>
              <p className="text-slate-500 max-w-2xl">Ensuring absolute compliance and durability for large-scale international projects.</p>
            </div>
            <div className="step-grid">
              {steps.map((s, i) => (
                <div key={i} className="step-card reveal">
                  <div className="step-no">{s.no}</div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 uppercase">{s.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. QUALITY & COMPLIANCE (New Section) */}
        <section className="section bg-slate-50 border-y border-slate-100 py-20 lg:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="reveal">
                <h2 className="mb-6 uppercase tracking-tighter">Global Compliance & <br/>Quality Standards</h2>
                <p className="text-slate-600 mb-10 text-base leading-relaxed">We adhere to the highest international certifications to guarantee structural integrity and electrical safety in any environment.</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'ISO 9001:2015', desc: 'Quality Management' },
                    { label: 'CE Certified', desc: 'Electrical Compliance' },
                    { label: 'SGS Inspected', desc: 'Factory Standards' },
                    { label: 'UL Components', desc: 'Premium Components' },
                  ].map((cert, idx) => (
                    <div key={idx} className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                      <div className="font-black text-blue-600 text-[12px] mb-0.5">{cert.label}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{cert.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal relative">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img src="/assets/images/factory-overview.jpg" alt="Factory QC" className="w-full h-[400px] object-cover" />
                </div>
                <div className="absolute -bottom-48 -right-48 bg-slate-950 p-40 lg:p-52 rounded-[15rem] text-white shadow-[0_120px_240px_rgba(0,0,0,0.8),0_40px_0_#070a14] hidden lg:block border-[24px] border-blue-500/10 transition-all duration-1000 hover:scale-[1.05] group/badge overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] blur-[150px] opacity-70 group-hover/badge:opacity-100 transition-opacity"></div>
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent blur-[100px] rotate-45 animate-pulse"></div>
                  
                  <strong className="relative z-10 text-[260px] font-black block text-transparent bg-clip-text bg-gradient-to-b from-blue-100 via-blue-400 to-blue-800 italic mb-10 tracking-tighter leading-none drop-shadow-[0_40px_80px_rgba(30,144,255,0.7)]">100%</strong>
                  
                  <div className="relative z-10 space-y-6 text-center">
                    <span className="text-4xl lg:text-5xl uppercase font-black tracking-[1em] text-slate-100 block ml-[1em]">In-House</span>
                    <span className="text-2xl lg:text-3xl uppercase font-black tracking-[0.8em] text-slate-500 block opacity-60 ml-[0.8em]">Manufacturing</span>
                  </div>
                  
                  <div className="relative z-10 mt-20 flex justify-center">
                    <div className="h-2 w-64 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRODUCTS PREVIEW */}
        <section className="section bg-white py-20 lg:py-24">
          <div className="container">
            <div className="flex justify-between items-end mb-12 reveal">
              <div>
                <h2 className="uppercase tracking-tighter">Signage Solutions</h2>
                <p className="text-slate-500 font-medium text-sm mt-1">Bespoke manufacturing for global architectural projects.</p>
              </div>
              <Link href="/products" className="text-blue-600 font-bold uppercase text-[11px] tracking-widest border-b border-blue-100 hover:border-blue-600 transition-all pb-0.5">
                View Full Catalog &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {[
                { title: 'Halo-Lit Letters', img: 'cat-illuminated.webp', id: 'custom-halo-lit-letters' },
                { title: 'Wayfinding Systems', img: 'hero-wayfinding.png', id: 'architectural-wayfinding-system' },
                { title: 'Monument Signs', img: 'cat-outdoor.webp', id: 'outdoor-pylon-monument-sign' },
                { title: 'LED Light Boxes', img: 'cat-lightbox.webp', id: 'ultra-slim-led-light-box' },
                { title: 'LED Neon Signs', img: 'cat-neon.webp', id: 'custom-led-neon-sign' },
                { title: 'Metal & Acrylic Signs', img: 'cat-metal.webp', id: 'metal-acrylic-logo-sign' },
                { title: 'Landscape & Furniture', img: 'landscape-bench.jpg', id: 'custom-landscape-furniture' },
                { title: 'Complete Systems', img: 'cat-system.webp', id: 'complete-signage-system' },
              ].map((p, i) => (
                <div key={i} className="reveal group">
                  <div className="overflow-hidden rounded-xl mb-4 h-60 bg-slate-100 border border-slate-50">
                    <img src={`/assets/images/${p.img}`} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-black text-slate-900 mb-1 uppercase text-xs">{p.title}</h4>
                  <Link href={`/products/${p.id}`} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">Details</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section id="contact" className="section bg-slate-950 text-white relative overflow-hidden py-24">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src="/assets/images/grid-pattern.svg" alt="Pattern" className="w-full h-full object-cover" />
          </div>
          <div className="container relative z-10 text-center max-w-xl">
            <div className="reveal">
              <h2 className="mb-4 uppercase">Ready to Start?</h2>
              <p className="text-slate-400 mb-10 text-base">Contact our engineering team for expert technical support and factory-direct pricing.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="button button-green-base px-10 py-3">
                  Get a Free Quote
                </Link>
                <Link href="/about" className="px-10 py-3 border border-white/20 rounded font-bold uppercase text-[12px] hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
