import type { Metadata } from 'next';
import { buildPageMetadata, homePageLanguages } from '@/config/site';
import { localizedHomeContent } from '@/content/localized-home';

/** German tree, phase one: the home page. */
const content = localizedHomeContent.de;

export const metadata: Metadata = buildPageMetadata({
  title: content.meta.title,
  description: content.meta.description,
  path: '/de',
  languages: homePageLanguages,
});

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
