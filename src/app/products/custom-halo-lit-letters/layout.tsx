import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = {
  title: "Custom Halo-Lit Metal Letters",
  description: "Custom halo-lit metal channel letters with factory-direct fabrication for architectural signage projects.",
  alternates: { canonical: `${siteConfig.url}/products/custom-halo-lit-letters` },
};

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
