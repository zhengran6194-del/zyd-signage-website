import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom Acrylic & Metal Logo Panels | ZYD Signage",
  description: "Factory-direct acrylic and metal logo panels for commercial and multi-site projects worldwide. Made in Dalian, China, with shipping quoted by destination, including Saudi Arabia.",
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
