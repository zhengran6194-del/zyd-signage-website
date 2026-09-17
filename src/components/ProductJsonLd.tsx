import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/config/site';

type ProductJsonLdProps = {
  name: string;
  description: string;
  path: string;
  image: string;
};

export default function ProductJsonLd({ name, description, path, image }: ProductJsonLdProps) {
  const url = `${siteConfig.url}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Products", item: `${siteConfig.url}/products` },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
      {
        "@type": "Product",
        name,
        description,
        url,
        image: `${siteConfig.url}${image}`,
      },
    ],
  };

  return <JsonLd data={data} />;
}
