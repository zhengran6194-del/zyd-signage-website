import Link from 'next/link';

const briefs: Record<string, { title: string; text: string; links: string[][]; actions: string[][] }> = {
  "how-much-do-custom-channel-letters-cost": {
    "title": "Turn your channel letter brief into a project quote",
    "text": "Review real letter options, then send your logo, approximate size, quantity, lighting preference, wall photo and destination. Start with what you have.",
    "links": [
      [
        "/products/custom-channel-letters",
        "Explore illuminated channel letters"
      ],
      [
        "/products/custom-halo-lit-letters",
        "Compare halo-lit letter options"
      ]
    ],
    "actions": [
      [
        "letters",
        "Get a Channel Letter Quote"
      ]
    ]
  },
  "front-lit-vs-halo-lit-channel-letters": {
    "title": "Compare both lighting styles for your own logo",
    "text": "See the product constructions and workshop photographs. Send the same artwork, dimensions and wall photo so we can discuss a suitable lighting effect for your project.",
    "links": [
      [
        "/products/custom-channel-letters",
        "See front-lit channel letters"
      ],
      [
        "/products/custom-halo-lit-letters",
        "See halo-lit metal letters"
      ]
    ],
    "actions": [
      [
        "letters",
        "Quote Front-Lit Letters"
      ],
      [
        "halo",
        "Quote Halo-Lit Letters"
      ]
    ]
  },
  "importing-custom-signage-from-china": {
    "title": "Plan a letter or pylon sign shipment",
    "text": "Send the artwork or site brief, approximate sizes, quantity and destination city or postcode. We can discuss fabrication, wooden crating and EXW, FOB, CIF or DDP scope in the quotation. On-site installation is not included.",
    "links": [
      [
        "/products/custom-channel-letters",
        "Explore custom channel letters"
      ],
      [
        "/products/outdoor-pylon-monument-sign",
        "Explore pylon and monument signs"
      ],
      [
        "/packaging-shipping",
        "See real packing and delivery scope"
      ]
    ],
    "actions": [
      [
        "letters",
        "Get a Letter Project Quote"
      ],
      [
        "pylon",
        "Get a Pylon Project Quote"
      ]
    ]
  },
  "pylon-sign-site-information-checklist": {
    "title": "Use your site brief to start a pylon project",
    "text": "Send site photos, a marked location, approximate dimensions, tenant layout and destination. We can start the design discussion with the information available; your local team coordinates foundations and installation.",
    "links": [
      [
        "/products/outdoor-pylon-monument-sign",
        "See pylon sign options and project details"
      ],
      [
        "/case-studies/multi-brand-dealership-pylon-sign",
        "View a real dealership pylon production case"
      ]
    ],
    "actions": [
      [
        "pylon",
        "Get a Pylon Sign Quote"
      ]
    ]
  }
};

export default function GuideProjectNextStep({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const brief = briefs[slug];
  if (!brief) return null;
  return <section aria-label={compact ? 'Explore related sign products' : 'Request a project quotation'} className="my-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-7">
    <h2 className="text-xl font-bold text-slate-950">{compact ? 'See the signs discussed in this guide' : brief.title}</h2>
    {!compact && <p className="mt-3 text-slate-700 leading-relaxed">{brief.text}</p>}
    <ul className="mt-4 space-y-3">{brief.links.map(([href, label]) => <li key={href}><Link href={href} className="font-semibold text-blue-800 underline underline-offset-4">{label} →</Link></li>)}</ul>
    {!compact && <>
      <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">{brief.actions.map(([product, label]) => <Link key={product} href={`/contact?product=${product}`} className="button-green-base inline-flex justify-center rounded-xl px-5 py-4 text-center font-bold text-white">{label}</Link>)}</div>
      <p className="mt-4 text-sm text-slate-600">MOQ: 1 set · Free design support · Production: 7–15 days · 1-year warranty.</p>
      <p className="mt-2 text-sm text-slate-600">First reply within 8 hours by WhatsApp or email to confirm your requirements and any missing information. A completed design or quotation may need further review.</p>
    </>}
  </section>;
}
