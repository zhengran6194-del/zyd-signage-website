# ZYD Signage 内容流水线与首 30 天内容日历

> **站点**：zydsign.com / 大连志于道标识（ZYD Signage）  
> **目标**：以 3 个产品导向话题集群建立可持续的 B2B 搜索入口，并把信息型流量导向品类页、询盘页与 WhatsApp。  
> **文档状态**：首版执行稿；所有拟建 URL 在实际发布前需加入 Next.js 路由、导航、sitemap 与结构化数据。本文不替代代码实现。

## 0. 执行边界与事实口径

### 已确认的站内资产

- 11 个现有品类页：
  - `/products/architectural-wayfinding-system`
  - `/products/medical-care-signage`
  - `/products/custom-halo-lit-letters`
  - `/products/ultra-slim-led-light-box`
  - `/products/custom-led-neon-sign`
  - `/products/metal-acrylic-logo-sign`
  - `/products/outdoor-pylon-monument-sign`
  - `/products/custom-landscape-furniture`
  - `/products/outdoor-waste-bin`
  - `/products/custom-planter-box`
  - `/products/complete-signage-system`
- FAQ 页已有 8 个问答，并已预告 4 个指南：
  1. `How Much Do Custom Channel Letters Cost?`
  2. `Front-Lit vs Halo-Lit Channel Letters`
  3. `How to Choose the Right Sign for Your Business`
  4. `304 Stainless Steel vs Galvanized Steel for Outdoor Signs`
- Projects 页已有 7 个案例名称：Setai Israel、Zimbabwe Stadium、Afreximbank Zimbabwe、Tel Hazor Israel、Shell Calgary、Xizhong Island Dalian、Hengli Dalian；首月只将其作为案例页素材入口，不编造项目结果、客户证言或采购金额。

### 允许引用的工厂事实

下列事实来自业务 KB / 交付手册，可在文章中使用；发布时需在文章编辑记录中保存来源与采集日期：

- Est. 2006
- 20,000㎡ factory
- 大连港至日韩 1–2 天（仅用于物流语境，不能外推至其他目的地）
- Global DDP
- MOQ 1
- Lead time 7–14 days
- 1.5mm heavy-duty steel
- 180℃ oven-baked paint process
- WhatsApp：`+86 15931359322`

**禁止事项**：不得编造报价均值、客户证言、认证编号、交付成功率、耐候年限、保修年限、国家/地区覆盖数量、样本统计或项目结果。尤其是数据资产页，必须先人工采集真实样本，再填数字。

> **时间口径冲突处理**：FAQ 现有文案出现 `7–12 working days`，本流水线统一以业务 KB 的 `7–14 days` 为准。后续编辑 FAQ 时应改为统一口径，避免文章与品类页冲突。

---

## 1. 流水线总则

### 1.1 集群角色

- **Cluster A — Wayfinding / Public Direction**：覆盖机场、医院、园区、校园及公共空间的导向系统规划与采购。
- **Cluster B — Illuminated Letters & Light Boxes**：覆盖 front-lit / halo-lit 字体、灯箱、neon flex 与发光品牌标识的选型、规格和采购。
- **Cluster C — Outdoor & Site Signage**：覆盖 pylon / monument、户外材料、景观配套、垃圾桶、花箱及完整场地标识系统。

每个集群均采用：**支柱页（Pillar）→ 商业品类页 → 指南/对比页 → 案例/数据资产页 → 询盘 CTA**。所有子页至少：

1. 从正文或 FAQ 链接回本集群支柱页；
2. 链接到一个最相关的现有 `/products/...` 品类页；
3. 链接到 `/contact` 或 WhatsApp 询盘入口；
4. 支柱页反向列出全部已发布子页，并按“规划/选型/采购/项目”分组。

### 1.2 意图定义

- **交易**：买家已在找供应商、定制产品、OEM/项目采购或报价入口。
- **比较**：买家正在比较材料、结构、照明方式或方案。
- **问题**：买家带着明确采购前问题，需要可执行答案。
- **信息**：买家在建立认知、规划项目或寻找行业参考。

