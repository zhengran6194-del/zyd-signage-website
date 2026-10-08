/**
 * Language plumbing for the Japanese tree.
 *
 * The Japanese pages live under /ja as a parallel subtree — no route was moved
 * into a [locale] segment — so the language of a request is read from its path.
 * Everything the header, footer and language switcher need to render in the
 * reader's language is collected here, which keeps the English strings in one
 * place and makes it obvious what still has no Japanese counterpart.
 */
export type Locale = 'en' | 'ja';

export const DEFAULT_LOCALE: Locale = 'en';

export const localeFromPath = (pathname: string): Locale =>
  pathname === '/ja' || pathname.startsWith('/ja/') ? 'ja' : 'en';

/**
 * English routes that have a Japanese counterpart, and vice versa. Used by the
 * language switcher so a reader stays on the same page when a translation
 * exists, and lands on the Japanese home page when it does not.
 */
export const japaneseRouteFor: Record<string, string> = {
  '/': '/ja',
  '/products': '/ja/products',
  '/products/architectural-wayfinding-system': '/ja/products/architectural-wayfinding-system',
  '/products/custom-halo-lit-letters': '/ja/products/custom-halo-lit-letters',
  '/products/outdoor-pylon-monument-sign': '/ja/products/outdoor-pylon-monument-sign',
  '/projects': '/ja/projects',
  '/guides': '/ja/guides',
  '/faq': '/ja/faq',
  '/about': '/ja/about',
  '/contact': '/ja/contact',
};

/** The Japanese route for an English path, falling back to the Japanese home page. */
export const toJapanese = (pathname: string): string => japaneseRouteFor[pathname] ?? '/ja';

/**
 * The English route for a Japanese path. Every Japanese page mirrors an English
 * page that already exists, so dropping the prefix is enough and cannot 404.
 */
