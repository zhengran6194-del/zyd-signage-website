import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

// No `languages` here on purpose: this product has no Japanese page, so an
// alternate pointing at /ja/products/custom-channel-letters would advertise a
// URL that does not exist. The pair is added when the Japanese page is built.
const title = "Custom Front-Lit Channel Letters | Acrylic & Metal";
const description =
  "Custom front-lit channel letters built factory-direct, with illuminated acrylic faces, formed metal returns and concealed LED modules confirmed per project.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/products/custom-channel-letters",
  image: { path: "/assets/images/channel-letters-white-lighting-check.jpg", width: 1706, height: 1279, alt: "White front-lit channel letters illuminated on a workshop bench, with red illuminated letters behind" },
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name={title}
        description={description}
        path="/products/custom-channel-letters"
         image="/assets/images/channel-letters-white-lighting-check.jpg"
         category="Illuminated channel letters"
         material="Acrylic, formed metal and LED modules"
       />
      {children}
    </>
  );
}
