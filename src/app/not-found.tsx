import type { Metadata } from 'next';
import Link from 'next/link';
import { ogImages, siteConfig } from '@/config/site';

const notFoundTitle = 'Page Not Found | ZYD Signage';
const notFoundDescription =
  'The requested page is not available. Browse the signage product lines, case studies, and guides, or send the project requirement to our sales team.';

const shareImage = `${siteConfig.url}${ogImages.default.path}`;

export const metadata: Metadata = {
  title: 'Page Not Found',
  // A 404 has no canonical URL of its own, so keep it out of the index
  // instead of letting it be crawled as a page of the site.
  robots: { index: false, follow: true },
  // Declared rather than inherited: Next.js does not deep-merge openGraph, so
  // omitting it would advertise the homepage title on a share of a dead link.
  // No `url` is set because a 404 has no canonical address.
  openGraph: {
    type: 'website',
    siteName: siteConfig.companyName,
    title: notFoundTitle,
    description: notFoundDescription,
    images: [
      {
        url: shareImage,
        width: ogImages.default.width,
        height: ogImages.default.height,
        alt: ogImages.default.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: notFoundTitle,
    description: notFoundDescription,
    images: [shareImage],
  },
};

const recoveryLinks = [
  { href: '/products', label: 'All Signage Products' },
  { href: '/projects', label: 'Case Studies' },
  { href: '/guides', label: 'Signage Guides' },
];

export default function NotFound() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <section className="section bg-slate-900 text-white py-24 lg:py-28">
        <div className="container text-center">
          <div className="eyebrow text-blue-400 font-black tracking-[0.3em] uppercase mb-4 text-xs">
            Error 404
          </div>
          <h1 className="uppercase tracking-tighter mb-6">This page could not be found</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            The address may be mistyped, or the page may have moved during a site update. Your
            project enquiry is not affected - you can reach the routes below, or send us the
            requirement directly.
          </p>
        </div>
      </section>

      <section className="section bg-slate-100 py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recoveryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block bg-white border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <span className="text-sm font-black text-slate-900 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                  {link.label}
                </span>
                <span
                  aria-hidden="true"
                  className="block mt-3 text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]"
                >
                  Open section
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">
            Looking for a specific sign?
          </h2>
          <p className="text-slate-500 font-medium mb-8">
            Send the site details, artwork, and quantities for a project-specific review.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide"
            >
              BACK TO HOME
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 rounded-full border-2 border-slate-300 text-slate-700 font-black uppercase tracking-widest text-sm hover:border-blue-600 hover:text-blue-700 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
