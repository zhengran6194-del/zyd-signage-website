import type { Metadata } from 'next';
import { buildPageMetadata, ogImages, siteConfig } from '@/config/site';
import JsonLd from '@/components/JsonLd';

const path = '/guides/signage-procurement-low-bid-pitfalls';
const title = 'Low-Bid Signage Tenders: Why the Cheapest Quote Fails at Acceptance';
const description = 'A procurement guide to signage tenders and low-bid risk: where the price difference actually comes from, the defects that surface at acceptance, the real cost of rework, and the technical requirements to write into the specification before award.';

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.channelLetters, type: 'article' });

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
        publisher: { '@id': `${siteConfig.url}/#organization` },
        datePublished: '2026-09-23',
        dateModified: '2026-09-23',
      },
    ],
  };
  return <><JsonLd data={data} />{children}</>;
}
