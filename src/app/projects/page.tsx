'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
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
    <>
      <main className="bg-slate-100 min-h-screen pt-32 pb-40">
        <div className="container max-w-5xl">
          <h1 className="text-7xl font-black uppercase tracking-tighter mb-12">Case Studies</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {[
              { title: 'Dubai Int. Airport', tag: 'Wayfinding', desc: 'Complete architectural signage overhaul across 3 terminals.', img: 'case-facade.webp' },
              { title: 'Singapore Medical Ctr', tag: 'Healthcare', desc: 'Full-spectrum antibacterial wayfinding and room ID systems.', img: 'case-hotel.webp' },
              { title: 'London Financial Hub', tag: 'Illuminated', desc: 'Large-scale halo-lit steel branding for 50-story commercial towers.', img: 'case-monument.webp' },
              { title: 'Riyadh Urban Vision', tag: 'Landscape', desc: 'Custom branding benches and smart city wayfinding furniture.', img: 'case-neon.webp' },
            ].map((proj, idx) => (
              <div key={idx} className="reveal bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 group hover:shadow-2xl transition-all">
                <div className="h-80 overflow-hidden">
                  <img src={`/assets/images/${proj.img}`} alt={proj.title} width={1200} height={800} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <div className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3 italic">{proj.tag}</div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{proj.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-950 p-16 rounded-[4rem] shadow-2xl text-center">
            <p className="text-3xl text-blue-400 font-black italic mb-6 uppercase tracking-tighter">Your Project Next?</p>
            <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">We handle end-to-end design, manufacturing, and Global DDP shipping for large-scale architectural projects.</p>
            <Link href="/#contact" className="button button-green-base px-16 py-8 rounded-full text-white font-black text-2xl shadow-2xl">
              CONSULT AN ENGINEER
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
