# zydsign.com SEO 运营手册

**版本**：v1.0（2026-09-07）  
**适用站点**：https://zydsign.com  
**适用团队**：ZYD 外贸、内容、技术与业务团队  
**目标**：把站点做成可被搜索引擎、AI 检索和真实买家持续发现、理解、信任并发起询盘的 B2B signage 资产。

> 本手册把《独立站建站后快速起流量实操手册》的方法转化为 zydsign.com 的日、周、月、季任务。所有“已完成”只依据当前代码和静态文件；GSC、GA4、排名、收录、询盘等后台结果若未提供，统一写为“待接入/待测量”，不得补填或猜测。

## 目录

1. 现状诊断与优先级
2. 90 天三阶段里程碑
3. 每日任务清单
4. 每周例行与机会词循环
5. 每月例行与 AI 监测
6. 每季例行与内容刷新
7. 模板库
8. KPI 及格线与月报
9. 红线清单
10. 今天只有 1 小时的三件事

---

## 1. 现状诊断与优先级

### 1.1 已完成事实（代码/文件证据）

| 项目 | 当前事实 | 证据 | 运营含义 |
|---|---|---|---|
| 实体信息 | 公司名为 Dalian Zhiyudao Signage & Tech. Co., Ltd.，邮箱、联系人 Aaron、域名已配置 | `src/config/site.ts:1-11` | 后续官网、目录站、LinkedIn、报价单必须以同一实体信息为准 |
| 核心卖点 | 首页统计区写有 `EST. 2006`、`20,000m² PRODUCTION BASE`、`GLOBAL DDP SHIPPING`、`QUALITY GUARANTEE` | `src/app/page.tsx:217-228` | 可用于英文内容和首复模板；数字仍须有内部举证台账 |
| 产品入口 | 产品目录页有 11 个产品入口，详情页采用静态 App Router 页面 | `src/app/products/page.tsx:17-27`；`src/app/products/*/page.tsx` | 先围绕真实品类建立 topic cluster，不用泛流量词填充 |
| Sitemap | sitemap 路由数组覆盖首页、核心页面和产品页，共 17 个 URL | `src/app/sitemap.ts:4-22` | 收录提交以该文件生成的 `/sitemap.xml` 为准；每次新增内容后复核 |
| Robots | robots 放行全站并引用 sitemap | `src/app/robots.ts:4-12` | 继续保持可抓取；任何 AI crawler 限制变更须先评估 |
| 技术监测 | GTM 已在 `beforeInteractive` 注入，Clarity 已在 `afterInteractive` 注入 | `src/app/layout.tsx:69-95` | GTM/Clarity 基础已存在；GA4 五事件是否在容器中真正发布和触发，仍须实测 |
| GSC 验证 | Google verification meta 已配置 | `src/app/layout.tsx:39-41` | 接入后每周查看 GSC，不把 meta 存在等同于数据已健康 |
| Bing 验证 | 存在 BingSiteAuth 验证文件 | `public/BingSiteAuth.xml:1-4` | 仍需在 Bing Webmaster 提交 sitemap、确认 IndexNow，并核实是否补 `msvalidate.01` meta |
| 全站结构化数据 | Organization 与 WebSite JSON-LD 已输出 | `src/app/layout.tsx:10-30` | 组织实体基础已建；地址、电话、geo、业务类型等仍需补齐并核实 |
| 产品结构化数据 | Product + BreadcrumbList 组件已存在 | `src/components/ProductJsonLd.tsx:11-34` | 11 个产品详情页可继续扩写独有规格、应用场景和内链 |
| FAQ 结构化数据 | FAQPage 包含 8 个问题 | `src/app/faq/page.tsx:52-71` | FAQ 可作为 AEO 基础；每次改答案要同步页面可见内容与事实台账 |
| 案例资产 | 项目页目前有 7 个案例卡片，含本地图片与占位项 | `src/app/projects/page.tsx:24-31` | 案例页可作为内容入口；当前没有案例二级详情页 |
| 询盘动作 | Contact 表单校验后生成 WhatsApp 深链，也可生成 mailto | `src/app/contact/page.tsx:44-81` | 已有转化出口；是否落库、推送、SLA 计时尚未在仓库证据中确认 |

