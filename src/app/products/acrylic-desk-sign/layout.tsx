import type { Metadata } from "next";
import type { OgImageSpec } from "@/config/site";
import { buildPageMetadata } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

const title = "Acrylic Desk Signs";
const description = "Custom acrylic desk signs and counter-top brand displays, fabricated factory-direct for global B2B projects.";
const path = "/products/acrylic-desk-sign";

// Declared here rather than in site.ts because the ogImages registry is owned by
// the product registration task. Dimensions are the real 1000x1000 file, so
// og:image:width/height match the asset. The registry can absorb this entry later.
const shareImage: OgImageSpec = {
  path: "/assets/images/acrylic-desk-sign.jpg",
  width: 1000,
  height: 1000,
  alt: "Custom acrylic desk sign",
};

export const metadata: Metadata = buildPageMetadata({ title, description, path, image: shareImage });

export default function AcrylicDeskSignLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
