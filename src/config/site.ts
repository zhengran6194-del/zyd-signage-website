import type { Metadata } from 'next';
import { LOCALES, hreflangCode, type Locale } from '@/config/i18n';

export const siteConfig = {
  whatsappNumber: "8615931359322",
  salesEmail: "zhengran@zydsign.cn",
  companyName: "Dalian Zhiyudao Signage & Tech. Co., Ltd.",
  /** Trading name, as used in the site title template. */
  brandName: "ZYD Signage",
  contactPerson: "Aaron",
  url: "https://www.zydsign.com",
  /**
   * One-line entity description. Shared by the Organization schema and copied
   * verbatim into public/llms.txt so both state the same positioning.
   */
  description: "Factory-direct signage manufacturer in Dalian, China, producing wayfinding, architectural and illuminated signage for global B2B projects since 2006.",
  links: {
    twitter: "https://x.com/ZYDsign",
    tiktok: "https://www.tiktok.com/@zydsign",
    linkedin: "https://www.linkedin.com/in/%E5%88%9A-%E5%88%98-553686404",
    alibaba: "https://dlzydbs.en.alibaba.com/"
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
    path: '/assets/images/cat-illuminated.jpg',
    width: 1440,
    height: 1080,
    alt: 'Custom illuminated channel letters',
  },
  wayfinding: {
    path: '/assets/images/hero-wayfinding.jpg',
    width: 1536,
    height: 1024,
    alt: 'Architectural wayfinding signage system',
  },
  outdoor: {
    path: '/assets/images/cat-outdoor.webp',
    width: 1254,
    height: 1254,
    alt: 'Outdoor pylon and monument signage',
  },
  metalLogo: {
    path: '/assets/images/cat-metal.jpg',
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
    path: '/assets/images/cat-lightbox.jpg',
    width: 736,
    height: 736,
    alt: 'Ultra-slim LED light box',
  },
  system: {
    path: '/assets/images/cat-system.jpg',
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
  aFrameSign: {
    path: '/assets/images/a-frame-sign.webp',
    width: 1254,
    height: 1254,
    alt: 'Portable metal A-frame sign',
  },
} satisfies Record<string, OgImageSpec>;

/**
 * The same page in both language trees, as route paths. Supplying this makes
 * the page declare hreflang alternates for each language plus an x-default
 * pointing at English, which is what tells a search engine the two pages are
 * translations of one another rather than duplicates.
 */
/**
 * The pages that hold the same content, keyed by language. Every language the
 * page exists in must be listed, including this page itself, or a crawler
 * cannot pair the versions into one set; x-default is always the English one.
 */
export type LanguageAlternates = Partial<Record<Locale, string>>;

export type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path beginning with "/" — used for canonical and og:url. */
  path: string;
  image?: OgImageSpec;
  type?: 'website' | 'article';
  /** Route of the matching page in the other language, when one exists. */
  languages?: LanguageAlternates;
};

const absolute = (path: string): string => (path === '/' ? siteConfig.url : `${siteConfig.url}${path}`);

/**
 * The home page is published in every language, so each of its versions — and
 * its sitemap entry — declares the same set: every language plus the x-default
 * that sends everyone else to English.
 */
export const homePageLanguages: LanguageAlternates = {
  en: '/',
  ja: '/ja',
  ko: '/ko',
  ar: '/ar',
  es: '/es',
  ru: '/ru',
  de: '/de',
  fr: '/fr',
  zh: '/zh',
  pt: '/pt',
  it: '/it',
  nl: '/nl',
  pl: '/pl',
};

/**
 * Single source of truth for per-route social metadata.
 *
 * Next.js does not deep-merge `openGraph` / `twitter` between a parent layout
 * and a child route, so every route must declare the full object. Building it
 * here keeps og:url aligned with the canonical and stops routes from silently
 * inheriting the homepage title, description and URL.
 */
/**
 * Routes that also publish a Markdown mirror, as described by llmstxt.org: the
 * clean text version lives at the same URL with `index.md` appended. Content
 * pages under these prefixes, plus the homepage, the standing pages and the
 * listing routes, are mirrored by scripts/generate-page-markdown.mjs, which
 * fails the build if a page here has no mirror. Keep the two lists in step.
 */
const MARKDOWN_MIRROR_PREFIXES = ['/products/', '/guides/', '/case-studies/'];
const MARKDOWN_MIRROR_PATHS = ['/', '/about', '/contact', '/faq', '/products', '/guides', '/projects'];

const hasMarkdownMirror = (path: string): boolean =>
  MARKDOWN_MIRROR_PREFIXES.some((prefix) => path.startsWith(prefix)) ||
  MARKDOWN_MIRROR_PATHS.includes(path);

export function buildPageMetadata({
  title,
  description,
  path,
  image = ogImages.default,
  type = 'website',
  languages,
}: PageMetadataInput): Metadata {
  const url = absolute(path);
  const imageUrl = `${siteConfig.url}${image.path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      // Only pages that exist in both language trees declare alternates, so
      // routes that were never translated keep emitting exactly what they did
      // before.
      ...(languages
        ? {
            languages: {
              ...Object.fromEntries(
                LOCALES.filter((locale) => Boolean(languages[locale])).map((locale) => [
                  hreflangCode[locale],
                  absolute(languages[locale] as string),
                ]),
              ),
              'x-default': absolute(languages.en ?? '/'),
            },
          }
        : {}),
      // Tells agents where the Markdown version of this page lives, so they can
      // fetch clean text instead of parsing the HTML.
      ...(hasMarkdownMirror(path) ? { types: { 'text/markdown': `${url}/index.md` } } : {}),
    },
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
