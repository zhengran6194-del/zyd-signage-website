'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-32 pb-40">
        <div className="container max-w-5xl">
          <h1 className="text-7xl font-black uppercase tracking-tighter mb-12">Case Studies</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {[
              { title: 'Dubai Int. Airport', tag: 'Wayfinding', desc: 'Complete architectural signage overhaul across 3 terminals.' },
              { title: 'Singapore Medical Ctr', tag: 'Healthcare', desc: 'Full-spectrum antibacterial wayfinding and room ID systems.' },
              { title: 'London Financial Hub', tag: 'Illuminated', desc: 'Large-scale halo-lit steel branding for 50-story commercial towers.' },
              { title: 'Riyadh Urban Vision', tag: 'Landscape', desc: 'Custom branding benches and smart city wayfinding furniture.' },
            ].map((proj, idx) => (
              <div key={idx} className="reveal bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 group hover:shadow-2xl transition-all">
                <div className="h-72 bg-slate-200"></div>
                <div className="p-10">
                  <div className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-3 italic">{proj.tag}</div>
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{proj.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{proj.desc}</p>
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
      <Footer />
    </>
  );
}
