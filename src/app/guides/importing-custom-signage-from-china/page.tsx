import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'Importing Custom Signage from China: Landed Cost, Documents and Installer Handover',
  category: 'Signage Procurement & Import',
  description:
    'How landed cost, customs documents and installer handover work when you import custom signage from China, and what the factory price leaves out.',
  updated: 'Oct 20, 2026',
  directAnswer:
    'The factory price covers manufacturing, packing and usually inland transport to the port. It does not cover freight, duty, destination charges or installation. Importing works when the quotation names the delivery term, the document set is agreed with a customs broker before production, and the installer receives mounting and wiring drawings before the crates arrive.',
  sections: [
    {
      heading: 'What the factory price does and does not include',
      paragraphs: [
        'A factory quotation for custom signage normally covers materials, fabrication, finishing and packing. Depending on the agreement it may also include inland transport to a named port or airport.',
        'It usually does not include international freight, cargo insurance, import duty and tax, destination terminal or broker charges, delivery from the port to the site, installation, permits, or the electrical connection.',
        'This is why two quotations that look far apart on paper can end up close after delivery, and why a low factory price is not the same as a low landed cost.',
        'The simplest way to remove the ambiguity is to have the delivery term stated on the quotation. EXW, FOB, CIF and DDP place different responsibilities on the buyer and the supplier, and the difference is not only who books the freight: it also decides who is the importer of record and who carries the risk if something goes wrong in transit.',
      ],
      bullets: [
        'Ask for the term to be written on the quotation itself, not agreed in conversation.',
        'Ask which party is named as importer of record.',
        'Ask whether packing and crating are included, and to what protection standard.',
      ],
    },
    {
      heading: 'Why landed cost is not the quoted unit price',
      paragraphs: [
        'Landed cost is the total you pay before the sign is working on the wall. It accumulates in layers, and each layer is invoiced by a different party.',
        'Build a landed-cost sheet before approving a purchase order. The exercise often changes the decision: a project that looks cheaper from the factory can lose that advantage once freight, duty and the installer\'s mobilisation are counted.',
      ],
      rows: [
        { factor: 'Goods, fabrication, finishing', first: 'Factory', second: 'Unit price, quantity and specification' },
        { factor: 'Packing and crating', first: 'Factory', second: 'Crate dimensions, weight and protection' },
        { factor: 'Inland transport to port', first: 'Factory or forwarder', second: 'Named port or airport' },
        { factor: 'Origin charges and freight', first: 'Freight forwarder', second: 'Mode, routing and transit time' },
        { factor: 'Cargo insurance', first: 'Forwarder or broker', second: 'Cover and claim procedure' },
        { factor: 'Duty and import tax', first: 'Broker or importer', second: 'Classification and valuation basis' },
        { factor: 'Destination charges', first: 'Terminal, broker or forwarder', second: 'Terminal handling, documentation, release' },
        { factor: 'Delivery to site', first: 'Local carrier', second: 'Access, liftgate and appointment window' },
        { factor: 'Installation and connection', first: 'Local installer or electrician', second: 'Scope, access equipment and permits' },
      ],
      factorLabel: 'Cost layer',
      firstLabel: 'Usually billed by',
      secondLabel: 'Confirm in writing',
    },
    {
      heading: 'The charges that appear after the invoice, and who bills them',
      paragraphs: [
        'Once the factory invoice is paid, the remaining charges come from two directions: the freight forwarder and the destination service providers.',
        'The forwarder typically invoices origin handling, freight, and sometimes insurance and destination handling as one through-rate. The destination side can invoice terminal handling, customs brokerage, documentation, release fees and final delivery. On some routes these arrive as a single all-in figure; on others each appears separately.',
        'A DDP arrangement consolidates much of this into one price and one responsible party. It does not remove the underlying charges, and the scope still has to be written down: which taxes, which destination fees, which final-delivery conditions, and what happens if the shipment is held for inspection.',
        'Ask each party for its own itemised estimate and add them into one sheet. A single all-in number is convenient for budgeting but difficult to audit when a charge is disputed.',
      ],
    },
    {
      heading: 'HS classification: why similar signs clear at different rates',
      paragraphs: [
        'Customs classification is not decided by the word sign. It depends on what the article is, what it is made of, and how it functions. An illuminated channel letter, a non-illuminated fabricated letter, a printed panel, a light box and a digital display can fall under different headings even when a buyer describes all of them as signage.',
        'Because classification drives the duty rate and any applicable restrictions, it should be settled before production rather than at the port. Two shipments of visually similar signs can clear at different rates if the goods are described differently or if the components are invoiced separately.',
        'The practical approach is to send the broker the specification, the material list, and a drawing or photograph, and ask for a written classification view before the order is placed. The factory can describe what it is shipping; the classification decision belongs to the importer and its broker.',
        'The description on the commercial invoice has to match the goods. A vague description such as display materials invites questions, delay and reclassification.',
      ],
    },
    {
      heading: 'Documents the shipment needs before it leaves the factory',
      paragraphs: [
        'The document set should be agreed with the broker at quotation stage, because requirements differ by destination and by mode. A typical set covers the following.',
      ],
      bullets: [
        'Commercial invoice with an accurate goods description, unit values and total value.',
        'Packing list showing cartons or crates, dimensions, weights and contents per package.',
        'Bill of lading or airway bill, issued once the shipment is handed to the carrier.',
        'Certificate of origin, where the destination or the buyer requires one.',
        'Product drawings and a specification sheet, so the shipment can be identified on arrival.',
        'Material and finish declarations for the components used.',
        'Electrical component documentation for the LED modules and power supplies.',
        'Wood packaging treated and marked to the applicable plant-health standard, where wood crating is used.',
      ],
      closingParagraphs: [
        'Send the draft documents to the broker before the shipment leaves. Corrections are inexpensive at that point and slow and expensive once the container is on the water.',
      ],
    },
    {
      heading: 'What a factory can and cannot certify for local approval',
      paragraphs: [
        'A factory can supply drawings, dimensions, material specifications and component data. It cannot approve a sign for a specific building, issue a local permit, or sign off an electrical installation.',
        'Those approvals sit with the landlord, the local authority and the licensed trade in the destination market. A supplier that offers to handle everything should be asked exactly which of those steps it performs and which it does not.',
        'The useful division of work is straightforward: the factory provides the information the approval process needs, and the buyer\'s local team uses it. Mounting height, projection, illumination limits and connection requirements are usually determined locally, and they should be confirmed before the design is frozen rather than after.',
        'Ask the authority or the landlord what they need to see at application stage, then ask the factory for those specific documents. Generic certificates rarely answer a specific question.',
      ],
    },
    {
      heading: 'What a local installer needs to finish the job',
      paragraphs: [
        'The installer prices risk. When drawings are missing or arrive late, the quotation goes up or the installer declines the job. In practice the following package decides whether the installation runs smoothly.',
      ],
      bullets: [
        'Shop drawings with overall dimensions and letter positions.',
        'A mounting template or dimensioned hole pattern.',
        'A wiring diagram, including the number of circuits and the connection points.',
        'Power supply location and capacity, and the routing between the sign and the supply.',
        'The weight of each letter and of each crate, for lifting and access planning.',
        'A hardware list: anchors, studs, spacers and the fixings supplied with the letters.',
        'The face removal and reassembly procedure for this specific construction.',
        'Spare fasteners and a small number of spare LED modules.',
      ],
      closingParagraphs: [
        'Send this package to the installer before the shipment arrives. Installation is often scheduled in a short window between other trades, and a missing drawing at that moment is expensive.',
        'For wall types that cannot take expansion anchors, such as stone cladding or thin panels, agree the fixing method at drawing stage. It should not be decided on site on the morning of the install.',
      ],
    },
    {
      heading: 'Crating, damage and the claim window',
      paragraphs: [
        'Illuminated letters are fragile at the face and at the returns, and they are heavy for their size. Good crating braces the face, protects the edges, keeps letters from touching each other, and labels every crate with its contents and orientation.',
        'Inspect the shipment before signing the delivery receipt. Photograph the crates as received, then open and check the contents while the carrier is still on site where local practice allows. Note any visible damage on the delivery document, because a signature without exceptions is difficult to argue with later.',
        'Claim windows are set by the carrier, the insurer and the terms of sale, and they differ between routes. Confirm the procedure and the deadline before shipping and write it into the purchase order, so the inspection does not depend on whoever happens to be at the site that day.',
      ],
    },
    {
      heading: 'One set or one hundred: how order size changes the maths',
      paragraphs: [
        'Custom signage does not require a container. A single set can be produced, crated and shipped, but the economics change with quantity: setup, artwork preparation and crating are spread across more units, while freight is driven by volume and weight rather than by piece count.',
        'For small orders, compare air freight against sea freight on the actual crate dimensions rather than on the goods value. A large but light sign can be expensive by air because of dimensional weight, while a small dense shipment may not justify a sea booking.',
        'For larger projects, ask how the shipment will be consolidated and whether different sign types can share a crate or a pallet. Mixed consignments need a packing list that maps every item to its location, or the site receives a crate it cannot reconcile against the drawings.',
      ],
    },
    {
      heading: 'When importing is the wrong decision',
      paragraphs: [
        'Importing is a poor fit in a few situations, and it is better to identify them before the order than after.',
      ],
      bullets: [
        'The opening date is only a few weeks away, and freight plus installation cannot fit the window.',
        'The sign is small and non-illuminated, and a local supplier can deliver it at a comparable total cost.',
        'The project requires a local warranty response with a defined service time.',
        'The electrical installation must be certified by a local licensed contractor who has not reviewed the component documentation.',
        'The approval authority requires a locally certified product and the available documentation does not meet that requirement.',
      ],
      closingParagraphs: [
        'In these cases a local fabricator is usually the better answer. The decision should rest on the landed cost and the approval path, not on the factory price alone.',
      ],
    },
    {
      heading: 'Pre-order checks worth putting in writing',
      paragraphs: [
        'The questions below are the ones most often left unasked until something goes wrong. Each has a short answer that should appear in writing before the purchase order is issued.',
      ],
      columns: {
        headers: ['Question to ask', 'Why it matters'],
        rows: [
          ['Which delivery term is on the quotation?', 'It decides who books freight, who is the importer and where risk passes.'],
          ['Who is the importer of record?', 'Duty, tax and compliance obligations follow that party.'],
          ['Has the broker confirmed the classification?', 'The rate and any applicable restrictions depend on it.'],
          ['Which documents travel with the shipment?', 'Missing paperwork causes delay at the port, not at the factory.'],
          ['Who installs, and have they seen the drawings?', 'Installation cost and schedule depend on information, not only on labour.'],
          ['What is the fixing method for this wall?', 'The wrong anchor damages the facade and may complicate the approval.'],
          ['How will damage be handled?', 'The inspection and claim path has to be agreed before delivery.'],
          ['What is supplied as spare?', 'A single failed module should not require a new sign.'],
        ],
      },
    },
  ],
  checklistTitle: 'Import checklist before the order is placed',
  checklistIntro:
    'Importing works when the commercial terms, the document set and the installation handover are settled before production starts. Use this list to confirm that each one is in writing.',
  checklist: [
    'Delivery term named on the quotation, with the responsible party for each cost line.',
    'Importer of record identified, and duty and tax responsibility stated in the contract.',
    'Classification view obtained from the broker before production.',
    'Document set agreed with the broker, including origin and wood packaging requirements.',
    'Mounting drawings, hole pattern and letter positions issued before crating.',
    'Wiring diagram, power supply location, capacity and circuit count provided.',
    'Weight and crate dimensions supplied for site handling and access planning.',
    'Crating specification covering faces, returns, corners and separation between letters.',
    'Inspection and claim procedure agreed, with the deadline recorded in the purchase order.',
    'Installer identified, with the handover package sent before the shipment arrives.',
  ],
  faqs: [
    {
      question: 'Is importing custom signage from China cheaper than buying locally?',
      answer:
        'Not automatically. The factory price is usually lower, but landed cost includes freight, insurance, duty, destination charges, delivery and installation. Compare the total against a local quotation for the same specification, including the installer price and the approval work.',
    },
    {
      question: 'Who pays the import duty, me or the factory?',
      answer:
        'Normally the importer of record pays duty and import tax, which is usually the buyer or its appointed broker. Under a DDP arrangement the supplier quotes a delivered price that includes those charges, but the responsibility still has to be written into the sales contract. Confirm which party is named as importer before ordering.',
    },
    {
      question: 'Can a Chinese factory supply a sign that passes local inspection?',
      answer:
        'A factory can manufacture to a specification and supply drawings, material data and component documentation. It cannot issue a local permit, certify an electrical installation, or approve a sign for a particular building. Whether a sign passes inspection depends on local requirements and on the installation, so confirm those requirements before the design is finalised.',
    },
    {
      question: 'What files do I need to send before a factory can quote?',
      answer:
        'A vector artwork file, the required dimensions and letter height, the mounting surface with photographs and measurements, the viewing distance, the illumination requirement, the destination port or address, and the required completion date. A specification or designer drawing shortens the process considerably.',
    },
    {
      question: 'What happens if the sign arrives damaged?',
      answer:
        'Report it to the carrier and the insurer under the procedure agreed before shipping, with photographs and the delivery documentation. Inspect the shipment before signing where possible and note exceptions on the delivery receipt. The claim window and the evidence required are set by the carrier and the policy, not by the factory.',
    },
    {
      question: 'Can I order a single sign, or is there a minimum order quantity?',
      answer:
        'A single set can be produced. Unit cost falls with quantity because setup, artwork preparation and crating are spread across more pieces, and freight follows volume and weight. For one sign, compare air and sea freight on the actual crate dimensions before deciding.',
    },
  ],
  sources: [
    {
      name: 'International Sign Association (ISA) — Glossary of Sign Terms and Definitions',
      url: 'https://signs.org/resources-training/signs101/glossary-of-sign-terms-and-definitions/',
      note: 'Public terminology reference for sign construction and component descriptions.',
    },
  ],
  relatedLinks: [
    { href: '/guides/complete-site-signage-procurement-checklist', label: 'The full procurement sequence' },
    { href: '/guides/how-much-do-custom-channel-letters-cost', label: 'What shapes the factory quotation itself' },
    { href: '/guides/custom-signage-manufacturing-process', label: 'How custom signage is manufactured' },
    { href: '/guides/signage-procurement-low-bid-pitfalls', label: 'Why the cheapest bid fails at acceptance' },
    { href: '/guides/illuminated-signage-buying-guide', label: 'Illumination specification checks' },
    { href: '/products/custom-channel-letters', label: 'Custom channel letters built for export crating' },
  ],
  asideTitle: 'Start with the delivery term',
  asideText:
    'Send the drawings, the destination address and photographs of the mounting surface, and ask for the quotation to state the delivery term, the document set and the installation information package. Those three items decide most of the difference between a factory price and a working sign.',
};

export default function ImportingCustomSignageGuide() {
  return <GuideArticle slug="importing-custom-signage-from-china" {...guide} />;
}
