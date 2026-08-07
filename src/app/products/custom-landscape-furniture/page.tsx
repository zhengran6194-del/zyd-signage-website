'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function LandscapeFurniturePage() {
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
                <a href="/" className="hover:text-white">Home</a> / <a href="/products" className="hover:text-white">Products</a> / Landscape & Furniture
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Custom Landscape <br/><span className="text-blue-500">Signage & Outdoor</span> Furniture
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Bespoke urban landscape branding and industrial-grade outdoor seating for public spaces and commercial developments.
              </p>
              <button 
                onClick={() => handleWhatsApp("Hi Aaron, I am interested in Custom Landscape Signage & Outdoor Furniture.")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-5 rounded-full text-lg shadow-2xl transition-all"
              >
                Discuss My Design
              </button>
            </div>
            <div className="reveal">
              <img src="/assets/images/landscape.webp" alt="Landscape Furniture" className="rounded-[3rem] shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <h2 className="text-4xl font-black text-slate-900 mb-6">Architectural Quality</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">Our landscape elements are designed to withstand high-traffic use and harsh outdoor environments, using marine-grade finishes and high-strength structures.</p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start bg-slate-50 p-6 rounded-2xl border border-slate-100 transition-all hover:translate-x-2 shadow-sm hover:shadow-md">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">Weather Resistance</h3><p className="text-sm text-slate-500">High-performance powder coating and UV-resistant materials.</p></div>
                  </div>
                  <div className="flex gap-4 items-start bg-slate-50 p-6 rounded-2xl border border-slate-100 transition-all hover:translate-x-2 shadow-sm hover:shadow-md">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">Custom Fabrication</h3><p className="text-sm text-slate-500">Built to your architect's specific CAD drawings or sketches.</p></div>
                  </div>
                </div>
              </div>
              <div className="reveal">
                <img src="/assets/images/landscape-bench.jpg" alt="Landscape Bench" className="rounded-[2.5rem] shadow-xl h-[400px] w-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