### 1.3 页面类型定义

仅使用五类：**品类、对比、指南、案例、数据资产**。数据资产页在没有真实数据前只能作为占位，不得伪装为已发布研究。

---

## 2. Cluster A：Wayfinding / Public Direction

### 2.1 集群目标与互链闭环

- **支柱页**：`/guides/wayfinding-signage-systems`（拟建，页面类型：指南）
- **交易承接**：`/products/architectural-wayfinding-system`、`/products/medical-care-signage`、`/products/complete-signage-system`
- **主要买家**：建筑事务所、医院/校园/机场项目采购、总包、设施管理团队、标识集成商。
- **闭环规则**：每个子页正文首个相关 CTA 链接支柱页；支柱页每个子主题卡片链接子页，且每个采购型子页再链到一个品类页和 `/contact`。

| URL slug | 目标关键词（英文 B2B 长尾） | 意图 | 页面类型 | 内链来源页与回柱方案 |
|---|---|---|---|---|
| `/guides/wayfinding-signage-systems` | `architectural wayfinding signage system manufacturer` | 信息 | 指南 | 来源：`/products`、`/faq`、`/products/architectural-wayfinding-system`；支柱页汇总本集群全部子页，并链接回导向系统品类页。 |
| `/products/architectural-wayfinding-system` | `custom architectural wayfinding signage system supplier` | 交易 | 品类 | 来源：支柱页、`/guides/wayfinding-signage-systems`、公共项目文章；品类页增加“规划指南”回柱链接。 |
| `/products/medical-care-signage` | `custom hospital wayfinding signage manufacturer` | 交易 | 品类 | 来源：支柱页、`/guides/hospital-wayfinding-signage`、`/products/complete-signage-system`；页面以“医疗导向系统”段落回柱。 |
| `/products/complete-signage-system` | `turnkey signage system manufacturer for commercial projects` | 交易 | 品类 | 来源：支柱页、医院/机场指南、案例页；在“系统采购流程”区回柱，并链接 A/B/C 三个支柱。 |
| `/guides/hospital-wayfinding-signage` | `hospital wayfinding signage planning guide for contractors` | 问题 | 指南 | 来源：`/products/medical-care-signage`、支柱页、`/faq`；正文选型表回柱，采购 CTA 链医疗品类页。 |
| `/guides/airport-wayfinding-signage` | `airport wayfinding signage system procurement checklist` | 问题 | 指南 | 来源：支柱页、`/products/architectural-wayfinding-system`；清单末尾回柱并链 `/contact`。 |
| `/guides/wayfinding-signage-materials` | `best materials for indoor outdoor wayfinding signs commercial buildings` | 比较 | 对比 | 来源：支柱页、`/products/architectural-wayfinding-system`、Cluster C 支柱；材料结论回柱，户外段链接 C 支柱。 |
| `/guides/wayfinding-signage-vs-ada-signage` | `wayfinding signage vs ADA signage for commercial buildings` | 比较 | 对比 | 来源：支柱页、医疗品类页；在术语解释和采购边界处回柱，禁止编造法规编号。 |
| `/case-studies/setai-israel-wayfinding-signage` | `hotel wayfinding signage project manufacturer case study` | 信息 | 案例 | 来源：`/projects`、支柱页、`/products/architectural-wayfinding-system`；案例只写可核实的项目名称/图片/交付范围，正文回柱。 |
| `/case-studies/afreximbank-zimbabwe-signage` | `bank headquarters wayfinding signage supplier case study` | 信息 | 案例 | 来源：`/projects`、支柱页、`/products/complete-signage-system`；不添加结果数字或客户引语，结尾回柱。 |
| `/data/wayfinding-signage-specification-checklist` | `wayfinding signage project specification checklist` | 问题 | 数据资产 | 来源：支柱页、医院/机场指南、工程团队人工整理；发布前采集真实项目规格，页首标注数据日期并回柱。 |

