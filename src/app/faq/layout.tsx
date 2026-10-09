import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Signage FAQ & Resources",
  description: "Find answers and practical resources about signage planning, materials, installation, and global logistics.",
  path: "/faq",
  languages: { en: "/faq", ja: "/ja/faq" },
});

export default function FAQLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
