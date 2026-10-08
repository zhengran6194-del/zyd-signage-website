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
export type Locale = 'en' | 'ja' | 'ko' | 'ar' | 'es' | 'ru' | 'de' | 'fr';

export const DEFAULT_LOCALE: Locale = 'en';

/** The locales that have a subtree, in the order they are listed in the UI. */
export const LOCALES: Locale[] = ['en', 'ja', 'ko', 'ar', 'es', 'ru', 'de', 'fr'];

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
};

const TRANSLATED_LOCALES: Locale[] = ['ja', 'ko', 'ar', 'es', 'ru', 'de', 'fr'];

export const localeFromPath = (pathname: string): Locale => {
  for (const locale of TRANSLATED_LOCALES) {
    const prefix = LOCALE_PREFIX[locale];
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return locale;
  }
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

/**
 * The other translated trees are home pages only so far, so any other page
 * falls back to that language's home page.
 */
const homeOnlyRouteFor: Partial<Record<Locale, string>> = {
  ko: '/ko',
  ar: '/ar',
  es: '/es',
  ru: '/ru',
  de: '/de',
  fr: '/fr',
};

/** The page in the given language for an English path, or that language's home. */
export const toLocale = (pathname: string, locale: Locale): string => {
  if (locale === 'en') return toEnglish(pathname);
  if (locale === 'ja') return japaneseRouteFor[pathname] ?? '/ja';
  return homeOnlyRouteFor[locale] ?? '/';
};

/**
 * The English route for a translated path. Every translated page mirrors an
 * English page that already exists, so dropping the prefix is enough.
 */
export const toEnglish = (pathname: string): string => {
  const stripped = pathname.replace(/^\/(ja|ko|ar|es|ru|de|fr)(?=\/|$)/, '');
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
};

/** Trigger label and panel heading of the language switch, per language. */
export const languageSwitchCopy: Record<Locale, { label: string; panelTitle: string }> = {
  en: { label: 'Languages', panelTitle: 'Choose a language' },
  ja: { label: '言語', panelTitle: '言語を選択' },
  ko: { label: '언어', panelTitle: '언어 선택' },
  ar: { label: 'اللغات', panelTitle: 'اختر اللغة' },
  es: { label: 'Idiomas', panelTitle: 'Elige un idioma' },
  ru: { label: 'Языки', panelTitle: 'Выберите язык' },
  de: { label: 'Sprachen', panelTitle: 'Sprache wählen' },
  fr: { label: 'Langues', panelTitle: 'Choisir une langue' },
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
  } as Record<Locale, string>,
  socialLinks: [
    { label: 'LinkedIn', key: 'linkedin' },
    { label: 'Twitter (X)', key: 'twitter' },
    { label: 'TikTok', key: 'tiktok' },
  ] as { label: string; key: 'linkedin' | 'twitter' | 'tiktok' }[],
  alibaba: { label: 'Alibaba', href: 'https://dlzydbs.en.alibaba.com/?spm=a2700.micro_cgs_home.0.0.2f073e5fBh410q' },
};
