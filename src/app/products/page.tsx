'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="section-pad bg-white min-h-screen">
        <div className="container pt-20">
          <h1 className="text-5xl font-black text-slate-900 mb-8">Signage Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Illuminated Letters</h3>
              <p className="text-slate-500">Front-lit, Halo-lit, and Dual-lit LED channel letters.</p>
            </div>
            <div className="border border-slate-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Custom Light Boxes</h3>
              <p className="text-slate-500">Projecting and slim LED light boxes for retail.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
