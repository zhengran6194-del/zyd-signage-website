'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function LightBoxPage() {
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
                <a href="/" className="hover:text-white">Home</a> / <a href="/products" className="hover:text-white">Products</a> / LED Light Boxes
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Ultra-Slim <br/><span className="text-blue-500">Custom LED</span> Light Box
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Professional high-brightness display solutions for retail, airports, and luxury brand showrooms.
              </p>
              <button 
                onClick={() => handleWhatsApp("Hi Aaron, I am interested in Ultra-Slim LED Light Boxes.")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-5 rounded-full text-lg shadow-2xl transition-all"
              >
                Inquire Now
              </button>
            </div>
            <div className="reveal">
              <img src="/assets/images/lightbox.webp" alt="LED Light Box" className="rounded-[3rem] shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-black text-slate-900 mb-8">Premium Display Solutions</h2>
            <p className="text-lg text-slate-600 mb-12">Our light boxes feature advanced edge-lit technology using high-index acrylic LGP (Light Guide Plates) to ensure 100% even brightness across the entire surface.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl">
                <h3 className="font-black text-xl mb-4 uppercase tracking-widest text-blue-600">Magnetic Frame</h3>
                <p className="text-slate-500">Easy graphic changes in seconds without tools. Perfect for fast-paced retail environments.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl">
                <h3 className="font-black text-xl mb-4 uppercase tracking-widest text-blue-600">Ultra-Slim Profile</h3>
                <p className="text-slate-500">Available in thicknesses from 18mm to 35mm, offering a sleek architectural appearance.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
