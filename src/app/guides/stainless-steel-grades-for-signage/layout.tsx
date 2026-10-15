import type { Metadata } from 'next';
import { buildPageMetadata, ogImages, siteConfig } from '@/config/site';
import JsonLd from '@/components/JsonLd';

const path = '/guides/stainless-steel-grades-for-signage';
const title = '201, 304, and 316 Stainless Steel for Signage';
const description = 'How to choose 201, 304, or 316 stainless steel for signage by environment, fabrication, installation, and corrosion-risk controls.';

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.metalLogo, type: 'article' });

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
        datePublished: '2026-10-15',
        dateModified: '2026-10-15',
        image: [
          `${siteConfig.url}/assets/images/guides/stainless-steel-grades-signage-cover.png`,
          `${siteConfig.url}/assets/images/guides/stainless-steel-surface-finish-detail.png`,
          `${siteConfig.url}/assets/images/guides/stainless-steel-exterior-sign-panel.png`,
          `${siteConfig.url}/assets/images/guides/stainless-steel-coastal-building-cladding.png`,
          `${siteConfig.url}/assets/images/guides/stainless-steel-fabrication-inspection.png`,
          `${siteConfig.url}/assets/images/guides/stainless-steel-weld-detail.png`,
          `${siteConfig.url}/assets/images/guides/stainless-steel-surface-polishing.png`,
          `${siteConfig.url}/assets/images/guides/stainless-steel-corrosion-example.png`,
          `${siteConfig.url}/assets/images/guides/stainless-steel-signage-factory-production.png`,
          `${siteConfig.url}/assets/images/guides/stainless-steel-fabrication-measurement.png`,
          `${siteConfig.url}/assets/images/guides/stainless-steel-sign-installation-check.png`,
        ],
      },
    ],
  };

  return <><JsonLd data={data} />{children}</>;
}
