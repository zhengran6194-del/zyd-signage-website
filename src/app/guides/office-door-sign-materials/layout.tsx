import type { Metadata } from 'next';
import { buildPageMetadata, ogImages, siteConfig } from '@/config/site';
import JsonLd from '@/components/JsonLd';

const path = '/guides/office-door-sign-materials';
const title = 'Office Door Sign Materials: Wood, Acrylic or Metal?';
const description = 'How wood, acrylic and metal office door signs compare by appearance, customization, readability, maintenance and mounting surface.';

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  image: ogImages.metalLogo,
});

export default function OfficeDoorSignMaterialsLayout({ children }: { children: React.ReactNode }) {
  const url = `${siteConfig.url}${path}`;
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    author: { '@id': `${siteConfig.url}/#aaron` },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    image: `${siteConfig.url}/assets/images/guides/office-door-sign-material-overview.jpg`,
    inLanguage: 'en',
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteConfig.url}/guides` },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  };
  return (
    <>
      <JsonLd data={article} />
      <JsonLd data={breadcrumb} />
      {children}
    </>
  );
}
