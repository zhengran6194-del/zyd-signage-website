import type { Metadata } from 'next';
import { buildPageMetadata } from '@/config/site';

/**
 * Korean tree, phase one: the home page. Like the Japanese tree it lives in a
 * parallel subtree so no existing English route had to move, and the document
 * language is decided by components/DocumentShell from the path.
 *
 * Every figure and claim on the Korean pages is one the English pages already
 * publish — the 2006 founding year, the 20,000m² production base, the eight-step
 * process, MOQ 1, the 7–14 day lead time and DDP shipping by quotation. No
 * certification, price, warranty period, service life or customer count is
 * introduced here.
 */
const title = '맞춤형 사이니지 제조｜공장 직송 제작';

export const metadata: Metadata = buildPageMetadata({
  title,
  description:
    '호텔, 상업 시설, 산업 단지 프로젝트를 위한 맞춤형 사이니지를 공장에서 직접 제작합니다. 소재와 마감을 설치 환경에 맞춰 선정하고 전 세계 DDP 배송으로 공급합니다.',
  path: '/ko',
  // The whole home-page set, so the Korean version pairs with the English and
  // Japanese ones instead of forming a group of its own.
  languages: { en: '/', ja: '/ja', ko: '/ko' },
});

export default function KoreanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
