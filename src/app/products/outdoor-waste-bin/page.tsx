'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppCta from '@/components/WhatsAppCta';
import JsonLd from '@/components/JsonLd';
import RelatedCaseStudy from '@/components/RelatedCaseStudy';

const faqs = [
  {
    question: 'What information is needed for an outdoor waste bin quotation?',
    answer: 'Send the number of separation streams, the dimensions or capacity you need to serve, the opening type, the fixing method, the finish direction, the target quantity, and the ship-to country. Minimum order quantity is 1 piece, and typical production lead time is 7–14 days depending on quantity and finish.',
  },
  {
    question: 'Can bins be supplied for a multi-stream recycling programme?',
    answer: 'Yes. Multi-stream programmes are planned as stations rather than as individual bins, so the number of streams, the label or pictogram panels, and the way the units group together are agreed first. Capacity per location is confirmed against the expected footfall and the collection frequency your operator works to, rather than assumed from a single figure.',
  },
  {
    question: 'How are outdoor bins cleaned, emptied, and kept in place?',
    answer: 'The surface finish is specified so routine cleaning does not damage the graphics, and the liner is removable for emptying without dismantling the body. Whether the unit is surface-fixed or ballasted depends on the paving build-up, the wind exposure, and whether it has to be moved for cleaning. The servicing routine is confirmed with the operator before the opening and liner details are fixed.',
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

export default function OutdoorWasteBinPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal visible">
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Outdoor Site Furnishings</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Custom <span className="text-blue-500 italic">Outdoor</span> <br />Waste Bin
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">
                A refined waste bin solution for hotels, commercial spaces, and public environments. Coordinate the visible form, branding, and project requirements directly with our factory team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide">
                  GET A PROJECT QUOTE
                </Link>
                <WhatsAppCta label="Check Feasibility" message="Hi Aaron, can you check feasibility for a custom outdoor waste bin project?" brief={{ product: 'a custom outdoor waste bin project', items: ['Artwork or logo file', 'Dimensions, capacity and quantity', 'Material and finish direction', 'Installation/site photos and ship-to country'] }} />
              </div>
            </div>
            <div className="reveal visible relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <Image src="/assets/images/outdoor-waste-bin.jpg" alt="Custom outdoor waste bin with logo panel" width={841} height={893} priority sizes="(min-width: 1024px) 50vw, 100vw" className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/5 object-cover w-full h-[420px] lg:h-[500px]" />
            </div>
          </div>
        </section>

        {/* 2. Direct answer */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">Waste bins: the short answer</div>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-semibold max-w-4xl">
                A public-realm waste bin is judged by two things that rarely appear on the drawing: whether the collection crew can service it quickly, and whether it still looks intact after a season of use. Planning therefore starts from the separation streams and the collection routine, and only then settles the shape of the body, the opening, and the fixing detail.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buyer-question sections */}
        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How are waste separation streams planned on site?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Most public programmes run at least a general-waste stream and a recyclable stream, grouped as stations at decision points rather than scattered as single units. The label or pictogram panel is treated as part of the site sign system so the waste graphics match the wayfinding language around them. The recycling stations installed in the Water Fashion Plaza walkways are an example of that grouping in use.
              </p>
              <div className="mt-auto">
                <Link href="/case-studies/dalian-water-plaza-wayfinding-signage" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">See the installed recycling stations</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How is servicing access designed into the bin?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Opening direction, liner removal, and the clearance a crew needs to empty the unit decide whether a bin is actually used as intended; a unit that is awkward to service tends to be bypassed. The servicing method is confirmed with the operator and the maintenance team before the opening and liner details are frozen, so the daily task stays a one-person job.
              </p>
              <div className="mt-auto">
                <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Confirm the servicing routine</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Which materials and finishes suit outdoor bins?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Bodies are commonly galvanized steel or aluminum, with stainless steel where the project specifies it, and the surface finish is selected for the specified project environment rather than for appearance alone. Edges and opening details are shaped so the body does not hold standing water, and the exposure of the actual location is confirmed per project. The material guide compares the exposed-metal options.
              </p>
              <div className="mt-auto">
                <Link href="/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Review material selection logic</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How is a bin secured, and can it carry brand graphics?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Fixing is decided by the paving build-up, the wind exposure of the location, and whether the unit has to move for cleaning, so it is either surface-fixed or ballasted rather than simply set down. A logo or stream panel is applied to the body in the same way as a metal and acrylic logo sign, with placement and contrast confirmed against the brand standard before the finish goes on.
              </p>
              <div className="mt-auto">
                <Link href="/products/metal-acrylic-logo-sign" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">See logo signs</Link>
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
                <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">Each item is a decision input for a waste and recycling package. Confirm the streams and the collection routine before production.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Stream configuration</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; General-waste and recyclable streams</li>
                      <li>&bull; Station grouping at decision points</li>
                      <li>&bull; Label and pictogram panels matched to the site sign system</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Body, liner &amp; finish</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Galvanized steel or aluminum bodies</li>
                      <li>&bull; Stainless steel where the project specifies it</li>
                      <li>&bull; Removable liner and surface finish for the cleaning routine</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Opening &amp; servicing</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Opening type and liner access set by the servicing method</li>
                      <li>&bull; Emptying clearance confirmed with the operator</li>
                      <li>&bull; Detail shaped to avoid standing water</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Fixing, placement &amp; graphics</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Surface fixing or ballast set by the paving and wind exposure</li>
                      <li>&bull; Cleaning access and movement allowance</li>
                      <li>&bull; Warranty terms confirmed in the project quotation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 uppercase tracking-tighter">Factory Advantage</h3>
                <p className="text-slate-300 mb-8 leading-relaxed font-medium">Direct manufacturing from our 20,000sqm base in Dalian, established in 2006, keeps body fabrication, finishing, and the label panels under one quality-control process.</p>
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
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Planning a waste and recycling package?</h2>
            <p className="text-slate-500 font-medium mb-8">Send the streams, the servicing routine, the fixing conditions, and the finish direction for a project-specific review.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide">DISCUSS YOUR PROJECT</Link>
              <Link href="/products" className="px-10 py-5 rounded-full border-2 border-slate-300 text-slate-700 font-black uppercase tracking-widest text-sm hover:border-blue-600 hover:text-blue-700 transition-all">All Products</Link>
            </div>
            <RelatedCaseStudy href="/case-studies/dalian-water-plaza-wayfinding-signage" name="Water Fashion Plaza, Dalian" context="the segregated recycling stations installed through the public walkways." />
          </div>
        </section>
      </main>
    </>
  );
}
