import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";

// The brand is part of the headline, so it is declared absolute: the root
// layout template would otherwise append " | ZYD Signage" a second time and
// push the title past the length a search result renders.
const title = "Contact ZYD Signage | Get a Custom Signage Quote";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title,
    description: "Contact ZYD Signage for custom signage requirements, technical support and factory-direct quotations. Send artwork, dimensions and quantity to start.",
    path: "/contact",
    languages: { en: "/contact", ja: "/ja/contact" },
  }),
  title: { absolute: title },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
