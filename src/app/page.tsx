'use client';

import React, { useEffect } from 'react';
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
        {/* 1. MEGA HERO SECTION (震撼海景全屏巨幕 + 深度纯净重构) */}
        <section className="hero relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden py-32 lg:py-48 xl:py-60">
          {/* 全屏背景图与深色遮罩 */}
          <div className="absolute inset-0 z-0">
            <img src="/assets/images/hero-bg-seafront.png" alt="ZYD Seafront Factory" className="w-full h-full object-cover" />
            <div className="hero-overlay-dark"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 gap-12 items-center text-center lg:text-left">
              {/* Text Copy Area - Full Width Purity after right card removal */}
              <div className="hero-copy reveal max-w-6xl mx-auto lg:mx-0">
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
                  <a className="button border-4 border-white/30 backdrop-blur-xl hover:bg-white hover:text-slate-950 px-20 py-10 rounded-full font-black text-3xl transition-all tracking-tight" href="/products">
                    VIEW SOLUTIONS
                  </a>
                </div>
                
                {/* Large trust metrics */}
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
                  <a href={`/products/${p.id}`} className="text-blue-600 font-black text-lg uppercase tracking-widest hover:gap-5 flex items-center gap-3 transition-all">
                    View Details <span>&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WhatsApp CTA Banner */}
        <section className="py-24 bg-blue-600 overflow-hidden relative">
          <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase text-left">Send Your Logo or Drawings</h2>
              <p className="text-2xl text-blue-100 italic text-left">Get a 100% free 3D mockup and factory-direct quote within 24 hours.</p>
            </div>
            <button 
              onClick={() => handleWhatsApp(null as any, "Hi Aaron, I'm sending my logo/drawings for a quote.")}
              className="button button-green-base px-16 py-8 rounded-full text-2xl shadow-2xl flex items-center gap-4 transition-transform active:scale-95"
            >
              Start Free Quote
            </button>
          </div>
        </section>

        {/* 7. Contact Section */}
        <section id="contact" className="contact-section py-32 bg-slate-950 relative overflow-hidden">
          <div className="container contact-card grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div className="contact-copy reveal text-center lg:text-left">
              <div className="eyebrow text-amber-500 font-bold tracking-[0.4em] mb-6 uppercase text-base">Start your project</div>
              <h2 className="text-6xl font-black text-white mb-10 tracking-tighter leading-tight">Get a Factory-Direct <br/>Quote Today</h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0">Ready to start? Send your project details and our engineering team will provide a comprehensive solution within 24 hours.</p>
              <div className="flex flex-col gap-6 text-white font-bold text-lg items-center lg:items-start">
                <div className="flex items-center gap-5 bg-slate-900/80 p-6 rounded-3xl border border-white/5 shadow-inner w-full max-w-md"><span className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-black">&check;</span> Direct Factory Pricing</div>
                <div className="flex items-center gap-5 bg-slate-900/80 p-6 rounded-3xl border border-white/5 shadow-inner w-full max-w-md"><span className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-black">&check;</span> Free 3D Design Support</div>
                <div className="flex items-center gap-5 bg-slate-900/80 p-6 rounded-3xl border border-white/5 shadow-inner w-full max-w-md"><span className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-black">&check;</span> Professional DDP Shipping</div>
              </div>
            </div>
            <div className="quote-form reveal bg-white p-12 lg:p-20 rounded-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-10">
                  <label className="block text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Message</label>
                  <textarea className="w-full border-4 border-slate-50 p-10 rounded-[3rem] mb-10 focus:border-blue-500 outline-none transition-colors text-slate-700 bg-slate-50 text-2xl font-medium" rows={5} placeholder="Tell us about your project requirements..."></textarea>
                </div>
                <button 
                  className="button button-green-base w-full py-10 text-white font-black text-3xl rounded-full shadow-2xl flex items-center justify-center gap-8 transition-all"
                  onClick={(e) => handleWhatsApp(e as any, "Hi Aaron, I want to start a custom signage project.")}
                >
                  Start WhatsApp Chat
                </button>
                <p className="text-center text-slate-400 text-sm mt-10 uppercase tracking-[0.2em] font-black">Aaron typically replies within 1 hour</p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
