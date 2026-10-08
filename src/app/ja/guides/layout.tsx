import type { Metadata } from 'next';
import { buildPageMetadata } from '@/config/site';

const title = 'サイネージガイド：価格・素材・設置';

export const metadata: Metadata = buildPageMetadata({
  title,
  description:
    'オーダーメイドサイネージの発注に役立つ実務ガイド。チャンネルレターの価格、照明方式、サインの選び方、屋外素材、MOQとリードタイムを扱います。',
  path: '/ja/guides',
  languages: { en: '/guides', ja: '/ja/guides' },
});

export default function JapaneseGuidesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
