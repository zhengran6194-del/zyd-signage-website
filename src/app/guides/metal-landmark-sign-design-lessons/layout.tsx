import type { Metadata } from 'next';
import { buildPageMetadata, siteConfig } from '@/config/site';
import JsonLd from '@/components/JsonLd';

const path = '/guides/metal-landmark-sign-design-lessons';
const title = 'Four Landmarks, Four Lessons in Metal Sign Design';
const description = 'Explore four lessons in landmark signage from Las Vegas, Hollywood, MIKIMOTO Ginza 2 and Louvre Abu Dhabi: identity, scale, facade integration and light.';
const image = {
  path: '/assets/images/guides/landmark-sign-design-las-vegas.jpg',
  width: 800,
  height: 533,
  alt: 'Welcome to Fabulous Las Vegas sign used as an example of landmark sign design',
};

export const metadata: Metadata = buildPageMetadata({ title, description, path, type: 'article', image });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `${siteConfig.url}${path}`;
  const imagePaths = [
    image.path,
    '/assets/images/guides/landmark-sign-design-hollywood.jpg',
    '/assets/images/guides/landmark-sign-design-mikimoto-ginza-2.jpg',
    '/assets/images/guides/landmark-sign-design-louvre-abu-dhabi.jpg',
  ];

  return <>
    <JsonLd data={{ '@context': 'https://schema.org', '@graph': [
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteConfig.url}/guides` },
        { '@type': 'ListItem', position: 3, name: title, item: url },
      ] },
      { '@type': 'Article', '@id': `${url}#article`, headline: title, description, inLanguage: 'en', mainEntityOfPage: { '@type': 'WebPage', '@id': url }, author: { '@id': `${siteConfig.url}/#aaron` }, publisher: { '@id': `${siteConfig.url}/#organization` }, datePublished: '2026-11-12', dateModified: '2026-11-12', image: imagePaths.map((imagePath) => `${siteConfig.url}${imagePath}`) },
    ] }} />
    {children}
  </>;
}
