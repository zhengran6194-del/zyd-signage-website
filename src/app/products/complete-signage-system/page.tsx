'use client';

import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

const faqs = [
  {
    question: 'What is a complete signage system?',
    answer: 'A complete signage system is one coordinated package covering every sign type a project needs, from entry monuments and channel letters to wayfinding, light boxes, and interior branding. One specification holds the materials, typography, and hardware consistent, so the brand reads the same at every touchpoint.',
  },
  {
    question: 'When does a project benefit from a single-supplier program?',
    answer: 'Single-partner delivery pays off when a brand must be repeated across several buildings or cities, because the finish, color, and mounting details stay identical. It also simplifies project management: one schedule, one quality process, and one point of contact for changes.',
  },
  {
    question: 'What is the lead time for a multi-element signage program?',
    answer: 'Typical production lead time is 7–14 days per element group depending on scope and quantity. Rollout programs are phased by site or by opening date against your construction schedule.',
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function CompleteSignageSystemPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal visible">
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Program Management &amp; Fabrication</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Complete <span className="text-blue-500 italic">Signage</span> <br/>Systems
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed font-medium">
                Coordinated sign programs for chain rollouts and multi-site brand projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide"
                >
                  GET A QUOTE
                </Link>
              </div>
            </div>
            <div className="reveal visible relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <img src="/assets/images/cat-system.webp" alt="Complete Signage System" width={1200} height={800} loading="eager" fetchPriority="high" className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/5 object-cover w-full h-[420px] lg:h-[500px]" />
            </div>
          </div>
        </section>

        {/* 2. Direct answer block */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">Complete systems: the short answer</div>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-semibold max-w-4xl">
                A complete signage system delivers every sign type in a project as one coordinated package, so the brand looks the same on the facade, in the car park, and inside the building. Choose it when many elements must be repeated across sites without the finish or hardware drifting between suppliers.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buyer-question sections */}
        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Which sign types belong in one program?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                A full program typically combines entry monuments or pylons, illuminated channel letters, light boxes, wayfinding, and interior logo and room signage. Grouping them matters because a chain rollout needs the same typography, color, and mounting logic at every site. Our selection guide explains how each format earns its place.
              </p>
              <div className="mt-auto">
                <Link href="/guides/how-to-choose-the-right-sign-for-your-business" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Read the sign-selection guide</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How is consistency maintained across multiple locations?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Consistency comes from a locked specification: fixed materials, finishes, and graphic standards that every site order follows rather than re-deciding each location. Exposed metal elements follow one material route, which is often 304 stainless steel outdoors. The material guide covers how that compares with coated steel.
              </p>
              <div className="mt-auto">
                <Link href="/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Review material selection logic</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">What information is needed to quote a full program?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Send the site list, the required sign types and quantities per site, the brand standards or artwork, the mounting conditions, and the opening sequence. Providing the full package in one brief lets the program be priced, scheduled, and phased as a single coordinated scope.
              </p>
              <div className="mt-auto">
                <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Send your project brief</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How is a multi-site rollout phased and shipped?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Rollouts are scheduled by site or opening date, with element groups produced and packed in the order they are needed on site. Global DDP delivery is quoted into the program so freight, clearance, and duties are handled as part of the scope rather than as a separate surprise.
              </p>
              <div className="mt-auto">
                <Link href="/products/architectural-wayfinding-system" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Explore coordinated wayfinding</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Specification selection guide */}
        <section className="section bg-slate-100 pt-0">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-14">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black text-slate-900 mb-3 uppercase tracking-tight">Specifications with selection logic</h2>
                <p className="text-slate-500 leading-relaxed mb-10 max-w-2xl font-medium">Each item is a decision input for a coordinated program. Confirm the scope, standards, and phasing before production.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Program scope</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Exterior entry and building identification</li>
                      <li>&bull; Illuminated letters and light boxes</li>
                      <li>&bull; Wayfinding and interior brand elements</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Locked specification</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; One material and finish standard per element group</li>
                      <li>&bull; Fixed typography and color references</li>
                      <li>&bull; 304 stainless steel for exposed outdoor metal</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Lighting &amp; components</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; LED modules using Samsung or Epistar chips</li>
                      <li>&bull; MeanWell power supplies rated IP67</li>
                      <li>&bull; Weather operation from -40°C to +60°C for exterior elements</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Phasing &amp; delivery</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Production grouped by site or opening date</li>
                      <li>&bull; Global DDP delivery included in the scope</li>
                      <li>&bull; 3–5 year global warranty on components and structure</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 uppercase tracking-tighter">Factory Advantage</h3>
                <p className="text-slate-400 mb-8 leading-relaxed font-medium">Direct manufacturing from our 20,000sqm base in Dalian, established in 2006, keeps every element group under one quality-control process.</p>
                <div className="space-y-5">
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">Global DDP Shipping</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">MOQ: 1</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">Lead Time: 7–14 days</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="section bg-slate-100 pt-0">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
                  <h3 className="text-xl font-black text-blue-700 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="bg-slate-50 py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Planning a multi-site program?</h2>
            <p className="text-slate-500 font-medium mb-8">Send the site list, sign types, quantities, brand standards, and opening sequence for a project-specific review.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide">DISCUSS YOUR PROJECT</Link>
              <Link href="/products" className="px-10 py-5 rounded-full border-2 border-slate-300 text-slate-700 font-black uppercase tracking-widest text-sm hover:border-blue-600 hover:text-blue-700 transition-all">All Products</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