### 1.2 差距、动作、目标与证据边界

| 差距 | 立即动作（频次/耗时） | 目标/验收 | 当前边界 |
|---|---|---|---|
| 没有 `/blog`、指南和对比页 | 每周 2 篇新内容 + 每 2 篇新内容更新 1 篇旧页；先做一个品类集群 | 90 天完成 1 个支柱页 + 8–15 个子页规划；第 30 天累计发布/更新计划内内容 8 篇 | 当前代码未发现 `src/app/blog`，不可宣称已上线博客 |
| FAQ 的 Popular Guides 不是文章链接 | 一次性技术/内容修复，30–60 分钟；将假按钮改为真实 URL，页面发布前逐个打开 | 4 个 guide 均指向真实可抓取页面；无弹 WhatsApp 代替文章 | `src/app/faq/page.tsx:36-58` 的 guides/categories 结构已存在；具体 JSX 需修复后再验收 |
| 品类页重复度高、独有正文不足 | 每个产品页 60 分钟补直答块、买家问题 H2、日期数据和应用场景 | 每页至少 1 个 40–60 词英文直答块、2 个可核验日期数字、2–5 条内链/千词 | 不凭空补材质、认证、尺寸、价格或产能数据 |
| 站内互链接近 0 | 每发布 1 页，补 2–5 条正文内链；旧页每周补 3–5 条指向新页的链接 | 核心页距首页不超过 3 次点击；孤儿页为 0；Related 不再全部回 `/products` | 现状需由链接审计逐页确认；不把导航存在误写成内容内链 |
| 无 IndexNow 证据 | 一次接入 + 每次更新后推送；每周检查推送与 Bing 状态 | 新/改 URL 进入 IndexNow 提交记录；72 小时后抽查 Bing/AI 可检索性 | 代码中尚无 IndexNow 实现证据，标记待接入 |
| 无 GA4 直埋证据 | 30 分钟检查 GTM 容器；建立 5 事件：form_submit、whatsapp_click、email_click、phone_click、catalog_download | DebugView 五事件逐一触发；以后周报按 UTM 查看 | 当前只能确认 GTM 存在，不能宣称 GA4 已安装或有历史数据 |
| Bing 非 `msvalidate.01` meta | 一次性核验 Bing 验证方式；如要求则在 layout metadata 补 meta | Bing Webmaster 验证成功、sitemap 可读、IndexNow 可用 | 当前只确认 `public/BingSiteAuth.xml` 存在，不推断 Bing 后台状态 |
| 询盘无落库、无 30 分钟响应 SOP | 一次性确定值班人、手机推送、首复记录表；每天检查当日询盘 | 询盘有人工登记；首次响应目标 `<12h`（及格）、`<2h`（良好），内部优先 30 分钟 | 现有代码只生成 WhatsApp/mailto：`src/app/contact/page.tsx:44-81`；无 SLA 代码证据 |
| NAP/实体不一致 | 一次性建立 NAP 信息卡；统一官网、目录、LinkedIn、报价单；补 Organization address/telephone/geo 前先向公司确认 | 公司名、地址、电话、Founded year、工厂面积逐字一致；schema 通过验证 | `src/app/layout.tsx:14-21` 当前 Organization 没有 address/telephone/geo；不得猜地址和坐标 |
| 年限口径不一致 | 一次性建立事实台账，统一 `Est. 2006`、`18+ years`、`20 years` 的使用规则 | 同一页面不混用无法证明的年限；数字均可追溯 | 当前 `EST. 2006` 在 `src/app/page.tsx:220`，`18+ Years` 在 `src/app/page.tsx:338`，About 写 `over 18 years` 在 `src/app/about/page.tsx:16` |
| 缺案例详情、Breadcrumb、LocalBusiness/Article/ItemList schema | 先扩写现有案例卡与内链；有真实素材后再建详情页；技术任务按月排期 | 新内容有对应 schema 与 breadcrumb；不为 schema 造虚假字段 | 当前案例为卡片：`src/app/projects/page.tsx:24-31`；Product schema 只覆盖产品组件 |

