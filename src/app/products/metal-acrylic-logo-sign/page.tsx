'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function MetalLogoPage() {
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
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="breadcrumbs text-slate-400 text-sm mb-6">
                <a href="/" className="hover:text-white">Home</a> / <a href="/products" className="hover:text-white">Products</a> / Metal & Acrylic Signs
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Brushed Metal & <br/><span className="text-blue-500">Acrylic Logo</span> Sign
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Premium reception wall signs and corporate branding plaques with laser-cut precision and multi-layered finishes.
              </p>
              <button 
                onClick={() => handleWhatsApp("Hi Aaron, I am interested in Metal & Acrylic Logo Signs.")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-5 rounded-full text-lg shadow-2xl transition-all"
              >
                Consult an Expert
              </button>
            </div>
            <div className="reveal">
              <img src="/assets/images/metal.webp" alt="Metal Logo Sign" className="rounded-[3rem] shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-8 reveal">Elegant Brand Presence</h2>
            <p className="text-xl text-slate-600 mb-12 reveal">We combine CNC machining with high-end surface treatments to create logo signs that command attention in professional environments.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Titanium Gold', 'Brushed Steel', 'Layered Acrylic'].map((f, i) => (
                <div key={i} className="reveal bg-slate-50 p-6 rounded-2xl border border-slate-100 font-bold text-slate-800">
                  {f} Finish
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
