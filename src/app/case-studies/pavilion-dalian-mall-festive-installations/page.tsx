import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import WhatsAppCta from '@/components/WhatsAppCta';

type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  ratio: string;
};

type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  images?: ProjectImage[];
};

const IMAGES = {
  heroCandy: {
    src: '/assets/images/projects/pavilion-dalian-christmas-candy-installation.webp',
    width: 1080,
    height: 720,
    alt: 'Shopping centre atrium at Christmas with a candy-themed installation of illuminated lollipops, doughnuts and an ice cream cone suspended around a fir tree',
    ratio: 'aspect-[3/2]',
  },
  atriumOverview: {
    src: '/assets/images/projects/pavilion-dalian-atrium-christmas-overview.webp',
    width: 1074,
    height: 1152,
    alt: 'Multi-level shopping centre atrium seen from above with a Christmas tree, carousel and suspended sweet-themed decorations',
    ratio: 'aspect-[15/16]',
  },
  carousel: {
    src: '/assets/images/projects/pavilion-dalian-carousel-wheel-installation.webp',
    width: 1080,
    height: 605,
    alt: 'Close view of a large illuminated carousel wheel installation with pink, purple and green steel rings on a shopping centre atrium floor',
    ratio: 'aspect-[16/9]',
  },
  activation: {
    src: '/assets/images/projects/pavilion-dalian-atrium-visitor-activation.webp',
    width: 1080,
    height: 600,
    alt: 'Shoppers gathered on the ground floor of a shopping centre atrium around illuminated Christmas installations and a light-up reindeer',
    ratio: 'aspect-[16/9]',
  },
  newYearBull: {
    src: '/assets/images/projects/pavilion-dalian-lunar-new-year-bull-lanterns.webp',
    width: 1080,
    height: 713,
    alt: 'Lunar New Year installation in a shopping centre atrium with a gilded bull sculpture on a red podium, red lanterns and illuminated fan shapes',
    ratio: 'aspect-[3/2]',
  },
  newYearOverview: {
    src: '/assets/images/projects/pavilion-dalian-new-year-atrium-overview.webp',
    width: 1080,
    height: 1495,
    alt: 'View down through four levels of a shopping centre atrium filled with red Lunar New Year lanterns, hanging banners and a gilded bull centrepiece',
    ratio: 'aspect-[3/4]',
  },
  hangingLanterns: {
    src: '/assets/images/projects/pavilion-dalian-new-year-hanging-lanterns.webp',
    width: 1080,
    height: 615,
    alt: 'Aerial view of suspended red Lunar New Year lanterns and themed hanging decorations distributed across a shopping centre atrium',
    ratio: 'aspect-[16/9]',
  },
  suspendedColumns: {
    src: '/assets/images/projects/pavilion-dalian-suspended-lantern-columns.webp',
    width: 1080,
    height: 1394,
    alt: 'Tall suspended red lattice lantern columns hanging from the roof structure above the shopfronts of a shopping centre atrium',
    ratio: 'aspect-[3/4]',
  },
  stage: {
    src: '/assets/images/projects/pavilion-dalian-christmas-stage-performance.webp',
    width: 1080,
    height: 605,
    alt: 'Children performing on a staging area inside a shopping centre atrium beneath a large illuminated Christmas tree, watched by a crowd',
    ratio: 'aspect-[16/9]',
  },
  multiLevel: {
    src: '/assets/images/projects/pavilion-dalian-atrium-multi-level-overview.webp',
    width: 1080,
    height: 1495,
    alt: 'View down through the galleried atrium of a shopping centre showing a suspended carousel wheel, Christmas tree and hanging tenant banners across six levels',
    ratio: 'aspect-[3/4]',
  },
} satisfies Record<string, ProjectImage>;

const projectFacts: Array<{ label: string; value: string }> = [
  { label: 'Project', value: 'Pavilion Dalian festive installation programme' },
  { label: 'Location', value: 'Dalian, Liaoning, China' },
  { label: 'Sector', value: 'Shopping centre / retail' },
  { label: 'Scope', value: 'Seasonal atrium installations for Christmas and Lunar New Year' },
  { label: 'Site type', value: 'Multi-level mall with a high voided atrium and galleried walkways' },
  { label: 'Materials', value: 'Coated sheet metal, steel framing, acrylic and integrated LED modules' },
  { label: 'Services', value: 'Theme concept, 3D development, fabrication, lighting, night installation and removal' },
];

