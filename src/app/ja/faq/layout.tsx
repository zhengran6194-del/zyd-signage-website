import type { Metadata } from 'next';
import { buildPageMetadata } from '@/config/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'サイネージのよくあるご質問｜FAQ・発注資料',
  description:
    'サイネージの計画・素材・設置・国際物流についてのよくあるご質問と、発注前に役立つ実務資料をまとめています。お見積もりの前にご確認ください。',
  path: '/ja/faq',
  languages: { en: '/faq', ja: '/ja/faq' },
});

export default function JapaneseFaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
