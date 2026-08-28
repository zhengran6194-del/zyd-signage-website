# ZYD Signage - 30-Second Fast Image Swap Manual
# 大连志于道标识 - 30秒极速换图手册

This manual explains how to quickly update key visual assets on the website without editing complex code.

## 1. Core Background & Hero Images (核心背景与主图)
To change the background or hero images, simply replace the file in `public/assets/images/` with a new file of the **same name and extension**.

| Target Area | File Path | Recommendation |
| :--- | :--- | :--- |
| **Main Hero Background** (首页工厂主视觉) | `public/assets/images/hero-bg-factory-aerial.jpg` | 1920x1080+, Dark/Muted |
| **FAQ Hero Background** (FAQ页面主视觉) | `public/assets/images/hero-bg-seafront.png` | 1920x1080+, Dark/Muted |
| **WhatsApp Icon** (左下角图标) | `public/assets/images/whatsapp-icon-3d.jpg` | 512x512, Square |
| **Company Logo** (顶部Logo) | `public/assets/images/logo-correct.jpg` | Transparent PNG preferred |
| **Wayfinding Hero** | `public/assets/images/hero-wayfinding.png` | Product close-up |
| **Medical Hero** | `public/assets/images/hero-medical.jpg` | Hospital scenario |

## 2. Product Category Images (产品大类图)
These are the images shown in the product grids on the Home and Products pages.

* **Illuminated Letters**: `cat-illuminated.webp`
* **Light Boxes**: `cat-lightbox.webp`
* **Neon Signs**: `cat-neon.webp`
* **Outdoor Signs**: `cat-outdoor.webp`
* **Metal/Acrylic**: `cat-metal.webp`
* **Furniture/Bench**: `landscape-bench.jpg`
* **Complete System**: `cat-system.webp`

## 3. FAQ Popular Guides Images (FAQ指南图片)
These four cards use existing local images. Replace the matching file in `public/assets/images/` to update the card image without editing the page:

| Guide Card | File Path |
| :--- | :--- |
| **Channel Letters Cost** | `public/assets/images/cat-illuminated.webp` |
| **Front-Lit vs Halo-Lit** | `public/assets/images/lightbox.webp` |
| **Choosing the Right Sign** | `public/assets/images/cat-wayfinding.webp` |
| **Materials** | `public/assets/images/cat-metal.webp` |

## 4. How to Swap (操作步骤)
1. **Prepare your image**: Ensure the filename exactly matches the one in the table above (e.g., `hero-bg-factory-aerial.jpg`).
2. **Upload/Overwrite**: Place the new file in the `public/assets/images/` directory, overwriting the old one.
3. **Deploy**: Push the changes to GitHub. Vercel will automatically update the site in ~1 minute.

---
**Note**: If you want to use a different filename (e.g., `new-hero.jpg`), you must update the `src` attribute in `src/app/page.tsx`, `src/app/faq/page.tsx`, or the respective product subpage.
**注意**：如果您使用了不同的文件名（如 `new-hero.jpg`），则必须在代码中搜索并修改对应的 `src` 路径。