**A 集群发布顺序**：支柱页 → 医疗导向指南 → 机场采购清单 → 材料对比 → 两个案例 → 规格清单数据资产。交易页在支柱页上线时先补齐互链，不等所有文章完成。

---

## 3. Cluster B：Illuminated Letters & Light Boxes

### 3.1 集群目标与互链闭环

- **支柱页**：`/guides/illuminated-signage-buying-guide`（拟建，页面类型：指南）
- **交易承接**：`/products/custom-halo-lit-letters`、`/products/ultra-slim-led-light-box`、`/products/custom-led-neon-sign`、`/products/metal-acrylic-logo-sign`
- **主要买家**：连锁品牌、酒店/商业地产、建筑设计师、门店装修承包商、标识经销商。
- **闭环规则**：B 集群所有比较/成本/安装文章回链 B 支柱；支柱页按“字体、灯箱、neon、材料”分发至品类页，并在每一节保留询盘入口。

| URL slug | 目标关键词（英文 B2B 长尾） | 意图 | 页面类型 | 内链来源页与回柱方案 |
|---|---|---|---|---|
| `/guides/illuminated-signage-buying-guide` | `illuminated signage buying guide for commercial projects` | 信息 | 指南 | 来源：`/faq`、`/products`、4 个 B 品类页；支柱页汇总比较、成本、安装子页，并反链灯箱/字体品类。 |
| `/products/custom-halo-lit-letters` | `custom halo lit channel letters manufacturer` | 交易 | 品类 | 来源：支柱页、`/guides/front-lit-vs-halo-lit-channel-letters`、`/faq`；产品卖点段回柱。 |
| `/products/ultra-slim-led-light-box` | `ultra slim LED light box manufacturer for retail` | 交易 | 品类 | 来源：支柱页、灯箱规格指南、`/products/complete-signage-system`；规格段回柱。 |
| `/products/custom-led-neon-sign` | `custom LED neon sign manufacturer for commercial interiors` | 交易 | 品类 | 来源：支柱页、照明选型指南；FAQ/CTA 回柱并链 `/contact`。 |
| `/products/metal-acrylic-logo-sign` | `custom metal acrylic logo sign manufacturer` | 交易 | 品类 | 来源：支柱页、材料对比、`/products/complete-signage-system`；材料选择段回柱。 |
| `/guides/how-much-do-custom-channel-letters-cost` | `custom channel letters cost factors for B2B projects` | 问题 | 指南 | 来源：FAQ 预告、支柱页、`/products/custom-halo-lit-letters`；成本只讲变量与询盘所需资料，数字若无样本不得填写，正文回柱。 |
| `/guides/front-lit-vs-halo-lit-channel-letters` | `front lit vs halo lit channel letters for commercial buildings` | 比较 | 对比 | 来源：FAQ 预告、支柱页、halo-lit 品类页；结论表回柱并链 `/contact`。 |
| `/guides/led-light-box-specifications` | `commercial LED light box specifications for retail signage` | 问题 | 指南 | 来源：支柱页、`/products/ultra-slim-led-light-box`；规格清单回柱，禁止填入未经 KB 证实的亮度/寿命数据。 |
| `/guides/led-neon-vs-channel-letters` | `LED neon vs channel letters for retail branding` | 比较 | 对比 | 来源：支柱页、neon 品类页、halo-lit 品类页；比较维度链接回柱和两产品页。 |
| `/guides/commercial-signage-lighting-installation` | `commercial illuminated signage installation planning guide` | 问题 | 指南 | 来源：支柱页、4 个 B 品类页、`/faq`；安装责任边界回柱，工程问题 CTA 链 `/contact`。 |
| `/case-studies/shell-calgary-illuminated-signage` | `fuel station illuminated signage manufacturer case study` | 信息 | 案例 | 来源：`/projects`、B 支柱、`/products/custom-halo-lit-letters`；只用现有项目名称与可核实素材，案例末尾回柱。 |
| `/data/illuminated-signage-production-lead-time` | `illuminated signage production lead time data` | 信息 | 数据资产 | 来源：B 支柱、相关品类页、生产/出货台账；发布前采集真实订单周期，数字待人工采集并回柱。 |

