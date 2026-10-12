import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/complete-site-signage-procurement-checklist";
const title = "Complete Site Signage Procurement Checklist";
const description = "A stage-by-stage procurement checklist for complete site signage: brief, site survey, drawings and specification, materials and finish, lighting and electrical, mounting, QA and acceptance, packing, commercial terms and handover.";

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.wayfinding, type: "article" });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `${siteConfig.url}${path}`;
  const data = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ] },
    { "@type": "Article", "@id": `${url}#article`, headline: title, description, mainEntityOfPage: url, author: { "@type": "Person", name: "Aaron" }, publisher: { "@id": `${siteConfig.url}/#organization` }, datePublished: "2026-10-12", dateModified: "2026-10-12" },
  ] };
  return <><JsonLd data={data} />{children}</>;
}
