'use client';

import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

const faqs = [
  {
    question: 'Which material is better for an outdoor sign?',
    answer: 'Neither material is automatically better for every site. Compare the exposure, appearance, finish, fabrication, drainage, cleaning access, maintenance plan, and local project requirements before selecting 304 stainless steel or galvanized steel.',
  },
  {
    question: 'Is 304 stainless steel maintenance-free outdoors?',
    answer: 'Do not treat 304 stainless steel as maintenance-free. Site exposure, finish, crevices, contamination, drainage, and cleaning access still need review, especially near coastal or industrial environments.',
  },
  {
    question: 'What should be included in a material comparison quotation?',
    answer: 'Ask for the face and structural materials, finish system, edge and joint details, mounting hardware, drawings, packing, shipping scope, installation responsibility, and maintenance notes so both proposals describe a comparable scope.',
  },
];

const sources = [
  {
    name: "International Sign Association (ISA) — Glossary of Sign Terms and Definitions",
    url: "https://signs.org/resources-training/signs101/glossary-of-sign-terms-and-definitions/",
    note: "Terminology reference for sign types and project language.",
  },
  {
    name: "U.S. Access Board — Americans with Disabilities Act (ADA)",
    url: "https://www.access-board.gov/ada/",
    note: "Official accessibility reference; confirm the applicable jurisdiction and project code path.",
  },
  {
    name: "U.S. Access Board — Chapter 7: Signs",
    url: "https://www.access-board.gov/ada/guides/chapter-7-signs/",
    note: "Official signs guidance for accessibility planning; it is not a substitute for the authority having jurisdiction.",
  },
  {
    name: "International Molybdenum Association — Which Stainless Steel?",
    url: "https://www.imoa.info/download_files/stainless-steel/folder_which_stainless_steel_EN.pdf",
    note: "Public technical guidance for thinking about stainless-steel selection and exposure.",
  },
  {
    name: "Nickel Institute — Design Guidelines for the Selection and Use of Stainless Steels",
    url: "https://nickelinstitute.org/media/1667/designguidelinesfortheselectionanduseofstainlesssteels_9014_.pdf",
    note: "Public technical handbook for material-selection context and design considerations.",
  },
];

