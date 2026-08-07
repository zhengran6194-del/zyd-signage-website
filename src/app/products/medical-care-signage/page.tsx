'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function MedicalSignagePage() {
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
                <a href="/" className="hover:text-white">Home</a> / <a href="/products" className="hover:text-white">Products</a> / Medical Signage
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight uppercase tracking-tighter">
                Professional <br/><span className="text-blue-500 italic">Medical</span> Signage
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium">
                Comprehensive wayfinding and identification systems for hospitals, clinics, and healthcare centers. 
                Engineered for clarity, hygiene, and patient comfort.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 border-t border-white/10 pt-8">
                <div><strong className="block text-2xl text-blue-400 font-black italic">20+</strong><span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Years Exp.</span></div>
                <div><strong className="block text-2xl text-blue-400 font-black italic">Anti</strong><span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Bacterial</span></div>
                <div><strong className="block text-2xl text-blue-400 font-black italic">ADA</strong><span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Compliant</span></div>
                <div><strong className="block text-2xl text-blue-400 font-black italic">7-10d</strong><span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Lead Time</span></div>
              </div>
              <button 
                onClick={() => handleWhatsApp("Hi Aaron, I am interested in Medical Signage Systems for a hospital project.")}
                className="button button-green-base px-10 py-5 rounded-full text-white font-black text-xl flex items-center gap-4 shadow-2xl transition-all active:scale-95"
              >
                <img src="/assets/images/whatsapp-icon-3d.jpg" alt="WhatsApp" className="w-10 h-10 object-contain" />
                GET A PROJECT QUOTE
              </button>
            </div>
            <div className="reveal">
              <img src="/assets/images/hero-medical.jpg" alt="Medical Signage Solutions" className="rounded-[3rem] shadow-2xl border-4 border-white/10" />
            </div>
          </div>
        </section>

        {/* Core Solutions */}
        <section className="section bg-white">
          <div className="container">
            <div className="section-heading text-center mb-16 reveal">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Healing Environments Through Design</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">We provide a seamless navigation experience that reduces patient anxiety and ensures staff efficiency in high-pressure medical environments.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Main Directories', desc: 'Large-scale digital or static floor maps for main entrance halls and elevator lobbies.' },
                { title: 'Room & Dept. ID', desc: 'High-contrast signs using antibacterial materials, easily cleanable for sterile zones.' },
                { title: 'Wayfinding Path', desc: 'Color-coded floor lines and overhead signs to guide patients through complex corridors.' },
              ].map((item, i) => (
                <div key={i} className="reveal bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 italic uppercase">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standard */}
        <section className="section bg-slate-900 text-white">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-4xl font-black mb-8 italic uppercase tracking-tighter">B2B Standard Excellence</h2>
              <ul className="space-y-6 text-lg text-slate-300">
                <li className="flex gap-4 border-l-4 border-blue-500 pl-6">
                  <div><strong>Hygiene First:</strong> Non-porous surfaces and antimicrobial coatings to prevent infection spread.</div>
                </li>
                <li className="flex gap-4 border-l-4 border-blue-500 pl-6">
                  <div><strong>High Accessibility:</strong> Braille integration and high-contrast color palettes for ADA compliance.</div>
                </li>
                <li className="flex gap-4 border-l-4 border-blue-500 pl-6">
                  <div><strong>Durable Build:</strong> Marine-grade metals and scratch-resistant finishes for 15+ years of use.</div>
                </li>
              </ul>
            </div>
            <div className="reveal bg-slate-800 p-8 rounded-[3.5rem] shadow-inner">
              <div className="text-center p-8 bg-slate-900/50 rounded-[2.5rem] border border-white/5">
                <h3 className="text-2xl font-black mb-4 text-blue-400 uppercase">Consult an Expert</h3>
                <p className="mb-8 text-slate-400">Aaron has managed hospital signage projects in 20+ countries. Get professional design support today.</p>
                <button 
                   onClick={() => handleWhatsApp("Hi Aaron, I need an expert consultation for a healthcare signage project.")}
                   className="button button-green-base w-full py-6 rounded-full font-black text-xl flex items-center justify-center gap-4 shadow-xl"
                >
                  <img src="/assets/images/whatsapp-icon-3d.jpg" alt="WhatsApp" className="w-12 h-12 object-contain" />
                  START CONSULTATION
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
