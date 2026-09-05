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
        <div className="w-full max-w-[110rem] px-4 sm:px-6 lg:px-10 mx-auto">
          <h1 className="text-7xl font-black uppercase tracking-tighter mb-12">Case Studies</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
            {[
              { title: 'THE SETAI SEA OF GALILEE', tag: 'Hospitality', desc: 'Signage and wayfinding for a luxury lakeside resort in Israel, overlooking the Sea of Galilee.', img: 'the-setai-sea-of-galilee.jpg' },
              { title: 'ZIMBABWE NATIONAL SPORTS STADIUM', tag: 'Stadium', desc: 'Architectural signage and visitor wayfinding for a landmark sports stadium in Zimbabwe, Africa.', img: 'zimbabwe-national-sports-stadium.jpg' },
              { title: 'AFREXIMBANK AFRICA TRADE CENTRE', tag: 'Commercial', desc: 'Wayfinding and architectural signage for a landmark trade centre in Harare, Zimbabwe.', img: 'afreximbank-africa-trade-centre.jpg' },
              { title: 'TEL HAZOR NATIONAL PARK', tag: 'Heritage', desc: 'Wayfinding and interpretive signage for an archaeological national park in Israel.', img: 'tel-hazor-national-park.jpg' },
              { title: 'PROJECT 05', tag: 'Upcoming', desc: 'Project details coming soon.', img: null },
              { title: 'PROJECT 06', tag: 'Upcoming', desc: 'Project details coming soon.', img: null },
            ].map((proj, idx) => (
              <div key={idx} className="reveal flex flex-col bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 group hover:shadow-2xl transition-all">
                <div className="h-[26rem] overflow-hidden">
                  {proj.img ? (
                    <img src={`/assets/images/${proj.img}`} alt={proj.title} width={1200} height={800} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex flex-col items-center justify-center gap-4">
                      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                      <span className="text-sm font-black uppercase tracking-widest text-slate-400">Image Coming Soon</span>
                    </div>
                  )}
                </div>
                <div className="p-12 flex flex-col flex-1">
                  <div className="text-blue-600 font-black text-[11px] uppercase tracking-[0.3em] mb-4 italic">{proj.tag}</div>
                  <h3 className="text-[1.7rem] leading-tight font-black mb-5 uppercase tracking-tighter">{proj.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed font-medium">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-950 p-16 lg:p-20 rounded-[4rem] shadow-2xl text-center">
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
