import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";

// The brand is part of the headline, so it is declared absolute: the root
// layout template would otherwise append " | ZYD Signage" a second time and
// push the title past the length a search result renders.
const title = "Signage Products: 14 Custom Sign Categories | ZYD Signage";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title,
    description: "Browse 14 factory-direct signage categories: architectural wayfinding, medical, illuminated letters, outdoor pylon, landscape and site furnishings.",
    path: "/products",
    // The Japanese index of the same listing exists, so the pair declares its
    // alternates in both directions. Product detail pages that have no Japanese
    // version name none, and their own metadata replaces this one.
    languages: { en: "/products", ja: "/ja/products" },
  }),
  title: { absolute: title },
};

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // The breadcrumb is rendered by the index page, not here. A layout wraps every
  // child route, so declaring it here also emitted it on all 11 product detail
  // pages, each of which publishes its own three-level breadcrumb.
  return children;
}
