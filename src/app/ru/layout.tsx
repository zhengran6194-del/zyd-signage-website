import type { Metadata } from 'next';
import { buildPageMetadata, homePageLanguages } from '@/config/site';
import { localizedHomeContent } from '@/content/localized-home';

/** Russian tree, phase one: the home page. */
const content = localizedHomeContent.ru;

export const metadata: Metadata = buildPageMetadata({
  title: content.meta.title,
  description: content.meta.description,
  path: '/ru',
  languages: homePageLanguages,
});

export default function RussianLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
