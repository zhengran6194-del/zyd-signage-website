import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

const title = "Custom Acrylic Desk Signs for Reception & Counters";
const description = "Factory-direct acrylic desk signs and countertop logo displays for reception desks, hotels and showrooms. MOQ 1 set; request a project quote.";
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
         category="Acrylic desk signs"
         material="Acrylic"
       />
      {children}
    </>
  );
}
