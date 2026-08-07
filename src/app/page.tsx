'use client';

import React, { useEffect, useState } from 'react';
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
    { no: '01', title: 'Consultation', desc: 'Detailed requirement analysis and technical feasibility study.' },
    { no: '02', title: '3D Mockup', desc: 'Visualizing your project with professional 3D renderings.' },
    { no: '03', title: 'Engineering', desc: 'Precision structural and electrical shop drawings.' },
    { no: '04', title: 'Fabrication', desc: 'Advanced CNC cutting, welding, and metal assembly.' },
    { no: '05', title: 'Painting', desc: 'Clean-room automotive-grade finish application.' },
    { no: '06', title: 'LED Wiring', desc: 'Integration of high-output modules and controllers.' },
    { no: '07', title: 'Quality Control', desc: 'Multi-stage testing including 48-hour lighting trial.' },
    { no: '08', title: 'DDP Shipping', desc: 'Secure packaging and global door-to-door delivery.' },
  ];

  return (
    <>
      <Header />
      <main id="main">
        {/* 1. REFINED HERO */}
        <section className="hero relative flex items-center bg-slate-950 text-white overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img src="/assets/images/hero-bg-seafront.png" alt="ZYD Factory" className="w-full h-full object-cover opacity-50" />
            <div className="hero-overlay-dark"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="reveal">
                <div className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4">Established 2006</div>
                <h1 className="mb-6">Precision Architectural <br/><span className="text-blue-500 italic">Signage</span> Engineering</h1>
                <p className="text-lg text-slate-300 mb-10 font-medium leading-relaxed">
                  A premium 20,000sqm manufacturing powerhouse delivering custom wayfinding and branding systems with Global DDP capabilities.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact" className="button-green-base">Get a Free Quote</Link>
                  <Link href="/products" className="px-8 py-3 border border-white/30 rounded font-bold uppercase text-xs hover:bg-white hover:text-slate-900 transition-all">View Solutions</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE ZYD WAY: PRODUCTION PROCESS */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center mb-16 reveal">
              <div className="text-blue-600 font-bold uppercase text-xs tracking-widest mb-2">Our Workflow</div>
              <h2 className="mb-4">The 8-Step Manufacturing Process</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Ensuring ±0.1mm tolerance and 100% project compliance from design to delivery.</p>
            </div>
            <div className="step-grid">
              {steps.map((s, i) => (
                <div key={i} className="step-card reveal">
                  <div className="step-no">{s.no}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. QUALITY & CERTIFICATIONS */}
        <section className="section bg-slate-950 text-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="reveal">
                <h2 className="mb-6">Global Compliance & <br/>Quality Certifications</h2>
                <p className="text-slate-400 mb-10 text-lg">We adhere to the highest international standards to ensure durability in extreme climates (-40°C to +60°C).</p>
                <div className="grid grid-cols-3 gap-6">
                  {['ISO 9001:2015', 'CE Certified', 'SGS Inspected'].map((cert, idx) => (
                    <div key={idx} className="p-4 border border-white/10 rounded-lg text-center bg-white/5">
                      <div className="font-black text-blue-400 text-xs mb-1">CERTIFIED</div>
                      <div className="text-[10px] font-bold uppercase tracking-tighter text-slate-300">{cert}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src="/assets/images/factory-overview.jpg" alt="Certification" className="w-full h-80 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRODUCTS PREVIEW */}
        <section className="section bg-slate-50">
          <div className="container">
            <div className="text-center mb-16 reveal">
              <h2 className="mb-4 text-slate-900">Signage Solutions</h2>
              <Link href="/products" className="text-blue-600 font-bold uppercase text-xs tracking-widest hover:gap-2 flex items-center justify-center gap-1 transition-all">
                Browse Full Catalog <span>&rarr;</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Halo-Lit Letters', img: 'cat-illuminated.webp', id: 'custom-halo-lit-letters' },
                { title: 'Wayfinding Systems', img: 'hero-wayfinding.png', id: 'architectural-wayfinding-system' },
                { title: 'Monument Signs', img: 'cat-outdoor.webp', id: 'outdoor-pylon-monument-sign' },
                { title: 'LED Light Boxes', img: 'cat-lightbox.webp', id: 'ultra-slim-led-light-box' },
              ].map((p, i) => (
                <div key={i} className="reveal bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all group">
                  <div className="overflow-hidden rounded-lg mb-4 h-48 bg-slate-100">
                    <img src={`/assets/images/${p.img}`} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-4">{p.title}</h4>
                  <Link href={`/products/${p.id}`} className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Details</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FINAL CONTACT */}
        <section id="contact" className="section bg-white border-t border-slate-100">
          <div className="container max-w-4xl">
            <div className="text-center mb-12 reveal">
              <h2 className="text-slate-900 mb-4">Start Your B2B Project</h2>
              <p className="text-slate-500 font-medium">Direct factory communication for fast-track quoting.</p>
            </div>
            <div className="reveal">
              <button 
                className="button-green-base w-full py-5 text-xl mb-8"
                onClick={(e) => handleWhatsApp(e, "Hi Aaron, I would like to request a signage quote.")}
              >
                Chat on WhatsApp
              </button>
              <div className="text-center text-slate-400 font-bold text-xs uppercase tracking-widest">
                Email: {siteConfig.salesEmail} | WhatsApp: +{siteConfig.whatsappNumber}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
