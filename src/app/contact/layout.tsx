import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Sales Support",
  description: "Contact ZYD Signage for custom signage project requirements, technical support, and factory-direct quotations.",
  path: "/contact",
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