### 1.3 优先级顺序

1. **先接住**：询盘登记、值班人与 30 分钟首复 SOP。
2. **再收录**：GSC/Bing、sitemap、IndexNow、抓取与点击深度。
3. **再独特**：品类页直答、真实数字、案例与 FAQ 内容。
4. **再互链**：支柱页—子页—产品—案例—Contact 的正文内链。
5. **再放大**：LinkedIn、YouTube、目录站、开发信与小预算验证。

---

## 2. 90 天三阶段里程碑

> 目标是执行验收线，不是本站历史成绩。所有后台 KPI 在接入后填写；没有数据时写“未测量”。

### 阶段一：第 1–30 天｜基建、收录、承接

| 频次/耗时 | 动作 | 产出物 | 验收 KPI |
|---|---|---|---|
| 一次性/60 分钟 | 验证 GSC Domain、Bing Webmaster、提交 sitemap、检查 robots | 《72 小时基线表》、提交截图/记录 | 收录率目标 `>80%`；未接入前不填数字 |
| 一次性/60 分钟 | 接入/核验 IndexNow；全量推送 17 个 sitemap URL | `indexnow-log.csv` | 每个新/改 URL 有推送日期与响应记录 |
| 一次性/60 分钟 | 在 GTM 中核验 5 个事件并用 DebugView 测试 | 事件测试表 | 五事件逐一触发；当前是否通过待测量 |
| 一次性/30 分钟 | 建立询盘值班表、人工落库和 30 分钟首复模板 | `lead-log` 表、SLA 记录列 | 每条询盘有负责人、收到时间、首复时间 |
| 每周/2×60 分钟 | 建第一品类 cluster：1 支柱 + 8–15 子页，先排选题与证据 | 关键词—页面映射表 | 选题不重叠；每页对应一个词簇 |
| 每周/2–4 小时 | 发布 2–4 个真实内容单元（可先 1 支柱+1 FAQ/对比） | 页面 PR/内容文件 | 每篇完成发布前 6 项自检 |
| 每天/15–30 分钟 | LinkedIn 精准连接、存量链接、询盘跟进 | 渠道动作表 | 每个外发链接带 UTM；不发垃圾私信 |

**阶段一完成标准**：能抓取、能提交、能记录、能响应；先不以自然流量或排名证明成功。

### 阶段二：第 31–60 天｜内容满速、站外实体、初步转化

| 频次/耗时 | 动作 | 产出物 | 验收 KPI |
|---|---|---|---|
| 每周/4–6 小时 | 2–4 篇新内容；每 2 篇更新 1 篇旧页 | 发布清单、更新 diff | 累计内容按计划推进；不批量水文 |
| 每周/60 分钟 | 发布 1 篇 LinkedIn Pulse；公司号与业务员号按能力分发 | Pulse URL + UTM | 每周 1 篇，事实与官网一致 |
| 每周/30 分钟 | Reddit/行业社区只做真实答疑 | 答疑链接、问题摘要 | 每周 2–3 条；无马甲自吹 |
| 每月/2 小时 | 发布 1–2 条工厂实拍 YouTube，含章节、字幕和官网 UTM | 视频 URL、脚本、字幕 | 每月 1–2 条；不删实拍换速度 |
| 一次性/2 小时 | 目录站统一提交 NAP 信息卡 | 平台、日期、URL 台账 | 首批至少 5 个目录站，逐字一致 |
| 每月/60 分钟 | 首次 AI 20 问基线 | 20 问记录表 | 分平台记录 mention/citation；不是排名数据 |
| 每周/30 分钟 | 询盘与 UTM 复盘 | lead-log、渠道摘要 | 首次响应向 `<12h` / `<2h` 目标靠拢 |

**阶段二完成标准**：内容、站外实体、业务触达形成稳定节奏；付费仅作为 2–4 周的底部漏斗验证，需先通过转化与响应门槛。

### 阶段三：第 61–90 天｜机会词循环、衰减治理、调仓

