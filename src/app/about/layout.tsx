import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";

// The title already carries the brand name, so the root "%s | ZYD Signage"
// template would otherwise append it a second time. It also stays inside the
// 30-60 character range that keeps the whole string visible in search results.
const title = "About ZYD Signage | Signage Manufacturer Since 2006";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title,
    description: "Learn about Dalian Zhiyudao Signage & Tech. Co., Ltd., a factory-direct manufacturer of wayfinding, illuminated and architectural signage for B2B projects.",
    path: "/about",
  }),
  title: { absolute: title },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
