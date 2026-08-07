'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  ];

  return (
    <>
      <Header />
      <main id="main" className="bg-slate-50 min-h-screen">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container text-center reveal">
            <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Manufacturing Excellence</div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">Signage Solutions</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto italic">High-end specialized manufacturing for global architecture.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((p, i) => (
                <div key={i} className="reveal group bg-white border border-slate-100 p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300">
                  <div className="overflow-hidden rounded-[2rem] mb-6 h-80 bg-slate-100">
                    <img src={`/assets/images/${p.img}`} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-slate-900">{p.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{p.desc}</p>
                  <a href={`/products/${p.id}`} className="button button-green-base w-full py-4 text-white font-bold rounded-full">
                    View Details
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

