import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

const title = "Acrylic Desk Signs";
const description = "Custom acrylic desk signs and counter-top brand displays, fabricated factory-direct for global B2B projects.";
const path = "/products/acrylic-desk-sign";

// Dimensions live in the ogImages registry so the asset is declared once, in the
// same place as every other share image.
const shareImage = ogImages.deskSign;

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
