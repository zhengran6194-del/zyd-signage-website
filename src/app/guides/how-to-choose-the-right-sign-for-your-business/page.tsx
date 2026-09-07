import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'How to Choose the Right Sign for Your Business',
  category: 'Outdoor Signage Buying Guide',
  description: 'A practical framework for choosing pylon, monument, building, wayfinding, or illuminated signage around the real site, viewer, message, and approval brief.',
  updated: 'Sep 7, 2026',
  directAnswer: 'Choose a business sign by first defining where people will see it, what they must understand, how far away they are, whether the message changes, and what the site allows. Then select the sign type, scale, illumination, material, mounting, and approval route. A pylon sign, monument sign, building sign, and wayfinding sign solve different communication jobs; the best choice follows the site brief.',
  sections: [
    {
      heading: 'Which sign type fits the communication job?',
      paragraphs: ['Begin with the job the sign must perform. A roadside or campus entrance may need identification at distance; a pedestrian route may need directional information; a building facade may need brand identification; a retail frontage may need an illuminated message. The ISA glossary can help align terminology before the buyer requests drawings.'],
      rows: [
        { factor: 'Pylon sign', first: 'Useful for visible identification where height, visibility, or multiple tenant messages are part of the brief.', second: 'Confirm site permissions, structure, foundation/interface, access, and message hierarchy.' },
        { factor: 'Monument sign', first: 'Useful for a lower, substantial entrance or property identity element.', second: 'Confirm pedestrian/vehicle approach, landscape relationship, scale, and maintenance access.' },
        { factor: 'Building sign', first: 'Useful when the brand must be identified on a facade or building elevation.', second: 'Confirm wall construction, mounting, access, power, and landlord or local approvals.' },
        { factor: 'Wayfinding sign', first: 'Useful for helping visitors navigate a campus, healthcare site, airport, or commercial development.', second: 'Confirm the route, destinations, hierarchy, accessibility coordination, and sign schedule.' },
      ],
      firstLabel: 'Typical communication job',
      secondLabel: 'Questions to confirm',
    },
    {
      heading: 'What should you measure before choosing a sign?',
      paragraphs: ['The first measurement is not only a dimension. Record the approach direction, viewing distance, speed of movement, surrounding visual noise, lighting conditions, available mounting surface, power access, pedestrian route, and maintenance access. A supplier can then discuss scale and construction without pretending an unverified dimension will suit every location.'],
      bullets: ['Primary viewer: driver, pedestrian, visitor, tenant, or service team', 'Approach direction, viewing distance, and whether the message is fixed or changeable', 'Site photos, elevation, mounting surface, obstructions, and access constraints', 'Local sign permit, accessibility review, landlord, campus, or authority requirements']
    },
    {
      heading: 'How do illumination and materials affect the decision?',
      paragraphs: ['Illumination should support the message and the surroundings, not be added after the sign type is chosen. Discuss daytime finish, night-time effect, glare control, power location, service access, and neighbouring properties together. Material selection should likewise follow exposure, finish, fabrication, drainage, cleaning, and maintenance questions. Public material references can inform the conversation, but they do not replace a project-specific review.'],
      bullets: ['Choose the desired day/night visual effect before selecting components.', 'Review coastal, industrial, roadside, sheltered, and high-contact exposure separately.', 'Ask for finish samples, mounting details, and a clear maintenance assumption.', 'Do not turn an unverified grade, lifetime, certification, or weather claim into a specification.']
    },
    {
      heading: 'How should accessibility and approvals be handled?',
      paragraphs: ['Accessibility is a project coordination requirement, not a material marketing claim. Confirm whether the sign is part of an accessible route, whether tactile or raised content is required, where it will be mounted, and which code or authority applies. The U.S. Access Board ADA and Chapter 7 references are useful official starting points for projects under that framework; the local design team and authority having jurisdiction make the final determination.']
    },
  ],
  checklistTitle: 'Business sign selection checklist',
  checklistIntro: 'Use this brief before asking a sign manufacturer for a recommendation. It keeps the communication goal visible and identifies the decisions still open.',
  checklist: ['Business name, logo artwork, message hierarchy, and language requirements', 'Site photos, plan/elevation, approach direction, and viewing distance', 'Sign type under consideration and the reason it may fit', 'Day/night appearance, finish, illumination, and power access', 'Mounting surface, foundation/interface, installation access, and maintenance access', 'Quantity, destination, local approval path, and target delivery window'],
  faqs: [
    { question: 'Should I choose a pylon sign or a monument sign?', answer: 'Start with the site and viewing job. Compare approach distance, visibility, permitted height, landscape relationship, message count, foundation/interface, and maintenance access before selecting one route.' },
    { question: 'Do I need an illuminated sign?', answer: 'That depends on when the sign must be read, the surrounding light, the business hours, the site rules, and the desired brand effect. Review day and night conditions instead of assuming illumination is always necessary.' },
    { question: 'What should I send for a first sign recommendation?', answer: 'Send the logo, site photos or plan, approximate viewing distance, sign location, desired message, quantity, destination, and any permit or accessibility requirements already known.' },
  ],
  sources: [
    { name: 'International Sign Association (ISA) — Glossary of Sign Terms and Definitions', url: 'https://signs.org/resources-training/signs101/glossary-of-sign-terms-and-definitions/', note: 'Public terminology reference for aligning sign-type language.' },
    { name: 'U.S. Access Board — Americans with Disabilities Act (ADA)', url: 'https://www.access-board.gov/ada/', note: 'Official accessibility context; confirm the applicable local framework.' },
    { name: 'U.S. Access Board — Chapter 7: Signs', url: 'https://www.access-board.gov/ada/guides/chapter-7-signs/', note: 'Official signs guidance; the authority having jurisdiction remains decisive.' },
    { name: 'International Molybdenum Association — Which Stainless Steel?', url: 'https://www.imoa.info/download_files/stainless-steel/folder_which_stainless_steel_EN.pdf', note: 'Public material-selection background for stainless exposure discussions.' },
  ],
  relatedLinks: [
    { href: '/products/outdoor-pylon-monument-sign', label: 'See outdoor pylon signs' },
    { href: '/products/architectural-wayfinding-system', label: 'See wayfinding systems' },
    { href: '/contact', label: 'Send your site brief' },
  ],
  asideTitle: 'Start with the site brief',
  asideText: 'Share the site photos, approach direction, viewing distance, message, and approval constraints. The sign type should follow the communication job.',
};

export default function ChooseBusinessSignGuide() {
  return <GuideArticle slug="how-to-choose-the-right-sign-for-your-business" {...guide} />;
}
