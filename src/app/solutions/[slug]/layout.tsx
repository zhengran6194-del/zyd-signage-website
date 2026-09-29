import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildPageMetadata, ogImages } from '@/config/site';
import { solutionBySlug, solutions } from '@/content/solutions';

type LayoutProps = Readonly<{ children: React.ReactNode; params: Promise<{ slug: string }> }>;

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

/**
 * Search-result metadata, held separately from the page copy.
 *
 * `solutions.ts` stores the on-page H1 and opening paragraph, which are written
 * to be read in full on the page but run past the length a search result or AI
 * overview renders. Only the <title> and meta description are replaced here, so
 * the visible page content is unchanged.
 */
const seoMetadata: Record<string, { title: string; description: string }> = {
  'mall-wayfinding-signage': {
    title: 'Mall Wayfinding & Directory Signage Systems',
    description:
      'A buyer route for malls and commercial complexes that need exterior identification, parking guidance, directories, tenant branding and signs as one system.',
  },
  'industrial-park-signage': {
    title: 'Industrial Park Signage and Wayfinding Systems',
    description:
      'A signage route for industrial parks: gateways, road and building identification, production-zone directions and one material standard across a large site.',
  },
  'hotel-signage': {
    title: 'Hotel Signage & Guest Wayfinding Systems',
    description:
      'A project route for hotels: arrival identification, illuminated branding, directories, guest navigation, room and facility signs, and functional signage.',
  },
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionBySlug[slug];
  if (!solution) notFound();
  const seo = seoMetadata[slug] ?? { title: solution.title, description: solution.description };
  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/solutions/${solution.slug}`,
    image: slug === 'mall-wayfinding-signage' ? ogImages.outdoor : slug === 'industrial-park-signage' ? ogImages.wayfinding : ogImages.metalLogo,
    type: 'article',
  });
}

export default function SolutionLayout({ children }: LayoutProps) {
  return children;
}
