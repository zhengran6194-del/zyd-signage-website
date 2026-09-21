'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppCta from '@/components/WhatsAppCta';
import JsonLd from '@/components/JsonLd';

const faqs = [
  {
    question: 'What makes healthcare signage different from general commercial signage?',
    answer: 'Healthcare signage has to work for people who are stressed, moving quickly, or unfamiliar with the building, so clarity, contrast, and consistent placement matter more than decoration. Rooms, departments, and directions change more often than in most buildings, which makes a modular panel system easier to maintain over the life of the facility.',
  },
  {
    question: 'Can signage be specified for hygienic healthcare environments?',
    answer: 'Panels, edges, and graphics can be specified with surface finishes suited to routine cleaning, and mounting methods can be chosen to reduce ledges where dirt collects. The exact requirement depends on the department and the facility protocol, so the cleaning method and environment are confirmed with the project brief before production.',
  },
  {
    question: 'What is the lead time for a medical signage package?',
    answer: 'Typical production lead time is 7–14 days depending on the number of sign types, quantity, and artwork. Hospital rollouts are phased by floor or department against your opening schedule.',
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

export default function MedicalSignagePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal visible">
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Healthcare Interior Systems</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Medical <span className="text-blue-500 italic">Care</span> <br/>Signage System
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">
                Wayfinding, room identification, and department signage for hospitals and healthcare centers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide"
                >
                  GET A QUOTE
                </Link>
                <WhatsAppCta label="Check Feasibility" message="Hi Aaron, can you check feasibility for a medical care signage system?" brief={{ product: 'a medical care signage system', items: ['Floor/department plans', 'Sign types, dimensions and quantities', 'Artwork, finish and accessibility notes', 'Mounting/site photos and ship-to country'] }} />
              </div>
            </div>
            <div className="reveal visible relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <Image src="/assets/images/hero-medical.jpg" alt="Medical Signage" width={1536} height={1024} priority sizes="(min-width: 1024px) 50vw, 100vw" className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/5 object-cover w-full h-[420px] lg:h-[500px]" />
            </div>
          </div>
        </section>

        {/* 2. Direct answer block */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">Medical signage: the short answer</div>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-semibold max-w-4xl">
                Medical signage succeeds when a visitor can find the right department without asking for help and staff can update a room name without replacing the wall. The system combines clear directional panels with modular room and department identification, specified for the cleaning routine and mounting conditions of each care area.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buyer-question sections */}
        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How is a hospital wayfinding system organized?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Hospitals are usually planned as a hierarchy: campus arrival, building entry, vertical circulation, department entries, and finally room identification. Each level answers one decision, which keeps the panels simple and the visitor moving. The general selection guide explains how to match sign formats to the site and viewer.
              </p>
              <div className="mt-auto">
                <Link href="/guides/how-to-choose-the-right-sign-for-your-business" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Read the sign-selection guide</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Which materials and finishes suit healthcare interiors?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Panels are commonly aluminum or acrylic with printed or applied graphics, finished so the surface can be cleaned routinely without damaging the print. Edges and mounting are chosen to reduce ledges, and room plates are designed to be replaceable as departments change. The material guide covers the exposed-metal alternatives used outdoors.
              </p>
              <div className="mt-auto">
                <Link href="/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Review material selection logic</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">What information is needed for a medical signage quotation?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Send the floor plans or department list, the sign types and quantities, the mounting surfaces, any accessibility requirement the project specifies, and the brand or color standard. Confirming those items at the start keeps the schedule accurate and avoids rework during installation.
              </p>
              <div className="mt-auto">
                <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Send your project brief</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How does medical signage coordinate with exterior signage?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The visitor experience starts outside, so hospital wayfinding is often delivered together with entry monuments, building identification, and illuminated letters. Coordinating the interior and exterior elements in one program keeps typography, color, and hardware consistent from the street to the ward.
              </p>
              <div className="mt-auto">
                <Link href="/products/architectural-wayfinding-system" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">See wayfinding systems</Link>
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
                <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">Each item is a decision input for a healthcare signage package. Confirm the department, cleaning routine, and mounting before production.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Sign family</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Directional and overhead panels</li>
                      <li>&bull; Room and department identification plates</li>
                      <li>&bull; Replaceable room-name inserts as departments change</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Panels &amp; finish</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Aluminum and acrylic panel construction</li>
                      <li>&bull; Surface finish specified for the cleaning routine</li>
                      <li>&bull; Graphic contrast confirmed against the brand standard</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Mounting</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Flush mounting to reduce ledges and dust collection</li>
                      <li>&bull; Bracket and rail systems for corridors</li>
                      <li>&bull; Fixing layout confirmed from the site survey</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Illumination &amp; durability</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Optional LED modules selected for the project specification</li>
                      <li>&bull; Power supplies selected for the project specification where lit</li>
                      <li>&bull; Warranty terms confirmed in the project quotation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 uppercase tracking-tighter">Factory Advantage</h3>
                <p className="text-slate-300 mb-8 leading-relaxed font-medium">Direct manufacturing from our 20,000sqm base in Dalian, established in 2006, keeps panel production and finishing under one quality-control process.</p>
                <div className="space-y-5">
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">DDP Shipping by Quotation</span></div>
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
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Planning a healthcare signage package?</h2>
            <p className="text-slate-500 font-medium mb-8">Send the department list, sign types, mounting surfaces, and any accessibility requirement for a project-specific review.</p>
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
