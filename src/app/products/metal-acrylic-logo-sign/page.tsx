'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppCta from '@/components/WhatsAppCta';
import JsonLd from '@/components/JsonLd';

const faqs = [
  {
    question: 'What is the difference between a metal logo sign and a channel letter sign?',
    answer: 'A metal and acrylic logo sign is usually a flat or layered plaque carrying the brand mark, often for a reception wall or boardroom. Channel letters are individual illuminated or non-illuminated letterforms built as separate volumes for larger identification. The two are frequently specified together for one brand.',
  },
  {
    question: 'Which materials are used for cut metal and acrylic logo signs?',
    answer: 'Common routes are stainless steel, aluminum, or coated sheet for the metal layer, and acrylic for the face or the standoff layer. The finish is chosen to match the interior and the required appearance, from brushed metal to powder-coated color. The material guide compares the outdoor stainless and coated-steel routes.',
  },
  {
    question: 'What is the lead time for a custom logo sign?',
    answer: 'Typical production lead time is 7–14 days depending on artwork complexity, size, quantity, and finish. Multi-site programs are phased according to your schedule.',
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

export default function MetalAcrylicLogoSignPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal visible">
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Cut &amp; Layered Fabrication</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Metal &amp; <span className="text-blue-500 italic">Acrylic</span> <br/>Logo Signs
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">
                Cut metal and layered acrylic brand marks for reception walls, boardrooms, and storefronts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide"
                >
                  GET A QUOTE
                </Link>
                <WhatsAppCta label="Check Feasibility" message="Hi Aaron, can you check feasibility for a metal and acrylic logo sign?" />
              </div>
            </div>
            <div className="reveal visible relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <Image src="/assets/images/cat-metal.jpg" alt="Metal & Acrylic Logo Sign" width={1080} height={1080} priority sizes="(min-width: 1024px) 50vw, 100vw" className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/5 object-cover w-full h-[420px] lg:h-[500px]" />
            </div>
          </div>
        </section>

        {/* 2. Direct answer block */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">Logo signs: the short answer</div>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-semibold max-w-4xl">
                A cut metal and acrylic logo sign reproduces the brand mark as a physical, layered object rather than a flat print, which gives walls depth, shadow, and a premium finish. Choose it for reception and interior feature walls where the mark is seen close up, and in a suitable build for exterior plaques.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buyer-question sections */}
        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">When should a brand choose a metal logo sign over printed graphics?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Choose fabricated metal when the logo is viewed at close range and the space calls for a tactile, dimensional finish: reception desks, boardroom walls, and flagship interiors. Printed graphics remain efficient for large-format or temporary use. Our selection guide explains how to match the sign format to the space and viewing distance.
              </p>
              <div className="mt-auto">
                <Link href="/guides/how-to-choose-the-right-sign-for-your-business" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Read the sign-selection guide</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Which finishes work for interior and exterior logo signs?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Interior marks often use brushed or mirror stainless, anodized-look aluminum, or powder-coated color with an acrylic face layer. Exterior plaques need a finish route suited to weather and cleaning, so the material choice follows the exposure. The outdoor material guide covers the stainless and coated-steel trade-offs.
              </p>
              <div className="mt-auto">
                <Link href="/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Review outdoor material options</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">What artwork is needed for a fabricated logo sign?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Vector artwork is the reliable starting point because the mark is cut and layered rather than printed, and very fine strokes may need adjustment for the material. Include the intended size, the wall surface, and any brand color references. The review confirms layer build-up and mounting before production.
              </p>
              <div className="mt-auto">
                <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Send your artwork for review</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Can logo signs be matched across multiple locations?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Yes. For rollouts, the same artwork, material, and finish specification is held for every site so each installation matches. Grouping the elements with the rest of the interior signage in one order keeps the finish and hardware consistent from location to location.
              </p>
              <div className="mt-auto">
                <Link href="/products/custom-led-neon-sign" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">See LED neon features</Link>
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
                <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">Each item is a decision input for a fabricated logo sign. Confirm the artwork, wall, and finish before production.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Metal layer</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; 304 stainless steel for exposed applications</li>
                      <li>&bull; Aluminum for lighter panels</li>
                      <li>&bull; Coated sheet where a painted finish is specified</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Face &amp; finish</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Brushed or mirror stainless faces</li>
                      <li>&bull; Acrylic face layer for color and depth</li>
                      <li>&bull; Powder coating in specified RAL colors</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Mounting</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Standoff mounting for a shadow-line effect</li>
                      <li>&bull; Flush mounting where the wall requires it</li>
                      <li>&bull; Template and fixing layout confirmed from the wall survey</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Illumination &amp; durability</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Optional LED backlighting selected for the project specification</li>
                      <li>&bull; Power supplies selected for the project specification where lit</li>
                      <li>&bull; Environmental rating reviewed for the exterior application</li>
                      <li>&bull; Warranty terms confirmed in the project quotation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 uppercase tracking-tighter">Factory Advantage</h3>
                <p className="text-slate-300 mb-8 leading-relaxed font-medium">Direct manufacturing from our 20,000sqm base in Dalian, established in 2006, keeps cutting, finishing, and assembly under one quality-control process.</p>
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
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Planning a fabricated logo sign?</h2>
            <p className="text-slate-500 font-medium mb-8">Send the vector artwork, intended size, wall surface, finish direction, and quantity for a project-specific review.</p>
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