**B 集群发布顺序**：先落地 FAQ 预告的成本与 front-lit/halo-lit 对比，再上支柱和灯箱规格；neon 对比、安装指南、Shell 案例随后；生产周期数据资产最后，必须完成采集才可发布。

---

## 4. Cluster C：Outdoor & Site Signage

### 4.1 集群目标与互链闭环

- **支柱页**：`/guides/outdoor-site-signage-systems`（拟建，页面类型：指南）
- **交易承接**：`/products/outdoor-pylon-monument-sign`、`/products/custom-landscape-furniture`、`/products/outdoor-waste-bin`、`/products/custom-planter-box`、`/products/complete-signage-system`
- **主要买家**：园区开发商、商业地产、酒店/景区、城市公共空间项目、景观设计师、总包与采购商。
- **闭环规则**：材料/结构/场地问题文章回 C 支柱；支柱页链接五个交易品类；项目案例同时链 C 支柱、对应产品页和 `/contact`。

| URL slug | 目标关键词（英文 B2B 长尾） | 意图 | 页面类型 | 内链来源页与回柱方案 |
|---|---|---|---|---|
| `/guides/outdoor-site-signage-systems` | `outdoor site signage system manufacturer for commercial developments` | 信息 | 指南 | 来源：`/products`、`/faq`、C 品类页；支柱页按入口、导视、景观配套、维护分组，所有子页回柱。 |
| `/products/outdoor-pylon-monument-sign` | `custom outdoor pylon monument sign manufacturer` | 交易 | 品类 | 来源：C 支柱、结构/材料指南、`/projects`；产品页“场地入口规划”回柱。 |
| `/products/custom-landscape-furniture` | `custom landscape furniture manufacturer for commercial projects` | 交易 | 品类 | 来源：C 支柱、景观配套指南、`/projects`；应用场景段回柱。 |
| `/products/outdoor-waste-bin` | `custom outdoor waste bin manufacturer for public spaces` | 交易 | 品类 | 来源：C 支柱、公共空间指南；材质/维护段回柱。 |
| `/products/custom-planter-box` | `custom architectural planter box manufacturer for commercial entrances` | 交易 | 品类 | 来源：C 支柱、入口景观指南；项目配置段回柱。 |
| `/guides/how-to-choose-the-right-sign-for-your-business` | `how to choose the right outdoor sign for a business location` | 问题 | 指南 | 来源：FAQ 预告、C 支柱、`/products/outdoor-pylon-monument-sign`；决策树回柱并链 `/contact`。 |
| `/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs` | `304 stainless steel vs galvanized steel outdoor signs` | 比较 | 对比 | 来源：FAQ 预告、C 支柱、`/products/metal-acrylic-logo-sign`；只写可核实材料差异，结论回柱。 |
| `/guides/pylon-vs-monument-signs` | `pylon vs monument signs for commercial property entrances` | 比较 | 对比 | 来源：C 支柱、pylon 品类页；入口场景对比回柱，链接 `/contact`。 |
| `/guides/outdoor-signage-for-coastal-environments` | `outdoor signage materials for coastal environments` | 问题 | 指南 | 来源：C 支柱、材料对比、`/products/outdoor-pylon-monument-sign`；不能承诺年限/盐雾等级，正文回柱。 |
| `/guides/complete-site-signage-procurement-checklist` | `commercial site signage procurement checklist for contractors` | 问题 | 指南 | 来源：C 支柱、`/products/complete-signage-system`、案例页；采购清单回柱和完整系统品类。 |
| `/case-studies/xizhong-island-dalian-site-signage` | `industrial site signage manufacturer case study China` | 信息 | 案例 | 来源：`/projects`、C 支柱、完整系统品类；仅使用已有名称和可核实图片/范围，正文回柱。 |
| `/case-studies/hengli-dalian-site-signage` | `industrial park outdoor signage supplier case study` | 信息 | 案例 | 来源：`/projects`、C 支柱、pylon/complete-system 品类；不得添加节省金额或交付结果，结尾回柱。 |
| `/data/outdoor-signage-shipping-volume-weight` | `outdoor signage shipping volume weight calculation data` | 信息 | 数据资产 | 来源：C 支柱、物流/包装记录、真实出货单；数字待人工采集，发布前必须填充真实数据并回柱。 |

