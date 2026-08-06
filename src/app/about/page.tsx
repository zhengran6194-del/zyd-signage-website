'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="section-pad bg-white min-h-screen">
        <div className="container pt-20">
          <div className="section-heading text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">About Dalian Zhiyudao Signage</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto italic">Precision manufacturing and global export expertise since 2006.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="text-slate-700 leading-relaxed text-lg">
              <p className="mb-6">Dalian Zhiyudao Signage & Tech. Co., Ltd. (ZYD) is a factory-direct manufacturer serving high-end global B2B signage projects.</p>
              <p className="mb-6">Our <strong>20,000㎡ production base</strong> features advanced CNC technology and automated bending to ensure the highest quality for hospital systems, airport wayfinding, and custom monument signs.</p>
              <p>With <strong>Door-to-Door (DDP) shipping</strong> to 50+ countries, we handle every detail from design to your doorstep.</p>
            </div>
            <div className="relative">
              <img src="/assets/images/company-entrance.jpg" alt="ZYD Factory Entrance" className="rounded-[3rem] shadow-2xl w-full h-[450px] object-cover" />
              <p className="text-center text-sm font-black text-slate-400 mt-4 tracking-widest uppercase text-center w-full">Factory Entrance</p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 lg:p-16 rounded-[4rem] border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center uppercase tracking-tighter">Global Production Capacity</h2>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img src="/assets/images/factory-overview.jpg" alt="ZYD Factory Overview" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
