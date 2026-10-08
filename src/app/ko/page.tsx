import Image from 'next/image';
import Link from 'next/link';
import WhatsAppCta from '@/components/WhatsAppCta';

/**
 * Korean home page (phase one).
 *
 * It mirrors the sections of the English home page with Korean copy, and states
 * only what the English pages already publish: the 2006 founding year, the
 * 20-year trading history, the 20,000m² production base, the eight-step
 * process, the quality and compliance wording, MOQ 1, the 7–14 day lead time and
 * the DDP delivery scope. Products and guides are published in English, so those
 * links point at the pages that exist rather than at Korean addresses that do
 * not.
 */
const trustPoints = [
  { value: 'EST. 2006', label: '2006년 설립' },
  { value: '20 YEARS', label: '업계 경력' },
  { value: '20,000m²', label: '자체 생산 기지' },
  { value: 'GLOBAL DDP', label: '전 세계 DDP 배송' },
];

const steps = [
  { no: '01', title: '기술 상담', desc: '사이니지 요구사항과 설치 조건을 분석합니다.' },
  { no: '02', title: '정밀 3D 목업', desc: '완성 모습을 3D로 먼저 확인합니다.' },
  { no: '03', title: '제작 도면(숍 드로잉)', desc: '구조와 전기 배선 상세 도면을 작성합니다.' },
  { no: '04', title: 'CNC 가공', desc: '고정밀 절단과 조립을 진행합니다.' },
  { no: '05', title: '도장', desc: '설치 환경에 맞는 마감을 적용합니다.' },
  { no: '06', title: 'LED 조립', desc: '사양에 맞는 LED 모듈과 배선을 조립합니다.' },
  { no: '07', title: '점등 검사', desc: '점등 테스트를 포함한 공정별 품질 확인을 진행합니다.' },
  { no: '08', title: '전 세계 DDP 배송', desc: '산업용 포장과 도어 투 도어 물류를 준비합니다.' },
];

const qualityPoints = [
  { title: '품질 관리', desc: '프로젝트별로 공정을 확인합니다.' },
  { title: '전기 요건', desc: '납품지 조건에 맞춰 확인합니다.' },
  { title: '검사 범위', desc: '생산 전에 합의합니다.' },
  { title: '부자재 선정', desc: '사양에 맞춰 선정합니다.' },
];

const products = [
  { name: '할로(뒷면 발광) 문자', href: '/products/custom-halo-lit-letters' },
  { name: '웨이파인딩 사인 시스템', href: '/products/architectural-wayfinding-system' },
  { name: '의료 시설 사이니지', href: '/products/medical-care-signage' },
  { name: '모뉴먼트·파일런 사인', href: '/products/outdoor-pylon-monument-sign' },
  { name: 'LED 라이트박스', href: '/products/ultra-slim-led-light-box' },
  { name: 'LED 네온 사인', href: '/products/custom-led-neon-sign' },
  { name: '금속·아크릴 로고 사인', href: '/products/metal-acrylic-logo-sign' },
  { name: '조경 가구', href: '/products/custom-landscape-furniture' },
  { name: '통합 사이니지 시스템', href: '/products/complete-signage-system' },
  { name: '실외 쓰레기통', href: '/products/outdoor-waste-bin' },
  { name: '맞춤형 플랜터', href: '/products/custom-planter-box' },
  { name: '아크릴 데스크 사인', href: '/products/acrylic-desk-sign' },
  { name: '금속 A형 입간판', href: '/products/portable-metal-a-frame-sign' },
];

const guides = [
  { title: '채널 레터 가격은 어떻게 결정되는가', href: '/guides/how-much-do-custom-channel-letters-cost' },
  { title: '전면 발광과 할로(뒷면) 발광의 차이', href: '/guides/front-lit-vs-halo-lit-channel-letters' },
  { title: '사업장에 맞는 사인 선택 방법', href: '/guides/how-to-choose-the-right-sign-for-your-business' },
  { title: '실외 사인 소재: 304 스테인리스와 용융아연도금강', href: '/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs' },
];

const whyDirect = [
  { title: '공장 직송', desc: '프로젝트 팀과 직접 연결된 자체 생산입니다.' },
  { title: '품질 관리', desc: '확립된 공정과 프로젝트별 최종 확인.' },
  { title: '전 세계 DDP 배송', desc: '사이니지 프로그램을 위한 글로벌 배송 지원.' },
  { title: 'OEM / ODM 대응', desc: '시공사·설계사무소·브랜드와의 기술 협의.' },
];

