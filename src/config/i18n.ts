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
export type Locale = 'en' | 'ja' | 'ko' | 'ar' | 'es' | 'ru' | 'de' | 'fr' | 'zh' | 'pt' | 'it' | 'nl' | 'pl';

export const DEFAULT_LOCALE: Locale = 'en';

/** The locales that have a subtree, in the order they are listed in the UI. */
export const LOCALES: Locale[] = ['en', 'ja', 'ko', 'ar', 'es', 'ru', 'de', 'fr', 'zh', 'pt', 'it', 'nl', 'pl'];

/**
 * Languages the site actually publishes content in. Only these are offered by
 * the language switch, because a reader who picks a language has to be able to
 * read the page they are on.
 */
export const PUBLISHED_LOCALES: Locale[] = ['en', 'ja'];

/**
 * Languages that were published as home pages only and have since been
 * retired: they had no translated sub-pages, so switching to them from a
 * product or guide page led somewhere the reader could not read. Their text,
 * names and route mappings are kept — restoring one means moving it back into
 * PUBLISHED_LOCALES and restoring its routes, not rewriting anything.
 */
export const RETIRED_LOCALES: Locale[] = ['ko', 'ar', 'es', 'ru', 'de', 'fr', 'zh', 'pt', 'it', 'nl', 'pl'];

/** Language names, written the way a speaker of that language writes them. */
export const languageNames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  ar: 'العربية',
  es: 'Español',
  ru: 'Русский',
  de: 'Deutsch',
  fr: 'Français',
  zh: '简体中文',
  pt: 'Português',
  it: 'Italiano',
  nl: 'Nederlands',
  pl: 'Polski',
};

/**
 * hreflang value for each language. English, Japanese and Korean keep the
 * region-qualified values they were first published with; the newer trees use a
 * language-only value, since they address a language rather than one country.
 */
export const hreflangCode: Record<Locale, string> = {
  en: 'en-US',
  ja: 'ja-JP',
  ko: 'ko-KR',
  ar: 'ar',
  es: 'es',
  ru: 'ru',
  de: 'de',
  fr: 'fr',
  zh: 'zh-CN',
  pt: 'pt',
  it: 'it',
  nl: 'nl',
  pl: 'pl',
};

/** Languages written right to left, so the document direction can follow. */
export const isRtlLocale = (locale: Locale): boolean => locale === 'ar';

