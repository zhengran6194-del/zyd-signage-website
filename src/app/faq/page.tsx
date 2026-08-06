'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="section-pad bg-slate-50 min-h-screen">
        <div className="container pt-20">
          <h1 className="text-5xl font-black text-slate-900 mb-8">Resources & FAQ</h1>
          <div className="max-w-2xl">
            <div className="mb-6">
              <h3 className="font-bold text-lg">What is the lead time?</h3>
              <p className="text-slate-600">Standard production is 7-12 working days.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
