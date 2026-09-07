import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'How Much Do Custom Channel Letters Cost?',
  category: 'Illuminated Signage Buying Guide',
  description: 'A buyer-focused guide to the project inputs that shape a custom channel letters quotation, without pretending there is one universal price.',
  updated: 'Sep 7, 2026',
  directAnswer: 'There is no responsible universal price for custom channel letters. A supplier needs the letter artwork, overall size, return depth, face and return materials, lighting approach, finish, mounting surface, quantity, packing, destination, and installation scope before preparing a comparable quotation. Share those inputs first; compare the scope line by line, not only the headline number.',
  sections: [
    {
      heading: 'What is included in a channel letters quotation?',
      paragraphs: [
        'A useful quotation separates the physical letters from the project services around them. Ask whether the proposal covers artwork preparation, engineering review, fabrication, illumination components, finish, mounting hardware, packing, shipping, installation drawings, and site installation. If a line is unclear, treat it as an open question rather than assuming it is included.',
        'ISA terminology is helpful when a buyer, designer, and fabricator need to describe the same sign type. The commercial decision still depends on the actual drawing set and site brief.'
      ],
      bullets: ['Letter artwork and the production-ready file', 'Overall dimensions, individual letter proportions, and return depth', 'Face, return, trim, back, finish, and illumination requirements', 'Mounting surface, access, quantity, packing, destination, and installation responsibility']
    },
    {
      heading: 'Which project inputs change the quotation most?',
      paragraphs: ['The largest differences usually come from scope, not from a keyword such as “LED letters.” A single indoor logo, an exterior building sign, and a multi-location rollout can share a product name while requiring different drawings, packaging, coordination, and approval work. A buyer should provide enough detail for the supplier to identify those differences.'],
      rows: [
        { factor: 'Artwork and layout', first: 'Letter shapes, spacing, logo details, and readable proportions must be reviewed before fabrication.', second: 'A simple text line may require a different drawing and mounting approach than a detailed brand mark.' },
        { factor: 'Illumination', first: 'Front-lit, halo-lit, or non-illuminated routes change the face, back, wiring, and service discussion.', second: 'The quotation should state the intended visual effect and where power and access are coordinated.' },
        { factor: 'Finish and environment', first: 'Finish, exposure, cleaning access, and the background all influence the material and fabrication conversation.', second: 'Painted or coated routes still require a clear substrate, finish, edge, and maintenance specification.' },
        { factor: 'Delivery scope', first: 'Packing, shipping, drawings, and installation coordination should be listed separately.', second: 'A lower headline figure may simply exclude tasks another proposal includes.' },
      ],
      firstLabel: 'What to clarify',
      secondLabel: 'Why comparison matters',
    },
    {
      heading: 'How should buyers compare two proposals?',
      paragraphs: [
        'Use a scope comparison table with the same artwork, size, quantity, finish, lighting brief, mounting assumptions, destination, and delivery responsibility. Ask both suppliers to identify exclusions. This avoids choosing a quote that looks lower only because engineering, packing, installation drawings, or site coordination were not described.',
        'For accessibility-related signs or signs serving an accessible route, coordinate the sign type and placement with the project designer and the authority having jurisdiction. The U.S. Access Board references are useful public starting points, but a quotation page is not legal advice.'
      ],
      bullets: ['Confirm the same artwork and dimensions are being priced.', 'Ask for finish, lighting, power, and mounting assumptions in writing.', 'Separate manufacturing, packing, shipping, drawings, and installation.', 'Record the destination and any local approval or access constraints.']
    },
    {
      heading: 'What should you send to ZYD for a review?',
      paragraphs: ['Send the logo or artwork, approximate overall size, quantity, intended viewing distance, mounting surface, illumination preference, finish direction, site city/country, target timing, and destination. If some details are unknown, label them as open decisions. ZYD can then respond with the next technical questions instead of inventing a price from incomplete information.']
    },
  ],
  checklistTitle: 'Quotation preparation checklist',
  checklistIntro: 'This is a ZYD procurement checklist, not a price promise. It helps buyers request comparable proposals and keeps unknown inputs visible.',
  checklist: ['Artwork file and brand guidelines', 'Approximate dimensions, quantity, and viewing direction', 'Front-lit, halo-lit, non-illuminated, or undecided', 'Face/return/finish preference and mounting background', 'Site city/country, installation access, and destination', 'Required drawings, packing, shipping, and installation scope'],
  faqs: [
    { question: 'Can you give a price from the business name alone?', answer: 'No. The business name does not define the letter size, artwork, finish, lighting, mounting, quantity, delivery scope, or destination. Share the project brief so the quotation can be based on a stated scope.' },
    { question: 'Should I compare the cheapest headline number?', answer: 'Compare the same scope first. A proposal that excludes drawings, packing, shipping, or installation may not be comparable to one that lists those services.' },
    { question: 'What is the fastest way to start a quotation?', answer: 'Send the artwork, approximate size, quantity, lighting preference, finish direction, site location, and destination. Unknown items can be marked for clarification.' },
  ],
  sources: [
    { name: 'International Sign Association (ISA) — Glossary of Sign Terms and Definitions', url: 'https://signs.org/resources-training/signs101/glossary-of-sign-terms-and-definitions/', note: 'Public terminology reference for discussing sign types and project language.' },
    { name: 'U.S. Access Board — Americans with Disabilities Act (ADA)', url: 'https://www.access-board.gov/ada/', note: 'Official accessibility context; confirm the applicable jurisdiction and approval path.' },
    { name: 'U.S. Access Board — Chapter 7: Signs', url: 'https://www.access-board.gov/ada/guides/chapter-7-signs/', note: 'Official signs guidance; this article does not replace project code review.' },
  ],
  relatedLinks: [
    { href: '/products/custom-halo-lit-letters', label: 'See custom halo-lit letters' },
    { href: '/products/complete-signage-system', label: 'See complete signage systems' },
    { href: '/contact', label: 'Send project inputs' },
  ],
  asideTitle: 'Prepare a comparable brief',
  asideText: 'Share the artwork, approximate size, quantity, lighting preference, site, and destination. The open questions are part of the brief, not a reason to guess.',
};

export default function ChannelLettersCostGuide() {
  return <GuideArticle slug="how-much-do-custom-channel-letters-cost" {...guide} />;
}
