import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Medical Care Signage Systems",
  description: "Specialized healthcare signage systems for hospitals, clinics, room identification, and wayfinding.",
  alternates: { canonical: `${siteConfig.url}/products/medical-care-signage` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
