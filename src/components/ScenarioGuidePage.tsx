import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import WhatsAppCta from '@/components/WhatsAppCta';

export type SolutionFaq = { question: string; answer: string };
export type SolutionLink = { label: string; href: string; description: string };

export type SolutionDefinition = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  image: { src: string; alt: string };
  directAnswer: string;
  scenarios: string[];
  signTypes: string[];
  procurementItems: string[];
  faqs: SolutionFaq[];
  products: SolutionLink[];
  caseStudies: SolutionLink[];
  briefProduct: string;
  briefItems: string[];
  whatsappMessage: string;
};

const siteUrl = 'https://www.zydsign.com';

export default function SolutionPage({ solution }: { solution: SolutionDefinition }) {
  const pageUrl = `${siteUrl}/solutions/${solution.slug}`;
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${siteUrl}/solutions` },
      { '@type': 'ListItem', position: 3, name: solution.title, item: pageUrl },
    ],
  };
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: solution.title,
    description: solution.description,
    url: pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    datePublished: '2026-09-21',
    dateModified: '2026-09-21',
    author: { '@type': 'Organization', name: 'ZYD Signage', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'Dalian Zhiyudao Signage & Tech. Co., Ltd.', url: siteUrl },
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: solution.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />
      <main id="main" className="bg-slate-100 text-slate-900">
        <section className="bg-slate-950 pt-28 pb-16 text-white sm:pt-36">
          <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Link href="/solutions" className="mb-6 inline-flex text-xs font-black uppercase tracking-[0.3em] text-blue-300 hover:text-white">Solutions</Link>
              <div className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-emerald-300">{solution.eyebrow}</div>
              <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">{solution.title}</h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-300">{solution.description}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <WhatsAppCta
                  label="Discuss This Scenario on WhatsApp"
                  message={solution.whatsappMessage}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-4 text-center text-sm font-black text-slate-950 transition-colors hover:bg-emerald-300"
                  brief={{ product: solution.briefProduct, items: solution.briefItems }}
                />
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-center text-sm font-black text-white transition-colors hover:bg-white hover:text-slate-950">Use the Contact Form</Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
              <Image src={solution.image.src} alt={solution.image.alt} width={1440} height={1080} priority sizes="(min-width: 1024px) 45vw, 100vw" className="h-[300px] w-full object-cover sm:h-[380px]" />
            </div>
          </div>
        </section>

        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-12">
              <div className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-blue-700">The short answer</div>
              <p className="max-w-5xl text-xl font-semibold leading-relaxed text-slate-800 lg:text-2xl">{solution.directAnswer}</p>
            </div>
          </div>
        </section>

        <section className="section bg-slate-50 pt-0">
          <div className="container grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="mb-6 text-2xl font-black uppercase tracking-tight">Where this solution fits</h2>
              <ul className="space-y-4 text-slate-600">
                {solution.scenarios.map((item) => <li key={item} className="flex gap-3 leading-relaxed"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />{item}</li>)}
              </ul>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="mb-6 text-2xl font-black uppercase tracking-tight">Sign types to coordinate</h2>
              <ul className="space-y-4 text-slate-600">
                {solution.signTypes.map((item) => <li key={item} className="flex gap-3 leading-relaxed"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />{item}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-blue-700">Buyer brief</div>
              <h2 className="text-3xl font-black uppercase tracking-tight">What to prepare before requesting a quote</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-slate-600">A clear brief lets the design, fabrication, delivery, and installation scope be reviewed together. Send what you have and mark unknowns for clarification.</p>
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-8 text-slate-200 shadow-xl sm:p-10">
              <ul className="grid gap-4 sm:grid-cols-2">
                {solution.procurementItems.map((item) => <li key={item} className="rounded-xl border border-white/10 p-4 leading-relaxed">{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section bg-slate-50 pt-0">
          <div className="container">
            <h2 className="mb-8 text-3xl font-black uppercase tracking-tight">Products to review</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solution.products.map((item) => <Link key={item.href} href={item.href} className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><h3 className="text-xl font-black text-blue-700">{item.label}</h3><p className="mt-3 leading-relaxed text-slate-600">{item.description}</p><span className="mt-5 inline-block text-xs font-black uppercase tracking-widest text-slate-500">Review product →</span></Link>)}
            </div>
          </div>
        </section>

        <section className="section bg-slate-100 pt-0">
          <div className="container">
            <h2 className="mb-8 text-3xl font-black uppercase tracking-tight">Related project references</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {solution.caseStudies.map((item) => <Link key={item.href} href={item.href} className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><h3 className="text-xl font-black text-blue-700">{item.label}</h3><p className="mt-3 leading-relaxed text-slate-600">{item.description}</p><span className="mt-5 inline-block text-xs font-black uppercase tracking-widest text-slate-500">Open case study →</span></Link>)}
            </div>
          </div>
        </section>

        <section className="section bg-slate-50 pt-0">
          <div className="container max-w-5xl">
            <h2 className="mb-8 text-3xl font-black uppercase tracking-tight">Frequently asked questions</h2>
            <div className="space-y-5">
              {solution.faqs.map((faq) => <article key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-xl font-black text-blue-700">{faq.question}</h3><p className="mt-3 leading-relaxed text-slate-600">{faq.answer}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section bg-slate-950 pt-0 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">Start with the project brief</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">Share the site, sign types, artwork, approximate dimensions, quantities, finish or lighting direction, and destination. We can then clarify the next design and quotation steps.</p>
            <div className="mt-8 flex justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-sm font-black text-white transition-colors hover:bg-white hover:text-slate-950">Open Contact Form</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
