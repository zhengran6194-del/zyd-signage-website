import type { Metadata } from 'next';
import Image from 'next/image';
import { buildPageMetadata, siteConfig } from '@/config/site';
import JapaneseInquiryForm from '@/components/JapaneseInquiryForm';

const title = 'お問い合わせ｜サイネージのご相談とお見積もり';
const description =
  'サイネージ案件のご相談はこちら。無料の3Dモックアップと工場直送の価格について、技術チームが対応します。メールまたはWhatsAppでもご連絡いただけます。';

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: '/ja/contact',
  languages: { en: '/contact', ja: '/ja/contact' },
});

/**
 * The English contact page carries no structured data, so neither does this
 * one: the two pages describe themselves the same way.
 */
export default function JapaneseContactPage() {
  return (
    <main className="bg-slate-100 min-h-screen pt-24 pb-32">
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
      </div>
    </main>
  );
}
