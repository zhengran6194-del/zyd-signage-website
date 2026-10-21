import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/outdoor-sign-finishes-liquid-paint-powder-coating-electroplating";
const title = "Outdoor Sign Finishes: Liquid Paint, Powder Coating or Electroplating?";
const description = "How liquid paint, powder coating, fluorocarbon (PVDF) coating, electroplating and anodizing compare for outdoor signage, and what to specify for substrate, exposure, samples and evidence.";

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
          { "@type": "ListItem", position: 3, name: "Outdoor Sign Finishes", item: url },
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
        image: `${siteConfig.url}/assets/images/guides/outdoor-sign-finishes-process-overview.jpg`,
      },
    ],
  };
  return <><JsonLd data={data} />{children}</>;
}
