import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/config/site';

export default function ProductsBreadcrumbJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Products", item: `${siteConfig.url}/products` },
        ],
      }}
    />
  );
}
