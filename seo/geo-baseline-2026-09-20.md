# zydsign.com GEO 基线审计报告

- **站点**：https://www.zydsign.com （Dalian Zhiyudao Signage & Tech. Co., Ltd. / ZYD Signage）
- **报告日期**：2026-09-20（Asia/Shanghai）
- **抓取时间戳**：2026-09-20T01:47Z（原始 HTML 探针）
- **报告性质**：基线快照，供后续定期复测对比。本次为**只读审计**，未修改任何站点文件、未 push、未部署。
- **证据文件**：本报告所有站点侧证据来自本次实际 HTTP 抓取（Node `fetch`，不执行 JavaScript）与源码只读检查；所有检索侧证据来自本次实际检索（查询语句与来源 URL 逐条保留于下文）。

---

## 1. 方法学与局限

### 1.1 本次用了什么检索方式

| 观测层 | 方法 | 说明 |
|---|---|---|
| 检索面 | `web_search`（搜索引擎结果面） | 用真实买家问题的英文原文逐条检索，记录返回结果中是否出现本品牌及占位来源 |
| 站点面 | Node.js `fetch` 原始 HTTP 抓取（**不执行 JS**） | 模拟 AI 爬虫视角，验证服务端预渲染、robots.txt、llms.txt、结构化数据 |
| 爬虫面 | 自定义 User-Agent 探针 | 分别以 GPTBot / ClaudeBot / PerplexityBot / 普通浏览器 UA 请求首页，对比响应字节数与正文 |
| 代码面 | 源码只读检查（`grep` / `read`） | 核对品牌口径、结构化数据字段、内链，附 `file:line` |

### 1.2 样本量

- **14 条查询**：11 条品类/问题型（模拟海外买家在询盘前的调研）+ 3 条品牌/实体型（测试实体解析能力）。
- 每条查询取搜索引擎返回的前 9–10 条结果进行判读。

### 1.3 关键局限（务必阅读）

1. **本基线不等于"直接询问某个特定 AI 助手"。** 本次用可复现的搜索引擎检索面作为**替代观测**，衡量的是"品牌是否已进入可被检索与引用的公开语料池"。ChatGPT / Gemini / Perplexity 在给定问题下的**真实回答内容与 citation**，本次**未采集**，报告中的任何结论都不得被解读为某个 AI 助手的实际输出。
2. **搜索结果具有时效性。** 结论仅代表 2026-09-20 这一时点。
3. **结果受引擎索引与地区影响。** 不同引擎、不同地区可能返回不同结果。
4. **未能验证的项目已在下文逐条标注「未能验证」**，均未用推断或训练知识填充。

### 1.4 本次「未能验证」清单

| 项目 | 原因 |
|---|---|
| 是否已建立 LinkedIn **公司主页** | `https://www.linkedin.com/in/…553686404` 对非浏览器请求返回 HTTP **999**（LinkedIn 反爬），无法确认页面存活与归属；且源码登记的是**个人**主页 URL 而非公司主页 |
| `x.com/ZYDsign` 账号的实际内容与活跃度 | 返回 HTTP 200，但 X 对未登录请求仅返回 JS 外壳，无法确认内容 |
| TikTok `@zydsign` 的视频数量与更新频率 | 仅通过检索结果确认帐号存在与简介文案（"Signs done right, no ugly designs / Custom signage expert"） |
| ChatGPT / Gemini / Perplexity 对本品牌的真实回答 | 本次未做 AI 采集（需另行授权的 AI Search 采集配额） |
| Google / Bing 实际收录量与索引状态 | 仅有 `site:` 查询的定性结果，未取收录量数字 |
| 各查询在 AI 引擎中的实际 citation 域名 | 本次记录的是搜索引擎结果面，**不是** AI 答案的引用来源 |

---

## 2. AI 可见性基线（14 条查询逐条结果）

### 2.1 核心结论

**品牌在全部 11 条品类/问题型查询中命中率 = 0/11。品牌仅在查询语句中直接包含品牌名时才会出现（3/3）。**

这构成一个「**仅品牌名可见**」的检索足迹：当买家按品类、问题、场景、材料、物流来调研时，zydsign 完全不在候选池内；只有当买家已经知道这个名字时才能找到它。

### 2.2 品类 / 问题型查询（买家调研路径）— 0/11 命中

