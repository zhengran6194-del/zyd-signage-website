import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";

// Declared without the site-wide " | ZYD Signage" template, so the headline
// stays at 38 characters. All three case studies are titled this way.
const title = "Water Fashion Plaza Signage Case Study";
const description =
  "How the wayfinding and signage system for Water Fashion Plaza, a commercial complex in Dalian, China, was designed, manufactured and installed.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title,
    description,
    path: "/case-studies/dalian-water-plaza-wayfinding-signage",
    // Reuses the registered wayfinding share image rather than pointing social
    // cards at a project photograph hosted elsewhere.
    image: ogImages.wayfinding,
    type: "article",
  }),
  title: { absolute: title },
};

export default function CaseStudyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
