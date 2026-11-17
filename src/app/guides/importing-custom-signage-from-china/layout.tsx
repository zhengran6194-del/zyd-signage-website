import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/importing-custom-signage-from-china";
const title = "How to Vet an Overseas Custom Signage Factory | Buyer Checklist";
const description = "Vet an overseas custom signage factory: check drawings, samples, delivery terms, installation scope and warranty, then compare landed and installed costs.";

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.wayfinding, type: "article" });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `${siteConfig.url}${path}`;
  const data = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ] },
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, mainEntityOfPage: url, author: { "@id": `${siteConfig.url}/#aaron` }, publisher: { "@id": `${siteConfig.url}/#organization` }, datePublished: "2026-10-20", dateModified: "2026-11-17" },
  ] };
  return <><JsonLd data={data} />{children}</>;
}