/** Path prefix of each translated tree; English is the site root. */
const LOCALE_PREFIX: Record<Locale, string> = {
  en: '',
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

const TRANSLATED_LOCALES: Locale[] = ['ja', 'ko', 'ar', 'es', 'ru', 'de', 'fr', 'zh', 'pt', 'it', 'nl', 'pl'];

/**
 * Route prefixes of the retired languages. They were live and may be indexed,
 * so they are redirected to the English home page rather than left as 404s.
 * Declared here so the redirect list and the language lists cannot drift apart.
 */
export const RETIRED_LOCALE_PREFIXES: string[] = RETIRED_LOCALES.map((locale) => LOCALE_PREFIX[locale]);

export const localeFromPath = (pathname: string): Locale => {
  for (const locale of TRANSLATED_LOCALES) {
    const prefix = LOCALE_PREFIX[locale];
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return locale;
  }
  return DEFAULT_LOCALE;
};

/**
 * English routes that have a Japanese counterpart.
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

/**
 * The page in the given language that matches an English path, or null when
 * that language has no such page yet.
 *
 * Returning null rather than falling back to the language's home page is
 * deliberate: sending a reader who is looking at a product page to an unrelated
 * home page loses their place, so the switcher tells them the page has no
 * translation and offers the home page as a choice instead.
 */
export const translatedPathFor = (pathname: string, locale: Locale): string | null => {
  const current = localeFromPath(pathname);
  if (locale === current) return pathname;
  // Retired languages are not offered anywhere, and their addresses redirect,
  // so no route in the app should ever send a reader to one.
  if (!PUBLISHED_LOCALES.includes(locale)) return null;

  // Every translated page mirrors an English page, so the English route is the
  // common key for looking a translation up.
  const englishPath = toEnglish(pathname);
  if (locale === 'en') return englishPath;
  if (locale === 'ja') return japaneseRouteFor[englishPath] ?? null;

  // The other trees publish their home page only.
  if (englishPath === '/') return LOCALE_PREFIX[locale] || '/';
  return null;
};

/**
 * The English route for a translated path. Every translated page mirrors an
 * English page that already exists, so dropping the prefix is enough.
 */
export const toEnglish = (pathname: string): string => {
  const translatedPrefix = new RegExp(`^\\/(${TRANSLATED_LOCALES.join('|')})(?=\\/|$)`);
  const stripped = pathname.replace(translatedPrefix, '');
  return stripped === '' ? '/' : stripped;
};

/** The home page of a language, used when a page has no translation of it. */
export const localeHomePath = (locale: Locale): string => LOCALE_PREFIX[locale] || '/';

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
  ar: [
    { label: 'المنتجات', href: '/products' },
    { label: 'دراسات الحالة', href: '/projects' },
    { label: 'الأدلة', href: '/guides' },
    { label: 'الأسئلة الشائعة', href: '/faq' },
    { label: 'من نحن', href: '/about' },
    { label: 'اتصل بنا', href: '/contact' },
  ],
  es: [
    { label: 'Productos', href: '/products' },
    { label: 'Casos prácticos', href: '/projects' },
    { label: 'Guías', href: '/guides' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Empresa', href: '/about' },
    { label: 'Contacto', href: '/contact' },
  ],
  ru: [
    { label: 'Продукция', href: '/products' },
    { label: 'Проекты', href: '/projects' },
    { label: 'Руководства', href: '/guides' },
    { label: 'FAQ', href: '/faq' },
    { label: 'О компании', href: '/about' },
    { label: 'Контакты', href: '/contact' },
  ],
  de: [
    { label: 'Produkte', href: '/products' },
    { label: 'Referenzen', href: '/projects' },
    { label: 'Ratgeber', href: '/guides' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Unternehmen', href: '/about' },
    { label: 'Kontakt', href: '/contact' },
  ],
  fr: [
    { label: 'Produits', href: '/products' },
    { label: 'Réalisations', href: '/projects' },
    { label: 'Guides', href: '/guides' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Entreprise', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  zh: [
    { label: '产品', href: '/products' }, { label: '案例', href: '/projects' }, { label: '指南', href: '/guides' },
    { label: '常见问题', href: '/faq' }, { label: '关于我们', href: '/about' }, { label: '联系我们', href: '/contact' },
  ],
  pt: [
    { label: 'Produtos', href: '/products' }, { label: 'Projetos', href: '/projects' }, { label: 'Guias', href: '/guides' },
    { label: 'FAQ', href: '/faq' }, { label: 'Empresa', href: '/about' }, { label: 'Contacto', href: '/contact' },
  ],
  it: [
    { label: 'Prodotti', href: '/products' }, { label: 'Progetti', href: '/projects' }, { label: 'Guide', href: '/guides' },
    { label: 'FAQ', href: '/faq' }, { label: 'Azienda', href: '/about' }, { label: 'Contatti', href: '/contact' },
  ],
  nl: [
    { label: 'Producten', href: '/products' }, { label: 'Projecten', href: '/projects' }, { label: 'Gidsen', href: '/guides' },
    { label: 'FAQ', href: '/faq' }, { label: 'Over ons', href: '/about' }, { label: 'Contact', href: '/contact' },
  ],
  pl: [
    { label: 'Produkty', href: '/products' }, { label: 'Realizacje', href: '/projects' }, { label: 'Poradniki', href: '/guides' },
    { label: 'FAQ', href: '/faq' }, { label: 'O firmie', href: '/about' }, { label: 'Kontakt', href: '/contact' },
  ],
};

export const headerCta: Record<Locale, NavItem> = {
  en: { label: 'Get a Free Quote', href: '/contact' },
  ja: { label: '無料見積もり', href: '/ja/contact' },
  ko: { label: '무료 견적', href: '/contact' },
  ar: { label: 'عرض سعر مجاني', href: '/contact' },
  es: { label: 'Presupuesto gratis', href: '/contact' },
  ru: { label: 'Бесплатный расчёт', href: '/contact' },
  de: { label: 'Kostenloses Angebot', href: '/contact' },
  fr: { label: 'Devis gratuit', href: '/contact' },
  zh: { label: '免费报价', href: '/contact' },
  pt: { label: 'Orçamento grátis', href: '/contact' },
  it: { label: 'Preventivo gratuito', href: '/contact' },
  nl: { label: 'Gratis offerte', href: '/contact' },
  pl: { label: 'Bezpłatna wycena', href: '/contact' },
};

export const headerCopy: Record<Locale, { homeLabel: string; menuLabel: string; logoAlt: string }> = {
  en: { homeLabel: 'ZYD Home', menuLabel: 'Toggle navigation', logoAlt: 'ZYD logo' },
  ja: { homeLabel: 'ZYD ホーム', menuLabel: 'メニューを開く', logoAlt: 'ZYD ロゴ' },
  ko: { homeLabel: 'ZYD 홈', menuLabel: '메뉴 열기', logoAlt: 'ZYD 로고' },
  ar: { homeLabel: 'الصفحة الرئيسية ZYD', menuLabel: 'فتح القائمة', logoAlt: 'شعار ZYD' },
  es: { homeLabel: 'Inicio ZYD', menuLabel: 'Abrir menú', logoAlt: 'Logotipo ZYD' },
  ru: { homeLabel: 'Главная ZYD', menuLabel: 'Открыть меню', logoAlt: 'Логотип ZYD' },
  de: { homeLabel: 'ZYD Startseite', menuLabel: 'Menü öffnen', logoAlt: 'ZYD Logo' },
  fr: { homeLabel: 'Accueil ZYD', menuLabel: 'Ouvrir le menu', logoAlt: 'Logo ZYD' },
  zh: { homeLabel: 'ZYD 首页', menuLabel: '打开菜单', logoAlt: 'ZYD 标志' },
  pt: { homeLabel: 'Página inicial ZYD', menuLabel: 'Abrir menu', logoAlt: 'Logotipo ZYD' },
  it: { homeLabel: 'Home ZYD', menuLabel: 'Apri menu', logoAlt: 'Logo ZYD' },
  nl: { homeLabel: 'ZYD Startpagina', menuLabel: 'Menu openen', logoAlt: 'ZYD-logo' },
  pl: { homeLabel: 'Strona główna ZYD', menuLabel: 'Otwórz menu', logoAlt: 'Logo ZYD' },
};

/**
 * Trigger label, panel heading, and the wording shown when a reader picks a
 * language that has no version of the page they are on. The notice is written
 * in the language they picked, because that is the language they asked for.
 */
export const languageSwitchCopy: Record<
  Locale,
  { label: string; panelTitle: string; unavailable: string; homeLink: string }
> = {
  en: { label: 'Languages', panelTitle: 'Choose a language', unavailable: 'This page is not available in English yet.', homeLink: 'Go to the English home page' },
  ja: { label: '言語', panelTitle: '言語を選択', unavailable: 'このページの日本語版はまだありません。', homeLink: '日本語のトップページへ' },
  ko: { label: '언어', panelTitle: '언어 선택', unavailable: '이 페이지는 아직 한국어 버전이 없습니다.', homeLink: '한국어 홈페이지로 이동' },
  ar: { label: 'اللغات', panelTitle: 'اختر اللغة', unavailable: 'هذه الصفحة غير متوفرة بالعربية حتى الآن.', homeLink: 'الانتقال إلى الصفحة الرئيسية بالعربية' },
  es: { label: 'Idiomas', panelTitle: 'Elige un idioma', unavailable: 'Esta página aún no está disponible en español.', homeLink: 'Ir a la página de inicio en español' },
  ru: { label: 'Языки', panelTitle: 'Выберите язык', unavailable: 'Эта страница пока недоступна на русском языке.', homeLink: 'Перейти на главную страницу на русском' },
  de: { label: 'Sprachen', panelTitle: 'Sprache wählen', unavailable: 'Diese Seite ist noch nicht auf Deutsch verfügbar.', homeLink: 'Zur deutschen Startseite' },
  fr: { label: 'Langues', panelTitle: 'Choisir une langue', unavailable: 'Cette page n’est pas encore disponible en français.', homeLink: 'Aller à la page d’accueil en français' },
  zh: { label: '语言', panelTitle: '选择语言', unavailable: '此页面暂无简体中文版本。', homeLink: '前往简体中文首页' },
  pt: { label: 'Idiomas', panelTitle: 'Escolha um idioma', unavailable: 'Esta página ainda não está disponível em português.', homeLink: 'Ir para a página inicial em português' },
  it: { label: 'Lingue', panelTitle: 'Scegli una lingua', unavailable: 'Questa pagina non è ancora disponibile in italiano.', homeLink: 'Vai alla home page in italiano' },
  nl: { label: 'Talen', panelTitle: 'Kies een taal', unavailable: 'Deze pagina is nog niet beschikbaar in het Nederlands.', homeLink: 'Naar de Nederlandse startpagina' },
  pl: { label: 'Języki', panelTitle: 'Wybierz język', unavailable: 'Ta strona nie jest jeszcze dostępna w języku polskim.', homeLink: 'Przejdź do strony głównej w języku polskim' },
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
  ar: {
    tagline: 'معيار عالمي في لافتات العمارة والتصنيع الدقيق.',
    columns: [
      {
        heading: 'خطوط المنتجات',
        links: [
          { label: 'أنظمة لافتات التوجيه', href: '/products/architectural-wayfinding-system' },
          { label: 'حروف بإضاءة خلفية', href: '/products/custom-halo-lit-letters' },
          { label: 'صناديق إضاءة LED', href: '/products/ultra-slim-led-light-box' },
          { label: 'لافتات نصب وأعمدة', href: '/products/outdoor-pylon-monument-sign' },
          { label: 'لافتات نيون LED', href: '/products/custom-led-neon-sign' },
          { label: 'لافتات معدنية وأكريليك', href: '/products/metal-acrylic-logo-sign' },
          { label: 'عرض جميع المنتجات ←', href: '/products' },
        ],
      },
      {
        heading: 'معلومات الشركة',
        links: [
          { label: 'قاعدة الإنتاج', href: '/about' },
          { label: 'معرض الأعمال', href: '/projects' },
          { label: 'الموارد والأسئلة الشائعة', href: '/faq' },
          { label: 'دليل تكلفة حروف القنوات', href: '/guides/how-much-do-custom-channel-letters-cost' },
          { label: 'الإضاءة الأمامية مقابل الخلفية', href: '/guides/front-lit-vs-halo-lit-channel-letters' },
          { label: 'اطلب استشارة', href: '/contact' },
        ],
      },
    ],
    emailLabel: 'البريد الإلكتروني',
    whatsappLabel: 'المسؤول الفني',
    copyright: '© 2026',
    delivery: 'نطاق التسليم DDP',
    backToTop: 'العودة إلى الأعلى',
    whatsappAria: 'تواصل عبر واتساب',
    quoteAria: 'اطلب عرض سعر مجاني لمشروع لافتات',
    quoteLabel: 'عرض سعر مجاني',
  },
  es: {
    tagline: 'Referencia mundial en señalización arquitectónica y fabricación de precisión.',
    columns: [
      {
        heading: 'Líneas de producto',
        links: [
          { label: 'Sistemas de orientación', href: '/products/architectural-wayfinding-system' },
          { label: 'Letras con luz posterior', href: '/products/custom-halo-lit-letters' },
          { label: 'Cajas de luz LED', href: '/products/ultra-slim-led-light-box' },
          { label: 'Señales monumentales', href: '/products/outdoor-pylon-monument-sign' },
          { label: 'Letreros de neón LED', href: '/products/custom-led-neon-sign' },
          { label: 'Señales de metal y acrílico', href: '/products/metal-acrylic-logo-sign' },
          { label: 'Ver todos los productos →', href: '/products' },
        ],
      },
      {
        heading: 'Corporativo',
        links: [
          { label: 'Base de producción', href: '/about' },
          { label: 'Cartera de proyectos', href: '/projects' },
          { label: 'Recursos y FAQ', href: '/faq' },
          { label: 'Guía de costes de letras canal', href: '/guides/how-much-do-custom-channel-letters-cost' },
          { label: 'Iluminación frontal o posterior', href: '/guides/front-lit-vs-halo-lit-channel-letters' },
          { label: 'Solicitar asesoría', href: '/contact' },
        ],
      },
    ],
    emailLabel: 'Correo directo',
    whatsappLabel: 'Responsable técnico',
    copyright: '© 2026',
    delivery: 'Alcance de entrega DDP',
    backToTop: 'Volver arriba',
    whatsappAria: 'Chatear por WhatsApp',
    quoteAria: 'Solicitar presupuesto de señalización',
    quoteLabel: 'Presupuesto gratis',
  },
  ru: {
    tagline: 'Мировой стандарт архитектурных вывесок и точной обработки.',
    columns: [
      {
        heading: 'Линейки продукции',
        links: [
          { label: 'Системы навигационных вывесок', href: '/products/architectural-wayfinding-system' },
          { label: 'Буквы с контровой подсветкой', href: '/products/custom-halo-lit-letters' },
          { label: 'LED-лайтбоксы', href: '/products/ultra-slim-led-light-box' },
          { label: 'Монументальные вывески', href: '/products/outdoor-pylon-monument-sign' },
          { label: 'LED-неоновые вывески', href: '/products/custom-led-neon-sign' },
          { label: 'Металл и акрил', href: '/products/metal-acrylic-logo-sign' },
          { label: 'Вся продукция →', href: '/products' },
        ],
      },
      {
        heading: 'О компании',
        links: [
          { label: 'Производство', href: '/about' },
          { label: 'Проекты', href: '/projects' },
          { label: 'Материалы и FAQ', href: '/faq' },
          { label: 'Гид по стоимости букв', href: '/guides/how-much-do-custom-channel-letters-cost' },
          { label: 'Лицевая и контровая подсветка', href: '/guides/front-lit-vs-halo-lit-channel-letters' },
          { label: 'Связаться с нами', href: '/contact' },
        ],
      },
    ],
    emailLabel: 'Почта',
    whatsappLabel: 'Технический специалист',
    copyright: '© 2026',
    delivery: 'Объём поставки DDP',
    backToTop: 'Наверх',
    whatsappAria: 'Написать в WhatsApp',
    quoteAria: 'Запросить бесплатный расчёт вывесок',
    quoteLabel: 'Бесплатный расчёт',
  },
  de: {
    tagline: 'Weltweiter Maßstab für Architekturbeschilderung und Präzisionsfertigung.',
    columns: [
      {
        heading: 'Produktlinien',
        links: [
          { label: 'Wegeleitsysteme', href: '/products/architectural-wayfinding-system' },
          { label: 'Halo-Leuchtbuchstaben', href: '/products/custom-halo-lit-letters' },
          { label: 'LED-Lichtkästen', href: '/products/ultra-slim-led-light-box' },
          { label: 'Monumentalschilder', href: '/products/outdoor-pylon-monument-sign' },
          { label: 'LED-Neonschilder', href: '/products/custom-led-neon-sign' },
          { label: 'Metall- und Acrylschilder', href: '/products/metal-acrylic-logo-sign' },
          { label: 'Alle Produkte →', href: '/products' },
        ],
      },
      {
        heading: 'Unternehmen',
        links: [
          { label: 'Produktionsstandort', href: '/about' },
          { label: 'Referenzprojekte', href: '/projects' },
          { label: 'Ressourcen und FAQ', href: '/faq' },
          { label: 'Kostenleitfaden Kanalbuchstaben', href: '/guides/how-much-do-custom-channel-letters-cost' },
          { label: 'Front- oder Halo-Beleuchtung', href: '/guides/front-lit-vs-halo-lit-channel-letters' },
          { label: 'Jetzt beraten lassen', href: '/contact' },
        ],
      },
    ],
    emailLabel: 'Direktmail',
    whatsappLabel: 'Technischer Ansprechpartner',
    copyright: '© 2026',
    delivery: 'DDP-Lieferumfang',
    backToTop: 'Nach oben',
    whatsappAria: 'Über WhatsApp schreiben',
    quoteAria: 'Kostenloses Angebot für ein Beschilderungsprojekt',
    quoteLabel: 'Kostenloses Angebot',
  },
  fr: {
    tagline: 'Référence mondiale de l’enseigne architecturale et de la fabrication de précision.',
    columns: [
      {
        heading: 'Gammes de produits',
        links: [
          { label: 'Systèmes de signalétique', href: '/products/architectural-wayfinding-system' },
          { label: 'Lettres rétro-éclairées', href: '/products/custom-halo-lit-letters' },
          { label: 'Caissons LED', href: '/products/ultra-slim-led-light-box' },
          { label: 'Enseignes monumentales', href: '/products/outdoor-pylon-monument-sign' },
          { label: 'Enseignes néon LED', href: '/products/custom-led-neon-sign' },
          { label: 'Enseignes métal et acrylique', href: '/products/metal-acrylic-logo-sign' },
          { label: 'Tous les produits →', href: '/products' },
        ],
      },
      {
        heading: 'Entreprise',
        links: [
          { label: 'Site de production', href: '/about' },
          { label: 'Portfolio de projets', href: '/projects' },
          { label: 'Ressources et FAQ', href: '/faq' },
          { label: 'Guide des coûts des lettres', href: '/guides/how-much-do-custom-channel-letters-cost' },
          { label: 'Éclairage frontal ou halo', href: '/guides/front-lit-vs-halo-lit-channel-letters' },
          { label: 'Demander un devis', href: '/contact' },
        ],
      },
    ],
    emailLabel: 'E-mail direct',
    whatsappLabel: 'Responsable technique',
    copyright: '© 2026',
    delivery: 'Périmètre de livraison DDP',
    backToTop: 'Haut de page',
    whatsappAria: 'Discuter sur WhatsApp',
    quoteAria: 'Demander un devis de signalétique',
    quoteLabel: 'Devis gratuit',
  },
  zh: {
    tagline: '建筑标识与精密制造的全球标准。',
    columns: [
      { heading: '产品线', links: [
        { label: '导视系统', href: '/products/architectural-wayfinding-system' }, { label: '背发光字', href: '/products/custom-halo-lit-letters' }, { label: 'LED灯箱', href: '/products/ultra-slim-led-light-box' }, { label: '精神堡垒', href: '/products/outdoor-pylon-monument-sign' }, { label: 'LED霓虹灯牌', href: '/products/custom-led-neon-sign' }, { label: '金属与亚克力标识', href: '/products/metal-acrylic-logo-sign' }, { label: '查看全部产品 →', href: '/products' },
      ] },
      { heading: '公司信息', links: [
        { label: '生产基地', href: '/about' }, { label: '案例作品', href: '/projects' }, { label: '资源与FAQ', href: '/faq' }, { label: '发光字成本指南', href: '/guides/how-much-do-custom-channel-letters-cost' }, { label: '前发光与背发光对比', href: '/guides/front-lit-vs-halo-lit-channel-letters' }, { label: '立即咨询', href: '/contact' },
      ] },
    ],
    emailLabel: '邮箱', whatsappLabel: '技术负责人', copyright: '© 2026', delivery: 'DDP配送范围', backToTop: '返回顶部', whatsappAria: '通过WhatsApp咨询', quoteAria: '获取标识项目免费报价', quoteLabel: '免费报价',
  },
  pt: {
    tagline: 'Referência global em sinalização arquitetônica e fabricação de precisão.',
    columns: [
      { heading: 'Linhas de produtos', links: [
        { label: 'Sistemas de orientação', href: '/products/architectural-wayfinding-system' }, { label: 'Letras halo iluminadas', href: '/products/custom-halo-lit-letters' }, { label: 'Caixas de luz LED', href: '/products/ultra-slim-led-light-box' }, { label: 'Totens monumentais', href: '/products/outdoor-pylon-monument-sign' }, { label: 'Letras neon LED', href: '/products/custom-led-neon-sign' }, { label: 'Sinalização de metal e acrílico', href: '/products/metal-acrylic-logo-sign' }, { label: 'Ver todos os produtos →', href: '/products' },
      ] },
      { heading: 'Empresa', links: [
        { label: 'Base de produção', href: '/about' }, { label: 'Portfólio de projetos', href: '/projects' }, { label: 'Recursos e FAQ', href: '/faq' }, { label: 'Guia de custos de letras', href: '/guides/how-much-do-custom-channel-letters-cost' }, { label: 'Iluminação frontal ou halo', href: '/guides/front-lit-vs-halo-lit-channel-letters' }, { label: 'Fale conosco', href: '/contact' },
      ] },
    ],
    emailLabel: 'E-mail', whatsappLabel: 'Responsável técnico', copyright: '© 2026', delivery: 'Escopo de entrega DDP', backToTop: 'Voltar ao topo', whatsappAria: 'Falar pelo WhatsApp', quoteAria: 'Solicitar orçamento de sinalização', quoteLabel: 'Orçamento grátis',
  },
  it: {
    tagline: 'Punto di riferimento globale per insegne architettoniche e lavorazioni di precisione.',
    columns: [
      { heading: 'Linee di prodotto', links: [
        { label: 'Sistemi di orientamento', href: '/products/architectural-wayfinding-system' }, { label: 'Lettere con luce halo', href: '/products/custom-halo-lit-letters' }, { label: 'Light box LED', href: '/products/ultra-slim-led-light-box' }, { label: 'Insegne monumentali', href: '/products/outdoor-pylon-monument-sign' }, { label: 'Insegne neon LED', href: '/products/custom-led-neon-sign' }, { label: 'Insegne in metallo e acrilico', href: '/products/metal-acrylic-logo-sign' }, { label: 'Vedi tutti i prodotti →', href: '/products' },
      ] },
      { heading: 'Azienda', links: [
        { label: 'Base produttiva', href: '/about' }, { label: 'Portfolio progetti', href: '/projects' }, { label: 'Risorse e FAQ', href: '/faq' }, { label: 'Guida ai costi delle lettere', href: '/guides/how-much-do-custom-channel-letters-cost' }, { label: 'Luce frontale o halo', href: '/guides/front-lit-vs-halo-lit-channel-letters' }, { label: 'Richiedi consulenza', href: '/contact' },
      ] },
    ],
    emailLabel: 'E-mail', whatsappLabel: 'Responsabile tecnico', copyright: '© 2026', delivery: 'Ambito di consegna DDP', backToTop: 'Torna in alto', whatsappAria: 'Chat su WhatsApp', quoteAria: 'Richiedi un preventivo per il progetto', quoteLabel: 'Preventivo gratuito',
  },
  nl: {
    tagline: 'Wereldwijde standaard in architectonische bewegwijzering en precisiefabricage.',
    columns: [
      { heading: 'Productlijnen', links: [
        { label: 'Bewegwijzeringssystemen', href: '/products/architectural-wayfinding-system' }, { label: 'Halo-verlichte letters', href: '/products/custom-halo-lit-letters' }, { label: 'LED-lichtbakken', href: '/products/ultra-slim-led-light-box' }, { label: 'Monumentborden', href: '/products/outdoor-pylon-monument-sign' }, { label: 'LED-neonborden', href: '/products/custom-led-neon-sign' }, { label: 'Metalen en acryl borden', href: '/products/metal-acrylic-logo-sign' }, { label: 'Alle producten →', href: '/products' },
      ] },
      { heading: 'Bedrijf', links: [
        { label: 'Productielocatie', href: '/about' }, { label: 'Projectportfolio', href: '/projects' }, { label: 'Bronnen en FAQ', href: '/faq' }, { label: 'Kostengids kanaalletters', href: '/guides/how-much-do-custom-channel-letters-cost' }, { label: 'Front- of haloverlichting', href: '/guides/front-lit-vs-halo-lit-channel-letters' }, { label: 'Advies aanvragen', href: '/contact' },
      ] },
    ],
    emailLabel: 'E-mail', whatsappLabel: 'Technische contactpersoon', copyright: '© 2026', delivery: 'DDP-leveringsomvang', backToTop: 'Naar boven', whatsappAria: 'Chat via WhatsApp', quoteAria: 'Vraag een offerte voor een bewegwijzeringsproject', quoteLabel: 'Gratis offerte',
  },
  pl: {
    tagline: 'Globalny standard oznakowania architektonicznego i precyzyjnej produkcji.',
    columns: [
      { heading: 'Linie produktów', links: [
        { label: 'Systemy wayfinding', href: '/products/architectural-wayfinding-system' }, { label: 'Litery z poświatą', href: '/products/custom-halo-lit-letters' }, { label: 'Kasetony LED', href: '/products/ultra-slim-led-light-box' }, { label: 'Pylony i znaki monumentalne', href: '/products/outdoor-pylon-monument-sign' }, { label: 'Neony LED', href: '/products/custom-led-neon-sign' }, { label: 'Znaki metalowe i akrylowe', href: '/products/metal-acrylic-logo-sign' }, { label: 'Zobacz wszystkie produkty →', href: '/products' },
      ] },
      { heading: 'Firma', links: [
        { label: 'Baza produkcyjna', href: '/about' }, { label: 'Portfolio realizacji', href: '/projects' }, { label: 'Materiały i FAQ', href: '/faq' }, { label: 'Przewodnik po kosztach liter', href: '/guides/how-much-do-custom-channel-letters-cost' }, { label: 'Oświetlenie frontowe i halo', href: '/guides/front-lit-vs-halo-lit-channel-letters' }, { label: 'Skonsultuj projekt', href: '/contact' },
      ] },
    ],
    emailLabel: 'E-mail', whatsappLabel: 'Kontakt techniczny', copyright: '© 2026', delivery: 'Zakres dostawy DDP', backToTop: 'Do góry', whatsappAria: 'Napisz przez WhatsApp', quoteAria: 'Poproś o bezpłatną wycenę projektu', quoteLabel: 'Bezpłatna wycena',
  },
};

/** Headings that repeat in every language, plus the social list and Alibaba. */
export const footerStatic = {
  socialHeading: {
    en: 'Social Identity',
    ja: 'ソーシャル',
    ko: '소셜',
    ar: 'التواصل الاجتماعي',
    es: 'Redes sociales',
    ru: 'Соцсети',
    de: 'Soziale Netzwerke',
    fr: 'Réseaux sociaux',
    zh: '社交媒体', pt: 'Redes sociais', it: 'Social', nl: 'Sociale media', pl: 'Media społecznościowe',
  } as Record<Locale, string>,
  connectHeading: {
    en: 'B2B Connect',
    ja: 'B2B窓口',
    ko: 'B2B 연락처',
    ar: 'تواصل B2B',
    es: 'Contacto B2B',
    ru: 'Контакты B2B',
    de: 'B2B-Kontakt',
    fr: 'Contact B2B',
    zh: 'B2B 联系', pt: 'Contacto B2B', it: 'Contatto B2B', nl: 'B2B-contact', pl: 'Kontakt B2B',
  } as Record<Locale, string>,
  socialLinks: [
    { label: 'LinkedIn', key: 'linkedin' },
    { label: 'Twitter (X)', key: 'twitter' },
    { label: 'TikTok', key: 'tiktok' },
  ] as { label: string; key: 'linkedin' | 'twitter' | 'tiktok' }[],
  alibaba: { label: 'Alibaba', href: 'https://dlzydbs.en.alibaba.com/?spm=a2700.micro_cgs_home.0.0.2f073e5fBh410q' },
};
