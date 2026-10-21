import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/raceway-vs-individually-mounted-channel-letters";
const title = "Raceway vs. Individually Mounted Channel Letters: Wiring, Wall Fixings and Installation Planning";
const description = "How raceway and individually mounted channel letters differ in wiring routes, wall penetrations, fixings, servicing and installation planning.";

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
          { "@type": "ListItem", position: 3, name: "Raceway vs. Individually Mounted Channel Letters", item: url },
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
        datePublished: "2026-10-21",
        dateModified: "2026-10-21",
        image: `${siteConfig.url}/assets/images/guides/raceway-vs-individually-mounted-overview.jpg`,
      },
    ],
  };
  return <><JsonLd data={data} />{children}</>;
}
