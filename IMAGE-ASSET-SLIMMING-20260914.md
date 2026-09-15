# 图片资产瘦身记录（2026-09-14）

**范围**：`public/assets/images/`
**结果**：**159.86 MB → 8.61 MB（-94.6%）**，文件数 **83 → 36**，**0 孤儿文件、0 死链**
**原则**：所有被引用图片的**文件名与路径零变化**，长宽比与画面内容保持不变。

---

## 1. 结论总览

| 指标 | 前 | 后 |
|---|---|---|
| 目录体积 | 159.86 MB | **8.61 MB** |
| 文件数 | 83 | 36 |
| 被引用文件 | 36 | 36（全部保留） |
| 零引用文件 | 47 | **0** |
| 死链 | 0 | 0 |

体积去向：**110.20 MB 归档**（零引用文件移出）+ **41.04 MB 压缩**（12 个 >500KB 的被引用图片）。

---

## 2. 零引用文件归档（移出，未删除）

- 归档位置：`zyd-static-backup/orphan-images-20260914/`
- 文件数 / 体积：**47 个 / 110.20 MB**
- 清单：同目录下 `MANIFEST.md`、`manifest.csv`
- 该目录已被 `.gitignore` 忽略，**不会部署、不会推送**，但文件保留在本地磁盘
- 复原方式：把文件移回 `public/assets/images/` 即可
- 附加保障：这 83 个文件**全部已被 git 追踪**，即使本地丢失也可从 git 历史恢复

> 其中 12 个是同一张 hero 照片的逐字节重复副本（MD5 `8089838a…`，各约 9.55 MB）；另有 6 组重复内容分组，详见 `manifest.csv`。

---

## 3. 被引用大图压缩（12 个文件）

规则：长边 ≤ 1920px（不放大）、质量 ≥ 80、保留原始长宽比、**保留原文件字节格式**（避免改变渲染行为）、含 ICC 配置时保留以避免偏色。

| 文件 | 前 | 后 | 尺寸 | 编码 | 质量 |
|---|---|---|---|---|---|
| factory-overview.jpg | 9.55 MB | 521 KB | 10969x9078 → 1920x1589 | jpeg→jpeg | 85 |
| hero-bg-seafront.png | 9.55 MB | **296 KB** | 10969x9078 → 1440x1192 | jpeg→jpeg | 85 |
| hero-bg-factory-aerial.jpg | 7.52 MB | **296 KB** | 10969x9078 → 1440x1192 | jpeg→jpeg | 85 |
| team-annual-event.jpg | 4.29 MB | 390 KB | 5863x3909 → 1920x1280 | jpeg→jpeg | 85 |
| team-training.jpg | 3.78 MB | 394 KB | 5950x3967 → 1920x1280 | jpeg→jpeg | 85 |
| team-outdoor.jpg | 2.88 MB | 222 KB | 6000x4000 → 1920x1280 | jpeg→jpeg | 85 |
| team-collage.jpg | 2.00 MB | 241 KB | 1448x1086（不缩放） | png→jpeg | 85 |
| cat-neon.webp | 1.89 MB | 96 KB | 1448x1086（不缩放） | png→webp | 85 |
| vr-tour-preview.jpg | 1.53 MB | 226 KB | 1754x1033（不缩放） | png→jpeg | 85 |
| factory-video-poster.jpg | 0.69 MB | 412 KB | 1854x1205（不缩放） | jpeg→jpeg | 85 |
| the-setai-sea-of-galilee.jpg | 0.63 MB | 430 KB | 1654x1089（不缩放） | jpeg→jpeg | 85 |
| zimbabwe-national-sports-stadium.jpg | 0.52 MB | 356 KB | 1536x1024（不缩放） | jpeg→jpeg | 85 |
| **合计** | **44.83 MB** | **3.79 MB** | | | |

**Hero 预算说明**：AC 要求首页 hero ≤ 300 KB。原始素材为 10969x9078 的高细节照片，实测在 4:2:0、质量 85 时，1600px 已需 350 KB、1920px 需 460 KB，均超预算；**1440px @ 质量 85 = 296 KB** 是预算内可保留的最大分辨率，故 hero 定为 1440x1192。其他文件不受此预算限制，一律保留 1920px。

---

## 4. 页面使用的 hero（重要更正）

- **首页 hero = `hero-bg-factory-aerial.jpg`**，引用位置 `src/app/page.tsx:164`（`loading="eager"` + `fetchPriority="high"`），同时作为 OG 图被 `src/app/layout.tsx:9` 引用 → 会被社交爬虫抓取。
- **FAQ 页 hero = `hero-bg-seafront.png`**，引用位置 `src/app/faq/page.tsx:98`（同为 eager + high）。
- 两者均已按 hero 预算压缩到 296 KB。

---

## 5. 发现的两个既有问题（本次未修改代码）

1. **扩展名与实际字节格式不一致**（属既有状态，本次**按原样保留**，未改变渲染行为）：

| 文件 | 扩展名 | 实际格式 |
|---|---|---|
| hero-bg-seafront.png | .png | **JPEG** |
| cat-neon.webp / cat-outdoor.webp / cat-system.webp / cat-wayfinding.webp / cat-illuminated.webp / cat-lightbox.webp / cat-metal.webp / lightbox.webp | .webp | **JPEG**（本次已将 cat-neon.webp 输出为真 WebP） |
| team-collage.jpg / vr-tour-preview.jpg / logo-correct.jpg | .jpg | **PNG**（前两者本次已转为真 JPEG） |
| hero-wayfinding.png | .png | **JPEG** |

2. **文档与代码不一致**：`IMAGE_SWAP_GUIDE.md` 与 `Independent Site Handoff Manual.md` 称首页视频 poster 为 `public/assets/images/factory-main.webp`，但代码实际使用 `src/app/page.tsx:291` 的 `poster="/assets/images/factory-video-poster.jpg"`。`factory-main.webp` 因此属零引用文件，已归档。**两份文档已于 2026-09-15 更正为 `factory-video-poster.jpg`。**

---

## 6. 验收证据

| 项目 | 结果 |
|---|---|
| 重新扫描 `src/` 确认被引用路径存在 | 36/36 存在，**缺失 0** |
| 死链检查 | `tokensMissingOnDisk = 0` |
| 孤儿检查 | `orphanFiles = 0` |
| 目录体积 | 8.61 MB（≤ 10 MB ✓） |
| `npm run build` | **通过，0 error**，生成 27 个路由 |

复现命令：

```powershell
node temp/analyze-images.mjs    # 引用/孤儿/死链分析
node temp/optimize-images.mjs   # 大图压缩（已执行；重复执行无副作用，会跳过已有备份）
npm run build                   # 构建校验
```

---

## 7. 后续任务（不在本次范围）

- `<img>` → `next/image` 迁移（独立任务 #158）
- 统一扩展名与实际格式（需改代码引用，涉及缓存与 CDN 行为）
- hero 分辨率与 300 KB 预算的取舍可按实际观感复核；若放宽预算，可直接从 `zyd-static-backup/pre-optimize-originals-20260914/` 重新生成更高分辨率版本
