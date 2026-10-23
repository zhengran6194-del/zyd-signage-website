import Image from 'next/image';
import Link from 'next/link';

const products = [
  { title: 'Illuminated Channel Letters', text: 'Custom dimensional letters for storefronts, facades and reception areas. Review front-lit construction, materials, fixing and power requirements.', image: '/assets/images/cat-illuminated.jpg', path: '/products/custom-channel-letters', product: 'letters', action: 'Get a channel letter quote', alt: 'Illuminated dimensional lettering from the ZYD product collection' },
  { title: 'Pylon & Monument Signs', text: 'Freestanding identification for site entrances and roadside locations. Coordinate the structure, shipping sections, assembly and installation scope.', image: '/assets/images/cat-outdoor.webp', path: '/products/outdoor-pylon-monument-sign', product: 'pylon', action: 'Submit a pylon sign brief', alt: 'Freestanding outdoor signage from the ZYD product collection' },
];

export default function FeaturedSignProducts() {
  return <section className="bg-white py-12 lg:py-20" aria-labelledby="featured-sign-products">
    <div className="container">
      <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-3">Our core product lines</p>
      <h2 id="featured-sign-products" className="text-3xl lg:text-4xl font-black text-slate-950 mb-4">Find the right sign for your project</h2>
      <p className="text-slate-600 max-w-2xl mb-8">Start with the sign you need. Send artwork, approximate dimensions and the delivery destination for a project-specific quotation.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => <article key={product.product} className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 flex flex-col">
          <Link href={product.path} className="block relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></Link>
          <div className="p-6 lg:p-8 flex flex-col flex-1">
            <h3 className="text-2xl font-black text-slate-950 mb-3"><Link href={product.path}>{product.title}</Link></h3>
            <p className="text-slate-600 mb-6">{product.text}</p>
            <div className="flex flex-col gap-4 mt-auto">
              <Link href={product.path} className="text-sm font-bold text-blue-700 underline underline-offset-4">View specifications & supply scope</Link>
              <Link href={'/contact?product=' + product.product} className="button button-green-base px-5 py-4 rounded-xl text-sm text-center">{product.action}</Link>
              {product.product === 'letters' && <Link href="/products/custom-halo-lit-letters" className="text-sm font-bold text-blue-700">Looking for rear glow? Explore halo-lit letters →</Link>}
            </div>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
