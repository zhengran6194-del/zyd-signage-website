import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/hospital-wayfinding-signage";
const title = "Hospital Wayfinding Signage Planning Guide for Contractors";
const description = "Plan hospital wayfinding signs from campus arrival to room identification. Use this contractor checklist for sign schedules, directories, accessibility review and quotation briefs.";

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.medical, type: "article" });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `${siteConfig.url}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: title,
        description,
        inLanguage: "en",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@id": `${siteConfig.url}/#aaron` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        datePublished: "2026-11-19",
        dateModified: "2026-11-19",
      },
    ],
  };

  return <><JsonLd data={data} />{children}</>;
}
