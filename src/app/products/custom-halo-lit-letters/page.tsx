'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppCta from '@/components/WhatsAppCta';
import JsonLd from '@/components/JsonLd';

const faqs = [
  {
    question: 'What is the difference between halo-lit and front-lit channel letters?',
    answer: 'Halo-lit letters illuminate from behind, so the light reflects off the mounting surface and forms a soft glow around each letter while the face stays unlit. Front-lit letters light the face itself. Halo-lit construction suits darker or textured walls and a more restrained architectural look.',
  },
  {
    question: 'Can halo-lit letters be mounted on any wall surface?',
    answer: 'The mounting surface affects the result, because the glow depends on light reflecting back from the wall. Smooth, light, or matte surfaces behave differently from dark or highly textured ones, and standoff depth changes the halo effect. Share the wall material and a photo with the brief so the mounting approach can be confirmed.',
  },
  {
    question: 'What is the lead time for custom halo-lit letters?',
    answer: 'Typical production lead time is 7–14 days depending on letter count, size, finish, and lighting configuration. Large rollout projects are phased according to your schedule.',
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

export default function HaloLitLettersPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal visible">
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Rear-Glow Fabrication</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Custom <span className="text-blue-500 italic">Halo-Lit</span> <br/>Metal Letters
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">
                Rear-glow illumination for architectural branding, fabricated as dimensional metal letters with LED modules.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide"
                >
                  GET A QUOTE
                </Link>
                <WhatsAppCta label="Check Feasibility" message="Hi Aaron, can you check feasibility for custom halo-lit metal letters?" />
              </div>
            </div>
            <div className="reveal visible relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <Image src="/assets/images/cat-illuminated.jpg" alt="Halo-Lit Signage" width={1440} height={1080} priority sizes="(min-width: 1024px) 50vw, 100vw" className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/5 object-cover w-full h-[420px] lg:h-[500px]" />
            </div>
          </div>
        </section>

        {/* 2. Direct answer block */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">Halo-lit letters: the short answer</div>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-semibold max-w-4xl">
                Halo-lit letters keep the face dark and throw light backward onto the wall, creating a floating rear-glow effect instead of an illuminated face. Choose them when the wall itself should carry the light and the brand calls for a more restrained, architectural look rather than a bright front-lit face.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buyer-question sections */}
        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">When should a project choose halo-lit instead of front-lit letters?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Halo lighting works well where the wall is part of the design: stone, brick, dark cladding, or any surface that benefits from reflected light. Front-lit letters read more strongly from a distance and in daylight, so the choice usually follows the viewing context and the intended visual character. Our comparison guide walks through both routes side by side.
              </p>
              <div className="mt-auto">
                <Link href="/guides/front-lit-vs-halo-lit-channel-letters" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Compare front-lit and halo-lit letters</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Which materials suit rear-glow dimensional letters?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Letter bodies are typically fabricated in stainless steel, aluminum, or coated sheet, with the finish chosen to match the facade and the maintenance plan. 304 stainless steel is a common outdoor route, while powder coating in specified RAL colors gives the brand control over the visible metal. The material guide covers the coated-steel alternative in detail.
              </p>
              <div className="mt-auto">
                <Link href="/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Review outdoor material options</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">What information is needed for a halo-lit letter quotation?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                A comparable quotation needs the artwork in vector form, the letter height and overall run length, the quantity, the wall material, and the required finish. Site photos and the mounting height help confirm the standoff and wiring route. Send those details with the brief and the engineering review follows.
              </p>
              <div className="mt-auto">
                <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Send your project brief</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Can halo-lit letters be combined with other sign types?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Yes. Rear-glow letters are often paired with entry monuments, illuminated light boxes, or interior lobby signage so one brand language carries from the facade to the reception wall. Delivering those elements together keeps the finish and lighting consistent across the project.
              </p>
              <div className="mt-auto">
                <Link href="/products/ultra-slim-led-light-box" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">See matched LED light boxes</Link>
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
                <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">Each item is a decision input for rear-glow construction. Confirm the wall, finish, and lighting requirement before production.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Letter body</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; 304 stainless steel for exposed outdoor letters</li>
                      <li>&bull; Aluminum for lighter letter bodies</li>
                      <li>&bull; Coated sheet where a painted finish is specified</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Finish direction</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Brushed or mirror stainless faces</li>
                      <li>&bull; Powder coating in specified RAL colors</li>
                      <li>&bull; Return depth set to control the halo spread</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Lighting &amp; mounting</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; LED modules selected for the project specification</li>
                      <li>&bull; Power supplies selected for the project specification</li>
                      <li>&bull; Standoff and bracket layout confirmed from the wall survey</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Durability</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Environmental rating reviewed for the exterior application</li>
                      <li>&bull; Warranty terms confirmed in the project quotation</li>
                      <li>&bull; Wiring route and service access agreed before fabrication</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 uppercase tracking-tighter">Factory Advantage</h3>
                <p className="text-slate-300 mb-8 leading-relaxed font-medium">Direct manufacturing from our 20,000sqm base in Dalian, established in 2006, keeps fabrication and finishing under one quality-control process.</p>
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
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Planning rear-glow letters?</h2>
            <p className="text-slate-500 font-medium mb-8">Send the artwork, letter height, quantity, wall material, and finish direction for a project-specific review.</p>
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
