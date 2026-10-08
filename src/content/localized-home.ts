/**
 * Home page copy for the translated trees.
 *
 * Every language follows the same seven sections as the English home page and
 * states only what the English pages already publish: the 2006 founding year,
 * the 20-year trading history, the 20,000m² production base, the eight-step
 * process, MOQ 1, the 7–14 day lead time and DDP shipping by quotation. No
 * certification, price, warranty period, service life or customer count is added
 * anywhere. Products and guides are published in English only, so their links
 * point at the pages that exist.
 */
export type LocalizedHomeContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; intro: string; primary: string; secondary: string; imageAlt: string };
  trust: { value: string; label: string }[];
  process: { eyebrow: string; heading: string; intro: string; steps: { no: string; title: string; desc: string }[] };
  products: { eyebrow: string; heading: string; intro: string; items: { name: string; href: string }[] };
  quality: { eyebrow: string; heading: string; intro: string; imageAlt: string; points: { title: string; desc: string }[] };
  why: { eyebrow: string; heading: string; intro: string; items: { title: string; desc: string }[] };
  guides: { eyebrow: string; heading: string; intro: string; readLabel: string; items: { title: string; href: string }[] };
  cta: {
    heading: string;
    intro: string;
    quote: string;
    whatsappLabel: string;
    whatsappMessage: string;
    briefProduct: string;
    briefHeading: string;
    briefItems: string[];
    briefFootnote: string;
    emailNote: string;
  };
};

/**
 * What each language supplies: the copy, plus the product and guide names that
 * are paired with the shared links. The step numbers are added by `build`.
 */
type LocalizedHomeCopy = Omit<LocalizedHomeContent, 'process' | 'products' | 'guides'> & {
  process: { eyebrow: string; heading: string; intro: string; steps: { title: string; desc: string }[] };
  products: { eyebrow: string; heading: string; intro: string };
  productNames: string[];
  guides: { eyebrow: string; heading: string; intro: string; readLabel: string };
  guideTitles: string[];
};

/** The product and guide pages the home pages link to; the order is shared. */
const productHrefs = [
  '/products/custom-halo-lit-letters',
  '/products/architectural-wayfinding-system',
  '/products/medical-care-signage',
  '/products/outdoor-pylon-monument-sign',
  '/products/ultra-slim-led-light-box',
  '/products/custom-led-neon-sign',
  '/products/metal-acrylic-logo-sign',
  '/products/custom-landscape-furniture',
  '/products/complete-signage-system',
  '/products/outdoor-waste-bin',
  '/products/custom-planter-box',
  '/products/acrylic-desk-sign',
  '/products/portable-metal-a-frame-sign',
];

const guideHrefs = [
  '/guides/how-much-do-custom-channel-letters-cost',
  '/guides/front-lit-vs-halo-lit-channel-letters',
  '/guides/how-to-choose-the-right-sign-for-your-business',
  '/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs',
];

const STEP_NUMBERS = ['01', '02', '03', '04', '05', '06', '07', '08'];

const build = (copy: LocalizedHomeCopy): LocalizedHomeContent => ({
  ...copy,
  process: {
    ...copy.process,
    steps: copy.process.steps.map((step, index) => ({ ...step, no: STEP_NUMBERS[index] })),
  },
  products: {
    ...copy.products,
    items: copy.productNames.map((name, index) => ({ name, href: productHrefs[index] })),
  },
  guides: {
    ...copy.guides,
    items: copy.guideTitles.map((title, index) => ({ title, href: guideHrefs[index] })),
  },
});

const arabic: LocalizedHomeCopy = {
  meta: {
    title: 'لافتات مخصصة بتصنيع مباشر من المصنع',
    description:
      'لافتات مخصصة للفنادق والمراكز التجارية والمجمعات الصناعية، تُصنَّع في مصنعنا وفق المواصفات وتُسلَّم بشحن DDP إلى جميع أنحاء العالم.',
  },
  hero: {
    eyebrow: 'تصنيع لافتات مباشر من المصنع',
    h1: 'لافتات مخصصة مباشرة من المصنع',
    intro:
      'منذ عام 2006 نصنّع لافتات مخصصة لمشاريع الفنادق والمراكز التجارية والمجمعات الصناعية. تُختار المواد والتشطيبات وفق بيئة التركيب.',
    primary: 'نموذج ثلاثي الأبعاد مجاني وعرض سعر',
    secondary: 'عرض خطوط المنتجات',
    imageAlt: 'قاعدة إنتاج ZYD Signage',
  },
  trust: [
    { value: 'EST. 2006', label: 'تأسست عام 2006' },
    { value: '20 YEARS', label: 'خبرة في القطاع' },
    { value: '20,000m²', label: 'قاعدة إنتاج خاصة' },
    { value: 'GLOBAL DDP', label: 'شحن DDP عالمي' },
  ],
  process: {
    eyebrow: 'Industrial Excellence',
    heading: 'ثماني مراحل للتصنيع',
    intro: 'نجمع بين خبرة التصنيع والتحقق في كل مرحلة لإنتاج لافتات تخص كل مشروع.',
    steps: [
      { title: 'الاستشارة الفنية', desc: 'نحلل متطلبات اللافتة وظروف التركيب.' },
      { title: 'نموذج ثلاثي الأبعاد دقيق', desc: 'تُراجع النتيجة النهائية بنموذج ثلاثي الأبعاد.' },
      { title: 'مخططات التنفيذ', desc: 'تُعدّ مخططات تفصيلية للهيكل والتوصيلات الكهربائية.' },
      { title: 'التصنيع بالتحكم الرقمي', desc: 'قطع وتجميع بدقة عالية.' },
      { title: 'الطلاء', desc: 'تُطبَّق تشطيبات مناسبة لبيئة التركيب.' },
      { title: 'تجميع إضاءة LED', desc: 'تُجمَّع وحدات LED والتوصيلات وفق المواصفات.' },
      { title: 'فحص الإضاءة', desc: 'تحقق في كل مرحلة، بما في ذلك اختبار الإضاءة.' },
      { title: 'شحن DDP عالمي', desc: 'تغليف صناعي ولوجستيات من الباب إلى الباب.' },
    ],
  },
  products: {
    eyebrow: 'Product Lines',
    heading: 'خطوط منتجات اللافتات',
    intro: 'تُصنَّع وفق المواصفات لمشاريع معمارية حول العالم. صفحات المنتجات متوفرة بالإنجليزية.',
  },
  productNames: [
    'حروف بإضاءة خلفية',
    'أنظمة لافتات التوجيه',
    'لافتات المرافق الطبية',
    'لافتات نصب وأعمدة',
    'صناديق إضاءة LED',
    'لافتات نيون LED',
    'لافتات شعارات معدنية وأكريليك',
    'أثاث الحدائق',
    'نظام لافتات متكامل',
    'سلال نفايات خارجية',
    'أحواض نباتات مخصصة',
    'لافتات مكتبية أكريليك',
    'لافتة حاملة معدنية محمولة',
  ],
  quality: {
    eyebrow: 'Quality Assurance',
    heading: 'معايير الجودة والتحقق من المطابقة',
    intro: 'تُراجَع الشهادات واختيار المكوّنات ومتطلبات السلامة الكهربائية وفق مواصفات المشروع وظروف التسليم.',
    imageAlt: 'فحص الجودة في مصنع ZYD Signage',
    points: [
      { title: 'ضبط الجودة', desc: 'يُتحقق من المراحل لكل مشروع.' },
      { title: 'المتطلبات الكهربائية', desc: 'تُراجَع وفق ظروف جهة التسليم.' },
      { title: 'نطاق الفحص', desc: 'يُتفق عليه قبل الإنتاج.' },
      { title: 'اختيار المكونات', desc: 'تُختار وفق المواصفات.' },
    ],
  },
  why: {
    eyebrow: 'Why Work Direct',
    heading: 'تصنيع متكامل يخص كل مشروع',
    intro: 'من ضبط المواصفات إلى الإنتاج وفحص الجودة والشحن العالمي في مسار واحد.',
    items: [
      { title: 'مباشرة من المصنع', desc: 'إنتاج داخلي مرتبط مباشرة بفريق المشروع.' },
      { title: 'ضبط الجودة', desc: 'مراحل راسخة وتحقق نهائي لكل مشروع.' },
      { title: 'شحن DDP عالمي', desc: 'دعم شحن عالمي لبرامج اللافتات.' },
      { title: 'OEM / ODM', desc: 'تنسيق فني مع شركات التنفيذ والمكاتب الهندسية والعلامات.' },
    ],
  },
  guides: {
    eyebrow: 'Signage Insights',
    heading: 'أدلة تساعدك قبل الطلب',
    intro: 'ملخص للنقاط الفنية التي يُستحسن مراجعتها قبل الطلب (بالإنجليزية).',
    readLabel: 'قراءة الدليل',
  },
  guideTitles: [
    'كيف تُحدَّد تكلفة حروف القنوات',
    'الفرق بين الإضاءة الأمامية والخلفية',
    'كيف تختار اللافتة المناسبة لنشاطك',
    'مواد اللافتات الخارجية: الفولاذ المقاوم 304 مقابل المجلفن',
  ],
  cta: {
    heading: 'طلب عرض سعر',
    intro: 'يتولى فريقنا الهندسي الاستشارة الفنية وأسعار المصنع المباشر.',
    quote: 'عرض سعر مجاني',
    whatsappLabel: 'إرسال المخططات',
    whatsappMessage: 'مرحبًا Aaron، أرغب في إرسال مخططات مشروع لافتات.',
    briefProduct: 'مشروع لافتات',
    briefHeading: 'المعلومات المطلوبة',
    briefItems: [
      'المخططات أو ملف الشعار',
      'أنواع اللافتات والأبعاد والكميات',
      'الموقع داخل المبنى أو خارجه وسطح التركيب',
      'التشطيب واتجاه الإضاءة',
      'صور موقع التركيب وبلد التسليم',
    ],
    briefFootnote:
      'أرسل ما هو متوفر لديك: المخططات، الأبعاد التقريبية، الكمية، التشطيب أو اتجاه الإضاءة، صور الموقع وبلد التسليم.',
    emailNote: 'للمراسلة بالبريد الإلكتروني:',
  },
};

