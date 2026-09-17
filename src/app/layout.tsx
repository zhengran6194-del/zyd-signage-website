import type { Metadata } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildPageMetadata, siteConfig } from "@/config/site";

// Self-hosted at build time, so no external stylesheet blocks first paint.
// Manrope is a variable font, so the whole weight axis ships in one file.
// A second family was requested in the same URL but is referenced by no rule,
// so it is deliberately not loaded any more.
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const homeTitle = "ZYD Custom Signage | Factory-Direct Signage Solutions";
const homeDescription = "Factory-direct custom signage for global B2B projects. Premium wayfinding and architectural signs.";

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.companyName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/assets/images/logo-correct.png`,
      email: siteConfig.salesEmail,
      telephone: `+${siteConfig.whatsappNumber}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 18, Industrial Zone, Ganjingzi District",
        addressLocality: "Dalian",
        addressRegion: "Liaoning",
        addressCountry: "CN",
      },
      sameAs: [siteConfig.links.twitter, siteConfig.links.tiktok, siteConfig.links.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.companyName,
      url: siteConfig.url,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildPageMetadata({ title: homeTitle, description: homeDescription, path: "/" }),
  title: {
    default: homeTitle,
    template: "%s | ZYD Signage",
  },
  verification: {
    google: "mg4KF2OFvytTwIMO7heJcKvB5BrULWY76NeAxIYW6Ss",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MB5CNFHN');`}
        </Script>
      </head>
      <body>
        <JsonLd data={siteJsonLd} />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MB5CNFHN"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        {/* Keyboard entry point for the skip link. tabIndex={-1} lets focus land
            here while keeping the wrapper out of the sequential tab order. */}
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
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
