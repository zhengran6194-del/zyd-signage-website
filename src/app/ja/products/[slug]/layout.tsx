import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildPageMetadata, ogImages } from '@/config/site';
import { japaneseProductBySlug, japaneseProducts } from '@/content/ja-products';

type LayoutProps = Readonly<{ children: React.ReactNode; params: Promise<{ slug: string }> }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return japaneseProducts.map((product) => ({ slug: product.slug }));
}

/**
 * Each Japanese product page points at its English counterpart, so the pair
 * declares hreflang in both directions and x-default resolves to English.
 */
export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const product = japaneseProductBySlug[slug];
  if (!product) notFound();
  return buildPageMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/ja/products/${product.slug}`,
    image: ogImages.metalLogo,
    type: 'article',
    languages: { en: product.enPath, ja: `/ja/products/${product.slug}` },
  });
}

export default function JapaneseProductLayout({ children }: LayoutProps) {
  return children;
}
