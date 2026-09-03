'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const virtualFactoryTourUrl = 'https://dlzydbs.en.alibaba.com/view/showroom/immersed.htm?model_id=7608030&member_id=284928014&ali_id=2500000111235&vaccount_id=291300719&wx_navbar_transparent=true&_aplus_page_enable=true&model=ailab&model_source=ailab&oss_key=e2c67502-933e-451f-a79c-6e63f1e5ea4f';

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
      icon: <svg className="w-12 h-12 mb-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    },
    { 
      no: '02', 
      title: 'Precision 3D Mockup', 
      desc: 'Visualizing final aesthetics with industrial-grade 3D renderings.',
      icon: <svg className="w-12 h-12 mb-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v10m0 0l-8-4m8 4l8-4m-8 4L4 17" /></svg>
    },
    { 
      no: '03', 
      title: 'Shop Drawing', 
      desc: 'Detailed engineering schematics for structural and electrical systems.',
      icon: <svg className="w-12 h-12 mb-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    },
    { 
      no: '04', 
      title: 'CNC Fabrication', 
      desc: 'High-precision cutting and assembly using advanced automation.',
      icon: <svg className="w-12 h-12 mb-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    { 
      no: '05', 
      title: 'Automotive Coating', 
      desc: 'Dust-free finish application for 10+ years of weather resistance.',
      icon: <svg className="w-12 h-12 mb-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    },
    { 
      no: '06', 
      title: 'LED Integration', 
      desc: 'Multi-point wiring with high-efficiency Samsung/Epistar modules.',
      icon: <svg className="w-12 h-12 mb-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    { 
      no: '07', 
      title: '48H Burn-in Test', 
      desc: 'Rigorous multi-stage QC including extended illumination trials.',
      icon: <svg className="w-12 h-12 mb-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    { 
      no: '08', 
      title: 'Global DDP Shipping', 
      desc: 'Secure industrial crating and door-to-door logistics management.',
      icon: <svg className="w-12 h-12 mb-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
    },
  ];

  return (
    <>
      <main id="main">
        {/* 1. MEGA HERO SECTION (Image 2) */}
        <section className="hero relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden py-32">
          <div className="absolute inset-0 z-0">
            <img src="/assets/images/hero-bg-factory-aerial.jpg" alt="ZYD Factory Aerial" width={1920} height={1080} loading="eager" fetchPriority="high" className="w-full h-full object-cover opacity-80" />
            <div className="hero-overlay-dark opacity-30"></div>
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
                    <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">Commercial <br/>Signage Solutions</h3>
                    <p className="text-slate-300 text-base leading-relaxed mb-8 font-medium">
                      Wayfinding, illuminated signs, and outdoor signs for commercial projects.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: 'Wayfinding', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
                        { name: 'Illuminated Signs', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> },
                        { name: 'Outdoor Signs', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> }
                      ].map((chip, idx) => (
                        <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-200 flex items-center gap-2">
                          <span className="text-green-500">{chip.icon}</span>
                          {chip.name}
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
        <section className="section bg-slate-100 py-32 lg:py-48">
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

        {/* 3. INSIDE OUR FACTORY */}
        <section className="section bg-slate-100 py-24 lg:py-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="reveal max-w-xl">
                <div className="text-blue-600 font-black uppercase text-[10px] tracking-[0.4em] mb-5 border-l-2 border-blue-600 pl-4">INSIDE OUR FACTORY</div>
                <h2 className="text-5xl lg:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-[0.95] mb-8">See Your Signage Being Made — Live.</h2>
                <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10">From precision cutting to final quality checks, see how your signage moves through our factory before it reaches your project site.</p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hi Aaron, I would like to arrange a full factory tour and discuss a signage project.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-green-base"
                  >
                    Full Factory Tour
                  </a>
                  <Link href="/contact" className="button-green-base">Get Free Quote</Link>
                </div>
              </div>
              <div className="reveal relative group">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50 aspect-[4/3] bg-slate-100">
                  <video
                    src="/assets/videos/factory-live.mp4"
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/assets/images/factory-video-poster.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. QUALITY & COMPLIANCE (Refined Image 2 Proportions) */}
        <section className="section bg-slate-50 border-y border-slate-100 py-20 lg:py-32 overflow-hidden">
          <div className="max-w-[1600px] w-[95%] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-24 lg:gap-32 items-center">
              <div className="reveal max-w-xl">
                <div className="text-blue-600 font-black uppercase text-[10px] tracking-[0.4em] mb-4 border-l-2 border-blue-600 pl-4">Quality Assurance</div>
                <h2 className="mb-6 uppercase tracking-tighter text-slate-900 leading-[0.95] text-5xl lg:text-6xl">Global <br/>Compliance & <br/>Quality Standards</h2>
                <p className="text-slate-500 mb-12 text-lg leading-relaxed font-medium opacity-80">We adhere to the highest international certifications to guarantee structural integrity and electrical safety in any environment.</p>
                <div className="grid grid-cols-2 gap-4 lg:gap-5">
                  {[
                    { label: 'ISO 9001:2015', desc: 'Quality Management' },
                    { label: 'CE Certified', desc: 'Electrical Compliance' },
                    { label: 'SGS Inspected', desc: 'Factory Standards' },
                    { label: 'UL Components', desc: 'Premium Components' },
                  ].map((cert, idx) => (
                    <div key={idx} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="font-black text-blue-600 text-base mb-1">{cert.label}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{cert.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="reveal relative flex justify-end">
                <div className="rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-[12px] border-white w-full aspect-square lg:aspect-[4/3]">
                  <img src="/assets/images/factory-overview.jpg" alt="Factory QC" width={1200} height={800} loading="lazy" className="w-full h-full object-cover" />
                </div>
                
                {/* Right Floating Vertical Card (Image 2 Proportions) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-10 lg:p-14 py-20 rounded-[3.5rem] shadow-[0_60px_120px_rgba(10,39,84,0.12)] border border-white w-[38%] z-20">
                  <div className="space-y-16">
                    {[
                      { 
                        t: 'Factory Direct', 
                        d: 'In-House Production', 
                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 7v1h18V7l-2-4H5L3 7zM19 8v10M5 8v10M9 8v10M15 8v10"/></svg> 
                      },
                      { 
                        t: '18+ Years', 
                        d: 'Industry Experience', 
                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 
                      },
                      { 
                        t: 'ISO Quality', 
                        d: 'Certified Processes', 
                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> 
                      },
                      { 
                        t: 'Global Delivery', 
                        d: 'Reliable Worldwide Supply', 
                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> 
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-6 group">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-slate-950 font-black text-[14px] uppercase tracking-wider mb-1 leading-tight">{item.t}</div>
                          <div className="text-slate-400 font-bold text-[11px] leading-tight opacity-80">{item.d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. GLOBAL SIGNAGE POSTER */}
        <section className="bg-slate-100 py-8 px-0 lg:py-12">
          <div className="reveal w-full border-y border-slate-200 bg-slate-950 shadow-[0_35px_100px_rgba(10,39,84,0.16)]">
            <img
              src="/assets/images/global-signage-poster-wide.jpg"
              alt="ZYD custom signage and architectural sign collection"
              width={1327}
              height={726}
              loading="lazy"
              className="block h-auto w-full"
            />
          </div>
        </section>

        {/* 5. PRODUCTS PREVIEW */}
        <section className="section bg-slate-100 py-20 lg:py-24">
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
                { title: 'Halo-Lit Letters', img: 'cat-illuminated.webp' },
                { title: 'Wayfinding Systems', img: 'hero-wayfinding.png' },
                { title: 'Monument Signs', img: 'cat-outdoor.webp' },
                { title: 'LED Light Boxes', img: 'cat-lightbox.webp' },
                { title: 'LED Neon Signs', img: 'cat-neon.webp' },
                { title: 'Metal & Acrylic Signs', img: 'cat-metal.webp' },
                { title: 'Landscape & Furniture', img: 'landscape-bench.jpg' },
                { title: 'Complete Systems', img: 'cat-system.webp' },
              ].map((p, i) => (
                <Link href="/products" key={i} className="reveal group block">
                  <div className="overflow-hidden rounded-xl mb-4 h-60 bg-slate-100 border border-slate-50">
                    <img src={`/assets/images/${p.img}`} alt={p.title} width={1200} height={800} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-black text-slate-900 mb-1 uppercase text-xs">{p.title}</h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                    <span>MOQ: 1</span>
                    <span>Lead Time: 7–14 days</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">Details</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. 360° VIRTUAL FACTORY TOUR */}
        <section className="section bg-slate-100 py-20 lg:py-28">
          <div className="container">
            <div className="rounded-[2rem] bg-slate-950 p-6 lg:p-10 shadow-[0_30px_90px_rgba(10,39,84,0.14)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <a
                    href={virtualFactoryTourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View the interactive Alibaba virtual factory tour"
                    className="group block overflow-hidden rounded-[1.5rem] border border-white/15 bg-slate-900 shadow-2xl"
                  >
                    <img
                      src="/assets/images/vr-tour-preview.jpg"
                      alt="Preview of the interactive ZYD virtual factory tour"
                      width={1308}
                      height={484}
                      loading="lazy"
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                </div>
                <div className="order-1 lg:order-2 text-white">
                  <div className="text-blue-300 font-black uppercase text-[10px] tracking-[0.35em] mb-4">Step Inside Our Facility</div>
                  <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-5">360° Virtual Factory Tour</h2>
                  <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-medium mb-8">Explore our signage production environment online, then connect with the team behind your next project.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={virtualFactoryTourUrl} target="_blank" rel="noopener noreferrer" className="button button-green-base px-7 py-3 text-center">View Interactive Tour</a>
                    <span className="flex items-center text-xs font-bold text-slate-400">Click the preview or button to open the full VR tour.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FACTORY DIRECT ADVANTAGES */}
        <section className="section bg-slate-100 py-20 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-stretch">
              <div className="reveal relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-900 text-white">
                <img
                  src="/assets/images/hero-bg-factory-aerial.jpg"
                  alt="ZYD signage manufacturing facility"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent"></div>
                <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-8 lg:p-12">
                  <div className="text-blue-300 font-black uppercase text-[10px] tracking-[0.35em] mb-4">Factory Direct Signage</div>
                  <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-5">Built at the Source.</h2>
                  <p className="max-w-lg text-slate-200 text-base lg:text-lg leading-relaxed font-medium">From technical coordination to final quality checks, keep your signage project connected to the team that makes it.</p>
                </div>
              </div>
              <div className="reveal rounded-[2rem] bg-white border border-slate-200 p-8 lg:p-12 shadow-[0_30px_80px_rgba(10,39,84,0.08)]">
                <div className="max-w-xl">
                  <div className="text-blue-600 font-black uppercase text-[10px] tracking-[0.35em] mb-4">Why Work Direct?</div>
                  <h2 className="text-3xl lg:text-4xl font-black text-slate-950 uppercase tracking-tight leading-tight mb-5">One partner for your signage program.</h2>
                  <p className="text-slate-500 text-base lg:text-lg leading-relaxed font-medium mb-8">Coordinate custom signage with factory production, established quality processes, and worldwide delivery support in one streamlined workflow.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { t: 'Factory Direct', d: 'In-House Production', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 7v1h18V7l-2-4H5L3 7zM19 8v10M5 8v10M9 8v10M15 8v10"/></svg> },
                      { t: '18+ Years', d: 'Industry Experience', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
                      { t: 'ISO Quality', d: 'Certified Processes', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
                      { t: 'Global Delivery', d: 'Reliable Worldwide Supply', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
                    ].map((item) => (
                      <div key={item.t} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">{item.icon}</div>
                        <div>
                          <div className="text-slate-950 font-black text-xs uppercase tracking-wider mb-1">{item.t}</div>
                          <div className="text-slate-400 font-bold text-[10px] uppercase tracking-wide">{item.d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="button button-green-base mt-8 px-8 py-3">Discuss Your Signage Project</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PEOPLE BEHIND THE SIGNAGE */}
        <section className="section bg-slate-100 py-20 lg:py-28">
          <div className="container">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 reveal">
              <div className="max-w-3xl">
                <div className="text-blue-600 font-black uppercase text-[10px] tracking-[0.35em] mb-4">People Behind the Signage</div>
                <h2 className="text-4xl lg:text-6xl font-black text-slate-950 uppercase tracking-tight leading-[0.95] mb-5">Craftsmanship starts with people.</h2>
                <p className="text-slate-500 text-base lg:text-lg leading-relaxed font-medium">The signs we make are shaped by the people who plan, build, review, and deliver them. Our shared work, training, and time together keep collaboration close to every project.</p>
              </div>
              <div className="text-slate-400 text-xs font-black uppercase tracking-[0.25em] lg:max-w-xs lg:text-right">Team culture / Practical craft / Client-focused collaboration</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 items-stretch">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="reveal sm:row-span-2 bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
                  <img src="/assets/images/team-collage.jpg" alt="ZYD team and signage production equipment collage" width={939} height={913} loading="lazy" className="w-full h-full min-h-[360px] object-cover" />
                </div>
                <div className="reveal bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
                  <img src="/assets/images/team-annual-event.jpg" alt="ZYD team gathered at an annual company event" width={5863} height={3909} loading="lazy" className="w-full h-64 object-cover" />
                </div>
                <div className="reveal bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
                  <img src="/assets/images/team-outdoor.jpg" alt="ZYD team gathered outdoors with a company banner" width={5950} height={3967} loading="lazy" className="w-full h-64 object-cover" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 content-start">
                <div className="reveal col-span-2 bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
                  <img src="/assets/images/team-training.jpg" alt="Team members attending a signage training and display session" width={6000} height={4000} loading="lazy" className="w-full h-72 object-cover" />
                </div>
                <div className="reveal bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
                  <img src="/assets/images/team-group-small.jpg" alt="ZYD team group photo at a company gathering" width={320} height={213} loading="lazy" className="w-full h-40 object-cover" />
                </div>
                <div className="reveal bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
                  <img src="/assets/images/team-group-green.jpg" alt="ZYD team group photo in coordinated work shirts" width={320} height={213} loading="lazy" className="w-full h-40 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CALL TO ACTION */}
        <section id="contact" className="section bg-slate-950 text-white relative overflow-hidden py-24">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src="/assets/images/grid-pattern.svg" alt="Pattern" width={1200} height={800} loading="lazy" className="w-full h-full object-cover" />
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
