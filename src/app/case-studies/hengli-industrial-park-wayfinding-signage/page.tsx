import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';

const CASE_STUDY_URL = 'https://www.zydsign.com/case-studies/hengli-industrial-park-wayfinding-signage';
const PROJECTS_URL = 'https://www.zydsign.com/projects';

const projectImage = {
  src: '/assets/images/projects/hengli-industrial-park-entrance-monument.jpg',
  width: 1627,
  height: 965,
  alt: 'Illuminated Hengli Industrial Park entrance monument beside a landscaped road at night',
};

const projectFacts: Array<{ label: string; value: string }> = [
  { label: 'Project', value: 'Hengli Industrial Park' },
  { label: 'Setting', value: 'Large industrial park' },
  { label: 'Scope', value: 'Park-wide wayfinding and signage system' },
  { label: 'Wayfinding layers', value: 'Gateway identity, road zones, buildings, production areas and functional spaces' },
  { label: 'Language', value: 'Chinese and English bilingual signage' },
  { label: 'Materials', value: 'Stainless steel signage elements with weather-resistant finishes' },
  { label: 'Services', value: 'Site survey, graded planning, factory production, installation and after-sales maintenance' },
];

const sections = [
  {
    heading: 'The challenge: one system for a large industrial park',
    paragraphs: [
      'Hengli Industrial Park brings together offices, accommodation, production workshops, roads, landscaped areas and operational facilities. A visitor, employee or vehicle needs a clear route through a site with different zones and different movement patterns.',
      'The signage therefore needs to do more than identify individual buildings. It needs to establish a visual and wayfinding order across the park, while keeping people and vehicles moving through the right areas.',
    ],
    bullets: [
      'Create a clear sequence from the park entrance to roads, buildings and internal destinations.',
      'Separate people and vehicle movement through road-zone and facility information.',
      'Keep gateway, accommodation, office, workshop and functional signs visually related.',
      'Use bilingual Chinese and English information where visitors and teams need it.',
    ],
  },
  {
    heading: 'A graded wayfinding structure from gateway to destination',
    paragraphs: [
      'The system follows a graded sequence: the entrance establishes the park identity, road signs divide the movement network, building numbers and door signs identify destinations, workshop markers define production zones, and functional signs support everyday operations.',
      'This hierarchy gives each sign a clear role. A large gateway element is read from the approach, while a building number, workshop zone marker or functional sign is read at a closer decision point.',
    ],
  },
  {
    heading: 'Gateway identity and landscape signage',
    paragraphs: [
      'The entrance landscape monument is the first identity point in the system. Large illuminated lettering and a curved image wall give the gateway a recognisable form while working as part of the surrounding landscape.',
      'The entrance treatment combines brand presentation with arrival orientation. It establishes the visual language that continues into the road, building and production-area signs across Hengli Industrial Park.',
    ],
    images: [projectImage],
  },
  {
    heading: 'Road zones, buildings and production areas',
    paragraphs: [
      'Road-zone signs organize movement between the park areas and help distinguish routes for people and vehicles. Building numbers and door signs then provide the closer-grain information needed for accommodation and office destinations.',
      'Production workshops use separate zone markers suited to the scale and conditions of an industrial site. The signs identify workshop areas and support the park-wide logic without relying on one sign to carry every piece of information.',
    ],
  },
  {
    heading: 'Functional signage with bilingual information',
    paragraphs: [
      'Functional signs cover the everyday points that need quick recognition, including fire-safety locations, equipment spaces and rest areas. Clear symbols and bilingual Chinese and English wording help the signs work for different users across the park.',
      'The functional-sign matrix keeps categories consistent. A fire-safety marker, equipment sign, rest-area sign or building identifier can be recognized as part of the same system while retaining its own operational purpose.',
    ],
  },
  {
    heading: 'Materials and fabrication for an industrial setting',
    paragraphs: [
      'Stainless steel forms the base for the signage elements, with the fabrication route using laser cutting and CNC bending to create clean, repeatable forms. Screen printing supports the information graphics, while weather-resistant coatings protect the exterior finish.',
      'For illuminated elements, waterproof and dust-resistant LED modules are used within the sign construction. The material and process choices are matched to the different conditions of gateways, roads, buildings, workshops and functional spaces.',
    ],
    bullets: [
      'Stainless steel base materials for signage elements and related metalwork.',
      'Laser cutting and CNC bending for controlled shapes and lettering.',
      'Screen printing for clear information graphics.',
      'Weather-resistant coatings for exterior applications.',
      'Waterproof and dust-resistant LED modules for illuminated signs.',
    ],
  },
  {
    heading: 'Survey, production and site delivery',
    paragraphs: [
      'The delivery route starts with a full-site survey and graded wayfinding planning. The information structure is then translated into factory production, followed by coordinated installation across the park areas.',
      'After installation, the service scope includes after-sales maintenance. This keeps the system supported beyond the initial production and site installation stages.',
    ],
  },
];

const faqs = [
  {
    question: 'What does the Hengli Industrial Park signage system cover?',
    answer: 'It covers the park gateway, road zones, people and vehicle movement, accommodation and office building numbers, door signs, production workshop areas, and functional signs for fire-safety, equipment and rest spaces.',
  },
  {
    question: 'Is the signage bilingual?',
    answer: 'The system uses Chinese and English bilingual information where the park wayfinding and functional signs need to communicate with different users.',
  },
  {
    question: 'What materials and processes are used?',
    answer: 'The signage uses stainless steel elements with laser cutting, CNC bending, screen printing and weather-resistant coatings. Illuminated signs use waterproof and dust-resistant LED modules within the sign construction.',
  },
  {
    question: 'How is a large industrial park signage project delivered?',
    answer: 'The service begins with a full-site survey and graded planning, continues through factory production and site installation, and includes after-sales maintenance.',
  },
];

