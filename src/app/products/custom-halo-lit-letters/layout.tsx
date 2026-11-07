import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

// This page targets halo-lit / reverse-lit channel-letter searches; front-lit
// queries remain focused on the separate front-lit product page.
const description =
  "Custom halo-lit (reverse-lit) channel letters in aluminum, stainless steel or coated metal. Factory-direct, free design support, MOQ 1 set and 7–15 day production.";

export const metadata: Metadata = buildPageMetadata({
  title: "Halo-Lit Channel Letters Manufacturer | Custom Metal",
  description,
  path: "/products/custom-halo-lit-letters",
  image: { path: "/assets/images/halo-letters-infinite-workshop.jpg", width: 1706, height: 1279, alt: "Custom dark-faced lettering and shaped logo with warm rear glow during a workshop lighting check" },
  languages: { en: "/products/custom-halo-lit-letters", ja: "/ja/products/custom-halo-lit-letters" },
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Custom Halo-Lit Channel Letters"
        description={description}
        path="/products/custom-halo-lit-letters"
         image="/assets/images/halo-letters-infinite-workshop.jpg"
         category="Custom halo-lit channel letters"
         material="Aluminum, stainless steel and coated sheet"
       />
      {children}
    </>
  );
}
