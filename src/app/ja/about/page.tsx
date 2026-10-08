import Image from 'next/image';

/**
 * Japanese About page. It states the same three facts as the English page —
 * the 2006 founding year, the 20,000m² production base, and the DDP delivery
 * scope being confirmed against destination and cargo details — and carries no
 * structured data, because the English page declares none.
 */
export default function JapaneseAboutPage() {
  return (
    <main id="main" className="section-pad bg-slate-100 min-h-screen">
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
      </div>
    </main>
  );
}
