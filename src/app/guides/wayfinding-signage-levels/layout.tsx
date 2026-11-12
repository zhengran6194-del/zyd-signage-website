import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/wayfinding-signage-levels";
const title = "Three Levels of Wayfinding: Primary, Secondary, Tertiary";
const description = "How primary, secondary and tertiary wayfinding work together, where each sign belongs at a decision point, and how the three levels change by building type.";

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.channelLetters, type: "article" });

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
          { "@type": "ListItem", position: 3, name: "Primary, Secondary and Tertiary Wayfinding", item: url },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "Primary, Secondary and Tertiary Wayfinding: How the Three Sign Levels Work",
        description,
        mainEntityOfPage: url,
        author: { "@id": `${siteConfig.url}/#aaron` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        datePublished: "2026-11-12",
        dateModified: "2026-11-12",
        image: `${siteConfig.url}/assets/images/guides/wayfinding-signage-levels-hero.jpg`,
      },
    ],
  };
  return <><JsonLd data={data} />{children}</>;
}
