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

## 4. Factory Live Section: Image Placeholder to Video (首页工厂实况：图片占位替换为视频)
The homepage factory live section currently uses an image placeholder at `public/assets/images/factory-main.webp`. This image will remain the fallback until the homepage media node is changed to a video.

When your factory video is ready:

1. **Prepare the video**: Use an MP4 file encoded with H.264 video and AAC audio for broad browser compatibility. Keep the file reasonably compressed for fast loading.
2. **Upload to the fixed folder and filename**: Place the file at `public/assets/videos/factory-live.mp4`. Create the `public/assets/videos/` folder if it does not exist. Keep this exact path and filename so the handoff instructions remain consistent.
3. **Switch the homepage media node**: Uploading the MP4 alone does **not** automatically turn the image into a video. In `src/app/page.tsx`, replace the factory section's image media node that references `/assets/images/factory-main.webp` with a `<video>` node whose source is `/assets/videos/factory-live.mp4`. Keep suitable `muted`, `loop`, `playsInline`, and `controls` settings as needed for the desired behavior.
4. **Test locally**: Confirm the homepage loads the video, it starts or plays as intended, and the image fallback/alt behavior is still appropriate.
5. **Sync with GitHub Desktop**: Commit the changed video and homepage file, then click **Push origin**. Vercel will build and deploy the update automatically.

The current image placeholder path and future video path are deliberately fixed:

| Media State | File Path |
| :--- | :--- |
| **Current image placeholder** | `public/assets/images/factory-main.webp` |
| **Future factory video** | `public/assets/videos/factory-live.mp4` |

## 5. How to Swap Images (图片替换步骤)
1. **Prepare your image**: Ensure the filename exactly matches the one in the table above (e.g., `hero-bg-factory-aerial.jpg`).
2. **Upload/Overwrite**: Place the new file in the `public/assets/images/` directory, overwriting the old one.
3. **Deploy**: Push the changes to GitHub. Vercel will automatically update the site in ~1 minute.

---
**Note**: If you want to use a different filename (e.g., `new-hero.jpg`), you must update the `src` attribute in `src/app/page.tsx`, `src/app/faq/page.tsx`, or the respective product subpage.
**注意**：如果您使用了不同的文件名（如 `new-hero.jpg`），则必须在代码中搜索并修改对应的 `src` 路径。
