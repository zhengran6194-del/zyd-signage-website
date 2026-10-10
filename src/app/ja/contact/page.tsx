import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buildPageMetadata, siteConfig } from '@/config/site';
import JsonLd from '@/components/JsonLd';
import JapaneseInquiryForm from '@/components/JapaneseInquiryForm';

/**
 * ページ単位の構造化データ。英語版のお問い合わせページと同じ2つのノードを、
 * 日本語のURLで宣言します。
 */
const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${siteConfig.url}/ja` },
        { '@type': 'ListItem', position: 2, name: 'お問い合わせ', item: `${siteConfig.url}/ja/contact` },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': `${siteConfig.url}/ja/contact#contactpage`,
      url: `${siteConfig.url}/ja/contact`,
      name: 'お問い合わせ｜サイネージのご相談とお見積もり',
      inLanguage: 'ja',
      isPartOf: { '@id': `${siteConfig.url}/#website` },
      about: { '@id': `${siteConfig.url}/#organization` },
    },
  ],
};

/** お見積もりに必要な情報。英語版と同じ項目を日本語で記載します。 */
const briefChecklist = [
  'アートワークまたはロゴデータ（ブランドカラーの指定があれば併せて）',
  'サインの種類、未定の場合は設置場所と伝えたい内容',
  'おおよその寸法・文字の高さ・数量',
  '屋内か屋外か、および取付面の状況',
  '照明のご希望（前面発光・背面発光・照明なし・未定）',
  '素材と仕上げのご指定があればその方向性',
  '設置場所の写真と、搬入・取付の制約',
  '設置先の都市と国、納品先、ご希望の時期',
];

const title = 'お問い合わせ｜サイネージのご相談とお見積もり';
const description =
  'サイネージ案件のご相談はこちら。無料の3Dモックアップと工場直送の価格について、技術チームが対応します。メールまたはWhatsAppでもご連絡いただけます。';

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: '/ja/contact',
  languages: { en: '/contact', ja: '/ja/contact' },
});

export default function JapaneseContactPage() {
  return (
    <main id="main" className="bg-slate-100 min-h-screen pt-24 pb-32">
      <JsonLd data={contactPageJsonLd} />
      <div className="container">
        <section className="text-center mb-20 reveal visible">
          <div className="eyebrow text-blue-600 font-black tracking-[0.3em] uppercase mb-4 text-sm">Get in Touch</div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tighter">プロジェクトのご相談</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            無料の3Dモックアップと工場直送の価格について、技術チームがご相談を承ります。
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <JapaneseInquiryForm />

          <div className="space-y-12 reveal visible">
            <div className="bg-slate-950 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-3xl font-black mb-8 italic text-blue-400 tracking-tighter">直接のご連絡</h3>
              <div className="space-y-10">
                <div>
                  <div className="text-xs font-black tracking-[0.3em] text-slate-400 mb-1">メール</div>
                  <a href={`mailto:${siteConfig.salesEmail}`} className="text-xl font-bold hover:text-blue-400 transition-all break-all">
                    {siteConfig.salesEmail}
                  </a>
                </div>
                <div>
                  <div className="text-xs font-black tracking-[0.3em] text-slate-400 mb-1">WhatsApp</div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('こんにちは Aaron。サイネージ案件について相談したいです。')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold hover:text-green-400 transition-all"
                  >
                    +{siteConfig.whatsappNumber} ({siteConfig.contactPerson})
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl">
              <h3 className="text-3xl font-black mb-8 tracking-tight">工場所在地</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-xs font-black tracking-[0.3em] text-slate-600 mb-1">住所</div>
                  <p className="text-lg font-bold text-slate-900 leading-relaxed">
                    中国 遼寧省大連市甘井子区 工業区 18号
                  </p>
                </div>
                <div className="rounded-[2.5rem] overflow-hidden bg-slate-100 h-64 relative">
                  <Image
                    src="/assets/images/factory-overview.jpg"
                    alt="ZYD Signage の工場"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div className="reveal visible">
            <div className="eyebrow text-blue-600 font-black tracking-[0.3em] uppercase mb-4 text-sm">Before You Write</div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter">お見積もりに必要な情報</h2>
            <p className="text-slate-600 leading-relaxed font-medium mb-6">
              サイネージのお見積もりは製品名ではなく案件の内容から組み立てるため、すでに確定している条件をうかがえると、比較できる価格に最短で到達します。同じ範囲を同じ前提で見積もることができ、未確定の項目も未確定のまま共有できます。
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mb-6">
              今お手元にあるものだけで構いません。おおよその寸法、設置面の写真、ロゴデータがあれば検討を始められます。図面は技術相談の中で一緒に詰めていき、無料の3Dモックアップで仕上がりを確認してから製作に入ります。
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              最小ロットは1台、通常の生産リードタイムは図面とアートワークの確定後7〜14日です。情報が揃わない場合は、生産の着手が遅れるだけで、お見積もりの検討は進められます。よくあるご質問は
              <Link href="/ja/faq" className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900">FAQ・資料</Link>
              にまとめています。
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-12 shadow-sm reveal visible">
            <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">案件情報チェックリスト</h3>
            <ul className="space-y-4 text-slate-600 font-medium text-sm leading-relaxed">
              {briefChecklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm leading-relaxed font-medium mt-8">
              不明な項目は「未定」のままで構いません。技術検討の中で確認し、推測で埋めることはしません。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
