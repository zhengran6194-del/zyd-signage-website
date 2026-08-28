import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Outdoor Pylon & Monument Signs",
  description: "Large-scale outdoor pylon and monument signs for property entrances, campuses, and commercial developments.",
  alternates: { canonical: `${siteConfig.url}/products/outdoor-pylon-monument-sign` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
