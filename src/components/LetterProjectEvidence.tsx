import Image from 'next/image';
import Link from 'next/link';

const photos = {
  front: [
    {src:'channel-letters-red-unlit-workshop.jpg',width:3000,height:4000,title:'Unlit face and letter depth',text:'The unlit workshop view shows the face colour, dimensional returns and separate letter units.',alt:'Red dimensional channel letters laid out unlit in the workshop with wiring and power supplies nearby'},
    {src:'channel-letters-red-white-lighting-check.jpg',width:1279,height:1706,title:'Front illumination check',text:'Red and white faces are illuminated on the workshop bench. Final brightness and appearance are reviewed for the installation setting.',alt:'Red and white front-lit channel letters illuminated during a workshop lighting check'},
    {src:'channel-letters-custom-logo-workshop.jpg',width:1440,height:1080,title:'Letters and a separate logo element',text:'A shaped illuminated logo and individual lettering form one coordinated set. Logo geometry and letter count belong in the quotation brief.',alt:'Custom red illuminated logo beside dimensional lettering during a workshop check'},
  ],
  halo: [
    {src:'halo-letters-infinite-workshop.jpg',width:1706,height:1279,title:'Dark faces with warm rear glow',text:'The lettering and shaped logo are illuminated from behind. This workshop view shows the appearance against a temporary backing, not a finished wall.',alt:'Infinite Automation dark-faced dimensional letters and shaped logo with warm halo illumination in the workshop'},
    {src:'halo-letters-properties-workshop.jpg',width:1441,height:1080,title:'Lettering, graphic and outline details',text:'A property-brand sign combines lettering with roofline and icon elements. Include every illuminated element when requesting a quotation.',alt:'Cashflow Properties lettering with roofline and icon shapes showing warm rear illumination on a workshop bench'},
  ],
};

export default function LetterProjectEvidence({variant}:{variant:'front'|'halo'}) {
  const halo=variant==='halo';
  return <section className="bg-white py-14 lg:py-20" aria-labelledby="letter-evidence-heading">
    <div className="container">
      <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-3">Workshop photographs</p>
      <h2 id="letter-evidence-heading" className="text-3xl lg:text-4xl font-black tracking-tight text-slate-950 mb-4">{halo?'See the rear-glow construction in actual sign sets':'See the faces, depth and illumination before installation'}</h2>
      <p className="max-w-3xl text-slate-600 leading-relaxed mb-8">{halo?'These photographs show custom dimensional lettering and logo elements during workshop lighting checks. The final halo depends on the actual wall colour, texture and mounting distance.':'These photographs show custom letter and logo sets during workshop preparation and lighting checks. Compare the unlit face appearance with the illuminated result, then specify the artwork and installation requirements for your own project.'}</p>
      <div className={`grid gap-6 sm:grid-cols-2 ${halo?'':'lg:grid-cols-3'}`}>
        {photos[variant].map(photo=><figure key={photo.src} className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <div className="relative aspect-[4/3]"><Image src={'/assets/images/'+photo.src} alt={photo.alt} fill sizes={halo?'(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw':'(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw'} className="object-contain" /></div>
          <figcaption className="p-5"><h3 className="text-lg font-black text-slate-950 mb-2">{photo.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{photo.text}</p></figcaption>
        </figure>)}
      </div>
      <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8 grid lg:grid-cols-[minmax(0,1fr)_auto] gap-6 items-center">
        <div><h3 className="text-xl font-black text-slate-950 mb-3">Custom dimensions, specified from your artwork</h3><p className="text-slate-700 leading-relaxed">Overall width, letter height, return depth, quantity, finish and mounting details are confirmed on the project drawing. These photographs are construction references, not a standard-size catalogue. Send approximate dimensions if the final size is still being decided.</p></div>
        <div className="flex flex-col gap-4"><Link href={halo?'/contact?product=halo':'/contact?product=letters'} className="button button-green-base px-6 py-4 rounded-xl text-sm text-center">Get a quote for your design</Link><Link href="/guides/how-much-do-custom-channel-letters-cost" className="text-sm font-bold text-blue-700 underline underline-offset-4">What goes into a channel letter quote?</Link></div>
      </div>
    </div>
  </section>;
}
