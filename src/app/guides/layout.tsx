import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";

const path = "/guides";
// Rendered with the root template: "Signage Guides: Cost, Materials,
// Installation | ZYD Signage" (59 characters).
const title = "Signage Guides: Cost, Materials, Installation";
const description = "Practical buying and technical guides for custom signage projects: channel letter costs, illumination, sign selection, outdoor materials, MOQ and lead time.";

// The guide articles that have no Japanese version name none of their own:
// their metadata replaces this one, so only the index declares the pair.
export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  languages: { en: "/guides", ja: "/ja/guides" },
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  // The breadcrumb and CollectionPage are rendered by the index page, not here.
  // A layout wraps every child route, so declaring them here also published them
  // on all four guide articles, which emit their own breadcrumb and Article node.
  return children;
}