const sections: Section[] = [
  {
    heading: 'Project background: why a mall atrium needs a seasonal installation programme',
    paragraphs: [
      'Pavilion Dalian is a shopping centre in Dalian, China, with retail and leisure floors arranged around a tall voided atrium. The atrium is the point where visitors on several gallery levels see the same space at once, which makes it the most valuable seasonal display area in the building and the hardest one to install into.',
      'The brief covered the centre\'s major festive periods rather than a single event: a Christmas presentation and a Lunar New Year presentation, each built as a set of installations distributed through the atrium instead of one object on the floor.',
      'For a shopping centre, the work is judged on three things at the same time: whether the installation reads as one identity across levels, whether it is safe to suspend above a trading floor, and whether it can be built and removed without disrupting tenants.'
    ],
    images: [IMAGES.atriumOverview],
  },
  {
    heading: 'What the brief had to solve',
    paragraphs: [
      'Four issues shaped the programme. Each one was addressed at design and fabrication stage rather than on site.'
    ],
    bullets: [
      'Fragmented festive identity: installations supplied separately for each period can look and light differently. The response was a single visual specification for the year, with the centre\'s own identity carried into the installation graphics so consecutive campaigns read as one series.',
      'Suspended load above a public floor: large hanging elements over a voided atrium need a structure designed for them. Purpose-built load-bearing frames were fabricated for the suspended elements, with structural verification of the hanging assemblies and protected low-voltage LED wiring, and the works were coordinated with the property and fire-safety acceptance process.',
      'Tight festive calendar and trading hours: the festive window is fixed and the atrium cannot be closed for long. Components were prefabricated as modules in the factory so site work became assembly, and installation was scheduled at night outside trading hours.',
      'Dual exposure and daily contact: outdoor elements face weather while atrium pieces are touched by visitors every day. Outdoor elements were built in weather-resistant coated metal, indoor sculptural elements used thickened acrylic and sheet metal, and lighting was supplied as integrated modules.',
    ],
  },
  {
    heading: 'Christmas presentation: a distributed atrium installation',
    paragraphs: [
      'The Christmas scheme centred on a large illuminated tree and then spread outward, so visitors on upper gallery levels still had something to look at. Sweet-themed hanging pieces &mdash; lollipops, doughnuts, candy canes and an ice cream cone &mdash; were suspended at staggered heights around the tree, with illuminated rides and figures on the atrium floor.',
      'Laying the scheme out in layers was a deliberate choice. A single centrepiece reads well only from the ground floor, whereas distributing elements vertically gives every gallery level a usable view and spreads visitor movement through the space.',
      'The same installation supported the centre\'s own seasonal programme: the staging area in the atrium was used for performances and events, so the display had to leave circulation space and support event use rather than occupy the floor.'
    ],
    images: [IMAGES.carousel, IMAGES.activation],
  },
  {
    heading: 'Lunar New Year presentation: traditional forms in a modern atrium',
    paragraphs: [
      'The New Year scheme worked in red and gold. A gilded bull sculpture stood on a podium as the floor-level anchor, surrounded by illuminated fan shapes, while red lanterns were distributed through the void above so the colour reads from every gallery.',
      'Rather than reproducing traditional objects at domestic scale, the elements were scaled to the building. Lanterns were sized and spaced to register from three or four levels away, and the podium was designed as a complete floor object with integrated lighting rather than a sculpture placed on a plinth.',
      'The two programmes share a layout logic even though the palettes differ. That consistency is what allows the centre to run consecutive campaigns in the same space without rebuilding the visual identity each time.'
    ],
    images: [IMAGES.newYearBull, IMAGES.newYearOverview],
  },
  {
    heading: 'Suspended decoration system for a high voided atrium',
    paragraphs: [
      'The suspended layer is the part of the programme that distinguishes a high-atrium installation from ordinary shop-floor dressing. Decorations were custom fabricated as star, fan and festive lantern-box forms and hung in multiple tiers below the roof structure.',
      'Suspension points, drop lengths and clearances were planned as a system so the elements sit at consistent heights relative to each gallery, filling the vertical volume that would otherwise read as empty space. Tall suspended lattice lantern columns were used in the New Year scheme to carry the eye upward between shopfronts.',
      'Because access to these elements after installation is limited, the hanging hardware and wiring for each unit were completed and checked at the factory before the unit was lifted into place.'
    ],
    images: [IMAGES.hangingLanterns, IMAGES.suspendedColumns],
  },
  {
    heading: 'Structure, materials and lighting approach',
    paragraphs: [
      'The installations are built objects, not props. Structural framing was fabricated specifically for the loads and fixing points of each element, and outdoor pieces used weather-resistant coated metal so the same scheme can run through a full winter season.',
      'Lighting is integrated into the structures rather than added afterwards, with wiring routed and protected as part of the assembly and low-voltage LED used throughout the suspended elements. Materials were chosen by location: outdoor elements for exposure, indoor sculptural work in thickened acrylic and sheet metal where visitors can touch them.',
      'Fabrication was split between the factory and the site on purpose. Structures, sculptural forms and lighting assemblies were produced and pre-assembled off site so the on-site phase was reduced to positioning, connection and finishing.'
    ],
    images: [IMAGES.stage, IMAGES.multiLevel],
  },
  {
    heading: 'How the delivery chain ran',
    paragraphs: [
      'The programme followed one sequence from concept to clearance, which is what allows a centre to keep its atrium continuously in use:'
    ],
    bullets: [
      'Theme concept and creative direction for the festive period.',
      '3D visual development to agree scale, layout and appearance with the centre before production.',
      'Sheet metal and acrylic production of the sculptural and structural elements.',
      'Custom lighting integration and factory pre-assembly of suspended units.',
      'Night-time installation and assembly inside the trading centre.',
      'Removal and site clearance at the end of the festive period.',
    ],
  },
];

