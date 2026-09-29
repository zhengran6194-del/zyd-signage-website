import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

export const metadata: Metadata = buildPageMetadata({
  title: "Complete Signage Systems for Global Rollouts",
  description: "Coordinated complete signage systems for global rollouts, from MOQ 1 sets to full programs, with DDP delivery scope quoted per destination.",
  path: "/products/complete-signage-system",
  image: ogImages.system,
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Complete Signage Systems for Global Rollouts"
        description="Coordinated complete signage systems for global rollouts, from MOQ 1 sets to full programs, with DDP delivery scope quoted per destination."
        path="/products/complete-signage-system"
        image="/assets/images/cat-system.jpg"
      />
      {children}
    </>
  );
}
