import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";

// The brand is part of the headline, so it is declared absolute: the root
// layout template would otherwise append " | ZYD Signage" a second time and
// push the title past the length a search result renders.
const title = "Custom Signage Case Studies | ZYD Signage";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title,
    description: "Signage case studies from Dalian: wayfinding systems, pylon signs, facade lettering and festive installations for commercial, industrial and retail sites.",
    path: "/projects",
    languages: { en: "/projects", ja: "/ja/projects" },
  }),
  title: { absolute: title },
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
