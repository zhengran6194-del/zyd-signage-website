import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'Wayfinding Signage Levels: Level 1, 2 & 3 Explained',
  category: 'Architectural Wayfinding Guide',
  description: 'A practical framework for organizing building wayfinding signs by the visitor journey: identify the site, choose a route, then find the destination.',
  updated: 'Nov 12, 2026',
  directAnswer: 'Level 1 wayfinding signs identify the site or building from the approach. Level 2 signs guide people inside and at route choices, such as lobbies, elevators and corridors. Level 3 signs identify the destination itself, such as a room, clinic or department. Together they form a continuous route from arrival to the right door.',
  introParagraphs: [
    'Walk into a building you have never visited and you may reach a meeting room in minutes—or circle the lobby without knowing which way to turn. The difference is often not the number of signs. It is whether each sign answers the right question at the right point in the journey.',
    'This three-level wayfinding signage framework is useful for offices, hospitals, schools, campuses and industrial parks. Treat it as a planning model rather than a universal code: project teams must confirm local accessibility, life-safety and approval requirements for their site.',
  ],
  heroImage: {
    src: '/assets/images/guides/wayfinding-levels-building-identity.jpg',
    alt: 'Illuminated building name mounted high on a commercial building facade and visible from outside',
    caption: 'Level 1 signage helps visitors recognize the right site or building as they approach.',
    width: 1080,
    height: 720,
  },
  showContents: true,
  contactHref: '/contact?product=wayfinding',
  asideButtonLabel: 'DISCUSS A WAYFINDING PROJECT',
  whatsappLabel: 'ASK AARON ABOUT YOUR SITE',
  whatsappMessage: 'Hi Aaron, I am planning a building wayfinding signage system. Can you help me review the visitor journey and sign hierarchy? I can share the site plan, floor plans and destination list.',
  sections: [
    {
      heading: '1. What is Level 1 wayfinding signage?',
      paragraphs: [
        'Level 1 signs answer: “Am I at the right place, and where is the building I need?” They work from the site approach, street, driveway, campus edge or parking entrance. Their job is to make the destination easy to recognize before a visitor reaches the front door.',
        'Typical examples include a building name on the facade, a campus or park entrance marker, an external site directory, and a sign that identifies the main visitor entrance. The design should be legible in its real viewing conditions; visibility depends on distance, approach direction, lighting, landscaping and surrounding buildings.',
        'At this level, clarity and recognition matter more than small details. A visitor should be able to distinguish the correct building or entrance without first reading a dense directory.',
      ],
      images: [
        { src: '/assets/images/guides/wayfinding-levels-campus-gateway.jpg', alt: 'Traditional university entrance gate identifying the campus from the approach', width: 600, height: 400, caption: 'A campus gateway is a Level 1 identification point.' },
        { src: '/assets/images/guides/wayfinding-levels-campus-complex.jpg', alt: 'Large campus complex with several connected buildings and a central visitor approach', width: 600, height: 280, caption: 'Multi-building sites need clear identification before visitors choose a building.' },
        { src: '/assets/images/guides/wayfinding-levels-office-building.jpg', alt: 'Modern office building with a clearly visible primary facade and visitor entrance', width: 1080, height: 720, caption: 'Facade identification and the visitor entrance should support the same arrival route.' },
      ],
    },
    {
      heading: '2. What is Level 2 wayfinding signage?',
      paragraphs: [
        'After someone enters the site or building, Level 2 signs answer: “Where am I now, and which way should I go?” Place them at decision points—the lobby, elevator and stair areas, corridor junctions, and other places where a visitor must choose a direction.',
        'Typical examples include a lobby directory, a floor index, elevator and stair identification, overhead direction signs, and corridor arrows. A sign in the wrong place can be easy to miss even when its wording is correct. Visitors need the instruction before they make the turn, not after they have passed it.',
        'Use consistent names and destinations from one sign to the next. If a directory says “Conference Centre” but the corridor sign says “Meeting Suite,” visitors may not know those labels lead to the same place.',
      ],
      images: [
        { src: '/assets/images/guides/wayfinding-levels-campus-directory.jpg', alt: 'Outdoor campus directory sign with a site map and directional information', width: 600, height: 450, caption: 'A map or directory is useful only when visitors can find it before choosing a route. Pictured brand content is illustrative and does not imply a client relationship.' },
        { src: '/assets/images/guides/wayfinding-levels-interior-signage.jpg', alt: 'Interior facility with wall-mounted identification and directional signage', width: 600, height: 450, caption: 'Interior signs should continue the same destination names and visual language.' },
      ],
    },
    {
      heading: '3. What is Level 3 wayfinding signage?',
      paragraphs: [
        'Level 3 signs answer: “Is this the room, department or facility I came to find?” They sit closest to the destination and confirm arrival. Examples include room number signs, clinic and department signs, restroom identification, staff-only or equipment-room labels, and other functional or warning signs.',
        'Level 3 is often the easiest layer to overlook because an individual room sign seems small. Yet a visitor who has followed every direction correctly can still lose confidence if the final door is unmarked, the number is hidden, or the naming differs from the directory.',
        'Keep room names, numbers, mounting positions and sign formats consistent across a floor. For tactile, Braille or other accessibility features, confirm the applicable requirements with the project’s local accessibility professional and authority before artwork approval.',
      ],
      images: [
        { src: '/assets/images/guides/wayfinding-levels-clinic-door.jpg', alt: 'Clinic door with a room identification sign beside the entrance', width: 1080, height: 720, caption: 'A destination sign confirms the visitor has reached the correct room or department.' },
        { src: '/assets/images/guides/wayfinding-levels-room-numbers.jpg', alt: 'A consistent series of room number signs mounted beside doors along a corridor', width: 1080, height: 720, caption: 'Consistent numbering and placement make room identification easier along a corridor.' },
      ],
    },
    {
      heading: '4. Why do people still get lost in a signed building?',
      paragraphs: [
        'A wayfinding system can contain many attractive signs and still fail if the visitor journey has gaps. Check these common problems during planning and on-site review:',
      ],
      bullets: [
        'A missing level: the visitor is directed to the floor but cannot identify the room at the end of the route.',
        'A sign at the wrong decision point: the instruction is mounted after the corridor turn, or a directory is placed where visitors cannot pause to read it.',
        'A broken sequence: a destination appears on the lobby directory but disappears from later directional signs.',
        'Inconsistent names or symbols: the same destination is called by different names on plans, directories and doors.',
        'Visual clutter: too many messages compete, so the primary direction is difficult to scan.',
      ],
      closingParagraphs: [
        'Review the route as a chain: recognize the site, enter the right building, choose a direction at each junction, then confirm the destination at the door. A weak link can undo the work of all the signs before it.',
      ],
    },
    {
      heading: '5. How does the three-level framework change by building type?',
      paragraphs: [
        'The sign types and quantities vary with the building. The visitor logic stays similar: identify the destination, make each route choice clear, and confirm arrival.',
      ],
      columns: {
        headers: ['Building type', 'Level 1: identify the site', 'Level 2: guide the route', 'Level 3: confirm the destination'],
        rows: [
          ['Office building', 'Facade name and main entrance', 'Lobby directory, floor index and corridor directions', 'Office, meeting-room and facility signs'],
          ['Hospital or clinic', 'Campus entrance and building identification', 'Department directories, floor and clinic directions', 'Room, clinic, restroom and service signs'],
          ['School or campus', 'Campus gateway and building name', 'Campus map, building and floor directories', 'Classroom, office and facility signs'],
          ['Industrial park', 'Park gateway and site identification', 'Zone, road and building directions', 'Workshop, department and safety identification'],
        ],
      },
      closingParagraphs: [
        'For healthcare projects, connect the interior room and department signs with the wider hospital navigation plan. Our related medical signage page covers coordinated hospital and clinic sign types.',
      ],
    },
    {
      heading: '6. What should a project team prepare before designing wayfinding signs?',
      paragraphs: [
        'Start with the visitor journey and the names people will actually look for. A manufacturer or design team can then map those destinations to sign locations and review the sign family with the project team.',
      ],
      bullets: [
        'A site plan showing entrances, parking, buildings and the main visitor routes.',
        'Floor plans with corridor junctions, elevators, stairs, departments and room numbers.',
        'A verified destination list with consistent names, departments and abbreviations.',
        'The main visitor groups and routes, including first-time visitors and people with accessibility needs.',
        'Brand guidelines, preferred materials, illumination requirements and environmental conditions.',
        'Local accessibility, life-safety, landlord and permitting requirements confirmed by the responsible project professionals.',
      ],
      closingParagraphs: [
        'Mark unknown details instead of guessing. The destination list, sign locations, mounting conditions and final wording should be reviewed together before production drawings are approved.',
      ],
    },
  ],
  checklistTitle: 'A simple wayfinding hierarchy review',
  checklistIntro: 'Walk the route as a first-time visitor and check that each question is answered in order:',
  checklist: [
    'Can I recognize the right site or building before I reach the entrance?',
    'Can I choose the correct route at every lobby, elevator and corridor decision point?',
    'Can I confirm the destination at the correct room, clinic or department door?',
    'Are destination names, arrows, numbering and sign placement consistent throughout?',
    'Have local accessibility, safety and approval requirements been reviewed by the responsible team?',
  ],
  faqs: [
    { question: 'What are Level 1, Level 2 and Level 3 wayfinding signs?', answer: 'Level 1 signs identify a site or building from the approach. Level 2 signs direct visitors inside at lobbies and route choices. Level 3 signs identify the final room, department or facility.' },
    { question: 'Where should Level 2 directional signs be placed?', answer: 'Place Level 2 directions at decision points such as entrances, lobby directories, elevator and stair areas, corridor junctions and turns—early enough for visitors to choose the correct route.' },
    { question: 'Are the three wayfinding levels a universal standard?', answer: 'They are a practical planning framework used to organize the visitor journey, not a substitute for local codes or project requirements. Confirm accessibility, life-safety and approval criteria with the responsible local professionals.' },
    { question: 'What information is needed to plan a building wayfinding system?', answer: 'Prepare a site plan, floor plans, entrances and routes, a verified destination list, visitor needs, brand guidelines, sign location conditions and applicable local requirements.' },
  ],
  sources: [
    { name: 'Original Chinese article shared by the project owner', url: 'https://mp.weixin.qq.com/s/buxVaIP3_TaCDUQLBhtE9g', note: 'The English guide adapts the supplied article structure and supplied example images.' },
  ],
  relatedLinks: [
    { href: '/products/architectural-wayfinding-system', label: 'Architectural wayfinding signage systems' },
    { href: '/products/medical-care-signage', label: 'Coordinated medical and hospital signage' },
    { href: '/guides/ada-braille-signage-planning-guide', label: 'Plan tactile and Braille signage with accessibility review' },
    { href: '/case-studies/dalian-water-plaza-wayfinding-signage', label: 'See a wayfinding project across exterior and interior spaces' },
  ],
  asideTitle: 'Planning a building wayfinding system?',
  asideText: 'Share the site plan, floor plans and destination list with Aaron to discuss the sign hierarchy and project scope. MOQ 1 set; production timing and delivery are confirmed against the approved project drawings and quotation.',
};

export default function Page() {
  return <GuideArticle slug="wayfinding-signage-levels" {...guide} />;
}