const spanish: LocalizedHomeCopy = {
  meta: {
    title: 'Señalización a medida fabricada en fábrica',
    description:
      'Señalización a medida para hoteles, centros comerciales y parques industriales, fabricada en nuestra planta según especificación y entregada con envío DDP a todo el mundo.',
  },
  hero: {
    eyebrow: 'Fabricación de señalización directa de fábrica',
    h1: 'Señalización a medida directa de fábrica',
    intro:
      'Desde 2006 fabricamos señalización a medida para proyectos de hoteles, centros comerciales y parques industriales. Los materiales y acabados se eligen según el entorno de instalación.',
    primary: 'Maqueta 3D y presupuesto gratis',
    secondary: 'Ver líneas de producto',
    imageAlt: 'Base de producción de ZYD Signage',
  },
  trust: [
    { value: 'EST. 2006', label: 'Fundada en 2006' },
    { value: '20 YEARS', label: 'Trayectoria en el sector' },
    { value: '20,000m²', label: 'Planta de producción propia' },
    { value: 'GLOBAL DDP', label: 'Envío DDP mundial' },
  ],
  process: {
    eyebrow: 'Industrial Excellence',
    heading: 'Ocho etapas de fabricación',
    intro: 'Combinamos experiencia de fabricación y verificación en cada etapa para producir la señalización de cada proyecto.',
    steps: [
      { title: 'Consulta técnica', desc: 'Analizamos los requisitos y las condiciones de instalación.' },
      { title: 'Maqueta 3D precisa', desc: 'El resultado se revisa primero en 3D.' },
      { title: 'Planos de taller', desc: 'Se preparan planos detallados de estructura y cableado.' },
      { title: 'Fabricación CNC', desc: 'Corte y montaje de alta precisión.' },
      { title: 'Pintura', desc: 'Se aplican acabados adecuados al entorno de instalación.' },
      { title: 'Montaje LED', desc: 'Se montan módulos LED y cableado según especificación.' },
      { title: 'Inspección de iluminación', desc: 'Verificación por etapa, incluida la prueba de encendido.' },
      { title: 'Envío DDP mundial', desc: 'Embalaje industrial y logística puerta a puerta.' },
    ],
  },
  products: {
    eyebrow: 'Product Lines',
    heading: 'Líneas de producto de señalización',
    intro: 'Fabricadas según especificación para proyectos arquitectónicos de todo el mundo. Las páginas de producto están en inglés.',
  },
  productNames: [
    'Letras con luz posterior',
    'Sistemas de señalización de orientación',
    'Señalización para centros sanitarios',
    'Señales monumentales y pilonos',
    'Cajas de luz LED',
    'Letreros de neón LED',
    'Señales de logotipo en metal y acrílico',
    'Mobiliario urbano paisajístico',
    'Sistema integral de señalización',
    'Papeleras exteriores',
    'Jardineras a medida',
    'Señales de escritorio de acrílico',
    'Señal de caballete metálico portátil',
  ],
  quality: {
    eyebrow: 'Quality Assurance',
    heading: 'Criterios de calidad y verificación',
    intro: 'Las certificaciones, la selección de componentes y los requisitos eléctricos se revisan según la especificación y el destino.',
    imageAlt: 'Verificación de calidad en la fábrica de ZYD Signage',
    points: [
      { title: 'Control de calidad', desc: 'Se verifica el proceso en cada proyecto.' },
      { title: 'Requisitos eléctricos', desc: 'Se revisan según las condiciones de destino.' },
      { title: 'Alcance de inspección', desc: 'Se acuerda antes de producir.' },
      { title: 'Selección de componentes', desc: 'Se eligen según especificación.' },
    ],
  },
  why: {
    eyebrow: 'Why Work Direct',
    heading: 'Fabricación coherente para cada proyecto',
    intro: 'Del ajuste de especificaciones a la producción, la verificación y el envío mundial, en un solo flujo.',
    items: [
      { title: 'Directo de fábrica', desc: 'Producción propia conectada al equipo del proyecto.' },
      { title: 'Control de calidad', desc: 'Procesos establecidos y verificación final por proyecto.' },
      { title: 'Envío DDP mundial', desc: 'Soporte de envío global para programas de señalización.' },
      { title: 'OEM / ODM', desc: 'Coordinación técnica con instaladores, estudios y marcas.' },
    ],
  },
  guides: {
    eyebrow: 'Signage Insights',
    heading: 'Guías útiles antes de pedir',
    intro: 'Un resumen de los puntos técnicos que conviene revisar antes de pedir (en inglés).',
    readLabel: 'Leer la guía',
  },
  guideTitles: [
    'Cómo se determina el coste de las letras canal',
    'Diferencia entre iluminación frontal y posterior',
    'Cómo elegir la señal adecuada para tu negocio',
    'Materiales para exterior: acero 304 frente a galvanizado',
  ],
  cta: {
    heading: 'Solicitar presupuesto',
    intro: 'Nuestro equipo de ingeniería atiende la consulta técnica y el precio directo de fábrica.',
    quote: 'Presupuesto gratis',
    whatsappLabel: 'Enviar planos',
    whatsappMessage: 'Hola Aaron, quiero enviar los planos de un proyecto de señalización.',
    briefProduct: 'proyecto de señalización',
    briefHeading: 'Información que conviene enviar',
    briefItems: [
      'Planos o archivo del logotipo',
      'Tipos de señal, dimensiones aproximadas y cantidades',
      'Ubicación interior o exterior y superficie de montaje',
      'Acabado y dirección de la iluminación',
      'Fotos del lugar y país de entrega',
    ],
    briefFootnote:
      'Envíe lo que tenga: planos, dimensiones aproximadas, cantidad, acabado o dirección de la iluminación, fotos del lugar y país de entrega.',
    emailNote: 'Para escribir por correo:',
  },
};

