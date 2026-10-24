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
  "/guides/pylon-sign-site-information-checklist": "2026-10-24",
  "": "2026-10-23",
  "/products": "2026-09-17",
  "/projects": "2026-09-27",
  "/guides": "2026-10-24",
  "/about": "2026-09-29",
  "/contact": "2026-10-23",
  "/faq": "2026-10-07",
  "/ja": "2026-10-08",
  "/ja/products": "2026-10-08",
  "/ja/products/architectural-wayfinding-system": "2026-10-08",
  "/ja/products/custom-halo-lit-letters": "2026-10-08",
  "/ja/products/outdoor-pylon-monument-sign": "2026-10-08",
  "/ja/contact": "2026-10-08",
  "/ja/projects": "2026-10-08",
  "/ja/guides": "2026-10-08",
  "/ja/faq": "2026-10-08",
  "/ja/about": "2026-10-08",

  "/guides/mall-wayfinding-signage": "2026-09-21",
  "/guides/industrial-park-signage": "2026-09-21",
  "/guides/hotel-signage": "2026-09-21",
  "/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs": "2026-09-07",
  "/guides/how-much-do-custom-channel-letters-cost": "2026-10-23",
  "/guides/front-lit-vs-halo-lit-channel-letters": "2026-10-19",
  "/guides/how-to-choose-the-right-sign-for-your-business": "2026-09-07",
  "/guides/custom-signage-manufacturing-process": "2026-07-22",
  "/guides/signage-material-selection-guide": "2026-09-22",
  "/guides/signage-procurement-low-bid-pitfalls": "2026-09-23",
  "/guides/ada-braille-signage-planning-guide": "2026-10-07",
  "/guides/illuminated-signage-buying-guide": "2026-10-12",
  "/guides/complete-site-signage-procurement-checklist": "2026-10-12",
  "/guides/stainless-steel-grades-for-signage": "2026-10-15",
  "/guides/custom-braille-door-signs": "2026-10-14",
  "/guides/signage-glossary": "2026-10-15",
  "/guides/hotel-room-number-signs": "2026-10-17",
  "/guides/office-door-sign-materials": "2026-10-19",
  "/guides/trimless-vs-trim-cap-channel-letters": "2026-10-19",
  "/guides/raceway-vs-individually-mounted-channel-letters": "2026-10-21",
  "/guides/outdoor-sign-finishes-liquid-paint-powder-coating-electroplating": "2026-10-21",
  "/guides/what-does-ip65-mean-outdoor-channel-letters": "2026-10-22",
  "/guides/outdoor-signs-for-cold-climates": "2026-10-23",
  "/guides/importing-custom-signage-from-china": "2026-10-20",

  "/case-studies/dalian-water-plaza-wayfinding-signage": "2026-09-29",
  "/case-studies/hengli-industrial-park-wayfinding-signage": "2026-09-29",
  "/case-studies/pavilion-dalian-mall-festive-installations": "2026-10-07",
  "/case-studies/dongguan-street-dalian-heritage-renewal": "2026-10-12",

  "/products/architectural-wayfinding-system": "2026-10-07",
  "/products/complete-signage-system": "2026-10-07",
  "/products/custom-channel-letters": "2026-10-23",
  "/products/custom-halo-lit-letters": "2026-10-23",
  "/products/custom-landscape-furniture": "2026-10-07",
  "/products/custom-led-neon-sign": "2026-10-07",
  "/products/medical-care-signage": "2026-10-07",
  "/products/metal-acrylic-logo-sign": "2026-10-07",
  "/products/outdoor-pylon-monument-sign": "2026-10-24",
  "/products/ultra-slim-led-light-box": "2026-10-07",
  "/products/outdoor-waste-bin": "2026-10-07",
  "/products/custom-planter-box": "2026-10-07",
  "/products/acrylic-desk-sign": "2026-10-07",
  "/products/portable-metal-a-frame-sign": "2026-10-07",
};

// Fallback for a route that is added without its own entry above, so an omission
// degrades to the last coordinated content review rather than to an empty date.
const SITE_CONTENT_BASELINE_DATE = "2026-09-20";

type SitemapRoute = {
  path: string;
  priority: number;
  /**
   * Set when the same page is published in more than one language. The keys are
   * the hreflang values and the values are routes, and every language the page
   * exists in is listed, so a crawler can pair the versions into one set.
   */
  languages?: Record<string, string>;
};

/**
 * The home page is published in every language, so its entry — and that of each
 * translation — names every version, including the entry's own. x-default
 * always points at the English version.
 */
const homePageLanguages = { "en-US": "", "ja-JP": "/ja", "x-default": "" };

/**
 * A page that is published in both languages, described once so its English and
 * Japanese entries cannot disagree: the English route, the Japanese route
 * beneath it, and the x-default that sends every other language to English.
 */
const englishAndJapanese = (path: string): Record<string, string> => ({
  "en-US": path,
  "ja-JP": `/ja${path}`,
  "x-default": path,
});

