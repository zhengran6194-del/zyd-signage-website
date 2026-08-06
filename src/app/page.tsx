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

  const handleWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>, message: string) => {
    e.preventDefault();
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Header />
      <main id="main">
        {/* Hero Section - Cleaned decorative elements */}
        <section className="hero section-pad bg-white">
          <div className="container hero-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-copy reveal">
              <div className="eyebrow text-blue-700 font-extrabold tracking-widest mb-4">
                Factory-direct custom signage since 2006
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
                Custom Signage Solutions <span className="text-blue-600 block">Direct from Factory</span>
              </h1>
              <p className="hero-lead text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                Premium illuminated signs, light boxes, and wayfinding systems. We offer <strong>Factory Pricing</strong>, 
                <strong> Global DDP Shipping</strong>, and <strong>Free 3D Mockups</strong> for B2B projects worldwide.
              </p>
              <div className="hero-actions flex flex-wrap gap-4 mb-10">
                <a 
                  className="button button-whatsapp bg-green-500 hover:bg-green-600 shadow-xl px-10 py-5 rounded-full text-white font-bold flex items-center gap-3 transition-all transform hover:-translate-y-1" 
                  href="#contact" 
                  onClick={(e) => handleWhatsApp(e, "Hi Aaron, I would like a free 3D mockup and quote.")}
                >
                  <svg viewBox="0 0 24 24" className="w-6 fill-current"><path d="M19.1 4.9A9.9 9.9 0 0 0 3.6 16.8L2.2 22l5.4-1.4A10 10 0 1 0 19.1 4.9Zm-7.1 15a8 8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3a8 8 0 1 1 6.8 3.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.2-.2-.2-.4-.2-.6-.3Z"/></svg>
                  Get My Free 3D Mockup
                </a>
                <a className="button button-secondary border-2 border-slate-200 hover:bg-slate-50 px-10 py-5 rounded-full font-bold transition-all" href="/products">
                  View Catalog
                </a>
              </div>
            </div>
            {/* Gallery Section - Using hero-medical.jpg and removed decorative orbs/badges */}
            <div className="hero-gallery reveal">
              <figure className="gallery-main relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img src="/assets/images/hero-medical.jpg" alt="High Quality Medical Signage" className="w-full h-auto object-cover" />
              </figure>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section py-20 bg-slate-900">
          <div className="container contact-card grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="contact-copy reveal">
              <div className="eyebrow text-amber-500 font-bold tracking-widest mb-4">Start your project</div>
              <h2 className="text-4xl font-black text-white mb-6">Get a Factory-Direct Quote Today</h2>
              <p className="text-slate-400 text-lg leading-relaxed">Send your drawings or just an idea. Our engineers will provide a technical solution and a competitive quote within 24 hours.</p>
            </div>
            <div className="quote-form reveal bg-white p-8 rounded-[2rem] shadow-2xl">
              <form onSubmit={(e) => e.preventDefault()}>
                <textarea className="w-full border-2 border-slate-100 p-5 rounded-2xl mb-6 focus:border-blue-500 outline-none transition-colors" rows={4} placeholder="Your project details (size, quantity, material)..."></textarea>
                <button 
                  className="button button-primary w-full bg-blue-600 hover:bg-blue-700 py-5 text-white font-black text-lg rounded-full shadow-lg shadow-blue-500/30 transition-all"
                  onClick={() => handleWhatsApp(document.createElement('a') as any, "Hi Aaron, I want to start a custom signage project.")}
                >
                  Start WhatsApp Chat
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
