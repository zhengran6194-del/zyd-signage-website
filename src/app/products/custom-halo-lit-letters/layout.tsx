import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Custom Halo-Lit Metal Letters",
  description: "Custom halo-lit metal channel letters with factory-direct fabrication for architectural signage projects.",
  alternates: { canonical: `${siteConfig.url}/products/custom-halo-lit-letters` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