const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'What does a shopping centre festive installation programme include?',
    answer: 'A programme of this type normally covers creative concept and 3D development, structural fabrication for floor and suspended elements, custom lighting integration, off-site pre-assembly, night-time installation inside the trading centre, and removal and clearance when the festive period ends.',
  },
  {
    question: 'How are decorations suspended safely above a shopping centre atrium?',
    answer: 'Suspended elements need their own load-bearing framing rather than being hung from whatever is available. On this project the hanging assemblies were fabricated for the loads and fixing points involved, structurally verified, and fitted with protected low-voltage LED wiring, with the works coordinated through the property and fire-safety acceptance process.',
  },
  {
    question: 'How is installation arranged so shops can keep trading?',
    answer: 'By moving as much of the build as possible into the factory. Components are produced and pre-assembled as modules off site, so the on-site phase is assembly and positioning rather than fabrication, and that work can be scheduled at night outside trading hours.',
  },
  {
    question: 'Which materials suit outdoor and indoor festive installations?',
    answer: 'Exposure drives the choice. Outdoor elements here used weather-resistant coated metal, while indoor sculptural work used thickened acrylic and sheet metal because it is handled and touched daily. Lighting was supplied as integrated modules rather than added as a separate operation.',
  },
];

const relatedLinks = [
  { href: '/solutions/mall-wayfinding-signage', label: 'Mall signage solution' },
  { href: '/products/complete-signage-system', label: 'Complete signage system' },
  { href: '/guides/custom-signage-manufacturing-process', label: 'How custom signage is made' },
  { href: '/case-studies/dalian-water-plaza-wayfinding-signage', label: 'Water Fashion Plaza wayfinding' },
  { href: '/case-studies/hengli-industrial-park-wayfinding-signage', label: 'Hengli Industrial Park wayfinding' },
  { href: '/projects', label: 'All projects' },
];

