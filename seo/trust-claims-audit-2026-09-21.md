# 站内高风险信任与质量声明审计

- **站点**：https://www.zydsign.com
- **审计日期**：2026-09-21（Asia/Shanghai）
- **任务**：#243
- **范围**：首页、About、FAQ、Footer、产品详情页、案例页 CTA、`public/llms.txt`、运营手册中的站点卖点记录。
- **原则**：本报告只审计站内当前可见声明；未把证书、保修、温度范围、供应商品牌或覆盖国家当作已验证事实。历史 GEO 报告中的原始检索证据保留，不属于生产站点内容，不在本次改写范围内。

## 1. 声明分级与处理结果

| 声明类别 | 原始站内表达（before） | 处理结果（after） | 处理理由 |
|---|---|---|---|
| 成立年份 | `EST. 2006`、`20 Years` | **保留**：`EST. 2006`、`20 Years Expertise`、`since 2006` | 任务已确认的站内统一事实；同时与 JSON-LD 的 `foundingDate: "2006"` 一致 |
| 工厂规模 | `20,000m² PRODUCTION BASE`、`20,000sqm production base` | **保留** | 任务已确认的站内统一事实 |
| MOQ | `MOQ: 1`、`Minimum order is 1 unit` | **保留** | 任务已确认的站内统一事实 |
| 标准交期 | `Lead Time: 7–14 days`、`Typical production lead time is 7–14 days` | **保留**，并继续带 scope / artwork / quantity / finish 条件 | 任务已确认；避免被误读为无条件交付承诺 |
| DDP 物流 | `50+ countries`、`no hidden fees`、`Global DDP Certified`、`one delivered price` | **条件化**：`DDP may be quoted ... after destination and cargo review`；`DDP Delivery Scope` | 未核实所有国家覆盖、固定费用或“认证”资格；DDP 交付范围应由目的地、货物和报价确认 |
| 保修 | `3–5 year warranty on all LED components ... structural integrity`、`3–5 year global warranty` | **条件化**：`Any warranty coverage, duration, and exclusions are stated in the project quotation or supply agreement` | 会话中没有保修条款原件；移除固定年限、全球覆盖和 all components / structure 的绝对承诺 |
| 认证 / 合规 | `ISO 9001:2015`、`CE Certified`、`SGS Inspected`、`UL Components`、`Certified Processes` | **移除具体未核实证书标签**；改为 `Certification, component selection, and electrical safety requirements are reviewed against each project brief and destination` | 没有原始证书或报告可核实；保留名称会被读作当前有效认证背书 |
| 涂层寿命 / 耐候 | `10+ years of weather resistance`、`Durable in all environments` | **条件化**：`selected for the specified project environment`；`Materials and finishes are selected for the specified environment` | 未核实固定寿命或全环境耐候性能 |
| LED / 电源品牌 | `Samsung/Epistar modules`、`Samsung or Epistar chips`、`MeanWell ... IP67` | **条件化**：`LED modules / power supplies selected for the project specification` | 未核实每个产品/项目都采用这些品牌或 IP67 等级 |
| 温度范围 | `-40°C to +60°C` | **移除固定范围**，改为 `Environmental rating reviewed for the exterior application` | 未核实该范围适用于各产品、组件与完整标识系统 |
| 老化 / Burn-in | `48H Burn-in Test` | **移除固定 48 小时**；改为 `Project-specific QC including illumination trials and final checks` | 未核实每个订单均执行 48 小时测试；指南 FAQ 保留“不要假定，按项目约定”的条件化说明 |
| 质量绝对化 | `QUALITY GUARANTEE`、`zero-defect signage delivery`、`highest quality` | **条件化**：`QUALITY REVIEW`、`project-specific final checks`、`structured production processes` | 无法用会话证据支持零缺陷、最高质量或无条件保证 |
| 全部 / 每个项目 | `every sign comes with ...` | **条件化**：`can be prepared when included in the project scope` | 安装图是否随每个项目提供取决于报价范围 |

## 2. 修改文件

### 生产源文件

