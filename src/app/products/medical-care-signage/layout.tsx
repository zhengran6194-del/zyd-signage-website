import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = {
  title: "Medical Care Signage Systems",
  description: "Specialized healthcare signage systems for hospitals, clinics, room identification, and wayfinding.",
  alternates: { canonical: `${siteConfig.url}/products/medical-care-signage` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Medical Care Signage Systems"
        description="Specialized healthcare signage systems for hospitals, clinics, room identification, and wayfinding."
        path="/products/medical-care-signage"
        image="/assets/images/hero-medical.jpg"
      />
      {children}
    </>
  );
}
