import Image from 'next/image';
import Link from 'next/link';

export default function PackingDeliverySummary() {
  return <section className="bg-slate-50 py-12 lg:py-16" aria-labelledby="packing-delivery-summary">
    <div className="container grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
      <Image src="/assets/images/packing-wooden-crate-workshop.jpg" alt="Closed ZYD wooden packing crate with external reinforcement and a raised base in the workshop" width={1702} height={1276} sizes="(min-width: 768px) 40vw, 100vw" className="h-auto w-full rounded-2xl border border-slate-200" />
      <div><p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-3">From design to dispatch</p><h2 id="packing-delivery-summary" className="text-2xl lg:text-3xl font-black text-slate-950 mb-4">Planning, fabrication, packing and shipping</h2><p className="text-slate-600 leading-relaxed mb-4">ZYD can plan and design the signage, manufacture the approved sign package, and arrange packing and transport. EXW, FOB, CIF and DDP options are available by quotation for the agreed destination or port.</p><p className="text-slate-950 font-bold leading-relaxed mb-5">On-site installation is not included. Arrange the local installer, foundation works, lifting and electrical connection with your project team.</p><Link href="/packaging-shipping" className="font-bold text-blue-700 underline underline-offset-4">View packing photos and delivery scope</Link></div>
    </div>
  </section>;
}