export default function StainlessSteelComparisonGuide() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main id="main" className="bg-slate-100 min-h-screen pt-32 pb-40">
      <JsonLd data={faqJsonLd} />
      <article className="w-full max-w-6xl px-4 sm:px-6 lg:px-10 mx-auto">
        <header className="bg-slate-950 text-white rounded-[3rem] px-6 py-12 sm:px-12 lg:px-16 lg:py-16 mb-10">
          <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">Outdoor Signage Materials Guide</div>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
            304 Stainless Steel vs Galvanized Steel for Outdoor Signs
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            A buyer-focused way to compare two common material routes for outdoor signage before requesting drawings, finish samples, and a project quotation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-300">
            <span>Guide</span><span>•</span><span>Updated Sep 7, 2026</span><span>•</span><span>By Aaron, ZYD Signage</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-sm border border-slate-200">
            <p className="text-xl text-slate-800 leading-relaxed font-semibold mb-10">
              304 stainless steel is a strong starting point when an outdoor sign needs a stainless appearance and the exposure, finish, fabrication, and maintenance plan support it. Galvanized steel can be a practical route for painted sign structures when the coating system and site conditions are properly specified. The right choice depends on the project brief, not on a universal “best” material.
            </p>

            <section className="border-l-4 border-blue-600 pl-6 mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-4">Which material fits your outdoor sign brief?</h2>
              <p className="text-slate-600 leading-relaxed">
                Start with the sign&apos;s role, exposure, appearance, accessibility requirements, fabrication details, and maintenance access. Then ask the supplier to show the proposed layer build-up and finish in writing. For ZYD, the procurement conversation should begin with the site location, sign type, approximate dimensions, lighting requirement, quantity, installation responsibility, and destination so the material recommendation can be checked against the actual project.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-6">304 Stainless Steel vs Galvanized Steel: the short answer</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[620px]">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="py-4 pr-5 text-sm uppercase tracking-wider">Decision factor</th>
                      <th className="py-4 pr-5 text-sm uppercase tracking-wider text-blue-700">304 stainless steel</th>
                      <th className="py-4 text-sm uppercase tracking-wider text-slate-700">Galvanized steel</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b border-slate-100"><td className="py-4 pr-5 font-bold text-slate-900">Visual brief</td><td className="py-4 pr-5">Useful where a brushed, polished, or exposed stainless appearance is part of the design brief.</td><td className="py-4">Usually paired with a specified paint or powder-coat finish when the structure is intended to be coated.</td></tr>
                    <tr className="border-b border-slate-100"><td className="py-4 pr-5 font-bold text-slate-900">Exposure question</td><td className="py-4 pr-5">Still requires review of pollutants, salt exposure, crevices, finish, drainage, and cleaning access.</td><td className="py-4">Requires review of the zinc protection, cut edges, joints, coating system, drainage, and planned maintenance.</td></tr>
                    <tr className="border-b border-slate-100"><td className="py-4 pr-5 font-bold text-slate-900">Fabrication</td><td className="py-4 pr-5">Welding, grinding, brushing, polishing, and contamination control should be agreed before production.</td><td className="py-4">Fabrication sequence and post-fabrication protection should be defined so exposed areas receive the intended protection.</td></tr>
                    <tr><td className="py-4 pr-5 font-bold text-slate-900">Best procurement next step</td><td className="py-4 pr-5">Request a finish sample, edge/joint detail, cleaning note, and site-exposure review.</td><td className="py-4">Request the complete protection and paint specification, including touch-up and installation coordination.</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-6">What should a buyer confirm before choosing?</h2>
              <div className="space-y-6">
                <div><h3 className="text-xl font-black text-blue-700 mb-2">1. Where will the sign be installed?</h3><p className="text-slate-600 leading-relaxed">Record whether the sign is indoors, in a normal outdoor environment, near a coast, beside a road, in an industrial area, or in a location where cleaning access is limited. These are procurement inputs, not proof that one grade is suitable in every site.</p></div>
                <div><h3 className="text-xl font-black text-blue-700 mb-2">2. Is the finish part of the brand experience?</h3><p className="text-slate-600 leading-relaxed">A stainless face may be selected for its visual texture, while a galvanized steel structure may be selected for a coated architectural finish. Ask for a sample or approved finish reference rather than relying on a material name alone.</p></div>
                <div><h3 className="text-xl font-black text-blue-700 mb-2">3. How will accessibility be coordinated?</h3><p className="text-slate-600 leading-relaxed">Material selection does not decide accessibility compliance. Confirm the sign type, tactile or raised content where applicable, character layout, mounting position, contrast, and local approval path with the project designer and the authority having jurisdiction. Use the U.S. Access Board references below when the project falls under that framework; do not treat this guide as legal advice.</p></div>
                <div><h3 className="text-xl font-black text-blue-700 mb-2">4. What must appear in the quotation?</h3><p className="text-slate-600 leading-relaxed">Ask the supplier to separate face material, internal frame, finish, illumination, mounting hardware, packing, shipping scope, installation responsibility, drawings, and maintenance notes. This makes two material proposals easier to compare without assuming unverified specifications.</p></div>
              </div>
            </section>

            <section className="mb-12 bg-blue-50 rounded-[2rem] p-7 sm:p-9 border border-blue-100">
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-4">ZYD procurement checklist</h2>
              <p className="text-slate-600 leading-relaxed mb-5">This is ZYD&apos;s practical request list for preparing a project review. It is a procurement workflow, not a claim that either material is automatically compliant or suitable.</p>
              <ul className="space-y-3 text-slate-700 font-medium">
                <li>• Site city/country and exposure notes, including coastal or industrial conditions.</li>
                <li>• Sign type: pylon sign, monument sign, directional sign, building sign, or another defined type.</li>
                <li>• Approximate dimensions, quantity, artwork, illumination, and viewing direction.</li>
                <li>• Required appearance: exposed stainless finish, painted finish, or a finish sample for approval.</li>
                <li>• Installation location, access constraints, foundation/interface responsibility, and local review requirements.</li>
                <li>• Destination and delivery scope, so packaging and shipping can be discussed with the actual project brief.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-xl font-black text-blue-700 mb-2">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-4">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Sources &amp; further reading</h2>
              <p className="text-slate-600 leading-relaxed mb-6">The links below are public references used for terminology, accessibility context, and stainless-steel selection background. They are not ZYD product claims. Project compliance remains the responsibility of the design team and the authority having jurisdiction.</p>
              <ol className="space-y-5 list-decimal pl-5">
                {sources.map((source) => (
                  <li key={source.url} className="pl-2 text-slate-700">
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900">{source.name}</a>
                    <p className="text-sm text-slate-500 mt-1">{source.note}</p>
                  </li>
                ))}
              </ol>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-5 text-sm font-black uppercase tracking-widest">
              <Link href="/products/outdoor-pylon-monument-sign" className="text-blue-700 hover:text-blue-900">See outdoor pylon signs</Link>
              <Link href="/products/architectural-wayfinding-system" className="text-blue-700 hover:text-blue-900">See wayfinding systems</Link>
              <Link href="/contact" className="text-blue-700 hover:text-blue-900">Discuss your project</Link>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-5">
            <div className="bg-slate-950 text-white rounded-[2rem] p-8">
              <div className="text-blue-400 font-black uppercase tracking-[0.25em] text-xs mb-4">Buyer brief</div>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Send the project inputs</h2>
              <p className="text-slate-300 leading-relaxed mb-6">Share the site, sign type, approximate dimensions, finish preference, quantity, and destination. ZYD can review the brief before recommending a fabrication route.</p>
              <Link href="/contact" className="inline-flex button-green-base px-6 py-4 rounded-full text-white font-black text-sm">REQUEST A REVIEW</Link>
            </div>
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200">
              <div className="text-blue-700 font-black uppercase tracking-[0.25em] text-xs mb-4">Related product</div>
              <Link href="/products/metal-acrylic-logo-sign" className="text-xl font-black uppercase tracking-tight text-slate-900 hover:text-blue-700">Metal &amp; Acrylic Logo Signs</Link>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">Review a related custom sign route, then confirm the actual project requirements with the team.</p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
