import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/ada-braille-signage-planning-guide";
const title = "ADA & Braille Signage: How to Plan an Accessible System";
const description = "How to plan accessible signage: tactile and Braille options, mounting height and contrast inputs, and the project and local authority confirmations required.";

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.wayfinding, type: "article" });

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
        mainEntityOfPage: url,
        author: { "@type": "Person", name: "Aaron" },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        datePublished: "2026-10-07",
        dateModified: "2026-10-07",
      },
    ],
  };

  return (
    <>
      <JsonLd data={data} />
      {children}
    </>
  );
}
