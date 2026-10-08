import type { Metadata } from 'next';
import { buildPageMetadata, homePageLanguages } from '@/config/site';
import { localizedHomeContent } from '@/content/localized-home';

const content = localizedHomeContent.zh;

export const metadata: Metadata = buildPageMetadata({
  title: content.meta.title,
  description: content.meta.description,
  path: '/zh',
  languages: homePageLanguages,
});

export default function ZHLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
