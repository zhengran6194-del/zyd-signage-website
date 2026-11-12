import type { Metadata } from "next";
import { buildPageMetadata, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/wayfinding-signage-levels";
const title = "Wayfinding Signage Levels: Level 1, 2 & 3 Explained";
const description = "Learn how Level 1, 2 and 3 wayfinding signs connect site identification, route directions and room signs into one clear building navigation system.";
const image = {
  path: "/assets/images/guides/wayfinding-levels-building-identity.jpg",
  width: 1080,
  height: 720,
  alt: "Building identification sign viewed from outside as part of a wayfinding signage system",
};

export const metadata: Metadata = buildPageMetadata({ title, description, path, type: "article", image });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `${siteConfig.url}${path}`;
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ] },
      { "@type": "Article", "@id": `${url}#article`, headline: title, description, inLanguage: "en", mainEntityOfPage: { "@type": "WebPage", "@id": url }, author: { "@id": `${siteConfig.url}/#aaron` }, publisher: { "@id": `${siteConfig.url}/#organization` }, datePublished: "2026-11-12", dateModified: "2026-11-12", image: [
        `${siteConfig.url}${image.path}`,
        `${siteConfig.url}/assets/images/guides/wayfinding-levels-campus-gateway.jpg`,
        `${siteConfig.url}/assets/images/guides/wayfinding-levels-campus-complex.jpg`,
        `${siteConfig.url}/assets/images/guides/wayfinding-levels-campus-complex.jpg`,
        `${siteConfig.url}/assets/images/guides/wayfinding-levels-campus-directory.jpg`,
        `${siteConfig.url}/assets/images/guides/wayfinding-levels-interior-signage.jpg`,
        `${siteConfig.url}/assets/images/guides/wayfinding-levels-clinic-door.jpg`,
        `${siteConfig.url}/assets/images/guides/wayfinding-levels-room-numbers.jpg`,
        `${siteConfig.url}/assets/images/guides/wayfinding-levels-office-building.jpg`,
      ] },
    ] }} />
    {children}
  </>;
}
