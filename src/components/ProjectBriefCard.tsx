type ProjectBriefCardProps = {
  product: string;
  items: string[];
  /** Heading for a translated page; the English wording is the default. */
  heading?: string;
  /** Closing line for a translated page; the English wording is the default. */
  footnote?: string;
};

export default function ProjectBriefCard({
  product,
  items,
  heading = `What to send for ${product}`,
  footnote = 'Send what you have: artwork, approximate dimensions, quantity, finish or lighting direction, mounting/site photos, and ship-to country.',
}: ProjectBriefCardProps) {
  return (
    <div className="basis-full mt-6 w-full rounded-2xl border border-white/15 bg-white/10 p-5 text-left text-sm text-slate-200">
      <p className="mb-3 font-black uppercase tracking-widest text-blue-200">{heading}</p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => <li key={item} className="break-words leading-relaxed">• {item}</li>)}
      </ul>
      <p className="mt-3 text-xs text-slate-300">{footnote}</p>
    </div>
  );
}
