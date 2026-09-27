import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";

// Client-first headline structure (client | outcome), mirroring the project's own title.
// Rendered title is "Pavilion Dalian | Festive Installations Driving Footfall" (56 chars).
// It is declared as an absolute title because appending the site-wide
// " | ZYD Signage" template would push it to 70 characters.
const title = "Pavilion Dalian | Festive Installations Driving Footfall";
const description =
  "Christmas and Lunar New Year installations for the Pavilion Dalian shopping centre atrium in Dalian, China, by ZYD Signage.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title,
    description,
    path: "/case-studies/pavilion-dalian-mall-festive-installations",
    // Reuses the registered wayfinding share image rather than pointing social
    // cards at a project photograph hosted elsewhere.
    image: ogImages.wayfinding,
    type: "article",
  }),
  // Overrides the root layout's "%s | ZYD Signage" template so the 56-character
  // headline is not truncated in search results.
  title: { absolute: title },
};

export default function CaseStudyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