| 频次/耗时 | 动作 | 产出物 | 验收 KPI |
|---|---|---|---|
| 每周/30 分钟 | GSC 筛 `position 8–20` 且 `impressions >100` | 机会词 CSV、优化清单 | 每词完成五步优化并记录复测日期 |
| 每周/30–60 分钟 | 旧内容衰减治理：同比点击降 >30% 才进入清单 | 更新 diff、dateModified、IndexNow 记录 | 每次更新有事实来源，不改写历史事实 |
| 每月/60 分钟 | AI 20 问第 2/3 轮 | 复测表、被引用页面清单 | 目标逐步靠近 `2/20`（及格）到 `6/20`（良好） |
| 每月/60 分钟 | Clarity 查看 5 条关键录屏，提出一个假设 | 录屏复盘表、单一改动 | 每轮只改一处，留复测日期 |
| 第 90 天/半天 | 渠道、页面、询盘、内容、技术复盘 | 90 天报告、下季三件事 | 自然流量月增目标 `10–25%`；无历史基线不追溯填数 |

---

## 3. 每日任务清单

> 每日任务按当天可用时间选一档。完成即记录“日期—负责人—耗时—产出物—下一步”，不要只在聊天里口头完成。

### 3.1 15 分钟档：保运转

| 频次 | 任务 | 产出物 |
|---|---|---|
| 每个工作日/5 分钟 | 查看新询盘、WhatsApp、邮箱；确认负责人和收到时间 | `lead-log` 新行/状态更新 |
| 每个工作日/5 分钟 | 查看站点是否可打开、核心 Contact/Products/Projects 链接 | 健康检查记录；异常截图 |
| 每个工作日/5 分钟 | 处理 1 条真实买家问题或 LinkedIn 评论 | 回复链接/问题原文/待写选题 |

### 3.2 30 分钟档：增长最小闭环

| 频次 | 任务 | 产出物 |
|---|---|---|
| 每个工作日/10 分钟 | 10 个精准 LinkedIn 连接或 1 条有信息量的评论 | 目标客户名单、评论/连接记录 |
| 每个工作日/10 分钟 | 更新 1 个产品/案例页事实、直答或内链 | 页面变更记录、待部署项 |
| 每个工作日/10 分钟 | 跟进 1–3 条询盘，使用 30 分钟首复模板 | 首复时间、两个澄清问题、下一承诺时间 |

### 3.3 60 分钟档：内容生产

| 频次 | 任务 | 产出物 |
|---|---|---|
| 每个工作日/60 分钟 | 写或修 1 个英文内容单元：product guide、comparison、FAQ、case study | Markdown/TSX 内容、来源台账、内链清单 |
| 发布前/10 分钟含在 60 分钟内 | 完成下方 6 项自检、构建检查与 IndexNow 待推送记录 | 发布检查表、URL、推送日期 |
| 发布后/5 分钟 | 发 1 个 LinkedIn/邮件/WhatsApp 相关链接，必须带 UTM | 外发 URL 与渠道记录 |

### 3.4 发布前 6 条硬自检（每篇、每次更新必做）

- [ ] **H2 使用买家问题原句**，例如 `What is the MOQ for custom pylon signs?`，不写空泛营销标题。
- [ ] **开头有 40–60 词英文直答块**，先回答结论，再解释条件。
- [ ] **至少 2 个带日期的独有数字**；数字必须有内部来源、样本量或“待核验”标记，不能编造。
- [ ] **内链 2–5 条/千词**，锚文本准确；新页至少获得 3–5 条已收录页正文内链指入。
- [ ] **真人署名**：作者姓名、职位、与该工艺/项目的真实关系可核验。
- [ ] **事实零编造**：材质、尺寸、认证、价格、交期、客户名称、项目结果不确定时改为询盘导向措辞或进入待核验清单。

### 3.5 关键词与内容规则

优先使用真实行业词，并按页面意图分配：`wayfinding`、`channel letters`、`pylon sign`、`light box`、`monument sign`、`architectural signage`、`custom outdoor waste bin`、`custom planter box`。一页只服务一个主词簇，避免同一页面堆叠多个无关词。

---

## 4. 每周例行与机会词循环

### 4.1 周例行总表

