import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Architectural Wayfinding Systems",
  description: "Factory-direct architectural wayfinding systems for indoor and outdoor commercial environments.",
  alternates: { canonical: `${siteConfig.url}/products/architectural-wayfinding-system` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
