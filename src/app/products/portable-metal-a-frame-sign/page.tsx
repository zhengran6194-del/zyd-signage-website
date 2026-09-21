'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppCta from '@/components/WhatsAppCta';
import JsonLd from '@/components/JsonLd';

const faqs = [
  {
    question: 'What is a portable metal A-frame sign used for?',
    answer: 'It is a free-standing sign that stands on the ground on its own frame rather than being fixed to a wall, which makes it the usual choice for a pavement, forecourt, entrance, or event stand where the sign has to come in at night or move between sites. Because it is not fixed, the same sign can be repositioned as the footfall or the layout of a site changes.',
  },
  {
    question: 'Does an A-frame sign show a message on both sides?',
    answer: 'An A-frame presents a face on each side by definition, which is what lets it be read from either direction of approach. Whether the two faces carry the same artwork or two different messages is settled with the project.',
  },
  {
    question: 'How is an A-frame sign kept stable outdoors?',
    answer: 'It is kept stable through the weight and the footprint of the frame itself, and where the site is exposed the build can be specified with additional ballast. How much, and in what form, depends on the site and is confirmed with the project rather than assumed.',
  },
  {
    question: 'What is the minimum order and lead time for an A-frame sign?',
    answer: 'Minimum order is 1 unit and typical production lead time is 7–14 days depending on artwork, quantity, and finish. DDP delivery and any warranty terms are confirmed in the project quotation.',
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

const placements = [
  {
    no: '01',
    title: 'Pavements & Shopfronts',
    desc: 'Puts the offer on the pavement outside the door, where someone walking past is already looking.',
  },
  {
    no: '02',
    title: 'Forecourts & Entrances',
    desc: 'Directs traffic at a driveway, gate, or entrance that a wall sign cannot address from the street.',
  },
  {
    no: '03',
    title: 'Events & Market Stands',
    desc: 'Travels with the stand and folds away afterwards, which suits venues used for a day at a time.',
  },
  {
    no: '04',
    title: 'Temporary Site Directions',
    desc: 'Handles short-term wayfinding where the route changes and a fixed sign would misdirect.',
  },
];

const specifications = [
  {
    label: 'Format',
    title: 'Free-standing A-frame',
    desc: 'The frame carries the sign on its own feet and needs no wall or post. Whether the frame folds for transport or stays rigid is confirmed with the project.',
  },
  {
    label: 'Frame & Panel',
    title: 'Metal frame construction',
    desc: 'Metal is the material family for this product. Frame grade, panel build, and how the face is fixed into the frame are confirmed against the artwork and the site it stands on.',
  },
  {
    label: 'Branding',
    title: 'Artwork-led faces',
    desc: 'The message is built from the artwork supplied, as a printed or applied face, and colour is matched to the brand references provided. The graphic method is confirmed with the project.',
  },
  {
    label: 'Ground & Ballast',
    title: 'Matched to the site',
    desc: 'Weighting, feet, and any anchoring are available options that follow from where the sign will stand and how exposed that position is, and are settled with the project.',
  },
];

export default function PortableMetalAFrameSignPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal visible">
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Portable &amp; Free-Standing Signage</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Portable Metal <span className="text-blue-500 italic">A-Frame</span> <br/>Signs
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">
                Free-standing A-frame signs that stand on the pavement, forecourt, or event floor and come back in at night, fabricated factory-direct for global B2B projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide"
                >
                  GET A QUOTE
                </Link>
                <WhatsAppCta label="Check Feasibility" message="Hi Aaron, can you check feasibility for a portable metal A-frame sign?" brief={{ product: 'a portable metal A-frame sign', items: ['Artwork or message file', 'Overall dimensions and quantity', 'Finish, double-sided or fold direction', 'Pavement/site photos and ship-to country'] }} />
              </div>
            </div>
            <div className="reveal visible relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              {/* object-contain keeps the whole sign inside the frame instead of
                  cropping it the way the card images are cropped, and the light
                  panel stops the photo's pale background from butting straight
                  against the dark hero. */}
              <div className="relative rounded-[2.5rem] bg-slate-50 border border-slate-200 shadow-2xl flex items-center justify-center p-8 lg:p-10 h-[420px] lg:h-[500px]">
                <Image
                  src="/assets/images/a-frame-sign.webp"
                  alt="Portable metal A-frame sign"
                  width={1254}
                  height={1254}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Direct answer block */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">Portable metal A-frame signs: the short answer</div>
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight mb-6 max-w-3xl leading-tight">
                A sign that stands on its own, wherever the customer is
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-medium max-w-3xl mb-8">
                A portable metal A-frame sign is a free-standing sign that carries its own frame and stands on the ground rather than on a wall. The A-frame shape presents a face on each side, so the message can be read from either direction of approach, and the whole unit can be lifted, moved, or brought in at the end of the day. That combination is what makes it the practical choice where the position that matters is on the pavement or the forecourt instead of the building itself. The build is settled against the artwork and the site it will stand on before production starts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="border-l-2 border-blue-500/40 pl-5">
                  <div className="text-2xl font-black text-white">MOQ 1</div>
                  <div className="text-xs text-slate-300 font-bold uppercase tracking-widest mt-1">Single-unit orders accepted</div>
                </div>
                <div className="border-l-2 border-blue-500/40 pl-5">
                  <div className="text-2xl font-black text-white">7–14 days</div>
                  <div className="text-xs text-slate-300 font-bold uppercase tracking-widest mt-1">Typical production lead time</div>
                </div>
                <div className="border-l-2 border-blue-500/40 pl-5">
                  <div className="text-2xl font-black text-white">DDP</div>
                  <div className="text-xs text-slate-300 font-bold uppercase tracking-widest mt-1">Delivered to your destination</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Where A-frame signs are used */}
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-3xl mb-14">
              <div className="eyebrow text-blue-600 font-black tracking-widest uppercase mb-4 text-xs">Typical Applications</div>
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 mb-5">Where an A-frame sign earns its place</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                The common thread is a spot that has to be signed but cannot be built on. A wall sign is fixed once and stays; an A-frame goes where the people are today and moves when they do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {placements.map((item) => (
                <div key={item.no} className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8">
                  {/* Kept in a verified accent colour rather than the faded slate-100/200
                      numeral the older cards use, so the new page adds no contrast gap. */}
                  <div className="text-sm font-black text-blue-600 tracking-[0.3em] mb-5">{item.no}</div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Specifications and options */}
        <section className="section bg-slate-100">
          <div className="container">
            <div className="max-w-3xl mb-14">
              <div className="eyebrow text-blue-600 font-black tracking-widest uppercase mb-4 text-xs">Specification &amp; Options</div>
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 mb-5">Confirmed against your project, not assumed</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                A-frame signs are quoted from the artwork, the quantity, and the site the sign will stand on, so the options below are settled with you rather than published as fixed figures. Send the brief and we will come back with a build to review.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {specifications.map((spec) => (
                <div key={spec.label} className="bg-white rounded-[2rem] border border-slate-200 p-8">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700 mb-4">{spec.label}</div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-3">{spec.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm">{spec.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-950 text-white rounded-[2.5rem] p-10 lg:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-3">Factory</div>
                <div className="text-sm text-slate-300 font-medium leading-relaxed">20,000 sqm production base in Dalian, EST. 2006.</div>
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-3">Warranty</div>
                <div className="text-sm text-slate-300 font-medium leading-relaxed">Warranty terms stated in the project quotation.</div>
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-3">Delivery</div>
                <div className="text-sm text-slate-300 font-medium leading-relaxed">DDP shipping may be quoted as one delivered scope after destination and cargo review.</div>
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-3">Artwork</div>
                <div className="text-sm text-slate-300 font-medium leading-relaxed">Vector artwork and brand references reviewed before quoting.</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="section bg-white">
          <div className="container max-w-4xl">
            <div className="text-center mb-14">
              <div className="eyebrow text-blue-600 font-black tracking-widest uppercase mb-4 text-xs">Questions</div>
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900">A-frame sign FAQs</h2>
            </div>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-slate-50 border border-slate-200 rounded-[1.5rem] p-8">
                  <h3 className="text-lg font-black text-blue-700 mb-3 tracking-tight">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="bg-slate-50 py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Planning an A-frame sign?</h2>
            <p className="text-slate-600 font-medium mb-8">Send the artwork, the number of units, and the pavement or site the sign will stand on for a project-specific review.</p>
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
