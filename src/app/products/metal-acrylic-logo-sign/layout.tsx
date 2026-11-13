import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Acrylic & Metal Logo Panels Manufacturer | Custom Signs",
  description: "Dalian-based manufacturer of custom acrylic and metal logo panels for reception walls, branded interiors and commercial projects. Send artwork and dimensions for a factory quote.",
  path: "/products/metal-acrylic-logo-sign",
  image: ogImages.metalLogo,
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Custom Acrylic & Metal Logo Panels"
        description="Factory-direct acrylic and metal logo panels and dimensional signs for reception areas, branded interiors, and commercial projects."
        path="/products/metal-acrylic-logo-sign"
         image="/assets/images/cat-metal.jpg"
         category="Custom metal and acrylic logo panels and logo signs"
         material="Stainless steel, aluminum, coated sheet and acrylic"
       />
      {children}
    </>
  );
}
