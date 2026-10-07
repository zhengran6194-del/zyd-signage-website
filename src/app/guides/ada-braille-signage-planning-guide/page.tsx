import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'ADA & Braille Signage: How to Plan an Accessible System',
  category: 'Accessibility Planning Guide',
  description: 'A planning framework for tactile, Braille, and wayfinding signage: what an accessibility review asks for, how the signs are specified, and which confirmations belong to the project and the local authority rather than the supplier.',
  updated: 'Oct 7, 2026',
  directAnswer: 'Accessible signage is a coordination requirement, not a product claim. Plan it by identifying which signs sit on an accessible route, then confirming for each one the required content, tactile or Braille elements, mounting height, contrast, and viewing position against the standard that applies where the building stands. That determination belongs to the project design team and the authority having jurisdiction; the manufacturer builds to the confirmed specification, and no supplier can decide the applicable code for a given site.',
  sections: [
    {
      heading: 'What counts as accessible signage?',
      paragraphs: [
        'Accessible signage is the subset of a sign system that carries information people need in order to use a building independently. It usually spans three jobs: identifying a space, directing someone along a route, and giving instructions that must be readable at a defined position.',
        'The signs themselves are ordinary signage in construction terms. What changes is the specification: the information is expressed so it can be perceived by touch as well as sight, and the sign is placed where a person who needs it will actually stand.',
        'Because those requirements are set by law in some jurisdictions and by client or consultant standards in others, the planning conversation has to start with "which framework applies here", not with "which sign type do you want".',
      ],
      bullets: [
        'Permanent room and space identification, including rooms with a specific function',
        'Directional signs along an accessible route and at decision points',
        'Informational signs, such as instructions that must be read at a fixed position',
        'Tactile and raised characters, Braille, and contrast between text and background where required',
      ],
    },
    {
      heading: 'Which inputs does an accessibility review normally ask for?',
      paragraphs: [
        'A review works from the building, not from a catalogue. The table below lists the inputs that decide the specification. Each one has to come from the project team or the site survey; none of them can be assumed by the sign maker.',
      ],
      rows: [
        {
          factor: 'Applicable framework',
          first: 'Whether the site is governed by a national accessibility standard, a local amendment, or a client standard.',
          second: 'Confirm with the project design team and the authority having jurisdiction before the sign schedule is drawn.',
        },
        {
          factor: 'Sign location and route',
          first: 'Which signs sit on an accessible route, at entrances, at decision points, or beside doors and facilities.',
          second: 'Confirm against the floor plan and the visitor journey, including approach direction.',
        },
        {
          factor: 'Mounting height and clear space',
          first: 'Where the sign centre line falls relative to the floor, and whether the approach space is unobstructed.',
          second: 'Confirm by site survey; small changes in floor finish or skirting can move the usable band.',
        },
        {
          factor: 'Reading position',
          first: 'Whether the sign is read standing close to the face, from a distance, or while moving.',
          second: 'Confirm viewing distance, viewing angle, and whether the user is walking or waiting.',
        },
        {
          factor: 'Content',
          first: 'The exact words, numbers, pictograms, and languages that must appear.',
          second: 'Confirm the final text and its revision control, since tactile content is manufactured from it.',
        },
        {
          factor: 'Finish and contrast',
          first: 'How the text, background, and any mounting plate relate to each other visually and by touch.',
          second: 'Confirm contrast direction, surface sheen, and whether a matte or non-reflective finish is expected.',
        },
      ],
      firstLabel: 'Input',
      secondLabel: 'How it is confirmed',
    },
    {
      heading: 'How are tactile characters and Braille specified?',
      paragraphs: [
        'Tactile characters and Braille are manufactured from the confirmed text, so the specification has to settle content, size, spacing, and placement before production. Those parameters vary between standards and between building types, which is why the guide does not quote a universal number for character height, stroke, or spacing.',
        'What a buyer can do is make the sign readable as an object: keep the tactile elements clear of the frame edge, avoid finishes that hide the raised profile, and check that the mounting method does not interfere with the reading surface.',
        'Where Braille is required, its placement relative to the corresponding text is part of the standard rather than a design preference. If the requirement is unclear, record it as an open item on the sign schedule instead of alternating between options during production.',
      ],
      bullets: [
        'Freeze the text before tactile artwork starts; later wording edits mean new tooling or new plates',
        'Confirm whether raised characters, Braille, or both are required for each sign type',
        'Agree the finish on the reading surface so the raised profile stays perceptible',
        'Plan the mounting detail so fixings do not intrude on the tactile area',
      ],
    },
    {
      heading: 'How does accessible signage fit into a wayfinding system?',
      paragraphs: [
        'Accessible signs work best when they are planned as part of one route rather than as isolated plates added late. The sequence that tends to hold up: arrival and entrance identification, orientation at the main decision point, direction along the route, identification at each destination, and instructions wherever a fixed reading position is needed.',
        'Treating them as one system also avoids the common duplication where a tactile sign repeats information that a separate directional sign already gives, or contradicts it after a room change. A single sign schedule keeps message, location, and mounting consistent across both.',
        'For healthcare, education, transport, and public buildings, this is often the difference between an installation that reads well on a checklist and one a visitor can actually follow. That judgement again sits with the project team, but the schedule is the tool that makes it checkable.',
      ],
      bullets: [
        'Start from the visitor journey and mark the points where a decision is made',
        'Assign each destination both a directional sign and, where required, an identification sign',
        'Keep one schedule covering tactile content, Braille, mounting, and finish',
        'Re-check the schedule after any floor plan or room-naming change',
      ],
    },
    {
      heading: 'What should be confirmed before production starts?',
      paragraphs: [
        'Most accessibility-related rework traces back to information that was still moving when fabrication began. The confirmations below are the ones worth freezing first, because each of them is expensive to change once plates and mountings exist.',
      ],
      bullets: [
        'The framework that applies to the site, confirmed in writing by the project team or authority',
        'Final text, room numbering, pictograms, and language set, with an agreed revision date',
        'Sign locations cross-checked against the current floor plan and the accessible route',
        'Mounting heights measured on site, including the finished floor level',
        'Contrast, finish, and surface treatment decisions for each sign type',
        'Sample or first-article review before the full run, where the project calls for it',
        'Destination, quantity, packing, and installation responsibility',
      ],
    },
    {
      heading: 'What can a signage manufacturer confirm, and what can it not?',
      paragraphs: [
        'A factory-direct signage manufacturer can confirm what it builds: the construction of the sign, the material and finish selected for the specified environment, the fabrication method for raised characters, how the Braille is applied, and how the unit mounts. These are production facts that can be inspected and documented.',
        'What it cannot do is determine which accessibility framework governs a building, decide a mounting height for a location it has not surveyed, or confirm that a completed installation satisfies a code that another party administers. A supplier that offers to decide those questions is substituting an opinion for a decision the project team and the authority are responsible for. The practical division of labour is therefore a clear specification from the project side, and a documented build from the manufacturer, with the authority having jurisdiction making the final call.',
      ],
    },
  ],
  checklistTitle: 'Accessible signage briefing checklist',
  checklistIntro: 'Use this list to assemble the project inputs an accessibility-related signage schedule depends on. Anything left open should be marked as open rather than assumed.',
  checklist: [
    'The accessibility framework that applies, and who confirms it',
    'Floor plans showing entrances, accessible routes, decision points, and destinations',
    'The sign schedule: location, sign type, and message for every item',
    'Final text, numbering, pictograms, and languages, with a revision reference',
    'Which items require raised characters, Braille, or both',
    'Mounting heights and clear approach space, measured on site',
    'Contrast, finish, and reading-surface treatment per sign type',
    'Quantities, destination, packing, and installation responsibility',
  ],
  faqs: [
    {
      question: 'Does ADA signage apply to my project?',
      answer: 'That depends on where the building stands, what it is used for, and which authority administers it. The ADA is one national framework, and other countries, states, and clients apply their own standards or amendments. Confirm the applicable requirement with the project design team and the authority having jurisdiction; it is not something a signage supplier can decide for a site.',
    },
    {
      question: 'What is the difference between tactile signage and Braille signage?',
      answer: 'Tactile signage uses raised characters and symbols that can be read by touch. Braille is a separate raised dot system applied alongside or beneath the corresponding text. Depending on the standard and the sign type, a project may require one, the other, or both, and the mounting position of each is part of the specification.',
    },
    {
      question: 'Can you supply signs with Braille and raised characters?',
      answer: 'Yes, when the project specification defines the content, the size and placement parameters, the mounting height, and the finish. We fabricate to the confirmed schedule. The requirement itself comes from the framework that applies to the building, so we ask for that confirmation before tooling or production begins.',
    },
    {
      question: 'Where should accessible signs be mounted?',
      answer: 'The mounting height, location, and approach space are set by the standard that applies and by the site condition, including finished floor level and any obstructions. They should be measured on site rather than scaled from a drawing, because small construction differences change where the sign sits relative to the person reading it.',
    },
    {
      question: 'What should I send to get an accessible signage quotation?',
      answer: 'Send the floor plan and the sign schedule, the final text and numbering, which items need raised characters or Braille, the intended mounting surfaces and heights, the finish direction, quantities, destination, and installation responsibility. Open items can be listed for clarification instead of being assumed.',
    },
  ],
  sources: [
    { name: 'U.S. Access Board — Americans with Disabilities Act (ADA)', url: 'https://www.access-board.gov/ada/', note: 'Official accessibility context for projects under that framework; confirm the applicable local requirement.' },
    { name: 'U.S. Access Board — Chapter 7: Signs', url: 'https://www.access-board.gov/ada/guides/chapter-7-signs/', note: 'Public guidance on sign requirements; the authority having jurisdiction remains decisive.' },
    { name: 'International Sign Association (ISA) — Glossary of Sign Terms and Definitions', url: 'https://signs.org/resources-training/signs101/glossary-of-sign-terms-and-definitions/', note: 'Terminology reference for aligning sign-type and component language.' },
  ],
  relatedLinks: [
    { href: '/products/architectural-wayfinding-system', label: 'See wayfinding systems' },
    { href: '/products/medical-care-signage', label: 'See healthcare signage' },
    { href: '/guides/how-to-choose-the-right-sign-for-your-business', label: 'Start with the sign-selection guide' },
    { href: '/contact', label: 'Send your sign schedule' },
  ],
  asideTitle: 'Plan the schedule first',
  asideText: 'Share the floor plan, the accessible route, and the sign schedule with the text that must appear. The framework that applies is confirmed by the project team and the authority; the build then follows the frozen schedule.',
};

export default function AdaBrailleSignagePlanningGuide() {
  return <GuideArticle slug="ada-braille-signage-planning-guide" {...guide} />;
}
