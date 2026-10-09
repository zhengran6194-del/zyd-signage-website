import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ProductJsonLd from '@/components/ProductJsonLd';
import WhatsAppCta from '@/components/WhatsAppCta';
import { siteConfig } from '@/config/site';
import type { JapaneseProduct } from '@/content/ja-products';

/**
 * Renders a Japanese product page from the content module.
 *
 * The section order and the structured data match the English page of the same
 * product: a BreadcrumbList and Product block describing the page, and a
 * FAQPage block built from the same questions — the same three blocks the
 * English page emits, so the two language versions describe the same thing.
 * The crumb trail is worded and linked in Japanese, pointing at the Japanese
 * listings rather than at the English ones.
 */
export default function JapaneseProductPage({ product }: { product: JapaneseProduct }) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'ja',
    mainEntity: product.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const { cta } = product;

  return (
    <>
      <ProductJsonLd
        name={product.seo.title}
        description={product.seo.description}
        path={`/ja/products/${product.slug}`}
        image={product.image.src}
        home={{ name: 'ホーム', href: `${siteConfig.url}/ja` }}
        products={{ name: '製品', href: `${siteConfig.url}/ja/products` }}
        inLanguage="ja"
      />
      <JsonLd data={faqJsonLd} />
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal visible">
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">{product.eyebrow}</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
                {product.h1.lead} <span className="text-blue-500 italic">{product.h1.accent}</span> <br />{product.h1.tail}
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">{product.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/ja/contact"
                  className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide"
                >
                  無料お見積もり
                </Link>
                <WhatsAppCta
                  label="実現性を確認"
                  message={`こんにちは Aaron。${product.h1.lead}${product.h1.accent}${product.h1.tail}の実現性を確認していただけますか？`}
                  brief={{
                    product: `${product.h1.lead}${product.h1.accent}${product.h1.tail}`,
                    heading: '送っていただきたい情報',
                    items: [
                      '図面またはロゴデータ',
                      '種類・おおよその寸法・数量',
                      '設置場所と取付面の状況',
                      '仕上げと照明のご希望',
                      '設置場所の写真と納品先の国',
                    ],
                    footnote:
                      'お手元にある資料で構いません。図面、おおよその寸法、数量、仕上げや照明のご希望、設置場所の写真、納品先の国をお知らせください。',
                  }}
                />
              </div>
            </div>
            <div className="reveal visible relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <Image
                src={product.image.src}
                alt={product.image.alt}
                width={product.image.width}
                height={product.image.height}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/5 object-cover w-full h-[420px] lg:h-[500px]"
              />
            </div>
          </div>
        </section>

        {/* 2. Short answer */}
        <section className="section bg-slate-100">
          <div className="container max-w-6xl">
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-5">{product.directAnswer.label}</div>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-semibold max-w-4xl">
                {product.directAnswer.text}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Buyer questions */}
        <section className="section bg-slate-100 pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            {product.questions.map((question) => (
              <div key={question.heading} className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm flex flex-col">
                <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-slate-900 mb-5">{question.heading}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{question.text}</p>
                <div className="mt-auto">
                  <Link href={question.linkHref} className="text-sm font-black tracking-widest text-blue-700 hover:text-blue-900">
                    {question.linkLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Specifications */}
        <section className="section bg-slate-100 pt-0">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-14">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">仕様と選定の考え方</h2>
                <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">
                  各項目は製作前の確認事項です。設置条件、仕上げ、照明の要件をプロジェクト資料でご確認ください。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {product.specs.map((spec) => (
                    <div key={spec.title} className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
                      <h3 className="text-lg font-black text-blue-600 mb-4 italic">{spec.title}</h3>
                      <ul className="space-y-3 text-slate-600 font-medium">
                        {spec.items.map((item) => (
                          <li key={item}>&bull; {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 tracking-tighter">工場直送の強み</h3>
                <p className="text-slate-300 mb-8 leading-relaxed font-medium">{product.factoryAdvantage}</p>
                <div className="space-y-5">
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">見積もりによるDDP配送</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">MOQ: 1</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">リードタイム: 7〜14日</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="section bg-slate-100 pt-0">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">よくあるご質問</h2>
            <div className="space-y-6">
              {product.faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
                  <h3 className="text-xl font-black text-blue-700 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Call to action */}
        <section className="bg-slate-50 py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-4">{cta.heading}</h2>
            <p className="text-slate-500 font-medium mb-8">{cta.text}</p>
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
            <p className="mt-8 text-sm font-medium text-slate-500">
              関連する導入事例:{' '}
              <Link href={cta.caseHref} className="font-black text-blue-700 hover:text-blue-900 underline decoration-2 underline-offset-4 transition-colors">
                {cta.caseName}
              </Link>{' '}
              &mdash; {cta.caseContext}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
