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
      title: 'Technical Consultation', 
      desc: 'Expert analysis of signage requirements and site conditions.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    },
    { 
      no: '02', 
      title: 'Precision 3D Mockup', 
      desc: 'Visualizing final aesthetics with industrial-grade 3D renderings.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v10m0 0l-8-4m8 4l8-4m-8 4L4 17" /></svg>
    },
    { 
      no: '03', 
      title: 'Shop Drawing', 
      desc: 'Detailed engineering schematics for structural and electrical systems.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    },
    { 
      no: '04', 
      title: 'CNC Fabrication', 
      desc: 'High-precision cutting and assembly using advanced automation.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    { 
      no: '05', 
      title: 'Automotive Coating', 
      desc: 'Dust-free finish application for 10+ years of weather resistance.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    },
    { 
      no: '06', 
      title: 'LED Integration', 
      desc: 'Multi-point wiring with high-efficiency Samsung/Epistar modules.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    { 
      no: '07', 
      title: '48H Burn-in Test', 
      desc: 'Rigorous multi-stage QC including extended illumination trials.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    { 
      no: '08', 
      title: 'Global DDP Shipping', 
      desc: 'Secure industrial crating and door-to-door logistics management.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
    },
  ];

  const handleWhatsApp = (e: any, message: string) => {
    if (e) e.preventDefault();
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <main id="main">
        {/* 1. MEGA HERO SECTION */}
        <section className="hero relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden py-32">
          <div className="absolute inset-0 z-0">
            <img src="/assets/images/hero-bg-seafront.png" alt="ZYD Factory" className="w-full h-full object-cover opacity-70" />
            <div className="hero-overlay-dark opacity-60"></div>
          </div>
          
          <div className="max-w-[1600px] w-[95%] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="hero-copy reveal">
                <div className="text-blue-400 font-bold tracking-[0.5em] mb-10 uppercase text-sm border-l-4 border-blue-600 pl-6">
                  PRECISION ENGINEERING SINCE 2006
                </div>
                <h1 className="text-6xl lg:text-[130px] font-black leading-none tracking-tighter mb-12 uppercase drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  CRAFTING <br/>
                  <span className="text-blue-500 italic">TRUSTED</span> <br/>
                  SIGNAGE
                </h1>
                <p className="text-2xl text-slate-300 mb-16 max-w-xl leading-relaxed font-medium opacity-90">
                  Global manufacturing leader delivering architectural-grade wayfinding and custom branding for high-end B2B projects.
                </p>
                <div className="flex flex-wrap gap-8">
                  <Link href="/contact" className="button button-green-base px-12 py-5 text-xl">
                    Get a Free Quote
                  </Link>
                  <Link href="/products" className="px-12 py-5 border-2 border-white/20 rounded-full font-black uppercase text-sm hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center">
                    Browse catalog
                  </Link>
                </div>
              </div>

              {/* Featured Industry Card */}
              <div className="reveal relative hidden lg:block">
                <div className="bg-white/5 backdrop-blur-3xl p-16 rounded-[5rem] border border-white/10 shadow-[0_80px_150px_rgba(0,0,0,0.6)] relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="text-blue-400 font-black text-sm uppercase tracking-[0.3em] mb-6 italic">Featured Industry</div>
                  <h3 className="text-5xl font-black mb-10 uppercase tracking-tighter leading-tight text-white">Medical Care <br/>Signage System</h3>
                  <div className="rounded-[3rem] overflow-hidden mb-10 border-4 border-white/10 h-80">
                    <img src="/assets/images/hero-medical.jpg" alt="Medical Signage" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <Link href="/products/medical-care-signage" className="button button-green-base w-full py-5 text-white font-bold rounded-full text-center block text-xl">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Statistics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 pt-20 mt-32 border-t border-white/10 max-w-6xl text-white reveal">
              <div><strong className="block text-6xl lg:text-7xl font-black italic mb-2 text-blue-400 tracking-tighter drop-shadow-sm leading-none">20,000</strong><span className="text-xs uppercase font-black tracking-widest text-slate-400">SQM Factory</span></div>
              <div><strong className="block text-6xl lg:text-7xl font-black italic mb-2 text-blue-400 tracking-tighter drop-shadow-sm leading-none">18+</strong><span className="text-xs uppercase font-black tracking-widest text-slate-400">Years Exp.</span></div>
              <div><strong className="block text-6xl lg:text-7xl font-black italic mb-2 text-blue-400 tracking-tighter drop-shadow-sm leading-none">50+</strong><span className="text-xs uppercase font-black tracking-widest text-slate-400">Countries</span></div>
              <div><strong className="block text-6xl lg:text-7xl font-black italic mb-2 text-blue-400 tracking-tighter drop-shadow-sm leading-none">DDP</strong><span className="text-xs uppercase font-black tracking-widest text-slate-400">Global Shipping</span></div>
            </div>
          </div>
        </section>

        {/* 2. PRODUCTION PROCESS */}
        <section className="section bg-white py-24 lg:py-32">
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
                <div className="absolute -bottom-24 -right-24 bg-slate-950 p-24 lg:p-32 rounded-[6rem] text-white shadow-[0_60px_120px_rgba(0,0,0,0.6),0_20px_0_#050810] border-[12px] border-blue-500/10 transition-all duration-700 hover:scale-[1.05] group/badge overflow-hidden hidden lg:block">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_80%)] blur-[120px] opacity-70 group-hover/badge:opacity-100 transition-opacity"></div>
                  <strong className="relative z-10 text-[200px] font-black block text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-400 to-blue-900 italic mb-4 tracking-tighter leading-none drop-shadow-[0_20px_40px_rgba(30,144,255,0.6)] text-center">100%</strong>
                  <div className="relative z-10 space-y-4 text-center">
                    <span className="text-3xl lg:text-4xl uppercase font-black tracking-[0.8em] text-white block ml-[0.8em] drop-shadow-lg">In-House</span>
                    <span className="text-xl lg:text-2xl uppercase font-black tracking-[0.6em] text-slate-500 block opacity-70 ml-[0.6em]">Manufacturing</span>
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
