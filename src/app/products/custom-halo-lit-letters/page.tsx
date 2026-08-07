'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function HaloLitLettersPage() {
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

  const handleWhatsApp = (message: string) => {
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Header />
      <main id="main">
        {/* Product Hero */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="reveal">
              <div className="breadcrumbs text-slate-400 text-sm mb-6">
                <a href="/" className="hover:text-white">Home</a> / <a href="/products" className="hover:text-white">Products</a> / Illuminated Letters
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Custom Halo-Lit <br/><span className="text-blue-500">Stainless Steel</span> Letters
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Premium fabricated metal letters with a controlled rear glow, engineered for hotel façades, retail storefronts, and commercial architecture.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 border-t border-slate-800 pt-8">
                <div><strong className="block text-2xl text-blue-400 font-black">1 Set</strong><span className="text-xs uppercase tracking-widest text-slate-500">Min Order</span></div>
                <div><strong className="block text-2xl text-blue-400 font-black">24h</strong><span className="text-xs uppercase tracking-widest text-slate-500">3D Mockup</span></div>
                <div><strong className="block text-2xl text-blue-400 font-black">7-10d</strong><span className="text-xs uppercase tracking-widest text-slate-500">Sample</span></div>
                <div><strong className="block text-2xl text-blue-400 font-black">15-20d</strong><span className="text-xs uppercase tracking-widest text-slate-500">Production</span></div>
              </div>
              <button 
                onClick={() => handleWhatsApp("Hi Aaron, I am interested in Custom Halo-Lit Letters. Please provide a quote.")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-5 rounded-full text-lg shadow-2xl transition-all active:scale-95"
              >
                Get a Factory Quote
              </button>
            </div>
            <div className="reveal">
              <img src="/assets/images/illuminated.webp" alt="Halo Lit Letters" className="rounded-[3rem] shadow-2xl border-8 border-slate-800/50" />
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="section bg-white">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-4xl font-black text-slate-900 mb-8">Technical Specifications</h2>
              <div className="space-y-4">
                {[
                  { label: 'Face Material', value: '304 / 316 Stainless Steel, Brass, or Aluminum' },
                  { label: 'Letter Depth', value: '30–120 mm custom depth' },
                  { label: 'Lighting Method', value: 'Halo-lit (Rear Glow)' },
                  { label: 'LED System', value: 'IP65 Waterproof 12V/24V System' },
                  { label: 'Finish', value: 'Brushed, Mirror, Powder Coated, or Painted' },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between border-b border-slate-100 pb-4">
                    <span className="font-black text-slate-900 uppercase text-xs tracking-widest">{spec.label}</span>
                    <span className="text-slate-600 font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal bg-slate-50 p-8 rounded-[3rem]">
              <img src="/assets/images/detail-letter.webp" alt="Letter Detail" className="rounded-2xl shadow-lg mb-6 h-80 w-full object-cover" />
              <h3 className="font-black text-xl text-slate-900 mb-2">Built for Durability</h3>
              <p className="text-slate-500">Every letter is laser-cut and hand-fabricated to ensure perfect geometry and even illumination.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
