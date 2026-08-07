'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function HaloLitLettersPage() {
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
            <div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight uppercase tracking-tighter">Custom Halo-Lit <br/><span className="text-blue-500 italic">Stainless Steel</span> Letters</h1>
              <p className="text-xl text-slate-300 mb-8 font-medium">Premium rear-glow fabricated metal letters for high-end storefronts and architectural projects.</p>
              <button onClick={() => handleWhatsApp("I am interested in Custom Halo-Lit Letters.")} className="button button-green-base px-10 py-5 rounded-full text-white font-black text-xl flex items-center gap-4">
                GET A QUOTE
              </button>
            </div>
            <div><img src="/assets/images/cat-illuminated.webp" alt="Product" className="rounded-[3rem] shadow-2xl border-4 border-white/10" /></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

