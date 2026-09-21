import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'How Custom Signage Is Made: 7 Manufacturing Steps',
  category: 'Custom Signage Manufacturing Guide',
  description: 'A buyer-focused guide to the custom signage manufacturing process, from design development and material checks through fabrication, quality control, packing and delivery.',
  updated: 'Jul 22, 2026',
  directAnswer: 'The custom signage manufacturing process is best managed as seven connected stages: design and technical development, material and process checks with first-article review, cutting, bending and welding, surface finishing, colour and illumination control, assembly and pre-installation checks, then final inspection, protective packing and delivery. A buyer should ask what is reviewed at each handoff and which checks are required for the project rather than treating factory production as one opaque step.',
  sections: [
    {
      heading: '1. Design development and technical detailing',
      paragraphs: [
        'The process starts by translating the brief into drawings, dimensions, sign types, materials, finishes, lighting requirements and installation assumptions. Design development and technical detailing should identify how each element will be made, mounted, wired, accessed and maintained before material is cut.',
        'For a coordinated signage program, the team also separates repeated rules from site-specific details. That keeps a wayfinding family, architectural letters or illuminated sign range visually related while allowing each location to be checked against its own support and access conditions.'
      ],
      bullets: ['Confirm artwork, dimensions, sign schedule and intended viewing conditions.', 'Record material, finish, lighting, mounting, wiring and access assumptions.', 'Separate repeatable system rules from site-specific construction details.']
    },
    {
      heading: '2. Material, process and first-article verification',
      paragraphs: [
        'Before full production, the proposed material and process route should be checked against the design. This may include reviewing metal or acrylic selection, sheet and profile behaviour, finish samples, LED or electrical components, and the way the sign will be assembled.',
        'A first-article or sample review gives the buyer and production team a concrete reference for appearance, construction and information placement. The exact sample scope depends on the project; not every order requires the same approval sequence.'
      ],
      bullets: ['Review material and finish samples against the approved design intent.', 'Confirm the selected process can form, join, finish and illuminate the sign as drawn.', 'Record first-article comments before repeating the construction across the order.']
    },
    {
      heading: '3. Laser cutting, CNC cutting and bending',
      paragraphs: [
        'After the construction route is confirmed, sheet, plate, profiles or other sign components are cut using the selected production method. Laser cutting and CNC processes can support repeatable shapes, lettering and apertures when the drawing, material and machine setup are coordinated.',
        'Cut components are then formed where the design requires returns, folded edges, trays or structural parts. The correct sequence depends on the sign type and material; the important buyer question is whether the cut files, bend information and revision status are controlled together.'
      ],
      bullets: ['Check the production file against the approved drawing revision.', 'Match cutting and bending instructions to the specified material and sign construction.', 'Review edges, apertures, returns and formed parts before the next assembly stage.']
    },
    {
      heading: '4. Frame welding and post-weld finishing',
      paragraphs: [
        'Frames, returns, trays and supports are joined using the method appropriate to the construction. Welding is followed by post-weld finishing so joints, edges and visible surfaces can receive the intended finish without avoidable marks or uneven transitions.',
        'This stage is where fabrication discipline becomes visible in the finished sign. A buyer should ask how the factory checks alignment, joint treatment, access panels and the relationship between the welded frame and the face or lettering.'
      ],
      bullets: ['Check frame geometry, joint alignment and support interfaces.', 'Review weld finishing on visible faces and edges before surface treatment.', 'Confirm access for wiring, components, installation and future service.']
    },
    {
      heading: '5. Surface treatment and colour management',
      paragraphs: [
        'Surface treatment may include spray coating, baking paint, fluorocarbon coating, electroplating or anodising, depending on the material, environment and design brief. The selected route should be recorded with the substrate, colour reference, gloss or texture direction and preparation requirements.',
        'Colour management is not only a final visual check. Samples, batch references, lighting conditions and viewing context should be considered together because a colour can read differently on a coated metal face, an acrylic component or an illuminated sign.'
      ],
      bullets: ['Confirm the substrate preparation and surface-treatment route.', 'Use an agreed colour reference and retain the approved sample or record.', 'Review colour under suitable lighting and against the project background where practical.']
    },
    {
      heading: '6. Illumination layout, enclosure and pre-assembly',
      paragraphs: [
        'For illuminated signage, the light source layout is coordinated with the letter or cabinet geometry before the sign is closed. LED modules, wiring, power components and access points need to fit the enclosure and support the intended visual effect without making service impossible.',
        'The sign is then assembled and pre-built where the project allows. Pre-assembly helps the team review proportions, joins, face fit, component access, information placement and overall appearance before packing or site installation.'
      ],
      bullets: ['Check the light-source layout against the sign face, depth and enclosure.', 'Confirm wiring routes, power access, component space and service openings.', 'Pre-assemble representative or complete units when the project scope allows.']
    },
    {
      heading: '7. Inspection, protective packing and delivery',
      paragraphs: [
        'The final stage combines inspection with a delivery plan. Checks may cover dimensions, finish, colour, fit, information, illumination, component access and the condition of the completed sign. Where an ageing or burn-in check is specified or required by the project, it should be documented as part of that project’s inspection scope rather than assumed for every order.',
        'Protective packing is then matched to the sign geometry, finish, components and transport route. Clear identification, packing records and installation information help the site team receive the right parts and reduce avoidable handling damage during delivery and installation.'
      ],
      bullets: ['Check dimensions, finish, colour, assembly, information and illumination as applicable.', 'Record any project-required ageing or burn-in checks without treating them as universal.', 'Protect faces, edges, returns, electronics and finished surfaces for the planned delivery route.', 'Include identification and installation information with the packed sign system.']
    },
    {
      heading: 'How to evaluate a sign manufacturing process',
      paragraphs: ['A capable supplier should be able to explain the handoffs between design, material approval, fabrication, finishing, illumination, assembly, inspection and delivery. Ask for the documents that make those handoffs visible: drawings, revision records, samples, finish references, inspection points, packing scope and installation assumptions. The goal is not to demand the same sequence for every sign, but to make the route and its project-specific checks auditable.']
    },
  ],
  checklistTitle: 'Buyer checklist for custom sign fabrication',
  checklistIntro: 'Use this checklist when comparing a sign manufacturer or preparing a custom signage manufacturing brief. Ask the supplier to mark unknowns and project-dependent checks rather than turning them into blanket promises.',
  checklist: ['Approved artwork, drawings, dimensions and sign schedule', 'Material, substrate, finish, colour reference and sample-approval route', 'Cutting, bending, welding, joint-finishing and assembly assumptions', 'Lighting layout, wiring, power access, enclosure and service openings', 'Inspection points for dimensions, finish, colour, fit, information and illumination', 'Project-specific ageing or burn-in checks, where specified or required', 'Protective packing, part identification, installation information and delivery scope'],
  faqs: [
    { question: 'What are the main steps in a custom signage manufacturing process?', answer: 'The main stages are design and technical detailing; material, process and first-article verification; cutting and bending; frame welding and post-weld finishing; surface treatment and colour management; illumination layout and pre-assembly; then inspection, protective packing and delivery.' },
    { question: 'Why is first-article approval useful for custom signs?', answer: 'A first-article or sample review gives the buyer and factory a concrete reference for construction, finish, appearance and information placement before the process is repeated. The exact approval route depends on the project scope.' },
    { question: 'Which fabrication methods may be used for architectural signage?', answer: 'The route depends on the sign design and material. It may include laser or CNC cutting, bending, frame welding, post-weld finishing, spray or baked coatings, fluorocarbon coating, electroplating, anodising, screen printing and illuminated component assembly.' },
    { question: 'How should colour be controlled during sign production?', answer: 'Use an agreed colour reference and sample, record the substrate and finish route, and review the result under suitable lighting and against the intended project background where practical. Colour should be checked during the process, not only after packing.' },
    { question: 'Are ageing or burn-in checks included on every signage order?', answer: 'Do not assume that. Ageing or burn-in checks should be stated where specified or required by the project, with the inspection scope and record agreed before production.' },
    { question: 'What should a buyer ask a custom sign manufacturer before ordering?', answer: 'Ask for the drawing and revision process, material and finish samples, first-article route, fabrication methods, illumination and service assumptions, inspection points, project-specific checks, protective packing, installation information and delivery scope.' },
  ],
  sources: [
    { name: 'International Sign Association (ISA) — Glossary of Sign Terms and Definitions', url: 'https://signs.org/resources-training/signs101/glossary-of-sign-terms-and-definitions/', note: 'Public terminology reference for sign types and manufacturing discussions.' },
    { name: 'International Sign Association (ISA) — Sign Industry Basics', url: 'https://signs.org/resources-training/signs101/', note: 'Public sign-industry context; final fabrication and compliance details remain project-specific.' },
  ],
  relatedLinks: [
    { href: '/products/complete-signage-system', label: 'See complete signage systems' },
    { href: '/products/architectural-wayfinding-system', label: 'See architectural wayfinding systems' },
    { href: '/contact', label: 'Discuss your signage project' },
  ],
  asideTitle: 'Review your factory process',
  asideText: 'Send the artwork, sign schedule, materials, finish direction, lighting brief and destination. We can map the open decisions into a coordinated manufacturing route.',
};

export default function CustomSignageManufacturingProcessGuide() {
  return <GuideArticle slug="custom-signage-manufacturing-process" {...guide} />;
}
