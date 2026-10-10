import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/config/site';

/**
 * Japanese About page. It restates what the English page states — the 2006
 * founding year, the 20,000m² production base, the product families, the eight
 * production stages, the quality points, and the DDP scope being confirmed
 * against destination and cargo details — and declares the same two structured
 * data nodes with the Japanese URLs, so the two versions describe the page the
 * same way.
 */
const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${siteConfig.url}/ja` },
        { '@type': 'ListItem', position: 2, name: '会社情報', item: `${siteConfig.url}/ja/about` },
      ],
    },
    {
      '@type': 'AboutPage',
      '@id': `${siteConfig.url}/ja/about#aboutpage`,
      url: `${siteConfig.url}/ja/about`,
      name: 'ZYD Signage について',
      inLanguage: 'ja',
      isPartOf: { '@id': `${siteConfig.url}/#website` },
      about: { '@id': `${siteConfig.url}/#organization` },
    },
  ],
};

/** 工程の8段階。トップページと同じ順序・同じ表現で記載します。 */
const productionSteps = [
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

export default function JapaneseAboutPage() {
  return (
    <main id="main" className="section-pad bg-slate-100 min-h-screen">
      <JsonLd data={aboutPageJsonLd} />
      <div className="container pt-20">
        <div className="section-heading text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter">ZYD Signage について</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            2006年から、精密なものづくりで国際サイネージ業界をリードしています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="text-slate-700 leading-relaxed text-lg">
            <p className="mb-6">
              大連志宇道（Dalian Zhiyudao Signage &amp; Tech. Co., Ltd.／ZYD）は、2006年から世界のB2Bサイネージ案件を手がける工場直送メーカーです。
            </p>
            <p className="mb-6">
              20,000m²の生産拠点にCNC加工設備と体系化された生産工程を備え、建築導線サインやオーダーメイドサインを製作しています。
            </p>
            <p>
              納品先と貨物の情報が確定した段階で、Door-to-Door（DDP）配送のお見積もりが可能です。合意する納品範囲、関税、税金はプロジェクトごとの見積もりによって決まります。
            </p>
          </div>
          <div className="relative group">
            <Image
              src="/assets/images/company-entrance.jpg"
              alt="ZYD Signage の工場入口"
              width={1448}
              height={1086}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="rounded-[3rem] shadow-2xl w-full h-[450px] object-cover"
            />
            <p className="text-center text-sm font-black text-slate-600 mt-4 tracking-widest">工場入口</p>
          </div>
        </div>

        <section className="mb-20 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tighter">工場で製作しているもの</h2>
          <div className="text-slate-700 leading-relaxed text-lg space-y-6">
            <p>
              建築導線サインと点字サイン、医療施設向けサイン、ハロー（背面発光）金属文字、超薄型LEDライトボックス、LEDネオン、金属・アクリルロゴサイン、屋外ピロン・モニュメントサイン、ランドスケープ家具、屋外ゴミ箱、プランター、アクリル卓上サイン、金属製A型看板、そして統合サイネージシステムまでを一つの工場で製作しています。一つの案件で複数の種類を同時に発注いただくことが多いため、図面も納品範囲もまとめて管理できる体制にしています。各製品は
              <Link href="/ja/products" className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900">製品一覧</Link>
              でご案内しています。
            </p>
            <p>
              素材は304ステンレス、溶融亜鉛めっき鋼、アルミニウムを中心に、アクリルとLED部材を組み合わせます。板金は1.5mmの厚板から加工し、塗装は180℃の工業用焼付塗装で仕上げます。素材と仕上げは、工場の都合ではなくサインが設置される環境に合わせて選定します。
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tighter">案件が工場を流れる順序</h2>
          <p className="text-slate-700 leading-relaxed text-lg mb-10 max-w-4xl">
            すべてのご注文は同じ8段階で進み、各段階でお客様が確認できる成果物が生まれます。技術相談、3Dモックアップ、施工図、加工、塗装、LED組込、品質確認、そして梱包・出荷です。図面が確定する前に生産へ回すことはありません。
          </p>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productionSteps.map((step) => (
              <li key={step.no} className="bg-white border border-slate-200 rounded-[2rem] p-8">
                <div className="text-sm font-black text-blue-600 tracking-[0.3em] mb-4">{step.no}</div>
                <h3 className="text-lg font-black tracking-tight text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{step.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10">
            <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter">品質の確認方法</h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              品質は最後の一度の検査ではなく、取り決めた確認項目の積み重ねとして扱います。以下の4点をお客様と取り決め、案件ごとに記録します。これにより、供給側とお客様が同じ範囲を見ている状態になります。
            </p>
            <ul className="space-y-5">
              {qualityPoints.map((point) => (
                <li key={point.title} className="border-l-2 border-blue-500/40 pl-5">
                  <div className="font-black text-slate-900 mb-1">{point.title}</div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{point.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-950 text-white rounded-[2.5rem] p-10">
            <h2 className="text-3xl font-black mb-6 tracking-tighter">ご発注と配送について</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              最小ロットは1台です。受付カウンターのサイン1台から、複数拠点への展開まで承ります。通常の生産リードタイムは内容と数量により7〜14日で、図面とアートワークが確定した時点から起算します。
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              納品先と貨物の情報が確定した段階で、DDPをdoor-to-doorの範囲としてお見積もりできます。合意する納品範囲、関税・税金、保証の範囲・期間・除外事項は、案件ごとの見積書または供給契約に記載します。
            </p>
            <p className="text-slate-300 leading-relaxed">
              アートワークとブランド資料は見積もり前に確認し、3Dモックアップの段階で仕上がりの方向性をご確認いただきます。確定している図面や条件をそのままに、
              <Link href="/ja/contact" className="font-black text-blue-400 underline decoration-blue-500/50 underline-offset-4 hover:text-blue-300">お問い合わせフォーム</Link>
              からご相談ください。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
