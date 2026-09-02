import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = {
  title: "Complete Signage Systems",
  description: "Coordinated complete signage systems for global architectural rollouts, from design through manufacturing.",
  alternates: { canonical: `${siteConfig.url}/products/complete-signage-system` },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Complete Signage Systems"
        description="Coordinated complete signage systems for global architectural rollouts, from design through manufacturing."
        path="/products/complete-signage-system"
        image="/assets/images/cat-system.webp"
      />
      {children}
    </>
  );
}
