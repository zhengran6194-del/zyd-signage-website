import Link from 'next/link';

type RelatedCaseStudyProps = {
  href: string;
  name: string;
  context: string;
};

/**
 * Links a product page to a delivered project that shows the same kind of work,
 * so a buyer can check the finished result before sending a brief. Rendered as
 * text rather than a button, which keeps the enquiry CTA the only action in the
 * section.
 */
export default function RelatedCaseStudy({ href, name, context }: RelatedCaseStudyProps) {
  return (
    <p className="mt-8 text-sm font-medium text-slate-500">
      Related case study:{' '}
      <Link
        href={href}
        className="font-black text-blue-700 hover:text-blue-900 underline decoration-2 underline-offset-4 transition-colors"
      >
        {name}
      </Link>{' '}
      &mdash; {context}
    </p>
  );
}
