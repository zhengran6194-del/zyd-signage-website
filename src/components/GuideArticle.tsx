import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import WhatsAppCta from '@/components/WhatsAppCta';

export type GuideSource = {
  name: string;
  url: string;
  note: string;
};

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  rows?: Array<{ factor: string; first: string; second: string }>;
  firstLabel?: string;
  secondLabel?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideArticleData = {
  title: string;
  category: string;
  description: string;
  updated: string;
  directAnswer: string;
  sections: GuideSection[];
  checklistTitle: string;
  checklistIntro: string;
  checklist: string[];
  faqs: GuideFaq[];
  sources: GuideSource[];
  relatedLinks: Array<{ href: string; label: string }>;
  asideTitle: string;
  asideText: string;
};

type GuideArticleProps = GuideArticleData & {
  slug: string;
};

export default function GuideArticle(guide: GuideArticleProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
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
          <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">{guide.category}</div>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">{guide.title}</h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">{guide.description}</p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-300">
            <span>Guide</span><span>•</span><span>Updated {guide.updated}</span><span>•</span><span>By Aaron, ZYD Signage</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-sm border border-slate-200">
            <p className="text-xl text-slate-800 leading-relaxed font-semibold mb-10">{guide.directAnswer}</p>

            {guide.sections.map((section) => (
              <section key={section.heading} className="mb-12">
                <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">{section.heading}</h2>
                {section.image && (
                  <figure className="my-7 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                    <Image src={section.image.src} alt={section.image.alt} width={1080} height={720} sizes="(min-width: 1024px) 720px, 100vw" className="h-auto w-full max-w-full object-cover" />
                    {section.image.caption && <figcaption className="px-5 py-3 text-sm text-slate-500">{section.image.caption}</figcaption>}
                  </figure>
                )}
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-slate-600 leading-relaxed mb-4">{paragraph}</p>
                ))}
                {section.rows && (
                  <div className="overflow-x-auto mt-6">
                    <table className="w-full text-left border-collapse min-w-[620px]">
                      <thead>
                        <tr className="border-b-2 border-slate-200">
                          <th className="py-4 pr-5 text-sm uppercase tracking-wider">Decision factor</th>
                          <th className="py-4 pr-5 text-sm uppercase tracking-wider text-blue-700">{section.firstLabel}</th>
                          <th className="py-4 text-sm uppercase tracking-wider text-slate-700">{section.secondLabel}</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-600">
                        {section.rows.map((row) => (
                          <tr key={row.factor} className="border-b border-slate-100 last:border-0">
                            <td className="py-4 pr-5 font-bold text-slate-900">{row.factor}</td>
                            <td className="py-4 pr-5">{row.first}</td>
                            <td className="py-4">{row.second}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.bullets && (
                  <ul className="space-y-3 text-slate-700 font-medium mt-5">
                    {section.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <section className="mb-12 bg-blue-50 rounded-[2rem] p-7 sm:p-9 border border-blue-100">
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-4">{guide.checklistTitle}</h2>
              <p className="text-slate-600 leading-relaxed mb-5">{guide.checklistIntro}</p>
              <ul className="space-y-3 text-slate-700 font-medium">
                {guide.checklist.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Frequently asked questions</h2>
              <div className="space-y-6">
                {guide.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-xl font-black text-blue-700 mb-2">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-4">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">Sources &amp; further reading</h2>
              <p className="text-slate-600 leading-relaxed mb-6">These public references support terminology, accessibility context, or material-selection background. They are not ZYD product claims; project compliance and final specifications must be confirmed with the design team and the authority having jurisdiction.</p>
              <ol className="space-y-5 list-decimal pl-5">
                {guide.sources.map((source) => (
                  <li key={source.url} className="pl-2 text-slate-700">
                    {source.url.startsWith('/') ? (
                      <Link href={source.url} className="font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900">{source.name}</Link>
                    ) : (
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900">{source.name}</a>
                    )}
                    <p className="text-sm text-slate-500 mt-1">{source.note}</p>
                  </li>
                ))}
              </ol>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-5 text-sm font-black uppercase tracking-widest">
              {guide.relatedLinks.map((link) => <Link key={link.href} href={link.href} className="text-blue-700 hover:text-blue-900">{link.label}</Link>)}
              <WhatsAppCta label="Get Material Advice" message={`Hi Aaron, I would like material advice for this guide topic: ${guide.title}.`} className="text-blue-700 hover:text-blue-900" />
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-5">
            <div className="bg-slate-950 text-white rounded-[2rem] p-8">
              <div className="text-blue-400 font-black uppercase tracking-[0.25em] text-xs mb-4">Buyer brief</div>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4">{guide.asideTitle}</h2>
              <p className="text-slate-300 leading-relaxed mb-6">{guide.asideText}</p>
              <Link href="/contact" className="inline-flex button-green-base px-6 py-4 rounded-full text-white font-black text-sm">DISCUSS YOUR PROJECT</Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
