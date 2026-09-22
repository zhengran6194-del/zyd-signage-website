import type { Metadata } from 'next';
import { buildPageMetadata, ogImages, siteConfig } from '@/config/site';
import JsonLd from '@/components/JsonLd';

const path = '/guides/signage-material-selection-guide';
const title = 'How to Choose Materials and Finishes for Illuminated Signage';
const description = 'A practical buyer guide to choosing illuminated letter construction, sheet materials, surface finishes, light-source details, and project-specific options for indoor and outdoor signage.';

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
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
      },
    ],
  };
  return <><JsonLd data={data} />{children}</>;
}
