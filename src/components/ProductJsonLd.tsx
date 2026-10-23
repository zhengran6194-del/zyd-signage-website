import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/config/site';

type BreadcrumbStep = { name: string; href: string };

type ProductJsonLdProps = {
  name: string;
  description: string;
  path: string;
  image: string;
  /**
   * Wording and target of the two breadcrumb steps above the product. A
   * translated page passes its own, because both the label and the link have to
   * be in that language — the defaults are the English page's crumb trail.
   */
  home?: BreadcrumbStep;
  products?: BreadcrumbStep;
  /** Language of the page, omitted where the page is the English original. */
  inLanguage?: string;
  /** Product-specific category and material, only when confirmed by the page content. */
  category?: string;
  material?: string;
};

export default function ProductJsonLd({
  name,
  description,
  path,
  image,
  home = { name: 'Home', href: siteConfig.url },
  products = { name: 'Products', href: `${siteConfig.url}/products` },
  inLanguage,
  category,
  material,
}: ProductJsonLdProps) {
  const url = `${siteConfig.url}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: home.name, item: home.href },
          { "@type": "ListItem", position: 2, name: products.name, item: products.href },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
      {
        // Quote-only catalogue pages have no public offer or review data.
        // Describe the page without claiming Product rich-result eligibility.
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name,
        description,
        url,
        image: `${siteConfig.url}${image}`,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        ...((category || material) ? { keywords: [category, material].filter(Boolean).join(", ") } : {}),
        ...(inLanguage ? { inLanguage } : {}),
      },
    ],
  };

  return <JsonLd data={data} />;
}