| # | 英文查询语句（原文） | zydsign 出现？ | 占位来源类型 | 实际占位的具体域名 |
|---|---|---|---|---|
| Q1 | `best wayfinding signage manufacturer in China for shopping mall project` | **否** | 竞品自建站 + 目录站 | yijiaocn.com、cosunsign.com、zigosign.com、sunpinsign.com、ezdsigns.com、ikinor-interactive.com、ensun.io、behance.net |
| Q2 | `who manufactures custom backlit channel letters for overseas commercial projects` | **否** | 美国本土制造商自建站 + 中国竞品 | wwsign.com、impactsigns.com、channelletter.com、escomanufacturing.com、frontsigns.com、selegnasigns.com、fastsigns.com、cosunsign.com、isledsign.com |
| Q3 | `pylon sign for shopping mall supplier DDP shipping China` | **否** | 中国竞品站 + B2B 平台 | sunsongss.com、frontsigns.com、cosunsign.com、gdguose.com、gdgrandview.com、exceedsignage.com、landeasigns.com、alibaba.com、made-in-china.com |
| Q4 | `tactile braille signage supplier China ADA compliant signs manufacturer export` | **否** | 中国竞品 + 美国制造商 + B2B | yijiaocn.com、cnnameplate.com、steelartco.com、longlusigns.com、xcwjc.com、rowmark.com、made-in-china.com |
| Q5 | `DDP shipping cost for custom signage from China to USA door to door` | **否** | 货代公司自建站 + UGC + 视频 | ddpchain.com、aeblogistics.com、aideliv.com、stusupplychain.com、forestshipping.com、reddit.com（r/FulfillmentByAmazon）、quora.com、youtube.com |
| Q6 | `reliable Chinese signage manufacturer with ISO 9001 factory for hotel signage project` | **否** | 中国竞品站 + 榜单文 + Reddit | hicensign.com、landeasigns.com、ikinor-interactive.com、gdgrandview.com、allseesign.com、chsignage.com、reddit.com（r/Printing） |
| Q7 | `custom signage factory China MOQ 1 metal acrylic signs OEM ODM architectural signage` | **否** | 中国竞品站 + B2B 平台 | talmudcn.com、chsignage.com、isledsign.com、sunsignad.com、3dlettersign.com、blueskysignage.en.alibaba.com、made-in-china.com |
| Q8 | `how to vet a signage manufacturer in China before sending artwork offshore project` | **否** | 中国竞品站科普文 + Reddit + 法务博客 | ftsignage.com、mariabrophy.com、iyardsign.com、harris-sliwoski.com、huixinledtv.com、led3dsigns.com、reddit.com（r/CommercialAV） |
| Q9 | `reddit contractors recommend Chinese signage manufacturer for large wayfinding project` | **否** | Reddit 为主 | reddit.com（r/signshop、r/LandscapeArchitecture、r/architecture、r/digitalsignage、r/IndustrialDesign、r/smallbusiness、r/printondemand、r/plano） |
| Q10 | `zydsign`（品牌名裸查询） | **否（结果完全偏离）** | 通用词典/百科/设计类站点 | design.com、en.wikipedia.org（"Design"）、merriam-webster.com、dictionary.cambridge.org、theicod.org、designboom.com |
| Q11 | `signage manufacturer in Dalian China with 20000 sqm factory wayfinding` | **否** | 美国零售印刷站 + 百科/视频 | signs.com、vistaprint.com、nationalsafehavenalliance.org、monarchjointventure.org、en.wikipedia.org、youtube.com、access-board.gov |

**关于 Q10、Q11 的补充判读**：这两条查询直接使用了本品牌的自述差异化事实（品牌名 "zydsign"、地理 "Dalian"、规模 "20000 sqm"），仍**未能调出品牌自身站点或任何相关页面**。Q10 连"标识标牌"语义都未触发，说明该名称在检索语料中尚未形成任何实体强度。

### 2.3 品牌 / 实体型查询 — 3/3 命中（但仅限自有资产）

| # | 英文查询语句（原文） | zydsign 出现？ | 被如何描述 / 引用了哪些事实 | 主要来源类型 |
|---|---|---|---|---|
| Q12 | `site:zydsign.com` | **是** | 自有站已被收录，返回 6 条：首页、`/about`、4 篇 `/guides/*`（结果中出现 `zydsign.com` 与 `www.zydsign.com` 两种主机名写法） | **自身站** |
| Q13 | `"Dalian Zhiyudao Signage" OR "ZYD Signage" Dalian manufacturer` | **是** | 自有站 `/about` 被引用为："Dalian Zhiyudao Signage & Tech. Co., Ltd. (ZYD) is a factory-direct manufacturer serving global B2B signage projects for **over 18 years**."（见 §4.1 口径冲突） | **自身站 + Alibaba 家族** |
| Q14 | `"ZYD Signage" OR "zydsign" company page linkedin.com` | **是** | 自有站 `/faq`、`/guides/304-…`、`/products/ultra-slim-led-light-box` 被引用；同时命中 TikTok `@zydsign` 与 TikTok 「Pylon Sign」话题页（含 "TikTok video from zydsign (@zydsign) … On-Site Shoot: US…"） | **自身站 + 社媒（TikTok）** |

**负面观察（品牌名带来的实体混淆）**：Q14 同时召回同名但**无关**的账号——Facebook 上名为 "ZYDSIGN" 的孟加拉语个人贴文，以及一个名为 "ZYDSIGN"、24 位订阅者的游戏类 YouTube 频道。当前品牌名在检索面不具备实体唯一性。

### 2.4 错误 / 冲突信息的实际发现

| 冲突 | 实际出现的表述 | 来源 URL |
|---|---|---|
| 成立年份（三套口径） | ① "over **18 years**" ② "EST. **2006**" / "**20** Years" ③ "**established in 2011** with **14 years** of export experience" | ① https://zydsign.com/about（亦见 `src/app/about/page.tsx:17`）② `src/app/page.tsx:263`、首页 ③ https://suppliers.alibaba.com/dalian-zhiyudao-signage-tech-co-ltd_2500000111235 |
| Alibaba 平台入驻年限 | "**1 yr**"（同时标注 "100+ staff 20,000+ m² manufacturer"）；另有产品页显示 "**2 yrs** on Alibaba.com" | https://www.accio.com/wow/supplier-stainless-steel-letters-manufacturer.html ；https://germany.alibaba.com/product-detail/3D-Logo-Light-Letter-Sign-Led_1601484425846.html |

