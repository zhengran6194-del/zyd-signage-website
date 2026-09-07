import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/how-to-choose-the-right-sign-for-your-business";
const title = "How to Choose the Right Sign for Your Business";
const description = "A practical sign-selection guide for business owners, contractors, and project buyers comparing pylon, monument, building, wayfinding, and illuminated sign requirements.";

export const metadata: Metadata = { title, description, alternates: { canonical: `${siteConfig.url}${path}` }, openGraph: { type: "article", title, description, url: `${siteConfig.url}${path}` } };

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
