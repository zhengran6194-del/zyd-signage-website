'use client';

import React, { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import {
  buildWhatsAppUrl,
  pushGenerateLead,
  submitInquiry,
  type InquiryPayload,
} from '@/lib/inquiry';

/**
 * Inquiry form for the Japanese contact page.
 *
 * It reuses the same submission library and the same anti-abuse fields as the
 * English form, and validates with the same rules, but presents its own labels
 * and messages so the Japanese page reads consistently. The English form was
 * left untouched.
 */
export default function JapaneseInquiryForm() {
  const [formData, setFormData] = useState({ fullName: '', email: '', company: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const [leadReceived, setLeadReceived] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<InquiryPayload | null>(null);

  // Anti-abuse fields are populated after mount so server and client markup match.
  const honeypotRef = useRef<HTMLInputElement>(null);
  const startedAtRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (messageType === 'error') setMessage('');
  };

  const validate = () => {
    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const company = formData.company.trim();
    const details = formData.details.trim();

    if (!fullName || !details) {
      setMessageType('error');
      setMessage('お名前とプロジェクトの内容をご記入ください。');
      return null;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessageType('error');
      setMessage('メールアドレスの形式をご確認ください。');
      return null;
    }
    return { fullName, email, company, details };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    const validated = validate();
    if (!validated) return;

    setIsSubmitting(true);
    setLeadReceived(false);
    setMessageType('success');
    setMessage('送信しています…');

    const response = await submitInquiry({
      ...validated,
      source: 'contact_page',
      companyWebsite: honeypotRef.current?.value ?? '',
      formStartedAt: Number(startedAtRef.current?.value || 0),
    });

    if (!response.ok) {
      setMessageType('error');
      setMessage('送信できませんでした。時間をおいて再度お試しいただくか、WhatsApp をご利用ください。');
      setIsSubmitting(false);
      return;
    }

    // The conversion event is pushed only after the server confirmed the inquiry was stored.
    pushGenerateLead(response, 'contact_page');
    setLastSubmitted(validated);
    setLeadReceived(true);
    setMessageType('success');
    setMessage('お問い合わせを受け付けました。担当者よりご連絡します。');
    setFormData({ fullName: '', email: '', company: '', details: '' });
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
    setIsSubmitting(false);
  };

  const handleEmailSubmit = () => {
    const validated = validate();
    if (!validated) return;
    const { fullName, email, company, details } = validated;
    const body = `Name: ${fullName}\nEmail: ${email || 'N/A'}\nCompany: ${company || 'N/A'}\nDetails: ${details}`;
    const mailtoUrl = `mailto:${siteConfig.salesEmail}?subject=${encodeURIComponent('Project Inquiry from ZYD Website')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const fieldClass =
    'w-full px-8 py-5 rounded-3xl bg-slate-50 border-none focus:ring-4 focus:ring-blue-600 font-bold transition-all';
  const labelClass = 'text-sm font-black tracking-widest text-slate-600 pl-2';

  return (
    <div className="bg-white p-12 lg:p-16 rounded-[4rem] shadow-2xl border border-slate-100 reveal visible">
      <h2 className="text-3xl font-black mb-10 tracking-tight">プロジェクトのお問い合わせ</h2>
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Anti-abuse fields. Kept off-screen and untabbable, never shown to visitors. */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <label htmlFor="ja-contact-company-website">Company website</label>
          <input ref={honeypotRef} id="ja-contact-company-website" type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </div>
        <input ref={startedAtRef} type="hidden" name="formStartedAt" defaultValue="" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label htmlFor="ja-full-name" className={labelClass}>お名前</label>
            <input
              id="ja-full-name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="お名前をご記入ください"
              className={fieldClass}
              required
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="ja-email-address" className={labelClass}>メールアドレス</label>
            <input
              id="ja-email-address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className={fieldClass}
            />
          </div>
        </div>
        <div className="space-y-3">
          <label htmlFor="ja-company-name" className={labelClass}>会社名</label>
          <input
            id="ja-company-name"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="会社名をご記入ください"
            className={fieldClass}
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="ja-project-details" className={labelClass}>プロジェクトの内容</label>
          <textarea
            id="ja-project-details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={5}
            placeholder="サイネージの種類、おおよその寸法、設置場所、設置環境などをご記入ください。"
            className={`${fieldClass} resize-none`}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="button button-green-base w-full py-8 text-white font-black text-2xl rounded-full transition-all disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? '送信中…' : '送信する'}
        </button>
        {message && (
          <p role="status" aria-live="polite" className={`text-center text-sm font-bold ${messageType === 'error' ? 'text-red-600' : 'text-emerald-600'}`}>
            {message}
          </p>
        )}
        {leadReceived && lastSubmitted && (
          <a
            href={buildWhatsAppUrl(lastSubmitted)}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center text-sm font-black tracking-widest text-slate-500 hover:text-blue-600 transition-all"
          >
            すぐに回答が必要な場合は WhatsApp でも送信できます
          </a>
        )}
        <button
          type="button"
          onClick={handleEmailSubmit}
          className="w-full text-sm font-black tracking-widest text-slate-500 hover:text-blue-600 transition-all"
        >
          メールで送信する
        </button>
      </form>
    </div>
  );
}
