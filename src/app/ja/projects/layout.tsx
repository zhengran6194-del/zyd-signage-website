import type { Metadata } from 'next';
import { buildPageMetadata } from '@/config/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'サイネージ導入事例｜商業施設・産業パーク・ホテル',
  description:
    '導線サイン、内照式ブランディング、ピロン・モニュメント、ランドスケープなど、ZYDが手がけたサイネージ導入事例をご紹介します。',
  path: '/ja/projects',
  languages: { en: '/projects', ja: '/ja/projects' },
});

export default function JapaneseProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