export default function KoreanHome() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-20 text-white lg:pt-32 lg:pb-28">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero-bg-factory-aerial.jpg"
            alt="ZYD Signage 생산 기지"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-blue-300">공장 직송 사이니지 제조</p>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight lg:text-6xl">
              공장 직송 맞춤형 사이니지
            </h1>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-300 lg:text-lg">
              2006년부터 쌓아온 경험으로 호텔·상업 시설·산업 단지 프로젝트에 맞춤형 사이니지를 공급합니다. 소재와 마감은 설치 환경에 맞춰 선정합니다.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button button-green-base px-10 py-4">
                무료 3D 목업과 견적 요청
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
              >
                제품 라인 보기
              </Link>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-white/15 pt-10 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.label}>
                <dt className="text-2xl font-black tracking-tight lg:text-3xl">{point.value}</dt>
                <dd className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{point.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2. PROCESS */}
      <section className="section bg-white">
        <div className="container">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">Industrial Excellence</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-slate-900 lg:text-4xl">8단계 제작 공정</h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-600">
            숙련된 가공 기술과 공정별 확인을 결합해 프로젝트마다 사이니지를 제작합니다.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.no} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-xs font-black tracking-[0.3em] text-blue-600">{step.no}</span>
                <h3 className="mb-3 mt-4 text-lg font-black tracking-tight text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS */}
      <section className="section bg-slate-100">
        <div className="container">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">Product Lines</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-slate-900 lg:text-4xl">사이니지 제품 라인</h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-600">
            전 세계 건축 프로젝트를 위해 사양에 맞춰 제작합니다. 각 제품 페이지는 영어로 제공됩니다.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm font-black tracking-tight text-slate-900 transition-colors hover:border-blue-600 hover:text-blue-700"
              >
                {product.name}
                <span aria-hidden="true" className="text-blue-600">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QUALITY */}
      <section className="section bg-white">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">Quality Assurance</p>
            <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-slate-900 lg:text-4xl">
              품질 기준과 적합성 확인
            </h2>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-slate-600">
              인증, 부자재 선정, 전기 안전 요건은 프로젝트 사양과 납품지 조건에 맞춰 확인합니다.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {qualityPoints.map((point) => (
                <div key={point.title} className="border-l-2 border-blue-600 pl-5">
                  <h3 className="mb-2 text-sm font-black uppercase tracking-widest text-slate-900">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <Image
              src="/assets/images/factory-overview.jpg"
              alt="ZYD Signage 공장의 품질 확인"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. WHY FACTORY DIRECT */}
      <section className="section bg-slate-950 text-white">
        <div className="container">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300">Why Work Direct</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight lg:text-4xl">프로젝트에 맞춘 일관된 제작</h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-300">
            사양 협의부터 공장 생산, 품질 확인, 전 세계 배송까지 하나의 흐름으로 진행합니다.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyDirect.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/15 bg-white/10 p-6 lg:p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/15 text-xl font-black text-emerald-300">↗</div>
                <h3 className="mb-3 text-lg font-black uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GUIDES */}
      <section className="section bg-white">
        <div className="container">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-700">Signage Insights</p>
          <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-slate-900 lg:text-4xl">
            발주에 도움이 되는 가이드
          </h2>
          <p className="mb-14 max-w-2xl text-base leading-relaxed text-slate-600">
            발주 전에 확인해야 할 기술 사항을 정리했습니다(영어).
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-blue-600"
              >
                <h3 className="mb-3 text-base font-black tracking-tight text-slate-900">{guide.title}</h3>
                <span className="text-xs font-black uppercase tracking-widest text-blue-700">가이드 읽기 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section id="contact" className="section relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/images/grid-pattern.svg" alt="" fill unoptimized sizes="100vw" className="object-cover" />
        </div>
        <div className="container relative z-10 max-w-xl text-center">
          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight lg:text-4xl">견적 요청</h2>
          <p className="mb-10 text-base text-slate-300">
            기술 상담과 공장 직송 가격은 엔지니어링 팀이 담당합니다.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="button button-green-base px-10 py-3">
              무료 견적
            </Link>
            <WhatsAppCta
              label="도면 보내기"
              message="안녕하세요 Aaron. 사이니지 프로젝트 도면을 보내고 싶습니다."
              brief={{
                product: '사이니지 프로젝트',
                heading: '보내주실 정보',
                items: [
                  '도면 또는 로고 파일',
                  '사인 종류·대략적인 치수·수량',
                  '실내/실외 여부와 설치 면 상태',
                  '마감과 조명 방향',
                  '설치 장소 사진과 납품 국가',
                ],
                footnote: '가지고 계신 자료로 충분합니다. 도면, 대략적인 치수, 수량, 마감과 조명 방향, 설치 장소 사진, 납품 국가를 알려주세요.',
              }}
              className="inline-flex items-center justify-center rounded border border-emerald-300 px-10 py-3 text-[12px] font-bold uppercase text-emerald-100 transition-all hover:bg-emerald-400 hover:text-slate-950"
            />
          </div>
          <p className="mt-8 text-sm text-slate-400">
            이메일 상담은{' '}
            <a href="mailto:zhengran@zydsign.cn" className="font-black text-emerald-300 hover:text-emerald-200">
              zhengran@zydsign.cn
            </a>{' '}
            로 보내주세요.
          </p>
        </div>
      </section>
    </>
  );
}
