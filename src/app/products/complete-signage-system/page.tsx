'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function CompleteSystemPage() {
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
                <a href="/" className="hover:text-white">Home</a> / <a href="/products" className="hover:text-white">Products</a> / Complete Systems
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Complete Hotel & <br/><span className="text-blue-500">Commercial</span> Signage
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                One-stop coordinated sign packages for large-scale developments, from exterior pylons to internal room numbers.
              </p>
              <button 
                onClick={() => handleWhatsApp("Hi Aaron, I am interested in a Complete Signage System for my project.")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-5 rounded-full text-lg shadow-2xl transition-all"
              >
                Project Consultation
              </button>
            </div>
            <div className="reveal">
              <img src="/assets/images/systems.webp" alt="Complete Signage System" className="rounded-[3rem] shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="bg-slate-900 text-white p-12 lg:p-20 rounded-[4rem] text-center reveal">
              <h2 className="text-4xl font-black mb-8 italic">End-to-End Excellence</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 italic">We manage the entire complexity of large projects, ensuring material consistency, brand alignment, and scheduled delivery across all signage types.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div><strong className="block text-3xl font-black text-blue-500 mb-2">Design</strong><span>Conceptual 3D</span></div>
                <div><strong className="block text-3xl font-black text-blue-500 mb-2">Eng.</strong><span>Technical DWG</span></div>
                <div><strong className="block text-3xl font-black text-blue-500 mb-2">Fab.</strong><span>Factory Built</span></div>
                <div><strong className="block text-3xl font-black text-blue-500 mb-2">Log.</strong><span>Global DDP</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