**判读**：以上三套成立年份口径互相矛盾（18 年 / 20 年 / 14 年）。这是本次基线中最具实质影响的问题——AI 引擎在合成实体描述时，可能采信 Alibaba 侧口径而输出"成立 2011 年、14 年出口经验"，与站点自述不符。注意 `suppliers.alibaba.com` 页面（第三方平台侧、可被检索）目前对该品牌的表述优先级很高，因为它同时出现在 Q13 的返回结果中。

---

## 3. 第三方引证面（实际可检索到的站外来源）

以下为本次**实际检索到**、会提及该品牌的站外来源。未列出的类型代表本次**未检索到**（见 §3.2）。

### 3.1 实际存在的站外来源

| 来源 | URL | 类型 | 可检索性（本次实测） |
|---|---|---|---|
| Alibaba 国际站店铺首页 | https://dlzydbs.en.alibaba.com/ | B2B 平台店铺 | HTTP 200；检索可命中（Q13）。描述："Products: Signboard, Wayfinding Directional Signs, LED Lightbox, Stereoscopic Characters, Metal Products." |
| Alibaba 公司档案页 | https://dlzydbs.en.alibaba.com/company_profile.html | B2B 平台店铺 | HTTP 200；检索可命中（Q13） |
| Alibaba 供应商页（英文站） | https://suppliers.alibaba.com/dalian-zhiyudao-signage-tech-co-ltd_2500000111235 | B2B 平台目录 | HTTP 200；检索可命中（Q13）。**含冲突口径 "established in 2011 with 14 years of export experience"** |
| Alibaba 产品详情页（≥3 条） | https://www.alibaba.com/product-detail/Custom-Advertising-Stainless-Steel-LED-Dual_1601850851187.html<br>https://www.alibaba.com/product-detail/12V-Safe-Energy-Saving-High-Transparency_1601910829705.html<br>https://germany.alibaba.com/product-detail/3D-Logo-Light-Letter-Sign-Led_1601484425846.html | B2B 平台商品页 | 检索可命中（Q13）。商品页内含品牌叙述："At ZYD Signage, we solve this with our 'Northern Industrial…'"——**品牌文案目前主要通过 Alibaba 被检索到，而非通过自有域名** |
| Alibaba LED 照明类目供应商列表 | https://electronics.alibaba.com/supplier/led-lighting-advertising-signage-factory?page=2 | B2B 平台目录 | 检索可命中（Q13） |
| Accio 供应商榜单元页 | https://www.accio.com/wow/supplier-stainless-steel-letters-manufacturer.html | 第三方目录站 | HTTP 200；检索可命中（Q13） |
| TikTok 账号 | https://www.tiktok.com/@zydsign | 社媒（自有帐号） | HTTP 200；检索可命中（Q14）。简介："Signs done right, no ugly designs / Custom signage expert" |
| TikTok 话题页（Pylon Sign） | https://www.tiktok.com/discover/pylon-sign | 社媒（平台页） | 检索可命中（Q14），页内含 zydsign 视频条目 |
| X（Twitter）账号 | https://x.com/ZYDsign | 社媒（自有帐号） | HTTP 200，但**内容未能验证**（见 §1.4） |
| LinkedIn 个人主页（源码登记） | https://www.linkedin.com/in/%E5%88%9A-%E5%88%98-553686404 | 社媒（个人页） | HTTP **999**，**未能验证** |

### 3.2 本次未检索到的来源类型（引证面空白）

以下类型在 14 条查询中**均为 0 命中**，是本品牌第三方引证面的结构性缺口：

- **行业社区 / UGC 讨论**：Reddit 在所有 11 条品类查询中都出现了（r/signshop、r/CommercialAV、r/Printing、r/LandscapeArchitecture 等），但**从未提及本品牌**。其中 r/signshop 存在一条高度相关的买家求助帖：https://www.reddit.com/r/signshop/comments/1vqky4s/looking_for_custom_signage_manufacturers_in_china/ （"Looking for custom signage manufacturers in China"，提及 wayfinding、mixed-use development、modular wayfinding systems、turnkey service），本品牌未出现在该讨论中。
- **视频平台（YouTube）**：在 Q5、Q11 中出现，但均为无关内容，无本品牌内容。
- **行业榜单 / 供应商目录（标识行业专项）**：ensun.io、landeasigns.com 榜单、ikinor-interactive.com 榜单等多次占位，本品牌均未入选。
- **贸易媒体 / 新闻稿 / 案例报道**：0 命中。
- **LinkedIn 公司主页**：未能验证存在（源码登记为个人主页）。
- **客户 / 承包商侧的独立引用**（第三方博客、工程案例引用、目录站点评）：0 命中。

**判读**：当前第三方引证面**几乎完全等于 Alibaba 家族 + 一个 TikTok 帐号**。这意味着 AI 引擎若要在"品类/问题"类问题上引用本品牌，可用的第三方素材极少；而自有域名虽然技术健康，却尚未进入这些问题的结果池。

---

## 4. 站内 GEO 就绪度（实测）

### 4.1 robots.txt 对 AI 爬虫的实际策略

