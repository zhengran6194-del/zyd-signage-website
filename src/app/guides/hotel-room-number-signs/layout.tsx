import type { Metadata } from 'next';
import { buildPageMetadata, ogImages, siteConfig } from '@/config/site';
import JsonLd from '@/components/JsonLd';

const path = '/guides/hotel-room-number-signs';
const title = 'Hotel Room Number Sign Buying Guide';
const description = 'How to specify hotel room number signs: material routes, readability checks, accessibility planning, mounting methods and what to send a manufacturer.';

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  image: ogImages.metalLogo,
  type: 'article',
});

export default function HotelRoomNumberSignsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
        author: { '@id': `${siteConfig.url}/#aaron` },
        publisher: { '@id': `${siteConfig.url}/#organization` },
        datePublished: '2026-10-17',
        dateModified: '2026-10-17',
      },
    ],
  };

  return <><JsonLd data={data} />{children}</>;
}
