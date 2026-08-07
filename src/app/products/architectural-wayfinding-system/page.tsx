'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function WayfindingPage() {
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
                <a href="/" className="hover:text-white">Home</a> / <a href="/products" className="hover:text-white">Products</a> / Wayfinding Systems
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Architectural <br/><span className="text-blue-500">Wayfinding</span> System
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Modular and custom-engineered directional signage for hotels, hospitals, and transportation hubs.
              </p>
              <button 
                onClick={() => handleWhatsApp("Hi Aaron, I am interested in Architectural Wayfinding Systems.")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-5 rounded-full text-lg shadow-2xl transition-all"
              >
                Discuss My Project
              </button>
            </div>
            <div className="reveal">
              <img src="/assets/images/wayfinding.webp" alt="Wayfinding Signs" className="rounded-[3rem] shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <h2 className="text-4xl font-black text-slate-900 mb-6">Navigating Complex Spaces</h2>
                <p className="text-lg text-slate-600 mb-8">Our wayfinding solutions combine modularity with high-end materials like tempered glass, brushed aluminum, and marine-grade stainless steel.</p>
                <ul className="space-y-4 font-bold text-slate-800">
                  <li className="flex gap-4 items-center"><span className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg font-black">01</span> Room & ID Plaques</li>
                  <li className="flex gap-4 items-center"><span className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg font-black">02</span> Directional Fingerposts</li>
                  <li className="flex gap-4 items-center"><span className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg font-black">03</span> Floor Directories & Maps</li>
                  <li className="flex gap-4 items-center"><span className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg font-black">04</span> Suspended Ceiling Signs</li>
                </ul>
              </div>
              <div className="reveal">
                <img src="/assets/images/detail-wayfinding.webp" alt="Wayfinding Detail" className="rounded-[2.5rem] shadow-xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