**C 集群发布顺序**：先落地“如何选招牌”和 304 vs galvanized 两篇 FAQ 预告，再发布 C 支柱、pylon vs monument、海边环境、采购清单；案例和体积重数据资产后置。

---

## 5. 首 30 天内容日历

### 5.1 发布规则

- **新文频率**：每周 2–4 篇；首月安排 **12 篇新文**。
- **旧文维护硬规则**：每发布 **2 篇新文，必须更新 1 篇旧文**。更新至少包含：事实口径复核、标题/导语意图复核、增加 1 个内部链接、FAQ 或 CTA 检查、记录 `last updated` 日期。
- **优先级**：FAQ 已预告的 4 篇指南 > 与现有品类直接相关的低竞争 B2B 长尾 > 数据资产占位。
- **首月不发布假数据**：数据资产页只进入“研究占位/采集阶段”，没有真实样本和日期就不填数字。
- **署名**：所有新文统一真人署名 **Aaron**；如文章有审核人，记录内部编辑日志即可，不虚构第三方专家。

### 5.2 Week 1（Day 1–7）：先满足已预告 FAQ 需求

| 顺序 | 建议日 | 具体标题与 URL | 集群 | 优先级理由 |
|---|---:|---|---|---|
| 1 | Day 1 | **How Much Do Custom Channel Letters Cost? A B2B Buyer’s Guide** — `/guides/how-much-do-custom-channel-letters-cost` | B | FAQ 已预告且接近交易决策；先回答成本构成、询盘资料与报价变量，避免承诺报价数字。 |
| 2 | Day 3 | **Front-Lit vs Halo-Lit Channel Letters: Which Is Right for Your Project?** — `/guides/front-lit-vs-halo-lit-channel-letters` | B | FAQ 已预告；直接承接 `/products/custom-halo-lit-letters`，覆盖比较意图并推动询盘。 |
| 3 | Day 5 | **How to Choose the Right Sign for Your Business Location** — `/guides/how-to-choose-the-right-sign-for-your-business` | C | FAQ 已预告；可用场地、可见性、材料、照明与采购流程组织问题，承接多个户外品类。 |
| — | Day 7 | **维护旧文**：更新现有 FAQ 页的 lead-time 口径为 7–14 days，并给 2 篇新指南补回链和 CTA。 | B/C | 3 篇新文后已超过 2 篇，必须完成至少 1 次旧文维护；同时解决站内 7–12 与 7–14 冲突。 |

### 5.3 Week 2（Day 8–14）：完成 FAQ 预告并建立支柱

| 顺序 | 建议日 | 具体标题与 URL | 集群 | 优先级理由 |
|---|---:|---|---|---|
| 4 | Day 8 | **304 Stainless Steel vs Galvanized Steel for Outdoor Signs** — `/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs` | C | FAQ 已预告最后一篇；材料比较具有明确采购意图，能链接金属/压克力和户外品类。 |
| 5 | Day 10 | **Architectural Wayfinding Signage Systems: A Procurement and Planning Guide** — `/guides/wayfinding-signage-systems` | A | 作为 A 集群支柱，承接机场/医院/公共空间长尾，向医疗与完整系统品类分发权重。 |
| 6 | Day 12 | **Illuminated Signage Buying Guide for Commercial Projects** — `/guides/illuminated-signage-buying-guide` | B | 作为 B 集群支柱，统一字体、灯箱、neon 和材料比较文章的锚点，承接 4 个交易页。 |
| — | Day 14 | **维护旧文**：更新 FAQ 入口的 4 篇指南卡片，补充支柱页互链、发布时间/更新时间与 Aaron 署名。 | A/B/C | 达到 3 篇新文后执行第二次维护；让 FAQ → 子页 → 支柱 → 品类的路径可爬取。 |

