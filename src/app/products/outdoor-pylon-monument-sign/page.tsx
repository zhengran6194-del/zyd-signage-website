'use client';

import Link from 'next/link';
import Image from 'next/image';
import PackingDeliverySummary from '@/components/PackingDeliverySummary';
import WhatsAppCta from '@/components/WhatsAppCta';
import JsonLd from '@/components/JsonLd';
import RelatedCaseStudy from '@/components/RelatedCaseStudy';
import ProductPurchaseDetails from '@/components/ProductPurchaseDetails';
import PylonProjectEvidence from '@/components/PylonProjectEvidence';

const faqs = [
  {
    question: 'Do you offer free design and drawing confirmation?',
    answer: 'Yes. Our designers provide free design support. Share your artwork or reference, dimensions, quantity and site information. Review the design and confirm the final drawing, lighting, finish and supply scope before fabrication. Site-dependent interfaces must be coordinated with the local project team.',
  },
  {
    question: 'What warranty and after-sales support do you provide?',
    answer: 'The warranty is 1 year. Contact our team with the order reference, issue description and photos or video so we can review the problem and discuss the next steps. Warranty coverage and any parts, labour or transport arrangements should be confirmed in the order terms. On-site installation is not included.',
  },

  {
    question: 'What is the difference between a pylon sign and a monument sign?',
    answer: 'A pylon sign is a tall, freestanding identification structure usually chosen when the sign must be read from a distance or above surrounding objects. A monument sign is a lower, broader structure integrated with the site and landscape. The right choice depends on approach distance, permitted height, site context, and the message hierarchy.',
  },
  {
    question: 'Do you provide wind load calculations and foundation specifications?',
    answer: 'Provide the site location, dimensions and local structural criteria with the brief. Agree who supplies structural calculations, foundation design and local approval services. Fabrication drawings and anchor interfaces must be coordinated with the responsible local engineer; these services are not automatically included in every quotation.',
  },
  {
    question: 'What is the standard lead time for pylon and monument signs?',
    answer: 'The MOQ is 1 set. Typical production lead time is 7–15 days. Confirm the production schedule with the approved drawings, dimensions, finish, lighting, quantity and packing requirements. Design review, local engineering and freight are scheduled separately. On-site installation is not included.',
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

export default function OutdoorPylonMonumentSignPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Custom Pylon Sign Manufacturing</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Outdoor Pylon &amp; <span className="text-blue-500 italic">Monument</span> <br/>Signs
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">
                Custom illuminated pylon signs, multi-tenant directories and freestanding entrance signs for dealerships, shopping destinations and commercial sites. Define the size, display faces, lighting and supplied parts around your project.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <Link
                  href="/contact?product=pylon"
                  className="button button-green-base px-6 py-4 rounded-full text-white font-black text-sm tracking-wide text-center"
                >
                  SUBMIT A PYLON SIGN BRIEF
                </Link>
                <WhatsAppCta label="Check Feasibility" message="Hi Aaron, can you check feasibility for an outdoor pylon or monument sign?" className="inline-flex items-center justify-center rounded-full border border-blue-300 px-6 py-4 text-sm font-black text-white hover:bg-white/10" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <Image src="/assets/images/pylon-water-plaza-installed.jpg" alt="Installed Water Fashion Plaza multi-tenant pylon sign at the commercial entrance in Dalian" width={5647} height={3765} loading="eager" fetchPriority="high" sizes="(min-width: 1334px) 568px, (min-width: 1024px) calc(45vw - 32px), 90vw" className="relative rounded-[2rem] shadow-2xl border border-white/10 h-auto w-full" />
              <p className="relative mt-4 text-sm text-slate-400">Water Fashion Plaza, Dalian: installed entrance pylon and tenant directory. <Link href="/case-studies/dalian-water-plaza-wayfinding-signage" className="text-blue-300 underline underline-offset-4">Explore the project</Link></p>
            </div>
          </div>
        </section>

        <PylonProjectEvidence />

        <ProductPurchaseDetails product="pylon" />

        {/* 2. Direct answer block */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">Pylon vs monument: the short answer</div>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-semibold max-w-4xl">
                Choose a pylon sign when the entry must be identified from a distance, above roadside obstacles, or across multiple approach lanes. Choose a monument sign when a lower, wider presence tied to the site and landscape suits the brand better. The decision follows the approach distance, permitted height, site context, and message hierarchy, not a fixed rule.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buyer-question sections */}
        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How are large pylon signs engineered for wind load?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Wind resistance is a site-specific engineering question, not a fixed specification. Confirm the design criteria and responsibility for structural calculations and foundation design with the project team. The fabrication drawing, base plate, anchors and electrical entry must agree with the approved site design. The illumination and power components are selected and reviewed against the confirmed exterior application.
              </p>
              <div className="mt-auto">
                <Link href="/guides/how-to-choose-the-right-sign-for-your-business" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Read the sign-selection guide</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Which materials should an outdoor monument sign use?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Material selection starts with the finish the brand needs, the exposure of the site, and how the structure will be fabricated and maintained. Common routes include galvanized sheet, 201 and 304 stainless steel, and aluminum plate, each followed by a specified coating or finish system. For a fuller comparison of stainless and coated-steel routes, review our material guide before sending a brief.
              </p>
              <div className="mt-auto">
                <Link href="/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Compare outdoor sign materials</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">What sizes can you manufacture?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Overall dimensions are confirmed against the project drawing, the viewing distance, and the site, so there is no responsible one-size answer. Share the approximate height and width, the approach distance, and any permitted-height constraint, and the engineering review will confirm the structural approach before production. Recent landmark projects give a practical sense of what the factory builds at scale.
              </p>
              <div className="mt-auto">
                <Link href="/projects" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">See landmark project references</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">When does a pylon or monument sign need coordinated engineering?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Any tall or site-integrated structure benefits from an early engineering conversation: wind exposure, foundation or ground interface, power routing, service access, and local review requirements all belong in the brief. Projects that combine entry identity with wider wayfinding needs are often delivered together as one coordinated program.
              </p>
              <div className="mt-auto">
                <Link href="/products/architectural-wayfinding-system" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Explore wayfinding systems</Link>
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
                <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">Each option below is a decision input. Confirm the site, finish, and fabrication requirement with the project brief before production.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Material direction</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Galvanized sheet with a specified coating system for painted structures</li>
                      <li>&bull; 201 or 304 stainless steel when a stainless appearance is required</li>
                      <li>&bull; Aluminum plate for lighter structural sections</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Finish direction</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Powder coating in specified RAL colors</li>
                      <li>&bull; Automotive-grade paint where the brand finish demands it</li>
                      <li>&bull; Brushed or mirror stainless finish as an exposed-metal route</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Structure &amp; mounting</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Internal reinforced frames for larger faces</li>
                      <li>&bull; L-shape or U-shape mounting brackets</li>
                      <li>&bull; Flush-mount installation where the site allows</li>
                      <li>&bull; Project-specific wind load review for tall structures</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Illumination &amp; durability</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; LED modules selected for the project specification</li>
                      <li>&bull; Power supplies selected for the project specification</li>
                      <li>&bull; Environmental rating reviewed for the exterior application</li>
                      <li>&bull; 1-year warranty; coverage confirmed in the order terms</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 uppercase tracking-tighter">Factory Advantage</h3>
                <p className="text-slate-300 mb-8 leading-relaxed font-medium">Direct manufacturing from our 20,000sqm base in Dalian, established in 2006, keeps every weld and finish under one quality-control process.</p>
                <div className="space-y-5">
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">DDP Shipping by Quotation</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">MOQ: 1 set</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">Lead time confirmed per project</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PackingDeliverySummary />

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
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Planning an entry sign project?</h2>
            <p className="text-slate-500 font-medium mb-8">Send the site location, approximate dimensions, artwork, and quantity for a project-specific review.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?product=pylon" className="button button-green-base px-6 py-4 rounded-full text-white font-black text-sm tracking-wide text-center">SUBMIT A PYLON SIGN BRIEF</Link>
              <Link href="/products" className="px-10 py-5 rounded-full border-2 border-slate-300 text-slate-700 font-black uppercase tracking-widest text-sm hover:border-blue-600 hover:text-blue-700 transition-all">All Products</Link>
            </div>
            <p className="mt-6"><Link href="/guides/pylon-sign-site-information-checklist" className="font-bold text-blue-700 underline underline-offset-4">Before ordering: prepare your pylon sign site information</Link></p>
            <RelatedCaseStudy href="/case-studies/dalian-water-plaza-wayfinding-signage" name="Water Fashion Plaza, Dalian" context="the freestanding pylon sign that identifies the site entrance." />
          </div>
        </section>
      </main>
    </>
  );
}
