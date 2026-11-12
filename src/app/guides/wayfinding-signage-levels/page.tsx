import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'Primary, Secondary and Tertiary Wayfinding: How the Three Sign Levels Work',
  category: 'Wayfinding Systems',
  description: 'How primary, secondary and tertiary wayfinding work together, where each sign belongs at a decision point, and how the three levels change by building type.',
  updated: 'Nov 12, 2026',
  directAnswer: 'Wayfinding signage is organised in three levels. Primary wayfinding brings people to the building from the street or the site entrance, secondary wayfinding orients them once they are inside, and tertiary wayfinding confirms the exact room or door. Each level answers a different question at a different distance, and a system only works when all three levels are present and placed where people actually have to make a decision.',
  introParagraphs: [
    'Walk into an unfamiliar building and two people will have the same experience: one finds the meeting room in ten minutes, the other circles the lobby three times. The difference is rarely the number of signs. It is whether those signs are organised in levels.',
    'This guide sets out the three-level framework once, in the form we use when planning wayfinding for offices, hospitals, schools and industrial parks. The building type changes the signs; it does not change the logic.',
  ],
  sections: [
    {
      heading: '1. Primary wayfinding: help people find the building',
      paragraphs: [
        'Primary wayfinding answers "where is the place I am going?" before anyone reaches a door.',
        'Typical primary elements:',
      ],
      bullets: [
        'Rooftop illuminated letters and building identification signs',
        'Monument signs, entrance signs and entrance pylons',
        'Site master plans at the gate, and car park entrance signs',
      ],
      closingParagraphs: [
        'The test is simple. Stand across the road, or outside the site gate, and look. If the building cannot be identified from there, the primary level is missing, and no amount of detail inside will help, because visitors never get that far.',
        'That is why primary wayfinding is specified by size, height and luminance rather than by finish. Letter height, pylon position and illumination level are calculated back from the sight distance of drivers and pedestrians, and from the approach routes the site actually has.',
      ],
      images: [
        { src: '/assets/images/guides/wayfinding-signage-levels-hero.jpg', alt: 'Entrance landscape letters spelling a park welcome sign on a grass bank beside a site road', caption: 'Primary wayfinding at the site edge: entrance landscape letters read from the approach road.', width: 1080, height: 720 },
        { src: '/assets/images/guides/wayfinding-signage-levels-level-1.jpg', alt: 'Illuminated pylon sign at night listing building tenants above a mall entrance', caption: 'An entrance pylon carries building identity and tenant names before a visitor reaches the door.', width: 1080, height: 1440 },
      ],
    },
    {
      heading: '2. Secondary wayfinding: stop people getting lost inside',
      paragraphs: [
        'Once someone is through the door, primary signage has done its job and secondary signage takes over. It answers two questions: where am I now, and which way do I go?',
        'Typical secondary elements:',
      ],
      bullets: [
        'Lobby directory boards showing the whole building',
        'Floor index boards: what is on this floor, and what is on the others',
        'Floor identification at lift lobbies and stair cores',
        'Overhead and wall-mounted directional signs along corridors',
      ],
      closingParagraphs: [
        'The rule that matters here is placement at decision points. A decision point is any place where a person has to choose a direction: the lobby entrance, the lift lobby, a corridor junction, the turn of a stair. A sign is only effective when it is in front of someone who is hesitating.',
        'This is the most common fault we see in existing buildings: a neat row of signs in the middle of a corridor, and nothing at the junction where people actually stop.',
      ],
      images: [
        { src: '/assets/images/guides/wayfinding-signage-levels-level-2-directory.jpg', alt: 'Floor index board showing L3 above a list of levels in a shopping centre atrium', caption: 'A floor index board tells a visitor which floor they are on and what the other levels hold.', width: 1080, height: 810 },
        { src: '/assets/images/guides/wayfinding-signage-levels-level-2-directional.jpg', alt: 'Overhead directional sign with arrows, escalator symbol, L2 marker and accessible facility icons', caption: 'Directional signs belong at junctions and lift lobbies, where a visitor has to choose a direction.', width: 1080, height: 810 },
      ],
    },
    {
      heading: '3. Tertiary wayfinding: confirm the door',
      paragraphs: [
        'By the third level the visitor is on the right floor and needs one thing: "this is the door."',
        'Typical tertiary elements:',
      ],
      bullets: [
        'Room number plates and department plates',
        'Function signs for restrooms, pantries and plant rooms',
        'Safety and warning signs',
        'Accessible signage',
      ],
      closingParagraphs: [
        'Tertiary signs are the easiest to treat as an afterthought, yet they sit closest to the person. If the first two levels are excellent and the room number cannot be found, the experience still fails at the last metre.',
        'What tertiary signage needs is consistency rather than variety: the same type size, mounting height, material and position on every door, so that a visitor who has found one room can find the next one the same way.',
      ],
      images: [
        { src: '/assets/images/guides/wayfinding-signage-levels-level-3.jpg', alt: 'Wall-mounted restroom pictogram signs in green and white beside a corridor door', caption: 'Tertiary signage confirms the door: function signs repeat at one consistent height and size.', width: 1080, height: 810 },
      ],
    },
    {
      heading: '4. Why a building full of signs can still be confusing',
      paragraphs: [
        'Once the levels are separated, the usual failures are easy to name.',
      ],
      bullets: [
        'A missing level. A generous primary sign, and a printed sheet taped to the door at level three. People are brought to the building and then abandoned.',
        'A sign at the wrong level. A secondary sign that belongs at a junction mounted mid-corridor; a primary sign that belongs on the roof squeezed above a doorway.',
        'A broken chain. One level disappears at the point where it is needed, such as a lift with no floor index, so the doors open and the visitor has no idea whether to turn left or right.',
      ],
      closingParagraphs: [
        'Buildings with this problem share one characteristic: each sign looks fine on its own, and the route falls apart when you walk it. A wayfinding system is a chain, not a collection.',
      ],
    },
    {
      heading: '5. The same framework in any building type',
      paragraphs: [],
      columns: {
        headers: ['Building type', 'Level 1', 'Level 2', 'Level 3'],
        rows: [
          ['Office', 'Rooftop letters, entrance identity', 'Lobby directory, lift lobby index', 'Room and department plates'],
          ['Hospital', 'Campus and building identification', 'Department and floor index', 'Consulting room plates'],
          ['School', 'Gate identity, building names', 'Teaching building directory', 'Classroom plates'],
          ['Industrial park', 'Monument or pylon at the entrance', 'Zoning and workshop direction', 'Workshop and unit plates'],
        ],
      },
      closingParagraphs: [
        'What changes is the sign type and the quantity. What stays is the sequence: find, orient, arrive.',
        'A practical way to review a wayfinding proposal is to count twice. First count whether all three levels are present, then count whether every decision point is covered. If both counts hold, the proposal is probably sound. If either falls short, better renderings will not fix it.',
      ],
    },
    {
      heading: 'Planning wayfinding for a project?',
      paragraphs: [
        'Dalian ZhiYuDao Signage & Tech. Co.Ltd, also known as ZYD SIGN, manufactures and supplies wayfinding systems, illuminated letters and metal signage from Dalian, China.',
        'If you have the building type and a floor plan, send them and we will lay out a point schedule against the three-level framework: which identities belong at level one, which routes need signs at which junction, and which door plates repeat at level three.',
      ],
    },
  ],
  checklistTitle: 'Three-level wayfinding review',
  checklistIntro: 'Use this list to test a proposal or an existing building against the find, orient, arrive sequence.',
  checklist: [
    'Level one identity can be read from the road or the site gate.',
    'Every level is present, with no gap between the building exterior and the door.',
    'Signs sit at decision points: lobby entrances, lift lobbies, corridor junctions and stair turns.',
    'Floor index boards appear at lift lobbies and stair cores, not only in the main lobby.',
    'Door plates repeat at one type size, mounting height, material and position.',
    'The proposal is checked by walking the route, not by reviewing individual sign elevations.',
  ],
  faqs: [
    { question: 'What are the three levels of wayfinding signage?', answer: 'Primary wayfinding identifies the building or site from a distance, secondary wayfinding directs people inside the building at decision points, and tertiary wayfinding identifies a specific room, door or function.' },
    { question: 'What is the difference between primary and secondary signage?', answer: 'Primary signage is read before arrival, from the road or the site entrance, and is sized for distance. Secondary signage is read after entry, at junctions, lifts and stair cores, and is sized for someone standing a few metres away who has to choose a direction.' },
    { question: 'Where should directional signs be placed?', answer: 'At decision points: lobby entrances, lift lobbies, corridor junctions and stair turns. Signs placed along the middle of a corridor, away from where people stop to decide, add visual clutter without helping anyone navigate.' },
    { question: 'How many signs does a wayfinding system need?', answer: 'The number follows the building, not a ratio. The reliable test is coverage: every level present, and every decision point covered. A small building with three complete levels works better than a large one with a single crowded level.' },
    { question: 'Do hospitals and offices need different wayfinding?', answer: 'The level structure is the same. What changes is the content and the density: hospitals need department and clinic indexing with clearer repetition, while offices usually carry more room numbering and fewer destination types.' },
    { question: 'Can an existing building add missing levels without replacing everything?', answer: 'Often yes. Missing levels, misplaced signs and broken chains can usually be corrected by adding or relocating the signs at the points where the route fails, and by bringing door plates to one consistent specification, before any wholesale replacement is considered.' },
  ],
  sources: [],
  relatedLinks: [
    { href: '/products/architectural-wayfinding-system', label: 'Architectural wayfinding systems' },
    { href: '/guides/complete-site-signage-procurement-checklist', label: 'Site signage procurement checklist' },
    { href: '/contact', label: 'Plan a three-level wayfinding system' },
  ],
  asideTitle: 'Count levels, then count decision points',
  asideText: 'ZYD SIGN, EST. 2006, plans and manufactures wayfinding systems from Dalian, China. Send the building type, floor plan and the routes visitors actually walk, and the point schedule can be laid out against the three levels before any sign type is chosen.',
};

export default function WayfindingSignageLevelsPage() {
  return <GuideArticle {...guide} slug="wayfinding-signage-levels" />;
}
