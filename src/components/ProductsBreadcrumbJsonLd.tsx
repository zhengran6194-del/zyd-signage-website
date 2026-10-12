import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/config/site';

type ProductsBreadcrumbJsonLdProps = {
  locale?: 'en' | 'ja';
};

/**
 * Structured data for an index page. The product detail pages own their Product
 * entities; this node describes the index as a collection and leaves the list
 * itself to the visible cards, avoiding an incomplete or language-mixed ItemList.
 */
export default function ProductsBreadcrumbJsonLd({ locale = 'en' }: ProductsBreadcrumbJsonLdProps) {
  const isJapanese = locale === 'ja';
  const path = isJapanese ? '/ja/products' : '/products';
  const url = `${siteConfig.url}${path}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            inLanguage: locale,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: isJapanese ? 'ホーム' : 'Home',
                item: isJapanese ? `${siteConfig.url}/ja` : siteConfig.url,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: isJapanese ? '製品' : 'Products',
                item: url,
              },
            ],
          },
          {
            "@type": "CollectionPage",
            "@id": `${url}#collection`,
            url,
            name: isJapanese
              ? 'サイネージ製品ラインナップ｜導線サイン・内照式・屋外サイン'
              : 'Signage Products: 14 Custom Sign Categories | ZYD Signage',
            inLanguage: locale,
            isPartOf: { "@id": `${siteConfig.url}/#website` },
          },
        ],
      }}
    />
  );
}
