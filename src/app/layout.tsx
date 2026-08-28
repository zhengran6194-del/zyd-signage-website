import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const ogImage = `${siteConfig.url}/assets/images/hero-bg-factory-aerial.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ZYD Custom Signage | Factory-Direct Signage Solutions",
    template: "%s | ZYD Signage",
  },
  description: "Factory-direct custom signage for global B2B projects. Premium wayfinding and architectural signs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.companyName,
    title: "ZYD Custom Signage | Factory-Direct Signage Solutions",
    description: "Factory-direct custom signage for global B2B projects. Premium wayfinding and architectural signs.",
    url: siteConfig.url,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "ZYD custom signage factory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYD Custom Signage | Factory-Direct Signage Solutions",
    description: "Factory-direct custom signage for global B2B projects. Premium wayfinding and architectural signs.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
