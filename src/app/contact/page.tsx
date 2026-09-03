'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitMessageType, setSubmitMessageType] = useState<'success' | 'error'>('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitMessageType === 'error') setSubmitMessage('');
  };

  const validateForm = () => {
    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const company = formData.company.trim();
    const details = formData.details.trim();

    if (!fullName || !details) {
      setSubmitMessageType('error');
      setSubmitMessage('Please enter your full name and project details before submitting.');
      return null;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitMessageType('error');
      setSubmitMessage('Please enter a valid email address or leave the email field blank.');
      return null;
    }

    return { fullName, email, company, details };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validated = validateForm();
    if (!validated) return;

    const { fullName, email, company, details } = validated;
    const message = `*Project Inquiry from ZYD Website*\n\n` +
      `*Name:* ${fullName}\n` +
      `*Email:* ${email || 'N/A'}\n` +
      `*Company:* ${company || 'N/A'}\n` +
      `*Details:* ${details}`;
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

    setIsSubmitting(true);
    setSubmitMessageType('success');
    setSubmitMessage('Opening WhatsApp with your project inquiry...');
    const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (whatsappWindow) {
      setSubmitMessage('WhatsApp is ready with your project inquiry.');
    } else {
      setSubmitMessageType('error');
      setSubmitMessage('WhatsApp could not be opened. Please allow pop-ups and try again.');
    }
    window.setTimeout(() => setIsSubmitting(false), 1500);
  };

  const handleEmailSubmit = () => {
    const validated = validateForm();
    if (!validated) return;

    const { fullName, email, company, details } = validated;
    const subject = 'Project Inquiry from ZYD Website';
    const body = `Name: ${fullName}\nEmail: ${email || 'N/A'}\nCompany: ${company || 'N/A'}\nDetails: ${details}`;
    const mailtoUrl = `mailto:${siteConfig.salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleDirectWhatsApp = () => {
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi Aaron, I would like to chat about a signage project.")}`;
    window.open(url, '_blank');
  };

  const handleFactoryLocation = () => {
    const message = "Hi Aaron, I would like to discuss a signage project and learn more about your factory.";
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <main className="bg-slate-100 min-h-screen pt-24 pb-32">
        <div className="container">
          {/* Header Section */}
          <section className="text-center mb-20 reveal visible">
            <div className="eyebrow text-blue-600 font-black tracking-[0.3em] uppercase mb-4 text-sm">Get in Touch</div>
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Start Your Project</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              Consult with our engineering team for free 3D mockups and factory-direct pricing.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white p-12 lg:p-16 rounded-[4rem] shadow-2xl border border-slate-100 reveal visible">
              <h2 className="text-3xl font-black mb-10 uppercase tracking-tight">Project Inquiry</h2>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="full-name" className="text-sm font-black uppercase tracking-widest text-slate-400 pl-2">Full Name</label>
                    <input 
                      id="full-name"
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name" 
                      aria-label="Full name for your signage project inquiry"
                      className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-none focus:ring-4 focus:ring-blue-500/10 font-bold transition-all" 
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email-address" className="text-sm font-black uppercase tracking-widest text-slate-400 pl-2">Email Address</label>
                    <input 
                      id="email-address"
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com" 
                      aria-label="Email address for your signage project inquiry"
                      className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-none focus:ring-4 focus:ring-blue-500/10 font-bold transition-all" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="company-name" className="text-sm font-black uppercase tracking-widest text-slate-400 pl-2">Company Name</label>
                  <input 
                    id="company-name"
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                     placeholder="Your company name" 
                     aria-label="Company name for your signage project inquiry"
                     className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-none focus:ring-4 focus:ring-blue-500/10 font-bold transition-all" 
                   />
                </div>
                <div className="space-y-3">
                  <label htmlFor="project-details" className="text-sm font-black uppercase tracking-widest text-slate-400 pl-2">Project Details</label>
                  <textarea 
                    id="project-details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={5} 
                     placeholder="Describe your signage needs, dimensions, location, and installation environment..." 
                     aria-label="Project details for your signage inquiry"
                     className="w-full px-8 py-5 rounded-3xl bg-slate-50 border-none focus:ring-4 focus:ring-blue-500/10 font-bold transition-all resize-none"
                     required
                  ></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="button button-green-base w-full py-8 text-white font-black text-2xl rounded-full transition-all disabled:cursor-not-allowed disabled:opacity-70">
                  {isSubmitting ? 'OPENING WHATSAPP...' : 'SUBMIT INQUIRY'}
                </button>
                {submitMessage && (
                  <p role="status" aria-live="polite" className={`text-center text-sm font-bold ${submitMessageType === 'error' ? 'text-red-600' : 'text-emerald-600'}`}>
                    {submitMessage}
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-all"
                >
                  Prefer email? Send this inquiry by email
                </button>
              </form>
            </div>

            {/* Contact Info & Factory Guidance */}
            <div className="space-y-12 reveal visible">
              {/* Direct Contact Card */}
              <div className="bg-slate-950 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <h3 className="text-3xl font-black mb-8 italic text-blue-400 uppercase tracking-tighter">Direct Communication</h3>
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-1">Email Sales</div>
                      <a href={`mailto:${siteConfig.salesEmail}`} className="text-xl font-bold hover:text-blue-400 transition-all">{siteConfig.salesEmail}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.1 4.9A9.9 9.9 0 0 0 3.6 16.8L2.2 22l5.4-1.4A10 10 0 1 0 19.1 4.9Zm-7.1 15a8 8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3a8 8 0 1 1 6.8 3.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.2-.2-.2-.4-.2-.6-.3Z"/></svg>
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-1">WhatsApp Chat</div>
                      <button onClick={handleDirectWhatsApp} className="text-xl font-bold hover:text-green-400 transition-all">+{siteConfig.whatsappNumber} ({siteConfig.contactPerson})</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Factory Info Card */}
              <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl">
                <h3 className="text-3xl font-black mb-8 uppercase tracking-tight">Factory Location</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-1">Address</div>
                      <p className="text-lg font-bold text-slate-900 leading-relaxed">
                        No. 18, Industrial Zone, Ganjingzi District, Dalian, Liaoning, China
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleFactoryLocation}
                    className="rounded-[2.5rem] overflow-hidden bg-slate-100 h-64 relative group block w-full text-left"
                    aria-label="Contact us on WhatsApp about the factory location"
                  >
                    <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all">
                      <span className="text-white font-black text-sm uppercase tracking-widest bg-slate-950/80 px-6 py-3 rounded-full">Chat on WhatsApp</span>
                    </div>
                    <img src="/assets/images/factory-overview.jpg" alt="Factory Overview" width={1200} height={800} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