| 频次 | 耗时 | 任务 | 产出物 |
|---|---:|---|---|
| 每周一 | 30 分钟 | GSC 点击/曝光/CTR、索引状态、错误与新查询词 | 周数据快照；若未接入则列为阻塞项 |
| 每周一 | 30 分钟 | 机会词：`position 8–20` + `impressions >100` 导出 | `opportunity-YYYY-WW.csv` |
| 每周二 | 30 分钟 | 对机会词做五步优化 | 页面变更清单 |
| 每周三 | 60 分钟 | 发布/更新内容，检查内链与事实 | 页面 URL、来源台账 |
| 每周四 | 30 分钟 | IndexNow 推送新增/修改 URL | 推送日志 |
| 每周五 | 30 分钟 | Clarity 复盘 5 条录屏、询盘 SLA、站点健康 | 录屏复盘与下周三件事 |
| 每周 | 60 分钟 | LinkedIn Pulse 1 篇、精准互动；必要时 2–3 条真实社区答疑 | 外链/社媒 URL，均带 UTM |

### 4.2 机会词五步循环

1. **改 title**：把核心词前置，保持买家可读。
2. **补问题 H2**：H2 使用查询词对应的原句问题。
3. **加 3 条相关内链**：来自已收录产品、案例、FAQ 或支柱页。
4. **提取化**：把直答挪入正文前 1/3，补 2–3 个带日期独有数字、FAQ schema 或对比表。
5. **IndexNow + 两周复测**：记录更新日期、平均位置、曝光、点击、CTR；没有数据时不填写结果。

### 4.3 衰减治理

| 触发 | 动作（频次/耗时） | 产出物 |
|---|---|---|
| 每月 GSC 同比点击下降 >30% | 逐页检查过期统计、标题、SERP 意图和内链，60 分钟/页 | 衰减清单与更新 diff |
| 更新完成 | 更新 `dateModified`（若页面有该字段）、补新事实、推 IndexNow，15 分钟 | URL、旧/新日期、推送记录 |
| 连续两轮无改善 | 合并重复页面或调整词簇，不批量重写 | 合并/保留决策记录 |
| 每周 | 5 条 Clarity 录屏：找流失点、rage click、表单阻塞 | 5 条录屏编号、一个假设、一个改动 |

---

## 5. 每月例行与 AI 监测

### 5.1 月度任务

| 频次 | 耗时 | 任务 | 产出物 |
|---|---:|---|---|
| 每月第 1 个工作日 | 30 分钟 | GSC 索引率、点击、曝光、CTR、查询词趋势 | 月度数据快照；未接入写“待接入” |
| 每月第 1 周 | 60 分钟 | AI 20 问：ChatGPT、Perplexity、Gemini 同日复测 | AI 监测表 |
| 每月第 1 周 | 60 分钟 | Clarity 20 条录屏中抽 5 条深看 | UX 假设与修复记录 |
| 每月 | 60 分钟 | 内容清单：新文、旧文、内链、事实台账 | 内容月度产出表 |
| 每月 | 30 分钟 | UTM 渠道：访客、询盘、有效询盘、响应时间 | 渠道复盘表；没有 GA4 时不猜数据 |
| 每月 | 30 分钟 | NAP、产品价格/交期、联系信息抽查 | 事实与 NAP 校验记录 |
| 每月 | 30 分钟 | 运行 lint/build，检查 sitemap 与 robots | 构建日志与 URL 清单 |

### 5.2 AI 20 问监测协议

- 平台固定：ChatGPT、Perplexity、Gemini；同月同一天、同一账号状态与同一问题原文。
- 20 问分四类，每类 5 问：选型、供应商、比较、流程。
- `提及`定义：回答正文出现 ZYD、Dalian Zhiyudao 或 zydsign.com；`引用`定义：来源列表/脚注出现本站 URL。
- 提及与引用分开，三平台分开；不合并成一个漂亮但不可解释的分数。
- 每月记录问题、是否提及、是否引用、引用 URL、出现同行、回答位置、语气、截图/日期。
- 连续 3 个月后再决定是否购买监测工具；工具不是替代人工基线。

### 5.3 月报必须回答的五个问题

