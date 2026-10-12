import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import WhatsAppCta from '@/components/WhatsAppCta';

type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  ratio: string;
};

type Subsection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  images?: ProjectImage[];
};

type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  images?: ProjectImage[];
  subsections?: Subsection[];
};

const IMAGES = {
  heroStreetIdentity: {
    src: '/assets/images/projects/dongguan-street-entrance-sculpture-and-heritage-wall.jpg',
    width: 1280,
    height: 1706,
    alt: 'Dongguan Street entrance in Dalian: a plaza sculpture spelling the street name in gold three-dimensional Chinese characters, above a red brick heritage facade with large white painted characters',
    caption: 'The street identity at the entrance: brush-lettered characters on the restored brick facade and the plaza sculpture that names the street.',
    ratio: 'aspect-[3/4]',
  },
  visitorCentre: {
    src: '/assets/images/projects/dongguan-street-visitor-centre-illuminated-letters.jpg',
    width: 1280,
    height: 960,
    alt: 'Illuminated visitor centre lettering in Chinese mounted on the dark stone archway of a restored building on Dongguan Street',
    caption: 'Illuminated lettering set into the stone archway of the visitor centre.',
    ratio: 'aspect-[4/3]',
  },
  noticeFrame: {
    src: '/assets/images/projects/dongguan-street-freestanding-notice-frame.jpg',
    width: 1366,
    height: 911,
    alt: 'Freestanding double-post notice frame holding a glass-fronted poster panel on the paved street in front of a stone-clad building',
    caption: 'A freestanding frame for tenant and event notices, detailed to sit on the street surface.',
    ratio: 'aspect-[3/2]',
  },
  directoryBoard: {
    src: '/assets/images/projects/dongguan-street-directory-board-at-night.jpg',
    width: 1440,
    height: 1080,
    alt: 'Freestanding three-panel directory board at night showing coupon offers, member benefits and an activity calendar below a street name band',
    caption: 'The three-panel directory board carrying offers, member information and the event calendar.',
    ratio: 'aspect-[4/3]',
  },
  bladeSign: {
    src: '/assets/images/projects/dongguan-street-illuminated-blade-sign-at-night.jpg',
    width: 1080,
    height: 1440,
    alt: 'Vertical illuminated blade sign with the street name in white Chinese characters on a black panel, mounted on a red brick corner beside a street lamp at night',
    caption: 'A vertical blade sign on the brick corner, read along the street rather than across it.',
    ratio: 'aspect-[3/4]',
  },
  balloons: {
    src: '/assets/images/projects/dongguan-street-red-balloon-installation.jpg',
    width: 1280,
    height: 960,
    alt: 'Cluster of red balloon spheres bursting out from the wall of a beige rendered heritage building, with red ribbons hanging below',
    caption: 'The balloon cluster breaking out of the facade, with ribbons carrying the colour down to street level.',
    ratio: 'aspect-[4/3]',
  },
  nationalGeographic: {
    src: '/assets/images/projects/dongguan-street-national-geographic-installation.jpg',
    width: 1440,
    height: 1080,
    alt: 'National Geographic themed installation with tilted yellow photo frames, a portrait photograph and cut-out letters reading Born To Shine, lit from the base',
    caption: 'The National Geographic display: yellow frames at staggered angles around a portrait image and the BORN TO SHINE lettering.',
    ratio: 'aspect-[4/3]',
  },
  roseFunnel: {
    src: '/assets/images/projects/dongguan-street-rose-funnel-floral-installation.jpg',
    width: 1366,
    height: 1025,
    alt: 'Red funnel sculpture on a post pouring a stream of pink roses up and across the brick and stone facade of a heritage building at night, with a person leaning into the funnel',
    caption: 'The funnel device: a stream of roses poured up the brick facade, built to be stood beside and photographed.',
    ratio: 'aspect-[4/3]',
  },
  dragonGate: {
    src: '/assets/images/projects/dongguan-street-courtyard-dragon-gate-facade.jpg',
    width: 1080,
    height: 1440,
    alt: 'Shop facade on Dongguan Street with an illuminated red dragon medallion, red koi and blue cloud motifs set around illuminated Chinese shop lettering',
    caption: 'The No.15 Courtyard shopfront: dragon medallion, koi and cloud motifs around the illuminated shop name.',
    ratio: 'aspect-[3/4]',
  },
  goldBow: {
    src: '/assets/images/projects/dongguan-street-giant-gold-bow-installation.jpg',
    width: 1366,
    height: 911,
    alt: 'Giant gold bow installation tied over the corner of a red brick heritage building, with scalloped window hoods and window flower boxes along the facade',
    caption: 'The oversized bow tied over the corner of the brick building, softening the roofline.',
    ratio: 'aspect-[3/2]',
  },
  floralArch: {
    src: '/assets/images/projects/dongguan-street-floral-arch-window.jpg',
    width: 1080,
    height: 1440,
    alt: 'Yellow illuminated ring framing an arched window in a red brick wall, dressed with greenery, moss and pink and orange flowers',
    caption: 'A window arch dressed with flowers around an illuminated ring, turning a blank opening into a viewing point.',
    ratio: 'aspect-[3/4]',
  },
  musicNoteTree: {
    src: '/assets/images/projects/dongguan-street-music-note-floral-tree.jpg',
    width: 1080,
    height: 1440,
    alt: 'Street tree in blossom with hanging floral decorations and an illuminated yellow rose with a music note outline standing in a bed of red, blue and yellow flowers',
    caption: 'The music note and rose piece at the foot of a street tree, with the flower bed carrying the colour.',
    ratio: 'aspect-[3/4]',
  },
  teahouse: {
    src: '/assets/images/projects/dongguan-street-teahouse-pavilion.jpg',
    width: 1080,
    height: 1440,
    alt: 'Red teahouse ticket pavilion on Dongguan Street with a tiled roof detail, illuminated Chinese lettering and a green sign reading there are stories here',
    caption: 'The teahouse ticket pavilion, built as a small roofed structure against the brick elevation.',
    ratio: 'aspect-[3/4]',
  },
  festoonLights: {
    src: '/assets/images/projects/dongguan-street-festoon-light-canopy.jpg',
    width: 1080,
    height: 1440,
    alt: 'Strings of festoon lights, glass globes and printed pennant flags spanning the street between restored brick shopfronts at dusk',
    caption: 'Festoon lighting and printed pennants spanning the street, carrying the street name across the frontages.',
    ratio: 'aspect-[3/4]',
  },
  craftStall: {
    src: '/assets/images/projects/dongguan-street-heritage-craft-stall-pavilion.jpg',
    width: 1080,
    height: 1440,
    alt: 'Blue heritage craft market stall with gold trim, dragon motifs and Chinese lettering for a sugar-figure demonstration, in front of a lit brick facade',
    caption: 'A heritage craft stall in the market set, drawn from the same blue and gold palette as the shopfront signs.',
    ratio: 'aspect-[3/4]',
  },
} satisfies Record<string, ProjectImage>;

