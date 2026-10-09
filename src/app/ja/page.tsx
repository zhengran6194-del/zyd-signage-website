import Image from 'next/image';
import Link from 'next/link';
import WhatsAppCta from '@/components/WhatsAppCta';

/**
 * Japanese home page (phase one).
 *
 * All figures and claims restate what the English home page already publishes:
 * the 2006 founding year, the 20-year trading history, the 20,000m² production
 * base, the eight-step process, the quality and compliance wording, and the
 * DDP delivery scope. Nothing new is promised here, and the product and guide
 * links point at the English pages that actually exist rather than at Japanese
 * translations that have not been published yet.
 */
const trustPoints = [
  { value: 'EST. 2006', label: '2006年 創業' },
  { value: '20 YEARS', label: '業界での実績' },
  { value: '20,000m²', label: '自社工場の生産拠点' },
  { value: 'GLOBAL DDP', label: '世界DDP配送' },
];

const steps = [
  { no: '01', title: '技術相談', desc: 'サイネージのご要望と設置条件を分析します。' },
  { no: '02', title: '精密3Dモックアップ', desc: '仕上がりを3Dで確認いただきます。' },
  { no: '03', title: '施工図（ショップドローイング）', desc: '構造と電気系統の詳細図面を作成します。' },
  { no: '04', title: 'CNC加工', desc: '高精度な切断と組立を行います。' },
  { no: '05', title: '塗装', desc: '設置環境に合わせた仕上げを施します。' },
  { no: '06', title: 'LED組込', desc: '仕様に合わせたLEDモジュールと配線を組み込みます。' },
  { no: '07', title: '点灯検査', desc: '点灯試験を含む工程ごとの品質確認を行います。' },
  { no: '08', title: '世界DDP配送', desc: '工業用梱包とdoor-to-doorの物流を手配します。' },
];

const qualityPoints = [
  { title: '品質管理', desc: '工程を案件ごとに確認します。' },
  { title: '電気要件', desc: '納品先の条件に照らして確認します。' },
  { title: '検査範囲', desc: '生産前に取り決めます。' },
  { title: '部材選定', desc: '仕様に合わせて選定します。' },
];

const products = [
  { name: 'ハロー（背面発光）文字', href: '/ja/products/custom-halo-lit-letters' },
  { name: '導線サインシステム', href: '/ja/products/architectural-wayfinding-system' },
  { name: '医療施設向けサイン', href: '/products/medical-care-signage' },
  { name: 'モニュメント・ピロンサイン', href: '/ja/products/outdoor-pylon-monument-sign' },
  { name: 'LEDライトボックス', href: '/products/ultra-slim-led-light-box' },
  { name: 'LEDネオンサイン', href: '/products/custom-led-neon-sign' },
  { name: '金属・アクリルロゴサイン', href: '/products/metal-acrylic-logo-sign' },
  { name: 'ランドスケープ家具', href: '/products/custom-landscape-furniture' },
  { name: '統合サイネージシステム', href: '/products/complete-signage-system' },
  { name: '屋外ゴミ箱', href: '/products/outdoor-waste-bin' },
  { name: 'オーダーメイド プランター', href: '/products/custom-planter-box' },
  { name: 'アクリル卓上サイン', href: '/products/acrylic-desk-sign' },
  { name: '金属製A型看板', href: '/products/portable-metal-a-frame-sign' },
];

const guides = [
  { title: 'チャンネルレターの価格は何で決まるのか', href: '/guides/how-much-do-custom-channel-letters-cost' },
  { title: '前面発光と背面発光（ハロー）の違い', href: '/guides/front-lit-vs-halo-lit-channel-letters' },
  { title: '自社に合うサインの選び方', href: '/guides/how-to-choose-the-right-sign-for-your-business' },
  { title: '屋外サインの素材選定：304ステンレスと溶融亜鉛めっき鋼', href: '/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs' },
];

const whyDirect = [
  { title: '工場直送', desc: '案件チームと直結した自社工場での生産。' },
  { title: '品質管理', desc: '確立した工程と、案件ごとの最終確認。' },
  { title: '世界DDP配送', desc: 'サイネージプログラムのための世界配送サポート。' },
  { title: 'OEM / ODM対応', desc: '施工会社・設計事務所・ブランドとの技術調整。' },
];

