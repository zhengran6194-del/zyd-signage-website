type ProjectBriefCardProps = {
  product: string;
  items: string[];
};

export default function ProjectBriefCard({ product, items }: ProjectBriefCardProps) {
  return (
    <div className="basis-full mt-6 w-full rounded-2xl border border-white/15 bg-white/10 p-5 text-left text-sm text-slate-200">
      <p className="mb-3 font-black uppercase tracking-widest text-blue-200">What to send for {product}</p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => <li key={item} className="break-words leading-relaxed">• {item}</li>)}
      </ul>
      <p className="mt-3 text-xs text-slate-300">Send what you have: artwork, approximate dimensions, quantity, finish or lighting direction, mounting/site photos, and ship-to country.</p>
    </div>
  );
}
