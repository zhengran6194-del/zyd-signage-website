import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/importing-custom-signage-from-china";
const title = "Importing Custom Signage from China: Landed Cost, Documents and Installer Handover";
const description = "How landed cost, customs documents and installer handover work when you import custom signage from China, and what the factory price leaves out.";

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.wayfinding, type: "article" });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `${siteConfig.url}${path}`;
  const data = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
      { "@type": "ListItem", position: 3, name: "Importing Custom Signage from China", item: url },    ] },
    { "@type": "Article", "@id": `${url}#article`, headline: "Importing Custom Signage from China: Landed Cost, Documents and Installer Handover", description, mainEntityOfPage: url, author: { "@id": `${siteConfig.url}/#aaron` }, publisher: { "@id": `${siteConfig.url}/#organization` }, datePublished: "2026-10-20", dateModified: "2026-10-20" },
  ] };
  return <><JsonLd data={data} />{children}</>;
}