const relatedLinks = [
  { href: '/products/architectural-wayfinding-system', label: 'Architectural Wayfinding Systems' },
  { href: '/products/complete-signage-system', label: 'Complete Signage Systems' },
  { href: '/projects', label: 'All Case Studies' },
  { href: '/contact', label: 'Start a Project Brief' },
];

export default function HengliIndustrialParkCaseStudy() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.zydsign.com' },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: PROJECTS_URL },
      { '@type': 'ListItem', position: 3, name: 'Hengli Industrial Park', item: CASE_STUDY_URL },
    ],
  };
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hengli Industrial Park Wayfinding Signage',
    description: 'A coordinated wayfinding and signage system for Hengli Industrial Park connecting the gateway, roads, buildings, production zones and functional spaces.',
    url: CASE_STUDY_URL,
    mainEntityOfPage: CASE_STUDY_URL,
    image: [`https://www.zydsign.com${projectImage.src}`],
    articleSection: 'Case Studies',
    about: {
      '@type': 'Thing',
      name: 'Hengli Industrial Park wayfinding and signage system',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dalian Zhiyudao Signage & Tech. Co., Ltd.',
      url: 'https://www.zydsign.com',
    },
    articleBody: [
      'Project facts: ' + projectFacts.map((fact) => `${fact.label}: ${fact.value}`).join('; '),
      ...sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])]),
    ].join(' '),
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <main id="main" className="bg-slate-100 min-h-screen pt-32 pb-40">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />
      <article className="w-full max-w-6xl px-4 sm:px-6 lg:px-10 mx-auto">
        <header className="bg-slate-950 text-white rounded-[3rem] px-6 py-12 sm:px-12 lg:px-16 lg:py-16 mb-10">
          <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">
            Case Study &bull; Industrial Park Wayfinding
          </div>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
            Hengli Industrial Park Wayfinding Signage
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            A large industrial park needed one wayfinding and signage system for its gateway, roads,
            buildings, production zones and functional spaces. ZYD Signage planned the hierarchy,
            produced the signage and coordinated site installation and after-sales maintenance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-300">
            <span>Large Industrial Park</span>
            <span>&bull;</span>
            <span>Bilingual Wayfinding</span>
            <span>&bull;</span>
            <span>Stainless Steel Signage</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-sm border border-slate-200">
            <figure className="mb-10">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 aspect-[16/9]">
                <Image
                  src={projectImage.src}
                  alt={projectImage.alt}
                  width={projectImage.width}
                  height={projectImage.height}
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover w-full h-auto"
                />
              </div>
              <figcaption className="text-sm text-slate-600 mt-3">
                Illuminated entrance monument signage for Hengli Industrial Park.
              </figcaption>
            </figure>

            <p className="text-xl text-slate-800 leading-relaxed font-semibold mb-10">
              Hengli Industrial Park uses a graded wayfinding system to connect the entrance identity,
              road zones, building numbers, production workshop areas and everyday functional signs.
              Stainless steel construction, bilingual information and coordinated planning support a
              clear visual language across the industrial setting.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">
                Project facts
              </h2>
              <dl className="divide-y divide-slate-200 border-y border-slate-200">
                {projectFacts.map((fact) => (
                  <div key={fact.label} className="grid sm:grid-cols-[180px_minmax(0,1fr)] gap-1 sm:gap-6 py-4">
                    <dt className="text-xs font-black uppercase tracking-[0.2em] text-slate-600">{fact.label}</dt>
                    <dd className="text-slate-700 font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {sections.map((section) => (
              <section key={section.heading} className="mb-12">
                <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-slate-600 leading-relaxed mb-4">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-5 space-y-2 mt-4 mb-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="text-slate-600 leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.images && (
                  <div className="mt-8 mx-auto max-w-xl">
                    {section.images.map((image) => (
                      <figure key={image.src}>
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 aspect-[16/9]">
                          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 640px) 40vw, 100vw" className="object-cover w-full h-auto" />
                        </div>
                        <figcaption className="text-sm text-slate-600 mt-3">{image.alt}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </section>
            ))}

            <section className="mb-4">
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

            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-5 text-sm font-black uppercase tracking-widest">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-blue-700 hover:text-blue-900">{link.label}</Link>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-5">
            <div className="bg-slate-950 text-white rounded-[2rem] p-8">
              <div className="text-blue-400 font-black uppercase tracking-[0.25em] text-xs mb-4">Buyer brief</div>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Planning an industrial park wayfinding package?</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Send the site plan, destination list, languages and sign types involved. ZYD Signage can review the brief and map a coordinated production route.
              </p>
              <Link href="/contact" className="inline-flex button-green-base px-6 py-4 rounded-full text-white font-black text-sm">DISCUSS YOUR PROJECT</Link>
            </div>
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200">
              <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-600 mb-4">Delivered by</div>
              <p className="text-slate-700 leading-relaxed mb-2 font-semibold">ZYD Signage &mdash; Dalian Zhiyudao Signage &amp; Tech. Co., Ltd.</p>
              <p className="text-slate-600 leading-relaxed text-sm">Factory-direct wayfinding, architectural signage and illuminated branding for industrial, commercial and institutional projects.</p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
