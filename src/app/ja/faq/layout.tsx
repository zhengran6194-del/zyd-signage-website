import type { Metadata } from 'next';
import { buildPageMetadata } from '@/config/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'サイネージFAQ・資料',
  description:
    'サイネージの計画、素材、設置、国際物流に関するご質問への回答と、発注に役立つ実務資料をまとめています。',
  path: '/ja/faq',
  languages: { en: '/faq', ja: '/ja/faq' },
});

export default function JapaneseFaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
