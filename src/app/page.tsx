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
        {/* Hero Section */}
        <section className="hero section-pad">
          <div className="hero-orb hero-orb-one"></div>
          <div className="hero-orb hero-orb-two"></div>
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow text-blue-700 font-extrabold tracking-widest">
                Factory-direct custom signage since 2006
              </div>
              <h1 className="text-slate-900 font-black leading-tight tracking-tighter mb-6">
                Custom Signage Solutions <span className="text-blue-600 block">Direct from Factory</span>
              </h1>
              <p className="hero-lead text-lg text-slate-600 mb-8 max-w-2xl">
                Premium illuminated signs, light boxes, and wayfinding systems. We offer <strong>Factory Pricing</strong>, 
                <strong> Global DDP Shipping</strong>, and <strong>Free 3D Mockups</strong> for B2B projects worldwide.
              </p>
              <div className="hero-actions flex flex-wrap gap-4 mb-10">
                <a 
                  className="button button-whatsapp bg-green-500 hover:bg-green-600 shadow-lg px-8 py-4 rounded-full text-white font-bold flex items-center gap-3 transition-all transform hover:-translate-y-1" 
                  href="#contact" 
                  onClick={(e) => handleWhatsApp(e, "Hi Aaron, I would like a free 3D mockup and quote.")}
                >
                  <svg viewBox="0 0 24 24" className="w-6 fill-current"><path d="M19.1 4.9A9.9 9.9 0 0 0 3.6 16.8L2.2 22l5.4-1.4A10 10 0 1 0 19.1 4.9Zm-7.1 15a8 8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3a8 8 0 1 1 6.8 3.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.2-.2-.2-.4-.2-.6-.3Z"/></svg>
                  Get My Free 3D Mockup
                </a>
                <a className="button button-secondary border border-slate-200 hover:bg-slate-50 px-8 py-4 rounded-full font-bold transition-all" href="/products">
                  View Catalog
                </a>
              </div>
            </div>
            <div className="hero-gallery reveal">
              <figure className="gallery-main"><img src="/assets/images/hero-monument.webp" alt="Signage" /></figure>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container contact-card">
            <div className="contact-copy reveal">
              <div className="eyebrow gold">Start your project</div>
              <h2>Get a Factory-Direct Quote Today</h2>
              <p>Send your drawings or just an idea. Our engineers will provide a quote within 24 hours.</p>
            </div>
            <div className="quote-form reveal">
              <form onSubmit={(e) => e.preventDefault()}>
                <textarea className="w-full border border-slate-200 p-4 rounded-xl mb-4" rows={4} placeholder="Your project details..."></textarea>
                <button 
                  className="button button-primary w-full bg-blue-600 py-4 text-white font-bold rounded-full"
                  onClick={() => handleWhatsApp(document.createElement('a') as any, "Hi Aaron, I want to start a project.")}
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
