import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/how-much-do-custom-channel-letters-cost";
const title = "How Much Do Custom Channel Letters Cost?";
const description = "A practical B2B guide to the information that shapes a custom channel letters quotation, from artwork and dimensions to lighting, finish, mounting, packing, and delivery scope.";

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
