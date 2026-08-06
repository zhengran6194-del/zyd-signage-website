'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="section-pad bg-white min-h-screen">
        <div className="container pt-20">
          <h1 className="text-5xl font-black text-slate-900 mb-8">Case Studies</h1>
          <p className="text-slate-600">Explore our global projects in Hospitality, Retail, and Corporate sectors.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
