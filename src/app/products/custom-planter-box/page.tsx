'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppCta from '@/components/WhatsAppCta';
import JsonLd from '@/components/JsonLd';
import RelatedCaseStudy from '@/components/RelatedCaseStudy';

const faqs = [
  {
    question: 'What information is needed for a planter box quotation?',
    answer: 'Send the profile or drawings, the dimensions, the target quantity, the planting type, the drainage detail, the finish direction, the installation method, and the ship-to country. Minimum order quantity is 1 piece, and typical production lead time is 7–14 days depending on quantity, finish, and whether the body is combined with other elements in the same landscape package.',
  },
  {
    question: 'Can planter boxes match an existing street furniture range?',
    answer: 'Yes, when the reference item is supplied. Planters are coordinated in the same programme as seating and other landscape furniture so the profiles, edge details, and finishes belong to one family rather than sitting next to each other as unrelated products. Send the reference item or drawing and the visible faces are matched to it.',
  },
  {
    question: 'How are planter boxes installed and fixed on site?',
    answer: 'Bodies are delivered as fabricated units with a base and levelling detail. Whether the planter is surface-fixed, ballasted, or left free-standing depends on the paving build-up, the wind exposure of the location, and whether the planter has to be moved for maintenance or planting changes. The base detail is confirmed from the site survey before production.',
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

export default function CustomPlanterBoxPage() {
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
                Custom <span className="text-blue-500 italic">Planter</span> <br />Box
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">
                Architectural planter solutions that bring greenery into hotels, commercial entrances, and public spaces. Coordinate the shape, appearance, and project requirements directly with our factory team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide">
                  GET A PROJECT QUOTE
                </Link>
                <WhatsAppCta label="Check Feasibility" message="Hi Aaron, can you check feasibility for a custom planter box project?" brief={{ product: 'a custom planter box project', items: ['Drawings or artwork', 'Dimensions and target quantity', 'Material, drainage and finish', 'Installation/site photos and ship-to country'] }} />
              </div>
            </div>
            <div className="reveal visible relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <Image src="/assets/images/custom-planter-box.jpg" alt="Custom architectural planter boxes with greenery" width={915} height={911} priority sizes="(min-width: 1024px) 50vw, 100vw" className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/5 object-cover w-full h-[420px] lg:h-[500px]" />
            </div>
          </div>
        </section>

        {/* 2. Direct answer */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">Planter boxes: the short answer</div>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-semibold max-w-4xl">
                A fabricated planter box has to satisfy three things at once: it has to sit correctly against the building, it has to hold and drain the planting it was designed around, and it has to survive the exposure of the place it stands in. Form, body construction, drainage, and finish are therefore confirmed against the project drawings before production rather than chosen from a stock size.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buyer-question sections */}
        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How is a planter box coordinated with the building?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The visible faces are the part that matters. Profile, height, and edge detail are aligned to the paving, dado, or seating datum they stand against, so the planter reads as part of the architecture instead of an object placed in front of it. Where the brief contains enough information to prepare one, a 3D mockup is used to check scale and proportion before the body is drawn for production.
              </p>
              <div className="mt-auto">
                <Link href="/products/custom-landscape-furniture" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">See landscape furniture</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Which materials suit planters that stay outdoors?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Bodies are commonly aluminum or galvanized steel, with stainless steel where the project specifies it. The surface finish is selected for the specified project environment, and the exposure of the actual location — coastal or salt-air conditions, de-icing practice, and how the planter is maintained — is confirmed per project rather than assumed. The material guide sets out how the exposed-metal options compare.
              </p>
              <div className="mt-auto">
                <Link href="/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Review material selection logic</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How are drainage and planting handled inside the body?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                An internal liner, a drainage outlet or perforation direction, and the interface with the irrigation and overflow arrangement are all part of the body rather than an afterthought. The planting type drives the root volume and soil load, and those in turn affect the body construction and the base detail. These items are confirmed with the landscape contractor and the project team before fabrication.
              </p>
              <div className="mt-auto">
                <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Confirm drainage and base details</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Can a planter body carry brand identification?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Yes, and it is usually worth doing. A logo or brand panel applied to the visible face lets the planting read as part of the same identity programme as the building signage, with contrast and placement confirmed against the brand standard in the same way as a metal and acrylic logo sign. Graphic direction is agreed before the finish is applied, since the panel and the body are finished together.
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
                <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">Each item is a decision input for a planter package. Confirm the location, planting, and base conditions before production.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Form &amp; scale</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Profile, height, and visible-face treatment</li>
                      <li>&bull; Alignment to the paving, dado, or seating datum</li>
                      <li>&bull; Scale checked in a 3D mockup where the brief allows</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Body construction</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Aluminum or galvanized steel bodies</li>
                      <li>&bull; Stainless steel where the project specifies it</li>
                      <li>&bull; Base and levelling detail set by the site survey</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Drainage &amp; liner</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Internal liner and outlet or perforation direction</li>
                      <li>&bull; Interface with irrigation and overflow</li>
                      <li>&bull; Root volume and soil load confirmed with the planting plan</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Finish &amp; exposure</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Surface finish selected for the specified environment</li>
                      <li>&bull; Brand panel placement and contrast agreed with the brand standard</li>
                      <li>&bull; Warranty terms confirmed in the project quotation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 uppercase tracking-tighter">Factory Advantage</h3>
                <p className="text-slate-300 mb-8 leading-relaxed font-medium">Direct manufacturing from our 20,000sqm base in Dalian, established in 2006, keeps body fabrication, finishing, and the brand panel under one quality-control process.</p>
                <div className="space-y-5">
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">DDP Shipping by Quotation</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">MOQ: 1</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">Lead Time: 7–14 days</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Related reading */}
        <section className="section bg-white pt-0">
          <div className="container max-w-4xl">
            <div className="eyebrow text-blue-600 font-black tracking-widest uppercase mb-4 text-xs">Related Reading</div>
            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">How the material route is settled for an outdoor body</h2>
            <p className="text-slate-600 leading-relaxed font-medium mb-5">
              A planter that stays outside is a fabricated body rather than a printed panel, so the material route is decided with the exposure, the finish and the cleaning access in view. The{' '}
              <Link href="/guides/signage-material-selection-guide" className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900">materials and finishes guide</Link>{' '}
              sets out how that review is run, including the 304 stainless steel, galvanized steel and aluminium routes.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              From there the body follows the same production path as other fabricated signage: workshop drawings, cutting and forming, finishing, and a check before packing. The guide to the{' '}
              <Link href="/guides/custom-signage-manufacturing-process" className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900">signage manufacturing process</Link>{' '}
              describes each stage, which is what the quotation lines map back to.
            </p>
          </div>
        </section>

        {/* 6. FAQ */}
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

        {/* 7. CTA */}
        <section className="bg-slate-50 py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Planning a landscape package?</h2>
            <p className="text-slate-500 font-medium mb-8">Send the profile, dimensions, planting type, drainage detail, and installation conditions for a project-specific review.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide">DISCUSS YOUR PROJECT</Link>
              <Link href="/products" className="px-10 py-5 rounded-full border-2 border-slate-300 text-slate-700 font-black uppercase tracking-widest text-sm hover:border-blue-600 hover:text-blue-700 transition-all">All Products</Link>
            </div>
            <RelatedCaseStudy href="/case-studies/hengli-industrial-park-wayfinding-signage" name="Hengli Industrial Park" context="site fabrication and installation of outdoor units in landscaped grounds." />
          </div>
        </section>
      </main>
    </>
  );
}
