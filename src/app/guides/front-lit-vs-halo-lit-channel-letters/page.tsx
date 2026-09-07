import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'Front-Lit vs Halo-Lit Channel Letters',
  category: 'Illuminated Signage Comparison',
  description: 'A practical comparison of front-lit and halo-lit channel letters for commercial buildings, retail locations, hospitality projects, and brand environments.',
  updated: 'Sep 7, 2026',
  directAnswer: 'Choose front-lit channel letters when the face itself should read as the primary illuminated brand surface. Choose halo-lit letters when the design brief calls for a light effect behind the letters and the mounting background can support that contrast. The decision depends on daytime appearance, night-time effect, wall colour, viewing distance, service access, and local approval requirements.',
  sections: [
    {
      heading: 'What is the difference between front-lit and halo-lit letters?',
      paragraphs: [
        'Front-lit channel letters direct the intended visual emphasis toward the face of each letter. Halo-lit, or reverse-lit, letters place the light effect behind the letter body so the mounting surface becomes part of the night-time composition. Both can be used for branded environments, but they ask different questions of the artwork, wall, wiring route, and installation detail.',
        'The ISA glossary is a useful public terminology reference. It does not select a lighting route for a specific project; that decision belongs to the design brief and technical review.'
      ],
      rows: [
        { factor: 'Primary night-time effect', first: 'The letter face is intended to be the main illuminated reading surface.', second: 'A controlled glow is intended to appear around or behind the letter body.' },
        { factor: 'Mounting background', first: 'The sign remains readable against the wall or support, subject to colour and contrast review.', second: 'Wall colour, texture, distance from the surface, and shadows become important design inputs.' },
        { factor: 'Daytime appearance', first: 'Face colour, trim, returns, and letter proportions carry the visual identity.', second: 'The unlit letter body, finish, depth, and standoff details carry more of the daytime expression.' },
        { factor: 'Coordination', first: 'Confirm face material, wiring, power access, mounting, and service route.', second: 'Also confirm rear clearance, light spread, shadow control, and the surface behind the letters.' },
      ],
      firstLabel: 'Front-lit',
      secondLabel: 'Halo-lit',
    },
    {
      heading: 'Which lighting style fits the brand environment?',
      paragraphs: ['Start with the viewer and the surface, not with a preferred product name. A retail sign may need strong face readability from a roadway, while a hotel or architectural entrance may want a quieter wall-wash effect. Request a simple day/night visual or mock-up that shows the letters on the real or representative background before approving fabrication.'],
      bullets: ['Viewing direction and distance from the primary approach', 'Wall colour, texture, reflectivity, and available mounting depth', 'Daytime brand colour and night-time brightness expectation', 'Power access, service access, neighbouring signs, and local review requirements']
    },
    {
      heading: 'How should illumination be specified before production?',
      paragraphs: [
        'A useful specification states the intended lighting effect, letter face and return treatment, mounting surface, power location, cable route, service access, and approval sample. It should also identify what is still undecided. Avoid turning an aesthetic preference into an unverified promise about brightness, lifetime, energy use, or warranty.',
        'For signs that fall under an accessibility framework, coordinate the sign type, placement, and content with the project designer and the authority having jurisdiction. The U.S. Access Board materials below provide public context for ADA-related planning; they do not replace local review.'
      ]
    },
    {
      heading: 'What should a buyer ask a channel letters supplier?',
      paragraphs: ['Ask for the proposed section or construction description, finish sample, day/night artwork, mounting detail, power and service assumptions, packing scope, delivery scope, and installation responsibility. If the project includes multiple locations, keep the master artwork and site-specific mounting differences in separate records so the quotation remains auditable.']
    },
  ],
  checklistTitle: 'Front-lit or halo-lit: buyer checklist',
  checklistIntro: 'Use this list to define the decision before asking for a final quotation. The supplier should flag unknowns instead of silently choosing for the project.',
  checklist: ['Show the daytime and night-time visual intent', 'Identify the mounting background and available clearance', 'Confirm face, return, trim, finish, and letter depth direction', 'Mark power access, cable route, and service access', 'Confirm artwork, quantity, site differences, and delivery destination', 'Coordinate accessibility and local approval with the project team'],
  faqs: [
    { question: 'Is front-lit always brighter than halo-lit?', answer: 'Do not assume that from the lighting label alone. The visible result depends on the sign construction, face, spacing, background, viewing conditions, and the project lighting specification. Request a visual and technical review for the actual site.' },
    { question: 'Can halo-lit letters be used on any wall?', answer: 'The wall is a key design input because the rear glow becomes part of the appearance. Review wall colour, texture, clearance, shadow behaviour, mounting, and service access before approving the route.' },
    { question: 'What files should I send for a comparison?', answer: 'Send the logo artwork, approximate size, mounting photo or elevation, desired day/night effect, site location, quantity, and any local approval requirements. The supplier can then compare both routes against the same brief.' },
  ],
  sources: [
    { name: 'International Sign Association (ISA) — Glossary of Sign Terms and Definitions', url: 'https://signs.org/resources-training/signs101/glossary-of-sign-terms-and-definitions/', note: 'Public terminology reference for sign and lighting discussions.' },
    { name: 'U.S. Access Board — Americans with Disabilities Act (ADA)', url: 'https://www.access-board.gov/ada/', note: 'Official accessibility context; confirm the applicable jurisdiction.' },
    { name: 'U.S. Access Board — Chapter 7: Signs', url: 'https://www.access-board.gov/ada/guides/chapter-7-signs/', note: 'Official signs guidance; not a substitute for project approval.' },
  ],
  relatedLinks: [
    { href: '/products/custom-halo-lit-letters', label: 'See custom halo-lit letters' },
    { href: '/products/custom-led-neon-sign', label: 'See custom LED neon signs' },
    { href: '/contact', label: 'Discuss lighting options' },
  ],
  asideTitle: 'Compare the same brief',
  asideText: 'Send the artwork, wall photo or elevation, approximate size, quantity, and desired night-time effect. A fair comparison starts with identical project inputs.',
};

export default function FrontLitVsHaloLitGuide() {
  return <GuideArticle slug="front-lit-vs-halo-lit-channel-letters" {...guide} />;
}