1. 哪些页面获得了新增曝光/点击？是否来自 `wayfinding`、`pylon sign`、`channel letters` 等目标词簇？
2. 哪些查询处于 8–20 位机会区？下月五步动作是什么？
3. 哪些内容被 AI 提及或引用？引用页面有什么共同结构？
4. 哪个渠道带来有效询盘，而不是只带来点击？首次响应是否达标？
5. 下月只做哪三件事，哪些事情明确不做？

---

## 6. 每季例行与全站治理

| 频次 | 耗时 | 任务 | 产出物/验收 |
|---|---:|---|---|
| 每季 | 半天 | 重跑全站审计、抓取状态、canonical、metadata、结构化数据、404、链接深度 | 与上季 diff；P0/P1/P2 清单 |
| 每季 | 2 小时 | 与 3–5 个真实竞争站对照：品类覆盖、直答、数据、案例、CTA、schema | 竞品对照表；不抄内容 |
| 每季 | 2–4 小时 | 刷新衰减内容、重写重复品类页、补数据资产页 | 更新页、来源与 dateModified 记录 |
| 每季 | 60 分钟 | 复核 NAP、Organization、sameAs、产品事实台账 | 逐字一致记录 |
| 每季 | 60 分钟 | 复核 Core Web Vitals 与图片/视频；不为速度删除实拍信任资产 | LCP 目标 `<4s` / `<2.5s`；真实用户数据待接入时写待测量 |
| 每季 | 60 分钟 | 复核询盘响应、渠道 ROI、AI 20 问趋势 | 季度决策：继续、停止、实验 |

### 6.1 内容集群路线

先选一个能由工厂事实支撑的品类，例如 `pylon sign` 或 `architectural wayfinding`：

- 1 个支柱页：`Pylon Sign Manufacturing: Specifications, Lead Time and Installation Planning`。
- 8–15 个子页：采购问题、材料对比、风荷载/基础协调、安装、运输、验厂、案例、FAQ。
- 每个子页横向互链，并回链支柱页、真实产品页、案例页和 Contact。
- 只写可核验事实；缺尺寸、认证、价格区间时用“请提供项目要求以确认”而不是填写猜测。

---

## 7. 模板库

### 7.1 30 分钟首复模板

```text
Subject: Re: Your {product} inquiry — ZYD Signage

Hi {Name},

Thanks for your inquiry about {product}. I’m {rep name}, {title} at
Dalian Zhiyudao Signage & Tech. Co., Ltd. I’ll be your direct contact.

Quick confirmation: you are asking about {restate the product, quantity,
and one key requirement}.

To prepare an accurate quotation, could you confirm just two points?
1. {quantity tier / target size / installation location}
2. {artwork status / destination city or port / required delivery date}

For reference, here is a related project or product page:
{relevant case/product URL with UTM}

I will send the quotation or the next technical questions within {X} hours
of your reply.

Best regards,
{rep name} | {title}
{company} | {website} | WhatsApp: {number}
```

**执行规则（每条询盘/30 分钟内）**：必须有人名、产品名、两个澄清问题、相关案例/产品链接（带 UTM）、明确报价承诺时限。即使报价还没完成，也先确认收到并告知下一步。

### 7.2 UTM 规范

固定枚举，不许自创拼写：

| `utm_source` | 使用场景 | 示例 |
|---|---|---|
| `whatsapp` | WhatsApp 业务话术/状态 | `?utm_source=whatsapp&utm_medium=referral&utm_campaign=case-followup` |
| `email-sig` | 邮件签名 | `?utm_source=email-sig&utm_medium=referral&utm_campaign=always-on` |
| `cold-email` | 开发信 | `?utm_source=cold-email&utm_medium=referral&utm_campaign=2026q3-wayfinding` |
| `catalog-pdf` | PDF 目录、二维码 | `?utm_source=catalog-pdf&utm_medium=referral&utm_campaign=2026-catalog` |
| `alibaba` | Alibaba 允许的官网入口 | `?utm_source=alibaba&utm_medium=referral&utm_campaign=always-on` |
| `tradeshow` | 展会名片、易拉宝 | `?utm_source=tradeshow&utm_medium=referral&utm_campaign=event-name` |
| `linkedin` | 公司页、个人页、Pulse | `?utm_source=linkedin&utm_medium=referral&utm_campaign=pylon-sign-guide` |
| `youtube` | 视频描述和章节链接 | `?utm_source=youtube&utm_medium=referral&utm_campaign=factory-tour` |

