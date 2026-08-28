import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Custom LED Neon Signs",
  description: "Custom LED neon flex signs for branding, interiors, hospitality, retail, and commercial spaces.",
  alternates: { canonical: `${siteConfig.url}/products/custom-led-neon-sign` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
