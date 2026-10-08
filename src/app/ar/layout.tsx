import type { Metadata } from 'next';
import { buildPageMetadata, homePageLanguages } from '@/config/site';
import { localizedHomeContent } from '@/content/localized-home';

/**
 * Arabic tree, phase one: the home page. Like the other translated trees it
 * lives in a parallel subtree, and the document language and direction are set
 * by components/DocumentShell from the path.
 *
 * The copy states only what the English pages already publish.
 */
const content = localizedHomeContent.ar;

export const metadata: Metadata = buildPageMetadata({
  title: content.meta.title,
  description: content.meta.description,
  path: '/ar',
  languages: homePageLanguages,
});

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
