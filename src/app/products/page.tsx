'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

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
    { title: 'Airport Wayfinding', desc: 'High-precision indoor and outdoor directional systems.', img: 'hero-wayfinding.png', id: 'architectural-wayfinding-system' },
    { title: 'Medical Signage', desc: 'Specialized healthcare signage systems for hospitals.', img: 'hero-medical.jpg', id: 'medical-care-signage' },
    { title: 'Landscape & Furniture', desc: 'Bespoke outdoor landscape branding and seating.', img: 'landscape-bench.jpg', id: 'custom-landscape-furniture' },
    { title: 'Illuminated Letters', desc: 'Premium front-lit and halo-lit 3D LED channel letters.', img: 'cat-illuminated.webp', id: 'custom-halo-lit-letters' },
    { title: 'LED Light Boxes', desc: 'Ultra-slim and projecting LED light boxes for retail.', img: 'cat-lightbox.webp', id: 'ultra-slim-led-light-box' },
    { title: 'Monument Signs', desc: 'Large-scale pylon signs and entry identification.', img: 'cat-outdoor.webp', id: 'outdoor-pylon-monument-sign' },
    { title: 'LED Neon Signs', desc: 'Vibrant custom neon flex for branding and interior decor.', img: 'cat-neon.webp', id: 'custom-led-neon-sign' },
    { title: 'Metal & Acrylic Signs', desc: 'Precision laser-cut corporate logos and plaque systems.', img: 'cat-metal.webp', id: 'metal-acrylic-logo-sign' },
    { title: 'Complete Systems', desc: 'One-partner coordinated signage programs for global rollouts.', img: 'cat-system.webp', id: 'complete-signage-system' },
  ];

  return (
    <>
      <main id="main" className="bg-slate-50 min-h-screen">
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-[1600px] w-[95%] mx-auto text-center reveal">
            <div className="eyebrow text-blue-400 font-bold tracking-[0.3em] uppercase mb-4 text-xs">Manufacturing Excellence</div>
            <h1 className="mb-6 uppercase">Signage Solutions</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">Factory-direct specialized manufacturing for global architectural projects.</p>
          </div>
        </section>

        <section className="section">
          <div className="max-w-[1600px] w-[95%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.map((p, i) => (
              <div key={i} className="reveal group flex flex-col bg-white border border-slate-100 p-6 rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden rounded-[1rem] mb-6 h-72 bg-slate-100 border border-slate-50">
                  <img src={`/assets/images/${p.img}`} alt={p.title} width={1200} height={800} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-black mb-3 text-slate-900 uppercase">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{p.desc}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
                  <span>MOQ: 1</span>
                  <span>Lead Time: 7–14 days</span>
                </div>
                <Link href={`/products/${p.id}`} className="button button-green-base w-full py-3 mt-auto text-white font-bold rounded-md text-center block">
                  View Details
                </Link>
              </div>
            ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

