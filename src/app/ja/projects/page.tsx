import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/config/site';

/**
 * Japanese case-study index.
 *
 * It lists the same ten projects as the English page with the same images, and
 * mirrors its structured data: a BreadcrumbList, a CollectionPage and an
 * ItemList of the projects that have detail pages. Only three projects have a
 * detail page and those pages are English, so the links point at the English
 * case study rather than at a Japanese address that does not exist.
 */
type CaseStudy = {
  title: string;
  tag: string;
  desc: string;
  img: string;
  href?: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: 'THE SETAI SEA OF GALILEE',
    tag: 'ホスピタリティ',
    desc: 'イスラエル、ガリラヤ湖畔のラグジュアリーリゾート向けのサイネージと導線。',
    img: 'the-setai-sea-of-galilee.jpg',
  },
  {
    title: 'ZIMBABWE NATIONAL SPORTS STADIUM',
    tag: 'スタジアム',
    desc: 'アフリカ・ジンバブエのランドマークスタジアム向けの建築サインと来場者導線。',
    img: 'zimbabwe-national-sports-stadium.jpg',
  },
  {
    title: 'AFREXIMBANK AFRICA TRADE CENTRE',
    tag: '商業施設',
    desc: 'ジンバブエ・ハラレのランドマーク貿易センター向けの導線と建築サイン。',
    img: 'afreximbank-africa-trade-centre.jpg',
  },
  {
    title: 'TEL HAZOR NATIONAL PARK',
    tag: '文化遺産',
    desc: 'イスラエルの考古学国立公園向けの導線と解説サイン。',
    img: 'tel-hazor-national-park.jpg',
  },
  {
    title: 'SHELL FUEL STATION PYLON SIGN',
    tag: 'ガソリンスタンド',
    desc: 'カナダ、アルバータ州カルガリーのシェル・ガソリンスタンド向けピロンサイン。',
    img: 'shell-fuel-station-pylon.jpg',
  },
  {
    title: 'XIZHONG ISLAND SITE',
    tag: '敷地サイン',
    desc: '中国、遼寧省大連の西中島施設向けの敷地識別とサイネージ。',
    img: 'xizhong-island-site.jpg',
  },
  {
    title: 'HENGLI INDUSTRIAL PARK MONUMENT',
    tag: 'モニュメント',
    desc: '中国、大連の恒力工業園区向けランドマークモニュメントサイン（ダボス会議期間に納品）。',
    img: 'hengli-monument.jpg',
  },
  {
    title: 'WATER FASHION PLAZA WAYFINDING',
    tag: '小売',
    desc: '中国、大連の商業施設向け導線と建築サイン。屋外ピロンサインから館内フロアディレクトリまでを含みます。',
    img: 'projects/dalian-water-plaza-facade-letters.jpg',
    href: '/case-studies/dalian-water-plaza-wayfinding-signage',
  },
  {
    title: 'HENGLI INDUSTRIAL PARK WAYFINDING',
    tag: '工業園区',
    desc: 'ゲートウェイ、道路、建物、生産区画、機能空間をつなぐ導線・サイネージシステム。',
    img: 'projects/hengli-industrial-park-entrance-image-wall.jpg',
    href: '/case-studies/hengli-industrial-park-wayfinding-signage',
  },
  {
    title: 'PAVILION DALIAN | 集客につながる季節演出',
    tag: '小売',
    desc: '中国、大連の多層商業施設におけるクリスマスと旧正月のアトリウム演出。高い吹き抜け空間に吊り下げ・床上の要素として施工しました。',
    img: 'projects/pavilion-dalian-atrium-multi-level-overview.webp',
    href: '/case-studies/pavilion-dalian-mall-festive-installations',
  },
];

const CARD_CLASS =
  'relative flex flex-col bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 group hover:shadow-2xl transition-all';

export default function JapaneseProjectsPage() {
  const url = `${siteConfig.url}/ja/projects`;
  const caseStudyItems = caseStudies
    .filter((project): project is CaseStudy & { href: string } => Boolean(project.href))
    .map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: `${siteConfig.url}${project.href}`,
    }));

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              inLanguage: 'ja',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${siteConfig.url}/ja` },
                { '@type': 'ListItem', position: 2, name: '導入事例', item: url },
              ],
            },
            {
              '@type': 'CollectionPage',
              name: 'サイネージ導入事例',
              description:
                '導線サイン、ホスピタリティ、照明内照式ブランディング、ランドスケープなど、ZYDのサイネージ導入事例。',
              url,
              inLanguage: 'ja',
              mainEntity: { '@id': `${url}#case-studies` },
            },
            {
              '@id': `${url}#case-studies`,
              '@type': 'ItemList',
              name: '詳細ページのあるZYDサイネージ導入事例',
              itemListElement: caseStudyItems,
            },
          ],
        }}
      />
      <main id="main" className="bg-slate-100 min-h-screen pt-32 pb-40">
        <div className="w-full max-w-[110rem] px-4 sm:px-6 lg:px-10 mx-auto">
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-12">導入事例</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
            {caseStudies.map((project) => (
              <div key={project.title} className={CARD_CLASS}>
                <div className="relative h-[26rem] overflow-hidden">
                  <Image
                    src={`/assets/images/${project.img}`}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-12 flex flex-col flex-1">
                  <div className="text-blue-600 font-black text-[11px] tracking-[0.3em] mb-4">{project.tag}</div>
                  <h2 className="text-[1.7rem] leading-tight font-black mb-5 tracking-tighter">{project.title}</h2>
                  <p className="text-slate-500 text-base leading-relaxed font-medium">{project.desc}</p>
                  {project.href && (
                    <span className="mt-6 text-sm font-black tracking-widest text-blue-700 group-hover:text-blue-900 transition-colors">
                      導入事例を読む →
                    </span>
                  )}
                </div>
                {project.href && (
                  <Link href={project.href} className="absolute inset-0" aria-label={`${project.title} の導入事例を読む`} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-slate-950 p-16 lg:p-20 rounded-[4rem] shadow-2xl text-center">
            <p className="text-3xl text-blue-400 font-black mb-6 tracking-tighter">次のプロジェクトは？</p>
            <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              大規模な建築プロジェクトについて、納品先と貨物の情報が確定した段階で、設計・製作・DDP配送の範囲を調整します。
            </p>
            <Link href="/ja/contact" className="button button-green-base px-16 py-8 rounded-full text-white font-black text-2xl shadow-2xl">
              エンジニアに相談する
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
