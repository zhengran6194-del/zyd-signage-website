import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Healthcare Signage Manufacturer for Hospitals & Clinics",
  description: "Custom hospital and clinic wayfinding, room signs, directories and coordinated signage. Send floor plans and quantities for a project-specific quote.",
  path: "/products/medical-care-signage",
  image: ogImages.medical,
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Healthcare & Specialty Signage Systems"
        description="Healthcare and specialty signage systems for hospitals and clinics, including room identification, directories, and wayfinding."
        path="/products/medical-care-signage"
         image="/assets/images/hero-medical.jpg"
         category="Healthcare and specialty signage"
         material="Project-specified aluminum, acrylic and stainless steel"
       />
      {children}
    </>
  );
}
