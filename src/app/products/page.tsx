'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  const products = [
    { title: 'Airport Wayfinding', desc: 'High-precision indoor and outdoor directional systems for international airports.', img: 'hero-wayfinding.png' },
    { title: 'Medical Signage', desc: 'Specialized healthcare signage systems for hospitals and medical centers.', img: 'hero-medical.jpg' },
    { title: 'Landscape & Furniture', desc: 'Bespoke outdoor landscape branding and industrial-grade seating.', img: 'landscape-bench.jpg' },
    { title: 'Illuminated Letters', desc: 'Premium front-lit and halo-lit 3D LED channel letters.', img: 'cat-illuminated.webp' },
    { title: 'LED Light Boxes', desc: 'Ultra-slim and projecting LED light boxes for retail spaces.', img: 'cat-lightbox.webp' },
  ];

  return (
    <>
      <Header />
      <main className="section-pad bg-white min-h-screen">
        <div className="container pt-20">
          <div className="mb-16">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-4">Our Signage Solutions</h1>
            <p className="text-xl text-slate-500 max-w-2xl border-l-4 border-blue-600 pl-6">Industrial-grade precision for hospitality, healthcare, and transportation sectors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((p, i) => (
              <div key={i} className="group border border-slate-100 bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="overflow-hidden rounded-[2rem] mb-6 h-80 bg-slate-100">
                  <img src={`/assets/images/${p.img}`} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-slate-900">{p.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{p.desc}</p>
                <a href="/#contact" className="font-black text-blue-600 uppercase tracking-wider text-sm hover:underline">Consult Expert →</a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
