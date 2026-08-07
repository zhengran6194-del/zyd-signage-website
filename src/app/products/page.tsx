'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function ProductsPage() {
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

  const products = [
    { title: 'Illuminated Letters', desc: 'Front-lit, halo-lit and dual-lit LED channel letters.', img: 'cat-illuminated.webp', id: 'custom-halo-lit-letters' },
    { title: 'LED Light Boxes', desc: 'Ultra-slim, magnetic, and projecting light boxes.', img: 'cat-lightbox.webp', id: 'ultra-slim-led-light-box' },
    { title: 'LED Neon Signs', desc: 'High-visibility custom logos and decorative neon flex.', img: 'cat-neon.webp', id: 'custom-led-neon-sign' },
    { title: 'Wayfinding Systems', desc: 'Airport, hospital, and architectural directional signs.', img: 'hero-wayfinding.png', id: 'architectural-wayfinding-system' },
    { title: 'Outdoor Signs', desc: 'Large pylon signs and corporate entry identification.', img: 'cat-outdoor.webp', id: 'outdoor-pylon-monument-sign' },
    { title: 'Metal & Acrylic Signs', desc: 'Elegant laser-cut metal and premium acrylic plaques.', img: 'cat-metal.webp', id: 'metal-acrylic-logo-sign' },
    { title: 'Landscape & Furniture', desc: 'Bespoke urban landscape branding and outdoor seating.', img: 'landscape-bench.jpg', id: 'custom-landscape-furniture' },
    { title: 'Complete Systems', desc: 'Coordinated sign packages for large-scale B2B projects.', img: 'cat-system.webp', id: 'complete-signage-system' },
  ];

  return (
    <>
      <Header />
      <main id="main" className="bg-slate-50 min-h-screen">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container text-center reveal">
            <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4">Manufacturing Excellence</div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6">Our Signage Solutions</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto italic">Explore our wide range of custom-made signage products designed for hospitality, healthcare, transportation, and retail industries.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((p, i) => (
                <div key={i} className="reveal group bg-white border border-slate-100 p-5 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300">
                  <div className="overflow-hidden rounded-[2rem] mb-6 h-64 bg-slate-100">
                    <img src={`/assets/images/${p.img}`} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="px-2">
                    <h3 className="text-2xl font-black mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 h-12 overflow-hidden">{p.desc}</p>
                    <a href={`/products/${p.id}`} className="inline-flex items-center gap-2 font-black text-blue-600 uppercase tracking-widest text-sm hover:gap-4 transition-all">
                      View Details <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="py-20 bg-blue-600">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-8">Need a Custom Solution?</h2>
            <p className="text-xl text-blue-100 mb-10">Send us your project requirements and get a professional quote within 24 hours.</p>
            <a href="/#contact" className="bg-white text-blue-600 font-black px-12 py-5 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform inline-block">Contact Project Engineer</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
