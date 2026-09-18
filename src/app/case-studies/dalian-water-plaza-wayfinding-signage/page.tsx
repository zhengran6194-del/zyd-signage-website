import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';

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
  facadeLetters: {
    src: '/assets/images/projects/dalian-water-plaza-facade-letters.jpg',
    width: 1080,
    height: 810,
    alt: 'Illuminated green channel letters spelling the Water Fashion Plaza name on the building facade at night',
    ratio: 'aspect-[4/3]',
  },
  exteriorNight: {
    src: '/assets/images/projects/dalian-water-plaza-mall-exterior-night.jpg',
    width: 1080,
    height: 810,
    alt: 'Night view of the Water Fashion Plaza corner in Dalian with the illuminated building sign and lit storefronts',
    ratio: 'aspect-[4/3]',
  },
  pylon: {
    src: '/assets/images/projects/dalian-water-plaza-pylon-sign.jpg',
    width: 1080,
    height: 1440,
    alt: 'Freestanding pylon sign at Water Fashion Plaza with the plaza logo, illuminated tenant panels and wayfinding graphics',
    ratio: 'aspect-[3/4]',
  },
  brandWall: {
    src: '/assets/images/projects/dalian-water-plaza-tenant-brand-wall.jpg',
    width: 1080,
    height: 810,
    alt: 'Illuminated tenant brand wall on the Water Fashion Plaza building facade at night',
    ratio: 'aspect-[4/3]',
  },
  garage: {
    src: '/assets/images/projects/dalian-water-plaza-garage-entrance-signage.jpg',
    width: 1080,
    height: 810,
    alt: 'Garage entrance signage at Water Fashion Plaza combining the exit sign, plaza logo, height limit, speed limit and no-horn markings',
    ratio: 'aspect-[4/3]',
  },
  overhead: {
    src: '/assets/images/projects/dalian-water-plaza-overhead-wayfinding.jpg',
    width: 1080,
    height: 810,
    alt: 'Suspended interior directional sign with green arrows guiding visitors to the second floor facilities',
    ratio: 'aspect-[4/3]',
  },
  directory: {
    src: '/assets/images/projects/dalian-water-plaza-floor-directory.jpg',
    width: 1080,
    height: 810,
    alt: 'Free-standing floor directory totems with white grounds and green accents in the Water Fashion Plaza concourse',
    ratio: 'aspect-[4/3]',
  },
  restroom: {
    src: '/assets/images/projects/dalian-water-plaza-restroom-signage.jpg',
    width: 1080,
    height: 810,
    alt: 'Restroom identification with cut-out figures and a green directional arrow beside a lift lobby',
    ratio: 'aspect-[4/3]',
  },
  informationDesk: {
    src: '/assets/images/projects/dalian-water-plaza-information-desk.jpg',
    width: 1080,
    height: 1440,
    alt: 'Information desk at Water Fashion Plaza with illuminated logo signage above the counter',
    ratio: 'aspect-[3/4]',
  },
  recycling: {
    src: '/assets/images/projects/dalian-water-plaza-recycling-station.jpg',
    width: 1080,
    height: 1440,
    alt: 'Segregated recycling station units with green recycling symbols in a Water Fashion Plaza walkway',
    ratio: 'aspect-[3/4]',
  },
} satisfies Record<string, ProjectImage>;

const projectFacts: Array<{ label: string; value: string }> = [
  { label: 'Project', value: 'Water Fashion Plaza' },
  { label: 'Location', value: 'Dalian, Liaoning, China' },
  { label: 'Sector', value: 'Commercial complex and shopping centre' },
  { label: 'Scope', value: 'Wayfinding and architectural signage system' },
  { label: 'Materials', value: 'Stainless steel and acrylic' },
  {
    label: 'Processes',
    value: 'Laser cutting, seamless welding, powder coating, illuminated fabrication',
  },
  {
    label: 'Services',
    value: 'Design development, production, on-site installation and commissioning',
  },
];

