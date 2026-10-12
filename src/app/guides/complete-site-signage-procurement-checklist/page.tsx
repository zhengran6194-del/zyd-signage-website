import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'Complete Site Signage Procurement Checklist',
  category: 'Site Signage Procurement',
  description: 'A stage-by-stage procurement checklist for a complete site signage package: brief, site survey, drawings and specification, materials and finish, lighting and electrical, mounting, QA and acceptance, packing and shipping, commercial terms, and handover.',
  updated: 'Oct 12, 2026',
  directAnswer: 'A complete site signage package is procured stage by stage, and every stage has fields that only the supplier can confirm. Work through the ten stages below in order, because a decision taken at the brief or the site survey changes the drawing, the material route, the mounting detail and the delivery scope that follow it. Each stage lists what the project team decides and what has to come back from the supplier in writing before the next stage can be closed.',
  sections: [
    {
      heading: '1. Brief: what the package has to do',
      paragraphs: [
        'The brief fixes the scope before any drawing exists. It should describe the site, the audience, the sign types being considered and the standards the client applies, and it should name the person who approves each artefact.',
      ],
      bullets: [
        'Project team decides: site type and audience, sign types in scope, the approval chain and the review dates.',
        'Supplier confirms: whether the requested scope can be produced as described, and which items need more information before a price is meaningful.',
        'Supplier confirms: the assumptions the quotation is based on, listed as assumptions rather than left implicit.',
      ],
    },
    {
      heading: '2. Site survey: what the drawings will be built from',
      paragraphs: [
        'The survey turns a description into measurable inputs. Photographs alone are not a survey, because they do not record the substrate, the available clearances or the power position.',
      ],
      bullets: [
        'Project team decides: access arrangements, survey dates, and who attends on site.',
        'Supplier confirms: what the survey must capture — wall or ground substrate and condition, mounting heights, available clearances, fixings, and the power and service positions.',
        'Supplier confirms: any site condition that changes the sign type, the mounting method or the delivery method.',
      ],
    },
    {
      heading: '3. Drawings and specification: freezing the design',
      paragraphs: [
        'The drawing set is where the package becomes buildable. It carries the elevations, the sign schedule, the dimensions and the construction description for each sign type, and it is the document the acceptance stage is measured against.',
      ],
      bullets: [
        'Project team decides: artwork, message content, language, and the approved design revision.',
        'Supplier confirms: the construction description per sign type — face, return, trim, depth and framing — and the mounting detail.',
        'Supplier confirms: the drawing revision that production is released against, so a later change is a documented revision rather than a verbal one.',
      ],
    },
    {
      heading: '4. Materials and finish: making the route explicit',
      paragraphs: [
        'Material and finish routes are selected per project against exposure, appearance, fabrication and the environment the sign stands in. Common routes include 304 stainless steel, galvanized steel, aluminum, acrylic and heavy-gauge steel sheet, finished with a coating route such as oven-baked paint, and the route chosen is confirmed with the sample rather than inferred from the sign type.',
      ],
      bullets: [
        'Project team decides: the appearance standard and any colour references the finish is matched to.',
        'Supplier confirms: the material route proposed for each sign type, and the reason it suits the exposure.',
        'Supplier confirms: the finish sample or approved reference, and which visible surfaces it applies to.',
      ],
    },
    {
      heading: '5. Lighting and electrical: where the power comes from',
      paragraphs: [
        'Illuminated signs are the part of the package where electrical decisions arrive earliest. The lighting effect, the power source and the service access are one subject, and they are confirmed with the electrician or the main contractor rather than after the sign is fabricated.',
      ],
      bullets: [
        'Project team decides: the power available on site, the switching arrangement, and who connects the supply.',
        'Supplier confirms: the lighting effect and the construction that produces it, the power supply location, and the cable route.',
        'Supplier confirms: how each lit sign is reached for service without removing it, and where the driver or power supply can be accessed.',
      ],
    },
    {
      heading: '6. Mounting: how each sign is fixed and set out',
      paragraphs: [
        'Mounting is specified per sign type and per elevation. Setting-out dimensions are as important as the fixing method, because a sign that is level but in the wrong position is still a defect.',
      ],
      bullets: [
        'Project team decides: the installation responsibility, the site access window and the lifting arrangements.',
        'Supplier confirms: the fixing method, the substrate requirements, the standoff or raceway detail, and the setting-out dimensions.',
        'Supplier confirms: whether the fixing detail assumes a substrate that still has to be verified on site.',
      ],
    },
    {
      heading: '7. Quality assurance and acceptance: what good looks like',
      paragraphs: [
        'Acceptance criteria are agreed before production, not discovered at handover. They cover the construction, the finish, the visible surfaces, and for illuminated signs the build and the illumination check.',
      ],
      bullets: [
        'Project team decides: the acceptance criteria, the inspection scope, and who signs off the inspection record.',
        'Supplier confirms: the inspection stages, the check for each lit sign, the finish and dimension checks, and the record issued with the shipment.',
        'Supplier confirms: the agreed visual check or sample comparison that the delivered sign is measured against.',
      ],
    },
    {
      heading: '8. Packing and shipping: protecting the agreed scope',
      paragraphs: [
        'The delivery scope states what arrives, in what condition, and to which address. Packing is part of that scope, because a correctly built sign that arrives damaged has not been delivered to the agreed standard.',
      ],
      bullets: [
        'Project team decides: the delivery address, the receiving arrangements, the offloading capability and the required date.',
        'Supplier confirms: the packing method, the number and type of packages, and the crate marks used to identify each sign.',
        'Supplier confirms: the delivery scope being quoted, including whether duties and taxes are in the quotation or handled by the receiving party.',
      ],
    },
    {
      heading: '9. Commercial terms: what the price includes',
      paragraphs: [
        'Commercial terms make the differences between quotations visible. Two prices for the same sign are only comparable when the included scope, the revision, the quantities and the delivery terms are the same.',
      ],
      bullets: [
        'Project team decides: the order quantities, the revision ordered, the payment route and the required delivery date.',
        'Supplier confirms: what the price includes and what it excludes — drawings, samples, inspection, packing, freight, duties, installation and commissioning.',
        'Supplier confirms: the lead time that applies to the ordered scope, and any payment or supply terms the quotation is conditional on.',
      ],
    },
    {
      heading: '10. Handover: closing the package',
      paragraphs: [
        'Handover is where the package is closed rather than abandoned. The final documents and the agreed follow-up items are recorded, so a later question about a sign is answered from a record instead of from memory.',
      ],
      bullets: [
        'Project team decides: the completion requirements, and who accepts the sign schedule as delivered.',
        'Supplier confirms: the documents issued at handover — the as-built drawing revision, the inspection record, and the maintenance route for the lit signs.',
        'Both sides confirm: the agreed follow-up items, with an owner and a date for each one.',
      ],
    },
  ],
  checklistTitle: 'Copy this checklist into the project brief',
  checklistIntro: 'One line per stage. Each line is a field to confirm rather than an assumption to carry forward, and any line that cannot be answered yet should be listed as an open item on the drawing.',
  checklist: [
    'Brief: scope, sign types, audience, approval chain, review dates.',
    'Site survey: substrate, mounting heights, clearances, fixings, power and service positions.',
    'Drawings: approved revision, sign schedule, setting-out dimensions, construction description.',
    'Specification: mounting detail, fixing method, substrate assumptions stated as assumptions.',
    'Materials and finish: material route per sign, exposure reason, finish sample or reference.',
    'Lighting and electrical: effect, power location, cable route, switching, service access, commissioning.',
    'Mounting: fixing method per elevation, standoff or raceway detail, installation responsibility.',
    'QA and acceptance: inspection stages, illuminated sign check, finish and dimension check, sign-off.',
    'Packing and shipping: packing method, package list, crate marks, delivery scope, receiver arrangements.',
    'Commercial terms: included and excluded scope, revision and quantities, lead time, payment route.',
    'Handover: as-built revision, inspection record, maintenance route, follow-up items with owners.',
  ],
  faqs: [
    { question: 'Who should own the procurement checklist?', answer: 'The project team owns the brief, the approval chain and the acceptance criteria; the supplier owns the construction, the drawing detail, the material route and the delivery scope. The checklist works when each line is marked with the party who confirms it, so an unanswered line is visible before production rather than after delivery.' },
    { question: 'At which stage should the supplier be appointed?', answer: 'As early as the brief allows. A supplier can confirm which details are buildable and which need site information while the design can still change, which is cheaper than discovering the same issues after the drawings are frozen. Sending the brief for a review rather than a final price is a reasonable first step.' },
    { question: 'What makes two quotations comparable?', answer: 'The same revision, the same quantities and the same included scope. Drawings and samples, inspection, packing, freight, duties, installation and commissioning are the items that most often differ, so asking each supplier to state what is excluded makes the comparison honest.' },
    { question: 'How is an acceptance criterion agreed for illuminated signs?', answer: 'By stating the effect and the construction, then agreeing the check that confirms both: the build and the illumination test for each lit sign, plus the finish and dimension checks on the visible surfaces. The approved sample or visual is the reference the delivered sign is measured against.' },
    { question: 'Does every stage have to be closed before production starts?', answer: 'No — but every open item should be written down with an owner. Production can start on the parts that are decided while the open items are resolved, which is why the two columns in the checklist matter more than a single overall sign-off.' },
    { question: 'What is the minimum order and typical lead time?', answer: 'Minimum order is one unit. Typical production lead time is 7 to 14 days depending on scope and quantity, counted from the point the artwork and the drawings are agreed. Multi-site packages and sample approvals change that estimate, so the lead time that applies to the project is the one in the quotation.' },
  ],
  sources: [
    { name: 'ZYD Signage — Low-Bid Signage Tenders: Why the Cheapest Quote Fails at Acceptance', url: '/guides/signage-procurement-low-bid-pitfalls', note: 'Internal reference for where a signage price gap hides and which technical requirements belong in the tender.' },
    { name: 'ZYD Signage — How Custom Signage Is Made', url: '/guides/custom-signage-manufacturing-process', note: 'Internal reference for the production stages a site package passes through.' },
    { name: 'ZYD Signage — How to Choose Materials for Illuminated Signage', url: '/guides/signage-material-selection-guide', note: 'Internal reference for material, finish and light-source routes.' },
    { name: 'International Sign Association (ISA) — Glossary of Sign Terms and Definitions', url: 'https://signs.org/resources-training/signs101/glossary-of-sign-terms-and-definitions/', note: 'Public terminology reference for sign and lighting discussions.' },
    { name: 'U.S. Access Board — Chapter 7: Signs', url: 'https://www.access-board.gov/ada/guides/chapter-7-signs/', note: 'Official signs guidance; the applicable accessibility framework is confirmed per project.' },
  ],
  relatedLinks: [
    { href: '/products/complete-signage-system', label: 'Complete signage systems' },
    { href: '/products/architectural-wayfinding-system', label: 'Architectural wayfinding' },
    { href: '/guides/illuminated-signage-buying-guide', label: 'Illuminated signage buying guide' },
    { href: '/guides/how-to-choose-the-right-sign-for-your-business', label: 'Choosing the sign type' },
    { href: '/projects', label: 'See delivered packages' },
    { href: '/contact', label: 'Send the brief for review' },
  ],
  asideTitle: 'Turn the brief into a scope',
  asideText: 'Send the site details, the sign schedule if one exists, the quantities and the destination. The first review is about which fields are still open, not about a final price.',
};

export default function CompleteSiteSignageProcurementChecklist() {
  return <GuideArticle slug="complete-site-signage-procurement-checklist" {...guide} />;
}
