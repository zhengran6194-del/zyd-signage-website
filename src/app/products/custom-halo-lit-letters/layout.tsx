import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom Halo-Lit Metal Letters",
  description: "Custom halo-lit metal channel letters with factory-direct fabrication for architectural signage projects.",
  path: "/products/custom-halo-lit-letters",
  image: ogImages.channelLetters,
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Custom Halo-Lit Metal Letters"
        description="Custom halo-lit metal channel letters with factory-direct fabrication for architectural signage projects."
        path="/products/custom-halo-lit-letters"
        image="/assets/images/cat-illuminated.webp"
      />
      {children}
    </>
  );
}
