import Image from 'next/image';
import Link from 'next/link';
import WhatsAppCta from '@/components/WhatsAppCta';
import type { LocalizedHomeContent } from '@/content/localized-home';

/**
 * Home page for a translated tree.
 *
 * Every language follows the same seven sections as the English home page and
 * shares this renderer, so the versions stay in step and adding a language is a
 * matter of supplying its text. The pages state only what the English pages
 * already publish; products and guides are published in English, so their links
 * point at the pages that exist.
 */
export default function LocalizedHomePage({ content }: { content: LocalizedHomeContent }) {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-20 text-white lg:pt-32 lg:pb-28">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero-bg-factory-aerial.jpg"
            alt={content.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-blue-300">{content.hero.eyebrow}</p>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight lg:text-6xl">{content.hero.h1}</h1>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-300 lg:text-lg">{content.hero.intro}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button button-green-base px-10 py-4">
                {content.hero.primary}
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {content.hero.secondary}
              </Link>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-white/15 pt-10 lg:grid-cols-4">
            {content.trust.map((point) => (
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
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">{content.process.eyebrow}</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-slate-900 lg:text-4xl">{content.process.heading}</h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-600">{content.process.intro}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.process.steps.map((step) => (
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
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">{content.products.eyebrow}</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-slate-900 lg:text-4xl">{content.products.heading}</h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-600">{content.products.intro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.products.items.map((product) => (
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
        </div>
      </section>

      {/* 4. QUALITY */}
      <section className="section bg-white">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">{content.quality.eyebrow}</p>
            <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-slate-900 lg:text-4xl">{content.quality.heading}</h2>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-slate-600">{content.quality.intro}</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {content.quality.points.map((point) => (
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
              alt={content.quality.imageAlt}
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
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300">{content.why.eyebrow}</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight lg:text-4xl">{content.why.heading}</h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-300">{content.why.intro}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.why.items.map((item) => (
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
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">{content.guides.eyebrow}</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-slate-900 lg:text-4xl">{content.guides.heading}</h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-600">{content.guides.intro}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {content.guides.items.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-blue-600"
              >
                <h3 className="mb-3 text-base font-black tracking-tight text-slate-900">{guide.title}</h3>
                <span className="text-xs font-black uppercase tracking-widest text-blue-700">{content.guides.readLabel} →</span>
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
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight lg:text-4xl">{content.cta.heading}</h2>
          <p className="mb-10 text-base text-slate-300">{content.cta.intro}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="button button-green-base px-10 py-3">
              {content.cta.quote}
            </Link>
            <WhatsAppCta
              label={content.cta.whatsappLabel}
              message={content.cta.whatsappMessage}
              brief={{
                product: content.cta.briefProduct,
                heading: content.cta.briefHeading,
                items: content.cta.briefItems,
                footnote: content.cta.briefFootnote,
              }}
              className="inline-flex items-center justify-center rounded border border-emerald-300 px-10 py-3 text-[12px] font-bold uppercase text-emerald-100 transition-all hover:bg-emerald-400 hover:text-slate-950"
            />
          </div>
          <p className="mt-8 text-sm text-slate-400">
            {content.cta.emailNote}{' '}
            <a href="mailto:zhengran@zydsign.cn" className="font-black text-emerald-300 hover:text-emerald-200">
              zhengran@zydsign.cn
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
