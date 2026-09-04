'use client';

import React from 'react';
import Link from 'next/link';

export default function CustomPlanterBoxPage() {
  return (
    <>
      <main id="main">
        <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal visible">
              <div className="eyebrow text-blue-400 font-black tracking-widest uppercase mb-4 text-sm">Outdoor Site Furnishings</div>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight uppercase">
                Custom <span className="text-blue-500 italic">Planter</span> <br />Box
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed font-medium">
                Architectural planter solutions that bring greenery into hotels, commercial entrances, and public spaces. Coordinate the shape, appearance, and project requirements directly with our factory team.
              </p>
              <Link href="/contact" className="button button-green-base px-10 py-5 rounded-full text-white font-black text-base tracking-wide">
                GET A PROJECT QUOTE
              </Link>
            </div>
            <div className="reveal visible relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <img src="/assets/images/custom-planter-box.jpg" alt="Custom architectural planter boxes with greenery" width={915} height={915} loading="eager" fetchPriority="high" className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/5 object-cover w-full h-[420px] lg:h-[500px]" />
            </div>
          </div>
        </section>

        <section className="section bg-slate-100">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-14">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight">Project Configuration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <h3 className="text-xl font-black text-blue-600 mb-4 uppercase italic">Architectural Form</h3>
                    <p className="text-slate-600 font-bold leading-relaxed">Coordinate the planter profile and visible appearance with the architecture and planting concept of your project.</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <h3 className="text-xl font-black text-blue-600 mb-4 uppercase italic">Outdoor Placement</h3>
                    <p className="text-slate-600 font-bold leading-relaxed">Share site conditions, placement, and intended plants for a project-specific recommendation and coordination.</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <h3 className="text-xl font-black text-blue-600 mb-4 uppercase italic">Appearance Options</h3>
                    <p className="text-slate-600 font-bold leading-relaxed">Custom appearance and finish coordination are available for hospitality, commercial, and public-space programs.</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <h3 className="text-xl font-black text-blue-600 mb-4 uppercase italic">Factory Consultation</h3>
                    <p className="text-slate-600 font-bold leading-relaxed">Confirm dimensions, materials, drainage, finish, and installation details with our engineering team before production.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl font-black mb-6 italic text-blue-400 uppercase tracking-tighter">Built for Your Project</h3>
                <p className="text-slate-400 mb-8 leading-relaxed font-medium">Send your drawings, target quantity, and site requirements to receive a factory-direct recommendation.</p>
                <div className="space-y-5">
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">Custom Appearance Coordination</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">Project-Based Production</span></div>
                  <div className="flex items-center gap-4"><span className="w-4 h-4 bg-green-500 rounded-full"></span><span className="font-bold">Global Delivery Support</span></div>
                </div>
                <Link href="/contact" className="button button-green-base mt-8 px-8 py-3 text-center">Discuss Your Requirements</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12">
          <div className="container text-center">
            <Link href="/products" className="text-sm text-blue-600 hover:text-blue-800 font-black uppercase tracking-widest transition-all">
              Related Products
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
