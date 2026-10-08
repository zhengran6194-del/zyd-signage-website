import type { Metadata } from 'next';
import { buildPageMetadata, homePageLanguages } from '@/config/site';
import { localizedHomeContent } from '@/content/localized-home';

/** Spanish tree, phase one: the home page. */
const content = localizedHomeContent.es;

export const metadata: Metadata = buildPageMetadata({
  title: content.meta.title,
  description: content.meta.description,
  path: '/es',
  languages: homePageLanguages,
});

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