const russian: LocalizedHomeCopy = {
  meta: {
    title: 'Вывески на заказ напрямую с производства',
    description:
      'Вывески на заказ для отелей, торговых центров и промышленных парков: изготовление по спецификации на собственном производстве и доставка DDP по всему миру.',
  },
  hero: {
    eyebrow: 'Производство вывесок напрямую с завода',
    h1: 'Вывески на заказ напрямую с производства',
    intro:
      'С 2006 года мы изготавливаем вывески на заказ для проектов отелей, торговых центров и промышленных парков. Материалы и отделка подбираются под условия установки.',
    primary: 'Бесплатный 3D-макет и расчёт',
    secondary: 'Смотреть линейки продукции',
    imageAlt: 'Производственная площадка ZYD Signage',
  },
  trust: [
    { value: 'EST. 2006', label: 'Основана в 2006 году' },
    { value: '20 YEARS', label: 'Опыт в отрасли' },
    { value: '20,000m²', label: 'Собственное производство' },
    { value: 'GLOBAL DDP', label: 'Доставка DDP по миру' },
  ],
  process: {
    eyebrow: 'Industrial Excellence',
    heading: 'Восемь этапов производства',
    intro: 'Мы соединяем производственный опыт с проверкой на каждом этапе.',
    steps: [
      { title: 'Техническая консультация', desc: 'Анализируем требования и условия установки.' },
      { title: 'Точный 3D-макет', desc: 'Результат сначала проверяется в 3D.' },
      { title: 'Рабочие чертежи', desc: 'Готовим детальные чертежи конструкции и проводки.' },
      { title: 'Изготовление на ЧПУ', desc: 'Высокоточная резка и сборка.' },
      { title: 'Окраска', desc: 'Наносим отделку, подходящую для условий установки.' },
      { title: 'Сборка LED', desc: 'Монтируем LED-модули и проводку по спецификации.' },
      { title: 'Проверка подсветки', desc: 'Проверка на каждом этапе, включая тест включения.' },
      { title: 'Доставка DDP', desc: 'Промышленная упаковка и логистика «от двери до двери».' },
    ],
  },
  products: {
    eyebrow: 'Product Lines',
    heading: 'Линейки вывесок',
    intro: 'Изготавливаются по спецификации для архитектурных проектов по всему миру. Страницы продукции доступны на английском.',
  },
  productNames: [
    'Буквы с контровой подсветкой',
    'Системы навигационных вывесок',
    'Вывески для медицинских объектов',
    'Монументальные и пилонные вывески',
    'LED-лайтбоксы',
    'LED-неоновые вывески',
    'Металло-акриловые логотипы',
    'Ландшафтная мебель',
    'Комплексная система вывесок',
    'Уличные урны',
    'Индивидуальные кашпо',
    'Акриловые настольные таблички',
    'Металлическая вывеска-штендер',
  ],
  quality: {
    eyebrow: 'Quality Assurance',
    heading: 'Критерии качества и подтверждение соответствия',
    intro: 'Сертификаты, подбор комплектующих и требования электробезопасности проверяются по спецификации и условиям поставки.',
    imageAlt: 'Контроль качества на производстве ZYD Signage',
    points: [
      { title: 'Контроль качества', desc: 'Проверка этапов по каждому проекту.' },
      { title: 'Электрические требования', desc: 'Проверяются по условиям места поставки.' },
      { title: 'Объём проверки', desc: 'Согласуется до начала производства.' },
      { title: 'Подбор комплектующих', desc: 'Подбираются по спецификации.' },
    ],
  },
  why: {
    eyebrow: 'Why Work Direct',
    heading: 'Согласованное производство для каждого проекта',
    intro: 'От согласования спецификации до производства, проверки и мировой доставки — в одном потоке.',
    items: [
      { title: 'Напрямую с завода', desc: 'Собственное производство, связанное с командой проекта.' },
      { title: 'Контроль качества', desc: 'Устоявшиеся процессы и финальная проверка по проекту.' },
      { title: 'Доставка DDP', desc: 'Поддержка мировой логистики для программ вывесок.' },
      { title: 'OEM / ODM', desc: 'Техническая координация с подрядчиками, бюро и брендами.' },
    ],
  },
  guides: {
    eyebrow: 'Signage Insights',
    heading: 'Руководства перед заказом',
    intro: 'Кратко о технических моментах, которые стоит проверить до заказа (на английском).',
    readLabel: 'Читать руководство',
  },
  guideTitles: [
    'Из чего складывается стоимость объёмных букв',
    'Разница между лицевой и контровой подсветкой',
    'Как выбрать подходящую вывеску для бизнеса',
    'Материалы для улицы: нержавеющая сталь 304 или оцинкованная',
  ],
  cta: {
    heading: 'Запрос расчёта',
    intro: 'Наша инженерная команда отвечает за техническую консультацию и цену напрямую с завода.',
    quote: 'Бесплатный расчёт',
    whatsappLabel: 'Отправить чертежи',
    whatsappMessage: 'Здравствуйте, Aaron. Хочу отправить чертежи проекта вывесок.',
    briefProduct: 'проект вывесок',
    briefHeading: 'Информация, которую стоит отправить',
    briefItems: [
      'Чертежи или файл логотипа',
      'Типы вывесок, примерные размеры и количество',
      'Внутри или снаружи, поверхность монтажа',
      'Отделка и направление подсветки',
      'Фотографии места установки и страна доставки',
    ],
    briefFootnote:
      'Отправьте то, что есть: чертежи, примерные размеры, количество, отделку или направление подсветки, фото места и страну доставки.',
    emailNote: 'Для письма по электронной почте:',
  },
};

