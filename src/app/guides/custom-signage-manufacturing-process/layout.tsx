import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/custom-signage-manufacturing-process";
const title = "How Custom Signage Is Made: 7 Manufacturing Steps";
const description = "A buyer-focused guide to the custom signage manufacturing process, from design development and material checks through fabrication, quality control, packing and delivery.";

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: ogImages.system, type: "article" });

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
        publisher: { "@id": `${siteConfig.url}/#organization` },
        datePublished: "2026-07-22",
        dateModified: "2026-07-22",
      },
    ],
  };

  return <><JsonLd data={data} />{children}</>;
}
