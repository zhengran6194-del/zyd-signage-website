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
    { 
      no: '01', 
      title: 'Consultation', 
      desc: 'Expert analysis of signage requirements and environmental site conditions.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    },
    { 
      no: '02', 
      title: '3D Mockup', 
      desc: 'Visualizing final aesthetics with high-fidelity industrial 3D renderings.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v10m0 0l-8-4m8 4l8-4m-8 4L4 17" /></svg>
    },
    { 
      no: '03', 
      title: 'Engineering', 
      desc: 'Detailed shop drawings for structural integrity and electrical systems.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    },
    { 
      no: '04', 
      title: 'Fabrication', 
      desc: 'Precision CNC cutting and robotic welding in our 20,000sqm facility.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    { 
      no: '05', 
      title: 'Painting', 
      desc: 'Clean-room automotive-grade coating for 10+ years of durability.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    },
    { 
      no: '06', 
      title: 'LED Integration', 
      desc: 'Samsung/Epistar LED integration with MeanWell IP67 power units.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    { 
      no: '07', 
      title: 'Quality Trial', 
      desc: 'Rigorous 48-hour continuous lighting trial and structural QC.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    { 
      no: '08', 
      title: 'DDP Shipping', 
      desc: 'Secure industrial crating and worldwide door-to-door logistics.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
    },
  ];

  return (
    <>
      <main id="main">
        {/* 1. REFINED HERO */}
        {/* ... (Hero section content remains same) ... */}
        
        {/* (Skipping lines 33-56 for brevitiy in edit tool) */}

        {/* 2. PRODUCTION PROCESS (Restored & Refined) */}
        <section className="section bg-slate-50 py-24 lg:py-32">
          <div className="container">
            <div className="text-center mb-20 reveal">
              <div className="text-blue-600 font-bold uppercase text-xs tracking-[0.3em] mb-4">The ZYD Way</div>
              <h2 className="mb-6 uppercase">Our 8-Step Manufacturing Process</h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">Ensuring absolute precision and durability for large-scale international projects.</p>
            </div>
            <div className="step-grid">
              {steps.map((s, i) => (
                <div key={i} className="step-card reveal">
                  <div className="step-no">{s.no}</div>
                  {s.icon}
                  <h3 className="font-black text-slate-900 uppercase">{s.title}</h3>
                  <p className="text-sm font-medium">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. QUALITY & COMPLIANCE */}

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
                <div className="absolute bottom-6 right-6 bg-slate-950 p-6 lg:p-8 rounded-[3rem] text-white shadow-[0_20px_40px_rgba(0,0,0,0.5),0_10px_0_#070a14] border-[6px] border-blue-500/10 transition-all duration-700 hover:scale-[1.05] group/badge overflow-hidden hidden lg:block">
                  {/* Atmospheric Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_80%)] blur-[80px] opacity-70 group-hover/badge:opacity-100 transition-opacity"></div>
                  
                  <strong className="relative z-10 text-[100px] font-black block text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-400 to-blue-900 italic mb-1 tracking-tighter leading-none drop-shadow-[0_10px_20px_rgba(30,144,255,0.6)] text-center">100%</strong>
                  
                  <div className="relative z-10 space-y-1 text-center">
                    <span className="text-lg lg:text-xl uppercase font-black tracking-[0.6em] text-white block ml-[0.6em] drop-shadow-md">In-House</span>
                    <span className="text-[8px] lg:text-[10px] uppercase font-black tracking-[0.4em] text-slate-500 block opacity-70 ml-[0.4em]">Manufacturing</span>
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
