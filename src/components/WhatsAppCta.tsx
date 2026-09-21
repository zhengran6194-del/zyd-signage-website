import { siteConfig } from '@/config/site';

type WhatsAppCtaProps = {
  label: string;
  message: string;
  className?: string;
};

export default function WhatsAppCta({ label, message, className = '' }: WhatsAppCtaProps) {
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className || 'inline-flex items-center justify-center rounded-full border border-emerald-300 px-6 py-4 text-sm font-black text-emerald-800 transition-colors hover:bg-emerald-50'}
    >
      {label}
    </a>
  );
}
