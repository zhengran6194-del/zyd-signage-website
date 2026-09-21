'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppCta from '@/components/WhatsAppCta';
import JsonLd from '@/components/JsonLd';

const faqs = [
  {
    question: 'What is architectural wayfinding and how is it planned?',
    answer: 'Architectural wayfinding is the system of signs, maps, and markers that helps people decide where to go inside a building or campus. Planning starts from the visitor journey and decision points, not from individual sign panels, so the hierarchy stays consistent from the entrance to the final destination.',
  },
  {
    question: 'How do you handle accessibility requirements in a wayfinding system?',
    answer: 'Accessibility requirements vary by country, building type, and the authority having jurisdiction, so they are confirmed for each project before production. We can build tactile and Braille options, mounting heights, and contrast into the schedule when the project brief specifies them. Our published guidance is a reference and does not replace a local code review.',
  },
  {
    question: 'What is the lead time for a wayfinding system?',
    answer: 'Typical production lead time is 7–14 days depending on the number of sign types, quantity, and artwork. Phased rollouts are scheduled against your construction program.',
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

export default function WayfindingSystemPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal visible">
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">System Planning &amp; Fabrication</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Architectural <span className="text-blue-500 italic">Wayfinding</span> <br/>Systems
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">
                Directional signage systems for airports, hospitals, campuses, and mixed-use developments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide"
                >
                  GET A QUOTE
                </Link>
                <WhatsAppCta label="Check Feasibility" message="Hi Aaron, can you check feasibility for an architectural wayfinding system?" />
              </div>
            </div>
            <div className="reveal visible relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <Image src="/assets/images/hero-wayfinding.jpg" alt="Architectural Wayfinding System" width={1536} height={1024} priority sizes="(min-width: 1024px) 50vw, 100vw" className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/5 object-cover w-full h-[420px] lg:h-[500px]" />
            </div>
          </div>
        </section>

        {/* 2. Direct answer block */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">Wayfinding systems: the short answer</div>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-semibold max-w-4xl">
                A wayfinding system organizes every sign type into one hierarchy so a visitor can move from arrival to destination without hesitation. The work begins with the journey and decision points, then defines panels, mounting, and finishes as a matched family rather than a collection of separate signs.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buyer-question sections */}
        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How is a wayfinding system planned for a large site?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Planning starts with the visitor journey: arrival, parking, first decision point, corridors, and final destination. Each decision point defines what the sign must say and how far ahead it must be read, which then sets the panel sizes and mounting. Our selection guide explains how to match sign formats to the site and viewer.
              </p>
              <div className="mt-auto">
                <Link href="/guides/how-to-choose-the-right-sign-for-your-business" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Read the sign-selection guide</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Which materials suit interior and exterior wayfinding?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Interior panels are frequently aluminum or acrylic with printed or applied graphics, while exterior and street-level elements need a finish route suited to weather and cleaning. Where an exposed metal finish is required, 304 stainless steel is a common selection. The material guide compares the exposed-steel and coated-steel routes.
              </p>
              <div className="mt-auto">
                <Link href="/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Review outdoor material options</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How is a wayfinding quotation prepared?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                A comparable quotation needs the site plan or floor plans, the list of sign types and quantities, the mounting conditions, the artwork or brand standards, and any accessibility requirement the project specifies. Sending those items together lets the schedule and scope be reviewed in one pass.
              </p>
              <div className="mt-auto">
                <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Send your project brief</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How does wayfinding coordinate with entry signage?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Wayfinding rarely stands alone: entry monuments, illuminated letters, and light boxes often carry the same brand language into the building. Coordinating them as one program keeps the finish, typography, and hardware consistent and simplifies installation across the site.
              </p>
              <div className="mt-auto">
                <Link href="/products/outdoor-pylon-monument-sign" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">See entry monument signage</Link>
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
                <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">Each item is a decision input for a wayfinding program. Confirm the journey, mounting, and accessibility requirement before production.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Sign family</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Overhead, projecting, and wall-mounted panels</li>
                      <li>&bull; Freestanding directories and map boards</li>
                      <li>&bull; Tactile and Braille options when specified</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Panels &amp; finish</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Aluminum and acrylic panel construction</li>
                      <li>&bull; 304 stainless steel for exposed metal elements</li>
                      <li>&bull; Powder coating in specified RAL colors</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Mounting</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Ceiling-hung and wall-bracket assemblies</li>
                      <li>&bull; Flush mounting where the wall allows</li>
                      <li>&bull; Fixing layout confirmed from the site survey</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Illumination &amp; durability</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Optional LED modules using Samsung or Epistar chips</li>
                      <li>&bull; MeanWell power supplies rated IP67 where lit</li>
                      <li>&bull; Weather operation from -40°C to +60°C for exterior elements</li>
                      <li>&bull; 3–5 year global warranty on components and structure</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 uppercase tracking-tighter">Factory Advantage</h3>
                <p className="text-slate-300 mb-8 leading-relaxed font-medium">Direct manufacturing from our 20,000sqm base in Dalian, established in 2006, keeps panel fabrication and finishing under one quality-control process.</p>
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
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Planning a wayfinding program?</h2>
            <p className="text-slate-500 font-medium mb-8">Send the site or floor plans, sign types, quantities, and mounting conditions for a project-specific review.</p>
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
