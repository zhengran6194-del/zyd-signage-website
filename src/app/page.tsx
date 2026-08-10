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
      desc: 'Expert analysis of signage requirements and site conditions.',
      icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    },
    { 
      no: '02', 
      title: '3D Mockup', 
      desc: 'Visualizing final aesthetics with high-fidelity industrial 3D renderings.',
      icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v10m0 0l-8-4m8 4l8-4m-8 4L4 17" /></svg>
    },
    { 
      no: '03', 
      title: 'Engineering', 
      desc: 'Detailed shop drawings for structural integrity and electrical systems.',
      icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    },
    { 
      no: '04', 
      title: 'Fabrication', 
      desc: 'High-precision cutting and assembly using advanced automation.',
      icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    { 
      no: '05', 
      title: 'Auto Coating', 
      desc: 'Dust-free finish application for 10+ years of weather resistance.',
      icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    },
    { 
      no: '06', 
      title: 'LED Integration', 
      desc: 'Multi-point wiring with high-efficiency Samsung/Epistar modules.',
      icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    { 
      no: '07', 
      title: 'Quality Trial', 
      desc: 'Rigorous multi-stage QC including extended illumination trials.',
      icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    { 
      no: '08', 
      title: 'Global Delivery', 
      desc: 'Secure industrial crating and global door-to-door logistics.',
      icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
    },
  ];

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
                <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-12 uppercase drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  CRAFTING <br/>
                  <span className="text-blue-500 italic">TRUSTED</span> <br/>
                  SIGNAGE
                </h1>
                <p className="text-xl text-slate-300 mb-16 max-w-xl leading-relaxed font-medium opacity-90">
                  Global manufacturing leader delivering architectural-grade wayfinding and custom branding for high-end B2B projects.
                </p>
                <div className="flex flex-wrap gap-8">
                  <Link href="/contact" className="button button-green-base px-10 py-3 text-base">
                    Get a Free Quote
                  </Link>
                  <Link href="/products" className="px-10 py-3 border-2 border-white/20 rounded-full font-black uppercase text-sm hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center">
                    Browse catalog
                  </Link>
                </div>
              </div>

              {/* RIGHT SIDE: COMMERCIAL PROJECTS CARD */}
              <div className="reveal relative hidden lg:block">
                <div className="bg-[#0b1a33]/90 backdrop-blur-3xl p-10 lg:p-12 rounded-3xl border border-white/10 shadow-[0_80px_150px_rgba(0,0,0,0.6)] relative group overflow-hidden scale-[0.85] origin-right">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="mb-8 relative z-10">
                    <div className="text-blue-400 font-black text-[11px] uppercase tracking-[0.3em] mb-4 italic">FOR COMMERCIAL PROJECTS</div>
                    <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter leading-tight">Your Complete <br/>Signage Partner</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium max-w-sm">
                      From illuminated letters and light boxes to complete wayfinding and outdoor signage systems — engineered and manufactured directly from our factory.
                    </p>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-widest border-l-2 border-blue-500/50 pl-4 py-1">
                      Free 3D Mockup &middot; Engineering Support &middot; Global Delivery
                    </div>
                  </div>

                  {/* 3-Image Grid Layout */}
                  <div className="grid grid-cols-2 gap-4 mb-8 h-48 relative z-10">
                    <div className="overflow-hidden rounded-2xl border border-white/5 h-full">
                      <img src="/assets/images/cat-illuminated.webp" alt="Building Signage" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <div className="grid grid-rows-2 gap-4 h-full">
                      <div className="overflow-hidden rounded-2xl border border-white/5 h-full">
                        <img src="/assets/images/cat-wayfinding.webp" alt="Wayfinding" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      </div>
                      <div className="overflow-hidden rounded-2xl border border-white/5 h-full">
                        <img src="/assets/images/cat-outdoor.webp" alt="Monument Sign" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end relative z-10">
                    <Link href="/products" className="text-blue-400 font-black text-sm uppercase tracking-widest hover:text-blue-300 transition-colors flex items-center gap-2 group/cta">
                      EXPLORE SOLUTIONS <span className="group-hover/cta:translate-x-1 transition-transform">→</span>
                    </Link>
                    <div className="text-[10px] text-slate-500 font-bold italic flex gap-4 uppercase tracking-tighter">
                      <span>Custom Design</span>
                      <span>Factory Direct</span>
                      <span>Worldwide Delivery</span>
                    </div>
                  </div>
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

        {/* 2. THE ZYD WAY: PRODUCTION PROCESS (Artistic Grid) */}
        <section className="section bg-white py-32 lg:py-48">
          <div className="container">
            <div className="text-center mb-24 reveal">
              <div className="text-blue-600 font-bold uppercase text-[11px] tracking-[0.4em] mb-4">Industrial Excellence</div>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-950 uppercase tracking-tighter mb-6">Our 8-Step <br className="lg:hidden"/>Fabrication Journey</h2>
              <p className="text-slate-500 max-w-3xl mx-auto text-lg font-medium leading-relaxed">Combining artisanal craftsmanship with robotic precision to ensure zero-defect signage delivery.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {steps.map((s, i) => (
                <div key={i} className="step-card reveal group/card">
                  <div className="flex justify-between items-start w-full mb-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover/card:bg-blue-600 group-hover/card:text-white transition-all duration-500 shadow-sm border border-slate-100">
                      {s.icon}
                    </div>
                    <span className="text-4xl font-black text-slate-100 italic tracking-tighter group-hover/card:text-blue-50 transition-colors duration-500 leading-none">{s.no}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover/card:text-blue-600 transition-colors">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover/card:text-slate-600 transition-colors">{s.desc}</p>
                  
                  <div className="mt-8 pt-8 border-t border-slate-50 w-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                    <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. QUALITY & COMPLIANCE */}
        <section className="section bg-slate-50 border-y border-slate-100 py-20 lg:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
              <div className="reveal max-w-xl">
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
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white max-w-lg ml-auto">
                  <img src="/assets/images/factory-overview.jpg" alt="Factory QC" className="w-full h-[400px] object-cover" />
                </div>
                <div className="absolute bottom-6 right-6 bg-slate-950 p-6 lg:p-8 rounded-[3rem] text-white shadow-[0_20px_40px_rgba(0,0,0,0.5),0_10px_0_#070a14] border-[6px] border-blue-500/10 transition-all duration-700 hover:scale-[1.05] group/badge overflow-hidden hidden lg:block">
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
