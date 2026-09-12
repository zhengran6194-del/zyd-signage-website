import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import JsonLd from "@/components/JsonLd";

const path = "/guides";
const title = "Signage Guides";
const description = "Practical buying and technical guides for custom signage projects, covering channel letter costs, illumination styles, sign selection, and outdoor materials.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}${path}` },
  openGraph: {
    type: "website",
    title,
    description,
    url: `${siteConfig.url}${path}`,
  },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `${siteConfig.url}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Guides", item: url },
        ],
      },
      {
        "@type": "CollectionPage",
        name: title,
        description,
        url,
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
