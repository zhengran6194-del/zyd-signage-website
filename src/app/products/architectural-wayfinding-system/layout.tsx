import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = {
  title: "Architectural Wayfinding Systems",
  description: "Factory-direct architectural wayfinding systems for indoor and outdoor commercial environments.",
  alternates: { canonical: `${siteConfig.url}/products/architectural-wayfinding-system` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Architectural Wayfinding Systems"
        description="Factory-direct architectural wayfinding systems for indoor and outdoor commercial environments."
        path="/products/architectural-wayfinding-system"
        image="/assets/images/hero-wayfinding.png"
      />
      {children}
    </>
  );
}
