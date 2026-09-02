import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = {
  title: "Custom Landscape Furniture",
  description: "Bespoke outdoor landscape branding, signage furniture, and seating manufactured for commercial projects.",
  alternates: { canonical: `${siteConfig.url}/products/custom-landscape-furniture` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Custom Landscape Furniture"
        description="Bespoke outdoor landscape branding, signage furniture, and seating manufactured for commercial projects."
        path="/products/custom-landscape-furniture"
        image="/assets/images/landscape-bench.jpg"
      />
      {children}
    </>
  );
}
