import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Architectural Wayfinding Systems & Braille Signage",
  description: "Factory-direct architectural wayfinding and Braille signage, with accessibility requirements such as ADA confirmed against each project brief.",
  path: "/products/architectural-wayfinding-system",
  image: ogImages.wayfinding,
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Architectural Wayfinding Systems & Braille Signage"
        description="Factory-direct architectural wayfinding and Braille signage, with accessibility requirements such as ADA confirmed against each project brief."
        path="/products/architectural-wayfinding-system"
        image="/assets/images/hero-wayfinding.jpg"
      />
      {children}
    </>
  );
}
