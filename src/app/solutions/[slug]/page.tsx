import { notFound } from 'next/navigation';
import SolutionPage from '@/components/SolutionPage';
import { solutionBySlug, solutions } from '@/content/solutions';

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export default async function SolutionRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionBySlug[slug];
  if (!solution) notFound();
  return <SolutionPage solution={solution} />;
}
