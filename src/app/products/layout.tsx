import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";
import ProductsBreadcrumbJsonLd from "@/components/ProductsBreadcrumbJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Signage Solutions",
  description: "Explore factory-direct signage solutions for architectural wayfinding, medical, illuminated, outdoor, and complete signage systems.",
  path: "/products",
});

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductsBreadcrumbJsonLd />
      {children}
    </>
  );
}
