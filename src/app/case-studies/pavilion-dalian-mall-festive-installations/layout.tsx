import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";

// Rendered title: "Shopping Centre Festive Installations | ZYD Signage" (51 chars),
// inside the 45-58 character range the site targets.
const title = "Shopping Centre Festive Installations";
const description =
  "How a shopping centre atrium festive installation programme for Christmas and Lunar New Year was designed, fabricated and installed in Dalian, China.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/case-studies/pavilion-dalian-mall-festive-installations",
  // Reuses the registered wayfinding share image rather than pointing social
  // cards at a project photograph hosted elsewhere.
  image: ogImages.wayfinding,
  type: "article",
});

export default function CaseStudyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
