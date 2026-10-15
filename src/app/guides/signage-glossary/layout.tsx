import type { Metadata } from 'next';
import { buildPageMetadata, ogImages, siteConfig } from '@/config/site';
import JsonLd from '@/components/JsonLd';

const path = '/guides/signage-glossary';
const title = 'Signage Glossary: Common Terms for Buyers';
const description = 'Plain-English definitions of common signage terms, with the project details buyers should confirm before specification and production.';

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  image: ogImages.metalLogo,
  type: 'article',
});

export default function SignageGlossaryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
        datePublished: '2026-10-15',
        dateModified: '2026-10-15',
      },
    ],
  };

  return <><JsonLd data={data} />{children}</>;
}
