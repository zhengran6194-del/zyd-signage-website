import type { Metadata } from 'next';
import { buildPageMetadata, homePageLanguages } from '@/config/site';
import { localizedHomeContent } from '@/content/localized-home';

const content = localizedHomeContent.pl;

export const metadata: Metadata = buildPageMetadata({
  title: content.meta.title,
  description: content.meta.description,
  path: '/pl',
  languages: homePageLanguages,
});

export default function PLLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
