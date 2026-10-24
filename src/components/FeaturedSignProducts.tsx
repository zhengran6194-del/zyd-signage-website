import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    "title": "Illuminated Letters",
    "text": "Custom front-lit and dimensional lettering.",
    "image": "cat-illuminated.jpg",
    "path": "custom-channel-letters",
    "product": "letters"
  },
  {
    "title": "Pylon Signs",
    "text": "Freestanding signs for entrances and roadsides.",
    "image": "cat-outdoor.webp",
    "path": "outdoor-pylon-monument-sign",
    "product": "pylon"
  },
  {
    "title": "Landscape & Furniture",
    "text": "Custom outdoor seating and landscape features.",
    "image": "landscape-bench.jpg",
    "path": "custom-landscape-furniture",
    "product": "landscape"
  },
  {
    "title": "LED Neon Signs",
    "text": "Custom neon flex for brands and interiors.",
    "image": "cat-neon.webp",
    "path": "custom-led-neon-sign",
    "product": "neon"
  },
  {
    "title": "Metal & Acrylic Signs",
    "text": "Dimensional logos, plaques and identification.",
    "image": "cat-metal.jpg",
    "path": "metal-acrylic-logo-sign",
    "product": "metal"
  },
  {
    "title": "Custom Planter Box",
    "text": "Architectural planters for commercial spaces.",
    "image": "custom-planter-box.jpg",
    "path": "custom-planter-box",
    "product": "planter"
  }
];

export default function FeaturedSignProducts() {
  return <section className="bg-white py-10 lg:py-14" aria-labelledby="featured-sign-products">
    <div className="w-[92%] max-w-[1440px] mx-auto">
      <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2">Commercial products</p>
      <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
        <h2 id="featured-sign-products" className="text-2xl lg:text-3xl font-black text-slate-950">Built for your commercial project</h2>
        <Link href="/products" className="text-sm font-bold text-blue-700 underline underline-offset-4">All products →</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
        {products.map((product) => <article key={product.product} className="group min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white flex flex-col shadow-sm transition-shadow hover:shadow-md">
          <Link href={'/products/' + product.path} className="block relative aspect-square overflow-hidden bg-slate-100"><Image src={'/assets/images/' + product.image} alt={product.title} fill sizes="(min-width: 1536px) 225px, (min-width: 1024px) 16vw, (min-width: 640px) 31vw, 46vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /></Link>
          <div className="p-3 lg:p-4 flex flex-col flex-1">
            <h3 className="text-sm font-black leading-snug text-slate-950 min-h-[2.5rem] mb-2"><Link href={'/products/' + product.path}>{product.title}</Link></h3>
            <p className="text-xs leading-relaxed text-slate-600 mb-4">{product.text}</p>
            <div className="mt-auto flex flex-col gap-3">
              <Link href={'/products/' + product.path} className="button-green-base rounded-lg px-2 py-2.5 text-xs font-black text-center text-white">View details</Link>
              <Link href={'/contact?product=' + product.product} className="text-xs font-bold text-blue-700 text-center py-1" aria-label={'Request a quote for ' + product.title}>Request a quote →</Link>
            </div>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
