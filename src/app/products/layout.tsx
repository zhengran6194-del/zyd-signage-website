import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Signage Solutions",
  description: "Explore factory-direct signage solutions for architectural wayfinding, medical, illuminated, outdoor, and complete signage systems.",
  path: "/products",
});

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // The breadcrumb is rendered by the index page, not here. A layout wraps every
  // child route, so declaring it here also emitted it on all 11 product detail
  // pages, each of which publishes its own three-level breadcrumb.
  return children;
}
