import Image from 'next/image';
import Link from 'next/link';

const examples = [
  {
    title: 'Illuminated letters, checked in the workshop',
    image: 'channel-letters-white-lighting-check.jpg',
    alt: 'White illuminated channel letters during a ZYD workshop lighting check',
    text: 'See the real letter faces, returns and illuminated appearance. Your artwork, dimensions, finish and mounting details are agreed before fabrication.',
    details: '/products/custom-channel-letters',
    detailLabel: 'See letter options and workshop photos',
    product: 'letters',
    quoteLabel: 'Get a channel letter quote',
  },
  {
    title: 'A multi-brand pylon, from drawing to lighting check',
    image: 'pylon-dealership-lighting-check.jpg',
    alt: 'Illuminated multi-brand dealership pylon photographed in the ZYD workshop',
    text: 'Follow one directory pylon through its dimensioned elevation and unlit and illuminated workshop views. This is a production record, with project-specific dimensions.',
    details: '/case-studies/multi-brand-dealership-pylon-sign',
    detailLabel: 'View the drawing and production case',
    product: 'pylon',
    quoteLabel: 'Get a pylon sign quote',
  },
];

export default function HomeProjectEvidence() {
  return (
    <section className="bg-slate-100 py-10 lg:py-14" aria-labelledby="home-production-evidence">
      <div className="w-[92%] max-w-[1440px] mx-auto">
        <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2">Real fabrication, clear supply scope</p>
        <h2 id="home-production-evidence" className="text-2xl lg:text-3xl font-black text-slate-950 mb-3">See what goes into your sign</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 mb-6">Workshop photographs and project drawings help you review the details before discussing your own sign package.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {examples.map(example => (
            <article key={example.product} className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white flex flex-col">
              <Link href={example.details} className="relative block aspect-[16/10] bg-slate-200">
                <Image src={'/assets/images/' + example.image} alt={example.alt} fill sizes="(min-width: 1565px) 708px, (min-width: 768px) 45vw, 92vw" className="object-contain" />
              </Link>
              <div className="p-5 lg:p-6 flex flex-col flex-1">
                <h3 className="text-xl font-black leading-snug text-slate-950 mb-3">{example.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-5">{example.text}</p>
                <Link href={example.details} className="text-sm font-bold text-blue-700 underline underline-offset-4 mb-5">{example.detailLabel} →</Link>
                <Link href={'/contact?product=' + example.product} className="mt-auto button-green-base text-white text-sm font-black rounded-lg px-4 py-3 text-center">{example.quoteLabel}</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 lg:p-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-black text-slate-950 mb-2">Planning and design → fabrication → packing and delivery</h3>
            <p className="text-sm leading-relaxed text-slate-600">EXW, FOB, CIF and DDP options are available by quotation. On-site installation is not included; your local team arranges installation and site works.</p>
          </div>
          <Link href="/packaging-shipping" className="shrink-0 text-sm font-bold text-blue-700 underline underline-offset-4">See our packing and delivery scope →</Link>
        </div>
      </div>
    </section>
  );
}