const german: LocalizedHomeCopy = {
  meta: {
    title: 'Individuelle Beschilderung direkt ab Werk',
    description:
      'Individuelle Beschilderung für Hotels, Einkaufszentren und Industrieparks: Fertigung nach Spezifikation im eigenen Werk und DDP-Versand weltweit.',
  },
  hero: {
    eyebrow: 'Beschilderung direkt ab Werk',
    h1: 'Individuelle Beschilderung direkt ab Werk',
    intro:
      'Seit 2006 fertigen wir individuelle Beschilderung für Hotel-, Einkaufszentrums- und Industrieprojekte. Material und Oberfläche richten sich nach der Einbausituation.',
    primary: 'Kostenloses 3D-Modell und Angebot',
    secondary: 'Produktlinien ansehen',
    imageAlt: 'Produktionsstandort von ZYD Signage',
  },
  trust: [
    { value: 'EST. 2006', label: 'Gegründet 2006' },
    { value: '20 YEARS', label: 'Branchenerfahrung' },
    { value: '20,000m²', label: 'Eigene Produktion' },
    { value: 'GLOBAL DDP', label: 'Weltweiter DDP-Versand' },
  ],
  process: {
    eyebrow: 'Industrial Excellence',
    heading: 'Acht Fertigungsschritte',
    intro: 'Wir verbinden Fertigungserfahrung mit einer Prüfung in jeder Stufe.',
    steps: [
      { title: 'Technische Beratung', desc: 'Wir analysieren Anforderungen und Einbaubedingungen.' },
      { title: 'Präzises 3D-Modell', desc: 'Das Ergebnis wird zuerst in 3D geprüft.' },
      { title: 'Werkstattzeichnungen', desc: 'Detaillierte Pläne für Konstruktion und Verkabelung.' },
      { title: 'CNC-Fertigung', desc: 'Hochpräzises Schneiden und Montieren.' },
      { title: 'Beschichtung', desc: 'Oberflächen passend zur Einbausituation.' },
      { title: 'LED-Montage', desc: 'LED-Module und Verkabelung nach Spezifikation.' },
      { title: 'Beleuchtungsprüfung', desc: 'Prüfung je Stufe, einschließlich Lichttest.' },
      { title: 'Weltweiter DDP-Versand', desc: 'Industrieverpackung und Tür-zu-Tür-Logistik.' },
    ],
  },
  products: {
    eyebrow: 'Product Lines',
    heading: 'Produktlinien für Beschilderung',
    intro: 'Fertigung nach Spezifikation für Architekturprojekte weltweit. Die Produktseiten sind auf Englisch.',
  },
  productNames: [
    'Halo-Leuchtbuchstaben',
    'Wegeleitsysteme',
    'Beschilderung für Gesundheitseinrichtungen',
    'Monumental- und Pylonschilder',
    'LED-Lichtkästen',
    'LED-Neonschilder',
    'Metall-Acryl-Logoschilder',
    'Landschaftsmöbel',
    'Ganzheitliches Beschilderungssystem',
    'Außen-Abfallbehälter',
    'Individuelle Pflanzgefäße',
    'Acryl-Tischschilder',
    'Tragbares Metall-Aufsteller-Schild',
  ],
  quality: {
    eyebrow: 'Quality Assurance',
    heading: 'Qualitätskriterien und Konformität',
    intro: 'Zertifikate, Komponentenauswahl und elektrische Anforderungen werden nach Spezifikation und Lieferziel geprüft.',
    imageAlt: 'Qualitätsprüfung im Werk von ZYD Signage',
    points: [
      { title: 'Qualitätskontrolle', desc: 'Die Stufen werden je Projekt geprüft.' },
      { title: 'Elektrische Anforderungen', desc: 'Prüfung nach den Bedingungen am Lieferort.' },
      { title: 'Prüfumfang', desc: 'Wird vor der Fertigung vereinbart.' },
      { title: 'Komponentenauswahl', desc: 'Auswahl nach Spezifikation.' },
    ],
  },
  why: {
    eyebrow: 'Why Work Direct',
    heading: 'Abgestimmte Fertigung für jedes Projekt',
    intro: 'Von der Spezifikation über Fertigung und Prüfung bis zum weltweiten Versand in einem Ablauf.',
    items: [
      { title: 'Direkt ab Werk', desc: 'Eigene Fertigung, direkt am Projektteam.' },
      { title: 'Qualitätskontrolle', desc: 'Etablierte Prozesse und Endprüfung je Projekt.' },
      { title: 'Weltweiter DDP-Versand', desc: 'Globale Versandunterstützung für Beschilderungsprogramme.' },
      { title: 'OEM / ODM', desc: 'Technische Abstimmung mit Ausführenden, Büros und Marken.' },
    ],
  },
  guides: {
    eyebrow: 'Signage Insights',
    heading: 'Ratgeber vor der Anfrage',
    intro: 'Kurz zusammengefasst, welche technischen Punkte vor der Anfrage zu prüfen sind (auf Englisch).',
    readLabel: 'Ratgeber lesen',
  },
  guideTitles: [
    'Wie sich der Preis von Kanalbuchstaben ergibt',
    'Unterschied zwischen Front- und Halo-Beleuchtung',
    'Das passende Schild für Ihr Unternehmen wählen',
    'Außenmaterialien: Edelstahl 304 oder verzinkter Stahl',
  ],
  cta: {
    heading: 'Angebot anfragen',
    intro: 'Unser Engineering-Team übernimmt die technische Beratung und den Preis direkt ab Werk.',
    quote: 'Kostenloses Angebot',
    whatsappLabel: 'Zeichnungen senden',
    whatsappMessage: 'Hallo Aaron, ich möchte Zeichnungen für ein Beschilderungsprojekt senden.',
    briefProduct: 'Beschilderungsprojekt',
    briefHeading: 'Sinnvolle Angaben',
    briefItems: [
      'Zeichnungen oder Logodatei',
      'Schildarten, ungefähre Maße und Mengen',
      'Innen- oder Außenbereich und Montagefläche',
      'Oberfläche und Lichtrichtung',
      'Fotos des Standorts und Lieferland',
    ],
    briefFootnote:
      'Senden Sie, was Sie haben: Zeichnungen, ungefähre Maße, Menge, Oberfläche oder Lichtrichtung, Fotos des Standorts und Lieferland.',
    emailNote: 'Per E-Mail:',
  },
};

