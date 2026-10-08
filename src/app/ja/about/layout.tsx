import type { Metadata } from 'next';
import { buildPageMetadata } from '@/config/site';

const title = 'ZYD Signage について｜2006年創業のサイネージ工場';

export const metadata: Metadata = buildPageMetadata({
  title,
  description:
    '大連志宇道（ZYD）は2006年から世界のB2Bサイネージ案件を手がける工場直送メーカーです。20,000m²の生産拠点で建築導線サインやオーダーメイドサインを製作しています。',
  path: '/ja/about',
  languages: { en: '/about', ja: '/ja/about' },
});

export default function JapaneseAboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
