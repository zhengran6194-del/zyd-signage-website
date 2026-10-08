'use client';

import { useState } from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

/**
 * Japanese FAQ.
 *
 * The thirteen questions are a one-to-one translation of the English FAQ page —
 * none added, none dropped, none merged, even where two of them cover similar
 * ground — and the FAQPage structured data is built from the same list. Answers
 * keep the scope of the English originals: no certification, price, warranty
 * period or service life is stated that the English page does not state.
 */
const categories = [
  '購入ガイド',
  '技術ガイド',
  '設置',
  '素材と仕上げ',
  '配送と物流',
  'よくあるご質問',
];

const guides = [
  { category: '購入ガイド', title: 'オーダーメイドのチャンネルレターの価格は？', date: '2026年8月24日', href: '/guides/how-much-do-custom-channel-letters-cost' },
  { category: '技術ガイド', title: '前面発光と背面発光（ハロー）の違い', date: '2026年8月20日', href: '/guides/front-lit-vs-halo-lit-channel-letters' },
  { category: '購入ガイド', title: '自社に合うサインの選び方', date: '2026年8月15日', href: '/guides/how-to-choose-the-right-sign-for-your-business' },
  { category: '素材', title: '屋外サイン向け304ステンレス鋼と溶融亜鉛めっき鋼の比較', date: '2026年8月10日', href: '/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs' },
  { category: '製作ガイド', title: 'オーダーメイドサイネージの製造工程（7工程）', date: '2026年7月22日', href: '/guides/custom-signage-manufacturing-process' },
  { category: '素材', title: '照明サインの素材と仕上げの選び方', date: '2026年9月22日', href: '/guides/signage-material-selection-guide' },
  { category: '調達', title: '安値入札の落とし穴：最安見積もりが検収で失敗する理由', date: '2026年9月23日', href: '/guides/signage-procurement-low-bid-pitfalls' },
];

const faqs = [
  {
    q: '無料の3Dモックアップは作成してもらえますか？',
    a: '案件のご相談内容がモックアップ作成に足る情報を含んでいる場合、技術チームが3Dモックアップを作成できます。範囲と形式は、生産前にプロジェクトごとに確認します。',
  },
  {
    q: 'ロゴはどのファイル形式で用意すればよいですか？',
    a: '.AI、.EPS、.SVG、または高解像度の.PDF などのベクター形式を推奨します。CNC加工による切断と製作で最も高い精度が得られます。',
  },
  {
    q: 'オーダーメイドサイネージの最小発注数量（MOQ）は？',
    a: '掲載しているオーダーメイドサイネージ製品の最小発注数量（MOQ）は1点です。お見積もりは、1点のサインでも、より大きな数量のプロジェクトでも、内容に応じて対応します。',
  },
  {
    q: '見積もりにはどんな情報が必要ですか？',
    a: '図面、おおよその寸法、数量、仕上げ、照明の要件、納品先をお知らせください。これらの情報があると、概算ではなく、加工と配送の範囲を具体的に示せます。',
  },
  {
    q: 'サイネージの費用はどのくらいですか？',
    a: 'オーダーメイドサイネージは、図面、寸法、数量、素材と仕上げ、照明、梱包、輸送、設置の担当範囲によって内容が変わるため、一律の価格はありません。これらの情報をお寄せいただければ、比較できる範囲でお見積もりします。',
  },
  {
    q: '屋外サインの素材はどう選べばよいですか？',
    a: '素材の選定は、曝露条件やデザインの意図に沿って行います。外観、仕上げ、加工方法、排水、清掃時のアクセス、保守を含めて検討します。適切な選択はプロジェクトごとに異なり、万能な素材はありません。',
  },
  {
    q: 'DDP配送の見積もりに必要な情報は？',
    a: 'DDP（関税込み・持込渡し）は、合意した納品範囲に関税と税金を含むdoor-to-doorの配送形態です。運賃と関税は納品先と貨物の情報から算出する必要があるため、納品先、寸法、数量、その他お手元のプロジェクト情報をお知らせください。',
  },
  {
    q: '標準的なリードタイムは？',
    a: '標準的な生産リードタイムは、案件の複雑さ、図面、数量、仕上げにより7〜14日です。大規模な導入案件は、お客様の工程に合わせて段階的に進めます。',
  },
  {
    q: '詳細な施工図は提供されますか？',
    a: 'プロジェクトの範囲に含まれる場合、施工用のテンプレートと技術図面を作成できます。指定のサインについて、合意した取付位置と電気系統の接続を示します。',
  },
  {
    q: '国際DDP配送とは何ですか？',
    a: 'DDP（関税込み・持込渡し）は、合意した納品範囲に通関、関税、税金を含むdoor-to-doorの配送形態です。対応可否と納品範囲は、納品先と貨物の情報に基づいてお見積もりします。',
  },
  {
    q: '沿岸環境でも耐久性はありますか？',
    a: '沿岸案件では、曝露条件、外観、加工方法、排水、清掃時のアクセス、保守に基づく素材と仕上げの検討が必要です。確定したプロジェクト内容に適合する場合は304ステンレス鋼などの選択肢を検討しますが、腐食を完全に防ぐ万能な素材はありません。',
  },
  {
    q: '保証条件はどうなっていますか？',
    a: '保証の範囲、期間、除外事項は、プロジェクトの見積もりまたは供給契約に記載します。提供する範囲によって異なるため、生産前にご確認ください。',
  },
  {
    q: '構造計算の技術サポートはありますか？',
    a: 'はい。大規模なモニュメントサインやピロンについては、構造エンジニアが、設置地域の環境に合わせた風荷重計算と基礎仕様を提供できます。',
  },
];

