import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom Pylon Signs & Illuminated Tenant Directories",
  description: "Custom pylon signs for dealerships, retail and property entrances. View workshop lighting checks, installed projects and a dimensioned drawing; request a quote.",
  path: "/products/outdoor-pylon-monument-sign",
  image: { path: "/assets/images/pylon-water-plaza-installed.jpg", width: 5647, height: 3765, alt: "Water Fashion Plaza installed pylon sign and tenant directory" },
  languages: { en: "/products/outdoor-pylon-monument-sign", ja: "/ja/products/outdoor-pylon-monument-sign" },
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Custom Pylon Signs & Illuminated Tenant Directories"
        description="Custom pylon signs for dealerships, retail and property entrances. View workshop lighting checks, installed projects and a dimensioned drawing; request a quote."
        path="/products/outdoor-pylon-monument-sign"
         image="/assets/images/pylon-water-plaza-installed.jpg"
         category="Outdoor pylon and monument signs"
         material="Galvanized sheet, stainless steel and aluminum plate"
       />
      {children}
    </>
  );
}
