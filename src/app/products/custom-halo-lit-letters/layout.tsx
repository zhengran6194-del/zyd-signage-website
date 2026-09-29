import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom Halo-Lit Metal Letters | Aluminum & Steel",
  description: "Custom halo-lit metal channel letters in aluminum and stainless steel, fabricated factory-direct with lead time confirmed against each project.",
  path: "/products/custom-halo-lit-letters",
  image: ogImages.channelLetters,
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Custom Halo-Lit Metal Letters | Aluminum & Steel"
        description="Custom halo-lit metal channel letters in aluminum and stainless steel, fabricated factory-direct with lead time confirmed against each project."
        path="/products/custom-halo-lit-letters"
        image="/assets/images/cat-illuminated.jpg"
      />
      {children}
    </>
  );
}
