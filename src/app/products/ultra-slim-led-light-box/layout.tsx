import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Ultra-Slim LED Light Boxes",
  description: "Ultra-slim and projecting LED light boxes for retail, hospitality, commercial, and architectural signage.",
  alternates: { canonical: `${siteConfig.url}/products/ultra-slim-led-light-box` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
