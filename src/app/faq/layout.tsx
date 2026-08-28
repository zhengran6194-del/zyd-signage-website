import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Signage FAQ & Resources",
  description: "Find answers and practical resources about signage planning, materials, installation, and global logistics.",
  alternates: { canonical: `${siteConfig.url}/faq` },
};

export default function FAQLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
