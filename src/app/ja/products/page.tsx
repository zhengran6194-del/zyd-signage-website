import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { buildPageMetadata, siteConfig } from '@/config/site';
import { japaneseProducts } from '@/content/ja-products';

const title = 'サイネージ製品ラインナップ｜工場直送の製作';
const description =
  '導線サイン、ハロー（背面発光）文字、モニュメントサインなどのサイネージ製品。世界の建築プロジェクト向けに、仕様に合わせて工場直送で製作します。';

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: '/ja/products',
  languages: { en: '/products', ja: '/ja/products' },
});

/**
 * Products not yet published in Japanese. They are listed so a Japanese reader
 * can still reach the full range, and each link goes to the English page that
 * exists rather than to a Japanese address that does not.
 */
const englishOnly = [
  { title: '医療施設向けサイン', id: 'medical-care-signage' },
  { title: 'ランドスケープ家具', id: 'custom-landscape-furniture' },
  { title: 'LEDライトボックス', id: 'ultra-slim-led-light-box' },
  { title: 'LEDネオンサイン', id: 'custom-led-neon-sign' },
  { title: '金属・アクリルサイン', id: 'metal-acrylic-logo-sign' },
  { title: '統合サイネージシステム', id: 'complete-signage-system' },
  { title: '屋外ゴミ箱', id: 'outdoor-waste-bin' },
  { title: 'オーダーメイド プランター', id: 'custom-planter-box' },
  { title: 'アクリル卓上サイン', id: 'acrylic-desk-sign' },
  { title: '金属製A型看板', id: 'portable-metal-a-frame-sign' },
];

export default function JapaneseProductsIndex() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          inLanguage: 'ja',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${siteConfig.url}/ja` },
            { '@type': 'ListItem', position: 2, name: '製品', item: `${siteConfig.url}/ja/products` },
          ],
        }}
      />
      <main id="main" className="bg-slate-100 min-h-screen">
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-[1600px] w-[95%] mx-auto text-center">
            <div className="eyebrow text-blue-400 font-bold tracking-[0.3em] uppercase mb-4 text-xs">Manufacturing Excellence</div>
            <h1 className="mb-6">サイネージ製品</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
              世界の建築プロジェクト向けに、仕様に合わせて製作する工場直送のサイネージです。
            </p>
          </div>
        </section>

        <section className="section">
          <div className="max-w-[1600px] w-[95%] mx-auto">
            <h2 className="mb-10 text-2xl font-black tracking-tight text-slate-900">日本語でご案内している製品</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {japaneseProducts.map((product) => (
                <div key={product.slug} className="flex flex-col bg-white border border-slate-100 p-6 rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden rounded-[1rem] mb-6 h-72 bg-slate-100 border border-slate-50">
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-black mb-3 text-slate-900">{product.h1.lead}{product.h1.accent}{product.h1.tail}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{product.subtitle}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-bold tracking-widest text-slate-600 mb-6">
                    <span>MOQ: 1</span>
                    <span>リードタイム: 7〜14日</span>
                  </div>
                  <Link
                    href={`/ja/products/${product.slug}`}
                    className="button button-green-base w-full py-3 mt-auto text-white font-bold rounded-md text-center block"
                  >
                    詳細を見る
                  </Link>
                </div>
              ))}
            </div>

            <h2 className="mt-24 mb-10 text-2xl font-black tracking-tight text-slate-900">
              その他の製品（英語ページ）
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {englishOnly.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm font-black tracking-tight text-slate-900 transition-colors hover:border-blue-600 hover:text-blue-700"
                >
                  {product.title}
                  <span aria-hidden="true" className="text-blue-600">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
