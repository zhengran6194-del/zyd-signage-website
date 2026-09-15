'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';

const faqs = [
  {
    question: 'What makes a light box "ultra-slim"?',
    answer: 'The profile depth comes from edge-lighting the graphic panel instead of placing modules behind it. A slimmer box suits shallow fascias, framed walls, and interior applications where a deep cabinet would sit proud of the surface. The achievable depth depends on the panel size and the required brightness.',
  },
  {
    question: 'Can an ultra-slim light box be used outdoors?',
    answer: 'Yes, provided the construction and sealing are specified for the location. Outdoor installations need an enclosure and power route suited to rain, wind, and temperature movement, while interior boxes can use lighter construction. Confirm the mounting surface and exposure with the brief so the right build is quoted.',
  },
  {
    question: 'What is the lead time for custom LED light boxes?',
    answer: 'Typical production lead time is 7–14 days depending on panel size, quantity, artwork, and lighting configuration. Rollout programs are phased according to your schedule.',
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

export default function UltraSlimLightBoxPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal visible">
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Edge-Lit Panel Fabrication</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Ultra-Slim <span className="text-blue-500 italic">LED</span> <br/>Light Boxes
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">
                Edge-lit illuminated panels for retail fascias, transport interiors, and corporate lobbies.
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
              <Image src="/assets/images/cat-lightbox.webp" alt="Ultra-Slim LED Light Box" width={736} height={736} priority sizes="(min-width: 1024px) 50vw, 100vw" className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/5 object-cover w-full h-[420px] lg:h-[500px]" />
            </div>
          </div>
        </section>

        {/* 2. Direct answer block */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">Ultra-slim light boxes: the short answer</div>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-semibold max-w-4xl">
                An ultra-slim light box lights a printed or translucent graphic from its edges rather than from modules behind the panel, which keeps the profile shallow and the face evenly lit. Choose this format when mounting depth is limited or when a clean, close-to-the-wall illuminated panel fits the space better than a deep cabinet.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buyer-question sections */}
        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">When should a project choose an edge-lit light box?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Edge-lit panels suit shallow fascias, framed wall recesses, menu and directory boards, and interior applications where depth is limited. Where very large panels or high brightness are required, a different construction may serve the site better. Sharing the panel size and mounting depth lets the correct build be confirmed.
              </p>
              <div className="mt-auto">
                <Link href="/guides/how-to-choose-the-right-sign-for-your-business" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Read the sign-selection guide</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Which graphics and materials work best in a light box?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The graphic has to transmit light evenly, so the substrate and print method are chosen together with the panel. Metal or coated frames handle exposed locations, while acrylic faces are common for interior applications. The material guide explains how the finish route affects durability outdoors.
              </p>
              <div className="mt-auto">
                <Link href="/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Review outdoor material options</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">What information is needed for a light box quotation?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Send the panel dimensions, quantity, artwork, mounting surface and depth, indoor or outdoor exposure, and the required finish. Where the box replaces an existing unit, a photo and the fixing layout speed up the review. Those details make the quotation comparable and the installation plan reliable.
              </p>
              <div className="mt-auto">
                <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Send your project brief</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How does a light box fit into a wider signage program?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Illuminated panels often work alongside dimensional letters, wayfinding, or entry monuments, sharing the same lighting temperature and finish so the brand reads consistently. Coordinating them in one order keeps components matched and simplifies installation on site.
              </p>
              <div className="mt-auto">
                <Link href="/products/custom-halo-lit-letters" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">See matching dimensional letters</Link>
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
                <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">Each item is a decision input for illuminated panel construction. Confirm the panel size, exposure, and artwork before production.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Frame &amp; face</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Coated metal frame for exposed locations</li>
                      <li>&bull; 304 stainless steel where a stainless finish is specified</li>
                      <li>&bull; Acrylic face matched to the print method</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Mounting direction</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Flush mounting where depth is limited</li>
                      <li>&bull; Projecting or bracket mounting for signage visibility</li>
                      <li>&bull; Fixing layout confirmed from the site survey</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Lighting</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; LED modules using Samsung or Epistar chips</li>
                      <li>&bull; MeanWell power supplies rated IP67</li>
                      <li>&bull; Service access agreed for driver replacement</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Durability</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Weather operation from -40°C to +60°C</li>
                      <li>&bull; 3–5 year global warranty on components and structure</li>
                      <li>&bull; Sealing specified for the installation environment</li>
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
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Planning an illuminated panel?</h2>
            <p className="text-slate-500 font-medium mb-8">Send the panel size, quantity, artwork, mounting depth, and exposure for a project-specific review.</p>
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
