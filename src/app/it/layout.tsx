import type { Metadata } from 'next';
import { buildPageMetadata, homePageLanguages } from '@/config/site';
import { localizedHomeContent } from '@/content/localized-home';

const content = localizedHomeContent.it;

export const metadata: Metadata = buildPageMetadata({
  title: content.meta.title,
  description: content.meta.description,
  path: '/it',
  languages: homePageLanguages,
});

export default function ITLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
