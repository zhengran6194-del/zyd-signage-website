'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function NeonSignPage() {
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
                <a href="/" className="hover:text-white">Home</a> / <a href="/products" className="hover:text-white">Products</a> / LED Neon Signs
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Custom Flexible <br/><span className="text-blue-500">LED Neon</span> Sign
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Modern high-durability neon solutions for brand logos, event decor, and commercial interior design.
              </p>
              <button 
                onClick={() => handleWhatsApp("Hi Aaron, I am interested in Custom LED Neon Signs.")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-5 rounded-full text-lg shadow-2xl transition-all"
              >
                Start My Design
              </button>
            </div>
            <div className="reveal">
              <img src="/assets/images/neon.webp" alt="LED Neon Sign" className="rounded-[3rem] shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="reveal order-2 md:order-1">
                <img src="/assets/images/detail-neon.webp" alt="Neon Detail" className="rounded-[2.5rem] shadow-xl" />
              </div>
              <div className="reveal order-1 md:order-2">
                <h2 className="text-4xl font-black text-slate-900 mb-6">Why Choose ZYD Neon?</h2>
                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <h3 className="font-bold text-lg text-slate-900 mb-2 underline decoration-blue-500">Silicone Construction</h3>
                    <p className="text-slate-600">We use premium silicone tubes that won't yellow or crack over time, ensuring a 50,000+ hour lifespan.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <h3 className="font-bold text-lg text-slate-900 mb-2 underline decoration-blue-500">Safe Low Voltage</h3>
                    <p className="text-slate-600">Operates on 12V power for maximum safety and low energy consumption.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
