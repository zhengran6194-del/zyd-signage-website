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
    steps: copy.process.steps.map((step, index) => ({ no: STEP_NUMBERS[index], ...step })),
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

export const localizedHomeContent = {
  ar: build(arabic),
  es: build(spanish),
  ru: build(russian),
  de: build(german),
  fr: build(french),
} as Record<'ar' | 'es' | 'ru' | 'de' | 'fr', LocalizedHomeContent>;
