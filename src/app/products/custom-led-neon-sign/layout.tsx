import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom LED Neon Branding Displays | Manufacturer",
  description: "Custom LED neon flex branding signs and displays for retail, hospitality, events and commercial interiors. Share artwork and dimensions for a project quote.",
  path: "/products/custom-led-neon-sign",
  image: ogImages.neon,
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Custom LED Neon Signs for Retail & Hospitality"
        description="Custom LED neon flex signs for branding, interiors, hospitality, retail, and commercial spaces."
        path="/products/custom-led-neon-sign"
         image="/assets/images/cat-neon.webp"
         category="LED neon signs"
         material="LED neon flex and project-specified backing materials"
       />
      {children}
    </>
  );
}