**实测原文**（`https://www.zydsign.com/robots.txt`，HTTP 200，response body 原文）：

```
User-Agent: *
Allow: /

Host: https://www.zydsign.com
Sitemap: https://www.zydsign.com/sitemap.xml
```

| 项目 | 实测结果 | 判读 |
|---|---|---|
| GPTBot（OpenAI） | **未被单独声明** → 由 `User-Agent: *` 通配符覆盖 → **允许** | ✅ 未被阻断 |
| ClaudeBot（Anthropic） | 同上 → **允许** | ✅ 未被阻断 |
| PerplexityBot | 同上 → **允许** | ✅ 未被阻断 |
| Google-Extended | 同上 → **允许** | ✅ 未被阻断（未被用于阻断训练/引用） |
| 其他（OAI-SearchBot、Bingbot 等） | 同上 → **允许** | ✅ 未被阻断 |
| `Host:` 指令 | 存在 | ⚠️ 该指令为 Yandex 专有，Google/Bing **忽略**；无害但无效 |
| `Crawl-delay` | 无 | 无速率限制 |

**爬虫 UA 实测对比**（对首页发起请求，同一时间点）：

| User-Agent | HTTP 状态 | 响应字节数 | 正文字符数 | 是否含 H1 文案 | `x-vercel-cache` |
|---|---|---|---|---|---|
| GPTBot | 200 | 110,875 | 6,346 | 是 | HIT |
| ClaudeBot | 200 | 110,875 | 6,346 | 是 | HIT |
| PerplexityBot | 200 | 110,875 | 6,346 | 是 | HIT |
| 普通浏览器 UA | 200 | 110,875 | 6,346 | 是 | HIT |

**结论**：四种 UA 返回**完全相同的 110,875 字节响应**，**无 UA 差异化、无隐形拦截**。robots.txt 层面与响应层面均未对 AI 爬虫设限。

### 4.2 llms.txt 是否存在

| URL | 实测状态 |
|---|---|
| https://www.zydsign.com/llms.txt | **HTTP 404** |
| https://www.zydsign.com/llms-full.txt | **HTTP 404** |

**结论**：**不存在** `llms.txt`（404 返回站点自身的 404 页面）。这是本次基线中一项明确的空白。

### 4.3 页面是否服务端预渲染（AI 爬虫一般不执行 JS）

**实测方法**：Node.js `fetch` 原始 HTML（不执行任何 JavaScript），检查正文是否已存在于 HTML 中。

| 路径 | HTTP | HTML 字节 | 原始 HTML 内正文字符数 | H1 |
|---|---|---|---|---|
| `/` | 200 | 110,875 | 6,346 | Premium Custom Signage Solutions Direct from Factory. |
| `/products` | 200 | 58,732 | 2,346 | Signage Solutions |
| `/products/architectural-wayfinding-system` | 200 | 47,636 | 4,984 | Architectural Wayfinding Systems |
| `/products/custom-halo-lit-letters` | 200 | 47,528 | 4,997 | Custom Halo-Lit Metal Letters |
| `/products/outdoor-pylon-monument-sign` | 200 | 48,184 | 5,507 | Outdoor Pylon & Monument Signs |
| `/guides/how-much-do-custom-channel-letters-cost` | 200 | 68,029 | 7,065 | How Much Do Custom Channel Letters Cost? |
| `/faq` | 200 | 57,914 | 3,080 | Resources & FAQ |
| `/projects` | 200 | 48,448 | 1,925 | Case Studies |
| `/case-studies/dalian-water-plaza-wayfinding-signage` | 200 | 105,482 | 10,662 | Water Fashion Plaza: Wayfinding and Signage in Dalian |
| `/about` | 200 | 33,470 | 1,196 | About ZYD Signage |
| `/contact` | 200 | 39,050 | 1,126 | Start Your Project |

**结论**：**11/11 页面均为完整服务端预渲染**——不执行 JS 也能读到完整标题、正文段落与事实文案（如首页原文含 "EST. 2006"、"20,000m² PRODUCTION BASE"、"GLOBAL DDP SHIPPING"、"ISO 9001"）。这是本站在 GEO 就绪度上的**核心优势**：AI 爬虫常见的"读不到 JS 渲染内容"风险在本站不存在。

### 4.4 结构化数据覆盖

**实测**：逐 URL 解析 `application/ld+json`。

| 页面 | 实测 JSON-LD @type |
|---|---|
| `/`（全站，来自 `layout.tsx`） | Organization + WebSite |
| `/products` | Organization + WebSite + BreadcrumbList |
| 13 个产品品类页 | Organization + WebSite + BreadcrumbList + **Product** + FAQPage（其中 `/products/outdoor-waste-bin`、`/products/custom-planter-box` **缺 FAQPage**） |
| `/guides` | Organization + WebSite + BreadcrumbList + **CollectionPage** |
| 4 篇 `/guides/*` | Organization + WebSite + BreadcrumbList + **Article** + FAQPage |
| `/faq` | Organization + WebSite + FAQPage |
| `/projects` | Organization + WebSite （**缺 BreadcrumbList / CollectionPage / ItemList**） |
| `/case-studies/dalian-water-plaza-wayfinding-signage` | Organization + WebSite + FAQPage （**缺 BreadcrumbList / Article**） |
| `/about` | Organization + WebSite （**缺 AboutPage**） |
| `/contact` | Organization + WebSite （**缺 ContactPage / LocalBusiness**） |

