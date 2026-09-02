'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/config/site';

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-9"/></svg>
);

const HelpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
);

const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
);

const WrenchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);

const TruckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
);

const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);

const HammerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.36"/><path d="m20.91 11.7-4.77-4.73"/><path d="M20.91 11.7a2.13 2.13 0 0 0 0-3L18.73 6.5a2.13 2.13 0 0 0-3 0l-4.73 4.77L15 15.64l4.77-4.73Z"/><path d="m12 9 4.73 4.77"/><path d="m12 9-2.11-2.12a2.12 2.12 0 0 0-3 0l-2.12 2.12a2.12 2.12 0 0 0 0 3l2.12 2.12 3-3Z"/></svg>
);

const categories = [
  { title: 'Buying Guides', icon: <BookIcon /> },
  { title: 'Technical Guides', icon: <WrenchIcon /> },
  { title: 'Installation', icon: <HammerIcon /> },
  { title: 'Materials & Finishes', icon: <LayersIcon /> },
  { title: 'Shipping & Logistics', icon: <TruckIcon /> },
  { title: 'General FAQ', icon: <HelpIcon /> },
];

const guides = [
  { category: 'Buying Guide', title: 'How Much Do Custom Channel Letters Cost?', date: 'Aug 24, 2026', image: 'cat-illuminated.webp' },
  { category: 'Technical Guide', title: 'Front-Lit vs Halo-Lit Channel Letters', date: 'Aug 20, 2026', image: 'lightbox.webp' },
  { category: 'Buying Guide', title: 'How to Choose the Right Sign for Your Business', date: 'Aug 15, 2026', image: 'cat-wayfinding.webp' },
  { category: 'Materials', title: '304 Stainless Steel vs Galvanized Steel for Outdoor Signs', date: 'Aug 10, 2026', image: 'cat-metal.webp' },
];

const faqs = [
  { q: 'Can you provide free 3D mockups?', a: 'Yes, our engineering team provides complimentary high-fidelity 3D mockups for all project inquiries to help you visualize the final result before production.' },
  { q: 'What file formats do I need to provide for my logo?', a: 'We prefer vector files such as .AI, .EPS, .SVG, or high-resolution .PDF. These ensure the highest precision for CNC cutting and fabrication.' },
  { q: 'What is the standard lead time?', a: 'Typical production lead time is 7-12 working days depending on project complexity. Large-scale rollout projects are phased according to your schedule.' },
  { q: 'Do you provide detailed installation drawings?', a: 'Yes, every sign comes with a 1:1 scale installation template and comprehensive technical drawings showing mounting points and electrical connections.' },
  { q: 'What is International DDP Shipping?', a: 'DDP (Delivered Duty Paid) means we handle everything: freight, customs clearance, and local duties. We deliver directly to your doorstep in 50+ countries with no hidden fees.' },
  { q: 'Are your signs durable in coastal environments?', a: 'Absolutely. For coastal areas, we recommend 304 Stainless Steel with high-grade marine powder coating. This combination ensures maximum resistance to salt spray and corrosion.' },
  { q: 'What are your warranty terms?', a: 'We offer a comprehensive 3-5 year global warranty on all LED components, power units, and structural integrity of our signage products.' },
  { q: 'Do you offer engineering support for structural calculations?', a: 'Yes, for large-scale monument signs and pylons, our structural engineers can provide wind load calculations and foundation specifications tailored to your local environment.' },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FAQPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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

  return (
    <main className="bg-white min-h-screen">
      <JsonLd data={faqJsonLd} />
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-950 text-white overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img src="/assets/images/hero-bg-seafront.png" alt="Industrial Facility" width={1920} height={1080} loading="eager" fetchPriority="high" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80"></div>
        </div>
        <div className="container relative z-10 text-center">
          <div className="reveal">
            <div className="text-blue-400 font-bold tracking-[0.4em] uppercase text-xs mb-4">Knowledge Base</div>
            <h1 className="text-5xl lg:text-7xl font-black mb-8 uppercase tracking-tighter">Resources & <br/><span className="text-blue-500 italic">FAQ</span></h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed opacity-90">
              Expert insights on signage planning, materials, and global logistics to help you source with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY GRID */}
      <section className="section bg-slate-50 border-y border-slate-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="reveal bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 leading-tight">{cat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POPULAR GUIDES */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex justify-between items-end mb-12 reveal">
            <div>
              <h2 className="uppercase tracking-tighter text-slate-900">Popular Guides</h2>
              <p className="text-slate-500 font-medium mt-2">Deep dives into signage technology and procurement.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guides.map((guide, i) => (
              <button
                key={i}
                type="button"
                onClick={() => openWhatsApp(`Hi Aaron, I would like to discuss the "${guide.title}" guide and my signage project.`)}
                className="reveal group cursor-pointer w-full text-left"
              >
                <div className="bg-slate-100 rounded-[2rem] h-48 mb-6 overflow-hidden relative">
                  <img 
                    src={`/assets/images/${guide.image}`} 
                    alt={guide.title} 
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-3">{guide.category}</div>
                <h4 className="text-lg font-black text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">{guide.title}</h4>
                <div className="text-xs text-slate-400 font-bold">{guide.date}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION */}
      <section className="section bg-slate-50 border-t border-slate-100">
        <div className="container max-w-4xl">
          <div className="text-center mb-16 reveal">
            <h2 className="uppercase tracking-tighter text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium mt-2">Quick answers to common project inquiries.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-xl font-black uppercase tracking-tight transition-colors ${activeFaq === i ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-500'}`}>
                    {faq.q}
                  </span>
                  <div className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`}>
                    <ChevronDownIcon />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-10 pb-8 pt-0">
                    <p className="text-slate-600 font-medium leading-relaxed border-t border-slate-50 pt-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="section bg-white">
        <div className="container">
          <div className="bg-slate-950 p-16 lg:p-24 rounded-[4rem] text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 reveal">
              <h2 className="text-white mb-6 uppercase tracking-tighter">Still have questions?</h2>
              <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-medium">Our technical sales engineers are ready to assist with your specific project requirements.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="button-green-base">Contact Sales Support</Link>
                <button
                  type="button"
                  onClick={() => openWhatsApp('Hi Aaron, I would like to submit a technical ticket for my signage project. Please help me review the requirements and next steps.')}
                  className="px-12 py-4 border border-white/20 rounded font-bold uppercase text-sm text-white hover:bg-white hover:text-slate-950 transition-all"
                >
                  Submit Technical Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
