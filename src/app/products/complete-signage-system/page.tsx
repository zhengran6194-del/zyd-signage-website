'use client';

import React from 'react';
import Link from 'next/link';

export default function CompleteSignageSystemPage() {
  return (
    <>
      <main id="main">
        {/* 1. Hero */}
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal visible">
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Industrial Precision</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Complete <span className="text-blue-500 italic">Signage</span> <br/>Systems
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed font-medium">
                One partner, one standard. Fully coordinated sign programs — channel letters, light boxes, monuments and interior branding — manufactured under a single quality system for chain rollouts and large-scale B2B projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide"
                >
                  GET A QUOTE
                </Link>
              </div>
            </div>
            <div className="reveal visible relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <img src="/assets/images/cat-system.webp" alt="Complete Signage System" width={1200} height={800} loading="eager" fetchPriority="high" className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/5 object-cover w-full h-[420px] lg:h-[500px]" />
            </div>
          </div>
        </section>

        {/* 2. Professional Specs Table */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-14">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight">Engineering Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <h3 className="text-xl font-black text-blue-600 mb-4 uppercase italic">Material Options</h3>
                    <ul className="space-y-3 text-slate-600 font-bold">
                      <li>&bull; Galvanized Sheet — Hot-Dip Galvanized</li>
                      <li>&bull; 201 Stainless Steel — Economical Grade</li>
                      <li>&bull; 304 Stainless Steel — Premium Outdoor Grade</li>
                      <li>&bull; Aluminum Plate — Lightweight &amp; Corrosion-Resistant</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <h3 className="text-xl font-black text-blue-600 mb-4 uppercase italic">Surface Treatment</h3>
                    <ul className="space-y-3 text-slate-600 font-bold">
                      <li>&bull; Professional Powder Coating (Any RAL Color)</li>
                      <li>&bull; Automotive-Grade Paint Finish</li>
                      <li>&bull; Brushed or Mirror Finish</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <h3 className="text-xl font-black text-blue-600 mb-4 uppercase italic">Structure &amp; Mounting</h3>
                    <ul className="space-y-3 text-slate-600 font-bold">
                      <li>&bull; Internal Reinforced Frames</li>
                      <li>&bull; L-Shape / U-Shape Mounting Brackets</li>
                      <li>&bull; Flush-Mount Installation Available</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <h3 className="text-xl font-black text-blue-600 mb-4 uppercase italic">Components &amp; Durability</h3>
                    <ul className="space-y-3 text-slate-600 font-bold">
                      <li>&bull; High-Efficiency LED Modules (Samsung / Epistar Chips)</li>
                      <li>&bull; MeanWell Power Supplies (IP67 Rated)</li>
                      <li>&bull; UV-Resistant &amp; Rust-Proof Construction</li>
                      <li>&bull; Weather-Certified for -40°C to +60°C</li>
                      <li>&bull; 3-5 Year Global Warranty</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 uppercase tracking-tighter">Factory Advantage</h3>
                <p className="text-slate-400 mb-8 leading-relaxed font-medium">Direct manufacturing from our 20,000sqm base ensures zero middleman costs and 100% quality control on every weld and finish.</p>
                <div className="space-y-5">
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">Global DDP Shipping</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">Free 3D Mockup Setup</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">Fast Turnaround (7-10 Days)</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
