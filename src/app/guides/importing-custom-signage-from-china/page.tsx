import GuideArticle, { type GuideArticleData } from '@/components/GuideArticle';

const guide: GuideArticleData = {
  title: 'Importing Custom Signage from China: Costs, Installation and Supplier Responsibilities',
  category: 'Signage Procurement & Import',
  description:
    'What importing custom signage from China really involves: landed and installed cost, Incoterms, duty, local installation and responsibility after delivery.',
  updated: 'Oct 20, 2026',
  directAnswer:
    'Importing custom signage from China requires more than comparing factory prices. Before ordering, confirm the total delivered cost, local installation requirements, approval process and after-sales responsibilities.',
  sections: [
    {
      heading: 'Before You Compare Factory Prices',
      paragraphs: [
        'A competitive manufacturing quotation can be useful for a retail storefront, restaurant or multi-building wayfinding project. However, the sign still needs to clear customs, reach the site and be installed correctly.',
        'The practical question is: what will it cost to turn the manufactured sign into an approved, working installation?',
        'Dalian ZhiYuDao Signage & Tech. Co.Ltd, also known as ZYD SIGN, is a custom signage manufacturer based in Dalian, China. This guide explains what overseas buyers should clarify when sourcing channel letters, room signs and wayfinding signage.',
      ],
    },
    {
      heading: '1. Can a Chinese Sign Manufacturer Handle the Whole Project?',
      images: [
        { src: '/assets/images/guides/zyd-factory-aerial-dalian.jpg', alt: 'Aerial view of the ZYD Signage factory buildings and yard in Dalian, China', width: 10969, height: 9078 },
        { src: '/assets/images/guides/zyd-3d-metal-logo-sign.jpg', alt: 'Brushed metal 3D logo sign with ZYD lettering mounted on an interior wall', width: 413, height: 413 },
        { src: '/assets/images/guides/zyd-cnc-router-large-format.jpg', alt: 'Large-format CNC router on the factory floor', width: 5284, height: 3523 },
        { src: '/assets/images/guides/zyd-fiber-laser-cutting-bed.jpg', alt: 'Fiber laser cutting bed on the factory floor, shown between cutting cycles', width: 5298, height: 3532 },
        { src: '/assets/images/guides/zyd-press-brake-forming.jpg', alt: 'Press brake tooling on the factory floor, with the machine ready for a forming cycle', width: 5316, height: 3544 },
        { src: '/assets/images/guides/zyd-welding-letter-frames.jpg', alt: 'Welder assembling a metal letter frame with sparks', width: 6000, height: 4000 },
      ],
      paragraphs: [
        'A manufacturer may supply several sign types within one order, including illuminated letters, non-illuminated lettering, room identification signs and directional panels.',
        'However, “complete signage package” and “turnkey installation” can describe very different scopes.',
        'Ask the supplier to separate the project into specific services:',
      ],
      columns: {
        headers: ['Project Stage', 'What to Confirm'],
        rows: [
          ['Design development', 'Is the supplier adapting approved artwork or developing the sign system?'],
          ['Production drawings', 'Which dimensions, materials, lighting and fixing details are included?'],
          ['Local engineering', 'Who provides any required site-specific calculations or stamped drawings?'],
          ['Fabrication', 'Which products and components are included?'],
          ['Shipping', 'Where does the quoted delivery service end?'],
          ['Customs clearance', 'Who arranges entry and pays applicable charges?'],
          ['Installation', 'Is an identified local contractor included in the contract?'],
          ['After-sales support', 'Who supplies parts, performs repairs and pays site labor?'],
        ],
      },
      closingParagraphs: [
        'A mounting template and remote technical support can help an installer. They do not replace an agreed local installation service.',
        'For projects combining fabricated signs and digital displays, also confirm responsibility for software, content management, network setup and ongoing support. These may involve separate suppliers.',
      ],
    },
    {
      heading: '2. Factory Price, Landed Cost and Installed Cost',
      images: [
        { src: '/assets/images/guides/zyd-laser-cutting-head-detail.jpg', alt: 'Close-up of a laser cutting head cutting sheet metal', width: 5943, height: 3962 },
        { src: '/assets/images/guides/zyd-press-brake-operator-drawing.jpg', alt: 'Operator setting a press brake against a production drawing', width: 5807, height: 3871 },
        { src: '/assets/images/guides/zyd-cnc-router-cutting-acrylic.jpg', alt: 'CNC router cutting an acrylic sheet with dust extraction', width: 5797, height: 3865 },
      ],
      paragraphs: [
        'These are three different budget figures.',
        'Factory price covers the stated manufacturing scope.',
        'Landed cost adds the applicable costs of transporting and importing the goods to the agreed destination.',
        'Installed project cost adds the work needed to put the sign into service, such as site preparation, permits, electrical connections, access equipment and installation.',
        'Use the following budget structure:',
        'Avoid counting a charge twice if it is already included in the supplier’s delivery price.',
      ],
      callout:
        'Installed project budget = goods and packaging + logistics and import charges + local approval and installation costs + an allowance for unresolved items.',
      calloutAfterParagraph: 5,
      subsections: [
        {
          heading: 'What Costs Should Buyers Check?',
          columns: {
            headers: ['Cost Category', 'Possible Items'],
            rows: [
              ['Product supply', 'Letters, panels, LEDs, power supplies and mounting components'],
              ['Pre-production', 'Samples, artwork development and specialist documentation'],
              ['Packaging', 'Protective materials, cartons, crates and handling provisions'],
              ['Transport', 'Origin collection, international freight and cargo insurance'],
              ['Destination logistics', 'Terminal handling, clearance, storage and final delivery'],
              ['Import charges', 'Duties, applicable additional tariffs, taxes and entry-related fees'],
              ['Site work', 'Survey, wall preparation, wiring and removal of existing signs'],
              ['Installation', 'Labor, lifting equipment, traffic management and access arrangements'],
              ['Approval', 'Permits, engineering review, inspection or evaluation where required'],
              ['Future service', 'Replacement parts, freight, access equipment and repair labor'],
            ],
          },
        },
      ],
      closingParagraphs: [
        'Not every project incurs every charge. The purpose of the list is to identify what is included, excluded or still awaiting confirmation.',
      ],
    },
    {
      heading: '3. Does “Shipping Included” Mean Duties and Taxes Are Included?',
      images: [
        { src: '/assets/images/guides/zyd-export-crates-loaded-on-truck.jpg', alt: 'Timber export crates loaded on a flatbed truck outside the factory', width: 1702, height: 1276 },
      ],
      paragraphs: [
        'No. “Shipping included” does not define customs responsibility, unloading or installation.',
        'Request an agreed delivery term, named place and version—for example, an appropriate Incoterms® 2020 rule—along with a written list of inclusions.',
        'Two terms buyers may encounter are:',
      ],
      bullets: [
        'DAP — Delivered at Place: the seller arranges delivery to the named place, ready for unloading; the buyer generally handles import clearance and applicable import charges.',
        'DDP — Delivered Duty Paid: the seller generally handles import clearance and applicable duties and taxes, delivering to the named place ready for unloading.',
      ],
      closingParagraphs: [
        'Before accepting a DDP quotation, confirm that the proposed arrangement can lawfully operate in the destination country. Identify the importer of record and the documents the buyer will receive.',
        'Neither term, by itself, includes mounting the sign or connecting it to the building’s electrical supply.',
        'Ask about unloading, appointment delivery, restricted access and delivery equipment separately. These details matter when a crate is too large or heavy for the receiving site.',
      ],
    },
    {
      heading: '4. How Much Is the Import Duty on a Custom Sign?',
      paragraphs: [
        'There is no single duty rate for every custom sign imported from China.',
        'The applicable treatment can depend on the destination, tariff classification, product construction, origin and measures in effect when the goods enter the country.',
        'An illuminated sign and a non-electrical metal plaque may require different classification analysis. Do not assume that one code applies to every product in a mixed signage order.',
        'Before confirming the budget, send a customs broker:',
      ],
      bullets: [
        'Product photographs and drawings.',
        'Material descriptions.',
        'Whether the product is illuminated.',
        'Details of electrical components.',
        'Commercial value and country of origin.',
        'Proposed shipping and delivery arrangements.',
      ],
      closingParagraphs: [
        'Ask the broker to confirm classification and applicable charges. A supplier’s suggested HS code is useful information, but it should not be treated as a guaranteed duty assessment.',
      ],
    },
    {
      heading: '5. Who Installs Imported Channel Letters?',
      paragraphs: [
        'An independent local sign installer or suitable contractor may accept the work, but acceptance should be confirmed before production.',
        'Some contractors offer installation-only services. Others may decline customer-supplied signs or require additional documentation.',
        'The installer needs enough information to assess the work.',
      ],
      subsections: [
        {
          heading: 'Send the Installer a Review Package',
          paragraphs: ['Include:'],
          bullets: [
            'Approved artwork and overall dimensions.',
            'Letter depth, materials and estimated weights.',
            'Mounting arrangement and fixing locations.',
            'Wall photographs and substrate information.',
            'Wiring layout, supply requirements and power supply locations.',
            'Proposed service access.',
            'Relevant certification or evaluation documents.',
            'Delivery and installation schedule.',
          ],
        },
      ],
      closingParagraphs: [
        'Ask for a written quotation stating whether it includes permits, electrical work, lifting equipment, unloading and removal of existing signage.',
        'A useful purchasing sequence is to obtain the installer’s review before approving the factory drawings. This allows mounting and access problems to be addressed while changes are still practical.',
      ],
    },
    {
      heading: '6. What Should U.S. Buyers Check for Illuminated Signs?',
      paragraphs: [
        'For U.S. projects, confirm the approval route with the local installer and authority having jurisdiction before manufacture.',
        'UL 48 is a relevant safety standard for electric signs. However, a certified power supply or recognized LED component does not, by itself, establish certification of the completed sign.',
        'Ask what documentation and labeling apply to the actual sign assembly.',
        'Where a field evaluation is proposed, confirm its acceptability, scope, timing and cost in advance. An evaluation may identify changes that must be made; it should not be treated as guaranteed approval after delivery.',
        'Electrical product review, structural approval and sign permits address different issues. Confirm each applicable requirement for the installation site.',
      ],
    },
    {
      heading: '7. What Is the MOQ for Custom Signs from China?',
      paragraphs: [
        'There is no universal minimum order quantity.',
        'A manufacturer may quote a single custom logo, a complete storefront set or a larger batch of room signs. Feasibility depends on setup, material purchasing, finishing and packing requirements.',
        'For channel letters, specify whether the quantity means individual letters or complete sign sets.',
        'For room and wayfinding signs, provide the complete schedule. A batch containing many different names may involve different production work from a batch of identical panels.',
        'Ask for the minimum order quantity and any setup charges for your actual specification.',
      ],
    },
    {
      heading: '8. What Happens If the Sign Is Damaged or Stops Working?',
      images: [
        { src: '/assets/images/guides/zyd-crate-interior-packed-letters.jpg', alt: 'Open timber crate showing channel letters wrapped in protective foam and film', width: 1280, height: 1707 },
      ],
      paragraphs: [
        'Agree on the process before paying the deposit.',
        'Separate three situations:',
      ],
      subsections: [
        {
          heading: 'Transit Damage',
          paragraphs: [
            'Confirm the reporting procedure, evidence required and responsibility for handling the claim.',
            'Photograph the packaging on arrival and record visible damage. Follow the agreed delivery inspection process and applicable claim deadlines.',
          ],
        },
        {
          heading: 'Manufacturing Defects',
          paragraphs: [
            'Define the warranty period, covered items and remedy.',
            'Ask whether support means replacement parts, repair, replacement of the affected product or another agreed solution.',
          ],
        },
        {
          heading: 'Installation or Site-Related Problems',
          paragraphs: [
            'Incorrect wiring, unsuitable fixings, site modifications and supply problems may fall outside the manufacturer’s responsibility.',
            'Agree on how the manufacturer and installer will exchange photographs, measurements and test information to identify the cause.',
          ],
        },
        {
          heading: 'Who Pays for Repair Labor?',
          paragraphs: ['A parts warranty does not necessarily include:'],
          bullets: [
            'Local technician charges.',
            'Lift rental.',
            'Removal and reinstallation.',
            'Replacement freight.',
            'Duties or taxes on replacement shipments.',
          ],
        },
      ],
      closingParagraphs: [
        'These items should be addressed expressly. For a larger project, discuss spare components and retain the final wiring and component records.',
      ],
    },
    {
      heading: '9. A Responsibility Checklist Before Ordering',
      paragraphs: ['Use this as a discussion template, then name the responsible party in the contract.'],
      columns: {
        headers: ['Task', 'Party to Name'],
        rows: [
          ['Final artwork approval', 'Buyer or appointed designer'],
          ['Manufacturing to approved drawings', 'Manufacturer'],
          ['Site measurements and substrate verification', 'Local project team'],
          ['Local permits and engineering', 'Appointed local provider'],
          ['Export documents', 'Contractually agreed supplier or agent'],
          ['Import clearance and charges', 'Party established by the delivery arrangement'],
          ['Delivery receiving and unloading', 'Agreed logistics or site team'],
          ['Installation and electrical connection', 'Appointed qualified contractors'],
          ['Defect assessment and remedy', 'Manufacturer and installer within their agreed scopes'],
          ['Site repair labor and replacement freight', 'As expressly agreed in the warranty'],
        ],
      },
      closingParagraphs: ['Any row without an identified owner is an unresolved project item.'],
    },
    {
      heading: 'Discuss Your Signage Project with ZYD SIGN',
      paragraphs: [
        'Dalian ZhiYuDao Signage & Tech. Co.Ltd — ZYD SIGN manufactures custom illuminated letters, metal lettering, room signs and wayfinding signage.',
        'For a project inquiry, share your artwork, dimensions, quantities, installation photographs and delivery location. Include requirements supplied by your installer, customs broker or local authority.',
        'Request a quotation that separates product supply, packaging, delivery arrangements and any additional services. A clearly defined scope helps you compare suppliers and plan the work that remains at the destination.',
        'Contact ZYD SIGN to discuss manufacturing specifications and the supply scope for your custom signage project.',
      ],
    },
  ],
  checklistTitle: 'Before you approve the factory drawings',
  checklistIntro:
    'Importing works when the commercial terms, the installation review and the responsibility split are settled before production starts. Each item below should exist in writing, not in conversation.',
  checklist: [
    'Installer review obtained before factory drawings are approved.',
    'Delivery term, named place and written list of inclusions agreed.',
    'Importer of record identified, and the documents the buyer receives confirmed.',
    'Customs broker asked to review the actual product before the budget is fixed.',
    'Warranty scope written to state parts, labor, freight and access separately.',
    'Reporting procedure and claim evidence agreed before the deposit is paid.',
    'Every row of the responsibility table assigned to a named party.',
  ],
  faqs: [
    {
      question: 'Is importing custom signage from China always cheaper?',
      answer:
        'No. Compare equivalent specifications and complete installed costs. Freight, approval work, installation and servicing can change the result.',
    },
    {
      question: 'Can a Chinese manufacturer arrange local installation?',
      answer:
        'Possibly, if an identified local service is offered and included in the contract. Do not assume installation is included because drawings or technical support are supplied.',
    },
    {
      question: 'Does door-to-door shipping include installation?',
      answer:
        'No. It describes a delivery service. Confirm customs charges, unloading and site access separately, and obtain an installation agreement.',
    },
    {
      question: 'Who should confirm the import duty?',
      answer:
        'Ask a customs broker to review the actual product and current destination requirements before finalizing the budget.',
    },
    {
      question: 'What should I ask a channel letters supplier before ordering?',
      answer:
        'Ask for the construction, materials, lighting specification, approval documentation, mounting details, service-access method, delivery scope and written warranty terms.',
    },
    {
      question: 'What if my local installer will not accept the sign?',
      answer:
        'Resolve the issue before production. Ask the installer to state the reason and determine whether revised drawings, different components or another approval route can address the issue.',
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
  asideTitle: 'Separate the three numbers',
  asideText:
    'Ask for the factory price, the landed cost and the installed project cost as three separate figures, with the delivery term and the responsible party named for each cost line.',
};

export default function ImportingCustomSignageGuide() {
  return <GuideArticle slug="importing-custom-signage-from-china" {...guide} />;
}