### 5.4 Week 3（Day 15–21）：覆盖最低竞争的项目问题长尾

| 顺序 | 建议日 | 具体标题与 URL | 集群 | 优先级理由 |
|---|---:|---|---|---|
| 7 | Day 15 | **Hospital Wayfinding Signage Planning Guide for Contractors** — `/guides/hospital-wayfinding-signage` | A | 具体角色 + 具体场景长尾，竞争通常低于泛词；直接承接现有 medical-care 品类。 |
| 8 | Day 17 | **Commercial LED Light Box Specifications: What Buyers Should Confirm** — `/guides/led-light-box-specifications` | B | 规格确认型问题接近询盘，能把买家导向 ultra-slim LED light box；未经 KB 证实的亮度/寿命不填。 |
| 9 | Day 19 | **Pylon vs Monument Signs for Commercial Property Entrances** — `/guides/pylon-vs-monument-signs` | C | 场景化比较长尾，直接对应 outdoor-pylon 品类，且能覆盖地产/园区采购语言。 |
| — | Day 21 | **维护旧文**：复核 Week 1 的成本与 front-lit/halo-lit 文，增加 Week 2 支柱页链接和 1 个真实工厂事实来源标记。 | B | 新增 3 篇后执行第三次维护；确保早期高意图页持续获得集群权威。 |

### 5.5 Week 4（Day 22–30）：补齐采购与数据采集基础

| 顺序 | 建议日 | 具体标题与 URL | 集群 | 优先级理由 |
|---|---:|---|---|---|
| 10 | Day 22 | **Complete Site Signage Procurement Checklist for Contractors** — `/guides/complete-site-signage-procurement-checklist` | C | 把信息流量导向 complete-signage-system 交易页，服务总包/采购角色，具备下载/询盘潜力。 |
| 11 | Day 24 | **Commercial Illuminated Signage Installation Planning Guide** — `/guides/commercial-signage-lighting-installation` | B | 安装前问题具有低竞争和高转化价值；可减少询盘往返，并链接 4 个 B 品类。 |
| 12 | Day 26 | **Wayfinding Signage Project Specification Checklist** — `/data/wayfinding-signage-specification-checklist` | A | 先作为数据资产占位；只有工程团队完成真实项目规格采集后，才可从 noindex/草稿转公开页。 |
| — | Day 28 | **维护旧文**：更新 Week 3 三篇文章的 FAQ、链接、事实来源日期；检查每页回柱。 | A/B/C | 新增 3 篇后执行第四次维护，完成首月互链闭环。 |
| — | Day 29–30 | **月末审计与下月排期**：确认 12 篇新文、4 次旧文维护；检查索引状态、内部链接、CTA 点击/WhatsApp 询盘记录；确定 5 个数据资产的采集负责人和截止日。 | A/B/C | 不新增未经采集的数据；把下月数据资产发布建立在真实样本上。 |

**首月产出统计**：12 篇新文（A：3，B：5，C：4；其中数据资产占位 1 篇）+ 至少 4 次旧文维护。FAQ 预告 4 篇全部在 Day 1–8 处理完毕。

---

## 6. 每篇文章的强制写作 checklist

发布前逐项勾选；任何一项不满足都不得进入公开发布队列。

### 6.1 搜索意图与结构

