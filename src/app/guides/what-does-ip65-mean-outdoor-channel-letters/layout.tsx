import type { Metadata } from "next";
import { buildPageMetadata, ogImages, siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides/what-does-ip65-mean-outdoor-channel-letters";
const title = "What Does IP65 Mean for Outdoor Channel Letters? Protection Ratings and Installation Conditions";
const description = "How to interpret IP65 for outdoor channel letters, distinguish component ratings from complete-sign protection, and specify installation conditions, evidence and limitations.";

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
          { "@type": "ListItem", position: 3, name: "What Does IP65 Mean for Outdoor Channel Letters?", item: url },
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
        datePublished: "2026-10-22",
        dateModified: "2026-10-22",
        image: `${siteConfig.url}/assets/images/guides/what-does-ip65-mean-outdoor-channel-letters-overview.jpg`,
      },
    ],
  };
  return <><JsonLd data={data} />{children}</>;
}
