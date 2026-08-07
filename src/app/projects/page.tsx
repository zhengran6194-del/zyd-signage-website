'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-32 pb-40">
        <div className="container max-w-5xl">
          <h1 className="text-7xl font-black uppercase tracking-tighter mb-12">Global Showcase</h1>
          <div className="bg-slate-950 p-16 rounded-[4rem] shadow-2xl">
            <p className="text-2xl text-blue-400 font-bold italic mb-6">High-Impact Solutions for Global Brands.</p>
            <p className="text-slate-400 text-lg">Detailed case studies of our hospital, airport, and luxury hotel projects are currently being synchronized.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
