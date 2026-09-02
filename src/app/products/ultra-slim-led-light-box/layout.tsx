import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = {
  title: "Ultra-Slim LED Light Boxes",
  description: "Ultra-slim and projecting LED light boxes for retail, hospitality, commercial, and architectural signage.",
  alternates: { canonical: `${siteConfig.url}/products/ultra-slim-led-light-box` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Ultra-Slim LED Light Boxes"
        description="Ultra-slim and projecting LED light boxes for retail, hospitality, commercial, and architectural signage."
        path="/products/ultra-slim-led-light-box"
        image="/assets/images/cat-lightbox.webp"
      />
      {children}
    </>
  );
}
