import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'Signage Glossary: Common Terms for Buyers and Project Teams',
  category: 'Signage Glossary',
  description: 'A practical glossary of common signage terms, with plain-English definitions and the project details buyers should confirm before specification and production.',
  updated: 'Oct 15, 2026',
  directAnswer: 'A signage glossary helps buyers distinguish sign types, illumination methods, materials, accessibility terms, and delivery scopes before requesting a quotation. Each definition below is paired with a procurement check so the term can be used precisely in a project brief.',
  sections: [
    {
      heading: 'Channel Letter',
      paragraphs: ['A channel letter is an individual three-dimensional letter or character fabricated as a formed sign element, often with a face, return, and internal illumination. Front-lit and halo-lit channel letters are different specification routes.'],
      bullets: ['Confirm letter height, depth, face and return materials, illumination direction, mounting background, wiring access, quantity, and destination.'],
    },
    {
      heading: 'Front-Lit Letter',
      paragraphs: ['A front-lit letter directs illumination through the visible face so the letter itself appears bright from the viewing direction. The face material, internal LED layout, return construction, and finish all affect the result.'],
      bullets: ['Confirm the face colour and material, letter depth, LED access, power route, mounting surface, night-time appearance, and service responsibility.'],
    },
    {
      heading: 'Halo-Lit Letter',
      paragraphs: ['A halo-lit letter uses rear-facing light to create a glow on the wall or mounting background behind the letter rather than lighting the letter face directly.'],
      bullets: ['Confirm the wall colour and texture, stand-off depth, rear illumination direction, cable route, shadow effect, mounting method, and access for service.'],
    },
    {
      heading: 'Wayfinding Signage',
      paragraphs: ['Wayfinding signage helps people make decisions as they move through a site, using directional signs, directories, identification signs, and functional messages as one coordinated system.'],
      bullets: ['Provide a site or floor plan, visitor routes, decision points, sign hierarchy, languages, mounting conditions, quantities, and the required installation scope.'],
    },
    {
      heading: 'Directory Sign',
      paragraphs: ['A directory sign presents multiple destinations in one organised panel, such as tenants, departments, floors, rooms, or facilities.'],
      bullets: ['Confirm the destination list, hierarchy, update method, typography, languages, panel size, mounting height, access for changes, and whether illumination is required.'],
    },
    {
      heading: 'Pylon Sign',
      paragraphs: ['A pylon sign is a freestanding, often tall sign used for identification and visibility from an approach route. It may carry one brand, multiple tenants, or directional information depending on the site.'],
      bullets: ['Confirm sightlines, approach speed, overall dimensions, foundation or fixing interface, wind and structural inputs, tenant content, lighting, destination, and installation responsibility.'],
    },
    {
      heading: 'Monument Sign',
      paragraphs: ['A monument sign is a freestanding identification sign designed with a lower, more architectural profile that relates closely to its surrounding entrance, landscape, or building frontage.'],
      bullets: ['Confirm the desired viewing distance, base and cladding concept, site interface, drainage, landscape clearance, message hierarchy, materials, finish, and service access.'],
    },
    {
      heading: 'Light Box',
      paragraphs: ['A light box is an illuminated sign cabinet or panel in which a graphic, face, or translucent surface is lit from within. LED light boxes can be wall-mounted, projecting, or integrated into a larger sign system.'],
      bullets: ['Confirm panel dimensions, face and cabinet materials, graphic replacement method, LED access, power route, viewing direction, mounting, brightness intent, and maintenance access.'],
    },
    {
      heading: 'LED Neon',
      paragraphs: ['LED neon is a flexible LED product formed or mounted to create a continuous neon-like line or letter appearance without treating it as traditional glass neon.'],
      bullets: ['Confirm the artwork path, bend radius, colour, backing, power supply location, indoor or outdoor exposure, mounting method, cable concealment, and service access.'],
    },
    {
      heading: 'Tactile Sign',
      paragraphs: ['A tactile sign communicates information through raised characters, symbols, or other elements that can be identified by touch, sometimes together with visual lettering.'],
      bullets: ['Confirm the tactile content, character geometry, spacing, contrast, mounting location, installation height, reading access, language, and the accessibility requirements that apply to the project.'],
    },
    {
      heading: 'Braille Signage',
      paragraphs: ['Braille signage uses raised Braille dots to communicate room names, numbers, or other permanent information for people who read by touch. It may be combined with raised letters and symbols.'],
      bullets: ['Confirm the Braille language and convention, translation, dot geometry, room list, raised-character content, location, installation height, and the applicable accessibility standard before production.'],
    },
    {
      heading: 'ADA Signage',
      paragraphs: ['ADA signage refers to signage planned for applicable Americans with Disabilities Act requirements in the United States. Compliance depends on the finished sign, tactile and visual details, placement, and installation rather than on adding Braille alone.'],
      bullets: ['Identify the project jurisdiction and applicable requirements early, then review text, Braille, raised characters, contrast, mounting location, installation height, and inspection responsibility.'],
    },
    {
      heading: '304 Stainless Steel',
      paragraphs: ['304 stainless steel is a commonly considered stainless grade for architectural and outdoor signage, subject to the actual environment, finish, fabrication, and installation controls.'],
      bullets: ['Confirm the exposure, surface finish, thickness, weld and edge treatment, cleaning plan, contamination controls, documentation, and whether the project environment calls for another grade.'],
    },
    {
      heading: 'Galvanized Steel',
      paragraphs: ['Galvanized steel is steel protected with a zinc coating and may be considered for selected outdoor sign structures or panels when the project specification and finish system support it.'],
      bullets: ['Confirm coating condition, cut-edge treatment, weld treatment, topcoat or finish route, drainage, contact with other metals, exposure, and the maintenance expectations for the location.'],
    },
    {
      heading: 'Aluminium',
      paragraphs: ['Aluminium is a lightweight metal used in sign faces, cabinets, panels, letters, and supporting elements when its weight, finish, fabrication, and environment fit the project.'],
      bullets: ['Confirm alloy or sheet specification where needed, thickness, finish, stiffness, joining method, galvanic-contact risks, mounting, lighting access, and the required appearance.'],
    },
    {
      heading: 'DDP Delivery',
      paragraphs: ['DDP is a delivery scope in which the seller may quote door-to-door delivery with destination duties and taxes considered as part of the project scope. Availability depends on the destination and cargo details.'],
      bullets: ['Confirm the exact destination, cargo description, packing, duties and taxes, unloading responsibility, documentation, and what is included or excluded in the quotation.'],
    },
  ],
  checklistTitle: 'Glossary terms to put in a signage brief',
  checklistIntro: 'Use the terms precisely, then attach the project information that turns a general sign type into a reviewable specification.',
  checklist: [
    'Name the sign type and its role in the visitor or brand journey.',
    'Add approximate dimensions, quantities, artwork, languages, and viewing direction.',
    'State the environment, mounting surface, power access, and service constraints.',
    'Confirm material, finish, illumination, accessibility, destination, and installation scope.',
    'Ask the supplier to identify assumptions and project-specific items before production.',
  ],
  faqs: [
    { question: 'What signage terms should a buyer understand first?', answer: 'Start with the sign type and the visitor function: channel letter, wayfinding, directory, pylon, monument, or light box. Then confirm illumination, material, mounting, accessibility, and delivery terms.' },
    { question: 'Is a material name enough for a signage specification?', answer: 'No. A material name should be paired with the environment, thickness or construction where relevant, finish, fabrication controls, mounting, cleaning, and maintenance requirements.' },
    { question: 'Does Braille signage automatically mean ADA compliance?', answer: 'No. ADA requirements depend on the applicable project rules and on the finished sign and installation. Review tactile content, visual details, placement, height, and inspection responsibility before claiming compliance.' },
    { question: 'What should be confirmed before asking for a signage quotation?', answer: 'Send the artwork, sign types, approximate dimensions, quantities, site or mounting information, environment, materials, finishes, illumination direction, destination, and installation responsibility. Unknown items should be marked for clarification.' },
  ],
  sources: [
    { name: 'ZYD Signage material selection guide', url: '/guides/signage-material-selection-guide', note: 'Related guide on materials, finishes, and project-specific selection.' },
    { name: 'ZYD Signage accessibility planning guide', url: '/guides/ada-braille-signage-planning-guide', note: 'Related guide on tactile, Braille, and wayfinding planning.' },
  ],
  relatedLinks: [
    { href: '/guides/signage-material-selection-guide', label: 'Materials and finishes guide' },
    { href: '/guides/ada-braille-signage-planning-guide', label: 'ADA and Braille planning guide' },
    { href: '/guides/complete-site-signage-procurement-checklist', label: 'Complete site procurement checklist' },
    { href: '/contact', label: 'Discuss a signage project' },
  ],
  asideTitle: 'Use the terms in your project brief',
  asideText: 'Send the sign list, artwork, approximate dimensions, site information, materials, finishes, destination, and installation scope. The terminology helps the review start from a shared specification.',
};

export default function SignageGlossaryPage() {
  return <GuideArticle {...guide} slug="signage-glossary" />;
}
