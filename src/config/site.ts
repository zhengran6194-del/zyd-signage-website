import type { Metadata } from 'next';

export const siteConfig = {
  whatsappNumber: "8615931359322",
  salesEmail: "zhengran@zydsign.cn",
  companyName: "Dalian Zhiyudao Signage & Tech. Co., Ltd.",
  contactPerson: "Aaron",
  url: "https://www.zydsign.com",
  links: {
    twitter: "https://x.com/ZYDsign",
    tiktok: "https://www.tiktok.com/@zydsign",
    linkedin: "https://www.linkedin.com/in/%E5%88%9A-%E5%88%98-553686404"
  }
};

export type OgImageSpec = {
  /** Path relative to the site root, e.g. /assets/images/hero.jpg */
  path: string;
  /** Real pixel dimensions of the file on disk. Never declare a size the file does not have. */
  width: number;
  height: number;
  alt: string;
};

/**
 * Social share images. The width/height values are measured from the actual
 * files in public/assets/images, so og:image:width/height always match the
 * real asset and platforms do not crop against a wrong aspect ratio.
 */
export const ogImages = {
  default: {
    path: '/assets/images/hero-bg-factory-aerial.jpg',
    width: 1440,
    height: 1192,
    alt: 'ZYD Signage factory-direct signage manufacturing',
  },
  channelLetters: {
    path: '/assets/images/cat-illuminated.webp',
    width: 1440,
    height: 1080,
    alt: 'Custom illuminated channel letters',
  },
  wayfinding: {
    path: '/assets/images/hero-wayfinding.png',
    width: 1536,
    height: 1024,
    alt: 'Architectural wayfinding signage system',
  },
  outdoor: {
    path: '/assets/images/cat-outdoor.webp',
    width: 1536,
    height: 1024,
    alt: 'Outdoor pylon and monument signage',
  },
  metalLogo: {
    path: '/assets/images/cat-metal.webp',
    width: 1080,
    height: 1080,
    alt: 'Metal and acrylic logo signage',
  },
  neon: {
    path: '/assets/images/cat-neon.webp',
    width: 1448,
    height: 1086,
    alt: 'Custom LED neon signage',
  },
  lightBox: {
    path: '/assets/images/cat-lightbox.webp',
    width: 736,
    height: 736,
    alt: 'Ultra-slim LED light box',
  },
  system: {
    path: '/assets/images/cat-system.webp',
    width: 1000,
    height: 1497,
    alt: 'Complete coordinated signage system',
  },
  medical: {
    path: '/assets/images/hero-medical.jpg',
    width: 1536,
    height: 1024,
    alt: 'Healthcare and medical signage system',
  },
  landscape: {
    path: '/assets/images/landscape-bench.jpg',
    width: 1448,
    height: 1086,
    alt: 'Custom landscape furniture and seating',
  },
  wasteBin: {
    path: '/assets/images/outdoor-waste-bin.jpg',
    width: 841,
    height: 893,
    alt: 'Custom outdoor waste bin',
  },
  planterBox: {
    path: '/assets/images/custom-planter-box.jpg',
    width: 915,
    height: 911,
    alt: 'Custom planter box',
  },
  deskSign: {
    path: '/assets/images/acrylic-desk-sign.jpg',
    width: 1000,
    height: 1000,
    alt: 'Custom acrylic desk sign',
  },
} satisfies Record<string, OgImageSpec>;

export type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path beginning with "/" — used for canonical and og:url. */
  path: string;
  image?: OgImageSpec;
  type?: 'website' | 'article';
};

/**
 * Single source of truth for per-route social metadata.
 *
 * Next.js does not deep-merge `openGraph` / `twitter` between a parent layout
 * and a child route, so every route must declare the full object. Building it
 * here keeps og:url aligned with the canonical and stops routes from silently
 * inheriting the homepage title, description and URL.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  image = ogImages.default,
  type = 'website',
}: PageMetadataInput): Metadata {
  const url = path === '/' ? siteConfig.url : `${siteConfig.url}${path}`;
  const imageUrl = `${siteConfig.url}${image.path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      siteName: siteConfig.companyName,
      title,
      description,
      url,
      images: [{ url: imageUrl, width: image.width, height: image.height, alt: image.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