const projectFacts: Array<{ label: string; value: string }> = [
  { label: 'Project', value: 'Dongguan Street heritage renewal: signage and themed installation programme' },
  { label: 'Location', value: 'Dalian, Liaoning, China' },
  { label: 'Sector', value: 'Heritage street / commercial and cultural district' },
  { label: 'Scope', value: 'Wayfinding signage system plus themed installations along the street' },
  { label: 'Site type', value: 'Restored street of red brick and stone buildings with mixed retail and cultural tenants' },
  { label: 'Design language', value: 'Black and orange wayfinding palette, bilingual Chinese and English signs, coastline wave motif at the base of the signs' },
  { label: 'Services', value: 'Design and production of the signage system and the themed installations' },
];

const sections: Section[] = [
  {
    heading: 'Part one - wayfinding system: making a historic street legible',
    paragraphs: [
      'A street of connected lanes needs a system rather than a set of individual signs. The wayfinding for Dongguan Street was designed in a simple, contemporary language that sits against the restored fabric of the street, and it was planned for both practical direction and appearance.',
      'Localised design language: black and orange were used as the main colours, echoing the red brick and warm lighting of the street, with bilingual Chinese and English lettering and clear pictograms so that residents and visitors from out of town can read the same information.',
      'Function and setting combined: the signs were planned against the street circulation as a multi-level set, presenting attractions, retail and public facilities together, while low-saturation colours keep them in keeping with the buildings rather than competing with them.',
      "Detail carrying the culture: the wave pattern at the base of the signs is drawn from Dalian's maritime character, which puts a piece of the city into the smallest part of the wayfinding.",
    ],
    images: [IMAGES.visitorCentre, IMAGES.noticeFrame, IMAGES.directoryBoard],
  },
  {
    heading: 'Part two - themed installations: giving the street a second life',
    paragraphs: [
      'If wayfinding is the skeleton of the street, the installations are its expression. Several photo points were created along Dongguan Street with a mix of ideas, so that a historic district has a young, lively voice.',
    ],
    images: [IMAGES.bladeSign, IMAGES.balloons],
    subsections: [
      {
        heading: '1. Flower-dressed street: the romantic devices',
        paragraphs: [
          'Working from the idea of abundant flowers, several landmark devices were made so that the old street is wrapped gently rather than decorated heavily.',
        ],
        bullets: [
          'Street lamp floral device: vintage street lamps were wrapped in colourful artificial flowers, with bouquets grading from orange and yellow into pink and purple. The devices give the corners a romantic mood, and when the lamps come on in the evening the flower shapes and the warm light interweave.',
          'Red balloon device: clusters of red balloons fly out from the building wall. The strong colour contrasts with the warm beige facade, giving the street a storybook quality and a recognisable photo point.',
          "Music note floral device: working from a music note and a painter's palette with multicoloured flower clusters, the piece brings an artistic note into a street corner and answers the artistic character of the district.",
        ],
        images: [IMAGES.nationalGeographic, IMAGES.roseFunnel],
      },
      {
        heading: "2. Themed IP: telling the street's story in scenes",
        paragraphs: [
          'Responding to the cultural position of the district, several themed sets were made so that the story of the lanes has a visible form.',
        ],
        bullets: [
          'National Geographic exhibition: the signature yellow frame was used as the design element, built as a three-dimensional set at staggered angles, combining classic photographic work with the BORN TO SHINE theme, which gives the street a human and artistic layer.',
          "Cultural commercial installation: working with the heritage craft market and the individual tenants along the street, the No.15 Courtyard leap over the dragon gate identity and the market stall devices were made, bringing Dalian's intangible cultural heritage together with the commercial frontage so that the signs carry a local warmth as well as identifying the businesses.",
          'Giant bow device: a large gold bow was tied onto the red brick building, softening the hard lines of the old architecture and giving the street a ceremonial, playful note that has become one of its signature images.',
        ],
        images: [IMAGES.dragonGate, IMAGES.goldBow],
      },
    ],
  },
  {
    heading: 'Part three - design approach: balancing the historic and the present',
    paragraphs: [
      'The renewal of Dongguan Street is not a replacement of its history but a continuation and revival of the culture of the place.',
      'Supporting cast rather than lead role: every sign and installation was designed on the premise of respecting the fabric of the historic buildings. Colour, material and form were matched to the period atmosphere of the street, so the devices read as the supporting cast of the lanes and not as the main event.',
      'Culture that can be felt, scenes that can be entered: whether it is the maritime element in the wayfinding or the local cultural expression in the installations, the intention is that the design does more than look good, and that a visitor can read the character of the city and the history of the street while using it.',
      'Suited to more than one occasion: from commercial identity to public installation, and from everyday use to event programming, the design serves both the cultural tourism role of the district and the commercial needs of its tenants, which is what gives the street a scene that can last.',
      'A hundred years of Dongguan Street is half sediment of history and half vitality of renewal. Guiding the footsteps with wayfinding and lighting the lanes with installations is how the conversation between the historic and the present is held, and how memories of the city live alongside a younger mood.',
    ],
    images: [IMAGES.floralArch, IMAGES.musicNoteTree, IMAGES.teahouse, IMAGES.festoonLights, IMAGES.craftStall],
  },
];