const routes: SitemapRoute[] = [
  { path: "", priority: 1.0, languages: homePageLanguages },
  {
    path: "/ja",
    priority: 0.8,
    languages: homePageLanguages,
  },
  // Pages published in both languages. Both entries of a pair name the same
  // three alternates, so neither side declares a pairing the other does not.
  { path: "/products", priority: 0.9, languages: englishAndJapanese("/products") },
  { path: "/ja/products", priority: 0.8, languages: englishAndJapanese("/products") },
  {
    path: "/products/architectural-wayfinding-system",
    priority: 0.8,
    languages: englishAndJapanese("/products/architectural-wayfinding-system"),
  },
  {
    path: "/ja/products/architectural-wayfinding-system",
    priority: 0.7,
    languages: englishAndJapanese("/products/architectural-wayfinding-system"),
  },
  // English only for now: the Japanese page does not exist yet, so this entry
  // declares no alternates rather than pointing at a URL that would 404.
  {
    path: "/products/custom-channel-letters",
    priority: 0.8,
  },
  {
    path: "/products/custom-halo-lit-letters",
    priority: 0.8,
    languages: englishAndJapanese("/products/custom-halo-lit-letters"),
  },
  {
    path: "/ja/products/custom-halo-lit-letters",
    priority: 0.7,
    languages: englishAndJapanese("/products/custom-halo-lit-letters"),
  },
  {
    path: "/products/outdoor-pylon-monument-sign",
    priority: 0.8,
    languages: englishAndJapanese("/products/outdoor-pylon-monument-sign"),
  },
  {
    path: "/ja/products/outdoor-pylon-monument-sign",
    priority: 0.7,
    languages: englishAndJapanese("/products/outdoor-pylon-monument-sign"),
  },
  { path: "/about", priority: 0.7, languages: englishAndJapanese("/about") },
  { path: "/ja/about", priority: 0.7, languages: englishAndJapanese("/about") },
  { path: "/contact", priority: 0.8, languages: englishAndJapanese("/contact") },
  { path: "/ja/contact", priority: 0.7, languages: englishAndJapanese("/contact") },
  { path: "/faq", priority: 0.8, languages: englishAndJapanese("/faq") },
  { path: "/ja/faq", priority: 0.7, languages: englishAndJapanese("/faq") },
  { path: "/projects", priority: 0.8, languages: englishAndJapanese("/projects") },
  { path: "/ja/projects", priority: 0.7, languages: englishAndJapanese("/projects") },
  { path: "/guides", priority: 0.8, languages: englishAndJapanese("/guides") },
  { path: "/ja/guides", priority: 0.7, languages: englishAndJapanese("/guides") },
  // Pages that exist in English only, so they declare no alternates.
  { path: "/guides/mall-wayfinding-signage", priority: 0.8 },
  { path: "/guides/industrial-park-signage", priority: 0.8 },
  { path: "/guides/hotel-signage", priority: 0.8 },
  { path: "/case-studies/dalian-water-plaza-wayfinding-signage", priority: 0.7 },
  { path: "/case-studies/hengli-industrial-park-wayfinding-signage", priority: 0.7 },
  { path: "/products/complete-signage-system", priority: 0.8 },
  { path: "/products/custom-landscape-furniture", priority: 0.8 },
  { path: "/products/custom-led-neon-sign", priority: 0.8 },
  { path: "/products/medical-care-signage", priority: 0.8 },
  { path: "/products/metal-acrylic-logo-sign", priority: 0.8 },
  { path: "/products/ultra-slim-led-light-box", priority: 0.8 },
  { path: "/products/outdoor-waste-bin", priority: 0.8 },
  { path: "/products/custom-planter-box", priority: 0.8 },
  { path: "/products/acrylic-desk-sign", priority: 0.8 },
  { path: "/products/portable-metal-a-frame-sign", priority: 0.8 },
  { path: "/guides/pylon-sign-site-information-checklist", priority: 0.8 },
  { path: "/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs", priority: 0.7 },
  { path: "/guides/how-much-do-custom-channel-letters-cost", priority: 0.7 },
  { path: "/guides/front-lit-vs-halo-lit-channel-letters", priority: 0.7 },
  { path: "/guides/how-to-choose-the-right-sign-for-your-business", priority: 0.7 },
  { path: "/guides/custom-signage-manufacturing-process", priority: 0.7 },
  { path: "/guides/signage-material-selection-guide", priority: 0.8 },
  { path: "/guides/signage-procurement-low-bid-pitfalls", priority: 0.8 },
  { path: "/guides/ada-braille-signage-planning-guide", priority: 0.7 },
  // Published in English only, so no alternates are declared.
  { path: "/guides/illuminated-signage-buying-guide", priority: 0.8 },
  { path: "/guides/complete-site-signage-procurement-checklist", priority: 0.8 },
  { path: "/guides/stainless-steel-grades-for-signage", priority: 0.8 },
  { path: "/guides/signage-glossary", priority: 0.8 },
  { path: "/guides/hotel-room-number-signs", priority: 0.8 },
  { path: "/guides/office-door-sign-materials", priority: 0.8 },
  { path: "/guides/trimless-vs-trim-cap-channel-letters", priority: 0.8 },
  { path: "/guides/raceway-vs-individually-mounted-channel-letters", priority: 0.8 },
  { path: "/guides/outdoor-sign-finishes-liquid-paint-powder-coating-electroplating", priority: 0.8 },
  { path: "/guides/what-does-ip65-mean-outdoor-channel-letters", priority: 0.8 },
  { path: "/guides/outdoor-signs-for-cold-climates", priority: 0.8 },
  { path: "/guides/importing-custom-signage-from-china", priority: 0.8 },
  // Published in English only, so no alternates are declared.
  { path: "/guides/custom-braille-door-signs", priority: 0.8 },
  { path: "/case-studies/pavilion-dalian-mall-festive-installations", priority: 0.7 },
  // Published in English only, so no alternates are declared.
  { path: "/case-studies/dongguan-street-dalian-heritage-renewal", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, languages }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: lastModifiedByRoute[path] ?? SITE_CONTENT_BASELINE_DATE,
    changeFrequency: "monthly",
    priority,
    ...(languages
      ? {
          alternates: {
            languages: Object.fromEntries(
              Object.entries(languages).map(([code, route]) => [code, `${siteConfig.url}${route}`]),
            ),
          },
        }
      : {}),
  }));
}
