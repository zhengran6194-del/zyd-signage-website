import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

const name = "Custom Planter Box";
const description = "Custom planter boxes for hospitality, commercial, and public-space projects, with project-specific appearance and planting coordination.";
const path = "/products/custom-planter-box";
const image = "/assets/images/custom-planter-box.jpg";

export const metadata: Metadata = buildPageMetadata({ title: name, description, path, image: ogImages.planterBox });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd name={name} description={description} path={path} image={image} />
      {children}
    </>
  );
}
