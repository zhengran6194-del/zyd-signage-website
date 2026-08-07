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

  const handleWhatsApp = (e: any, message: string) => {
    if (e) e.preventDefault();
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

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
      <Header />
      <main id="main">
        {/* 1. REFINED HERO */}
        <section className="hero relative flex items-center bg-slate-950 text-white overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img src="/assets/images/hero-bg-seafront.png" alt="ZYD Factory" className="w-full h-full object-cover opacity-60" />
            <div className="hero-overlay-dark"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="reveal">
                <div className="text-blue-400 font-bold tracking-[0.3em] uppercase text-xs mb-4">Precision Engineering Since 2006</div>
                <h1 className="mb-6 uppercase">Precision Built <br/><span className="text-blue-500 italic font-medium">B2B Signage</span> Solutions</h1>
                <p className="text-lg text-slate-300 mb-10 font-medium leading-relaxed opacity-90">
                  A 20,000sqm manufacturing powerhouse delivering architectural-grade wayfinding and custom identification systems with Global DDP capabilities.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact" className="button-green-base">Get a Free Quote</Link>
                  <Link href="/products" className="px-8 py-3 border border-white/20 rounded font-bold uppercase text-[12px] hover:bg-white hover:text-slate-950 transition-all">Explore Catalog</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PRODUCTION PROCESS (Restored) */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center mb-16 reveal">
              <div className="text-blue-600 font-bold uppercase text-xs tracking-widest mb-2">The ZYD Way</div>
              <h2 className="mb-4">Our 8-Step Manufacturing Process</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Ensuring absolute compliance and durability for large-scale international projects.</p>
            </div>
            <div className="step-grid">
              {steps.map((s, i) => (
                <div key={i} className="step-card reveal">
                  <div className="step-no">{s.no}</div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 uppercase">{s.title}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. QUALITY & COMPLIANCE (New Section) */}
        <section className="section bg-slate-50 border-y border-slate-100">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="reveal">
                <h2 className="mb-6 uppercase tracking-tighter">Global Compliance & <br/>Quality Standards</h2>
                <p className="text-slate-600 mb-10 text-lg leading-relaxed">We adhere to the highest international certifications to guarantee structural integrity and electrical safety in any environment.</p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'ISO 9001:2015', desc: 'Quality Management' },
                    { label: 'CE Certified', desc: 'Electrical Compliance' },
                    { label: 'SGS Inspected', desc: 'Factory Standards' },
                    { label: 'UL Components', desc: 'Premium Components' },
                  ].map((cert, idx) => (
                    <div key={idx} className="p-5 bg-white border border-slate-100 rounded-lg shadow-sm">
                      <div className="font-black text-blue-600 text-sm mb-1">{cert.label}</div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{cert.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal relative">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img src="/assets/images/factory-overview.jpg" alt="Factory QC" className="w-full h-[450px] object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-slate-950 p-8 rounded-2xl text-white shadow-2xl hidden lg:block">
                  <strong className="text-3xl font-black block text-blue-400 italic mb-1 tracking-tighter">20,000㎡</strong>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Capacity Leader</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRODUCTS PREVIEW */}
        <section className="section bg-white">
          <div className="container">
            <div className="flex justify-between items-end mb-16 reveal">
              <div>
                <h2 className="uppercase tracking-tighter">Signage Solutions</h2>
                <p className="text-slate-500 font-medium mt-2">Bespoke manufacturing for architectural projects.</p>
              </div>
              <Link href="/products" className="text-blue-600 font-bold uppercase text-[12px] tracking-widest border-b-2 border-blue-100 hover:border-blue-600 transition-all pb-1">
                View Full Catalog &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Halo-Lit Letters', img: 'cat-illuminated.webp', id: 'custom-halo-lit-letters' },
                { title: 'Wayfinding Systems', img: 'hero-wayfinding.png', id: 'architectural-wayfinding-system' },
                { title: 'Monument Signs', img: 'cat-outdoor.webp', id: 'outdoor-pylon-monument-sign' },
                { title: 'LED Light Boxes', img: 'cat-lightbox.webp', id: 'ultra-slim-led-light-box' },
              ].map((p, i) => (
                <div key={i} className="reveal group">
                  <div className="overflow-hidden rounded-xl mb-4 h-64 bg-slate-100 border border-slate-50">
                    <img src={`/assets/images/${p.img}`} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-black text-slate-900 mb-2 uppercase text-sm">{p.title}</h4>
                  <Link href={`/products/${p.id}`} className="text-[11px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">Details</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section id="contact" className="section bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src="/assets/images/grid-pattern.svg" alt="Pattern" className="w-full h-full object-cover" />
          </div>
          <div className="container relative z-10 text-center max-w-2xl">
            <div className="reveal">
              <h2 className="mb-6 uppercase">Ready to Start Your <br/>Next Signage Project?</h2>
              <p className="text-slate-400 mb-10 text-lg">Contact our engineering team for expert technical support and factory-direct pricing.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  className="button-green-base px-12 py-4"
                  onClick={(e) => handleWhatsApp(e, "Hi Aaron, I want to start a custom signage project.")}
                >
                  Start WhatsApp Chat
                </button>
                <Link href="/contact" className="px-12 py-4 border border-white/20 rounded font-bold uppercase text-[14px] hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