export default function JapaneseFaqPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <main id="main" className="bg-slate-100 min-h-screen">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          inLanguage: 'ja',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }}
      />

      <section className="section bg-slate-900 text-white py-24 lg:py-28">
        <div className="container text-center">
          <div className="eyebrow text-blue-400 font-black tracking-[0.3em] mb-4 text-xs">Resources</div>
          <h1 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter">FAQ・資料</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
            サイネージの計画、素材、設置、国際物流についての回答と実務資料です。
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((category) => (
              <span key={category} className="px-5 py-2 rounded-full border border-white/20 text-xs font-bold tracking-widest text-slate-300">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-100 py-20 lg:py-24">
        <div className="container">
          <h2 className="mb-10 text-2xl font-black tracking-tight text-slate-900">ガイドを読む（英語）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="flex h-full flex-col bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[11px] font-black text-blue-600 tracking-widest mb-3">{guide.category}</div>
                <h3 className="font-black text-slate-900 mb-3 text-sm leading-snug">{guide.title}</h3>
                <span className="mt-auto text-xs font-bold text-slate-500 tracking-widest">{guide.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-100 pt-0">
        <div className="container max-w-5xl">
          <h2 className="mb-10 text-2xl font-black tracking-tight text-slate-900">よくあるご質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={faq.q} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 p-6 text-left"
                  >
                    <span className="text-base lg:text-lg font-black text-slate-900">{faq.q}</span>
                    <span aria-hidden="true" className={`text-blue-600 text-xl transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      ⌄
                    </span>
                  </button>
                  {isOpen && <p className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-4">プロジェクトについてご相談ください</h2>
          <p className="text-slate-500 font-medium mb-8">
            ご質問の回答が見つからない場合は、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ja/contact" className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide">
              お問い合わせ
            </Link>
            <Link
              href="/ja/guides"
              className="px-10 py-5 rounded-full border-2 border-slate-300 text-slate-700 font-black tracking-widest text-sm hover:border-blue-600 hover:text-blue-700 transition-all"
            >
              ガイド一覧
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
