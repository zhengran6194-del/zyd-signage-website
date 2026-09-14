import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Ultra-Slim LED Light Boxes",
  description: "Ultra-slim and projecting LED light boxes for retail, hospitality, commercial, and architectural signage.",
  path: "/products/ultra-slim-led-light-box",
  image: ogImages.lightBox,
});

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
