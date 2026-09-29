import { notFound } from 'next/navigation';
import ScenarioGuidePage from '@/components/ScenarioGuidePage';
import { scenarioGuideBySlug, scenarioGuides } from '@/content/scenario-guides';

/**
 * The scenario pages live under /guides, next to the buying guides. Only the
 * migrated slugs exist here, so anything else 404s instead of being rendered on
 * demand from an arbitrary segment.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return scenarioGuides.map((guide) => ({ slug: guide.slug }));
}

export default async function ScenarioGuideRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = scenarioGuideBySlug[slug];
  if (!guide) notFound();
  return <ScenarioGuidePage solution={guide} />;
}