const sections: Section[] = [
  {
    heading: 'Project background and the challenge',
    paragraphs: [
      'Water Fashion Plaza is a commercial complex in Dalian, China. A shopping centre of this scale has to answer several wayfinding questions in sequence: how visitors recognise the building from the road, how they read the tenant mix before they commit to parking, how they move through the garage, how they orient themselves once inside, and how they find everyday facilities such as restrooms, lifts and the information desk.',
      'The signs also carry the identity of the complex itself. If the outdoor letters, the parking entrance, the floor directories and the room signs are designed independently, a visitor meets a different visual language at every step. The brief here was to hold one identity across the whole journey, indoors and out.',
    ],
    bullets: [
      'One identification and wayfinding package for the approach, the garage, the concourse and the upper floors.',
      'The plaza brand green carried through every touchpoint rather than used as an outdoor accent only.',
      'A tenant display that tells visitors what is inside the complex before they enter.',
      'Facility signs that stay legible at a glance and match the rest of the system.',
    ],
    images: [IMAGES.exteriorNight],
  },
  {
    heading: 'The design language',
    paragraphs: [
      'The plaza brand green is the constant across the package. It appears on the outdoor illuminated letters, on the directional and directory graphics inside, on the facility signs and on the site furniture, so a visitor reads the same colour whether they are on the road outside or standing in a corridor upstairs.',
      'Indoors the green works against white grounds rather than filling the whole face. The directory and directional signs use a light background with green accents, which keeps the tenant lists and the room names readable at a distance while still tying the sign back to the brand.',
    ],
  },
  {
    heading: 'Outdoor main identity and the pylon sign',
    paragraphs: [
      'The primary identity element is the set of large illuminated letters mounted on the building facade, run in the plaza brand green so the complex reads as one object from a distance.',
      'A custom pylon sign stands separately at the site. It is not only a name board: the same structure carries the plaza logo, an illuminated display of the resident brands and the wayfinding graphics, so it works as an identity marker and as a directory at the same time.',
      'The facade also carries a large illuminated tenant brand wall, which turns the building elevation itself into part of the signage package rather than leaving it as plain cladding.',
    ],
    images: [IMAGES.pylon, IMAGES.brandWall],
  },
  {
    heading: 'Garage entrance signage',
    paragraphs: [
      'The garage entrance is treated as a single assembly instead of a row of unrelated panels. Entrance identification, the plaza logo and the regulatory markings a driver has to read at that exact moment are brought onto one unit: the height restriction, the speed limit and the no-horn requirement.',
      'Reading them together matters because a driver meets all of these while moving. Separating the entrance name from the clearance marking would split one decision across two places the driver passes at speed.',
    ],
    images: [IMAGES.garage],
  },
  {
    heading: 'Interior wayfinding and directories',
    paragraphs: [
      'Inside, suspended directional signs sit at the decision points where a visitor has to choose a direction. They use green arrows on light faces so the direction reads before the text does.',
      'Free-standing floor directory totems carry the tenant lists for each level. They use white grounds with brand green accents, and they include a panel for current activity notices, so the directory can be updated with what is happening in the complex instead of only naming the tenants.',
    ],
    images: [IMAGES.overhead, IMAGES.directory],
  },
  {
    heading: 'Functional space signage',
    paragraphs: [
      'Restrooms, lifts and the customer service desk use the same visual language as the wayfinding signs rather than a separate set of utility labels. The restroom identification is built as a cut-out profile mounted on a light wall, with a green directional arrow, so the family of symbols reads consistently beside the lift lobby.',
      'The information desk carries the plaza identity into the interior fit-out. The counter is kept plain and the illuminated logo sign above it does the identifying, which keeps the desk legible without turning it into a billboard.',
    ],
    images: [IMAGES.restroom, IMAGES.informationDesk],
  },
  {
    heading: 'Brand extension and site furniture',
    paragraphs: [
      'The identity extends past the signs themselves. Illuminated logo work on the building and above the information desk, plus site furniture such as the segregated recycling stations, carry the same light finish and green iconography as the wayfinding package.',
      'Treating furniture as part of the system is what stops a scheme from fragmenting: a visitor who has read green on the pylon, on a directional sign and on a room sign sees the same treatment again on the units in the walkway.',
    ],
    images: [IMAGES.recycling],
  },
  {
    heading: 'Production, installation and quality control',
    paragraphs: [
      'The fabricated elements are built from stainless steel and acrylic. The production route covers laser cutting, seamless welding, powder coating and illuminated fabrication, which is what allows the outdoor letters, the pylon and the illuminated panels to be built to the same finish standard as the interior signs.',
      'The service scope runs end to end rather than stopping at handover of the goods: design development, production, on-site installation and commissioning, followed by periodic maintenance. Work of this kind is manufactured at ZYD Signage in Dalian, a factory-direct operation established in 2006, and shipped to project sites.',
    ],
  },
];

