import type { Metadata } from 'next';
import { buildPageMetadata, ogImages, siteConfig } from '@/config/site';
import JsonLd from '@/components/JsonLd';

const path = '/guides/custom-braille-door-signs';
const title = 'Custom Braille Door Signs: Thoughtful Design Within Reach';
const description = 'Custom Braille door signs and tactile room identification signs for hotels, offices, healthcare, education, and public buildings, with materials and accessibility requirements confirmed per project.';

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.wayfinding, type: 'article' });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `${siteConfig.url}${path}`;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteConfig.url}/guides` },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ],
      },
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: title,
        description,
        mainEntityOfPage: url,
        author: { '@type': 'Person', name: 'Aaron' },
        publisher: { '@id': `${siteConfig.url}/#organization` },
        datePublished: '2026-10-14',
        dateModified: '2026-10-14',
        image: [
          `${siteConfig.url}/assets/images/guides/custom-braille-universal-changeroom-sign.jpg`,
          `${siteConfig.url}/assets/images/guides/custom-braille-raised-letter-sample.jpg`,
          `${siteConfig.url}/assets/images/guides/custom-braille-room-sign-gold-board.jpg`,
          `${siteConfig.url}/assets/images/guides/custom-braille-storage-room-sign.jpg`,
          `${siteConfig.url}/assets/images/guides/custom-braille-restroom-sign.jpg`,
          `${siteConfig.url}/assets/images/guides/custom-braille-wayfinding-level-sign.jpg`,
          `${siteConfig.url}/assets/images/guides/custom-braille-unisex-toilet-sign.jpg`,
        ],
      },
    ],
  };

  return <><JsonLd data={data} />{children}</>;
}
