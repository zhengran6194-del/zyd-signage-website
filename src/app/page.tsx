'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    },
    { 
      no: '02', 
      title: 'Precision 3D Mockup', 
      desc: 'Visualizing final aesthetics with industrial-grade 3D renderings.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v10m0 0l-8-4m8 4l8-4m-8 4L4 17" /></svg>
    },
    { 
      no: '03', 
      title: 'Shop Drawing', 
      desc: 'Detailed engineering schematics for structural and electrical systems.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    },
    { 
      no: '04', 
      title: 'CNC Fabrication', 
      desc: 'High-precision cutting and assembly using advanced automation.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    { 
      no: '05', 
      title: 'Automotive Coating', 
      desc: 'Dust-free finish application for 10+ years of weather resistance.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    },
    { 
      no: '06', 
      title: 'LED Integration', 
      desc: 'Multi-point wiring with high-efficiency Samsung/Epistar modules.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    { 
      no: '07', 
      title: '48H Burn-in Test', 
      desc: 'Rigorous multi-stage QC including extended illumination trials.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    { 
      no: '08', 
      title: 'Global DDP Shipping', 
      desc: 'Secure industrial crating and door-to-door logistics management.',
      icon: <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
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
        {/* 1. MEGA HERO SECTION (Image 2) */}
        <section className="hero relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden py-32">
          <div className="absolute inset-0 z-0">
            <img src="/assets/images/hero-bg-factory-aerial.jpg" alt="ZYD Factory Aerial" className="w-full h-full object-cover opacity-70" />
            <div className="hero-overlay-dark opacity-40"></div>
          </div>
          
          <div className="max-w-[1600px] w-[95%] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-24">
              <div className="hero-copy reveal">
                <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-8 uppercase text-white">
                  Premium Custom Signage <br/>
                  Solutions Direct from Factory.
                </h1>
                <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-xl leading-relaxed font-medium">
                  20 Years Expertise. We provide One-Stop Signage Systems for Hotels, Commercial Spaces, and Industrial Parks. Durable in all environments.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link href="/contact" className="button button-green-base px-10 py-5 text-lg rounded-md">
                    Get My Free 3D Mockup & Quote →
                  </Link>
                  <Link href="/products" className="px-10 py-5 border-2 border-white/20 rounded-md font-black uppercase text-sm hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center">
                    Explore Solutions
                  </Link>
                </div>
              </div>

              {/* RIGHT CARD: SIGNAGE SOLUTIONS */}
              <div className="reveal relative hidden lg:block">
                <div className="bg-[#0b1a33]/80 backdrop-blur-2xl p-12 rounded-[2rem] border border-white/10 shadow-[0_80px_150px_rgba(0,0,0,0.6)] relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="mb-8 relative z-10">
                    <div className="text-green-400 font-black text-[12px] uppercase tracking-[0.3em] mb-4">SIGNAGE SOLUTIONS</div>
                    <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Custom Signage <br/>Systems</h3>
                    <p className="text-slate-300 text-base leading-relaxed mb-8 font-medium">
                      Wayfinding, illuminated signs, and outdoor signs for commercial projects.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {['Wayfinding', 'Illuminated Signs', 'Outdoor Signs'].map((chip, idx) => (
                        <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-200 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Bar (Image 2) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 py-12 border-y border-white/10 max-w-6xl text-white reveal mt-auto">
              {[
                { val: 'EST. 2006' },
                { val: '20,000m² PRODUCTION BASE' },
                { val: 'GLOBAL DDP SHIPPING' },
                { val: 'QUALITY GUARANTEE' }
              ].map((item, idx) => (
                <div key={idx} className="text-center md:text-left border-l border-white/5 pl-8 first:border-none">
                  <strong className="block text-xl lg:text-2xl font-black tracking-tight text-white uppercase">{item.val}</strong>
                </div>
              ))}
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

        {/* 3. QUALITY & COMPLIANCE (Image 1) */}
        <section className="section bg-slate-50 border-y border-slate-100 py-20 lg:py-32 overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
              <div className="reveal max-w-xl">
                <div className="text-blue-600 font-bold uppercase text-xs tracking-widest mb-4">Quality Assurance</div>
                <h2 className="mb-6 uppercase tracking-tighter text-slate-900 leading-tight">Global Compliance & <br/>Quality Standards</h2>
                <p className="text-slate-600 mb-10 text-lg leading-relaxed font-medium">We adhere to the highest international certifications to guarantee structural integrity and electrical safety in any environment.</p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'ISO 9001:2015', desc: 'Quality Management' },
                    { label: 'CE Certified', desc: 'Electrical Compliance' },
                    { label: 'SGS Inspected', desc: 'Factory Standards' },
                    { label: 'UL Components', desc: 'Premium Components' },
                  ].map((cert, idx) => (
                    <div key={idx} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <div className="font-black text-blue-600 text-base mb-1">{cert.label}</div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{cert.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="reveal relative flex justify-end">
                <div className="rounded-[3rem] overflow-hidden shadow-3xl border-8 border-white w-[85%]">
                  <img src="/assets/images/factory-overview.jpg" alt="Factory QC" className="w-full h-[550px] object-cover" />
                </div>
                
                {/* Right Floating Vertical Card (Image 1) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-950 p-10 rounded-[3rem] text-white shadow-[0_50px_100px_rgba(0,0,0,0.4)] border border-white/10 w-[45%] z-20">
                  <div className="space-y-10">
                    {[
                      { t: 'Factory Direct', d: 'In-House Production' },
                      { t: '18+ Years', d: 'Industry Experience' },
                      { t: 'ISO Quality', d: 'Certified Processes' },
                      { t: 'Global Delivery', d: 'Reliable Worldwide Supply' }
                    ].map((item, idx) => (
                      <div key={idx} className="border-l-4 border-blue-500 pl-6">
                        <div className="text-blue-400 font-black text-sm uppercase tracking-widest mb-1">{item.t}</div>
                        <div className="text-white font-bold text-base leading-tight">{item.d}</div>
                      </div>
                    ))}
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
                <h2 className="uppercase tracking-tighter text-slate-900">Signage Solutions</h2>
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
