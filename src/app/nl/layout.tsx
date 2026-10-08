import type { Metadata } from 'next';
import { buildPageMetadata, homePageLanguages } from '@/config/site';
import { localizedHomeContent } from '@/content/localized-home';

const content = localizedHomeContent.nl;

export const metadata: Metadata = buildPageMetadata({
  title: content.meta.title,
  description: content.meta.description,
  path: '/nl',
  languages: homePageLanguages,
});

export default function NLLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
