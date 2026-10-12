import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildPageMetadata, ogImages } from '@/config/site';
import { scenarioGuideBySlug, scenarioGuides } from '@/content/scenario-guides';

type LayoutProps = Readonly<{ children: React.ReactNode; params: Promise<{ slug: string }> }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return scenarioGuides.map((guide) => ({ slug: guide.slug }));
}

/**
 * Search-result metadata, held separately from the page copy.
 *
 * `scenario-guides.ts` stores the on-page H1 and opening paragraph, which are written
 * to be read in full on the page but run past the length a search result or AI
 * overview renders. Only the <title> and meta description are replaced here, so
 * the visible page content is unchanged.
 */
const seoMetadata: Record<string, { title: string; description: string }> = {
  'mall-wayfinding-signage': {
    title: 'Mall Wayfinding & Directory Signage',
    description:
      'How mall wayfinding and directory signage is planned: exterior identification, parking guidance, tenant directories and functional signs as one system.',
  },
  'industrial-park-signage': {
    title: 'Industrial Park Signage & Site Identification',
    description:
      'How industrial park signage is planned: site gateways, road and building identification, production-zone directions and one material standard.',
  },
  'hotel-signage': {
    title: 'Hotel Signage & Guest Navigation',
    description:
      'How hotel signage is planned: arrival identification, illuminated branding, guest navigation, room and facility signs, and functional wayfinding.',
  },
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = scenarioGuideBySlug[slug];
  if (!guide) notFound();
  const seo = seoMetadata[slug] ?? { title: guide.title, description: guide.description };
  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/guides/${guide.slug}`,
    image: slug === 'mall-wayfinding-signage' ? ogImages.outdoor : slug === 'industrial-park-signage' ? ogImages.wayfinding : ogImages.metalLogo,
    type: 'article',
  });
}

export default function ScenarioGuideLayout({ children }: LayoutProps) {
  return children;
}