**Organization 实体字段实测**（源码 `src/app/layout.tsx:27-41`，线上已输出）：

- 已具备：`name`、`url`、`logo`、`email`、`telephone`、`address`（含 `streetAddress` / `addressLocality: Dalian` / `addressRegion: Liaoning` / `addressCountry: CN`）、`sameAs`
- **缺失**：`foundingDate`（"EST. 2006" 因此**不是机器可读的**）、`legalName`、`description`、`numberOfEmployees`、`areaServed`、`knowsAbout`
- `sameAs` 实测值为三项：`https://x.com/ZYDsign`、`https://www.tiktok.com/@zydsign`、`https://www.linkedin.com/in/刚-刘-553686404`（源码 `src/config/site.ts:10-12`）
  - ⚠️ 第三项是**个人主页**，不是 LinkedIn 公司主页
  - ⚠️ **Alibaba 店铺 `https://dlzydbs.en.alibaba.com/` 未出现在 `sameAs` 中**——而它是本次检索中唯一能稳定提及品牌的第三方来源

**Article 作者字段实测**：4 篇指南的 `author` 均为 `{"@type":"Person","name":"Aaron"}`，**无 `url` / `jobTitle` / `worksFor`**，且站内不存在对应的 `Person` 实体节点（`publisher` 正确指向 `#organization`）；`datePublished` / `dateModified` 均为 `2026-09-07`。

### 4.5 直答块存在性

| 位置 | 实测情况 | 判读 |
|---|---|---|
| `/faq` | 8 组 Q&A（源码 `src/app/faq/page.tsx:54-61`），并输出 FAQPage schema | ✅ 有直答块，但问题偏**卖家流程视角**："Can you provide free 3D mockups?"、"What file formats do I need to provide for my logo?"、"Do you provide detailed installation drawings?" |
| 13 个产品品类页 | 均有 question 形态的 FAQ（如 `src/app/products/architectural-wayfinding-system/page.tsx:14-16` "How do you handle accessibility requirements in a wayfinding system?"），输出 FAQPage schema | ✅ 覆盖面好 |
| 4 篇指南 | 含问句形态 H2/H3 + 回答段落；并设 "Sources & further reading" 外链官方权威源（`access-board.gov`、`imoa.info`、`rowmark.com` 等，见 `src/app/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs/page.tsx:147-149`） | ✅ 质量突出——引用权威源有利于被当作可信来源；且措辞严谨（明确声明"非法律建议""以属地主管机构为准"），降低 AI 误引风险 |

**缺口**：买家研究阶段最常问的问题（价格、材料、MOQ、海运/DDP、合规）在**结构化直答块中覆盖不足**——现有 FAQ 偏"下单后流程"。品类/问题型查询（Q1–Q9）命中的正是这些买家问题。

### 4.6 品牌口径一致性

| 口径项 | 站内一致性 | 证据 |
|---|---|---|
| 20,000 平米工厂 | ✅ 一致 | 首页 "20,000m² PRODUCTION BASE"；`src/app/page.tsx:264`；`src/app/about/page.tsx:18`；多数产品页统一表述 "our 20,000sqm base in Dalian" |
| 全球 DDP | ✅ 一致 | 首页 `src/app/page.tsx:265,672`；`src/app/about/page.tsx:19`；`src/app/faq/page.tsx:58`；`src/components/Footer.tsx:101`；产品页统一 "Global DDP Shipping" |
| 大连港对日韩 1–2 天航程 | ⚠️ **未能验证**——源码全量检索（`grep -E "Japan\|Korea\|Dalian Port\|1.?2 days"` over `src/`）**0 命中**，首页与 `/about` 原始 HTML 中亦未出现 | 该项在本仓库源码中不存在。若该口径用于对外沟通，建议明确它是否应在站内呈现；本报告不对其下结论 |
| **成立年份** | ❌ **不一致** | `src/app/about/page.tsx:17` "for **over 18 years**" **vs** `src/app/page.tsx:263` "**EST. 2006**" / 首页 "**20 Years** Expertise" |
| **公司名** | ⚠️ 多变体 | "ZYD Signage"（title/正文）、"ZYD Custom Signage"（首页 title）、"Dalian Zhiyudao Signage & Tech. Co., Ltd."（Organization schema / footer）、"ZYDSIGN"（社媒账号名）——`Organization.name` 已用全称，但缺 `alternateName` 覆盖简称 |
| 邮箱域名 | ⚠️ 与站点域名不同 | `src/config/site.ts:5` `zhengran@zydsign.cn`；实测 `https://zydsign.cn/` **DNS/连接失败（fetch failed）**，即该域名并未作为站点使用 |

### 4.7 canonical 与 sitemap 一致性

**实测**：解析 sitemap.xml 得到 **25 条 URL**，逐条请求并比对 canonical。

| 检查项 | 实测结果 |
|---|---|
| sitemap URL 总数 | 25 |
| 返回 HTTP 200 | **25 / 25** |
| canonical 与 sitemap URL 不一致 | **0**（全部 self-canonical 且完全匹配） |
| 含 `noindex` | **0** |
| 无任何 JSON-LD 的页面 | **0** |
| `<lastmod>` 数量 | **0**（全部仅 `<changefreq>monthly</changefreq>`，无 lastmod） |
| `<changefreq>` 取值集合 | `["monthly"]`（25 条全部相同） |

