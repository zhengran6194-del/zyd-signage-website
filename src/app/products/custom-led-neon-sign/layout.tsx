import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = {
  title: "Custom LED Neon Signs",
  description: "Custom LED neon flex signs for branding, interiors, hospitality, retail, and commercial spaces.",
  alternates: { canonical: `${siteConfig.url}/products/custom-led-neon-sign` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Custom LED Neon Signs"
        description="Custom LED neon flex signs for branding, interiors, hospitality, retail, and commercial spaces."
        path="/products/custom-led-neon-sign"
        image="/assets/images/cat-neon.webp"
      />
      {children}
    </>
  );
}
