'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { footerCopy, footerStatic, headerCta, localeFromPath } from '@/config/i18n';

export default function Footer() {
  const locale = localeFromPath(usePathname());
  const copy = footerCopy[locale];
  const contactHref = headerCta[locale].href;
  const whatsappMessage = locale === 'ja'
    ? 'こんにちは Aaron。サイネージについて相談したいです。'
    : 'Hi Aaron, I have a question about signage.';
  const linkClass = 'text-sm text-slate-600 hover:text-blue-600 font-bold transition-all tracking-tight';
  const headingClass = 'text-blue-950 font-black text-[11px] uppercase tracking-[0.3em] mb-12 border-b-2 border-slate-200 pb-4 inline-block';

  const handleWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>, message: string) => {
    e.preventDefault();
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-32 pb-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-32 mb-32">
          {/* Column 1: Extreme Left Logo Section (1/3) */}
          <div className="lg:w-1/3">
            <Link href="/" className="inline-block mb-12">
              {/* width/height mirror the real 4961x3508 file. The previous
                  320x160 pair described a 2:1 box for a 1.41:1 image, so this
                  was being stretched horizontally. */}
              <Image src="/assets/images/logo-correct.png" alt="ZYD Signage" width={4961} height={3508} sizes="240px" className="h-[160px] w-auto opacity-95 hover:opacity-100 transition-all" />
            </Link>
            <p className="text-slate-600 text-xs font-black leading-loose uppercase tracking-[0.4em] max-w-[280px]">
              {copy.tagline}
            </p>
          </div>

          {/* Right Section: Concentrated grid (2/3) */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {copy.columns.map((column) => (
              <div key={column.heading}>
                <h4 className={headingClass}>{column.heading}</h4>
                <ul className="space-y-8">
                  {column.links.map((link) => (
                    <li key={link.href}><Link href={link.href} className={linkClass}>{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className={headingClass}>{footerStatic.socialHeading[locale]}</h4>
              <ul className="space-y-8">
                {footerStatic.socialLinks.map((social) => (
                  <li key={social.key}>
                    <a href={siteConfig.links[social.key]} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {social.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={footerStatic.alibaba.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {footerStatic.alibaba.label}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:pl-4">
              <h4 className={headingClass}>{footerStatic.connectHeading[locale]}</h4>
              <div className="space-y-8">
                <div>
                  <div className="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em] mb-2">{copy.emailLabel}</div>
                  <a href={`mailto:${siteConfig.salesEmail}`} className="text-xs text-slate-600 hover:text-blue-600 font-bold block transition-all break-all">{siteConfig.salesEmail}</a>
                </div>
                  <div>
                    <div className="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em] mb-2">{copy.whatsappLabel}</div>
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi Aaron, I have a question about signage.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-600 hover:text-green-700 font-black tracking-widest block transition-all"
                    >
                      +{siteConfig.whatsappNumber}
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-8">
            <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.5em]">{copy.copyright} {siteConfig.companyName}</span>
            <span className="h-px w-12 bg-slate-300 hidden md:block"></span>
            <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.4em]">{copy.delivery}</span>
          </div>
          <a 
            href="#top" 
            onClick={scrollToTop}
            className="text-[10px] text-blue-600 font-black uppercase tracking-widest hover:text-blue-800 transition-all group flex items-center gap-4"
          >
            {copy.backToTop}
            <span className="group-hover:-translate-y-2 transition-transform duration-300">↑</span>
          </a>
        </div>
      </div>

      {/* WhatsApp Floating Icon */}
      <a 
        className="floating-whatsapp" 
        href="#contact" 
        onClick={(e) => handleWhatsApp(e, whatsappMessage)}
        aria-label={copy.whatsappAria}
      >
        <Image src="/assets/images/whatsapp-icon-3d.jpg" alt="WhatsApp" width={1254} height={1254} sizes="(max-width: 1024px) 64px, 150px" />
      </a>
      <a
        className="floating-quote"
        href={contactHref}
        aria-label={copy.quoteAria}
      >
        <span className="floating-quote-icon" aria-hidden="true">↗</span>
        <span className="floating-quote-label">{copy.quoteLabel}</span>
      </a>
    </footer>
  );
}