export const toEnglish = (pathname: string): string => {
  const stripped = pathname.replace(/^\/ja(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
};

export type NavItem = { label: string; href: string };

/**
 * Navigation. Japanese entries point at the Japanese page where one exists and
 * at the English page where it does not, so no link in the Japanese header can
 * lead to a missing page.
 */
export const navItems: Record<Locale, NavItem[]> = {
  en: [
    { label: 'Products', href: '/products' },
    { label: 'Case Studies', href: '/projects' },
    { label: 'Guides', href: '/guides' },
    { label: 'FAQ', href: '/faq' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  ja: [
    { label: '製品', href: '/ja/products' },
    { label: '導入事例', href: '/ja/projects' },
    { label: 'ガイド', href: '/ja/guides' },
    { label: 'FAQ', href: '/ja/faq' },
    { label: '会社情報', href: '/ja/about' },
    { label: 'お問い合わせ', href: '/ja/contact' },
  ],
};

export const headerCta: Record<Locale, NavItem> = {
  en: { label: 'Get a Free Quote', href: '/contact' },
  ja: { label: '無料見積もり', href: '/ja/contact' },
};

export const headerCopy: Record<Locale, { homeLabel: string; menuLabel: string; logoAlt: string }> = {
  en: { homeLabel: 'ZYD Home', menuLabel: 'Toggle navigation', logoAlt: 'ZYD logo' },
  ja: { homeLabel: 'ZYD ホーム', menuLabel: 'メニューを開く', logoAlt: 'ZYD ロゴ' },
};

type FooterColumn = { heading: string; links: NavItem[] };

export const footerCopy: Record<
  Locale,
  {
    tagline: string;
    columns: FooterColumn[];
    emailLabel: string;
    whatsappLabel: string;
    copyright: string;
    delivery: string;
    backToTop: string;
    whatsappAria: string;
    quoteAria: string;
    quoteLabel: string;
  }
> = {
  en: {
    tagline: 'Global Benchmark in Architectural Signage & Precision Fabrication.',
    columns: [
      {
        heading: 'Product Lines',
        links: [
          { label: 'Wayfinding Systems', href: '/products/architectural-wayfinding-system' },
          { label: 'Halo-Lit Letters', href: '/products/custom-halo-lit-letters' },
          { label: 'LED Light Boxes', href: '/products/ultra-slim-led-light-box' },
          { label: 'Monument Signs', href: '/products/outdoor-pylon-monument-sign' },
          { label: 'LED Neon Signs', href: '/products/custom-led-neon-sign' },
          { label: 'Metal & Acrylic Signs', href: '/products/metal-acrylic-logo-sign' },
          { label: 'All Product Lines →', href: '/products' },
        ],
      },
      {
        heading: 'Corporate',
        links: [
          { label: 'Production Base', href: '/about' },
          { label: 'Case Portfolio', href: '/projects' },
          { label: 'Resources', href: '/faq' },
          { label: 'Channel Letters Cost Guide', href: '/guides/how-much-do-custom-channel-letters-cost' },
          { label: 'Front-Lit vs Halo-Lit', href: '/guides/front-lit-vs-halo-lit-channel-letters' },
          { label: 'Consult Now', href: '/contact' },
        ],
      },
    ],
    emailLabel: 'Direct Mail',
    whatsappLabel: 'Technical Lead',
    copyright: '© 2026',
    delivery: 'DDP Delivery Scope',
    backToTop: 'Back to top',
    whatsappAria: 'Chat on WhatsApp',
    quoteAria: 'Get a free signage project quote',
    quoteLabel: 'Get a Free Quote',
  },
  ja: {
    tagline: '建築サイネージと精密加工のグローバル基準。',
    columns: [
      {
        heading: '製品ラインナップ',
        links: [
          { label: '導線サインシステム', href: '/ja/products/architectural-wayfinding-system' },
          { label: 'ハロー（背面発光）文字', href: '/ja/products/custom-halo-lit-letters' },
          { label: 'LEDライトボックス', href: '/products/ultra-slim-led-light-box' },
          { label: 'モニュメント・ピロンサイン', href: '/ja/products/outdoor-pylon-monument-sign' },
          { label: 'LEDネオンサイン', href: '/products/custom-led-neon-sign' },
          { label: '金属・アクリルサイン', href: '/products/metal-acrylic-logo-sign' },
          { label: 'すべての製品を見る →', href: '/ja/products' },
        ],
      },
      {
        heading: '企業情報',
        links: [
          { label: '生産拠点', href: '/ja/about' },
          { label: '導入事例', href: '/ja/projects' },
          { label: '資料・FAQ', href: '/ja/faq' },
          { label: 'チャンネルレター価格ガイド', href: '/guides/how-much-do-custom-channel-letters-cost' },
          { label: '前面発光と背面発光の違い', href: '/guides/front-lit-vs-halo-lit-channel-letters' },
          { label: 'ご相談はこちら', href: '/ja/contact' },
        ],
      },
    ],
    emailLabel: 'メール',
    whatsappLabel: '技術担当',
    copyright: '© 2026',
    delivery: 'DDP配送範囲',
    backToTop: 'トップへ戻る',
    whatsappAria: 'WhatsAppで問い合わせる',
    quoteAria: 'サイネージ案件のお見積もりを依頼する',
    quoteLabel: '無料見積もり',
  },
};

/** Column headings that stay the same in both languages, plus the social list. */
export const footerStatic = {
  socialHeading: { en: 'Social Identity', ja: 'ソーシャル' } as Record<Locale, string>,
  connectHeading: { en: 'B2B Connect', ja: 'B2B窓口' } as Record<Locale, string>,
  socialLinks: [
    { label: 'LinkedIn', key: 'linkedin' },
    { label: 'Twitter (X)', key: 'twitter' },
    { label: 'TikTok', key: 'tiktok' },
  ] as { label: string; key: 'linkedin' | 'twitter' | 'tiktok' }[],
  alibaba: { label: 'Alibaba', href: 'https://dlzydbs.en.alibaba.com/?spm=a2700.micro_cgs_home.0.0.2f073e5fBh410q' },
};
