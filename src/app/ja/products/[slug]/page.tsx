import { notFound } from 'next/navigation';
import JapaneseProductPage from '@/components/JapaneseProductPage';
import { japaneseProductBySlug, japaneseProducts } from '@/content/ja-products';

/** Only the three localized products exist here; anything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return japaneseProducts.map((product) => ({ slug: product.slug }));
}

export default async function JapaneseProductRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = japaneseProductBySlug[slug];
  if (!product) notFound();
  return <JapaneseProductPage product={product} />;
}
