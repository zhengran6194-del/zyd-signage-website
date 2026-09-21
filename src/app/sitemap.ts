import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// A single site-wide content baseline avoids inventing independent edit dates for
// routes whose source data is maintained together. Update this date after a
// coordinated content review or release.
const SITE_CONTENT_BASELINE_DATE = "2026-09-20";

const routes = [
  { path: "", priority: 1.0 },
  { path: "/products", priority: 0.9 },
  { path: "/projects", priority: 0.8 },
  { path: "/case-studies/dalian-water-plaza-wayfinding-signage", priority: 0.7 },
  { path: "/case-studies/hengli-industrial-park-wayfinding-signage", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/faq", priority: 0.8 },
  { path: "/products/architectural-wayfinding-system", priority: 0.8 },
  { path: "/products/complete-signage-system", priority: 0.8 },
  { path: "/products/custom-halo-lit-letters", priority: 0.8 },
  { path: "/products/custom-landscape-furniture", priority: 0.8 },
  { path: "/products/custom-led-neon-sign", priority: 0.8 },
  { path: "/products/medical-care-signage", priority: 0.8 },
  { path: "/products/metal-acrylic-logo-sign", priority: 0.8 },
  { path: "/products/outdoor-pylon-monument-sign", priority: 0.8 },
  { path: "/products/ultra-slim-led-light-box", priority: 0.8 },
  { path: "/products/outdoor-waste-bin", priority: 0.8 },
  { path: "/products/custom-planter-box", priority: 0.8 },
  { path: "/products/acrylic-desk-sign", priority: 0.8 },
  { path: "/products/portable-metal-a-frame-sign", priority: 0.8 },
  { path: "/guides", priority: 0.8 },
  { path: "/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs", priority: 0.7 },
  { path: "/guides/how-much-do-custom-channel-letters-cost", priority: 0.7 },
  { path: "/guides/front-lit-vs-halo-lit-channel-letters", priority: 0.7 },
  { path: "/guides/how-to-choose-the-right-sign-for-your-business", priority: 0.7 },
  { path: "/guides/custom-signage-manufacturing-process", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: SITE_CONTENT_BASELINE_DATE,
    changeFrequency: "monthly",
    priority,
  }));
}
