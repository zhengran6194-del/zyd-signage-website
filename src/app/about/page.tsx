'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <>
      <main className="section-pad bg-white min-h-screen">
        <div className="container pt-20">
          <div className="section-heading text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">About ZYD Signage</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto italic">Leading the international signage industry with precision since 2006.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="text-slate-700 leading-relaxed text-lg">
              <p className="mb-6">Dalian Zhiyudao Signage & Tech. Co., Ltd. (ZYD) is a factory-direct manufacturer serving global B2B signage projects for over 18 years.</p>
              <p className="mb-6">Our <strong>20,000sqm production base</strong> is equipped with advanced CNC technology and automated processes to ensure the highest quality for architectural wayfinding and custom signs.</p>
              <p>We pride ourselves on our <strong>Door-to-Door (DDP) shipping</strong> capabilities, handling all customs and duties for our clients in 50+ countries.</p>
            </div>
            <div className="relative group">
              <img src="/assets/images/company-entrance.jpg" alt="ZYD Factory Entrance" className="rounded-[3rem] shadow-2xl w-full h-[450px] object-cover" />
              <p className="text-center text-sm font-black text-slate-400 mt-4 tracking-widest uppercase">Factory Entrance</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