**主机名一致性实测**：

| 请求 | 状态 | 跳转目标 |
|---|---|---|
| `https://zydsign.com/` | **308** | `https://www.zydsign.com/` |
| `https://zydsign.com/robots.txt` | **308** | `https://www.zydsign.com/robots.txt` |
| `http://zydsign.com/` | **308** | `https://zydsign.com/`（再跳 www） |
| `https://www.zydsign.com/` | 200 | — （canonical = `https://www.zydsign.com`，og:url 一致；无 robots meta） |
| `https://zydsign.cn/` | **连接失败** | — |

**结论**：canonical / sitemap / 主机名三者**完全一致**，非 www → www 301/308 跳转正常，无重复内容或索引分裂风险。**唯一缺口**是 sitemap **完全没有 `<lastmod>`**，新鲜度信号缺失。

### 4.8 站内 GEO 就绪度小结

| 维度 | 状态 | 说明 |
|---|---|---|
| 服务端预渲染 | ✅ **优秀** | 11/11 页面原始 HTML 含完整正文 |
| AI 爬虫可访问性 | ✅ **无阻断** | 无 robots 限制、无 UA 差异化（110,875 字节全一致） |
| canonical / sitemap / 主机名 | ✅ **完全一致** | 25/25 URL 200，0 不一致，0 noindex |
| 结构化数据骨架 | 🟡 **良好但有缺口** | 产品/指南页完整；`/projects`、`/case-studies/*`、`/about`、`/contact` 缺关键类型 |
| Organization 实体信号 | 🔴 **薄弱** | 缺 `foundingDate`、`legalName`、`description`；`sameAs` 指向个人页且漏 Alibaba |
| `llms.txt` | 🔴 **缺失** | 404 |
| 直答块 | 🟡 **偏卖家视角** | 买家研究型问题覆盖不足 |
| 品牌口径一致性 | 🔴 **成立年份冲突** | 18 年 / 20 年 / 14 年 三套口径并存 |
| sitemap 新鲜度 | 🟡 **缺 lastmod** | 25 条全无 `<lastmod>` |

---

## 5. 差距与优先级清单

> 每项含：证据 → 改法 → 预期影响。成本标签：🟢 低（< 1 人日）｜🟡 中（约 1 周）｜🔴 高（1 个月以上）

### P0 — 阻断级（直接妨碍 AI 正确建立实体与归因）

**P0-1 🔴 统一三套互相冲突的成立年份口径**

- **证据**：
  - `src/app/about/page.tsx:17` → "serving global B2B signage projects for **over 18 years**"
  - `src/app/page.tsx:263` → "**EST. 2006**"；首页 "**20 Years** Expertise"
  - https://suppliers.alibaba.com/dalian-zhiyudao-signage-tech-co-ltd_2500000111235 → "**established in 2011 with 14 years of export experience**"
  - 检索证据：Q13 返回结果同时命中上述自有站与 Alibaba 供应商页
- **改法**：① 把 `about/page.tsx` 的 "over 18 years" 改为与全站一致的 "since 2006 / 20 years"；② 同步修正 Alibaba 店铺 profile（统一为"成立 2006"；若 2011 是出口渠道起点，则明确写为"2006 年成立、2011 年起开展出口业务"，避免被读成两个成立年份）；③ 在 Organization schema 补 `foundingDate: "2006"`，让口径机器可读。
- **预期影响**：消除 AI 合成实体描述时采信错误年份的来源；避免输出"14 年经验"这类与站点自述不符的信息。这是本次基线中影响最大的一项。

**P0-2 🟢 补全 Organization 实体字段，并把 Alibaba 店铺纳入 `sameAs`**

- **证据**：`src/app/layout.tsx:27-41`（无 `foundingDate` / `legalName` / `description`）；`src/config/site.ts:10-12`（`sameAs` = x.com/ZYDsign、tiktok.com/@zydsign、linkedin.com/**in**/刚-刘-553686404）；实测 Alibaba 店铺 `https://dlzydbs.en.alibaba.com/` HTTP 200 且是唯一稳定提及品牌的第三方来源，却**不在** `sameAs` 中
- **改法**：Organization 补 `foundingDate`、`legalName`、`description`（一句定位）、`alternateName`（覆盖 "ZYD Signage" / "ZYD Custom Signage" / "志于道"）、`numberOfEmployees`、`areaServed`；`sameAs` 增加 `https://dlzydbs.en.alibaba.com/`，并把 LinkedIn 项替换为**公司主页**（或移除，若公司主页不存在则不要用个人页占位）。
- **预期影响**：AI 得以把 `zydsign.com`、Alibaba 店铺、TikTok 归并为**同一实体**，使品牌提及可被正确归因到自身站点；`alternateName` 直接缓解 §2.3 的实体混淆（"zydsign" 裸查询当前召回 design.com 与同名无关账号）。

**P0-3 🟢 新建 `/llms.txt` 与 `/llms-full.txt`**