export default function PavilionDalianFestiveInstallationsCaseStudy() {
  const caseStudyUrl = 'https://www.zydsign.com/case-studies/pavilion-dalian-mall-festive-installations';

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.zydsign.com' },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.zydsign.com/projects' },
      { '@type': 'ListItem', position: 3, name: 'Pavilion Dalian | Festive Installations Driving Footfall', item: caseStudyUrl },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pavilion Dalian | Festive Installations Driving Footfall',
    description: 'A multi-level shopping centre in Dalian, China, ran Christmas and Lunar New Year atrium installation programmes with custom steel structures, integrated lighting and night-time installation. ZYD Signage designed, manufactured and installed them.',
    url: caseStudyUrl,
    mainEntityOfPage: caseStudyUrl,
    image: Object.values(IMAGES).map((image) => `https://www.zydsign.com${image.src}`),
    articleSection: 'Case Studies',
    about: {
      '@type': 'Thing',
      name: 'Shopping centre atrium festive installation programme',
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

  return (
    <main id="main" className="bg-slate-100 min-h-screen pt-32 pb-40">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <article className="w-full max-w-6xl px-4 sm:px-6 lg:px-10 mx-auto">
        <header className="bg-slate-950 text-white rounded-[3rem] px-6 py-12 sm:px-12 lg:px-16 lg:py-16 mb-10">
          <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">
            Case Study &bull; Retail Festive Installations
          </div>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
            Pavilion Dalian | Festive Installations Driving Footfall
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            A multi-level shopping centre in Dalian, China, needed Christmas and Lunar New Year
            atrium installations that read as one identity across every gallery level, could be
            suspended safely above a trading floor, and could be installed at night without
            disrupting tenants. ZYD Signage designed, manufactured and installed them.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-300">
            <span>Retail / Shopping Centre</span>
            <span>&bull;</span>
            <span>Dalian, China</span>
            <span>&bull;</span>
            <span>Seasonal Atrium Installations</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-sm border border-slate-200">
            <figure className="mb-10">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 aspect-[3/2]">
                <Image
                  src={IMAGES.heroCandy.src}
                  alt={IMAGES.heroCandy.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-slate-600 mt-3">
                Sweet-themed pieces suspended at staggered heights around the illuminated tree in the atrium.
              </figcaption>
            </figure>

            <p className="text-xl text-slate-800 leading-relaxed font-semibold mb-10">
              ZYD Signage delivered the festive installation programme for Pavilion Dalian, a
              shopping centre in Dalian, China. The work covered a Christmas presentation and a
              Lunar New Year presentation, each built as a set of floor and suspended installations
              distributed through a tall voided atrium, from theme concept and 3D development
              through steel and acrylic fabrication, lighting integration, night-time installation
              and post-season clearance.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">
                Project facts
              </h2>
              <dl className="divide-y divide-slate-200 border-y border-slate-200">
                {projectFacts.map((fact) => (
                  <div key={fact.label} className="grid sm:grid-cols-[180px_minmax(0,1fr)] gap-1 sm:gap-6 py-4">
                    <dt className="text-xs font-black uppercase tracking-[0.2em] text-slate-600">
                      {fact.label}
                    </dt>
                    <dd className="text-slate-700 font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {sections.map((section) => (
              <section key={section.heading} className="mb-12">
                <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-slate-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-5 space-y-2 mt-4 mb-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="text-slate-600 leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {section.images && (
                  <div
                    className={
                      section.images.length > 1
                        ? 'grid gap-5 sm:grid-cols-2 mt-8'
                        : 'mt-8 mx-auto max-w-xl'
                    }
                  >
                    {section.images.map((image) => (
                      <figure key={image.src}>
                        <div
                          className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 ${image.ratio}`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(min-width: 640px) 40vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <figcaption className="text-sm text-slate-600 mt-3">{image.alt}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </section>
            ))}

            <section className="mb-4">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-5">
                Frequently asked questions
              </h2>
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
                <Link key={link.href} href={link.href} className="text-blue-700 hover:text-blue-900">
                  {link.label}
                </Link>
              ))}
              <WhatsAppCta label="Request a 3D Concept" message="Hi Aaron, I would like to request a 3D concept based on the Pavilion Dalian festive installation case study." className="text-blue-700 hover:text-blue-900" />
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-5">
            <div className="bg-slate-950 text-white rounded-[2rem] p-8">
              <div className="text-blue-400 font-black uppercase tracking-[0.25em] text-xs mb-4">
                Buyer brief
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4">
                Planning a festive installation programme?
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Send the atrium dimensions, the levels to be covered, the festive periods and the
                delivery window. ZYD Signage reviews the brief and comes back with a fabrication
                route and a quotation for the programme.
              </p>
              <Link
                href="/contact"
                className="inline-flex button-green-base px-6 py-4 rounded-full text-white font-black text-sm"
              >
                DISCUSS YOUR PROJECT
              </Link>
            </div>
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200">
              <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-600 mb-4">
                Delivered by
              </div>
              <p className="text-slate-700 leading-relaxed mb-2 font-semibold">
                ZYD Signage &mdash; Dalian Zhiyudao Signage &amp; Tech. Co., Ltd.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Factory-direct signage manufacture in Dalian, China, established 2006. Wayfinding,
                architectural signage, illuminated branding and large-scale installations for
                commercial, hospitality, healthcare and industrial projects, with DDP shipping for
                export.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
