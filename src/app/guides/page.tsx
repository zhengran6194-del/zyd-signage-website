import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/config/site';

const path = '/guides';
const title = 'Signage Guides';
const description = 'Practical buying and technical guides for custom signage projects, covering channel letter costs, illumination styles, sign selection, and outdoor materials.';

const guides = [
  {
    tag: 'Buying Guide',
    title: 'How Much Do Custom Channel Letters Cost?',
    desc: 'The project inputs that shape a channel letter quotation, from artwork and dimensions to lighting, finish, mounting, and delivery scope.',
    href: '/guides/how-much-do-custom-channel-letters-cost',
  },
  {
    tag: 'Comparison',
    title: 'Front-Lit vs Halo-Lit Channel Letters',
    desc: 'How front-lit and halo-lit letters differ in visual effect, mounting background, service planning, and the details a buyer should confirm.',
    href: '/guides/front-lit-vs-halo-lit-channel-letters',
  },
  {
    tag: 'Buying Guide',
    title: 'How to Choose the Right Sign for Your Business',
    desc: 'A practical framework for choosing pylon, monument, building, wayfinding, or illuminated signage around the real site and message.',
    href: '/guides/how-to-choose-the-right-sign-for-your-business',
  },
  {
    tag: 'Materials',
    title: '304 Stainless Steel vs Galvanized Steel',
    desc: 'Material-selection logic for outdoor signs, comparing 304 stainless steel and galvanized steel by exposure, finish, and fabrication.',
    href: '/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs',
  },
  {
    tag: 'Manufacturing Guide',
    title: 'How Custom Signage Is Made: 7 Manufacturing Steps',
    desc: 'A buyer-focused guide to design development, fabrication, finishing, illumination, quality control, packing and delivery.',
    href: '/guides/custom-signage-manufacturing-process',
  },
];

export default function GuidesPage() {
  const url = `${siteConfig.url}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Guides", item: url },
        ],
      },
      {
        "@type": "CollectionPage",
        name: title,
        description,
        url,
      },
    ],
  };

  return (
    <main className="bg-slate-100 min-h-screen">
      <JsonLd data={data} />
      <section className="section bg-slate-900 text-white py-24 lg:py-28">
        <div className="container text-center">
          <div className="eyebrow text-blue-400 font-black tracking-[0.3em] uppercase mb-4 text-xs">Knowledge Base</div>
          <h1 className="uppercase tracking-tighter mb-6">Signage Guides</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
            Practical buying and technical guides for custom signage projects.
          </p>
        </div>
      </section>

      <section className="section bg-slate-100 py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {guides.map((g, i) => (
              <Link href={g.href} key={i} className="group block bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">{g.tag}</div>
                <h2 className="font-black text-slate-900 mb-3 uppercase text-xs leading-relaxed">{g.title}</h2>
                <p className="text-slate-500 text-xs leading-relaxed font-medium mb-4">{g.desc}</p>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest group-hover:text-blue-600 transition-colors">Read Guide</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Have a project question?</h2>
          <p className="text-slate-500 font-medium mb-8">Send the site details, artwork, and quantities for a project-specific review.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide">DISCUSS YOUR PROJECT</Link>
            <Link href="/products" className="px-10 py-5 rounded-full border-2 border-slate-300 text-slate-700 font-black uppercase tracking-widest text-sm hover:border-blue-600 hover:text-blue-700 transition-all">All Products</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