const french: LocalizedHomeCopy = {
  meta: {
    title: 'Enseignes sur mesure fabriquées en usine',
    description:
      'Enseignes sur mesure pour hôtels, centres commerciaux et parcs industriels : fabrication selon cahier des charges dans notre usine et livraison DDP dans le monde entier.',
  },
  hero: {
    eyebrow: 'Fabrication d’enseignes en direct d’usine',
    h1: 'Enseignes sur mesure en direct d’usine',
    intro:
      'Depuis 2006, nous fabriquons des enseignes sur mesure pour des projets d’hôtels, de centres commerciaux et de parcs industriels. Les matériaux et finitions sont choisis selon l’environnement d’installation.',
    primary: 'Maquette 3D et devis gratuits',
    secondary: 'Voir les gammes de produits',
    imageAlt: 'Site de production de ZYD Signage',
  },
  trust: [
    { value: 'EST. 2006', label: 'Fondée en 2006' },
    { value: '20 YEARS', label: 'Expérience du secteur' },
    { value: '20,000m²', label: 'Site de production propre' },
    { value: 'GLOBAL DDP', label: 'Expédition DDP mondiale' },
  ],
  process: {
    eyebrow: 'Industrial Excellence',
    heading: 'Huit étapes de fabrication',
    intro: 'Nous associons expérience de fabrication et contrôle à chaque étape.',
    steps: [
      { title: 'Consultation technique', desc: 'Nous analysons les besoins et les conditions d’installation.' },
      { title: 'Maquette 3D précise', desc: 'Le rendu est d’abord validé en 3D.' },
      { title: 'Plans d’atelier', desc: 'Plans détaillés de structure et de câblage.' },
      { title: 'Fabrication CNC', desc: 'Découpe et assemblage de haute précision.' },
      { title: 'Peinture', desc: 'Finitions adaptées à l’environnement d’installation.' },
      { title: 'Assemblage LED', desc: 'Modules LED et câblage selon le cahier des charges.' },
      { title: 'Contrôle d’éclairage', desc: 'Vérification à chaque étape, essai d’allumage compris.' },
      { title: 'Expédition DDP mondiale', desc: 'Emballage industriel et logistique porte-à-porte.' },
    ],
  },
  products: {
    eyebrow: 'Product Lines',
    heading: 'Gammes d’enseignes',
    intro: 'Fabriquées selon cahier des charges pour des projets architecturaux dans le monde entier. Les pages produits sont en anglais.',
  },
  productNames: [
    'Lettres rétro-éclairées',
    'Systèmes de signalétique d’orientation',
    'Signalétique pour établissements de santé',
    'Enseignes monumentales et pylônes',
    'Caissons LED',
    'Enseignes néon LED',
    'Enseignes logo métal et acrylique',
    'Mobilier paysager',
    'Système de signalétique complet',
    'Corbeilles extérieures',
    'Jardinières sur mesure',
    'Chevalets de table en acrylique',
    'Panneau chevalet métallique portable',
  ],
  quality: {
    eyebrow: 'Quality Assurance',
    heading: 'Critères de qualité et conformité',
    intro: 'Les certificats, le choix des composants et les exigences électriques sont vérifiés selon le cahier des charges et la destination.',
    imageAlt: 'Contrôle qualité dans l’usine ZYD Signage',
    points: [
      { title: 'Contrôle qualité', desc: 'Les étapes sont vérifiées pour chaque projet.' },
      { title: 'Exigences électriques', desc: 'Vérifiées selon les conditions du lieu de livraison.' },
      { title: 'Périmètre de contrôle', desc: 'Défini avant la fabrication.' },
      { title: 'Choix des composants', desc: 'Sélectionnés selon le cahier des charges.' },
    ],
  },
  why: {
    eyebrow: 'Why Work Direct',
    heading: 'Une fabrication cohérente pour chaque projet',
    intro: 'De la définition des spécifications à la fabrication, au contrôle et à l’expédition mondiale, en un seul flux.',
    items: [
      { title: 'En direct d’usine', desc: 'Production interne reliée à l’équipe projet.' },
      { title: 'Contrôle qualité', desc: 'Process établis et vérification finale par projet.' },
      { title: 'Expédition DDP mondiale', desc: 'Support logistique mondial pour les programmes d’enseignes.' },
      { title: 'OEM / ODM', desc: 'Coordination technique avec installateurs, agences et marques.' },
    ],
  },
  guides: {
    eyebrow: 'Signage Insights',
    heading: 'Guides avant commande',
    intro: 'Un résumé des points techniques à vérifier avant de commander (en anglais).',
    readLabel: 'Lire le guide',
  },
  guideTitles: [
    'Comment se détermine le coût des lettres en relief',
    'Différence entre éclairage frontal et halo',
    'Choisir l’enseigne adaptée à son activité',
    'Matériaux extérieurs : inox 304 ou acier galvanisé',
  ],
  cta: {
    heading: 'Demander un devis',
    intro: 'Notre équipe d’ingénierie assure la consultation technique et le prix en direct d’usine.',
    quote: 'Devis gratuit',
    whatsappLabel: 'Envoyer les plans',
    whatsappMessage: 'Bonjour Aaron, je souhaite envoyer les plans d’un projet d’enseignes.',
    briefProduct: 'projet d’enseignes',
    briefHeading: 'Informations utiles à envoyer',
    briefItems: [
      'Plans ou fichier du logo',
      'Types d’enseignes, dimensions approximatives et quantités',
      'Intérieur ou extérieur et surface de fixation',
      'Finition et direction de l’éclairage',
      'Photos du lieu et pays de livraison',
    ],
    briefFootnote:
      'Envoyez ce que vous avez : plans, dimensions approximatives, quantité, finition ou direction de l’éclairage, photos du lieu et pays de livraison.',
    emailNote: 'Par e-mail :',
  },
};

const compactHome = (copy: LocalizedHomeCopy): LocalizedHomeContent => build(copy);

const chinese = compactHome({
  meta: { title: '定制标识｜工厂直供', description: '面向酒店、商业设施和工业园区项目的定制标识。按规格在自有工厂生产，并可按报价提供全球DDP配送。' },
  hero: { eyebrow: '工厂直供标识制造', h1: '工厂直供的定制标识', intro: '自2006年以来，我们为酒店、商业设施和工业园区项目制造定制标识。材料与表面处理根据安装环境选择。', primary: '免费3D效果图与报价', secondary: '查看产品系列', imageAlt: 'ZYD Signage生产基地' },
  trust: [{ value: 'EST. 2006', label: '2006年成立' }, { value: '20 YEARS', label: '行业经验' }, { value: '20,000m²', label: '自有生产基地' }, { value: 'GLOBAL DDP', label: '全球DDP配送' }],
  process: { eyebrow: 'Industrial Excellence', heading: '八道制造工序', intro: '将制造经验与每道工序的检查结合，为每个项目生产标识。', steps: [
    { title: '技术咨询', desc: '分析标识需求和安装条件。' }, { title: '精密3D效果图', desc: '先通过3D确认最终效果。' }, { title: '施工图', desc: '制作结构和电气布线的详细图纸。' }, { title: 'CNC加工', desc: '进行高精度切割与组装。' }, { title: '喷涂', desc: '应用适合安装环境的表面处理。' }, { title: 'LED组装', desc: '按规格组装LED模块和线缆。' }, { title: '点亮检查', desc: '逐道工序检查，包括点亮测试。' }, { title: '全球DDP配送', desc: '安排工业包装与门到门物流。' },
  ] },
  products: { eyebrow: 'Product Lines', heading: '标识产品系列', intro: '按规格为全球建筑项目制造。产品页面目前提供英文版本。' },
  productNames: ['背发光字', '导视系统', '医疗设施标识', '精神堡垒与立柱标识', 'LED灯箱', 'LED霓虹灯牌', '金属与亚克力Logo标识', '景观家具', '整体标识系统', '户外垃圾桶', '定制花箱', '亚克力桌牌', '金属A字牌'],
  quality: { eyebrow: 'Quality Assurance', heading: '质量标准与适用性确认', intro: '根据项目规格和交付地条件，确认认证、部件选择及电气安全要求。', imageAlt: 'ZYD Signage工厂质量检查', points: [{ title: '质量管理', desc: '按项目检查各道工序。' }, { title: '电气要求', desc: '根据交付地条件进行确认。' }, { title: '检查范围', desc: '生产前协商确定。' }, { title: '部件选择', desc: '按规格进行选择。' }] },
  why: { eyebrow: 'Why Work Direct', heading: '适合每个项目的一体化制造', intro: '从规格确认到生产、检查和全球配送，在一条流程中完成。', items: [{ title: '工厂直供', desc: '自有生产直接连接项目团队。' }, { title: '质量管理', desc: '成熟流程与项目最终检查。' }, { title: '全球DDP配送', desc: '为标识项目提供全球运输支持。' }, { title: 'OEM / ODM', desc: '与施工方、设计事务所和品牌进行技术协调。' }] },
  guides: { eyebrow: 'Signage Insights', heading: '下单前实用指南', intro: '整理下单前值得确认的技术要点（英文）。', readLabel: '阅读指南' }, guideTitles: ['发光字成本如何确定', '前发光与背发光的区别', '如何选择适合企业的标识', '户外标识材料：304不锈钢与镀锌钢'],
  cta: { heading: '获取报价', intro: '工程团队负责技术咨询和工厂直供价格。', quote: '免费报价', whatsappLabel: '发送图纸', whatsappMessage: '你好 Aaron，我想发送一个标识项目的图纸。', briefProduct: '标识项目', briefHeading: '建议发送的信息', briefItems: ['图纸或Logo文件', '标识类型、估算尺寸和数量', '室内/室外位置及安装面', '表面处理和照明方向', '安装现场照片和交付国家'], briefFootnote: '发送您现有的资料即可：图纸、估算尺寸、数量、表面处理或照明方向、现场照片和交付国家。', emailNote: '邮件联系：' },
});