规则：`utm_medium=referral`；付费使用 `cpc`；`utm_campaign` 用小写短语和季度/场景；每月统计访客、询盘、有效询盘，不把没有 GA4 数据的月份补成零。

### 7.3 目录站统一信息卡（NAP 逐字一致）

在提交任何平台前，先锁定一张主卡；官网、Google Business Profile、Bing Places、LinkedIn、目录站、报价单、展会资料逐字复制：

```text
Company legal name: Dalian Zhiyudao Signage & Tech. Co., Ltd.
Address: {由公司确认的完整地址，未确认前不填写}
Phone / WhatsApp: {由公司确认的统一格式}
Email: zhengran@zydsign.cn
Website: https://zydsign.com
Founded year: {确认后填写；与 Est. 2006 的口径统一}
Factory size: 20,000m²（仅在内部台账核验后使用）
Business: Factory-direct custom architectural signage and wayfinding
Categories: wayfinding, channel letters, pylon sign, light box,
monument sign, outdoor site furnishings
Certifications: {证书名称 + 编号 + 发证机构；无编号不写}
Description: 50-word English company description, factual and non-superlative
```

**禁止**：不同平台分别翻译公司名、擅自补地址/坐标/电话、写无编号认证、用 `18+`、`20 years`、`Est. 2006` 但没有统一事实说明。

### 7.4 AI 20 问记录表

| 日期 | 平台 | 编号 | 问题原文 | 提及 0/1 | 引用 0/1 | 本站引用 URL | 同行 | 位置/语气 | 截图/备注 |
|---|---|---:|---|---:|---:|---|---|---|---|
| YYYY-MM-DD | ChatGPT/Perplexity/Gemini | 01–20 | 固定原文 |  |  |  |  |  |  |

建议问题类型（每类 5 条）：

- 选型：`What type of wayfinding sign is best for a multi-building campus?`
- 供应商：`Who are reliable custom pylon sign manufacturers in China?`
- 比较：`Pylon sign vs monument sign: which is better for a commercial entrance?`
- 流程：`How do I verify a Chinese architectural signage supplier before ordering?`

### 7.5 优化月报模板

```text
## ZYD Signage · YYYY-MM SEO 优化月报

### 一、数据边界
- GSC / GA4 / Bing / Clarity 是否已接入并可读：
- 本月未测量的指标：

### 二、核心 KPI
| 指标 | 上月 | 本月 | 变化 | 证据/备注 |
|---|---:|---:|---:|---|
| 收录页数 / 提交页数 / 收录率 | | | | GSC |
| 自然点击 / 曝光 / CTR | | | | GSC |
| 询盘数 / 有效询盘数 / 转化率 | | | | lead-log + GA4 |
| 首次响应中位时间 | | | | lead-log |
| AI 提及 / 引用（分平台） | | | | AI 20 问 |
| LCP 移动端 | | | | CrUX/实测 |

### 三、内容与机会词
- 新增页面：
- 更新页面：
- position 8–20 机会词及五步动作：
- 衰减页面（同比点击降 >30%）：

### 四、行为与转化
- Clarity 5 条录屏观察：
- 一个假设、一个改动、复测日期：
- 询盘响应超时原因：

### 五、下月只做三件事
1.
2.
3.
```

---

## 8. KPI 及格线与解释

| 指标 | 及格线 | 良好线 | 数据来源/说明 |
|---|---:|---:|---|
| 收录率 | `>80%` | `>95%` | GSC：已收录 ÷ 已提交；接入后查看，非当前已知历史数据 |
| LCP（移动真实用户） | `<4s` | `<2.5s` | CrUX/真实用户；不以本机实验室数字冒充 |
| 询盘转化率 | `1%` | `3–5%` | 询盘数 ÷ 独立访客数；GA4/lead-log 接通后测量 |
| 首次询盘响应 | `<12h` | `<2h` | lead-log；内部执行目标是 30 分钟首复 |
| AI 提及率 | `2/20` | `6/20` | 分平台、同一套问题；提及与引用分开 |
| 自然流量月增 | `10%` | `25%` | 前 6 个月看趋势；没有基线不回填 |
| 询盘有效率 | 建立定义 | 持续上升 | 按年采购量/项目真实性分层，不追求虚假总量 |
| 内链覆盖 | 每个重要页有 2–5 条相关正文内链 | 孤儿页 0、首页≤3跳 | 爬虫/人工点击深度检查 |

