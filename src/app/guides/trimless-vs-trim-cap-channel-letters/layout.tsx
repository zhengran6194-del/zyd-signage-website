import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/trimless-vs-trim-cap-channel-letters";
const title = "Trimless vs. Trim Cap Channel Letters";
const description = "How trimless and trim cap channel letters differ in face attachment, edge appearance, logo detail, servicing and outdoor specification.";

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.channelLetters, type: "article" });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `${siteConfig.url}${path}`;
  const data = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
      { "@type": "ListItem", position: 3, name: "Trimless vs. Trim Cap Channel Letters", item: url },
    ] },
    { "@type": "Article", "@id": `${url}#article`, headline: "Trimless vs. Trim Cap Channel Letters: Construction, Appearance and Maintenance", description, mainEntityOfPage: url, author: { "@id": `${siteConfig.url}/#aaron` }, publisher: { "@id": `${siteConfig.url}/#organization` }, datePublished: "2026-10-19", dateModified: "2026-10-19", image: `${siteConfig.url}/assets/images/guides/trimless-vs-trim-cap-faces-side-by-side.jpg` },
  ] };
  return <><JsonLd data={data} />{children}</>;
}
