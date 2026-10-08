import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/config/site';

/**
 * Japanese guide index.
 *
 * The guides themselves are published in English only, so each card links to
 * the article that exists rather than to a Japanese address that does not.
 * The structured data mirrors the English index: a BreadcrumbList plus a
 * CollectionPage.
 */
const path = '/ja/guides';
const title = 'サイネージガイド：価格・素材・設置';
const description =
  'オーダーメイドサイネージの発注に役立つ実務ガイド。チャンネルレターの価格、照明方式、サインの選び方、屋外素材、MOQとリードタイムを扱います。';

const guides = [
  {
    tag: '発注ガイド',
    title: 'チャンネルレターの価格は何で決まるのか',
    desc: '図面や寸法から照明、仕上げ、取付、配送範囲まで、チャンネルレターの見積もりを形づくる要素を整理します。',
    href: '/guides/how-much-do-custom-channel-letters-cost',
  },
  {
    tag: '比較',
    title: '前面発光と背面発光（ハロー）の違い',
    desc: '見え方、取付下地、保守計画、確認しておきたい項目の観点から、前面発光と背面発光の違いを説明します。',
    href: '/guides/front-lit-vs-halo-lit-channel-letters',
  },
  {
    tag: '発注ガイド',
    title: '自社に合うサインの選び方',
    desc: 'ピロン、モニュメント、建物サイン、導線サイン、照明サインを、実際の敷地と伝えたい内容から選ぶ考え方。',
    href: '/guides/how-to-choose-the-right-sign-for-your-business',
  },
  {
    tag: '素材',
    title: '304ステンレス鋼と溶融亜鉛めっき鋼の比較',
    desc: '曝露条件、仕上げ、加工の観点から、屋外サインにおける304ステンレス鋼と溶融亜鉛めっき鋼を比較します。',
    href: '/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs',
  },
  {
    tag: '製作ガイド',
    title: 'オーダーメイドサイネージの製造工程（7工程）',
    desc: '設計の具体化、加工、仕上げ、照明、品質確認、梱包、配送まで、発注者向けに工程を追います。',
    href: '/guides/custom-signage-manufacturing-process',
  },
  {
    tag: '素材と仕上げ',
    title: '照明サインの素材と仕上げの選び方',
    desc: '発光文字、板材、表面仕上げ、光源の確認事項、そして用途別の選定を、プロジェクト視点でまとめます。',
    href: '/guides/signage-material-selection-guide',
  },
  {
    tag: '調達',
    title: '安値入札の落とし穴：最安見積もりが検収で失敗する理由',
    desc: 'サイネージの価格差がどこに隠れるか、検収時に表面化する不具合、手戻りの実費、入札条件に書き込むべき技術要件。',
    href: '/guides/signage-procurement-low-bid-pitfalls',
  },
  {
    tag: 'アクセシビリティ計画',
    title: 'ADA・点字サイン：アクセシブルなサインシステムの計画',
    desc: '触知サイン、点字、導線サインの計画方法、アクセシビリティ検討で求められる入力、プロジェクトチームと所轄が確認すべき事項。',
    href: '/guides/ada-braille-signage-planning-guide',
  },
  {
    tag: '用途別計画',
    title: '商業施設の導線・ディレクトリサインシステム',
    desc: '外部識別、駐車案内、ディレクトリ、テナント表示を一つのシステムとしてまとめる、商業施設向けの発注ルート。',
    href: '/guides/mall-wayfinding-signage',
  },
  {
    tag: '用途別計画',
    title: '工業園区のサインと導線システム',
    desc: 'ゲートウェイ、道路と建物の識別、生産区画の誘導、そして広大な敷地で統一する素材標準を扱います。',
    href: '/guides/industrial-park-signage',
  },
  {
    tag: '用途別計画',
    title: 'ホテルのサインと来客導線システム',
    desc: '到着時の識別、発光ブランディング、ディレクトリ、来客導線、客室と施設のサイン、機能サインを扱います。',
    href: '/guides/hotel-signage',
  },
];

export default function JapaneseGuidesPage() {
  const url = `${siteConfig.url}${path}`;

  return (
    <main id="main" className="bg-slate-100 min-h-screen">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              inLanguage: 'ja',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${siteConfig.url}/ja` },
                { '@type': 'ListItem', position: 2, name: 'ガイド', item: url },
              ],
            },
            {
              '@type': 'CollectionPage',
              name: title,
              description,
              url,
              inLanguage: 'ja',
            },
          ],
        }}
      />
      <section className="section bg-slate-900 text-white py-24 lg:py-28">
        <div className="container text-center">
          <div className="eyebrow text-blue-400 font-black tracking-[0.3em] mb-4 text-xs">Knowledge Base</div>
          <h1 className="tracking-tighter mb-6">サイネージガイド</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
            オーダーメイドサイネージの発注と技術に関する実務ガイドです。
          </p>
        </div>
      </section>

      <section className="section bg-slate-100 py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex h-full min-h-[240px] min-w-0 flex-col bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[11px] font-black text-blue-600 tracking-widest mb-3">{guide.tag}</div>
                <h2 className="min-w-0 break-words font-black text-slate-900 mb-3 text-sm leading-snug">{guide.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-4">{guide.desc}</p>
                <span className="mt-auto text-xs font-bold text-slate-600 tracking-widest group-hover:text-blue-600 transition-colors">
                  ガイドを読む（英語）
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-4">案件についてご質問がありますか？</h2>
          <p className="text-slate-500 font-medium mb-8">
            設置場所の情報、図面、数量をお送りください。プロジェクトごとに検討します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ja/contact" className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide">
              プロジェクトについて相談する
            </Link>
            <Link
              href="/ja/products"
              className="px-10 py-5 rounded-full border-2 border-slate-300 text-slate-700 font-black tracking-widest text-sm hover:border-blue-600 hover:text-blue-700 transition-all"
            >
              すべての製品
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
