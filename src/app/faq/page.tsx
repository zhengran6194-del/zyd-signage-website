'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen pt-24 pb-32">
        <div className="container max-w-4xl">
          <h1 className="text-6xl font-black text-slate-900 mb-12 uppercase tracking-tighter">Resources & FAQ</h1>
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic text-blue-600">What is the lead time?</h3>
              <p className="text-lg text-slate-600 font-medium">Standard production is 7-12 working days depending on quantity and complexity.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic text-blue-600">Do you offer DDP shipping?</h3>
              <p className="text-lg text-slate-600 font-medium">Yes, we provide Door-to-Door (DDP) shipping to over 50 countries including USA, EU, and Middle East.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
