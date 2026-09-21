import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata, ogImages } from '@/config/site';
import JsonLd from '@/components/JsonLd';
import { solutions } from '@/content/solutions';

export const metadata: Metadata = buildPageMetadata({
  title: 'Signage Solutions by Project Scenario',
  description: 'Scenario-based signage planning for malls, industrial parks, and hotels, connecting site requirements to products, case studies, and project enquiries.',
  path: '/solutions',
  image: ogImages.default,
  type: 'website',
});

export default function SolutionsIndexPage() {
  const url = 'https://www.zydsign.com/solutions';
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.zydsign.com' },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: url },
    ],
  };
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Signage Solutions by Project Scenario',
    description: 'Scenario-based signage planning for malls, industrial parks, and hotels.',
    url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: solutions.map((solution, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: solution.title,
        url: `${url}/${solution.slug}`,
      })),
    },
  };
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={collectionJsonLd} />
      <main id="main" className="bg-slate-100 pb-32 pt-32 text-slate-900 sm:pt-40">
        <section className="container max-w-5xl">
          <div className="text-xs font-black uppercase tracking-[0.35em] text-blue-700">Project scenario planning</div>
          <h1 className="mt-5 text-4xl font-black uppercase tracking-tight sm:text-6xl">Signage Solutions by Scenario</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">Start with the site and buyer question. These scenario pages connect the sign types, procurement inputs, case references, and enquiry path for a clearer project brief.</p>
        </section>
        <section className="container mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {solutions.map((solution) => <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-emerald-700">{solution.eyebrow}</div><h2 className="text-2xl font-black uppercase tracking-tight group-hover:text-blue-700">{solution.title}</h2><p className="mt-4 leading-relaxed text-slate-600">{solution.description}</p><span className="mt-7 inline-block text-xs font-black uppercase tracking-widest text-blue-700">Open solution →</span></Link>)}
        </section>
        <section className="container mt-12 max-w-6xl rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12"><h2 className="text-3xl font-black uppercase tracking-tight">Need a different project route?</h2><p className="mt-4 max-w-2xl leading-relaxed text-slate-300">Send the site details, artwork, quantities, destination, and installation scope through the contact form for a project-specific review.</p><Link href="/contact" className="mt-7 inline-flex rounded-full bg-emerald-400 px-6 py-4 text-sm font-black text-slate-950 hover:bg-emerald-300">Open Contact Form</Link></section>
      </main>
    </>
  );
}
