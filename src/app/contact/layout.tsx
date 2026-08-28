import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Sales Support",
  description: "Contact ZYD Signage for custom signage project requirements, technical support, and factory-direct quotations.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