export default function JapaneseHome() {
  return (
    <main id="main">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-20 text-white lg:pt-32 lg:pb-28">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero-bg-factory-aerial.jpg"
            alt="ZYD Signage の生産拠点"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-blue-300">工場直送のサイネージ製作</p>
            <h1 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tight lg:text-6xl">
              工場直送のオーダーメイドサイネージ
            </h1>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-300 lg:text-lg">
              20年の実績。ホテル・商業施設・産業パーク向けに、導線計画から製作・納品までを一貫して担うサイネージシステムを提供します。素材と仕上げは設置環境に合わせて選定します。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/ja/contact" className="button button-green-base px-10 py-4">
                無料3Dモックアップとお見積もり
              </Link>
              <Link
                href="/ja/products"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
              >
                製品ラインナップを見る
              </Link>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-white/15 pt-10 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.label}>
                <dt className="text-2xl font-black tracking-tight lg:text-3xl">{point.value}</dt>
                <dd className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{point.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2. PROCESS */}
      <section className="section bg-white">
        <div className="container">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">Industrial Excellence</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-slate-900 lg:text-4xl">
            8つの製造工程
          </h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-600">
            熟練した加工技術と、工程ごとの確認を組み合わせ、案件ごとのサイネージを製作します。
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.no} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-xs font-black tracking-[0.3em] text-blue-600">{step.no}</span>
                <h3 className="mb-3 mt-4 text-lg font-black tracking-tight text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS */}
      <section className="section bg-slate-100">
        <div className="container">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">Product Lines</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-slate-900 lg:text-4xl">
            サイネージの製品ラインナップ
          </h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-600">
            世界の建築プロジェクト向けに、仕様に合わせて製作します。
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm font-black tracking-tight text-slate-900 transition-colors hover:border-blue-600 hover:text-blue-700"
              >
                {product.name}
                <span aria-hidden="true" className="text-blue-600">→</span>
              </Link>
            ))}
          </div>
          <Link href="/ja/products" className="mt-10 inline-flex text-sm font-black uppercase tracking-widest text-blue-700 hover:text-blue-900">
            すべての製品を見る →
          </Link>
        </div>
      </section>

      {/* 4. QUALITY */}
      <section className="section bg-white">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">Quality Assurance</p>
            <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-slate-900 lg:text-4xl">
              品質基準と適合性の確認
            </h2>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-slate-600">
              認証、部材の選定、電気安全の要件は、案件の仕様と納品先に照らして確認します。
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {qualityPoints.map((point) => (
                <div key={point.title} className="border-l-2 border-blue-600 pl-5">
                  <h3 className="mb-2 text-sm font-black uppercase tracking-widest text-slate-900">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <Image
              src="/assets/images/factory-overview.jpg"
              alt="ZYD Signage の工場での品質確認"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. WHY FACTORY DIRECT */}
      <section className="section bg-slate-950 text-white">
        <div className="container">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300">Why Work Direct</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight lg:text-4xl">
            案件に合わせた一貫したものづくり
          </h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-300">
            仕様調整から工場生産、品質確認、世界配送までをひとつの流れで進めます。
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyDirect.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/15 bg-white/10 p-6 lg:p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/15 text-xl font-black text-emerald-300">↗</div>
                <h3 className="mb-3 text-lg font-black uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GUIDES */}
      <section className="section bg-white">
        <div className="container">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">Signage Insights</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-slate-900 lg:text-4xl">
            サイネージの発注に役立つガイド
          </h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-600">
            発注前に確認しておきたい技術的なポイントをまとめています（英語）。
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-blue-600"
              >
                <h3 className="mb-3 text-base font-black tracking-tight text-slate-900">{guide.title}</h3>
                <span className="text-xs font-black uppercase tracking-widest text-blue-700">ガイドを読む →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section id="contact" className="section relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/images/grid-pattern.svg" alt="" fill unoptimized sizes="100vw" className="object-cover" />
        </div>
        <div className="container relative z-10 max-w-xl text-center">
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight lg:text-4xl">お見積もりはこちら</h2>
          <p className="mb-10 text-base text-slate-300">
            技術的なご相談と工場直送の価格について、エンジニアリングチームが対応します。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/ja/contact" className="button button-green-base px-10 py-3">
              無料お見積もり
            </Link>
            <WhatsAppCta
              label="図面を送る"
              message="こんにちは Aaron。サイネージ案件の図面を送りたいです。"
              brief={{
                product: 'サイネージ案件',
                heading: '送っていただきたい情報',
                items: [
                  '図面またはロゴデータ',
                  'サインの種類・おおよその寸法・数量',
                  '屋内か屋外か、取付面の状況',
                  '仕上げと照明のご希望',
                  '設置場所の写真と納品先の国',
                ],
                footnote: 'お手元にある資料で構いません。図面、おおよその寸法、数量、仕上げや照明のご希望、設置場所の写真、納品先の国をお知らせください。',
              }}
              className="inline-flex items-center justify-center rounded border border-emerald-300 px-10 py-3 text-[12px] font-bold uppercase text-emerald-100 transition-all hover:bg-emerald-400 hover:text-slate-950"
            />
          </div>
          <p className="mt-8 text-sm text-slate-400">
            メールでのご相談は{' '}
            <a href="mailto:zhengran@zydsign.cn" className="font-black text-emerald-300 hover:text-emerald-200">
              zhengran@zydsign.cn
            </a>{' '}
            まで。
          </p>
        </div>
      </section>
    </main>
  );
}