const portuguese = compactHome({
  meta: { title: 'Sinalização personalizada direto da fábrica', description: 'Sinalização personalizada para hotéis, centros comerciais e parques industriais, fabricada conforme a especificação e entregue com DDP em todo o mundo.' },
  hero: { eyebrow: 'Fabricação direta da fábrica', h1: 'Sinalização personalizada direto da fábrica', intro: 'Desde 2006 fabricamos sinalização personalizada para projetos de hotéis, centros comerciais e parques industriais. Materiais e acabamentos são escolhidos conforme a instalação.', primary: 'Maquete 3D e orçamento grátis', secondary: 'Ver linhas de produtos', imageAlt: 'Base de produção da ZYD Signage' },
  trust: [{ value: 'EST. 2006', label: 'Fundada em 2006' }, { value: '20 YEARS', label: 'Experiência no setor' }, { value: '20,000m²', label: 'Produção própria' }, { value: 'GLOBAL DDP', label: 'Envio DDP mundial' }],
  process: { eyebrow: 'Industrial Excellence', heading: 'Oito etapas de fabricação', intro: 'Combinamos experiência de fabricação com verificação em cada etapa.', steps: [
    { title: 'Consulta técnica', desc: 'Analisamos requisitos e condições de instalação.' }, { title: 'Maquete 3D precisa', desc: 'O resultado é revisto primeiro em 3D.' }, { title: 'Desenhos de produção', desc: 'Preparamos desenhos de estrutura e cabeamento.' }, { title: 'Fabricação CNC', desc: 'Corte e montagem de alta precisão.' }, { title: 'Pintura', desc: 'Acabamentos adequados ao ambiente.' }, { title: 'Montagem LED', desc: 'Módulos LED e cabeamento conforme a especificação.' }, { title: 'Teste de iluminação', desc: 'Verificação por etapa, incluindo teste de acendimento.' }, { title: 'Envio DDP mundial', desc: 'Embalagem industrial e logística porta a porta.' },
  ] },
  products: { eyebrow: 'Product Lines', heading: 'Linhas de produtos de sinalização', intro: 'Fabricadas conforme a especificação para projetos arquitetônicos em todo o mundo. As páginas de produto estão em inglês.' }, productNames: ['Letras com iluminação halo', 'Sistemas de orientação', 'Sinalização para saúde', 'Totens e sinais monumentais', 'Caixas de luz LED', 'Letreros neon LED', 'Sinalização em metal e acrílico', 'Mobiliário paisagístico', 'Sistema completo de sinalização', 'Lixeiras externas', 'Vasos personalizados', 'Sinais de mesa em acrílico', 'Placa cavalete metálica'],
  quality: { eyebrow: 'Quality Assurance', heading: 'Critérios de qualidade e verificação', intro: 'Certificações, componentes e requisitos elétricos são verificados conforme a especificação e o destino.', imageAlt: 'Controle de qualidade na fábrica ZYD Signage', points: [{ title: 'Controle de qualidade', desc: 'As etapas são verificadas por projeto.' }, { title: 'Requisitos elétricos', desc: 'Revistos conforme o destino.' }, { title: 'Escopo de inspeção', desc: 'Acordado antes da produção.' }, { title: 'Componentes', desc: 'Selecionados conforme a especificação.' }] },
  why: { eyebrow: 'Why Work Direct', heading: 'Fabricação integrada para cada projeto', intro: 'Da especificação à produção, verificação e envio mundial em um único fluxo.', items: [{ title: 'Direto da fábrica', desc: 'Produção própria ligada à equipe do projeto.' }, { title: 'Controle de qualidade', desc: 'Processos estabelecidos e verificação final.' }, { title: 'Envio DDP mundial', desc: 'Suporte logístico global para sinalização.' }, { title: 'OEM / ODM', desc: 'Coordenação técnica com instaladores, escritórios e marcas.' }] },
  guides: { eyebrow: 'Signage Insights', heading: 'Guias antes do pedido', intro: 'Pontos técnicos para conferir antes de pedir (em inglês).', readLabel: 'Ler o guia' }, guideTitles: ['Como é definido o custo das letras canal', 'Iluminação frontal e halo: diferenças', 'Como escolher o sinal certo para sua empresa', 'Materiais externos: inox 304 e aço galvanizado'],
  cta: { heading: 'Solicitar orçamento', intro: 'Nossa equipe de engenharia cuida da consulta técnica e do preço direto da fábrica.', quote: 'Orçamento grátis', whatsappLabel: 'Enviar desenhos', whatsappMessage: 'Olá Aaron, quero enviar os desenhos de um projeto de sinalização.', briefProduct: 'projeto de sinalização', briefHeading: 'Informações úteis', briefItems: ['Desenhos ou arquivo do logotipo', 'Tipos, dimensões aproximadas e quantidades', 'Local interno/externo e superfície de montagem', 'Acabamento e direção da iluminação', 'Fotos do local e país de entrega'], briefFootnote: 'Envie o que tiver: desenhos, dimensões aproximadas, quantidade, acabamento ou direção da iluminação, fotos do local e país de entrega.', emailNote: 'Por e-mail:' },
});