- [ ] URL slug、Title、Meta description、首段和一个 H2 明确对应目标英文 B2B 长尾词；不在同一页混淆多个主意图。
- [ ] H1 只表达一个采购问题/主题；H2 使用买家会直接提出的**问题原句**，例如 `Which sign type fits a commercial entrance?`，不要写空泛的 `Benefits` 或 `Overview`。
- [ ] 开头包含 **40–60 词直答块**：先给结论，再说明适用前提；可被搜索摘要/AI 检索理解，但不夸大能力。
- [ ] 正文至少有一个“下一步采购资料”段，明确需要买家提供的 logo 文件、尺寸、安装环境、数量/目的地等；不把未确认信息写成既定事实。
- [ ] 至少 2 个相关内部链接：一个回本集群支柱页，一个链现有品类页或 `/contact`；锚文本描述目标，不使用大量 `click here`。
- [ ] 页面底部有 CTA：联系 Aaron / WhatsApp `+86 15931359322`；不承诺免费服务、报价时限或交付结果，除非业务负责人确认。

### 6.2 事实、数字与证据

- [ ] 至少放置 **2 个带日期的独有数字**，每个数字注明来源与采集日期（格式示例：`Source: factory KB, checked YYYY-MM-DD` 或 `Source: production/shipping log, collected YYYY-MM-DD`）。
- [ ] 可用事实优先从第 0 节工厂口径中选择；若文章需要报价、体积重、样本分布、交期分布等新数字，必须走第 7 节采集流程。
- [ ] 未采集的数字使用明确占位：`[数字待人工采集；发布前必须填充真实数据]`，不可用估算、行业平均或 AI 生成数字替代。
- [ ] 不编造认证编号、客户证言、客户 ROI、项目金额、成功率、保修/耐候年限或未在业务 KB 明确的技术参数。
- [ ] 案例页只写 Projects 页已有项目名称和经过人工核验的范围/图片；缺少资料时写“待项目团队补充”，不补写结果。

### 6.3 可抓取性、信任与上线

- [ ] 添加 FAQ 区块和有效 `FAQPage` schema；问题必须与可见 FAQ 一致，不用 schema 隐藏不可见内容。
- [ ] 真人署名 **Aaron**；显示发布日期和最后更新日期；修改旧文时保留变更记录。
- [ ] 标题、Meta、H1、OG 文案不重复堆关键词；图片有准确英文 alt，避免把图片文件名当主题。
- [ ] 发布前检查移动端首屏、链接状态、canonical、sitemap、robots 和页面是否误设 noindex；这些是上线检查，不在本文中直接修改代码。
- [ ] 事实零编造：编辑者在稿件记录中粘贴来源、采集日期和审核人；任何无法证明的句子删除或改为待核实标记。

---

## 7. 数据资产页候选与采集协议

以下候选页用于吸引引用、支撑询盘和形成长期差异化，但全部是**研究占位**。数字必须由人工从真实记录采集，不能预填假数字。

| 候选页 | 建议样本来源 | 采集方式 | 最低发布条件 |
|---|---|---|---|
| `/data/illuminated-signage-quote-range` — Illuminated Signage Quote Range by Project Inputs | 真实历史询盘/正式报价单；按产品类型、尺寸、数量、照明方式、目的地分组 | Aaron 或销售负责人导出已获批准的去标识化报价；记录样本截止日、币种、是否含包装/运费；由财务/销售复核 | **数字待人工采集，发布前必须填充真实数据**；至少注明样本数、日期范围和排除项，不公开客户身份。 |
| `/data/illuminated-signage-production-lead-time` — Production Lead Time by Sign Type | 生产排程、完工单、出货单 | 取真实订单的确认生产日与完工/出货日，按品类分组；记录异常订单原因和截止日 | **数字待人工采集，发布前必须填充真实数据**；不能以 KB 的 7–14 days 代替分布统计。 |
| `/data/signage-sample-proofing-cycle` — Signage Sample and Proofing Cycle | 打样申请、3D mockup/工程确认记录 | 统计真实项目从资料齐全到首次可审稿件的日期差；由工程负责人确认起止点 | **数字待人工采集，发布前必须填充真实数据**；未定义起止点前不发布平均值。 |
| `/data/outdoor-signage-shipping-volume-weight` — Outdoor Signage Shipping Volume Weight | 真实装箱单、商业发票、承运商计费记录 | 收集去标识化出货记录，按包装件数、体积、实重/计费重、目的地和日期归档；物流负责人复核 | **数字待人工采集，发布前必须填充真实数据**；不从单一订单推导行业规律。 |
| `/data/wayfinding-signage-specification-checklist` — Wayfinding Signage Specification Checklist Data | 已完成的医院、机场、园区或公共空间项目规格表 | 工程团队整理真实项目字段：位置、标识类型、材料、尺寸、安装方式；逐项标注来源项目和采集日期 | **数字待人工采集，发布前必须填充真实数据**；项目名称/图片须获业务授权后公开。 |

