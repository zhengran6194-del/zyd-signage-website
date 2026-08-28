import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Signage Case Studies",
  description: "Explore ZYD signage case studies across wayfinding, healthcare, illuminated branding, and landscape projects.",
  alternates: { canonical: `${siteConfig.url}/projects` },
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
