'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function PylonSignPage() {
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
                <a href="/" className="hover:text-white">Home</a> / <a href="/products" className="hover:text-white">Products</a> / Outdoor Signs
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Outdoor Pylon & <br/><span className="text-blue-500">Monument</span> Sign
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Large-scale corporate identity and entry identification systems engineered for high-wind resistance and long-term durability.
              </p>
              <button 
                onClick={() => handleWhatsApp("Hi Aaron, I am interested in Outdoor Pylon & Monument Signs.")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-5 rounded-full text-lg shadow-2xl transition-all"
              >
                Request 3D Mockup
              </button>
            </div>
            <div className="reveal">
              <img src="/assets/images/outdoor.webp" alt="Pylon Sign" className="rounded-[3rem] shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="reveal">
                <h2 className="text-4xl font-black text-slate-900 mb-8">Heavy-Duty Engineering</h2>
                <p className="text-slate-600 mb-6">Our monument signs are built with internal steel structures and weather-resistant finishes like PVDF-coated aluminum or automotive-grade paint.</p>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="font-black text-blue-600 mb-4 tracking-widest uppercase">Specifications</h3>
                  <ul className="space-y-3 font-bold text-slate-800">
                    <li>• Wind Load: Up to 150 km/h resistance</li>
                    <li>• Structure: Galvanized steel internal cage</li>
                    <li>• Cladding: 3mm-5mm Aluminum composite panels</li>
                    <li>• Lighting: High-power CREE LED modules</li>
                  </ul>
                </div>
              </div>
              <div className="reveal">
                <img src="/assets/images/detail-outdoor.webp" alt="Outdoor Sign Detail" className="rounded-[2.5rem] shadow-xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
