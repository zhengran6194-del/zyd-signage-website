import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildPageMetadata, ogImages } from '@/config/site';
import { solutionBySlug, solutions } from '@/content/solutions';

type LayoutProps = Readonly<{ children: React.ReactNode; params: Promise<{ slug: string }> }>;

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionBySlug[slug];
  if (!solution) notFound();
  return buildPageMetadata({
    title: solution.title,
    description: solution.description,
    path: `/solutions/${solution.slug}`,
    image: slug === 'mall-wayfinding-signage' ? ogImages.outdoor : slug === 'industrial-park-signage' ? ogImages.wayfinding : ogImages.metalLogo,
    type: 'article',
  });
}

export default function SolutionLayout({ children }: LayoutProps) {
  return children;
}
