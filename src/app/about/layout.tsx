import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "About ZYD Signage",
    description: "Learn about Dalian Zhiyudao Signage & Tech. Co., Ltd., a factory-direct manufacturer serving global B2B signage projects.",
    path: "/about",
  }),
  // Absolute so the root "%s | ZYD Signage" template does not turn this into
  // "About ZYD Signage | ZYD Signage".
  title: { absolute: "About ZYD Signage" },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
