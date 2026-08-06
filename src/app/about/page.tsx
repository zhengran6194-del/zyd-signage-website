'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="section-pad bg-white min-h-screen">
        <div className="container">
          <div className="section-heading pt-20">
            <h1 className="text-5xl font-black text-slate-900 mb-6">About Dalian Zhiyudao Signage</h1>
            <p className="text-xl text-slate-600">Leading the signage industry with precision since 2006.</p>
          </div>
          <div className="mt-12 text-slate-700 leading-relaxed max-w-4xl">
            <p className="mb-6">Dalian Zhiyudao Signage & Tech. Co., Ltd. (ZYD) is a factory-direct manufacturer serving global B2B signage projects.</p>
            <p>Our 20,000㎡ production base ensures highest quality for channel letters, light boxes, and custom monument signs.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
