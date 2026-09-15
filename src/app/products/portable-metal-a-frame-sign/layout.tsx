import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

const title = "Portable Metal A-Frame Signs";
const description = "Portable metal A-frame signs for sidewalks, entrances and events, fabricated factory-direct for global B2B projects.";
const path = "/products/portable-metal-a-frame-sign";

// Dimensions come from the ogImages registry, so the asset is declared in the
// same place as every other share image.
const shareImage = ogImages.aFrameSign;

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: shareImage });

export default function PortableMetalAFrameSignLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name={title}
        description={description}
        path={path}
        image={shareImage.path}
      />
      {children}
    </>
  );
}
