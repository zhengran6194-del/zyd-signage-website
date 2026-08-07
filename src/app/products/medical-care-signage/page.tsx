'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function MedicalSignagePage() {
  const handleWhatsApp = (message: string) => {
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Header />
      <main id="main">
        {/* Product Hero */}
        <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal visible">
              <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter">
                Medical <span className="text-blue-500 italic">Care</span> <br/>Signage System
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-xl">
                Advanced antibacterial wayfinding and identification solutions for hospitals, clinics, and healthcare centers. 20+ years of precision manufacturing.
              </p>
              <button 
                onClick={() => handleWhatsApp("Hi Aaron, I am interested in Healthcare Signage Solutions.")}
                className="button button-green-base px-10 py-5 rounded-full text-white font-black text-xl flex items-center gap-4"
              >
                CONSULT PROJECT ENGINEER
              </button>
            </div>
            <div className="reveal visible">
              <img src="/assets/images/hero-medical.jpg" alt="Medical Signage" className="rounded-[3rem] shadow-2xl border-4 border-white/10" />
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="section bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-black text-slate-900 mb-12 uppercase">Technical Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-4 tracking-widest uppercase italic">Hygiene Standards</h3>
                <p className="text-slate-600 leading-relaxed font-medium">We use medical-grade 304 stainless steel and non-porous acrylics with optional antimicrobial coatings to prevent bacteria spread in sterile zones.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-4 tracking-widest uppercase italic">ADA Compliance</h3>
                <p className="text-slate-600 leading-relaxed font-medium">Full integration of Braille, tactile lettering, and high-contrast color palettes to meet international accessibility requirements.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
