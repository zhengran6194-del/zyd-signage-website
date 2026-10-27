'use client';

import Link from 'next/link';
import Image from 'next/image';
import PackingDeliverySummary from '@/components/PackingDeliverySummary';
import LetterProjectEvidence from '@/components/LetterProjectEvidence';
import WhatsAppCta from '@/components/WhatsAppCta';
import JsonLd from '@/components/JsonLd';
import ProductPurchaseDetails from '@/components/ProductPurchaseDetails';

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
    question: 'What is a front-lit channel letter?',
    answer: 'A front-lit channel letter is a fabricated letter with a translucent face that is lit from inside the letter body. The light passes through the face, so the letter itself glows while the wall behind it stays dark. That is the opposite of a halo-lit (rear-glow) letter, where the face stays unlit and the light is thrown back onto the wall.',
  },
  {
    question: 'How is the illumination built inside the letter?',
    answer: 'The letter body carries LED modules mounted on the interior of the return and wired back to a remote power supply. Module spacing and the depth of the return are set against the letter size and the face material, so the face reads evenly instead of in bright patches. The layout is drawn on the shop drawing that precedes production.',
  },
  {
    question: 'What are the face, return and trim made from?',
    answer: 'The face is normally translucent acrylic, and the return and the trim are formed from sheet metal — aluminum or stainless steel are the usual routes, with coated sheet where a painted finish is specified. The trim is the visible edge around the face, so its material and finish are a design decision as much as a construction one.',
  },
  {
    question: 'Which finishes can be specified for the letter body?',
    answer: 'Brushed or mirror stainless steel are common on architectural work, and a letter body can be powder coated in specified RAL colors. The return is the part seen from the side, so its finish is usually chosen against the facade. Face material and body finish are confirmed together on the shop drawing.',
  },
  {
    question: 'How are front-lit letters mounted to a wall?',
    answer: 'Letters are mounted either on a raceway or on individual brackets. A raceway carries the wiring and gives a consistent standoff, while individual mounting suits letter sets that follow a curve or an irregular elevation. Which route is used depends on how the wiring has to reach each letter and how flat the wall is.',
  },
  {
    question: 'Can front-lit letters be used outdoors or in coastal locations?',
    answer: 'Outdoor letter sets are a common request, and the material route and fixing detail are chosen with the exposure in mind. A coastal or heavily exposed site calls for a different specification than a sheltered one, so the route is confirmed per project rather than assumed from the letter type. Share the location and the wall condition with the brief.',
  },
  {
    question: 'How is brightness uniformity controlled across a letter?',
    answer: 'Uniformity comes from the module spacing, the depth of the return and the face material together. A deeper return with closer module spacing gives a more even face, while a shallow return can show the light source as a hot spot. The intended effect is confirmed before fabrication.',
  },
  {
    question: 'Can a single module or one letter be serviced on site?',
    answer: 'Service access is planned while the letter is designed. Letters are usually built so the face or a service panel can be opened without removing the whole sign, and the power supply is positioned where it can be reached. Access, wiring route and power supply positions are recorded on the drawing set.',
  },
  {
    question: 'What information is needed for a front-lit letter quotation?',
    answer: 'A comparable quotation needs the artwork in vector form, the letter height, the overall run and the quantity, plus the wall material, the mounting height and the finish direction. State the face material as well, because it changes the construction. Send those details with the brief and the engineering review follows.',
  },
  {
    question: 'What are the MOQ and the lead time for front-lit letters?',
    answer: 'The MOQ is 1 set. Typical production lead time is 7–15 days. Confirm the production schedule with the approved drawings and order scope; design review and transport are scheduled separately.',
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

export default function FrontLitChannelLettersPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Illuminated Face Fabrication</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Custom <span className="text-blue-500 italic">Front-Lit</span> <br/>Channel Letters
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">
                Letters whose face is the light source, fabricated in acrylic and sheet metal with concealed LED modules and a project-specific finish.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <Link
                  href="/contact?product=letters"
                  className="button button-green-base px-6 py-4 rounded-full text-white font-black text-sm tracking-wide text-center"
                >
                  GET A CHANNEL LETTER QUOTE
                </Link>
                <WhatsAppCta label="Check Feasibility" message="Hi Aaron, can you check feasibility for custom front-lit channel letters?" className="inline-flex items-center justify-center rounded-full border border-blue-300 px-6 py-4 text-sm font-black text-white hover:bg-white/10" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <Image src="/assets/images/channel-letters-white-lighting-check.jpg" alt="White front-lit channel letters illuminated on a workshop bench, with red illuminated letters behind" width={1706} height={1279} loading="eager" fetchPriority="high" sizes="(min-width: 1334px) 568px, (min-width: 1024px) calc(45vw - 32px), 90vw" className="relative rounded-[2rem] shadow-2xl border border-white/10 h-auto w-full" />
              <p className="relative mt-4 text-sm text-slate-400">Workshop lighting check. All dimensions are customised to the approved project drawing.</p>
            </div>
          </div>
        </section>

        <ProductPurchaseDetails product="letters" />

        <LetterProjectEvidence variant="front" />

        <PackingDeliverySummary />

        {/* 2. Direct answer block */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">Front-lit channel letters: the short answer</div>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-semibold max-w-4xl">
                A front-lit channel letter is built so that the illuminated surface is the face: the letter body holds the LED modules and the light leaves through the acrylic face, which makes the letter itself the bright element. Choose it when the letters have to read as branded signs in daylight and at night, rather than throwing light onto the wall behind them.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buyer-question sections */}
        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How are front-lit channel letters built?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The letter is formed from sheet metal to create a body with a return, the LED modules are mounted inside that return and wired back to a power supply, and a translucent acrylic face is fitted and trimmed. The face material, the depth of the return and the module spacing are set together, because those three decide whether the face reads evenly or shows the light source. Nothing goes to production before the shop drawing records them.
              </p>
              <div className="mt-auto">
                <Link href="/guides/front-lit-vs-halo-lit-channel-letters" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Compare front-lit and halo-lit letters</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Which materials suit outdoor front-lit letters?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Letter bodies for exterior work are usually 304 stainless steel, aluminum or coated sheet, with the face in translucent acrylic and the trim in a matching or contrasting metal finish. The material route and the fixing detail are chosen against the exposure of the site, so a coastal or heavily weathered location is specified differently from a sheltered one. The material comparison covers how the sheet routes differ.
              </p>
              <div className="mt-auto">
                <Link href="/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Review outdoor material options</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">What information is needed for a front-lit letter quotation?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                A comparable quotation is built from vector artwork, the letter height and overall run, the quantity, the wall material, the mounting height and the finish direction, with the face material stated because it changes the construction. Site photos help confirm the standoff and the wiring route. The cost guide sets out how each of those inputs moves the price.
              </p>
              <div className="mt-auto">
                <Link href="/guides/how-much-do-custom-channel-letters-cost" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">See what shapes the cost</Link>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">How are illumination and service access specified?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Lighting is specified as part of the build rather than added afterwards: module type, spacing and the power supply position are listed on the drawing, and the face or a service panel is detailed so a letter can be opened without taking the whole sign off the wall. How the face, return and trim materials are reviewed together is covered in the material guide.
              </p>
              <div className="mt-auto">
                <Link href="/guides/signage-material-selection-guide" className="text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">Read the material guide</Link>
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
                <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">Each item is a decision input for a front-lit letter. Confirm the face, the return depth and the mounting route before production.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Letter face</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Translucent acrylic, the illuminated surface</li>
                      <li>&bull; Face material chosen against the required light spread</li>
                      <li>&bull; Trim fitted around the face edge</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Letter body</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; 304 stainless steel for exposed outdoor letters</li>
                      <li>&bull; Aluminum for lighter letter bodies</li>
                      <li>&bull; Coated sheet where a painted finish is specified</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Interior illumination</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; LED modules mounted on the interior of the return</li>
                      <li>&bull; Module spacing set for an even face</li>
                      <li>&bull; Power supplies selected for the project specification</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-black text-blue-600 mb-4 uppercase italic">Mounting &amp; access</h3>
                    <ul className="space-y-3 text-slate-600 font-medium">
                      <li>&bull; Raceway or individual bracket mounting</li>
                      <li>&bull; Wiring route and service access agreed before fabrication</li>
                      <li>&bull; Face or service panel detailed for single-letter service</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 uppercase tracking-tighter">Factory Advantage</h3>
                <p className="text-slate-300 mb-8 leading-relaxed font-medium">Direct manufacturing from our 20,000sqm base in Dalian, established in 2006, keeps fabrication and finishing under one quality-control process.</p>
                <div className="space-y-5">
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">DDP Shipping by Quotation</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">MOQ: 1 set</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">Production: 7–15 days</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Related reading */}
        <section className="section bg-white pt-0">
          <div className="container max-w-4xl">
            <div className="eyebrow text-blue-600 font-black tracking-widest uppercase mb-4 text-xs">Related Reading</div>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 mb-6">Two illuminated constructions, one decision</h2>
            <p className="text-slate-600 leading-relaxed font-medium mb-5">
              Front-lit letters light the face; halo-lit (rear-glow) letters leave the face dark and light the wall behind it. The two are often specified for different parts of the same project — a bright front-lit facade and a restrained rear-glow entrance — and reading them side by side is usually how that split is settled. The{' '}
              <Link href="/products/custom-halo-lit-letters" className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900">halo-lit (rear-glow) letters</Link>{' '}
              page shows the other construction.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              Once the construction is fixed, the remaining questions are commercial and procedural: what the price is built from, how a low bid can pass acceptance while missing the scope, and what the production stages are between drawing and packing. The{' '}
              <Link href="/guides/signage-procurement-low-bid-pitfalls" className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900">low-bid tender guide</Link>{' '}
              and the{' '}
              <Link href="/guides/custom-signage-manufacturing-process" className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900">manufacturing process guide</Link>{' '}
              cover those, and the{' '}
              <Link href="/contact?product=letters" className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900">contact form</Link>{' '}
              is where a front-lit letter set gets reviewed.
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
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Planning front-lit letters?</h2>
            <p className="text-slate-500 font-medium mb-8">Send the artwork, letter height, quantity, wall material and face direction for a project-specific review.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?product=letters" className="button button-green-base px-6 py-4 rounded-full text-white font-black text-sm tracking-wide text-center">GET A CHANNEL LETTER QUOTE</Link>
              <Link href="/products" className="px-10 py-5 rounded-full border-2 border-slate-300 text-slate-700 font-black uppercase tracking-widest text-sm hover:border-blue-600 hover:text-blue-700 transition-all">All Products</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
