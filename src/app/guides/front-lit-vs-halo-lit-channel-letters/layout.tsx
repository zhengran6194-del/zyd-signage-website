import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/front-lit-vs-halo-lit-channel-letters";
const title = "Front-Lit vs Halo-Lit Channel Letters";
const description = "Compare front-lit and halo-lit channel letters by visual effect, mounting background, service planning, artwork, and the project details a commercial buyer should confirm.";

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.channelLetters, type: "article" });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `${siteConfig.url}${path}`;
  const data = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ] },
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, mainEntityOfPage: url, author: { "@type": "Person", name: "Aaron" }, publisher: { "@id": `${siteConfig.url}/#organization` }, datePublished: "2026-09-07", dateModified: "2026-09-07" },
  ] };
  return <><JsonLd data={data} />{children}</>;
}