const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'What did the Dongguan Street renewal cover?',
    answer: 'Two bodies of work along one street: a wayfinding signage system with direction, attraction and event information, and a themed installation programme with floral devices, a balloon device, a National Geographic display set, cultural commercial installations tied to the heritage craft market, and a large bow on the brick facade.',
  },
  {
    question: 'How is wayfinding designed for a historic street?',
    answer: 'By planning the signs against the street circulation as a multi-level set, then choosing a language that leaves the architecture in charge: here a black and orange palette echoing the red brick and warm lighting, bilingual Chinese and English lettering with clear pictograms, low-saturation colours, and a coastline wave pattern at the base of the signs as a local detail.',
  },
  {
    question: 'How are themed installations chosen for a heritage district?',
    answer: 'Each one is chosen to create a photo point and to speak about the place: floral devices wrapped around street lamps, a balloon cluster flying out of a facade, a music note and palette piece, a National Geographic frame set, the No.15 Courtyard dragon gate identity with the heritage craft market stalls, and the gold bow on the building corner.',
  },
  {
    question: 'How do the installations avoid overpowering the old buildings?',
    answer: 'Every element is designed on the basis of respecting the fabric of the historic buildings. Colour, material and form are matched to the period atmosphere of the street, so the devices work as the supporting cast of the lanes, and the low-saturation choices in the signage keep the wayfinding from competing with the architecture.',
  },
  {
    question: 'Can the same approach be used on another street or district?',
    answer: "The method transfers, the palette does not. The design language here was drawn from Dalian's maritime character and from the history of the street itself, and the installation set was coordinated with the tenant mix and the cultural programming. A comparable brief starts from the history of that place and the way the district needs to be used.",
  },
];