const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'What did ZYD Signage supply for Water Fashion Plaza?',
    answer:
      'The full wayfinding and signage package for the complex: the outdoor illuminated building letters, a custom pylon sign carrying the plaza logo and the resident brand display, the garage entrance signage, interior suspended directional signs and floor directory totems, functional space signage for restrooms, lifts and the information desk, and brand extension elements including the illuminated logo work.',
  },
  {
    question: 'What materials and processes were used?',
    answer:
      'The system was produced in stainless steel and acrylic. The fabrication route covers laser cutting, seamless welding, powder coating and illuminated fabrication, which is what allows the outdoor elements and the interior signs to share the same finish.',
  },
  {
    question: 'Why does the pylon sign carry both branding and wayfinding?',
    answer:
      'The pylon stands where a visitor is deciding whether to turn in. Combining the plaza logo, an illuminated display of the resident brands and wayfinding graphics on one structure answers the identity question and the orientation question at the same point, rather than making the visitor read two separate signs.',
  },
  {
    question: 'Why is the garage entrance signage designed as one assembly?',
    answer:
      'A driver meets the entrance name, the plaza logo, the height restriction, the speed limit and the no-horn requirement while moving. Bringing them onto a single unit keeps one decision in one place instead of splitting it across panels the driver passes at speed.',
  },
  {
    question: 'Can ZYD deliver a comparable wayfinding package for another mall?',
    answer:
      'Yes. ZYD Signage is a factory-direct signage manufacturer established in 2006, working from a production base in Dalian, China, on wayfinding, architectural signage and illuminated branding for commercial, hospitality, healthcare and industrial projects. The scope covers design development, production, installation and commissioning, with DDP shipping for export projects.',
  },
];

const relatedLinks: Array<{ href: string; label: string }> = [
  { href: '/products/architectural-wayfinding-system', label: 'Architectural Wayfinding Systems' },
  { href: '/products/complete-signage-system', label: 'Complete Signage Systems' },
  { href: '/projects', label: 'All Case Studies' },
  { href: '/contact', label: 'Start a Project Brief' },
];

export default function WaterFashionPlazaCaseStudy() {
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
      <JsonLd data={faqJsonLd} />
      <article className="w-full max-w-6xl px-4 sm:px-6 lg:px-10 mx-auto">
        <header className="bg-slate-950 text-white rounded-[3rem] px-6 py-12 sm:px-12 lg:px-16 lg:py-16 mb-10">
          <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">
            Case Study &bull; Commercial Wayfinding
          </div>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
            Water Fashion Plaza: Wayfinding and Signage in Dalian
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            A commercial complex in Dalian, China, needed one identification and wayfinding
            package that would hold together from the road outside to the third-floor corridor.
            ZYD Signage designed, manufactured and installed it.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-300">
            <span>Commercial Complex</span>
            <span>&bull;</span>
            <span>Dalian, China</span>
            <span>&bull;</span>
            <span>Wayfinding &amp; Signage</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-sm border border-slate-200">
            <figure className="mb-10">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 aspect-[4/3]">
                <Image
                  src={IMAGES.facadeLetters.src}
                  alt={IMAGES.facadeLetters.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-slate-600 mt-3">
                Illuminated channel letters carrying the plaza name on the building facade.
              </figcaption>
            </figure>

            <p className="text-xl text-slate-800 leading-relaxed font-semibold mb-10">
              ZYD Signage delivered the complete wayfinding and signage system for Water Fashion
              Plaza, a commercial complex in Dalian, China. The package covers the outdoor
              illuminated building letters, a custom pylon sign that doubles as a tenant display,
              the garage entrance signage, interior directional signs and floor directories,
              functional space signage, and brand extension elements &mdash; all held together by
              the plaza brand green.
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
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-5">
            <div className="bg-slate-950 text-white rounded-[2rem] p-8">
              <div className="text-blue-400 font-black uppercase tracking-[0.25em] text-xs mb-4">
                Buyer brief
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4">
                Planning a mall wayfinding package?
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Send the site plans, the sign types you need and the floors involved. ZYD Signage
                reviews the brief and comes back with a fabrication route and a quotation for the
                package.
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
                architectural signage and illuminated branding for commercial, hospitality,
                healthcare and industrial projects, with DDP shipping for export.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
