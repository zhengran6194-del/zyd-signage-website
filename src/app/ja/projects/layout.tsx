import type { Metadata } from 'next';
import { buildPageMetadata } from '@/config/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'サイネージ導入事例',
  description:
    '導線サイン、ホスピタリティ、照明内照式ブランディング、ランドスケープなど、ZYDのサイネージ導入事例をご覧いただけます。',
  path: '/ja/projects',
  languages: { en: '/projects', ja: '/ja/projects' },
});

export default function JapaneseProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
