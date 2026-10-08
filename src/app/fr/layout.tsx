import type { Metadata } from 'next';
import { buildPageMetadata, homePageLanguages } from '@/config/site';
import { localizedHomeContent } from '@/content/localized-home';

/** French tree, phase one: the home page. */
const content = localizedHomeContent.fr;

export const metadata: Metadata = buildPageMetadata({
  title: content.meta.title,
  description: content.meta.description,
  path: '/fr',
  languages: homePageLanguages,
});

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
