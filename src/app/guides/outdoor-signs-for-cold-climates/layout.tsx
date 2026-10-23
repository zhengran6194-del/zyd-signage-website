import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/outdoor-signs-for-cold-climates";
const title = "Outdoor Signs for Cold Climates: Materials, Power Supplies and Structural Considerations";
const description = "How to specify outdoor signage for freezing conditions: site temperatures, metal and acrylic selection, low-temperature LED power supplies, drainage and structural review.";

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
          { "@type": "ListItem", position: 3, name: "Outdoor Signs for Cold Climates", item: url },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: title,
        description,
        mainEntityOfPage: url,
        author: { "@id": `${siteConfig.url}/#aaron` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        datePublished: "2026-10-23",
        dateModified: "2026-10-23",
        image: `${siteConfig.url}/assets/images/guides/outdoor-signs-for-cold-climates-overview.jpg`,
      },
    ],
  };
  return <><JsonLd data={data} />{children}</>;
}
