import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Outdoor Pylon & Monument Signs",
  description: "Large-scale outdoor pylon and monument signs for property entrances, campuses, and commercial developments.",
  path: "/products/outdoor-pylon-monument-sign",
  image: ogImages.outdoor,
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Outdoor Pylon & Monument Signs"
        description="Large-scale outdoor pylon and monument signs for property entrances, campuses, and commercial developments."
        path="/products/outdoor-pylon-monument-sign"
        image="/assets/images/cat-outdoor.webp"
      />
      {children}
    </>
  );
}
