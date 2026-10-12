import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'Illuminated Signage Buying Guide',
  category: 'Illuminated Signage Buying Guide',
  description: 'How B2B buyers and design teams choose between front-lit, halo-lit, LED light box and LED neon signage: the project inputs, the specification checks, the installation and maintenance questions, and the files a quotation needs.',
  updated: 'Oct 12, 2026',
  directAnswer: 'Choose the illumination route from the viewer, the mounting surface and the maintenance route, not from a preferred product name. Front-lit letters read as a lit face, halo-lit letters light the wall behind them, an LED light box presents one even illuminated panel, and LED neon draws a bright line. Each route asks different questions of the artwork, the wall, the power supply and the service access, so the brief should state the effect that is wanted and confirm the construction with the supplier before fabrication starts.',
  sections: [
    {
      heading: 'Which illuminated route fits the brief?',
      paragraphs: [
        'The four routes below cover most illuminated signage briefs. They can be combined on one site, but each one is specified from its own inputs, so the comparison should be made against the same brief rather than route by route.',
      ],
      bullets: [
        'Front-lit channel letters: the face of the letter is the illuminated surface. The reading effect comes from the letter itself, and the daytime look is carried by the letter form, the face material and the trim.',
        'Halo-lit (rear-glow) letters: the letter face stays dark and the light is thrown onto the wall behind the body. The wall colour and texture become part of the design, and the standoff distance matters.',
        'LED light box: one framed panel with an even illuminated face. It suits a single message or a brand panel across a shopfront or an interior wall, and the framing depth is what keeps the face even.',
        'LED neon: a bright line used as lettering, a symbol or an outline. It is usually chosen for an interior feature or a decorative facade element, and the fixings are planned along the run of the line.',
      ],
    },
    {
      heading: 'What does each route need from the project?',
      paragraphs: [
        'The fastest way to lose time on an illuminated package is to approve a look before the project inputs behind it are known. These are the inputs that change the construction, so they belong in the brief before a final quotation.',
      ],
      rows: [
        { factor: 'Reading effect', first: 'The letter face is the lit surface and reads as the brand element.', second: 'The wall behind the letters becomes the lit surface.' },
        { factor: 'Wall or surface', first: 'The sign is read against the surface, so contrast and colour still matter.', second: 'Wall colour, texture, flatness and the standoff distance decide the result.' },
        { factor: 'Daytime appearance', first: 'Letter proportions, face material and trim carry the identity.', second: 'The unlit body, its finish and the visible standoff carry more of the look.' },
        { factor: 'Service route', first: 'Access to the letter interior and the power supply has to be planned.', second: 'Rear clearance for the modules and the wiring route has to be planned.' },
      ],
      firstLabel: 'Front-lit letters',
      secondLabel: 'Halo-lit letters',
    },
    {
      heading: 'How should the specification be checked before production?',
      paragraphs: [
        'A specification that can be built from states the effect, the construction and the responsibilities. It also states what is still open, because an undecided item is easier to price than an item that was never asked about.',
        'Material and finish routes such as 304 stainless steel, galvanized steel, aluminum, acrylic and heavy-gauge sheet are chosen per project against exposure, appearance and fabrication, and the finish route is confirmed with the sample rather than assumed from the sign type.',
        'Illumination is specified as an effect and a construction detail: where the light comes from, how the letter or panel is built, where the power supply sits, and how each module is reached for service. A visual check is agreed before production where the project calls for one.',
      ],
      bullets: [
        'The effect that is wanted, day and night, stated in plain language.',
        'The construction description for the chosen route, with face, return, trim and depth direction.',
        'The power location and the cable route, agreed with the site electrician or the main contractor.',
        'The service access route for modules, drivers and the power supply.',
        'The finish or material sample that the approved look is measured against.',
        'The installation responsibility: who lifts, who fixes, who connects, and who commissions.',
      ],
    },
    {
      heading: 'What should be answered before installation is planned?',
      paragraphs: [
        'Installation questions arrive early enough to change the sign, so they are worth answering while the drawing can still move. The site survey is the point where the wall, the power and the access are recorded rather than assumed.',
        'On a multi-location project, keep the master artwork and the site-specific mounting differences in separate records. That keeps every quotation auditable and stops one site elevation being quietly reused for another.',
      ],
      bullets: [
        'What the sign fixes into, and whether the substrate has been verified on site.',
        'The mounting height and the viewing distance from the main approach.',
        'Whether the wall is flat enough for the chosen standoff, or whether a raceway or a bracket detail is needed.',
        'Where the power supply can be reached without removing the sign.',
        'What the site needs for lifting, access equipment or out-of-hours working.',
        'Any local approval or accessibility review that applies to the location.',
      ],
    },
    {
      heading: 'What files should a buyer send for a quotation?',
      paragraphs: [
        'A quotation is only as good as the brief behind it. Sending the items below with the first enquiry produces a comparable price instead of a placeholder, and it lets the supplier flag the gaps rather than fill them silently.',
        'Delivery scope belongs in the same conversation: minimum order is one unit, typical production lead time is 7 to 14 days depending on scope and quantity, and DDP can be quoted as a door-to-door scope once the destination and the cargo details are confirmed. These are project confirmations, not standing terms, so they should be restated in the quotation.',
      ],
      bullets: [
        'Vector artwork of the logo or lettering, with any brand colour references.',
        'Letter heights, overall run length and the quantity required.',
        'A photograph or elevation of the mounting surface, with dimensions where available.',
        'The illumination route that is being considered, and the effect wanted for it.',
        'Material and finish direction, including any sample already approved.',
        'The site city and country, so the delivery scope can be quoted correctly.',
      ],
    },
  ],
  checklistTitle: 'Illuminated signage: buyer checklist',
  checklistIntro: 'Copy this list into the project brief. Each line is a decision to confirm rather than an assumption to carry forward, and the supplier should mark anything that cannot be confirmed yet.',
  checklist: [
    'State the viewing direction, the viewing distance and the approach.',
    'Pick the illumination route against the wall, not against a product name.',
    'Confirm the construction description: face, return, trim, depth.',
    'Agree the power location, the cable route and the service access.',
    'Confirm the finish or material sample and the approved visual.',
    'Record the mounting substrate, height and fixing method after the site survey.',
    'Send artwork, dimensions, quantity, destination and delivery scope.',
    'Agree who installs, who connects and who commissions the sign.',
    'Write the project-specific lead time and delivery scope into the quotation.',
  ],
  faqs: [
    { question: 'Which illuminated sign type is the best value?', answer: 'There is no single answer, because the routes are built differently and the cost driver changes with the brief. A front-lit letter set, a halo-lit set, a light box and an LED neon run are priced from different inputs, so ask for the same brief to be quoted on the routes that genuinely fit the site rather than comparing a fully specified option with a placeholder.' },
    { question: 'Can one project mix front-lit and halo-lit?', answer: 'Yes. Mixed routes are common on larger sites: a bright front-lit facade element with a quieter rear-glow entrance, or a lit light box beside unlit wayfinding. The two are specified separately and then coordinated through the shop drawings so the power and service routes stay consistent.' },
    { question: 'How long does an illuminated sign take to produce?', answer: 'Typical production lead time is 7 to 14 days depending on scope and quantity, counted from the point the artwork and the drawings are agreed. Mixed packages, sample approvals and multi-site quantities change that estimate, so the lead time that applies to the project is the one written in the quotation.' },
    { question: 'What is the minimum order for custom illuminated signage?', answer: 'Minimum order is one unit. A single reception sign and a multi-site roll-out go through the same drawing and inspection stages, so the difference is in the quantity and the number of site variations rather than in a minimum quantity.' },
    { question: 'Do you handle delivery and duties?', answer: 'DDP can be quoted as a door-to-door scope once the destination and the cargo details are confirmed. The agreed delivery scope, and how duties and taxes are treated, are stated in the project quotation rather than assumed from the sign type.' },
    { question: 'What should the supplier confirm in writing?', answer: 'The construction description, the finish or material sample, the visual check for the illumination, the mounting detail, the power and service assumptions, the packing scope, the delivery scope and the installation responsibility. Anything not confirmed in writing is an open item on the drawing rather than an agreed detail.' },
  ],
  sources: [
    { name: 'ZYD Signage — Front-Lit vs Halo-Lit Channel Letters', url: '/guides/front-lit-vs-halo-lit-channel-letters', note: 'Internal comparison of the two letter routes, including the wall and service questions each one raises.' },
    { name: 'ZYD Signage — How to Choose Materials for Illuminated Signage', url: '/guides/signage-material-selection-guide', note: 'Internal reference for face, return, trim and finish routes on illuminated letters.' },
    { name: 'International Sign Association (ISA) — Glossary of Sign Terms and Definitions', url: 'https://signs.org/resources-training/signs101/glossary-of-sign-terms-and-definitions/', note: 'Public terminology reference for sign and lighting discussions.' },
    { name: 'U.S. Access Board — Chapter 7: Signs', url: 'https://www.access-board.gov/ada/guides/chapter-7-signs/', note: 'Official signs guidance; the applicable accessibility framework is confirmed per project.' },
  ],
  relatedLinks: [
    { href: '/products/custom-channel-letters', label: 'Custom front-lit channel letters' },
    { href: '/products/custom-halo-lit-letters', label: 'Custom halo-lit letters' },
    { href: '/products/ultra-slim-led-light-box', label: 'Ultra-slim LED light boxes' },
    { href: '/products/custom-led-neon-sign', label: 'Custom LED neon signage' },
    { href: '/guides/how-much-do-custom-channel-letters-cost', label: 'What shapes a letter quotation' },
    { href: '/contact', label: 'Send your brief' },
  ],
  asideTitle: 'Compare the same brief',
  asideText: 'Send the artwork, a photo or elevation of the wall, the approximate size, the quantity and the effect you want. Comparing routes only works when every option is priced from identical project inputs.',
};

export default function IlluminatedSignageBuyingGuide() {
  return <GuideArticle slug="illuminated-signage-buying-guide" {...guide} />;
}