const relatedLinks = [
  { href: '/products/architectural-wayfinding-system', label: 'Architectural wayfinding systems' },
  { href: '/products/custom-channel-letters', label: 'Custom front-lit channel letters' },
  { href: '/guides/mall-wayfinding-signage', label: 'Wayfinding and directory signage' },
  { href: '/guides/custom-signage-manufacturing-process', label: 'How custom signage is made' },
  { href: '/case-studies/pavilion-dalian-mall-festive-installations', label: 'Pavilion Dalian festive installations' },
  { href: '/projects', label: 'All projects' },
];

export default function DongguanStreetHeritageRenewalCaseStudy() {
  // Built from the same array the page renders, so the structured data cannot
  // drift from the visible answers.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const caseStudyUrl = 'https://www.zydsign.com/case-studies/dongguan-street-dalian-heritage-renewal';

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.zydsign.com' },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.zydsign.com/projects' },
      { '@type': 'ListItem', position: 3, name: 'Dongguan Street | Heritage Signage and Themed Installations', item: caseStudyUrl },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dongguan Street | Heritage Signage and Themed Installations',
    description: 'How ZYD Signage delivered the wayfinding system and themed installations for the Dongguan Street heritage renewal in Dalian, China.',
    url: caseStudyUrl,
    mainEntityOfPage: caseStudyUrl,
    image: Object.values(IMAGES).map((image) => `https://www.zydsign.com${image.src}`),
    articleSection: 'Case Studies',
    about: {
      '@type': 'Thing',
      name: 'Signage and themed installation programme for a historic street',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dalian Zhiyudao Signage & Tech. Co., Ltd.',
      url: 'https://www.zydsign.com',
    },
    articleBody: [
      'Project facts: ' + projectFacts.map((fact) => `${fact.label}: ${fact.value}`).join('; '),
      ...sections.flatMap((section) => [
        section.heading,
        ...section.paragraphs,
        ...(section.bullets ?? []),
        ...(section.subsections ?? []).flatMap((sub) => [sub.heading, ...(sub.paragraphs ?? []), ...(sub.bullets ?? [])]),
      ]),
    ].join(' '),
  };

  return (
    <main id="main" className="bg-slate-100 min-h-screen pt-32 pb-40">
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <article className="w-full max-w-6xl px-4 sm:px-6 lg:px-10 mx-auto">
        <header className="bg-slate-950 text-white rounded-[3rem] px-6 py-12 sm:px-12 lg:px-16 lg:py-16 mb-10">
          <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">
            Case Study &bull; Heritage Street Renewal
          </div>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
            Dongguan Street | Heritage Signage and Themed Installations
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            A hundred-year-old street in Dalian, China, was renewed as a commercial and cultural
            district. ZYD Signage designed and produced the wayfinding system that makes the lanes
            legible and the themed installations that give the heritage frontages a second life.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-300">
            <span>Heritage / Mixed Use</span>
            <span>&bull;</span>
            <span>Dalian, China</span>
            <span>&bull;</span>
            <span>Wayfinding + Themed Installations</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-sm border border-slate-200">
            <figure className="mb-10">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 aspect-[3/4]">
                <Image
                  src={IMAGES.heroStreetIdentity.src}
                  alt={IMAGES.heroStreetIdentity.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-slate-600 mt-3">
                {IMAGES.heroStreetIdentity.caption}
              </figcaption>
            </figure>

            <p className="text-xl text-slate-800 leading-relaxed font-semibold mb-10">
              The renewal was delivered as two bodies of work on one street. The wayfinding system
              gives the lanes a hierarchy of direction, attraction and event information in a black
              and orange palette with bilingual Chinese and English lettering; the installation
              programme adds a flower-dressed street, a burst of red balloons, a National Geographic
              display set, the No.15 Courtyard identity with its heritage craft market, and a giant
              bow over the brick corner, all designed to respect the historic buildings they sit
              against.
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
                {section.images && <ImageGrid images={section.images} />}
                {section.subsections?.map((sub) => (
                  <div key={sub.heading} className="mt-10">
                    <h3 className="text-xl font-black uppercase tracking-tight text-blue-800 mb-4">
                      {sub.heading}
                    </h3>
                    {sub.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-slate-600 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                    {sub.bullets && (
                      <ul className="list-disc pl-5 space-y-2 mt-4 mb-2">
                        {sub.bullets.map((bullet) => (
                          <li key={bullet} className="text-slate-600 leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {sub.images && <ImageGrid images={sub.images} />}
                  </div>
                ))}
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
              <WhatsAppCta
                label="Request a 3D Concept"
                message="Hi Aaron, I would like to discuss a signage and installation programme for a heritage or mixed-use street."
                className="text-blue-700 hover:text-blue-900"
              />
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-5">
            <div className="bg-slate-950 text-white rounded-[2rem] p-8">
              <div className="text-blue-400 font-black uppercase tracking-[0.25em] text-xs mb-4">
                Buyer brief
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4">
                Renewing a street or district?
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Send the street or site plan, the buildings involved, the sign types you are
                considering and the programme for installations. ZYD Signage reviews the brief and
                comes back with a route for the wayfinding and the installation set.
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

function ImageGrid({ images }: { images: ProjectImage[] }) {
  return (
    <div
      className={images.length > 1 ? 'grid gap-5 sm:grid-cols-2 mt-8' : 'mt-8 mx-auto max-w-xl'}
    >
      {images.map((image) => (
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
          <figcaption className="text-sm text-slate-600 mt-3">{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
