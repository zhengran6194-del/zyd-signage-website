import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

const name = "Custom Outdoor Waste Bins for Public Spaces";
const description = "Custom outdoor waste bins for hospitality, commercial, and public-space projects, with project-specific appearance and logo coordination.";
const path = "/products/outdoor-waste-bin";
const image = "/assets/images/outdoor-waste-bin.jpg";

export const metadata: Metadata = buildPageMetadata({ title: name, description, path, image: ogImages.wasteBin });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd name={name} description={description} path={path} image={image} />
      {children}
    </>
  );
}
