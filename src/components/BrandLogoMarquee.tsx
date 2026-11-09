import React from 'react';

type Brand = { name: string; mark: React.ReactNode; wordmark: React.ReactNode };

const brands: Brand[] = [
  {
    name: "McDonald's",
    mark: <svg viewBox="0 0 52 44" aria-hidden="true" className="h-10 w-12"><path d="M5 39C8 17 13 5 19 5c6 0 10 17 12 34C33 22 37 5 43 5c3 0 5 5 7 13" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg>,
    wordmark: <span className="text-[1.15rem] font-black tracking-tight">McDonald&apos;s</span>,
  },
  {
    name: 'KFC',
    mark: <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full bg-[#c41230] text-[0.68rem] font-black tracking-tight text-white">KFC</span>,
    wordmark: <span className="text-xl font-black tracking-[0.08em] text-[#c41230]">KFC</span>,
  },
  {
    name: 'Starbucks',
    mark: <svg viewBox="0 0 48 48" aria-hidden="true" className="h-10 w-10"><circle cx="24" cy="24" r="22" fill="currentColor"/><path d="M24 10l3.1 8.1 8.5.4-6.6 5.3 2.3 8.2-7.3-4.6-7.3 4.6 2.3-8.2-6.6-5.3 8.5-.4L24 10z" fill="white"/><path d="M12 37h24" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>,
    wordmark: <span className="text-[0.95rem] font-black tracking-[0.16em] text-[#006241]">STARBUCKS</span>,
  },
  {
    name: 'Tesla',
    mark: <svg viewBox="0 0 48 48" aria-hidden="true" className="h-10 w-10"><path d="M7 12c5-4 11-6 17-6s12 2 17 6l-4 4c-4-3-8-4-13-4s-9 1-13 4l-4-4zm7 5h20l-8 7v17h-4V24l-8-7z" fill="currentColor"/></svg>,
    wordmark: <span className="text-lg font-black tracking-[0.22em] text-[#e82127]">TESLA</span>,
  },
  {
    name: 'Honda',
    mark: <svg viewBox="0 0 48 48" aria-hidden="true" className="h-10 w-10"><rect x="5" y="8" width="38" height="32" rx="5" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M15 15h4v7h10v-7h4v18h-4v-7H19v7h-4z" fill="currentColor"/></svg>,
    wordmark: <span className="text-xl font-black tracking-[0.12em] text-[#cc0000]">HONDA</span>,
  },
  {
    name: 'The Setai Sea of Galilee',
    mark: <svg viewBox="0 0 64 52" aria-hidden="true" className="h-10 w-12"><path d="M18 49V20m28 29V20M18 22C4 20 4 9 8 6c7 0 11 6 10 16zm0-2C19 7 28 3 34 5c2 8-5 14-16 15zm28 2C32 20 32 9 36 6c7 0 11 6 10 16zm0-2C47 7 56 3 62 5c2 8-5 14-16 15z" fill="currentColor"/></svg>,
    wordmark: <span className="text-[0.9rem] font-serif font-semibold tracking-[0.15em]">THE SETAI <small className="mt-1 block text-[0.52rem] tracking-[0.25em]">SEA OF GALILEE</small></span>,
  },
  {
    name: 'Louis Vuitton',
    mark: <span aria-hidden="true" className="font-serif text-4xl leading-none tracking-[-0.18em]">L<span className="relative -left-1">V</span></span>,
    wordmark: <span className="text-[0.95rem] font-serif font-semibold tracking-[0.15em]">LOUIS VUITTON</span>,
  },
];

function LogoItem({ brand }: { brand: Brand }) {
  return (
    <div className="brand-marquee-item" role="img" aria-label={brand.name}>
      <span className="brand-marquee-mark">{brand.mark}</span>
      <span className="brand-marquee-wordmark">{brand.wordmark}</span>
    </div>
  );
}

export default function BrandLogoMarquee() {
  return (
    <section className="brand-marquee-section" aria-labelledby="brand-marquee-title">
      <div className="brand-marquee-heading">
        <p className="brand-marquee-eyebrow">Selected project references</p>
        <h2 id="brand-marquee-title">Brand signage in real projects</h2>
      </div>
      <div className="brand-marquee-viewport" tabIndex={0} aria-label="Scrolling brand signage project references">
        <div className="brand-marquee-track">
          <div className="brand-marquee-group">
            {brands.map(brand => <LogoItem key={brand.name} brand={brand} />)}
          </div>
          <div className="brand-marquee-group" aria-hidden="true">
            {brands.map(brand => <LogoItem key={`duplicate-${brand.name}`} brand={brand} />)}
          </div>
        </div>
      </div>
      <p className="brand-marquee-note">Brand names and marks are shown to identify signage project references.</p>
    </section>
  );
}