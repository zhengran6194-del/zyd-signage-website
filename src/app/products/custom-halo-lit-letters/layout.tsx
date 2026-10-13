import type { Metadata } from "next";
import { buildPageMetadata, ogImages } from "@/config/site";
import ProductJsonLd from "@/components/ProductJsonLd";

// The wording stays on rear-glow: "channel letters" belongs to the front-lit
// page, which is the page that product name resolves to.
const description =
  "Custom halo-lit (rear-glow) metal letters in aluminum and stainless steel, fabricated factory-direct with lead time confirmed against each project.";

export const metadata: Metadata = buildPageMetadata({
  title: "Custom Halo-Lit Metal Letters | Aluminum & Steel",
  description,
  path: "/products/custom-halo-lit-letters",
  image: ogImages.channelLetters,
  languages: { en: "/products/custom-halo-lit-letters", ja: "/ja/products/custom-halo-lit-letters" },
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ProductJsonLd
        name="Custom Halo-Lit Metal Letters | Aluminum & Steel"
        description={description}
        path="/products/custom-halo-lit-letters"
         image="/assets/images/cat-illuminated.jpg"
         category="Halo-lit metal letters"
         material="Aluminum, stainless steel and coated sheet"
       />
      {children}
    </>
  );
}
