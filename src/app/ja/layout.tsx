import type { Metadata } from 'next';
import { buildPageMetadata, ogImages } from '@/config/site';

/**
 * Phase one of the Japanese tree: the home page. The Japanese pages live under
 * /ja rather than inside a [locale] segment so that no existing English route
 * had to move, and the language of the document is decided by
 * components/DocumentShell, which reads this path during the server render.
 *
 * Every fact on the Japanese pages is taken from the equivalent English page —
 * no certification, price, warranty period, service life or customer count is
 * introduced here that the English site does not already state.
 */
const title = 'オーダーメイドサイネージ｜工場直送のサイン製作';
const description =
  'ホテル・商業施設・産業パーク向けのオーダーメイドサイネージを工場直送で。導線サインから内照式サイン、屋外サインまで、素材と仕上げを設置環境に合わせて選定し、世界DDP配送でお届けします。';

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: '/ja',
  image: ogImages.default,
  // Declares the full set in both directions: the English, Japanese and Korean
  // home pages, with x-default sending every other language to English. The
  // Japanese sub-pages name only the languages they exist in, since Korean
  // versions of them do not exist.
  languages: { en: '/', ja: '/ja', ko: '/ko' },
});

export default function JapaneseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
