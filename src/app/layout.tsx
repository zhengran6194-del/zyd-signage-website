import type { Metadata } from "next";
import Script from "next/script";
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
  verification: {
    google: "mg4KF2OFvytTwIMO7heJcKvB5BrULWY76NeAxIYW6Ss",
  },
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
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MB5CNFHN');`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MB5CNFHN"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <Header />
        {children}
        <Footer />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "ybw0mi6eb6");`}
        </Script>
      </body>
    </html>
  );
}
