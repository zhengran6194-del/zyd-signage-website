'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="bg-slate-100 min-h-screen">
      <section className="section bg-slate-900 text-white py-24 lg:py-28">
        <div className="container text-center">
          <div className="eyebrow text-blue-400 font-black tracking-[0.3em] uppercase mb-4 text-xs">
            Unexpected Error
          </div>
          <h1 className="uppercase tracking-tighter mb-6">Something went wrong on this page</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            The page could not be rendered. This is usually temporary - retrying the request
            normally resolves it. If it keeps happening, the rest of the site is still available
            below.
          </p>
          {error.digest ? (
            <p className="mt-6 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
              Reference: {error.digest}
            </p>
          ) : null}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">
            What would you like to do?
          </h2>
          <p className="text-slate-500 font-medium mb-8">
            Retry this page, or continue to a section of the site that is working.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => reset()}
              className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide"
            >
              TRY AGAIN
            </button>
            <Link
              href="/"
              className="px-10 py-5 rounded-full border-2 border-slate-300 text-slate-700 font-black uppercase tracking-widest text-sm hover:border-blue-600 hover:text-blue-700 transition-all"
            >
              Back to Home
            </Link>
            <Link
              href="/products"
              className="px-10 py-5 rounded-full border-2 border-slate-300 text-slate-700 font-black uppercase tracking-widest text-sm hover:border-blue-600 hover:text-blue-700 transition-all"
            >
              All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
