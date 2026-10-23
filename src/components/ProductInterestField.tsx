'use client';
import { useSearchParams } from 'next/navigation';

export const productInterests = {
  letters: 'Illuminated channel letters',
  halo: 'Halo-lit letters',
  pylon: 'Pylon / monument sign',
} as const;

export function ProductInterestSelect({ initialProduct = '' }: { initialProduct?: string }) {
  const selected = Object.hasOwn(productInterests, initialProduct) ? initialProduct : '';
  return <div className="space-y-3">
    <label htmlFor="product-interest" className="text-sm font-black uppercase tracking-widest text-slate-600 pl-2">Product of interest</label>
    <select key={selected} id="product-interest" name="productInterest" defaultValue={selected} className="w-full min-w-0 px-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 font-bold">
      <option value="">Other signage / help me choose</option>
      {Object.entries(productInterests).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
    </select>
    <p className="text-sm text-slate-500">The product is included in your inquiry. You can change it here.</p>
  </div>;
}

export default function ProductInterestField() {
  const searchParams = useSearchParams();
  return <ProductInterestSelect initialProduct={searchParams.get('product') ?? ''} />;
}
