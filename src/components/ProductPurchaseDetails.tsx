import Link from 'next/link';

const briefs = {
  letters: {
    title: 'Specify your illuminated letter set', action: 'Get a channel letter quote',
    intro: 'Use these decisions to define the quotation. The approved drawing and written quote establish the final construction, supplied accessories and site work.',
    items: [
      ['Lighting effect', 'Front-lit letters illuminate the face. For rear glow, review the halo-lit alternative. Send daytime and night-time appearance references, face colour and preferred light colour; confirm the effect against the actual wall and artwork.'],
      ['Materials and finish', 'State letter height, depth, face material, metal body and finish. Aluminum, stainless steel and coated-sheet routes should be compared against the application; identify exposed edges and brand colour references.'],
      ['Fixing and wiring', 'Send a wall photo, substrate and installation height. Confirm individual fixing or raceway mounting, cable exits, access for maintenance and the installer’s fixing requirements before fabrication.'],
      ['Power and supplied parts', 'Confirm destination supply voltage, power supply position and the specified LED circuit with the project team. Ask whether drivers, wiring information, mounting templates and fixings are included; on-site installation and local electrical connection are not included in ZYD supply.'],
    ],
    brief: 'Send vector artwork if available, overall width and letter height, set quantity, finish and lighting preference, wall photos and ship-to city/country.',
  },
  pylon: {
    title: 'Plan the pylon from structure to delivery', action: 'Submit a pylon sign brief',
    intro: 'ZYD can plan, design, fabricate, pack and transport the sign. On-site installation is not included. Confirm the supply scope and local site responsibilities in writing before production.',
    items: [
      ['Structure and site inputs', 'Provide overall height and width, number of faces, panel layout, site location and any available structural requirements. Frame, base plate, anchors and foundation interfaces require project-specific review; local engineering acceptance and approvals must be agreed with the site team.'],
      ['Shipping and packing', 'Confirm whether the sign ships assembled or in sections, packed dimensions, shipment method and destination access. Request a packing proposal and identify unloading or lifting equipment needed at the delivery point.'],
      ['Assembly and maintenance', 'Agree the section joints, assembly sequence, connection details, cable routes and service-panel access on the drawings. Confirm who assembles and lifts the sign, and which instructions and hardware the supplier will provide.'],
      ['Lighting and supply boundary', 'Specify illuminated panels or letters, power location, finish and access for servicing. Ask the quote to identify the frame, cladding, faces, lighting, drivers and accessories included; foundations, ground works, site installation and electrical connection are excluded from ZYD supply and arranged locally.'],
    ],
    brief: 'Send site photos or a plan, approximate height and width, quantity and number of faces, artwork, lighting preference, site city/country and delivery destination.',
  },
};

export default function ProductPurchaseDetails({ product }: { product: keyof typeof briefs }) {
  const brief = briefs[product];
  return <section className="bg-white py-12 lg:py-16" aria-labelledby="purchase-details">
    <div className="container">
      <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-3">Before you request a quote</p>
      <h2 id="purchase-details" className="text-3xl font-black text-slate-950 mb-4">{brief.title}</h2>
      <p className="text-slate-600 max-w-3xl mb-8">{brief.intro}</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8" aria-label="Order essentials">
        {[
          ['Minimum order', '1 set'],
          ['Design support', 'Free design by our designers'],
          ['Typical production', '7–15 days'],
          ['Warranty', '1 year'],
        ].map(([label, value]) => <div key={label} className="min-w-0 rounded-xl border border-blue-100 bg-blue-50 p-4"><p className="text-xs font-bold text-slate-600 mb-2">{label}</p><p className="text-lg font-black text-slate-950">{value}</p></div>)}
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-8">Confirm the production schedule with the approved drawings and order scope. Design review and transport time are scheduled separately from production.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {brief.items.map(([title, text]) => <div key={title} className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-xl font-black text-slate-950 mb-3">{title}</h3><p className="text-slate-600 leading-relaxed">{text}</p></div>)}
      </div>
      <div className="mt-8 rounded-2xl border border-slate-200 p-6 lg:p-8">
        <h3 className="text-xl font-black text-slate-950 mb-4">From free design to drawing approval</h3>
        <ol className="list-decimal pl-5 space-y-3 text-sm leading-relaxed text-slate-600">
          <li>Send your logo or reference, approximate dimensions, quantity, site photographs and delivery destination. Unknown details can be discussed with our designers.</li>
          <li>Our designers prepare a free design for review. Check the artwork, dimensions, colours, lighting and proposed mounting arrangement with your project team.</li>
          <li>Confirm the final drawing and written supply scope before fabrication. For pylon signs, coordinate site-dependent structural and foundation interfaces with your local team.</li>
          <li>Agree the production schedule, packing and delivery arrangements for the approved order. Typical production takes 7–15 days; on-site installation is not included.</li>
        </ol>
      </div>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
        <h3 className="text-xl font-black text-slate-950 mb-3">1-year warranty and after-sales contact</h3>
        <p className="text-sm leading-relaxed text-slate-600">If an issue occurs, contact our team with the order reference, a description and clear photos or video. We will review the issue and discuss the appropriate next steps. Confirm warranty coverage and any parts, labour or transport arrangements in the order terms. On-site installation and local site work are not included.</p>
      </div>
      <div className="mt-6 rounded-2xl bg-blue-50 p-6 lg:p-8">
        <h3 className="text-xl font-black text-slate-950 mb-3">Start with what you have</h3>
        <p className="text-slate-700 mb-5">{brief.brief} Unknown details can be marked for review. Request fabrication, accessories, packing and freight as separate quote lines, with exclusions identified.</p>
        <Link href={'/contact?product=' + product} className="button button-green-base px-6 py-4 rounded-xl text-center text-sm">{brief.action}</Link>
      </div>
    </div>
  </section>;
}
