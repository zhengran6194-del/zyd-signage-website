/**
 * Japanese product pages.
 *
 * Each entry mirrors the structure of its English counterpart — hero, short
 * answer, buyer questions, specification cards, FAQ and closing call to action
 * — so the two versions of a page read as translations of one another.
 *
 * Every figure and claim here is one the English page already publishes: the
 * 2006 founding year, the 20,000m² production base, MOQ 1, the 7–14 day lead
 * time, DDP shipping by quotation, and the material and finish options named in
 * the English specification cards. No certification, price, warranty period,
 * service life or customer count is added.
 */
export type JapaneseProduct = {
  slug: string;
  /** The English page this is a translation of, used for hreflang. */
  enPath: string;
  seo: { title: string; description: string };
  eyebrow: string;
  h1: { lead: string; accent: string; tail: string };
  subtitle: string;
  image: { src: string; alt: string; width: number; height: number };
  directAnswer: { label: string; text: string };
  questions: { heading: string; text: string; linkLabel: string; linkHref: string }[];
  specs: { title: string; items: string[] }[];
  factoryAdvantage: string;
  faqs: { question: string; answer: string }[];
  cta: { heading: string; text: string; caseName: string; caseContext: string; caseHref: string };
};

const dalianCase = '/case-studies/dalian-water-plaza-wayfinding-signage';

