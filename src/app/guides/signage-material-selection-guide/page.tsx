import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'How to Choose Materials and Finishes for Illuminated Signage',
  category: 'Signage Material Selection Guide',
  description: 'A practical buyer guide to choosing illuminated letter construction, sheet materials, surface finishes, light-source details, and project-specific options for indoor and outdoor signage.',
  updated: 'Sep 22, 2026',
  directAnswer: 'Choose illuminated signage materials from the project environment and visual brief, not from a material name or headline price alone. Review the sign construction, substrate, surface finish, lighting layout, service access, exposure, mounting conditions, and delivery scope together; then confirm the final route with drawings, samples, and project-specific supplier information.',
  sections: [
    {
      heading: '1. Start with the environment and the visual job',
      paragraphs: [
        'The same logo can need a different construction at a mall entrance, on an exposed building facade, inside a hotel lobby, or on an industrial park gateway. Begin by defining where the sign will sit, who needs to read it, how far away it must work, whether it is illuminated, and how the installation team will access it later.',
        'For a wayfinding system, the environment review should include vehicle and pedestrian routes, decision points, viewing distance, mounting surface, cleaning access, and the relationship between exterior identification and interior directories. For a brand sign, add the intended day and night effect, face treatment, return depth, wiring route, and service opening.'
      ],
      bullets: ['Indoor or outdoor exposure, including coastal or salt-air conditions where relevant.', 'Viewing distance, sign scale, day/night appearance, and surrounding lighting.', 'Mounting surface, access equipment, drainage, cleaning, wiring, and maintenance assumptions.', 'Destination, packing, installation responsibility, and any DDP delivery scope to be quoted.']
    },
    {
      heading: '2. Illuminated letter constructions: match the build to the brief',
      paragraphs: [
        'Illuminated letters are not one construction. A metal return with an acrylic face can create a structured, familiar facade sign; an aluminum route may be considered when lower weight or a larger span matters; a resin or edge-free look may suit a compact feature sign when the appearance and repair assumptions are understood; and exposed-light or perforated constructions may be considered for signs intended to read at a longer distance.',
        'Mini or edge-free letters can suit an interior logo wall or counter sign where a fine profile matters. Non-illuminated acrylic letters can work for indoor identification when illumination is not part of the brief. The right answer depends on face, return, backing, mounting, viewing distance, access, and the required visual effect rather than on a universal ranking of sign types.'
      ],
      rows: [
        { factor: 'Facade or commercial entrance', first: 'Metal return with acrylic face or another coordinated illuminated letter route', second: 'Confirm scale, mounting, wiring, face treatment, and night appearance' },
        { factor: 'Interior logo wall or reception', first: 'Mini, edge-free, acrylic, or compact illuminated construction', second: 'Prioritise profile, finish, glare, cleaning, and service access' },
        { factor: 'Large or distant identification', first: 'Pylon, monument, or exposed-light/perforated route may be reviewed', second: 'Check viewing distance, structure, local conditions, and engineering inputs' },
        { factor: 'Wayfinding and functional signs', first: 'Panels, directories, arrows, and room/facility signs', second: 'Prioritise hierarchy, legibility, mounting, and repeatable materials' },
      ],
      firstLabel: 'Possible direction',
      secondLabel: 'Buyer checks',
    },
    {
      heading: '3. Sheet materials: stainless steel, aluminum, galvanized steel, or acrylic',
      paragraphs: [
        '304 stainless steel, aluminum, galvanized steel, and acrylic can each have a place in a signage program. The selection should follow exposure, fabrication, weight, finish, transparency or opacity, mounting, cleaning, and the appearance required by the design. A material comparison is useful only when the sign location and construction are known.',
        '304 stainless steel can be considered for exposed metal elements where its appearance and project environment fit the brief. Aluminum can be considered when lower weight, larger panels, or an exterior route calls for it. Galvanized steel may be reviewed for suitable protected or coated applications, while acrylic is often used for faces, translucent elements, letters, and shaped panels where light transmission or form is part of the design. A project-specific review should still confirm the selected grade, thickness, preparation, and finish.'
      ],
      bullets: ['304 stainless steel: review for exposed metal, finish, fabrication, and coastal or salt-air context.', 'Aluminum: review when weight, panel size, corrosion context, and mounting are important.', 'Galvanized steel: confirm substrate, coating route, exposure, edges, drainage, and maintenance.', 'Acrylic: confirm thickness, dimensions, light transmission, colour, support, and handling assumptions.', '201 stainless steel may be discussed as a general material option, but it should not be treated as a site-wide recommendation without project review.']
    },
    {
      heading: '4. Surface finishes change the appearance and maintenance brief',
      paragraphs: [
        'The substrate is only part of the decision. Spray or baked paint, fluorocarbon coating, electroplating, anodising, and brushing can create different visual effects and require different preparation, inspection, cleaning, and maintenance assumptions. The correct finish depends on the material, exposure, colour, texture, location, and design intent.',
        'Use an agreed colour reference and sample wherever the finish is important to the brand system. For a coastal or exposed application, ask the supplier to state the proposed preparation, coating route, edge treatment, inspection scope, and maintenance assumptions instead of treating a finish name as a performance guarantee.'
      ],
      bullets: ['Record substrate, preparation, colour reference, gloss or texture, and finish route.', 'Use a physical or documented sample when colour and surface appearance are critical.', 'Check visible edges, returns, joints, cut-outs, and transitions between different materials.', 'Keep cleaning, access, replacement, and future touch-up assumptions in the project record.']
    },
    {
      heading: '5. Light-source selection: review the whole illuminated sign',
      paragraphs: [
        'For an illuminated sign, brightness is only one part of the brief. Review light distribution, face material, letter depth, internal spacing, power location, wiring, service access, glare, surrounding light, and the intended colour temperature. Warm, neutral, and cool white examples can help align the design conversation, but the final selection should follow the project appearance and approval sample.',
        'Ask for the proposed light-source layout, component information, enclosure details, and applicable inspection records. Uniformity, ageing or burn-in checks, waterproofing, lifetime, and component brand should be treated as project-specific items to verify in supplier documents and the agreed inspection scope, not as blanket promises for every sign.'
      ],
      bullets: ['Define the day/night visual effect and acceptable colour-temperature direction.', 'Review module or strip layout against letter depth, face material, returns, and enclosure.', 'Confirm wiring, power access, service openings, packing, and installation sequence.', 'Request project-specific component, inspection, ageing, and water-ingress information where required.']
    },
    {
      heading: '6. Match the selection to the project scenario',
      paragraphs: [
        'A useful selection matrix does not promise one material for every site. It gives the buyer a starting direction and then identifies the checks that keep the specification honest. The examples below are starting points for a brief, not fixed product prescriptions.',
      ],
      rows: [
        { factor: 'Indoor mall or office', first: 'Review metal return letters, acrylic faces, directories, and functional panels', second: 'Check brand finish, viewing distance, glare, cleaning, and interior mounting' },
        { factor: 'Coastal or exposed outdoor', first: 'Review aluminum or 304 stainless routes with the specified finish', second: 'Confirm salt-air exposure, substrate, edges, coating, drainage, and maintenance' },
        { factor: 'Boutique or reception feature', first: 'Review compact, edge-free, resin-look, acrylic, or illuminated logo routes', second: 'Confirm profile, face quality, colour temperature, impact exposure, and repair access' },
        { factor: 'Large facade or roof identification', first: 'Review pylon, monument, channel-letter, or exposed-light directions', second: 'Confirm scale, sightlines, structure, wind/site data, access, and local review' },
        { factor: 'Interior image wall or directory', first: 'Review mini letters, acrylic, stainless, directories, and non-illuminated panels', second: 'Confirm hierarchy, legibility, finish, mounting, and maintenance' },
      ],
      firstLabel: 'Starting direction',
      secondLabel: 'Confirm before production',
    },
  ],
  checklistTitle: 'Buyer checklist for material selection',
  checklistIntro: 'Send this information with the enquiry so the supplier can compare construction, materials, finish, lighting, and delivery as one scope. Unknown items can be marked for clarification.',
  checklist: ['Project location, indoor/outdoor exposure, coastal or salt-air context, and surrounding lighting', 'Sign types, artwork, approximate dimensions, viewing distance, and quantities', 'Day/night visual effect, illumination direction, colour-temperature preference, and glare concerns', 'Substrate, face, return, thickness, material route, finish, colour reference, and sample needs', 'Mounting surface, fixing method, power location, wiring route, access, cleaning, and maintenance assumptions', 'Site survey, 3D mockup, drawings, installation, packing, destination, and DDP quotation scope', 'Project-specific component information, inspection points, ageing or burn-in checks, and water-ingress review where required'],
  faqs: [
    { question: 'How do I choose between stainless steel, aluminum, galvanized steel, and acrylic for a sign?', answer: 'Start with the environment, sign construction, weight, finish, exposure, mounting, cleaning, and the visual effect. Stainless steel, aluminum, galvanized steel, and acrylic can all be reviewed for different applications, but the final substrate, thickness, preparation, and finish should be confirmed for the project.' },
    { question: 'What is the best material for a coastal or salt-air signage project?', answer: 'There is no universal material answer without the site and construction details. Review 304 stainless steel or aluminum routes, the finish and edge treatment, drainage, mounting, cleaning, and maintenance assumptions against the confirmed coastal exposure.' },
    { question: 'Which finish should be used for outdoor illuminated letters?', answer: 'The finish should be selected from the substrate, exposure, colour, texture, fabrication route, and maintenance brief. Ask for the proposed preparation and finish sample, and do not treat a finish name as a fixed weathering or colour-retention guarantee.' },
    { question: 'What should I check about the light source before ordering?', answer: 'Check the light distribution, face and letter depth, wiring, power access, service openings, glare, colour-temperature direction, component information, and the project inspection scope. Ageing, burn-in, waterproofing, lifetime, and brand details should be verified in the agreed project documents where required.' },
    { question: 'Can you recommend materials from drawings and site information?', answer: 'Yes. Share the artwork, dimensions, quantities, site or environmental details, mounting information, finish and lighting direction, and destination. The material and process route can then be reviewed with drawings, samples, and a project-specific quotation.' },
  ],
  sources: [
    { name: 'ZYD Signage — 304 Stainless Steel vs Galvanized Steel Guide', url: '/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs', note: 'Internal material-selection reference for outdoor signage decisions.' },
    { name: 'ZYD Signage — Front-Lit vs Halo-Lit Channel Letters', url: '/guides/front-lit-vs-halo-lit-channel-letters', note: 'Internal reference for illumination effect, mounting, and service questions.' },
    { name: 'ZYD Signage — How Custom Signage Is Made', url: '/guides/custom-signage-manufacturing-process', note: 'Internal reference for drawings, samples, fabrication, inspection, packing, and delivery handoffs.' },
  ],
  relatedLinks: [
    { href: '/products/custom-halo-lit-letters', label: 'Review illuminated letters' },
    { href: '/products/architectural-wayfinding-system', label: 'Review wayfinding systems' },
    { href: '/solutions/mall-wayfinding-signage', label: 'See mall signage solution' },
    { href: '/solutions/industrial-park-signage', label: 'See industrial park solution' },
    { href: '/solutions/hotel-signage', label: 'See hotel signage solution' },
    { href: '/contact', label: 'Discuss your project' },
  ],
  asideTitle: 'Need a material shortlist?',
  asideText: 'Send the project environment, sign types, artwork, dimensions, finish direction, lighting brief, and destination. We can turn the open choices into a reviewable material and process route.',
};

export default function SignageMaterialSelectionGuide() {
  return <GuideArticle slug="signage-material-selection-guide" {...guide} />;
}
