import Image from 'next/image';
import Link from 'next/link';

const gallery = [
  { src: 'pylon-retail-tenant-directory.jpg', width: 4000, height: 6000, title: 'Retail tenant directory', text: 'A freestanding directory with stacked tenant faces and a separate site identity at the top.', alt: 'Installed retail pylon sign with individual tenant panels and a metal-clad base' },
  { src: 'pylon-sports-park-directory.jpg', width: 4000, height: 6000, title: 'Sports park and parking', text: 'Two display faces combine activity graphics and parking directions. The installation photograph also shows the base interface.', alt: 'Two-sided sports park pylon with projecting graphic panels and visible base plates during installation' },
  { src: 'pylon-residential-entry.jpg', width: 4000, height: 6000, title: 'Residential entrance identity', text: 'Raised lettering, decorative side details and a display panel give this entrance sign a different visual hierarchy.', alt: 'Victoria Mansion entrance pylon with raised lettering and decorative metal detailing' },
  { src: 'pylon-parking-lighting-check.jpg', width: 1920, height: 2560, title: 'Illuminated parking totem', text: 'A workshop lighting check shows illuminated parking graphics and a warm perimeter detail before site installation.', alt: 'Parking totem illuminated in the workshop with a glowing P symbol and warm edge lighting' },
  { src: 'pylon-logistics-directional.jpg', width: 1080, height: 1440, title: 'Logistics site directions', text: 'Separate truck, warehouse and office directions make the sign useful at a decision point, beyond displaying a company name.', alt: 'Red and white freestanding logistics sign with directions for trucks, warehouse and office entrance' },
];

export default function PylonProjectEvidence() {
  return <>
    <section className="bg-white py-14 lg:py-20" aria-labelledby="pylon-workshop-heading">
      <div className="container">
        <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-3">From drawing to illuminated sign</p>
        <div className="max-w-3xl mb-8">
          <h2 id="pylon-workshop-heading" className="text-3xl lg:text-4xl font-black tracking-tight text-slate-950 mb-4">Multi-brand dealership pylon: workshop views</h2>
          <p className="text-slate-600 leading-relaxed">These photographs show the same automotive directory unlit and during a workshop lighting check. Separate brand panels organise the display, while the header and lower graphics complete the identity. This is a manufacturing reference, rather than an installed-site photograph.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {src:'pylon-dealership-unlit.jpg',width:1920,height:1080,title:'Unlit workshop view',alt:'Automotive multi-brand pylon sign lying horizontally in the workshop before illumination'},
            {src:'pylon-dealership-lighting-check.jpg',width:1080,height:1440,title:'Illuminated workshop view',alt:'The same automotive multi-brand pylon sign during an illuminated workshop check'},
          ].map(photo=><figure key={photo.src} className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <div className="relative h-72 sm:h-96"><Image src={'/assets/images/'+photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw" className="object-contain" /></div>
            <figcaption className="px-5 py-4 font-bold text-slate-900">{photo.title}</figcaption>
          </figure>)}
        </div>
        <div className="mt-6 rounded-2xl bg-slate-950 text-white p-6 sm:p-8">
          <h3 className="text-xl font-black mb-4">Project drawing example</h3>
          <dl className="grid sm:grid-cols-3 gap-5">
            <div><dt className="text-sm text-slate-400">Overall height</dt><dd className="text-2xl font-bold mt-1">4,000 mm</dd></div>
            <div><dt className="text-sm text-slate-400">Overall width</dt><dd className="text-2xl font-bold mt-1">1,500 mm</dd></div>
            <div><dt className="text-sm text-slate-400">Cabinet depth</dt><dd className="text-2xl font-bold mt-1">200 mm</dd></div>
          </dl>
          <p className="text-sm text-slate-300 mt-5 leading-relaxed">Dimensions shown on the supplied drawing for this example. Your sign dimensions, panel layout, electrical supply and mounting interface are specified for your own site.</p>
          <details className="mt-6 border-t border-white/20 pt-5">
            <summary className="cursor-pointer font-bold text-blue-300">View the project elevation drawing</summary>
            <figure className="mt-5 overflow-hidden rounded-xl bg-white"><Image src="/assets/images/pylon-dealership-elevation-drawing.png" alt="Project elevation drawing showing the dealership pylon at 4000 mm high, 1500 mm wide and 200 mm deep" width={3116} height={2202} sizes="(min-width: 1024px) 1100px, 100vw" className="h-auto w-full" /><figcaption className="px-5 py-4 text-sm text-slate-600">Project-specific front, side and back elevations. The component and electrical notes apply to this drawing, not to every pylon sign. Foundation and local approval details require separate coordination.</figcaption></figure>
            <a href="/assets/images/pylon-dealership-elevation-drawing.png" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-blue-300 underline underline-offset-4">Open the full-size drawing</a>
          </details>
        </div>
      </div>
    </section>

    <section className="bg-slate-100 py-14 lg:py-20" aria-labelledby="pylon-projects-heading">
      <div className="container">
        <div className="max-w-3xl mb-8"><p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-3">Project photographs</p><h2 id="pylon-projects-heading" className="text-3xl lg:text-4xl font-black tracking-tight text-slate-950 mb-4">Pylon and totem signs in different settings</h2><p className="text-slate-600 leading-relaxed">Compare tenant directories, entrance identification and directional totems. Each photograph shows a particular configuration; dimensions and materials are confirmed separately for a new quotation.</p></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map(photo=><figure key={photo.src} className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="relative aspect-[3/4] bg-slate-50"><Image src={'/assets/images/'+photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-contain" /></div>
            <figcaption className="p-5"><h3 className="text-lg font-black text-slate-950 mb-2">{photo.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{photo.text}</p></figcaption>
          </figure>)}
          <div className="rounded-2xl bg-slate-950 p-7 text-white flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-blue-300 mb-4">Prepare your quotation</p><h3 className="text-2xl font-black mb-4">Which configuration fits your site?</h3><p className="text-slate-300 leading-relaxed mb-6">Send the location, approximate height and width, number of faces, artwork and lighting preference. Include site photos and identify details still awaiting local confirmation.</p><Link href="/contact?product=pylon" className="button button-green-base px-5 py-4 rounded-xl text-center text-sm">Get a custom pylon sign quote</Link><Link href="/guides/pylon-sign-site-information-checklist" className="mt-5 text-sm text-blue-300 underline underline-offset-4">Use the site information checklist</Link>
          </div>
        </div>
      </div>
    </section>
  </>;
}
