'use client';
import React from 'react';

export default function FAQPage() {
  return (
    <>
      <main className="bg-slate-50 min-h-screen pt-24 pb-32">
        <div className="container max-w-4xl">
          <h1 className="text-6xl font-black text-slate-900 mb-12 uppercase tracking-tighter">Resources & FAQ</h1>
          <div className="space-y-8">
            {[
              { q: 'What is the standard lead time?', a: 'Typical production is 7-12 working days. High-volume rollout projects are phased accordingly.' },
              { q: 'Do you offer DDP shipping?', a: 'Yes, we provide full Door-to-Door (DDP) service to 50+ countries, covering all duties and customs.' },
              { q: 'Can you work from 3D architectural files?', a: 'We support all major CAD/3D formats and can provide custom 3D mockups within 48 hours.' },
              { q: 'What are your warranty terms?', a: 'We offer a 3-5 year global warranty on all LED components and structural integrity.' },
              { q: 'Do you have a Minimum Order Quantity?', a: 'For custom B2B projects, we have no strict MOQ, but volume pricing starts at 10+ units.' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 reveal">
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic text-blue-600">{f.q}</h3>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