export const japaneseProducts: JapaneseProduct[] = [
  {
    slug: 'architectural-wayfinding-system',
    enPath: '/products/architectural-wayfinding-system',
    seo: {
      title: '建築導線サインシステム｜工場直送の製作',
      description:
        '空港・病院・キャンパス・複合開発向けの導線サインシステム。来訪者の動線から計画し、パネル・取付・仕上げを一つのサイン体系として工場直送で製作します。',
    },
    eyebrow: 'システム計画と製作',
    h1: { lead: '建築', accent: '導線', tail: 'サインシステム' },
    subtitle: '空港、病院、大学キャンパス、複合開発向けの導線サインシステム。',
    image: { src: '/assets/images/hero-wayfinding.jpg', alt: '建築導線サインシステム', width: 1536, height: 1024 },
    directAnswer: {
      label: '導線システムの要点',
      text: '導線サインシステムは、すべてのサイン種別をひとつの階層にまとめ、来訪者が到着から目的地まで迷わず移動できるようにするものです。検討は来訪者の動線と判断ポイントから始め、パネル・取付・仕上げを、個別のサインの寄せ集めではなく揃った一つのファミリーとして定義します。',
    },
    questions: [
      {
        heading: '大規模施設の導線システムはどのように計画しますか？',
        text: '計画は来訪者の動線から始まります。到着、駐車場、最初の判断ポイント、通路、そして最終目的地という順に検討します。各判断ポイントで「何を表示するか」「どのくらい手前で読める必要があるか」が決まり、そこからパネル寸法と取付方法が決まります。サイン形式を施設と閲覧者に合わせる考え方は、選定ガイドで説明しています。',
        linkLabel: 'サイン選定ガイドを読む',
        linkHref: '/guides/how-to-choose-the-right-sign-for-your-business',
      },
      {
        heading: '屋内と屋外の導線にはどの素材が適しますか？',
        text: '屋内パネルはアルミニウムやアクリルに印刷または貼付したグラフィックが一般的です。屋外や街路レベルの要素には、気候と清掃に適した仕上げ工程が必要になります。金属の露出仕上げが必要な場合は、304ステンレス鋼が一般的な選択肢です。素材ガイドで、露出鋼と塗装鋼の工程を比較しています。',
        linkLabel: '屋外素材の選択肢を見る',
        linkHref: '/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs',
      },
      {
        heading: '導線サインの見積もりはどのように作成しますか？',
        text: '比較できる見積もりには、配置図または平面図、サイン種別と数量の一覧、取付条件、図面またはブランド標準、プロジェクトで指定されたアクセシビリティ要件が必要です。これらをまとめてお送りいただくと、工程と範囲を一度に確認できます。',
        linkLabel: 'プロジェクト資料を送る',
        linkHref: '/ja/contact',
      },
      {
        heading: '導線サインとエントリーサインはどう連携しますか？',
        text: '導線サインが単独で完結することは多くありません。エントリーのモニュメント、発光文字、ライトボックスが同じブランド言語を建物内へとつなぎます。これらを一つのプログラムとして調整すると、仕上げ・書体・金物が揃い、敷地全体の施工も簡素になります。',
        linkLabel: 'モニュメントサインを見る',
        linkHref: '/ja/products/outdoor-pylon-monument-sign',
      },
    ],
    specs: [
      {
        title: 'サインの種類',
        items: ['天吊り・突き出し・壁面パネル', '自立式の案内板とマップボード', '指定時の触知・点字オプション'],
      },
      {
        title: 'パネルと仕上げ',
        items: ['アルミニウムおよびアクリルのパネル構成', '露出金属部分には304ステンレス鋼', '指定RAL色の粉体塗装'],
      },
      {
        title: '取付',
        items: ['天井吊りおよび壁面ブラケット式', '壁面が許す箇所では面付け', '現場調査に基づく固定方法の確認'],
      },
      {
        title: '照明と耐久性',
        items: [
          'プロジェクト仕様に合わせて選定するLEDモジュール（オプション）',
          '点灯する場合は仕様に合わせて選定する電源',
          '屋外用途に応じた環境等級の確認',
          '保証条件はプロジェクト見積もりで確認',
        ],
      },
    ],
    factoryAdvantage:
      '2006年創業、大連の20,000m²の生産拠点からの直送により、パネル加工と仕上げを一貫した品質管理のもとで行います。',
    faqs: [
      {
        question: '建築導線サインとは何で、どのように計画しますか？',
        answer:
          '建築導線サインは、建物やキャンパス内で人が進む先を判断できるようにするサイン・地図・標識の体系です。計画は個々のサインパネルではなく、来訪者の動線と判断ポイントから始めるため、入口から最終目的地まで階層が一貫します。',
      },
      {
        question: '導線システムではアクセシビリティ要件をどう扱いますか？',
        answer:
          'アクセシビリティ要件は国・建物用途・所轄の判断機関によって異なるため、生産前にプロジェクトごとに確認します。プロジェクト仕様で指定があれば、触知・点字、取付高さ、コントラストをサイン一覧に組み込むことができます。当社の公開ガイドは参考情報であり、地域の法規レビューに代わるものではありません。',
      },
      {
        question: '導線サインのリードタイムはどのくらいですか？',
        answer:
          '標準的な生産リードタイムは、サイン種別の数、数量、図面により7〜14日です。段階的な導入は、お客様の施工工程に合わせて計画します。',
      },
    ],
    cta: {
      heading: '導線プログラムをご計画ですか？',
      text: '配置図または平面図、サイン種別、数量、取付条件をお送りください。プロジェクトごとに検討します。',
      caseName: '大連 ウォーターファッションプラザ',
      caseContext: '商業施設全体に納入した導線サインと建築サインのシステムです。',
      caseHref: dalianCase,
    },
  },
  {
    slug: 'custom-halo-lit-letters',
    enPath: '/products/custom-halo-lit-letters',
    seo: {
      title: 'ハロー（背面発光）金属文字｜オーダーメイド製作',
      description:
        '建築ブランディング向けの背面発光文字。LEDモジュールを組み込んだ立体金属文字として、露光する壁面や仕上げに合わせてオーダーメイドで製作します。',
    },
    eyebrow: '背面発光（ハロー）加工',
    h1: { lead: 'オーダーメイドの', accent: 'ハロー（背面発光）', tail: '金属文字' },
    subtitle:
      '建築ブランディング向けの背面発光。LEDモジュールを組み込んだ立体金属文字として製作します。',
    image: { src: '/assets/images/cat-illuminated.jpg', alt: 'ハロー（背面発光）金属文字', width: 1440, height: 1080 },
    directAnswer: {
      label: 'ハロー文字の要点',
      text: 'ハロー文字は文字の面を暗いままにし、光を背面の壁に向けて当てることで、面が光るのではなく文字が浮かび上がる背面発光の効果をつくります。壁そのものに光を担わせたい場合や、明るい前面発光ではなく、より抑制の効いた建築的な見え方を求めるブランドに適しています。',
    },
    questions: [
      {
        heading: '前面発光ではなくハロー（背面発光）を選ぶのはどんな場合ですか？',
        text: 'ハロー照明は、石、レンガ、暗い外装材など、反射光が活きる壁面がデザインの一部になっている場合に効果を発揮します。前面発光文字は遠距離や日中により強く読めるため、選択は通常、視認状況と意図する見え方によって決まります。比較ガイドで両方式を並べて説明しています。',
        linkLabel: '前面発光と背面発光を比較する',
        linkHref: '/guides/front-lit-vs-halo-lit-channel-letters',
      },
      {
        heading: '背面発光の立体文字にはどの素材が適しますか？',
        text: '文字本体は通常、ステンレス鋼、アルミニウム、塗装鋼板で製作し、仕上げは外装と保守計画に合わせて選定します。屋外では304ステンレス鋼が一般的な選択で、指定RAL色の粉体塗装により、見える金属の表情をブランド側で管理できます。素材ガイドで塗装鋼板の選択肢も詳しく扱っています。',
        linkLabel: '屋外素材の選択肢を見る',
        linkHref: '/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs',
      },
      {
        heading: 'ハロー文字の見積もりにはどんな情報が必要ですか？',
        text: '比較できる見積もりには、ベクター形式の図面、文字の高さと全長、数量、壁面の素材、必要な仕上げが必要です。設置場所の写真と取付高さがあると、浮かせ寸法と配線経路の確認が進みます。これらを資料とともにお送りいただければ、技術検討に進みます。',
        linkLabel: 'プロジェクト資料を送る',
        linkHref: '/ja/contact',
      },
      {
        heading: 'ハロー文字は他のサイン種別と組み合わせられますか？',
        text: 'はい。背面発光文字は、エントリーのモニュメント、発光するライトボックス、ロビー内のサインと組み合わせて、外観から受付までのブランド言語を一貫させることがよくあります。これらをまとめて製作すると、仕上げと照明をプロジェクト全体で揃えられます。',
        linkLabel: '組み合わせ可能なLEDライトボックスを見る',
        linkHref: '/products/ultra-slim-led-light-box',
      },
    ],
    specs: [
      {
        title: '文字本体',
        items: ['屋外の露出文字には304ステンレス鋼', '軽量な文字本体にはアルミニウム', '塗装仕上げを指定する場合は塗装鋼板'],
      },
      {
        title: '仕上げの方向性',
        items: ['ヘアラインまたは鏡面のステンレス表面', '指定RAL色の粉体塗装', 'ハローの広がりを調整するための見返し（リターン）深さ'],
      },
      {
        title: '照明と取付',
        items: [
          'プロジェクト仕様に合わせて選定するLEDモジュール',
          'プロジェクト仕様に合わせて選定する電源',
          '壁面調査に基づく浮かせ寸法とブラケット配置の確認',
        ],
      },
      {
        title: '耐久性',
        items: [
          '屋外用途に応じた環境等級の確認',
          '保証条件はプロジェクト見積もりで確認',
          '製作前に合意する配線経路と保守アクセス',
        ],
      },
    ],
    factoryAdvantage:
      '2006年創業、大連の20,000m²の生産拠点からの直送により、加工と仕上げを一貫した品質管理のもとで行います。',
    faqs: [
      {
        question: 'ハロー（背面発光）文字と前面発光チャンネル文字の違いは何ですか？',
        answer:
          'ハロー文字は背面から光を当てるため、光が取付面に反射し、文字の面が点灯しないまま各文字の周囲に柔らかな光が生まれます。前面発光文字は文字の面そのものを光らせます。背面発光の構成は、暗い壁面や質感のある壁面、より抑制の効いた建築的な見え方に適しています。',
      },
      {
        question: 'ハロー文字はどんな壁面にも取り付けられますか？',
        answer:
          '光が壁面での反射に依存するため、取付面が仕上がりに影響します。平滑・明るい面と、暗い面や強い凹凸のある面では挙動が異なり、浮かせ寸法がハローの見え方を変えます。壁面の素材と写真を資料に添えてお送りください。取付方法を確認します。',
      },
      {
        question: 'オーダーメイドのハロー文字のリードタイムはどのくらいですか？',
        answer:
          '標準的な生産リードタイムは、文字数、サイズ、仕上げ、照明構成により7〜14日です。大規模な導入案件はお客様の工程に合わせて段階的に進めます。',
      },
    ],
    cta: {
      heading: '背面発光文字をご検討ですか？',
      text: '図面、文字の高さ、数量、壁面素材、仕上げのご希望をお送りください。プロジェクトごとに検討します。',
      caseName: '大連 ウォーターファッションプラザ',
      caseContext: 'ステンレス鋼とアクリルによる発光外装文字とテナントブランドウォールです。',
      caseHref: dalianCase,
    },
  },
  {
    slug: 'outdoor-pylon-monument-sign',
    enPath: '/products/outdoor-pylon-monument-sign',
    seo: {
      title: '屋外ピロン・モニュメントサイン｜工場直送製作',
      description:
        '企業キャンパス、ディーラー、商業施設の入口向けランドマーク規模の識別サイン。ピロンとモニュメントの使い分け、素材、構造、風荷重の検討を工場直送で行います。',
    },
    eyebrow: 'ランドマーク入口サイン',
    h1: { lead: '屋外ピロン・', accent: 'モニュメント', tail: 'サイン' },
    subtitle: '企業キャンパス、ディーラー、商業施設の入口にふさわしいランドマーク規模の識別サイン。',
    image: { src: '/assets/images/cat-outdoor.webp', alt: '屋外ピロン・モニュメントサイン', width: 1254, height: 1254 },
    directAnswer: {
      label: 'ピロンとモニュメントの使い分け',
      text: '入口を遠くから識別する必要がある場合、道路沿いの障害物を越えて見せる場合、複数の進入車線をまたぐ場合はピロンを選びます。敷地やランドスケープと一体になった低く幅のある存在がブランドに合う場合はモニュメントを選びます。判断は、進入距離、許容される高さ、敷地の状況、情報の優先順位によって決まり、一律の決まりはありません。',
    },
    questions: [
      {
        heading: '大型ピロンサインの風荷重はどのように検討しますか？',
        text: '耐風性は一律の仕様ではなく、敷地ごとの技術検討事項です。当社の技術チームは、設置場所、全体寸法、周辺条件が確定したうえで、プロジェクト固有の風荷重計算と基礎仕様を提供できます。照明と電源の部材も、確定した屋外用途に対して選定と確認を行います。',
        linkLabel: 'サイン選定ガイドを読む',
        linkHref: '/guides/how-to-choose-the-right-sign-for-your-business',
      },
      {
        heading: '屋外モニュメントサインにはどの素材を使うべきですか？',
        text: '素材の選定は、ブランドが求める仕上げ、敷地の曝露条件、そして構造の加工方法と保守方法から始まります。一般的な選択肢には、溶融亜鉛めっき鋼板、201および304ステンレス鋼、アルミニウム板があり、それぞれ指定の塗装または仕上げシステムを組み合わせます。ステンレスと塗装鋼の工程を比較した素材ガイドもご参照ください。',
        linkLabel: '屋外サインの素材を比較する',
        linkHref: '/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs',
      },
      {
        heading: 'どのくらいのサイズまで製作できますか？',
        text: '全体寸法は、プロジェクト図面、視認距離、設置条件に照らして確認するため、一律の答えはありません。おおよその高さと幅、進入距離、高さの制限があればお知らせください。生産前に技術検討で構造方針を確認します。近年のランドマーク案件は、工場が規模に応じて何を製作しているかを具体的に示しています。',
        linkLabel: 'ランドマーク案件を見る',
        linkHref: '/projects',
      },
      {
        heading: 'ピロンやモニュメントサインでは、いつ技術的な連携が必要ですか？',
        text: '背の高い構造物や敷地と一体になる構造物は、早い段階での技術的な打ち合わせが有効です。風の曝露、基礎や地盤との取り合い、電源経路、保守アクセス、地域の審査要件は、いずれも資料に含めておくべき事項です。入口の識別と敷地全体の導線を併せて求める案件は、ひとつのプログラムとしてまとめて納入することが多くあります。',
        linkLabel: '導線サインシステムを見る',
        linkHref: '/ja/products/architectural-wayfinding-system',
      },
    ],
    specs: [
      {
        title: '素材の方向性',
        items: [
          '塗装構造には指定の塗装システムを施した溶融亜鉛めっき鋼板',
          'ステンレスの外観が必要な場合は201または304ステンレス鋼',
          '軽量な構造部にはアルミニウム板',
        ],
      },
      {
        title: '仕上げの方向性',
        items: ['指定RAL色の粉体塗装', 'ブランドの仕上げ要件に応じた自動車グレード塗装', '露出金属の選択としてヘアラインまたは鏡面のステンレス'],
      },
      {
        title: '構造と取付',
        items: [
          '大型面には内部補強フレーム',
          'L字またはU字の取付ブラケット',
          '敷地が許す箇所では面付け施工',
          '背の高い構造物にはプロジェクト固有の風荷重検討',
        ],
      },
      {
        title: '照明と耐久性',
        items: [
          'プロジェクト仕様に合わせて選定するLEDモジュール',
          'プロジェクト仕様に合わせて選定する電源',
          '屋外用途に応じた環境等級の確認',
          '保証条件はプロジェクト見積もりで確認',
        ],
      },
    ],
    factoryAdvantage:
      '2006年創業、大連の20,000m²の生産拠点からの直送により、溶接から仕上げまでを一貫した品質管理のもとで行います。',
    faqs: [
      {
        question: 'ピロンサインとモニュメントサインの違いは何ですか？',
        answer:
          'ピロンサインは背の高い自立式の識別構造で、遠くから、あるいは周囲の物体より上で読ませたい場合に選ばれます。モニュメントサインは、敷地やランドスケープと一体になった低く幅のある構造です。適切な選択は、進入距離、許容される高さ、敷地の状況、情報の優先順位によって決まります。',
      },
      {
        question: '風荷重計算と基礎仕様は提供されますか？',
        answer:
          '大型のピロンおよびモニュメントサインについては、設置場所、寸法、周辺条件が確定したうえで、プロジェクト固有の風荷重計算と基礎仕様を技術チームが提供できます。一般的な数値に頼らず、プロジェクト資料とあわせて構造検討をご依頼ください。',
      },
      {
        question: 'ピロンおよびモニュメントサインの標準的なリードタイムはどのくらいですか？',
        answer:
          '標準的な生産リードタイムは、案件の複雑さにより7〜14日で、必要に応じて敷地固有の技術検討が加わります。大規模な導入案件はお客様の工程に合わせて段階的に進めます。',
      },
    ],
    cta: {
      heading: 'エントリーサインをご計画ですか？',
      text: '設置場所、おおよその寸法、図面、数量をお送りください。プロジェクトごとに検討します。',
      caseName: '大連 ウォーターファッションプラザ',
      caseContext: '敷地の入口を示す自立式のピロンサインです。',
      caseHref: dalianCase,
    },
  },
];

export const japaneseProductBySlug = Object.fromEntries(
  japaneseProducts.map((product) => [product.slug, product]),
) as Record<string, JapaneseProduct>;
