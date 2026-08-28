import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Signage Solutions",
  description: "Explore factory-direct signage solutions for architectural wayfinding, medical, illuminated, outdoor, and complete signage systems.",
  alternates: { canonical: `${siteConfig.url}/products` },
};

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
