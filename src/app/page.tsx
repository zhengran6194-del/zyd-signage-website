'use client';

import React, { useEffect } from 'react';
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

  const handleWhatsApp = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, message: string) => {
    if (e) e.preventDefault();
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Header />
      <main id="main">
        {/* 1. MEGA HERO SECTION */}
        <section className="hero relative min-h-[80vh] flex items-center bg-slate-950 text-white overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img src="/assets/images/hero-bg-seafront.png" alt="ZYD Seafront Factory" className="w-full h-full object-cover opacity-60" />
            <div className="hero-overlay-dark"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="hero-copy reveal">
                <div className="eyebrow text-blue-400 font-bold tracking-[0.3em] mb-6 uppercase text-sm border-l-4 border-blue-600 pl-4 inline-block">
                  Industrial Signage Leader Since 2006
                </div>
                <h1 className="font-black leading-tight mb-8 text-white uppercase">
                  Precision Built <br/>
                  <span className="text-blue-500 italic">B2B Signage</span> Solutions
                </h1>
                <p className="hero-lead text-slate-200 mb-12 max-w-2xl font-medium opacity-90">
                  A 20,000sqm manufacturing powerhouse delivering architectural-grade wayfinding and custom identification systems to global commercial projects.
                </p>
                <div className="hero-actions flex flex-wrap gap-6 mb-16">
                  <Link 
                    className="button button-green-base px-10 py-4 rounded-full text-white font-bold text-lg shadow-xl" 
                    href="/contact"
                  >
                    Get a Free Quote
                  </Link>
                  <Link href="/products" className="button border-2 border-white/30 backdrop-blur-lg hover:bg-white hover:text-slate-950 px-10 py-4 rounded-full font-bold text-lg transition-all">
                    View Solutions
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 max-w-4xl text-white">
                  <div><strong className="block text-3xl font-black italic mb-1 text-blue-400 tracking-tighter">20,000</strong><span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">SQM Factory</span></div>
                  <div><strong className="block text-3xl font-black italic mb-1 text-blue-400 tracking-tighter">18+</strong><span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Years Exp.</span></div>
                  <div><strong className="block text-3xl font-black italic mb-1 text-blue-400 tracking-tighter">50+</strong><span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Countries</span></div>
                  <div><strong className="block text-3xl font-black italic mb-1 text-blue-400 tracking-tighter">DDP</strong><span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Global Shipping</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1.1 PRODUCTION EXCELLENCE (Added Section) */}
        <section className="section bg-white py-32 border-b border-slate-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="reveal">
                <div className="eyebrow text-blue-600 font-black tracking-widest uppercase mb-4 text-sm">Manufacturing Power</div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase">High-End Production Facility</h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">Our Dalian base integrates the entire value chain—from architectural 3D modeling and structural engineering to precision CNC fabrication and automotive-grade finish coating.</p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <h4 className="font-black text-slate-900 mb-2 uppercase text-sm">CNC & Laser</h4>
                    <p className="text-xs text-slate-500 font-bold tracking-tight">Precision cutting with ±0.1mm tolerance for complex metal profiles.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <h4 className="font-black text-slate-900 mb-2 uppercase text-sm">Clean-Room Paint</h4>
                    <p className="text-xs text-slate-500 font-bold tracking-tight">Dust-free automotive-grade coating system for 10+ years durability.</p>
                  </div>
                </div>
              </div>
              <div className="reveal relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src="/assets/images/factory-overview.jpg" alt="ZYD Factory Production" className="w-full h-[500px] object-cover" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-slate-950 p-10 rounded-[3rem] text-white shadow-2xl hidden lg:block">
                  <strong className="text-4xl font-black block text-blue-400 italic mb-2 tracking-tighter">100%</strong>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">In-House Manufacturing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Explore Our Signage Products */}
        <section id="products" className="section bg-slate-50">
          <div className="container">
            <div className="section-heading text-center mb-24 reveal">
              <div className="eyebrow text-blue-700 font-extrabold tracking-widest uppercase mb-4 text-sm">Product Catalog</div>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Explore Our Signage Products</h2>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto">Browse by product type, lighting method, and material to find the perfect solution for your space.</p>
            </div>

            <div className="category-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Illuminated Letters', desc: 'Front-lit, halo-lit and dual-lit LED channel letters.', img: 'cat-illuminated.webp', id: 'custom-halo-lit-letters' },
                { title: 'LED Light Boxes', desc: 'Ultra-slim, magnetic, and projecting light boxes.', img: 'cat-lightbox.webp', id: 'ultra-slim-led-light-box' },
                { title: 'LED Neon Signs', desc: 'High-visibility custom logos and decorative neon flex.', img: 'cat-neon.webp', id: 'custom-led-neon-sign' },
                { title: 'Wayfinding Systems', desc: 'Airport, hospital, and architectural directional signs.', img: 'hero-wayfinding.png', id: 'architectural-wayfinding-system' },
                { title: 'Outdoor Signs', desc: 'Large pylon signs and corporate entry identification.', img: 'cat-outdoor.webp', id: 'outdoor-pylon-monument-sign' },
                { title: 'Metal & Acrylic Signs', desc: 'Elegant laser-cut metal and premium acrylic plaques.', img: 'cat-metal.webp', id: 'metal-acrylic-logo-sign' },
                { title: 'Landscape & Furniture', desc: 'Bespoke urban landscape branding and outdoor seating.', img: 'landscape-bench.jpg', id: 'custom-landscape-furniture' },
                { title: 'Complete Systems', desc: 'Coordinated sign packages for large-scale B2B projects.', img: 'cat-system.webp', id: 'complete-signage-system' },
              ].map((p, i) => (
                <div key={i} className="reveal bg-white border border-slate-100 p-8 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group">
                  <div className="overflow-hidden rounded-[2rem] mb-8 h-64 bg-slate-50">
                    <img src={`/assets/images/${p.img}`} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-slate-900">{p.title}</h3>
                  <p className="text-slate-500 mb-8 h-12 overflow-hidden leading-relaxed">{p.desc}</p>
                  <Link href={`/products/${p.id}`} className="text-blue-600 font-black text-lg uppercase tracking-widest hover:gap-5 flex items-center gap-3 transition-all">
                    View Details <span>&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* ... Rest of sections remains similar, but cta links use HandleWhatsApp */}
        <section id="contact" className="contact-section py-32 bg-slate-950 relative overflow-hidden">
          <div className="container contact-card grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div className="contact-copy reveal text-center lg:text-left">
              <div className="eyebrow text-amber-500 font-bold tracking-[0.4em] mb-6 uppercase text-base">Start your project</div>
              <h2 className="text-6xl font-black text-white mb-10 tracking-tighter leading-tight">Get a Factory-Direct <br/>Quote Today</h2>
              <button 
                className="button button-green-base w-full py-10 text-white font-black text-3xl rounded-full shadow-2xl flex items-center justify-center gap-8 transition-all mt-10"
                onClick={(e) => handleWhatsApp(e as any, "Hi Aaron, I want to start a custom signage project.")}
              >
                Start WhatsApp Chat
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
