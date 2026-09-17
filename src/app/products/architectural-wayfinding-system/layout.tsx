import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Architectural Wayfinding Systems",
  description: "Factory-direct architectural wayfinding systems for indoor and outdoor commercial environments.",
  path: "/products/architectural-wayfinding-system",
  image: ogImages.wayfinding,
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Architectural Wayfinding Systems"
        description="Factory-direct architectural wayfinding systems for indoor and outdoor commercial environments."
        path="/products/architectural-wayfinding-system"
        image="/assets/images/hero-wayfinding.jpg"
      />
      {children}
    </>
  );
}
