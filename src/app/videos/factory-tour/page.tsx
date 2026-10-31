import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { buildPageMetadata, siteConfig } from '@/config/site';

const route = '/videos/factory-tour';
const title = 'ZYD Signage Factory Tour Video';
const description = 'Watch a 2-minute 49-second recorded video introducing ZYD Signage and its factory in Dalian, China. Discuss your custom signage project with our team.';
const poster = '/assets/images/factory-video-poster.jpg';
export const metadata: Metadata = buildPageMetadata({ title, description, path: route, image: { path: poster, width: 1854, height: 1205, alt: 'ZYD Signage factory tour video cover' } });

export default function FactoryTourVideoPage() {
  return (
    <main id="main" className="bg-slate-950 text-white pb-16">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'VideoObject', '@id': siteConfig.url + route + '#video', name: title, description, thumbnailUrl: [siteConfig.url + poster], contentUrl: siteConfig.url + '/assets/videos/factory-live.mp4', duration: 'PT2M49S',
        // First addition of this video asset to the website repository, preserved rather than reset on page updates.
        uploadDate: '2026-08-28T10:34:01+08:00', inLanguage: 'en', publisher: { '@id': siteConfig.url + '/#organization' }, mainEntityOfPage: siteConfig.url + route }} />
      <div className="w-[90%] max-w-5xl mx-auto pt-6 lg:pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-300 mb-4"><Link href="/" className="hover:text-white">Home</Link><span aria-hidden="true"> / </span><span>Factory tour video</span></nav>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">ZYD Signage Factory Tour</h1>
        <p className="text-sm text-slate-300 mb-5">Recorded company and factory video · 2 min 49 sec</p>
        <video controls playsInline preload="metadata" poster={poster} width={1280} height={720} aria-label="ZYD Signage factory tour video" className="w-full aspect-video bg-black rounded-xl">
          <source src="/assets/videos/factory-live.mp4" type="video/mp4" />
          Your browser does not support video playback. <a href="/assets/videos/factory-live.mp4">Open the video file.</a>
        </video>
        <section className="mt-8 max-w-3xl">
          <h2 className="text-xl font-bold mb-3">Meet the manufacturer behind your signage</h2>
          <p className="text-slate-300 leading-relaxed">Watch this recorded introduction to ZYD Signage and our factory in Dalian, China. To discuss a current order or arrange a live factory tour, contact our team. This recording is not a live stream or a progress report for an individual order.</p>
          <div className="flex flex-wrap gap-4 my-6"><Link href="/contact" className="button-green-base">Discuss Your Signage Project</Link><Link href="/products" className="border border-slate-600 rounded px-5 py-3 font-bold">Explore Our Products</Link></div>
          <p className="text-sm text-slate-400">Free design support · MOQ 1 set · Production 7–15 days · 1-year warranty. First reply within 8 hours by WhatsApp or email. Production and delivery are scheduled separately; on-site installation is excluded.</p>
        </section>
      </div>
    </main>
  );
}
