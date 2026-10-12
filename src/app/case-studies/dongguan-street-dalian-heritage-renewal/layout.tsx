import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";

// Declared without the site-wide " | ZYD Signage" template, so the headline
// stays at 59 characters. All four case studies are titled this way.
const title = "Dongguan Street | Heritage Signage and Themed Installations";
const description =
  "How ZYD Signage delivered the wayfinding system and themed installations for the Dongguan Street heritage renewal in Dalian, China.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title,
    description,
    path: "/case-studies/dongguan-street-dalian-heritage-renewal",
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