const italian = compactHome({
  meta: { title: 'Insegne personalizzate direttamente dalla fabbrica', description: 'Insegne personalizzate per hotel, centri commerciali e parchi industriali, prodotte secondo specifica e consegnate con DDP in tutto il mondo.' },
  hero: { eyebrow: 'Produzione di insegne diretta dalla fabbrica', h1: 'Insegne personalizzate direttamente dalla fabbrica', intro: 'Dal 2006 realizziamo insegne personalizzate per progetti di hotel, centri commerciali e parchi industriali. Materiali e finiture sono scelti in base all’installazione.', primary: 'Mockup 3D e preventivo gratuiti', secondary: 'Vedi le linee di prodotto', imageAlt: 'Base produttiva ZYD Signage' },
  trust: [{ value: 'EST. 2006', label: 'Fondata nel 2006' }, { value: '20 YEARS', label: 'Esperienza nel settore' }, { value: '20,000m²', label: 'Produzione propria' }, { value: 'GLOBAL DDP', label: 'Spedizione DDP globale' }],
  process: { eyebrow: 'Industrial Excellence', heading: 'Otto fasi di produzione', intro: 'Uniamo esperienza produttiva e verifica in ogni fase.', steps: [{ title: 'Consulenza tecnica', desc: 'Analizziamo requisiti e condizioni di installazione.' }, { title: 'Mockup 3D preciso', desc: 'Il risultato viene verificato prima in 3D.' }, { title: 'Disegni esecutivi', desc: 'Prepariamo disegni di struttura e cablaggio.' }, { title: 'Lavorazione CNC', desc: 'Taglio e assemblaggio di precisione.' }, { title: 'Verniciatura', desc: 'Finiture adatte all’ambiente.' }, { title: 'Assemblaggio LED', desc: 'Moduli LED e cablaggio secondo specifica.' }, { title: 'Test illuminazione', desc: 'Controllo per fase, incluso il test di accensione.' }, { title: 'Spedizione DDP globale', desc: 'Imballaggio industriale e logistica porta a porta.' }] },
  products: { eyebrow: 'Product Lines', heading: 'Linee di prodotti per insegne', intro: 'Prodotte secondo specifica per progetti architettonici in tutto il mondo. Le pagine prodotto sono in inglese.' }, productNames: ['Lettere con luce halo', 'Sistemi di orientamento', 'Insegne per strutture sanitarie', 'Insegne monumentali e piloni', 'Light box LED', 'Insegne neon LED', 'Insegne in metallo e acrilico', 'Arredo paesaggistico', 'Sistema completo di insegne', 'Cestini esterni', 'Fioriere personalizzate', 'Insegne da tavolo in acrilico', 'Cavalletto metallico portatile'],
  quality: { eyebrow: 'Quality Assurance', heading: 'Criteri di qualità e verifica', intro: 'Certificazioni, componenti e requisiti elettrici sono verificati secondo specifica e destinazione.', imageAlt: 'Controllo qualità nello stabilimento ZYD Signage', points: [{ title: 'Controllo qualità', desc: 'Le fasi sono verificate per progetto.' }, { title: 'Requisiti elettrici', desc: 'Verificati secondo la destinazione.' }, { title: 'Ambito di controllo', desc: 'Concordato prima della produzione.' }, { title: 'Componenti', desc: 'Selezionati secondo specifica.' }] },
  why: { eyebrow: 'Why Work Direct', heading: 'Produzione coordinata per ogni progetto', intro: 'Dalla specifica alla produzione, verifica e spedizione globale in un unico flusso.', items: [{ title: 'Diretto dalla fabbrica', desc: 'Produzione interna collegata al team di progetto.' }, { title: 'Controllo qualità', desc: 'Processi definiti e verifica finale.' }, { title: 'Spedizione DDP globale', desc: 'Supporto logistico globale per le insegne.' }, { title: 'OEM / ODM', desc: 'Coordinamento tecnico con installatori, studi e marchi.' }] },
  guides: { eyebrow: 'Signage Insights', heading: 'Guide prima dell’ordine', intro: 'I punti tecnici da verificare prima dell’ordine (in inglese).', readLabel: 'Leggi la guida' }, guideTitles: ['Come si determina il costo delle lettere canale', 'Differenza tra luce frontale e halo', 'Come scegliere l’insegna giusta per l’attività', 'Materiali esterni: inox 304 e acciaio zincato'],
  cta: { heading: 'Richiedi un preventivo', intro: 'Il team tecnico segue la consulenza e il prezzo diretto dalla fabbrica.', quote: 'Preventivo gratuito', whatsappLabel: 'Invia i disegni', whatsappMessage: 'Ciao Aaron, vorrei inviare i disegni di un progetto di insegne.', briefProduct: 'progetto di insegne', briefHeading: 'Informazioni utili', briefItems: ['Disegni o file del logo', 'Tipi, dimensioni approssimative e quantità', 'Interno/esterno e superficie di montaggio', 'Finitura e direzione della luce', 'Foto del luogo e Paese di consegna'], briefFootnote: 'Invia ciò che hai: disegni, dimensioni approssimative, quantità, finitura o direzione della luce, foto del luogo e Paese di consegna.', emailNote: 'Per e-mail:' },
});

const dutch = compactHome({
  meta: { title: 'Maatwerk bewegwijzering rechtstreeks uit de fabriek', description: 'Maatwerk bewegwijzering voor hotels, winkelcentra en industrieparken, volgens specificatie geproduceerd en wereldwijd met DDP geleverd.' },
  hero: { eyebrow: 'Bewegwijzering rechtstreeks uit de fabriek', h1: 'Maatwerk bewegwijzering rechtstreeks uit de fabriek', intro: 'Sinds 2006 maken wij maatwerk bewegwijzering voor hotel-, winkelcentrum- en industrieprojecten. Materialen en afwerkingen worden afgestemd op de installatie.', primary: 'Gratis 3D-model en offerte', secondary: 'Productlijnen bekijken', imageAlt: 'Productielocatie van ZYD Signage' },
  trust: [{ value: 'EST. 2006', label: 'Opgericht in 2006' }, { value: '20 YEARS', label: 'Ervaring in de sector' }, { value: '20,000m²', label: 'Eigen productie' }, { value: 'GLOBAL DDP', label: 'Wereldwijde DDP-verzending' }],
  process: { eyebrow: 'Industrial Excellence', heading: 'Acht productiestappen', intro: 'Productie-ervaring gecombineerd met controle in elke stap.', steps: [{ title: 'Technisch advies', desc: 'We analyseren eisen en installatievoorwaarden.' }, { title: 'Nauwkeurig 3D-model', desc: 'Het resultaat wordt eerst in 3D gecontroleerd.' }, { title: 'Werkplaatstekeningen', desc: 'Detailtekeningen voor constructie en bekabeling.' }, { title: 'CNC-productie', desc: 'Zeer nauwkeurig snijden en monteren.' }, { title: 'Lakken', desc: 'Afwerking passend bij de omgeving.' }, { title: 'LED-montage', desc: 'LED-modules en bekabeling volgens specificatie.' }, { title: 'Verlichtingscontrole', desc: 'Controle per stap, inclusief inschakeltest.' }, { title: 'Wereldwijde DDP-verzending', desc: 'Industriële verpakking en deur-tot-deur logistiek.' }] },
  products: { eyebrow: 'Product Lines', heading: 'Productlijnen voor bewegwijzering', intro: 'Volgens specificatie gemaakt voor architectuurprojecten wereldwijd. Productpagina’s zijn in het Engels.' }, productNames: ['Halo-verlichte letters', 'Bewegwijzeringssystemen', 'Bewegwijzering voor zorglocaties', 'Monument- en pylonschermen', 'LED-lichtbakken', 'LED-neonborden', 'Metalen en acryl borden', 'Landschapsmeubilair', 'Compleet bewegwijzeringssysteem', 'Buitenafvalbakken', 'Maatwerk plantenbakken', 'Acryl tafelborden', 'Draagbaar metalen stoepbord'],
  quality: { eyebrow: 'Quality Assurance', heading: 'Kwaliteitscriteria en controle', intro: 'Certificaten, componenten en elektrische eisen worden gecontroleerd volgens specificatie en bestemming.', imageAlt: 'Kwaliteitscontrole in de fabriek van ZYD Signage', points: [{ title: 'Kwaliteitscontrole', desc: 'Stappen worden per project gecontroleerd.' }, { title: 'Elektrische eisen', desc: 'Gecontroleerd volgens de bestemming.' }, { title: 'Controleomvang', desc: 'Voor productie overeengekomen.' }, { title: 'Componentkeuze', desc: 'Volgens specificatie geselecteerd.' }] },
  why: { eyebrow: 'Why Work Direct', heading: 'Samenhangende productie voor elk project', intro: 'Van specificatie tot productie, controle en wereldwijde verzending in één stroom.', items: [{ title: 'Rechtstreeks uit de fabriek', desc: 'Eigen productie direct verbonden met het projectteam.' }, { title: 'Kwaliteitscontrole', desc: 'Vaste processen en eindcontrole per project.' }, { title: 'Wereldwijde DDP-verzending', desc: 'Wereldwijde logistieke ondersteuning.' }, { title: 'OEM / ODM', desc: 'Technische afstemming met aannemers, bureaus en merken.' }] },
  guides: { eyebrow: 'Signage Insights', heading: 'Gidsen vóór de bestelling', intro: 'Technische punten om vóór de bestelling te controleren (in het Engels).', readLabel: 'Lees de gids' }, guideTitles: ['Hoe de kosten van kanaalletters worden bepaald', 'Verschil tussen front- en haloverlichting', 'De juiste bewegwijzering voor uw bedrijf kiezen', 'Materialen voor buiten: RVS 304 en gegalvaniseerd staal'],
  cta: { heading: 'Offerte aanvragen', intro: 'Ons engineeringteam verzorgt technisch advies en de fabrieksprijs.', quote: 'Gratis offerte', whatsappLabel: 'Tekeningen sturen', whatsappMessage: 'Hallo Aaron, ik wil tekeningen van een bewegwijzeringsproject sturen.', briefProduct: 'bewegwijzeringsproject', briefHeading: 'Handige informatie', briefItems: ['Tekeningen of logobestand', 'Types, geschatte afmetingen en aantallen', 'Binnen/buiten en montageoppervlak', 'Afwerking en lichtrichting', 'Foto’s van de locatie en land van levering'], briefFootnote: 'Stuur wat u heeft: tekeningen, geschatte afmetingen, aantal, afwerking of lichtrichting, foto’s van de locatie en land van levering.', emailNote: 'Per e-mail:' },
});

