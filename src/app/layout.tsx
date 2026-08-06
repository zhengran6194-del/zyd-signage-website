import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "ZYD Custom Signage | Factory-Direct Signage Solutions",
  description: "Factory-direct custom signage for hotels, retail, commercial buildings and public projects. Get a free 3D mockup and quote on WhatsApp.",
  keywords: ["custom signage", "channel letters", "light boxes", "LED neon signs", "wayfinding signs", "monument signs", "signage manufacturer"],
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
        {children}
      </body>
    </html>
  );
}
