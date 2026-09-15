import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";

const path = "/guides";
const title = "Signage Guides";
const description = "Practical buying and technical guides for custom signage projects, covering channel letter costs, illumination styles, sign selection, and outdoor materials.";

export const metadata: Metadata = buildPageMetadata({ title, description, path });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  // The breadcrumb and CollectionPage are rendered by the index page, not here.
  // A layout wraps every child route, so declaring them here also published them
  // on all four guide articles, which emit their own breadcrumb and Article node.
  return children;
}
