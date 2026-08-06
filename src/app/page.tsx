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
              <div className="eyebrow">Factory-direct custom signage since 2006</div>
              <h1>Custom Signage Solutions <span>Direct from Factory</span></h1>
              <p className="hero-lead">Premium illuminated signs, light boxes, wayfinding systems and outdoor signage for hotels, retail stores, commercial buildings and public projects worldwide.</p>
              <div className="hero-actions">
                <a 
                  className="button button-whatsapp js-whatsapp" 
                  href="#contact" 
                  onClick={(e) => handleWhatsApp(e, "Hi ZYD, I would like a free 3D mockup and quote. I can send my logo or reference image.")}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.1 4.9A9.9 9.9 0 0 0 3.6 16.8L2.2 22l5.4-1.4A10 10 0 1 0 19.1 4.9Zm-7.1 15a8 8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3a8 8 0 1 1 6.8 3.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.2-.2-.2-.4-.2-.6-.3Z"/></svg>
                  Get My Free 3D Mockup & Quote
                </a>
                <a className="button button-secondary" href="#products">Browse Products</a>
              </div>
              <div className="trust-grid" aria-label="Company highlights">
                <div className="trust-item">
                  <span className="trust-icon"><svg viewBox="0 0 24 24"><path d="M4 21V6l8-3 8 3v15M8 9h2m4 0h2M8 13h2m4 0h2M8 17h2m4 0h2M2 21h20"/></svg></span>
                  <strong>Established</strong><small>2006</small>
                </div>
                <div className="trust-item">
                  <span className="trust-icon"><svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V8h5v13m4 0V3h5v18M7 11h1m-1 3h1m-1 3h1m9-11h1m-1 4h1m-1 4h1m-1 4h1"/></svg></span>
                  <strong>20,000㎡</strong><small>Production Base</small>
                </div>
                <div className="trust-item">
                  <span className="trust-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z"/></svg></span>
                  <strong>Global</strong><small>DDP Shipping</small>
                </div>
                <div className="trust-item">
                  <span className="trust-icon"><svg viewBox="0 0 24 24"><path d="m3 7 9-4 9 4-9 4-9-4Zm0 0v10l9 4 9-4V7M12 11v10"/></svg></span>
                  <strong>MOQ</strong><small>From 1 Set</small>
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
        <section id="capabilities" className="section section-white">
          <div className="container advantage-layout">
            <div className="advantage-copy reveal">
              <div className="eyebrow">Why Choose ZYD</div>
              <h2>Advanced Manufacturing & Design Support</h2>
              <p className="section-intro">Since 2006, we have combined industrial precision with creative design to deliver signage that lasts.</p>
              
              <div className="feature-grid">
                <div className="feature">
                  <div className="feature-icon">3D</div>
                  <div><h3>Free 3D Mockups</h3><p>Visualize your signs in place before production begins.</p></div>
                </div>
                <div className="feature">
                  <div className="feature-icon">UL</div>
                  <div><h3>Global Standards</h3><p>UL-listed components and CE certification for export.</p></div>
                </div>
                <div className="feature">
                  <div className="feature-icon">CN</div>
                  <div><h3>Precision CNC</h3><p>Automated cutting and bending for perfect letter geometry.</p></div>
                </div>
                <div className="feature">
                  <div className="feature-icon">QC</div>
                  <div><h3>24h Aging Test</h3><p>Every illuminated sign is tested for 24 hours before packing.</p></div>
                </div>
              </div>
            </div>

            <div className="factory-gallery reveal">
              <img src="/assets/images/hero-factory.webp" alt="ZYD Factory" className="factory-main" />
              <div className="factory-thumbs">
                <img src="/assets/images/cat-illuminated.webp" alt="Workshop" />
                <img src="/assets/images/cat-lightbox.webp" alt="CNC Machine" />
                <img src="/assets/images/cat-metal.webp" alt="Testing area" />
              </div>
              <div className="factory-stats">
                <div><strong>18+</strong><span>Years Exp.</span></div>
                <div><strong>20k</strong><span>Sqm Factory</span></div>
                <div><strong>50+</strong><span>Countries</span></div>
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
                    onClick={() => handleWhatsApp(document.createElement('a') as any, "Hi ZYD, I'm interested in starting a signage project.")}
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
            <p>Dalian Zhiyudao Signage & Tech. Co., Ltd. Factory-direct custom signage solutions since 2006.</p>
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
            <span>WhatsApp: +{siteConfig.whatsappNumber}</span>
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
        onClick={(e) => handleWhatsApp(e, "Hi ZYD, I have a question about signage.")}
      >
        <svg viewBox="0 0 24 24"><path d="M19.1 4.9A9.9 9.9 0 0 0 3.6 16.8L2.2 22l5.4-1.4A10 10 0 1 0 19.1 4.9Zm-7.1 15a8 8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3a8 8 0 1 1 6.8 3.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.2-.2-.2-.4-.2-.6-.3Z"/></svg>
        <span>Chat on WhatsApp</span>
      </a>
    </>
  );
}
