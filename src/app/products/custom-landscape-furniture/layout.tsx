import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Custom Landscape Furniture",
  description: "Bespoke outdoor landscape branding, signage furniture, and seating manufactured for commercial projects.",
  alternates: { canonical: `${siteConfig.url}/products/custom-landscape-furniture` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
