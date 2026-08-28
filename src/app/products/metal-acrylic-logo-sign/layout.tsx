import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Metal & Acrylic Logo Signs",
  description: "Precision metal and acrylic logo signs, plaques, and corporate identity systems for B2B projects.",
  alternates: { canonical: `${siteConfig.url}/products/metal-acrylic-logo-sign` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
