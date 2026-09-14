import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Signage Case Studies",
  description: "Explore ZYD signage case studies across wayfinding, healthcare, illuminated branding, and landscape projects.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
