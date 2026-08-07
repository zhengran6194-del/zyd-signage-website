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
        <section className="hero relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden py-32 lg:py-48 xl:py-60">
          <div className="absolute inset-0 z-0">
            <img src="/assets/images/hero-bg-seafront.png" alt="ZYD Seafront Factory" className="w-full h-full object-cover" />
            <div className="hero-overlay-dark"></div>
          </div>
          
          <div className="container relative z-10 text-center lg:text-left">
            <div className="max-w-6xl mx-auto lg:mx-0">
              <div className="hero-copy reveal">
                <div className="eyebrow text-blue-400 font-black tracking-[0.5em] mb-10 uppercase text-base border-l-8 border-blue-600 pl-6 inline-block">
                  Precision Engineering since 2006
                </div>
                <h1 className="text-7xl md:text-9xl xl:text-[180px] font-black leading-[0.8] tracking-tighter mb-12 text-white drop-shadow-[0_15px_45px_rgba(0,0,0,0.7)] uppercase">
                  CRAFTING <br/>
                  <span className="text-blue-500 italic">TRUSTED</span> <br/>
                  SIGNAGE
                </h1>
                <p className="hero-lead text-2xl lg:text-4xl text-slate-200 mb-16 max-w-4xl leading-relaxed font-medium mx-auto lg:mx-0 opacity-95 tracking-tight text-left">
                  Leading-edge architectural signage systems for global B2B projects. 
                  <span className="block mt-8 text-white font-black text-3xl lg:text-4xl uppercase border-y-2 border-white/20 py-5 inline-block tracking-tighter text-left">Factory Direct &middot; Global DDP &middot; 20,000sqm Base</span>
                </p>
                <div className="hero-actions flex flex-wrap justify-center lg:justify-start gap-10 mb-24">
                  <a 
                    className="button button-green-base px-20 py-10 rounded-full text-white font-black text-3xl flex items-center gap-6 transform hover:-translate-y-2 active:scale-95 transition-all shadow-2xl" 
                    href="#contact" 
                    onClick={(e) => handleWhatsApp(e, "Hi Aaron, I would like a free 3D mockup and quote.")}
                  >
                    START MY PROJECT
                  </a>
                  <Link href="/products" className="button border-4 border-white/30 backdrop-blur-xl hover:bg-white hover:text-slate-950 px-20 py-10 rounded-full font-black text-3xl transition-all tracking-tight">
                    VIEW SOLUTIONS
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 pt-20 border-t border-white/10 max-w-5xl mx-auto lg:mx-0 text-white">
                  <div><strong className="block text-5xl lg:text-6xl font-black italic mb-3 tracking-tighter text-blue-400">20,000</strong><span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-slate-400 font-black">SQM Factory</span></div>
                  <div><strong className="block text-5xl lg:text-6xl font-black italic mb-3 tracking-tighter text-blue-400">18+</strong><span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-slate-400 font-black">Years Exp.</span></div>
                  <div><strong className="block text-5xl lg:text-6xl font-black italic mb-3 tracking-tighter text-blue-400">50+</strong><span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-slate-400 font-black">Countries</span></div>
                  <div><strong className="block text-5xl lg:text-6xl font-black italic mb-3 tracking-tighter text-blue-400">DDP</strong><span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-slate-400 font-black">Global Shipping</span></div>
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
