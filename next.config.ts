import type { NextConfig } from "next";

// Baseline security headers, applied to every route.
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  // Do not advertise the framework version.
  poweredByHeader: false,

  /**
   * The three scenario pages used to live under /solutions. That section was
   * retired and the pages moved next to the buying guides, so the old
   * addresses are kept alive with permanent redirects instead of 404s: they
   * were already published and may be indexed or linked from elsewhere.
   */
  async redirects() {
    // statusCode 301 rather than `permanent: true`, which Next resolves to 308.
    // Both are permanent, but 301 is the signal the migrated pages should carry.
    return [
      { source: "/solutions", destination: "/guides", statusCode: 301 },
      {
        source: "/solutions/mall-wayfinding-signage",
        destination: "/guides/mall-wayfinding-signage",
        statusCode: 301,
      },
      {
        source: "/solutions/industrial-park-signage",
        destination: "/guides/industrial-park-signage",
        statusCode: 301,
      },
      {
        source: "/solutions/hotel-signage",
        destination: "/guides/hotel-signage",
        statusCode: 301,
      },
    ];
  },

  async headers() {
    return [
      {
        // Images and videos live in public/assets and are served straight from
        // the CDN; without this they fall back to must-revalidate, so every
        // navigation re-validates them.
        //
        // Deliberately NOT "immutable": assets are maintained by overwriting the
        // same path (see IMAGE_SWAP_GUIDE.md), and an immutable response would
        // leave returning visitors on the old file for a year with no way for
        // the server to correct it. One day of hard caching still removes the
        // re-validation on repeat visits, and stale-while-revalidate lets the
        // CDN serve the old copy in the background while fetching the new one,
        // so a same-path replacement goes live within a day.
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