**解释纪律**：KPI 是及格线与目标，不是本站当前成绩。任何报告必须写数据日期、来源、样本量；无法读取就写“待接入/未测量”。

---

## 9. 红线清单

1. **不买批量外链包**，不以 Fiverr 链接包换排名。
2. **不做 Reddit/论坛马甲自吹**，只做真实、可执行的买家答疑。
3. **不批量发布 AI 水文**，不做只替换关键词的模板页。
4. **不机翻多语言**；没有母语维护人，先把英文站做深。
5. **不屏蔽 AI 爬虫**；如要限制，先由技术与合规共同确认。
6. **不使用未经授权的第三方品牌名做客户背书**，不编认证、不编编号、不编评分、不编证言。
7. **不使用免费邮箱作为官方联系方式**；官网当前销售邮箱为 `zhengran@zydsign.cn`，其他账号须统一核验。
8. **不为凑数字编造尺寸、材质、认证、价格、客户结果、交期或生产数据**。
9. **不为提速删除真实工厂照片、视频或重要信任信息**；先优化图片体积和加载策略。
10. **不把 GA4、GSC、Bing、排名、询盘或 AI 提及的待接入项目写成已完成**。
11. **不为 schema 增加页面上没有、业务无法证明的字段**；结构化数据必须与可见事实一致。
12. **不把所有外链都指向首页**；链接必须指向买家当前意图对应的 `wayfinding`、`pylon sign`、案例、FAQ 或 Contact 页面，并带正确 UTM。

---

## 10. 今天只有 1 小时：只做这三件事

### 任务一：先接住询盘（20 分钟）

- 建/更新 `lead-log`：姓名、产品、来源、收到时间、负责人、首复时间、状态。
- 把 30 分钟首复模板发给最近一条真实询盘：人名、产品、两个问题、相关案例链接+UTM、报价承诺时限。
- 如果表单没有落库或手机推送，记录为技术阻塞项，不假装已自动化。

**产出物**：1 条完整 lead-log、1 条已发送首复、1 个阻塞项（如有）。

### 任务二：做一次高 ROI 机会词准备（20 分钟）

- 若 GSC 已可读：导出 `position 8–20` 且 `impressions >100` 的查询词。
- 选 1 个与真实品类相关的词，如 `pylon sign manufacturer`、`architectural wayfinding`、`custom light box`。
- 写出该页面的买家问题 H2、40–60 词直答、3 条内链目标和 2 个待核验日期数字。

**产出物**：1 行机会词清单或“GSC 待接入”阻塞记录、1 个页面优化草稿。

### 任务三：发布/更新一个可引用事实单元（20 分钟）

- 选择一个产品页、FAQ 或案例页，补一个真实买家问题的英文 H2。
- 只使用已有可核验事实：例如站点当前可见的 `EST. 2006`、`20,000m² PRODUCTION BASE`、`GLOBAL DDP SHIPPING`，但使用时要与事实台账一致。
- 通过发布前 6 项自检；更新后记录 URL、内链、UTM、IndexNow 待推送。

**产出物**：1 个页面 diff、事实来源、内链列表、下一次复测日期。

---

## 结语：每天累积可复利资产

zydsign.com 的增长单位不是“今天发了多少字”，而是：一个真实买家问题、一个可核验事实、一个清晰内链、一个可追踪渠道、一个及时首复。每天完成最小闭环，周周处理机会词，月月更新衰减内容，季度重跑审计，才能让搜索收录、AI 引用和询盘转化同时变成可管理的运营系统。

**文档维护规则**：每月月报后更新本手册；代码/后台事实变化时先改“现状诊断”，再调整任务。任何新增数字必须附来源、日期和负责人。