const polish = compactHome({
  meta: { title: 'Oznakowanie na zamówienie prosto z fabryki', description: 'Oznakowanie na zamówienie dla hoteli, centrów handlowych i parków przemysłowych, produkowane według specyfikacji i dostarczane z DDP na całym świecie.' },
  hero: { eyebrow: 'Produkcja oznakowania prosto z fabryki', h1: 'Oznakowanie na zamówienie prosto z fabryki', intro: 'Od 2006 roku produkujemy oznakowanie na zamówienie dla hoteli, centrów handlowych i parków przemysłowych. Materiały i wykończenia dobieramy do warunków montażu.', primary: 'Bezpłatny model 3D i wycena', secondary: 'Zobacz linie produktów', imageAlt: 'Baza produkcyjna ZYD Signage' },
  trust: [{ value: 'EST. 2006', label: 'Założona w 2006 r.' }, { value: '20 YEARS', label: 'Doświadczenie w branży' }, { value: '20,000m²', label: 'Własna produkcja' }, { value: 'GLOBAL DDP', label: 'Globalna dostawa DDP' }],
  process: { eyebrow: 'Industrial Excellence', heading: 'Osiem etapów produkcji', intro: 'Łączymy doświadczenie produkcyjne z kontrolą na każdym etapie.', steps: [{ title: 'Konsultacja techniczna', desc: 'Analizujemy wymagania i warunki montażu.' }, { title: 'Precyzyjny model 3D', desc: 'Rezultat najpierw sprawdzamy w 3D.' }, { title: 'Rysunki warsztatowe', desc: 'Przygotowujemy szczegółowe rysunki konstrukcji i okablowania.' }, { title: 'Produkcja CNC', desc: 'Precyzyjne cięcie i montaż.' }, { title: 'Malowanie', desc: 'Wykończenia odpowiednie do środowiska.' }, { title: 'Montaż LED', desc: 'Moduły LED i okablowanie zgodnie ze specyfikacją.' }, { title: 'Kontrola oświetlenia', desc: 'Kontrola etapowa, w tym test świecenia.' }, { title: 'Globalna dostawa DDP', desc: 'Opakowanie przemysłowe i logistyka door-to-door.' }] },
  products: { eyebrow: 'Product Lines', heading: 'Linie produktów oznakowania', intro: 'Produkowane według specyfikacji dla projektów architektonicznych na całym świecie. Strony produktów są po angielsku.' }, productNames: ['Litery z poświatą', 'Systemy wayfinding', 'Oznakowanie placówek medycznych', 'Pylony i znaki monumentalne', 'Kasetony LED', 'Neony LED', 'Znaki metalowe i akrylowe', 'Meble krajobrazowe', 'Kompletny system oznakowania', 'Kosze zewnętrzne', 'Donice na zamówienie', 'Akrylowe tabliczki biurkowe', 'Przenośny stojak metalowy'],
  quality: { eyebrow: 'Quality Assurance', heading: 'Kryteria jakości i kontrola', intro: 'Certyfikaty, komponenty i wymagania elektryczne sprawdzamy według specyfikacji i miejsca dostawy.', imageAlt: 'Kontrola jakości w fabryce ZYD Signage', points: [{ title: 'Kontrola jakości', desc: 'Etapy są kontrolowane dla każdego projektu.' }, { title: 'Wymagania elektryczne', desc: 'Sprawdzane według miejsca dostawy.' }, { title: 'Zakres kontroli', desc: 'Uzgadniany przed produkcją.' }, { title: 'Dobór komponentów', desc: 'Dobierane według specyfikacji.' }] },
  why: { eyebrow: 'Why Work Direct', heading: 'Spójna produkcja dla każdego projektu', intro: 'Od specyfikacji przez produkcję i kontrolę po globalną dostawę — w jednym przepływie.', items: [{ title: 'Prosto z fabryki', desc: 'Własna produkcja połączona z zespołem projektu.' }, { title: 'Kontrola jakości', desc: 'Ustalone procesy i kontrola końcowa.' }, { title: 'Globalna dostawa DDP', desc: 'Wsparcie logistyczne dla programów oznakowania.' }, { title: 'OEM / ODM', desc: 'Koordynacja techniczna z wykonawcami, biurami i markami.' }] },
  guides: { eyebrow: 'Signage Insights', heading: 'Poradniki przed zamówieniem', intro: 'Techniczne punkty do sprawdzenia przed zamówieniem (po angielsku).', readLabel: 'Czytaj poradnik' }, guideTitles: ['Jak ustala się koszt liter przestrzennych', 'Różnica między światłem frontowym i halo', 'Jak wybrać właściwy znak dla firmy', 'Materiały zewnętrzne: stal 304 i stal ocynkowana'],
  cta: { heading: 'Poproś o wycenę', intro: 'Nasz zespół inżynieryjny zajmuje się konsultacją techniczną i ceną prosto z fabryki.', quote: 'Bezpłatna wycena', whatsappLabel: 'Wyślij rysunki', whatsappMessage: 'Dzień dobry Aaron, chcę wysłać rysunki projektu oznakowania.', briefProduct: 'projekt oznakowania', briefHeading: 'Przydatne informacje', briefItems: ['Rysunki lub plik logo', 'Typy, przybliżone wymiary i ilości', 'Wewnątrz/na zewnątrz i powierzchnia montażu', 'Wykończenie i kierunek światła', 'Zdjęcia miejsca i kraj dostawy'], briefFootnote: 'Wyślij to, co masz: rysunki, przybliżone wymiary, ilość, wykończenie lub kierunek światła, zdjęcia miejsca i kraj dostawy.', emailNote: 'E-mail:' },
});

export const localizedHomeContent = {
  ar: build(arabic), es: build(spanish), ru: build(russian), de: build(german), fr: build(french),
  zh: chinese, pt: portuguese, it: italian, nl: dutch, pl: polish,
} as Record<'ar' | 'es' | 'ru' | 'de' | 'fr' | 'zh' | 'pt' | 'it' | 'nl' | 'pl', LocalizedHomeContent>;