- **证据**：https://www.zydsign.com/llms.txt → **404**；https://www.zydsign.com/llms-full.txt → **404**；同一时间点 11 条品类查询 0 命中
- **改法**：在 `public/` 下新增 `llms.txt`（Markdown 结构：品牌一句话定义 → 核心事实清单（since 2006、20,000m²、Dalian、DDP 50+ 国、MOQ 1、7–14 天、3–5 年质保）→ 13 个产品页 → 4 篇指南 → `/faq` → 案例页，均带 URL 与一句话摘要），并可加 `llms-full.txt` 汇总正文。
- **预期影响**：为 AI 爬虫提供站点自述的权威事实清单与路由，是成本最低、当天可复测的一项；同时为 P0-1 的口径统一提供单一事实源。

### P1 — 高影响（决定能否被引用）

**P1-1 🟢 补齐 `/projects` 与 `/case-studies/*` 的结构化数据**

- **证据**：sitemap 全量审计实测 —— `/projects` = Organization + WebSite（**缺 BreadcrumbList / CollectionPage / ItemList**）；`/case-studies/dalian-water-plaza-wayfinding-signage` = Organization + WebSite + FAQPage（**缺 BreadcrumbList / Article**）。对比：`/guides` 有 CollectionPage + BreadcrumbList，`/guides/*` 有 Article + BreadcrumbList + FAQPage。
- **改法**：`/projects` 加 `CollectionPage` + `ItemList`（8 个案例卡片，含名称/URL/图片）；案例页加 `BreadcrumbList` + `Article`（`author` / `datePublished` / `dateModified` / `publisher`，与 guides 对齐），`@type` 可考虑 `CreativeWork` 或带 `about` 的工程案例表述。
- **预期影响**：真实工程案例（大连水城广场导视系统）是标识制造商最难被替代的一手证据资产；补 schema 后才有机会被 AI 当作可引用的事实来源，而非仅作页面链接。

**P1-2 🟡 为 `/faq` 增加买家研究型直答块**

- **证据**：`src/app/faq/page.tsx:54-61` 现有 8 问均为卖家流程视角（free 3D mockups / file formats / standard lead time / installation drawings / DDP 定义 / 海岸耐久 / 质保 / 结构计算）；而 Q1–Q9 命中的买家问题是**价格、材料选型、MOQ、海运方式、合规**。
- **改法**：新增买家视角问答并同步扩 FAQPage schema，例如 "How much do custom channel letters cost?"（可复用 `/guides/how-much-do-custom-channel-letters-cost` 内容）、"Which sign material is best for coastal environments?"、"What is the MOQ for a custom signage order?"、"Can you ship DDP to the US/EU?"、"How do I compare two signage quotations?"
- **预期影响**：直接对齐 AI 检索时的自然语言问题形态。注意本站在 `/guides/*` 已有这些主题的高质量内容（Q1–Q9 未命中主因是语料池不足而非内容缺失），因此在 `/faq` 做直答块是**提升可引用表面积**的补充动作。

**P1-3 🟡 扩充 `/about` 内容并加 AboutPage schema**

- **证据**：原始 HTML 探针 `/about` = 正文 **1,196 字符**、`<title>` 仅 **17 字符**（"About ZYD Signage"），JSON-LD 仅 Organization + WebSite；源码 `src/app/about/page.tsx` 全文 31 行、正文仅 3 段。
- **改法**：补充工厂能力（CNC/自动化）、认证明细（ISO 9001:2015 / CE / SGS / UL —— 首页已有这些标识可复用）、产能与工艺步骤、团队与里程碑；加 `AboutPage` schema；标题扩展为含定位关键词（如 "About ZYD Signage | Factory-Direct Signage Manufacturer in Dalian"）。
- **预期影响**：`/about` 是 AI 判定"这是什么公司"的主要依据，也是 Q13 唯一被引用的自有页面；内容过薄会限制可引用事实量，并直接影响 E-E-A-T。

**P1-4 🟢 为 sitemap 输出真实 `<lastmod>`**

- **证据**：sitemap.xml 原始 XML —— `<lastmod>` 数量 **0**；25 条全部 `<changefreq>monthly</changefreq>`，取值集合仅 `["monthly"]`。
- **改法**：为内容页输出真实 `lastmod`（4 篇指南的 `dateModified` 已存在，均为 `2026-09-07`，可直接复用）。
- **预期影响**：补齐新鲜度信号，利于时效敏感检索；当前全部 monthly 且无 lastmod，等于对 AI/搜索引擎放弃时效表达。

### P2 — 优化级（提升发现路径与消歧）

**P2-1 🟢 修正首页 "All Guides →" 的误链**

- **证据**：`src/app/page.tsx:496` → `href="/faq"`，而区块标题为 "Signage Insights / Buying guides for custom signage projects."，指向的应是 `/guides`。
- **改法**：改为 `href="/guides"`。
- **预期影响**：修通指南枢纽内链；首页目前把"Buying guides"流量导向 FAQ 页，弱化了 `/guides` 枢纽的爬虫与用户路径。

**P2-2 🟢 统一品牌名与域名口径**

- **证据**：`src/config/site.ts:5` 邮箱 `zhengran@zydsign.cn`，而实测 `https://zydsign.cn/` **连接失败**；公司名存在 "ZYD Signage" / "ZYD Custom Signage" / "Dalian Zhiyudao Signage & Tech. Co., Ltd." / "ZYDSIGN" 多变体；Q14 检索召回同名无关账号（Facebook "ZYDSIGN" 孟加拉语贴文、24 订阅者的游戏 YouTube 频道）
- **改法**：邮箱统一到 `@zydsign.com`；Organization 加 `alternateName` 覆盖全部简称；社媒账号名与站点品牌名对齐。
- **预期影响**：品牌名消歧；避免 AI 把无关同名账号与本公司混淆。

