'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
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
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="ZYD Home">
            <img src="/assets/images/logo-header.png" alt="ZYD Zhiyudao Sign logo" width={166} height={78} />
          </a>

          <button 
            className="menu-toggle" 
            aria-expanded={isMenuOpen} 
            aria-controls="primary-nav" 
            aria-label="Open navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span><span></span><span></span>
          </button>

          <nav id="primary-nav" className={`primary-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            <a href="#products">Products</a>
            <a href="#industries">Industries</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#projects">Case Studies</a>
            <a href="#faq">Resources</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a 
              className="button button-primary small js-whatsapp" 
              href="#contact" 
              onClick={(e) => handleWhatsApp(e, "Hi ZYD, I would like a free signage quote.")}
            >
              Get a Free Quote
            </a>
            <a 
              className="icon-button js-whatsapp" 
              href="#contact" 
              onClick={(e) => handleWhatsApp(e, "Hi ZYD, I would like to discuss a signage project on WhatsApp.")}
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.1 4.9A9.9 9.9 0 0 0 3.6 16.8L2.2 22l5.4-1.4A10 10 0 1 0 19.1 4.9Zm-7.1 15a8 8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3a8 8 0 1 1 6.8 3.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.2-.2-.2-.4-.2-.6-.3Z"/></svg>
            </a>
          </div>
        </div>
      </header>

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
                  onClick={(e) => handleWhatsApp(e, "Hi Aaron, I would like a free 3D mockup and quote. I can send my logo or reference image.")}
                >
                  <svg viewBox="0 0 24 24" className="w-6 fill-current" aria-hidden="true"><path d="M19.1 4.9A9.9 9.9 0 0 0 3.6 16.8L2.2 22l5.4-1.4A10 10 0 1 0 19.1 4.9Zm-7.1 15a8 8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3a8 8 0 1 1 6.8 3.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.2-.2-.2-.4-.2-.6-.3Z"/></svg>
                  Get My Free 3D Mockup
                </a>
                <a className="button button-secondary border border-slate-200 hover:bg-slate-50 px-8 py-4 rounded-full font-bold transition-all" href="#products">
                  View Catalog
                </a>
              </div>
              <div className="trust-grid grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-100" aria-label="Company highlights">
                <div className="trust-item flex items-center gap-4">
                  <span className="trust-icon bg-blue-50 p-3 rounded-xl text-blue-600">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2"><path d="M4 21V6l8-3 8 3v15M8 9h2m4 0h2M8 13h2m4 0h2M8 17h2m4 0h2M2 21h20"/></svg>
                  </span>
                  <div><strong className="block text-sm text-slate-900">Est. 2006</strong><small className="text-xs text-slate-500">Industry Leader</small></div>
                </div>
                <div className="trust-item flex items-center gap-4">
                  <span className="trust-icon bg-blue-50 p-3 rounded-xl text-blue-600">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2"><path d="M3 21h18M5 21V8h5v13m4 0V3h5v18M7 11h1m-1 3h1m-1 3h1m9-11h1m-1 4h1m-1 4h1m-1 4h1"/></svg>
                  </span>
                  <div><strong className="block text-sm text-slate-900">20,000㎡</strong><small className="text-xs text-slate-500">Factory Base</small></div>
                </div>
                <div className="trust-item flex items-center gap-4">
                  <span className="trust-icon bg-blue-50 p-3 rounded-xl text-blue-600">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z"/></svg>
                  </span>
                  <div><strong className="block text-sm text-slate-900">Global DDP</strong><small className="text-xs text-slate-500">Tax Included</small></div>
                </div>
                <div className="trust-item flex items-center gap-4">
                  <span className="trust-icon bg-blue-50 p-3 rounded-xl text-blue-600">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2"><path d="m3 7 9-4 9 4-9 4-9-4Zm0 0v10l9 4 9-4V7M12 11v10"/></svg>
                  </span>
                  <div><strong className="block text-sm text-slate-900">MOQ 1 Set</strong><small className="text-xs text-slate-500">Custom Order</small></div>
                </div>
              </div>
            </div>

            <div className="hero-gallery reveal" aria-label="Signage product gallery">
              <figure className="gallery-main"><img src="/assets/images/hero-monument.webp" alt="Premium illuminated monument sign" width={860} height={768} /></figure>
              <figure className="gallery-letter"><img src="/assets/images/hero-letter.webp" alt="Illuminated channel letter" width={600} height={600} /></figure>
              <figure className="gallery-wayfinding"><img src="/assets/images/hero-wayfinding.webp" alt="Hotel wayfinding sign" width={600} height={530} /></figure>
              <figure className="gallery-neon"><img src="/assets/images/hero-neon.webp" alt="Custom LED neon sign" width={600} height={480} /></figure>
              <figure className="gallery-factory"><img src="/assets/images/hero-factory.webp" alt="Signage production workshop" width={600} height={690} /></figure>
              <div className="gallery-badge"><span>Free</span><strong>3D Mockup</strong><small>Before ordering</small></div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="section section-white">
          <div className="container">
            <div className="section-heading reveal">
              <div className="eyebrow">Product catalog</div>
              <h2>Explore Our Signage Products</h2>
              <p>Browse by product type, lighting method, material and installation environment.</p>
            </div>

            <div className="category-grid">
              {[
                { id: 'illuminated', title: 'Illuminated Letters', desc: 'Front-lit, halo-lit and dual-lit letters.', img: 'cat-illuminated.webp' },
                { id: 'lightbox', title: 'LED Light Boxes', desc: 'Wall-mounted, projecting and slim light boxes.', img: 'cat-lightbox.webp' },
                { id: 'neon', title: 'LED Neon Signs', desc: 'Custom logos, text and outdoor neon flex.', img: 'cat-neon.webp' },
                { id: 'wayfinding', title: 'Wayfinding Systems', desc: 'Room signs, directories and suspended signs.', img: 'cat-wayfinding.webp' },
                { id: 'outdoor', title: 'Outdoor Signs', desc: 'Monument, pylon, totem and landscape signs.', img: 'cat-outdoor.webp' },
                { id: 'metal', title: 'Metal & Acrylic Signs', desc: 'Premium wall logos, plaques and letters.', img: 'cat-metal.webp' },
                { id: 'display', title: 'A-Frame & Display', desc: 'Sidewalk signs, menu boards and displays.', img: 'cat-aframe.webp' },
                { id: 'systems', title: 'Complete Signage Systems', desc: 'Coordinated sign packages for large projects.', img: 'cat-system.webp' },
              ].map(cat => (
                <article key={cat.id} className="category-card reveal" data-category={cat.id}>
                  <div className="card-image"><img src={`/assets/images/${cat.img}`} alt={cat.title} loading="lazy" /></div>
                  <div className="card-body">
                    <h3>{cat.title}</h3>
                    <p>{cat.desc}</p>
                    <a 
                      href="#contact" 
                      className="text-link js-product" 
                      onClick={(e) => handleWhatsApp(e, `Hi ZYD, I'm interested in ${cat.title}.`)}
                    >
                      View Products <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="section section-soft">
          <div className="container">
            <div className="section-heading reveal">
              <div className="eyebrow">Project solutions</div>
              <h2>Solutions by Industry</h2>
              <p>One coordinated supplier for exterior identification, interior wayfinding and branded spaces.</p>
            </div>

            <div className="industry-grid">
              {[
                { id: 'hotel', title: 'Hotel Signage System', icon: 'H', items: ['Monument & facade signs', 'Room numbers & directories', 'Reception logos', 'Parking & directional signs'], img: 'ind-hotel.webp' },
                { id: 'retail', title: 'Retail & Shopping Mall', icon: 'R', items: ['Storefront channel letters', 'Light boxes & tenant signs', 'Directory boards', 'Promotional displays'], img: 'ind-retail.webp' },
                { id: 'office', title: 'Office & Corporate', icon: 'O', items: ['Lobby logo signs', 'Floor directories', 'Meeting room signs', 'Safety & compliance signs'], img: 'ind-office.webp' },
                { id: 'industrial', title: 'Industrial Park', icon: 'I', items: ['Gate & monument signs', 'Building identification', 'Parking & traffic signs', 'Safety sign systems'], img: 'ind-industrial.webp' },
              ].map(ind => (
                <article key={ind.id} className="industry-card reveal">
                  <img src={`/assets/images/${ind.img}`} alt={ind.title} loading="lazy" />
                  <div className="industry-content">
                    <span className="industry-icon">{ind.icon}</span>
                    <h3>{ind.title}</h3>
                    <ul>
                      {ind.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <a 
                      href="#contact" 
                      className="text-link js-product" 
                      onClick={(e) => handleWhatsApp(e, `Hi ZYD, I would like to discuss a ${ind.title} project.`)}
                    >
                      Get a complete proposal <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="section bg-slate-50">
          <div className="container advantage-layout grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="advantage-copy reveal">
              <div className="eyebrow text-blue-700 font-extrabold tracking-widest">Why Choose ZYD</div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Industrial Precision Meets Creative Design</h2>
              <p className="section-intro text-lg text-slate-600 mb-8">
                Since 2006, ZYD has been a leading signage manufacturer. Our 20,000㎡ production base 
                is equipped with advanced CNC and laser technology to ensure every sign meets international standards.
              </p>
              
              <div className="feature-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="feature flex gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="feature-icon bg-blue-100 w-12 h-12 flex items-center justify-center rounded-xl text-blue-700 font-black shrink-0">3D</div>
                  <div><h3 className="font-bold text-slate-900">Free 3D Mockups</h3><p className="text-sm text-slate-500">Visualize your project with professional technical drawings before production.</p></div>
                </div>
                <div className="feature flex gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="feature-icon bg-blue-100 w-12 h-12 flex items-center justify-center rounded-xl text-blue-700 font-black shrink-0">UL</div>
                  <div><h3 className="font-bold text-slate-900">Global DDP Shipping</h3><p className="text-sm text-slate-500">Hassle-free delivery with all customs, duties, and taxes handled by our team.</p></div>
                </div>
                <div className="feature flex gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="feature-icon bg-blue-100 w-12 h-12 flex items-center justify-center rounded-xl text-blue-700 font-black shrink-0">CN</div>
                  <div><h3 className="font-bold text-slate-900">Automated Production</h3><p className="text-sm text-slate-500">CNC accuracy ensures perfect geometry for channel letters and logo signs.</p></div>
                </div>
                <div className="feature flex gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="feature-icon bg-blue-100 w-12 h-12 flex items-center justify-center rounded-xl text-blue-700 font-black shrink-0">QC</div>
                  <div><h3 className="font-bold text-slate-900">24h Aging Test</h3><p className="text-sm text-slate-500">Rigorous quality control with 24-hour continuous lighting tests for all LED signs.</p></div>
                </div>
              </div>
            </div>

            <div className="factory-gallery reveal relative">
              <div className="relative z-10 bg-white p-3 rounded-[2rem] shadow-2xl">
                <img src="/assets/images/hero-factory.webp" alt="ZYD 20,000sqm Factory" className="factory-main w-full h-[400px] object-cover rounded-[1.5rem]" />
              </div>
              <div className="factory-thumbs grid grid-cols-3 gap-3 mt-4">
                <img src="/assets/images/cat-illuminated.webp" alt="Workshop" className="rounded-xl h-24 w-full object-cover" />
                <img src="/assets/images/cat-lightbox.webp" alt="CNC Machine" className="rounded-xl h-24 w-full object-cover" />
                <img src="/assets/images/cat-metal.webp" alt="Testing area" className="rounded-xl h-24 w-full object-cover" />
              </div>
              <div className="factory-stats absolute -bottom-8 left-8 right-8 bg-blue-600 text-white grid grid-cols-3 py-6 px-4 rounded-2xl shadow-xl z-20">
                <div className="text-center border-r border-blue-500/50">
                  <strong className="block text-2xl font-black italic">18+</strong>
                  <span className="text-[10px] uppercase tracking-wider opacity-80">Years Exp.</span>
                </div>
                <div className="text-center border-r border-blue-500/50">
                  <strong className="block text-2xl font-black italic">20k</strong>
                  <span className="text-[10px] uppercase tracking-wider opacity-80">Sqm Factory</span>
                </div>
                <div className="text-center">
                  <strong className="block text-2xl font-black italic">50+</strong>
                  <span className="text-[10px] uppercase tracking-wider opacity-80">Countries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container contact-card">
            <div className="contact-copy reveal">
              <div className="eyebrow gold">Start your project</div>
              <h2>Get a Factory-Direct Quote Today</h2>
              <p>Send your drawings or just an idea. Our engineers will provide a technical solution and a competitive quote within 24 hours.</p>
              <div className="contact-benefits">
                <span>✓ Direct Factory Pricing</span>
                <span>✓ Professional 3D Mockup</span>
                <span>✓ Door-to-Door Shipping (DDP)</span>
              </div>
            </div>

            <div className="quote-form reveal">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-grid">
                  <label className="full">
                    <span>What can we help you with?</span>
                    <select name="subject">
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Request a Quote">Request a Quote</option>
                      <option value="3D Mockup Request">3D Mockup Request</option>
                      <option value="Sample Request">Sample Request</option>
                    </select>
                  </label>
                  <label className="full">
                    <span>Message</span>
                    <textarea name="message" rows={4} placeholder="Tell us about your signage project..."></textarea>
                  </label>
                  <button 
                    type="submit" 
                    className="button button-primary full-button"
                    onClick={() => handleWhatsApp(document.createElement('a') as any, "Hi Aaron, I'm interested in starting a signage project.")}
                  >
                    Start Chat on WhatsApp
                  </button>
                </div>
                <p className="form-note">Reply time: Typically within 1 hour during business hours.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/assets/images/logo-header.png" alt="ZYD Signage" />
            <p>{siteConfig.companyName} Factory-direct custom signage solutions since 2006.</p>
          </div>
          <div>
            <h3>Products</h3>
            <a href="#products">Illuminated Letters</a>
            <a href="#products">LED Light Boxes</a>
            <a href="#products">Wayfinding Systems</a>
            <a href="#products">Outdoor Signs</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#about">About Us</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Support</h3>
            <span>Email: {siteConfig.salesEmail}</span>
            <span>WhatsApp: +{siteConfig.whatsappNumber} (Aaron)</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 {siteConfig.companyName}. All rights reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <a 
        className="floating-whatsapp" 
        href="#contact" 
        onClick={(e) => handleWhatsApp(e, "Hi Aaron, I have a question about signage.")}
      >
        <svg viewBox="0 0 24 24"><path d="M19.1 4.9A9.9 9.9 0 0 0 3.6 16.8L2.2 22l5.4-1.4A10 10 0 1 0 19.1 4.9Zm-7.1 15a8 8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3a8 8 0 1 1 6.8 3.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.2-.2-.2-.4-.2-.6-.3Z"/></svg>
        <span>Chat with Aaron</span>
      </a>
    </>
  );
}
