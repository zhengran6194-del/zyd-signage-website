import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'Hospital Wayfinding Signage Planning Guide for Contractors',
  category: 'Healthcare Wayfinding Planning',
  description: 'A practical planning guide for coordinating hospital arrival signs, directories, department identification and room signs from one visitor journey.',
  updated: 'Nov 19, 2026',
  directAnswer: 'Plan hospital wayfinding signage as a continuous journey: help visitors identify the campus and entrance, choose a route through the building, find a department, then confirm the destination at the room. Start with the site and floor plans, a consistent destination list and the project team’s accessibility requirements; use these to build a coordinated sign schedule before requesting a quotation.',
  introParagraphs: [
    'This guide is for contractors, facility teams, designers and signage buyers coordinating a healthcare project. Every hospital has a different layout and operating model, so treat the examples as planning prompts and confirm the final requirements with the project’s design team and local authority.',
  ],
  heroImage: {
    src: '/assets/images/guides/wayfinding-levels-clinic-door.jpg',
    alt: 'Clinic door with a room identification sign beside the entrance',
    caption: 'Room identification is the final confirmation in a visitor’s route through a healthcare facility.',
    width: 1080,
    height: 720,
  },
  showContents: true,
  contactHref: '/contact?product=medical',
  asideButtonLabel: 'DISCUSS A HOSPITAL SIGNAGE PROJECT',
  whatsappLabel: 'ASK ABOUT A HEALTHCARE SIGNAGE BRIEF',
  whatsappMessage: 'Hi Aaron, I am planning hospital wayfinding signage. I can share the site or floor plans, destination list, sign types and quantities for a project review.',
  sections: [
    {
      heading: '1. Map the visitor journey before selecting signs',
      paragraphs: [
        'List the main journeys people make through the site. A visitor arriving for an outpatient appointment may need a different route from someone visiting an inpatient ward, diagnostic department or pharmacy. Staff, deliveries and service access may need separate directions. Use the journeys that apply to the facility rather than copying a generic sign list.',
        'Walk each route from the site approach to the final destination. Mark where a person must recognize an entrance, choose between corridors or lifts, confirm a department, or identify a room. These decision points show where information is needed and where an existing sign could be missed.',
      ],
      bullets: [
        'Campus, parking and building arrival points',
        'Main entrances, reception and lobby directories',
        'Lift, stair and corridor decision points',
        'Department entrances, clinic rooms and public facilities',
        'Staff-only, service and emergency routes where the project requires them',
      ],
    },
    {
      heading: '2. Keep destinations and sign messages consistent',
      paragraphs: [
        'Create one approved list of building, floor, department and room names. Use the same destination wording in directories, directional panels, maps and room identification. If a department uses an official name and a familiar short name, agree which one appears on the signs before artwork is prepared.',
        'A directory helps visitors choose a destination; a directional sign points them toward it; a room or department sign confirms arrival. Separating these roles makes the system easier to scan and makes it clearer which information needs updating when a department moves.',
      ],
      columns: {
        headers: ['Sign group', 'Planning question', 'Typical project input'],
        rows: [
          ['Arrival and building identification', 'Can visitors recognize the correct site and entrance?', 'Site plan, approach photos, building names and entrance locations'],
          ['Directories and floor indexes', 'Can visitors choose a floor or department before moving on?', 'Approved destination list, floor plans and directory location'],
          ['Directional signs', 'Is each instruction placed before the route decision?', 'Route plan, decision points, lift and stair locations'],
          ['Room and department signs', 'Can visitors confirm they reached the intended destination?', 'Room numbers, department names and mounting locations'],
        ],
      },
    },
    {
      heading: '3. Build a sign schedule from the plans',
      paragraphs: [
        'A coordinated schedule connects each sign to a real location and approved message. Assign a reference ID and record the sign type, floor or zone, message, quantity, approximate dimensions, mounting surface and any required graphic or language treatment. Mark unresolved items for the design team instead of guessing.',
        'Use plans to locate signs and site photographs to clarify existing finishes, obstructions and mounting conditions. For renovation projects, identify which existing frames or panels may remain, which will be replaced and how new signs will align with the current system.',
      ],
      bullets: [
        'Site plan and current floor plans with sign locations',
        'Approved names, room numbers and directory content',
        'Sign type, reference ID, quantity and estimated dimensions',
        'Mounting surface photographs and known fixing constraints',
        'Brand standards, material preferences and cleaning requirements',
        'Accessibility and language requirements supplied by the project team',
      ],
    },
    {
      heading: '4. Coordinate accessibility, maintenance and privacy',
      paragraphs: [
        'Include the accessibility requirements confirmed for the specific project in the sign schedule and artwork review. The design team should coordinate relevant tactile, Braille, contrast, placement and language requirements with the local accessibility professional and authority. Requirements vary by jurisdiction and application, so this guide does not replace that review.',
        'Choose surfaces and mounting details around the facility’s routine cleaning and maintenance practices. Where department names or room assignments are likely to change, ask whether a replaceable insert or updateable directory format suits the facility. Keep personal or patient-specific information out of public wayfinding messages.',
      ],
    },
    {
      heading: '5. Confirm fabrication and installation responsibilities',
      paragraphs: [
        'Before production, confirm that the approved drawings match the sign schedule and site conditions. Identify who supplies mounting templates, fixings, wiring information and any required samples. Ask the local installer to review mounting surfaces and access before the final fixing details are approved.',
        'Separate manufacturing and delivery from site work in the project scope. A factory quotation may cover signs and specified accessories, while site survey, permits, electrical connections, access equipment and installation may require separate parties. Record inclusions and exclusions so the hospital team can compare quotations on the same basis.',
      ],
    },
  ],
  checklistTitle: 'Hospital wayfinding signage project brief',
  checklistIntro: 'Share the available project information first. The team can identify missing decisions before drawings and quotation scope are finalized.',
  checklist: [
    'Site plan and current floor plans with building and department names',
    'Destination list, room numbers and directory content owner',
    'Sign locations, types, approximate sizes and quantities',
    'Mounting surface photographs and known access constraints',
    'Brand standards, preferred materials and cleaning routine',
    'Accessibility or language requirements confirmed by the project team',
    'Delivery destination, target schedule and local installation contact',
  ],
  faqs: [
    {
      question: 'What signs are commonly included in a hospital wayfinding system?',
      answer: 'A project may include site and building identification, parking and entrance directions, lobby or floor directories, corridor signs, department identification, room signs and public facility signs. The sign list should follow the facility’s visitor journeys and operating needs.',
    },
    {
      question: 'What should a contractor send to a hospital signage supplier?',
      answer: 'Start with the site and floor plans, approved destination names and room numbers, the sign schedule or estimated quantities, brand standards, mounting photos, accessibility requirements supplied by the project team and delivery destination. Open details can be identified before the quotation is finalized.',
    },
    {
      question: 'How can a hospital keep directories current when departments change?',
      answer: 'Assign an owner for directory content and agree an update process. Depending on the facility and sign design, replaceable panels or another updateable format may reduce the need to replace the full directory when a department changes.',
    },
    {
      question: 'Who confirms accessibility requirements for hospital signs?',
      answer: 'The project design team should confirm the applicable requirements with the local accessibility professional and authority for the facility and jurisdiction. A signage supplier can manufacture to the approved brief but should not substitute for that project review.',
    },
    {
      question: 'Does a signage factory quotation include hospital installation?',
      answer: 'Not unless the written quotation and contract state that it does. Confirm separately who handles site survey, approvals, unloading, access equipment, mounting, electrical connection and installation.',
    },
  ],
  sources: [],
  relatedLinks: [
    { href: '/products/medical-care-signage', label: 'See healthcare and specialty signage' },
    { href: '/products/architectural-wayfinding-system', label: 'See architectural wayfinding systems' },
    { href: '/guides/wayfinding-signage-levels', label: 'Review the three wayfinding levels' },
    { href: '/guides/ada-braille-signage-planning-guide', label: 'Review accessible signage planning inputs' },
    { href: '/contact?product=medical', label: 'Send a hospital signage brief' },
  ],
  asideTitle: 'Coordinate the hospital sign schedule',
  asideText: 'Share the plans, destination list, sign types, quantities, mounting photos and delivery location for a project-specific review.',
};

export default function HospitalWayfindingSignageGuide() {
  return <GuideArticle slug="hospital-wayfinding-signage" {...guide} />;
}
