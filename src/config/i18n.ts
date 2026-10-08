/**
 * Language plumbing.
 *
 * Every translated tree lives in a parallel subtree — /ja, /ko — rather than in
 * a [locale] segment, so the language of a request is read from its path. The
 * dictionaries below are the single source for the header, footer and language
 * panel; adding a language means adding an entry to each of them plus its route
 * map, and nothing else.
 *
 * Only languages that have real pages are listed anywhere in the UI, and every
 * link is resolved to a page that exists: a page with a translation keeps the
 * reader on the same page, and a page without one falls back to that language's
 * home page instead of a missing address.
 */
export type Locale = 'en' | 'ja' | 'ko';

export const DEFAULT_LOCALE: Locale = 'en';

/** The locales that have a subtree, in the order they are listed in the UI. */
export const LOCALES: Locale[] = ['en', 'ja', 'ko'];

/** Language names, written the way a speaker of that language writes them. */
export const languageNames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  ko: '한국어',
};

/** Path prefix of each translated tree; English is the site root. */
const LOCALE_PREFIX: Record<Locale, string> = { en: '', ja: '/ja', ko: '/ko' };

export const localeFromPath = (pathname: string): Locale => {
  if (pathname === '/ko' || pathname.startsWith('/ko/')) return 'ko';
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja';
  return DEFAULT_LOCALE;
};

/**
 * English routes that have a Japanese counterpart, and the same for Korean.
 * A page that is missing from a map has no page in that language yet, so the
 * switch falls back to that language's home page.
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

/** Korean coverage is the home page only, so everything else lands there. */
export const koreanRouteFor: Record<string, string> = {
  '/': '/ko',
};

/** The page in the given language for an English path, or that language's home. */
export const toLocale = (pathname: string, locale: Locale): string => {
  if (locale === 'en') return toEnglish(pathname);
  return locale === 'ja' ? japaneseRouteFor[pathname] ?? '/ja' : koreanRouteFor[pathname] ?? '/ko';
};

/**
 * The English route for a translated path. Every translated page mirrors an
 * English page that already exists, so dropping the prefix is enough.
 */
export const toEnglish = (pathname: string): string => {
  const stripped = pathname.replace(/^\/(ja|ko)(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
};

/** The route a reader is on, in the given language. */
export const localeHref = (pathname: string, locale: Locale): string =>
  locale === localeFromPath(pathname) ? pathname : toLocale(pathname, locale);

/** The canonical prefix for a language, used by the sitemap. */
export const localePrefix = (locale: Locale): string => LOCALE_PREFIX[locale];

export type NavItem = { label: string; href: string };

/**
 * Navigation. A translated entry points at its own language's page where one
 * exists and at the English page where it does not, so no link in a translated
 * header can lead to a missing page.
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
  ko: [
    { label: '제품', href: '/products' },
    { label: '시공 사례', href: '/projects' },
    { label: '가이드', href: '/guides' },
    { label: 'FAQ', href: '/faq' },
    { label: '회사 소개', href: '/about' },
    { label: '문의', href: '/contact' },
  ],
};

export const headerCta: Record<Locale, NavItem> = {
  en: { label: 'Get a Free Quote', href: '/contact' },
  ja: { label: '無料見積もり', href: '/ja/contact' },
  ko: { label: '무료 견적', href: '/contact' },
};

export const headerCopy: Record<Locale, { homeLabel: string; menuLabel: string; logoAlt: string }> = {
  en: { homeLabel: 'ZYD Home', menuLabel: 'Toggle navigation', logoAlt: 'ZYD logo' },
  ja: { homeLabel: 'ZYD ホーム', menuLabel: 'メニューを開く', logoAlt: 'ZYD ロゴ' },
  ko: { homeLabel: 'ZYD 홈', menuLabel: '메뉴 열기', logoAlt: 'ZYD 로고' },
};

/** Trigger label and panel heading of the language switch, per language. */
export const languageSwitchCopy: Record<Locale, { label: string; panelTitle: string }> = {
  en: { label: 'Languages', panelTitle: 'Choose a language' },
  ja: { label: '言語', panelTitle: '言語を選択' },
  ko: { label: '언어', panelTitle: '언어 선택' },
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
  ko: {
    tagline: '건축 사이니지와 정밀 가공의 글로벌 기준.',
    columns: [
      {
        heading: '제품 라인',
        links: [
          { label: '웨이파인딩 시스템', href: '/products/architectural-wayfinding-system' },
          { label: '할로 조명 문자', href: '/products/custom-halo-lit-letters' },
          { label: 'LED 라이트박스', href: '/products/ultra-slim-led-light-box' },
          { label: '모뉴먼트 사인', href: '/products/outdoor-pylon-monument-sign' },
          { label: 'LED 네온 사인', href: '/products/custom-led-neon-sign' },
          { label: '금속·아크릴 사인', href: '/products/metal-acrylic-logo-sign' },
          { label: '모든 제품 보기 →', href: '/products' },
        ],
      },
      {
        heading: '회사 정보',
        links: [
          { label: '생산 기지', href: '/about' },
          { label: '시공 사례', href: '/projects' },
          { label: '자료·FAQ', href: '/faq' },
          { label: '채널 레터 가격 가이드', href: '/guides/how-much-do-custom-channel-letters-cost' },
          { label: '전면 발광과 할로 발광의 차이', href: '/guides/front-lit-vs-halo-lit-channel-letters' },
          { label: '상담 신청', href: '/contact' },
        ],
      },
    ],
    emailLabel: '이메일',
    whatsappLabel: '기술 담당',
    copyright: '© 2026',
    delivery: 'DDP 배송 범위',
    backToTop: '맨 위로',
    whatsappAria: 'WhatsApp으로 문의하기',
    quoteAria: '사이니지 프로젝트 무료 견적 요청',
    quoteLabel: '무료 견적',
  },
};

/** Headings that repeat in every language, plus the social list and Alibaba. */
export const footerStatic = {
  socialHeading: { en: 'Social Identity', ja: 'ソーシャル', ko: '소셜' } as Record<Locale, string>,
  connectHeading: { en: 'B2B Connect', ja: 'B2B窓口', ko: 'B2B 연락처' } as Record<Locale, string>,
  socialLinks: [
    { label: 'LinkedIn', key: 'linkedin' },
    { label: 'Twitter (X)', key: 'twitter' },
    { label: 'TikTok', key: 'tiktok' },
  ] as { label: string; key: 'linkedin' | 'twitter' | 'tiktok' }[],
  alibaba: { label: 'Alibaba', href: 'https://dlzydbs.en.alibaba.com/?spm=a2700.micro_cgs_home.0.0.2f073e5fBh410q' },
};
