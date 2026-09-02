import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = {
  title: "Metal & Acrylic Logo Signs",
  description: "Precision metal and acrylic logo signs, plaques, and corporate identity systems for B2B projects.",
  alternates: { canonical: `${siteConfig.url}/products/metal-acrylic-logo-sign` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Metal & Acrylic Logo Signs"
        description="Precision metal and acrylic logo signs, plaques, and corporate identity systems for B2B projects."
        path="/products/metal-acrylic-logo-sign"
        image="/assets/images/cat-metal.webp"
      />
      {children}
    </>
  );
}
