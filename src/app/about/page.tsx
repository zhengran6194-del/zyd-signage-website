'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/config/site';

/**
 * Page-level structured data. The page described itself only through the
 * site-wide Organization node, so the page itself carried no type and no
 * breadcrumb: this states what the page is and which entity it describes,
 * reusing the organisation node the root layout already publishes.
 */
const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${siteConfig.url}/about` },
      ],
    },
    {
      '@type': 'AboutPage',
      '@id': `${siteConfig.url}/about#aboutpage`,
      url: `${siteConfig.url}/about`,
      name: 'About ZYD Signage',
      inLanguage: 'en',
      isPartOf: { '@id': `${siteConfig.url}/#website` },
      about: { '@id': `${siteConfig.url}/#organization` },
    },
  ],
};

/**
 * The eight production stages, worded as the home page words them. The about
 * page repeats them rather than describing a second process, so the two pages
 * cannot disagree about how an order is made.
 */
const productionSteps = [
  { no: '01', title: 'Technical Consultation', desc: 'Expert analysis of signage requirements and site conditions.' },
  { no: '02', title: 'Precision 3D Mockup', desc: 'Visualizing final aesthetics with industrial-grade 3D renderings.' },
  { no: '03', title: 'Shop Drawing', desc: 'Detailed engineering schematics for structural and electrical systems.' },
  { no: '04', title: 'CNC Fabrication', desc: 'High-precision cutting and assembly using advanced automation.' },
  { no: '05', title: 'Automotive Coating', desc: 'Dust-free finish application selected for the specified project environment.' },
  { no: '06', title: 'LED Integration', desc: 'Multi-point wiring with LED modules selected for the project specification.' },
  { no: '07', title: 'Illumination Quality Checks', desc: 'Project-specific QC including illumination trials and final checks.' },
  { no: '08', title: 'Global DDP Shipping', desc: 'Secure industrial crating and door-to-door logistics management.' },
];

const qualityPoints = [
  { title: 'Quality Control', desc: 'Established quality processes, with the final check defined for the project rather than assumed.' },
  { title: 'Electrical Requirements', desc: 'Reviewed against the conditions at the destination before the order is produced.' },
  { title: 'Inspection Scope', desc: 'Agreed with the buyer before production starts, so both sides know what is being checked.' },
  { title: 'Material Selection', desc: 'Chosen against the specification and the environment the sign is made for.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageJsonLd} />
      <main id="main" className="section-pad bg-slate-100 min-h-screen">
        <div className="container pt-20">
          <div className="section-heading text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">About ZYD Signage</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto italic">Leading the international signage industry with precision since 2006.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="text-slate-700 leading-relaxed text-lg">
              <p className="mb-6">Dalian Zhiyudao Signage & Tech. Co., Ltd. (ZYD) is a factory-direct manufacturer serving global B2B signage projects since 2006.</p>
              <p className="mb-6">Our <strong>20,000sqm production base</strong> is equipped with CNC technology and structured production processes for architectural wayfinding and custom signs.</p>
              <p>We can quote Door-to-Door (DDP) shipping when the destination and cargo details are confirmed. The agreed delivery scope, import duties, and taxes depend on the project-specific quotation.</p>
            </div>
            <div className="relative group">
              <Image src="/assets/images/company-entrance.jpg" alt="ZYD Factory Entrance" width={1448} height={1086} sizes="(min-width: 768px) 50vw, 100vw" className="rounded-[3rem] shadow-2xl w-full h-[450px] object-cover" />
              <p className="text-center text-sm font-black text-slate-600 mt-4 tracking-widest uppercase">Factory Entrance</p>
            </div>
          </div>

          <section className="mb-20 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">What the factory produces</h2>
            <div className="text-slate-700 leading-relaxed text-lg space-y-6">
              <p>
                Production covers the signage families that a B2B project usually needs together: architectural wayfinding and Braille signage, medical care signage, halo-lit metal letters, ultra-slim LED light boxes, LED neon, metal and acrylic logo signs, outdoor pylon and monument signs, landscape furniture, waste bins, planter boxes, desk signs, portable A-frame signs, and complete coordinated signage systems. Every family is described on its own page in the{' '}
                <Link href="/products" className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900">product range</Link>, and the buying questions behind them are covered in the{' '}
                <Link href="/guides" className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900">signage guides</Link>.
              </p>
              <p>
                Fabrication works in 304 stainless steel, galvanized steel and aluminium, alongside acrylic and LED components. Sheet steel is worked from 1.5mm heavy gauge, and painted finishes are applied as industrial-grade baking at 180°C, so the material and the finish are chosen for the environment the sign will stand in rather than for the workshop.
              </p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">How a project moves through the factory</h2>
            <p className="text-slate-700 leading-relaxed text-lg mb-10 max-w-4xl">
              Every order follows the same eight stages, and each stage produces something the buyer can review: a technical brief, a 3D mockup, engineering drawings, fabricated parts, a finished surface, wired illumination, a quality record, and a packed shipment. Nothing is sent to production before the drawing set has been agreed.
            </p>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {productionSteps.map((step) => (
                <li key={step.no} className="bg-white border border-slate-200 rounded-[2rem] p-8">
                  <div className="text-sm font-black text-blue-600 tracking-[0.3em] mb-4">{step.no}</div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{step.desc}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10">
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">How quality is confirmed</h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                Quality is handled as a set of agreed checks rather than a single inspection at the end. The four points below are settled with the buyer and recorded against the project, so a supplier and a client are reviewing the same scope.
              </p>
              <ul className="space-y-5">
                {qualityPoints.map((point) => (
                  <li key={point.title} className="border-l-2 border-blue-500/40 pl-5">
                    <div className="font-black text-slate-900 mb-1">{point.title}</div>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{point.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-950 text-white rounded-[2.5rem] p-10">
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter">Ordering and delivery basics</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Minimum order is one unit, so a single reception sign and a multi-site rollout are both accepted. Typical production lead time is 7–14 days depending on scope and quantity, counted from the point the drawings and the artwork are agreed.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                DDP may be quoted as a door-to-door scope once the destination and the cargo details are confirmed. The agreed delivery scope, import duties and taxes, and any warranty coverage, duration and exclusions are stated in the project quotation or supply agreement rather than assumed here.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Artwork and brand references are reviewed before quoting, and the 3D mockup stage exists so the intended appearance can be seen before fabrication. Start from the{' '}
                <Link href="/contact" className="font-black text-blue-400 underline decoration-blue-500/50 underline-offset-4 hover:text-blue-300">contact form</Link> with whatever drawings and constraints are already fixed.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
