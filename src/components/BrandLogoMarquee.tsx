import Image from 'next/image';

type Brand = {
  name: string;
  src: string;
  width: number;
  height: number;
  dark?: boolean;
};

const brands: Brand[] = [
  { name: "McDonald's", src: '/brand-logos/mcdonalds.png', width: 287, height: 242 },
  { name: 'KFC', src: '/brand-logos/kfc.png', width: 408, height: 628 },
  { name: 'Starbucks', src: '/brand-logos/starbucks.png', width: 894, height: 777 },
  { name: 'Tesla', src: '/brand-logos/tesla.png', width: 366, height: 441 },
  { name: 'Honda', src: '/brand-logos/honda.png', width: 508, height: 321 },
  { name: 'The Setai Sea of Galilee', src: '/brand-logos/setai.png', width: 710, height: 594 },
  { name: 'Louis Vuitton', src: '/brand-logos/louis-vuitton.png', width: 427, height: 510 },
  { name: 'Windy Ridge Residences', src: '/brand-logos/windy-ridge.png', width: 1069, height: 496, dark: true },
  { name: 'Wuling', src: '/brand-logos/wuling.png', width: 786, height: 187 },
  { name: 'Jetour', src: '/brand-logos/jetour.png', width: 679, height: 155 },
  { name: 'Coca-Cola', src: '/brand-logos/coca-cola.png', width: 451, height: 315 },
  { name: 'Custom project mark', src: '/brand-logos/project-brand-mark.png', width: 466, height: 398 },
];

function LogoItem({ brand }: { brand: Brand }) {
  return (
    <div className={`brand-marquee-item${brand.dark ? ' brand-marquee-item--dark' : ''}`} role="img" aria-label={brand.name}>
      <Image
        src={brand.src}
        alt={brand.name}
        width={brand.width}
        height={brand.height}
        className="brand-marquee-logo"
        draggable={false}
      />
    </div>
  );
}

export default function BrandLogoMarquee() {
  return (
    <section className="brand-marquee-section" aria-labelledby="brand-marquee-title">
      <div className="brand-marquee-heading">
        <p className="brand-marquee-eyebrow">Brand marks in signage</p>
        <h2 id="brand-marquee-title">Brand artwork, made for your project</h2>
      </div>
      <div className="brand-marquee-viewport" tabIndex={0} aria-label="Examples of brand marks used in custom signage">
        <div className="brand-marquee-track">
          <div className="brand-marquee-group">
            {brands.map(brand => <LogoItem key={brand.name} brand={brand} />)}
          </div>
          <div className="brand-marquee-group" aria-hidden="true">
            {brands.map(brand => <LogoItem key={`duplicate-${brand.name}`} brand={brand} />)}
          </div>
        </div>
      </div>
      <p className="brand-marquee-note">Brand names and logos belong to their respective owners. Shown as visual references for custom signage only; no endorsement is implied.</p>
    </section>
  );
}