### 数据资产发布流程

1. **定义问题和字段**：先写页面要回答的买家问题，锁定样本范围、单位、时间窗口和排除项。
2. **人工采集**：从销售、工程、生产、物流原始记录导出；去除客户个人信息与保密价格。
3. **复核与版本化**：Aaron + 对应业务负责人复核，记录 `collected_at`、`sample_definition`、`source_owner`。
4. **写作与标注**：页面显著位置写样本来源、日期、局限性；缺数字时保持草稿或 noindex。
5. **发布后更新**：每月检查是否有足够新增样本；更新数字必须改变 `last updated`，并在 changelog 写明变更。

---

## 8. 每日持续任务与目标

### 每日 30–45 分钟执行清单

- **搜索与需求**：记录 3 个真实买家问题（询盘、销售聊天、FAQ、搜索词或项目 brief），归入 A/B/C 和意图；不得凭空制造“客户常问”。
- **内容生产**：按日历完成一个可交付单元：标题/Meta、H2 问题、40–60 词直答块、一个内部链接段或一段事实核验。
- **事实检查**：核对当日使用的数字和来源日期；发现 7–12 / 7–14 等冲突时，以业务 KB 为准并登记待修复页。
- **内链维护**：新文发布前确认回支柱；每两篇新文后安排一次旧文更新，不得跳过。
- **转化记录**：记录 CTA/WhatsApp 点击、有效询盘主题和缺失信息，反哺下周选题；不把点击直接写成订单或收入。

### 每周目标

- 新发布 2–4 篇，或在无法保证事实质量时少发、不凑数。
- 至少完成 1 次事实审计和 1 次内部链接巡检。
- 每 2 篇新文至少维护 1 篇旧文。
- 新增 5–10 个待验证买家问题，并筛出下周 2–4 个最低竞争、高商业相关长尾。
- 更新内容看板：URL、主关键词、意图、集群、状态（Brief / Draft / Fact check / Published / Refresh）、作者、发布日期、最后更新日、来源链接。

### 月度目标

- 形成至少 1 个能回链现有品类页的完整集群路径，而不是只累计博客数量。
- 检查已发布页是否被 sitemap 收录、是否出现重复意图、是否能从支柱页两次点击内到达。
- 以“有效询盘质量、目标页访问、CTA/WhatsApp 点击、已采集数据资产数量”衡量，不用空泛字数或发布总量作为唯一目标。

---

## 9. 首月验收清单

- [ ] A/B/C 三个集群各有 1 个支柱页规划。
- [ ] 页面地图共 **36 行**：A 11 行、B 12 行、C 13 行；每行都有 URL、英文 B2B 长尾、意图、页面类型和内链来源/回柱方案。
- [ ] 首月安排 **12 篇新文**（A 3、B 5、C 4）和至少 **4 次旧文维护**；FAQ 预告四篇在 Day 1–8 优先完成。
- [ ] 每篇稿件均执行 H2 买家问题原句、40–60 词直答块、2 个带日期数字及来源、FAQ schema、Aaron 署名、零编造检查。
- [ ] 5 个数据资产候选均已标注样本来源、人工采集方式，以及“数字待人工采集，发布前必须填充真实数据”。
- [ ] 现有工厂事实仅按第 0 节口径使用；未把 FAQ 中冲突的 7–12 days 作为新的事实扩散。
- [ ] 发布前由技术负责人补齐拟建路由、sitemap、canonical、schema 和页面模板；本文不修改任何代码文件。
