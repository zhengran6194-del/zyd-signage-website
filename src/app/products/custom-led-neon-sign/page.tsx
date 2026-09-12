'use client';

import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

const faqs = [
  {
    question: 'What is the difference between LED neon and traditional glass neon?',
    answer: 'LED neon uses flexible tubing with embedded LEDs rather than bent glass tubes filled with gas. The result is a comparable glow in a shatter-resistant form that is lighter to mount and easier to route around shapes, which is why it is common for interior branding and event work.',
  },
  {
    question: 'Where can LED neon signs be installed?',
    answer: 'Most LED neon projects are interior: reception walls, retail windows, hospitality spaces, and event displays. Outdoor or wet-area use needs a different build and power arrangement, so confirm the location and exposure with the brief before quoting.',
  },
  {
    question: 'What is the lead time for custom LED neon signs?',
    answer: 'Typical production lead time is 7–14 days depending on artwork complexity, size, quantity, and mounting requirement. Multi-site rollout programs are phased according to your schedule.',
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

export default function LedNeonSignPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal visible">
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Flexible Tubing Fabrication</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Custom <span className="text-blue-500 italic">LED Neon</span> <br/>Signs
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed font-medium">
                Flexible LED neon logos for retail interiors, hospitality walls, and brand displays.
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
              <img src="/assets/images/cat-neon.webp" alt="Custom LED Neon Sign" width={1200} height={800} loading="eager" fetchPriority="high" className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/5 object-cover w-full h-[420px] lg:h-[500px]" />
            </div>
          </div>
        </section>

        {/* 2. Direct answer block */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">LED neon signs: the short answer</div>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-semibold max-w-4xl">
                Choose LED neon when the brand mark should glow in a hand-drawn, continuous-line form on an interior wall or window. The flexible tubing follows script and logo outlines closely, mounts light on most surfaces, and gives a softer decorative effect than rigid illuminated letters or panels.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buyer-question sections */}
        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">When is LED neon the right choice for a brand?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                LED neon suits interiors where the mark should feel expressive and decorative rather than architectural: reception walls, hospitality features, retail windows, and event backdrops. For facades and long-view identification, dimensional letters or illuminated panels usually perform better. The general selection guide explains how to match the format to the space.
              </p>
              <div className="mt-auto">
                <Link href="/guides/how-to-choose-the-right-sign-for-your-business" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Read the sign-selection guide</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How is artwork prepared for flexible neon tubing?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The design is simplified into continuous paths that the tubing can follow, so very fine detail and tight inner corners are usually adjusted. Vector artwork gives the cleanest starting point. The review confirms which strokes stay open and how the power feed and controller are hidden.
              </p>
              <div className="mt-auto">
                <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Send your artwork for review</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">What mounting and power details should the brief include?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Share the wall material, the mounting height, and whether a visible or concealed power feed is preferred, plus the required color and any dimming or animation requirement. Those details determine the backing and the driver selection, and they keep the quotation comparable between suppliers.
              </p>
              <div className="mt-auto">
                <Link href="/products/ultra-slim-led-light-box" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">See illuminated panel options</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Can LED neon be combined with other signage?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Yes. Interior neon features are frequently specified alongside reception logo signs and wayfinding so the same brand expression runs through the space while each element does its own job. Coordinating the finishes in one order keeps the illuminated elements consistent.
              </p>
              <div className="mt-auto">
                <Link href="/products/metal-acrylic-logo-sign" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">See metal &amp; acrylic logo signs</Link>
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
                <p className="text-slate-500 leading-relaxed mb-10 max-w-2xl font-medium">Each item is a decision input for flexible neon fabrication. Confirm the artwork, location, and mounting before production.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Tubing &amp; color</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Single-color tubing matched to brand color</li>
                      <li>&bull; Multi-color and controller options where required</li>
                      <li>&bull; Path simplified for the tubing minimum bend</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Backing &amp; mounting</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Clear acrylic backing for a floating look</li>
                      <li>&bull; Coated backing where a solid outline is preferred</li>
                      <li>&bull; Fixing method confirmed from the wall material</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Power</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; MeanWell power supplies rated IP67</li>
                      <li>&bull; Concealed feed route agreed before fabrication</li>
                      <li>&bull; Dimming or animation only where specified</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Durability &amp; use</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Weather operation from -40°C to +60°C</li>
                      <li>&bull; 3–5 year global warranty on components and structure</li>
                      <li>&bull; Interior and event use as the standard application</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 uppercase tracking-tighter">Factory Advantage</h3>
                <p className="text-slate-400 mb-8 leading-relaxed font-medium">Direct manufacturing from our 20,000sqm base in Dalian, established in 2006, keeps neon assembly and finishing under one quality-control process.</p>
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
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Planning an LED neon feature?</h2>
            <p className="text-slate-500 font-medium mb-8">Send the artwork, intended size, wall material, colors, and mounting location for a project-specific review.</p>
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
