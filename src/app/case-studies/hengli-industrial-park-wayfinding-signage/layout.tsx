import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";

// Declared without the site-wide " | ZYD Signage" template, so the headline
// stays at 41 characters. All three case studies are titled this way.
const title = "Hengli Industrial Park Signage Case Study";
const description =
  "How a coordinated wayfinding and signage system for Hengli Industrial Park connects the gateway, roads, buildings, production zones and functional spaces.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title,
    description,
    path: "/case-studies/hengli-industrial-park-wayfinding-signage",
    image: ogImages.outdoor,
    type: "article",
  }),
  title: { absolute: title },
};

export default function CaseStudyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