- `src/app/page.tsx`：首页寿命、LED、Burn-in、全环境、Quality Assurance、质量统计卡、Quality Control 文案。
- `src/app/about/page.tsx`：DDP 从 `50+ countries` 改为按目的地和货物确认的报价范围；移除 `highest quality`。
- `src/app/faq/page.tsx`：3D mockup、安装图、DDP、海岸材料、保修、交期等答案条件化；FAQPage JSON-LD 继续与同一 `faqs` 数组同步。
- `src/components/Footer.tsx`：`Global DDP Certified` → `DDP Delivery Scope`。
- `src/app/projects/page.tsx`：案例页 CTA 的 DDP 表达改为目的地和货物确认后的交付范围。
- `src/app/products/acrylic-desk-sign/page.tsx`：保修、DDP 条件化。
- `src/app/products/portable-metal-a-frame-sign/page.tsx`：保修、DDP 条件化。
- `src/app/products/architectural-wayfinding-system/page.tsx`：LED、电源、环境等级、保修、DDP 条件化。
- `src/app/products/complete-signage-system/page.tsx`：LED、电源、环境等级、保修、DDP 条件化。
- `src/app/products/custom-halo-lit-letters/page.tsx`：LED、电源、环境等级、保修、DDP 条件化。
- `src/app/products/custom-landscape-furniture/page.tsx`：保修、DDP 条件化。
- `src/app/products/custom-led-neon-sign/page.tsx`：电源、环境等级、保修、DDP 条件化。
- `src/app/products/medical-care-signage/page.tsx`：LED、电源、保修、DDP 条件化。
- `src/app/products/metal-acrylic-logo-sign/page.tsx`：LED、电源、环境等级、保修、DDP 条件化。
- `src/app/products/outdoor-pylon-monument-sign/page.tsx`：温度范围、LED、电源、环境等级、保修、DDP 条件化。
- `src/app/products/ultra-slim-led-light-box/page.tsx`：LED、电源、环境等级、保修、DDP 条件化。

### 同步内容 / 文档

- `public/llms.txt`：删除固定 `3-5 years` 与 `50+ countries`，改为按项目报价/供货协议确认的保修和 DDP 范围。
- `SEO-OPERATIONS-MANUAL.md`：将首页卖点记录中的 `QUALITY GUARANTEE` 更新为 `QUALITY REVIEW`。
- `public/*.md`：由 `npm run build` 从更新后的页面源重新生成 26 个 Markdown 镜像，确保 AI 可读镜像与页面正文同步。
- `seo/trust-claims-audit-2026-09-21.md`：本声明台账与 before/after 记录。

## 3. 口径一致性检查

- **保留事实**：2006、20,000sqm、MOQ 1、7–14 days 在首页、产品页、FAQ / llms 内容中继续保留。
- **DDP**：统一为可按目的地和货物详情报价的 delivery scope，不再声称 50+ 国家、固定费用、无隐藏费用或“Certified”。
- **保修**：统一为报价或供货协议中说明 coverage / duration / exclusions，不再出现 3–5 年固定承诺。
- **组件与环境**：统一为按项目规格选择与审核，不再出现 Samsung/Epistar、MeanWell IP67、-40°C/+60°C 固定范围。
- **结构化数据**：FAQPage JSON-LD 仍从 FAQ 页同一 `faqs` 数组生成，未新增脱离页面正文的声明；全站 Organization JSON-LD 的 2006 foundingDate 未改动。

## 4. 验证规则

风险词扫描针对 `src/**/*.{tsx,ts}` 与 `public/llms.txt`，检查：

`ISO 9001`、`CE Certified`、`SGS Inspected`、`UL Components`、`10+ years`、`48H`、`Samsung`、`Epistar`、`-40°C`、`3–5 year`、`50+ countries`、`no hidden fees`、`Quality Guarantee`、`highest quality`、`IP67`、`zero-defect`。

最终目标：生产源代码和 `llms.txt` 均无上述未条件化高风险声明；产品定义中正常出现的 `every sign type` 不属于质量/信任承诺，未作语义破坏性修改。