**P2-3 🔴 建立站外引证面（当前是最大结构性短板）**

- **证据**：14 条查询中实际检索到的第三方来源**仅 Alibaba 家族 + TikTok**（§3.1）；Reddit / YouTube / 行业榜单 / 贸易媒体 / 客户侧引用**全部 0 命中**。其中 r/signshop 存在直接对口的买家求助帖 https://www.reddit.com/r/signshop/comments/1vqky4s/looking_for_custom_signage_manufacturers_in_china/，本品牌未出现。
- **改法**（按成本排序）：
  1. 🟢 在已证实会出现在 AI 检索结果中的社区建立**真实存在**：r/signshop（上述对口帖）、r/CommercialAV（Q8 中讨论"如何筛选标识供应商"）、r/Printing（Q6 中"中国标识厂推荐"）；以技术回答者身份参与，而非广告投放。
  2. 🟢 争取进入已多次占位的供应商榜单文（ensun.io、landeasigns.com 榜单、ikinor-interactive.com 榜单）——这些页面是 AI 答案的现成来源池。
  3. 🟡 把 4 篇指南的核心结论改写成可被第三方引用的形式（数据表、对比清单）并对外分发。
  4. 🔴 获取客户/承包商的独立引用与工程案例署名（第三方博客、项目方页面）。
- **预期影响**：只要自有域名仍未进入"品类/问题型"结果池（当前 0/11），仅优化站内无法改变 AI 可见性。这是唯一能改变 §2.2 结论的一项。

---

## 6. 复测指引

下次复测时保持**完全相同的 14 条查询原文**与相同方法，逐项对比：

| 复测指标 | 本次基线值 |
|---|---|
| 品类/问题型查询命中率（Q1–Q11） | **0 / 11** |
| 品牌/实体型查询命中率（Q12–Q14） | 3 / 3（仅自有资产 + Alibaba + TikTok） |
| `llms.txt` | 404（不存在） |
| `llms-full.txt` | 404（不存在） |
| sitemap 可访问 URL 数 | 25 / 25（200） |
| sitemap `<lastmod>` 条数 | 0 |
| canonical 不一致数 | 0 |
| 原始 HTML 可读页面数（不执行 JS） | 11 / 11 |
| AI 爬虫 UA 响应差异 | 无差异（均 110,875 字节） |
| Organization schema `foundingDate` | 缺失 |
| Organization schema `sameAs` 项数 | 3（含 1 个个人页；**不含** Alibaba 店铺） |
| 触发关键类型缺失的 URL 数 | `/projects`、`/case-studies/*`、`/about`、`/contact`、2 个产品页 |
| 站外引证面（实际可检索） | 仅 Alibaba 家族 + TikTok |
| 成立年份口径 | **三套并存（18 年 / 20 年 / 14 年）** |

**复测方法**：① 用 §2.2 / §2.3 的 14 条英文查询原样检索，记录命中率与占位域名变化；② 重跑原始 HTML 探针（不执行 JS），比对 §4.3 与 §4.7 的表格；③ 逐条核对 §5 各项是否已落地。

---

## 附录：本次证据清单

- **站点实测**：robots.txt / llms.txt / llms-full.txt / sitemap.xml / 25 条 sitemap URL + 11 个页面的原始 HTML（HTTP 状态、canonical、JSON-LD、正文长度、UA 探针）
- **源码只读核对**：`src/app/layout.tsx:27-41`、`src/config/site.ts:3-14`、`src/app/about/page.tsx:11-19`、`src/app/page.tsx:263-265,491-498`、`src/app/faq/page.tsx:53-62`、`src/app/guides/*/layout.tsx:19,36-39`、`src/app/products/architectural-wayfinding-system/page.tsx:14-16`
- **检索证据**：14 条查询语句原文 + 每条的实际返回域名（§2.2、§2.3 表格内逐条列明）
- **第三方来源实测**：8 条站外 URL 的 HTTP 状态实测（§3.1 表格）
- **未写入手册/推断的内容**：所有未能实测的项目均标注「未能验证」（§1.4），未使用训练知识或推断填充。
- **本次审计工具**（用于复测复现，位于 `temp/`，已被 `.gitignore` 排除、不入版本库）：
  - `temp/geo-baseline-probe.mjs` —— 11 页原始 HTML + JSON-LD + 事实文案 + AI 爬虫 UA 探针
  - `temp/geo-sitemap-audit.mjs` —— sitemap 全量 URL 的 200 / canonical / noindex / JSON-LD 审计
  - `temp/geo-redirect-probe.mjs` —— 主机名跳转、canonical、robots.txt 原文
  - `temp/geo-page-probe.mjs <url…>` —— 任意页面 JSON-LD 与直答块探针
  - `temp/geo-social-probe.mjs` —— 站外来源（社媒 / Alibaba / llms.txt）可达性探针
- **本次未改动任何既有站点文件**：`git status` 仅显示新增 `seo/geo-baseline-2026-09-20.md`；未 push、未部署。
