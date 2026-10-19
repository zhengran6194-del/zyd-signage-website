import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/front-lit-vs-halo-lit-channel-letters";
const title = "Front-Lit vs. Halo-Lit Channel Letters: Which Suits Your Storefront?";
const description = "How front-lit and halo-lit channel letters differ in illumination, wall interaction, readability, installation, colour and maintenance, and how to specify either construction.";

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.channelLetters, type: "article" });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `${siteConfig.url}${path}`;
  const data = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ] },
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, mainEntityOfPage: url, author: { "@id": `${siteConfig.url}/#aaron` }, publisher: { "@id": `${siteConfig.url}/#organization` }, datePublished: "2026-09-07", dateModified: "2026-10-19" },
  ] };
  return <><JsonLd data={data} />{children}</>;
}
