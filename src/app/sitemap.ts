import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Per-route last-modified dates.
//
// A single site-wide date was misleading. Three guides and one case study were
// published after the old 2026-09-20 baseline, so the sitemap was telling
// crawlers that newer pages had not changed since a date that predated them.
//
// Each value below is the date the route's content last actually changed: the
// date the page declares in its own Article structured data where it declares
// one, otherwise the date of the last commit that touched the route. Update the
// relevant entry whenever a route's content changes.
const lastModifiedByRoute: Record<string, string> = {
  "": "2026-09-29",
  "/products": "2026-09-17",
  "/projects": "2026-09-27",
  "/guides": "2026-10-07",
  "/about": "2026-09-29",
  "/contact": "2026-09-15",
  "/faq": "2026-10-07",

  "/guides/mall-wayfinding-signage": "2026-09-21",
  "/guides/industrial-park-signage": "2026-09-21",
  "/guides/hotel-signage": "2026-09-21",
  "/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs": "2026-09-07",
  "/guides/how-much-do-custom-channel-letters-cost": "2026-09-07",
  "/guides/front-lit-vs-halo-lit-channel-letters": "2026-09-07",
  "/guides/how-to-choose-the-right-sign-for-your-business": "2026-09-07",
  "/guides/custom-signage-manufacturing-process": "2026-07-22",
  "/guides/signage-material-selection-guide": "2026-09-22",
  "/guides/signage-procurement-low-bid-pitfalls": "2026-09-23",
  "/guides/ada-braille-signage-planning-guide": "2026-10-07",

  "/case-studies/dalian-water-plaza-wayfinding-signage": "2026-09-29",
  "/case-studies/hengli-industrial-park-wayfinding-signage": "2026-09-29",
  "/case-studies/pavilion-dalian-mall-festive-installations": "2026-10-07",

  "/products/architectural-wayfinding-system": "2026-10-07",
  "/products/complete-signage-system": "2026-10-07",
  "/products/custom-halo-lit-letters": "2026-10-07",
  "/products/custom-landscape-furniture": "2026-10-07",
  "/products/custom-led-neon-sign": "2026-10-07",
  "/products/medical-care-signage": "2026-10-07",
  "/products/metal-acrylic-logo-sign": "2026-10-07",
  "/products/outdoor-pylon-monument-sign": "2026-10-07",
  "/products/ultra-slim-led-light-box": "2026-10-07",
  "/products/outdoor-waste-bin": "2026-10-07",
  "/products/custom-planter-box": "2026-10-07",
  "/products/acrylic-desk-sign": "2026-10-07",
  "/products/portable-metal-a-frame-sign": "2026-10-07",
};

// Fallback for a route that is added without its own entry above, so an omission
// degrades to the last coordinated content review rather than to an empty date.
const SITE_CONTENT_BASELINE_DATE = "2026-09-20";

const routes = [
  { path: "", priority: 1.0 },
  { path: "/products", priority: 0.9 },
  { path: "/projects", priority: 0.8 },
  { path: "/guides/mall-wayfinding-signage", priority: 0.8 },
  { path: "/guides/industrial-park-signage", priority: 0.8 },
  { path: "/guides/hotel-signage", priority: 0.8 },
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
  { path: "/guides/signage-material-selection-guide", priority: 0.8 },
  { path: "/guides/signage-procurement-low-bid-pitfalls", priority: 0.8 },
  { path: "/guides/ada-braille-signage-planning-guide", priority: 0.7 },
  { path: "/case-studies/pavilion-dalian-mall-festive-installations", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: lastModifiedByRoute[path] ?? SITE_CONTENT_BASELINE_DATE,
    changeFrequency: "monthly",
    priority,
  }));
}
