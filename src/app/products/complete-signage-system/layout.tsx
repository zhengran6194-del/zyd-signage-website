import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Complete Signage Systems",
  description: "Coordinated complete signage systems for global architectural rollouts, from design through manufacturing.",
  alternates: { canonical: `${siteConfig.url}/products/complete-signage-system` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
