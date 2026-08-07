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

  const handleWhatsApp = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, message: string) => {
    if (e) e.preventDefault();
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Header />
      <main id="main">
        {/* 1. MEGA HERO SECTION (郑总图一风格 - 极致扩容版) */}
        <section className="hero relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden py-32 lg:py-48 xl:py-60">
          {/* Enhanced科技感径向渐变 */}
          <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,#1d4ed8,transparent_60%),radial-gradient(circle_at_20%_70%,#1e3a8a,transparent_50%)]"></div>
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              {/* Text Copy Area */}
              <div className="hero-copy reveal lg:col-span-7 xl:col-span-8">
                <div className="eyebrow text-blue-500 font-black tracking-[0.4em] mb-8 uppercase text-sm lg:text-base border-l-4 border-blue-600 pl-5">
                  Precision Engineering since 2006
                </div>
                <h1 className="text-6xl md:text-8xl xl:text-[150px] font-black leading-[0.85] tracking-tighter mb-10 text-white drop-shadow-2xl">
                  CRAFTING <br/>
                  <span className="text-blue-500">TRUSTED</span> <br/>
                  SIGNAGE
                </h1>
                <p className="hero-lead text-xl lg:text-2xl text-slate-400 mb-14 max-w-3xl leading-relaxed font-medium">
                  Leading-edge architectural signage systems for global B2B projects. 
                  <span className="block mt-3 text-white font-bold text-2xl">Factory Direct · Global DDP · 20,000㎡ Base</span>
                </p>
                <div className="hero-actions flex flex-wrap gap-8 mb-16">
                  <a 
                    className="button button-whatsapp bg-blue-600 hover:bg-blue-700 shadow-[0_25px_60px_rgba(37,99,235,0.45)] px-14 py-7 rounded-full text-white font-black text-2xl flex items-center gap-5 transition-all transform hover:-translate-y-2 active:scale-95" 
                    href="#contact" 
                    onClick={(e) => handleWhatsApp(e, "Hi Aaron, I would like a free 3D mockup and quote.")}
                  >
                    <img src="/assets/images/whatsapp-icon.jpg" alt="WhatsApp" className="w-12 h-12 object-contain" />
                    START MY PROJECT
                  </a>
                  <a className="button border-2 border-slate-700 hover:bg-white hover:text-slate-950 px-14 py-7 rounded-full font-black text-2xl transition-all tracking-tight" href="/products">
                    VIEW SOLUTIONS
                  </a>
                </div>
                
                {/* Large trust metrics for high-end feel */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-slate-800/60">
                  <div><strong className="block text-4xl font-black text-white italic mb-1">20,000</strong><span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-black">SQM Factory</span></div>
                  <div><strong className="block text-4xl font-black text-white italic mb-1">18+</strong><span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-black">Years Exp.</span></div>
                  <div><strong className="block text-4xl font-black text-white italic mb-1">50+</strong><span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-black">Countries</span></div>
                  <div><strong className="block text-4xl font-black text-white italic mb-1">DDP</strong><span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-black">Shipping</span></div>
                </div>
              </div>

              {/* Mega Image Area - Bleeding out effect */}
              <div className="hero-gallery reveal lg:col-span-5 xl:col-span-4 relative">
                <div className="relative z-10 transform lg:scale-125 xl:scale-[1.4] lg:translate-x-10">
                  <div className="absolute -inset-10 bg-blue-600/10 blur-[100px] rounded-full"></div>
                  <figure className="gallery-main relative overflow-hidden rounded-[4rem] shadow-[0_60px_120px_rgba(0,0,0,0.8)] border-[6px] border-slate-800/50 bg-slate-900 group">
                    <img src="/assets/images/hero-medical.jpg" alt="High Quality Medical Signage" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </figure>
                  {/* Floating ID Card Style detail */}
                  <div className="absolute -bottom-10 -left-10 bg-blue-600 px-8 py-6 rounded-[2rem] shadow-2xl hidden xl:block border-4 border-white/10 backdrop-blur-lg">
                    <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/70 mb-2">Featured Industry</span>
                    <span className="text-2xl font-black italic text-white leading-none">Medical Care <br/>Signage System</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Explore Our Signage Products */}
        <section id="products" className="section bg-slate-50">
          <div className="container">
            <div className="section-heading text-center mb-16 reveal">
              <div className="eyebrow text-blue-700 font-extrabold tracking-widest uppercase mb-4">Product Catalog</div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Explore Our Signage Products</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">Browse by product type, lighting method, and material to find the perfect solution for your space.</p>
            </div>

            <div className="category-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Illuminated Letters', desc: 'Front-lit, halo-lit and dual-lit LED channel letters.', img: 'cat-illuminated.webp', id: 'custom-halo-lit-letters' },
                { title: 'LED Light Boxes', desc: 'Ultra-slim, magnetic, and projecting light boxes.', img: 'cat-lightbox.webp', id: 'ultra-slim-led-light-box' },
                { title: 'LED Neon Signs', desc: 'High-visibility custom logos and decorative neon flex.', img: 'cat-neon.webp', id: 'custom-led-neon-sign' },
                { title: 'Wayfinding Systems', desc: 'Airport, hospital, and architectural directional signs.', img: 'hero-wayfinding.png', id: 'architectural-wayfinding-system' },
                { title: 'Outdoor Signs', desc: 'Large pylon signs and corporate entry identification.', img: 'cat-outdoor.webp', id: 'outdoor-pylon-monument-sign' },
                { title: 'Metal & Acrylic Signs', desc: 'Elegant laser-cut metal and premium acrylic plaques.', img: 'cat-metal.webp', id: 'metal-acrylic-logo-sign' },
                { title: 'Landscape & Furniture', desc: 'Bespoke urban landscape branding and outdoor seating.', img: 'landscape-bench.jpg', id: 'custom-landscape-furniture' },
                { title: 'Complete Systems', desc: 'Coordinated sign packages for large-scale B2B projects.', img: 'cat-system.webp', id: 'complete-signage-system' },
              ].map((p, i) => (
                <div key={i} className="reveal bg-white border border-slate-100 p-4 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
                  <div className="overflow-hidden rounded-[1.5rem] mb-6 h-52 bg-slate-100">
                    <img src={`/assets/images/${p.img}`} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-black mb-2 text-slate-900">{p.title}</h3>
                  <p className="text-slate-500 text-sm mb-4 h-10 overflow-hidden leading-relaxed">{p.desc}</p>
                  <a href={`/products/${p.id}`} className="text-blue-600 font-black text-sm uppercase tracking-wider hover:gap-2 flex items-center gap-1 transition-all">
                    View Details <span>→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Solutions by Industry */}
        <section id="industries" className="section bg-white">
          <div className="container">
            <div className="section-heading text-center mb-16 reveal">
              <div className="eyebrow text-blue-700 font-extrabold tracking-widest uppercase mb-4">Project Solutions</div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Solutions by Industry</h2>
              <p className="text-lg text-slate-500">We serve specialized sectors with tailored engineering and design support.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Hospitality', items: ['Hotel Entry Pylons', 'Room Number Signs', 'Lobby Logo Walls'], img: 'ind-hotel.webp', icon: 'H' },
                { title: 'Retail & Malls', items: ['Storefront Letters', 'Mall Directories', 'Digital Kiosks'], img: 'ind-retail.webp', icon: 'R' },
                { title: 'Corporate', items: ['Lobby ID Signs', 'Floor Directories', 'Wayfinding Maps'], img: 'ind-office.webp', icon: 'C' },
                { title: 'Transportation', items: ['Airport Terminal ID', 'Parking Directionals', 'Flight Gates'], img: 'hero-wayfinding.png', icon: 'T' },
              ].map((ind, i) => (
                <div key={i} className="reveal relative group rounded-[2.5rem] overflow-hidden shadow-lg h-[400px]">
                  <img src={`/assets/images/${ind.img}`} alt={ind.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                    <span className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-xl font-black text-xl mb-4">{ind.icon}</span>
                    <h3 className="text-2xl font-black mb-4">{ind.title}</h3>
                    <ul className="text-sm text-slate-300 space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {ind.items.map((item, j) => <li key={j}>• {item}</li>)}
                    </ul>
                    <button onClick={() => handleWhatsApp(null as any, `Hi Aaron, tell me more about ${ind.title} solutions.`)} className="text-white font-black text-sm uppercase tracking-widest hover:underline">Full Proposal →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WhatsApp CTA Banner */}
        <section className="py-16 bg-blue-600 overflow-hidden relative">
          <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">Send Your Logo or Drawings</h2>
              <p className="text-xl text-blue-100">Get a 100% free 3D mockup and factory-direct quote within 24 hours.</p>
            </div>
            <button 
              onClick={() => handleWhatsApp(null as any, "Hi Aaron, I'm sending my logo/drawings for a quote.")}
              className="bg-white text-blue-600 font-black px-12 py-5 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform flex items-center gap-3"
            >
              <img src="/assets/images/whatsapp-icon.jpg" alt="WhatsApp" className="whatsapp-icon-img" />
              Start Free Quote
            </button>
          </div>
        </section>

        {/* 5. Why Choose ZYD */}
        <section id="capabilities" className="section bg-slate-50">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="advantage-copy reveal">
              <div className="eyebrow text-blue-700 font-extrabold tracking-widest uppercase mb-4">Core Strengths</div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Why Choose ZYD</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed text-slate-500">
                With 18+ years of export experience and a 20,000㎡ state-of-the-art production base, 
                we combine industrial scale with creative precision to deliver perfect results every time.
              </p>
              
              <div className="feature-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Factory Direct', desc: 'No middlemen. You get real factory pricing directly from our 20,000㎡ production base.', icon: 'F' },
                  { title: 'Free 3D Mockups', desc: 'Visualize your signs in place with professional architectural renders before production.', icon: 'M' },
                  { title: 'Strict QC', desc: 'Every sign undergoes a 24-hour aging test and multi-point inspection to ensure perfection.', icon: 'Q' },
                  { title: 'Global DDP', desc: 'We handle all customs, duties, and door-to-door shipping to over 50 countries.', icon: 'S' },
                ].map((f, i) => (
                  <div key={i} className="feature flex gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="feature-icon bg-blue-100 w-12 h-12 flex items-center justify-center rounded-xl text-blue-700 font-black shrink-0">{f.icon}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{f.title}</h3><p className="text-sm text-slate-500 leading-snug">{f.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="factory-gallery reveal relative">
              <div className="relative z-10 bg-white p-3 rounded-[3rem] shadow-2xl">
                <img src="/assets/images/factory-overview.jpg" alt="ZYD 20,000sqm Factory" className="w-full h-[500px] object-cover rounded-[2.5rem]" />
              </div>
              <div className="factory-stats absolute -bottom-8 left-8 right-8 bg-blue-600 text-white grid grid-cols-3 py-8 px-4 rounded-[2rem] shadow-2xl z-20">
                <div className="text-center border-r border-blue-500/50">
                  <strong className="block text-3xl font-black italic">18+</strong>
                  <span className="text-[10px] uppercase tracking-widest opacity-80 font-bold">Years Exp.</span>
                </div>
                <div className="text-center border-r border-blue-500/50">
                  <strong className="block text-3xl font-black italic">20k</strong>
                  <span className="text-[10px] uppercase tracking-widest opacity-80 font-bold">Sqm Factory</span>
                </div>
                <div className="text-center">
                  <strong className="block text-3xl font-black italic">50+</strong>
                  <span className="text-[10px] uppercase tracking-widest opacity-80 font-bold">Countries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Featured Projects */}
        <section id="projects" className="section bg-white">
          <div className="container">
            <div className="section-heading text-center mb-16 reveal">
              <div className="eyebrow text-blue-700 font-extrabold tracking-widest uppercase mb-4">Case Studies</div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Featured Projects</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">From landmark buildings to global retail chains, see how we bring brands to life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Airport Wayfinding', cat: 'Transportation', img: 'hero-wayfinding.png' },
                { title: 'Hospital Branding', cat: 'Medical', img: 'hero-medical.jpg' },
                { title: 'Corporate HQ', cat: 'Office', img: 'ind-office.webp' },
                { title: 'Public Landscape', cat: 'Urban', img: 'landscape-bench.jpg' },
              ].map((proj, i) => (
                <div key={i} className="reveal group bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="h-64 overflow-hidden bg-slate-100">
                    <img src={`/assets/images/${proj.img}`} alt={proj.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <small className="text-blue-600 font-black uppercase text-[10px] tracking-widest mb-2 block">{proj.cat}</small>
                    <h3 className="text-xl font-bold text-slate-900">{proj.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Contact Section */}
        <section id="contact" className="contact-section py-24 bg-slate-900 relative overflow-hidden">
          <div className="container contact-card grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="contact-copy reveal">
              <div className="eyebrow text-amber-500 font-bold tracking-widest mb-4 uppercase">Start your project</div>
              <h2 className="text-5xl font-black text-white mb-8">Get a Factory-Direct Quote Today</h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-8">Ready to start? Send your project details and our engineering team will provide a comprehensive solution within 24 hours.</p>
              <div className="flex flex-col gap-4 text-white font-bold">
                <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl"><span className="text-green-400 font-black">✓</span> Direct Factory Pricing</div>
                <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl"><span className="text-green-400 font-black">✓</span> Free 3D Design Support</div>
                <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl"><span className="text-green-400 font-black">✓</span> Professional DDP Shipping</div>
              </div>
            </div>
            <div className="quote-form reveal bg-white p-10 rounded-[3rem] shadow-2xl">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-6">
                  <label className="block text-sm font-black text-slate-900 uppercase tracking-widest mb-2">Message</label>
                  <textarea className="w-full border-2 border-slate-100 p-6 rounded-3xl mb-6 focus:border-blue-500 outline-none transition-colors text-slate-700" rows={5} placeholder="Tell us about your project requirements..."></textarea>
                </div>
                <button 
                  className="button button-primary w-full bg-blue-600 hover:bg-blue-700 py-6 text-white font-black text-xl rounded-full shadow-2xl shadow-blue-500/40 transition-all active:scale-95 flex items-center justify-center gap-4"
                  onClick={(e) => handleWhatsApp(e as any, "Hi Aaron, I want to start a custom signage project.")}
                >
                  <img src="/assets/images/whatsapp-icon.jpg" alt="WhatsApp" className="whatsapp-icon-img !w-12 !h-12" />
                  Start WhatsApp Chat
                </button>
                <p className="text-center text-slate-400 text-xs mt-6 uppercase tracking-widest">Aaron typically replies within 1 hour</p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
