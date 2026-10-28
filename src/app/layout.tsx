import type { Metadata } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import DocumentShell from "@/components/DocumentShell";
import { buildPageMetadata, homePageLanguages, siteConfig } from "@/config/site";

// Self-hosted at build time, so no external stylesheet blocks first paint.
// Manrope is a variable font, so the whole weight axis ships in one file.
// A second family was requested in the same URL but is referenced by no rule,
// so it is deliberately not loaded any more.
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const homeTitle = "Custom Architectural & Illuminated Signs for Global Projects";
const homeDescription = "Factory-direct custom signage from Dalian, China for global B2B projects, covering wayfinding, architectural and illuminated signage.";

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.brandName,
      // The registered entity, stated separately from the trading name so the two
      // are not read as competing identities.
      legalName: siteConfig.companyName,
      alternateName: ["ZYD Signage"],
      // The site states EST. 2006 throughout; this makes the founding year
      // machine-readable instead of leaving it to be inferred from copy.
      foundingDate: "2006",
      description: siteConfig.description,
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
      // Where the entity is established, stated separately from the postal
      // address so an agent reads "Dalian, China" without parsing the street.
      foundingLocation: {
        "@type": "Place",
        name: "Dalian, China",
      },
      // The same channels the contact page publishes, so an agent can name a
      // route to the company without guessing one.
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.salesEmail,
        telephone: `+${siteConfig.whatsappNumber}`,
        url: `${siteConfig.url}/contact`,
      },
      // The Alibaba storefront is the company profile this entity publishes.
      // The LinkedIn address in siteConfig is a personal profile, so it is
      // deliberately not part of sameAs: schema.org sameAs describes the
      // organisation, not one person who works for it.
      sameAs: [siteConfig.links.twitter, siteConfig.links.tiktok, siteConfig.links.alibaba],
    },
    {
      // The author byline the guides publish, named as its own entity so an
      // Article can point at it instead of repeating an anonymous name.
      "@type": "Person",
      "@id": `${siteConfig.url}/#aaron`,
      name: siteConfig.contactPerson,
      url: `${siteConfig.url}/about`,
      worksFor: { "@id": `${siteConfig.url}/#organization` },
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
  // The home page exists in every language, so it declares all three versions
  // and the x-default fallback alongside its canonical.
  ...buildPageMetadata({
    title: homeTitle,
    description: homeDescription,
    path: "/",
    languages: homePageLanguages,
  }),
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
    <DocumentShell
      fontClassName={manrope.variable}
      head={
        <head>
          {/* llmstxt.org: names the file that describes every page under this path. */}
          <link rel="describedby" href={`${siteConfig.url}/llms.txt`} />
          <Script id="gtm" strategy="beforeInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MB5CNFHN');`}
          </Script>
        </head>
      }
    >
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
    </DocumentShell>
  );
}
