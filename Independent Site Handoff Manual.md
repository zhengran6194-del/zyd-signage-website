# 独立站交付与维护手册 - 大连志于道标识 (ZYD Signage)

本手册旨在帮助您（Aaron）通过 GitHub Desktop 和 Vercel 轻松管理和更新您的高端 B2B 标识工厂网站。

---

## 1. GitHub Desktop 网站同步教程

GitHub Desktop 是您连接本地文件与线上服务器的桥梁。每当您修改了代码、文案或更换了图片，请执行以下三个步骤：

1.  **提交更改 (Commit)**：
    *   在左侧面板查看已修改的文件。
    *   在左下角 "Summary" 框输入简要描述（如：“更新案例图”）。
    *   点击蓝色的 **"Commit to main"** (或 master) 按钮将更改记录到本地。
2.  **推送到线上 (Push)**：
    *   点击顶部栏的 **"Push origin"** 按钮。
    *   进度条完成后，本地更改即已同步至云端仓库。

---

## 2. Vercel 部署监控

您的网站由 Vercel 自动构建并上线。

*   **实时更新**：每次您在 GitHub Desktop 点击 "Push" 后，Vercel 会自动开始新的构建。
*   **状态检查**：您可以访问 [Vercel Dashboard](https://vercel.com/dashboard) 查看构建日志（Build Logs）。如果看到绿色 "Ready" 标志，说明同步成功。
*   **预览地址**：生产环境已绑定至 [https://zydsign.com](https://zydsign.com)。

---

## 3. 图片更换快速指南

保持网站视觉统一的关键在于图片比例。

*   **操作逻辑**：将新图命名为与旧图完全一致的文件名，存入 `public/assets/images` 文件夹并覆盖原图，然后通过 GitHub Desktop 同步。
*   **参考对照表**：请查阅根目录下的 [IMAGE_SWAP_GUIDE.md](IMAGE_SWAP_GUIDE.md) 获取详细的文件名与推荐尺寸对照。

---

## 4. 首页工厂实况视频已接入

首页工厂实况目前已接入视频：`public/assets/videos/factory-live.mp4`，代码位置为 `src/app/page.tsx`；视频 poster 为 `public/assets/images/factory-main.webp`。以后替换视频时，请用相同文件名覆盖 MP4，测试后通过 GitHub Desktop 提交并 Push。若要修改视频路径、poster 或播放行为，再同步修改首页 `<video>` 节点。详细步骤请查阅 [IMAGE_SWAP_GUIDE.md](IMAGE_SWAP_GUIDE.md) 的“Factory Live Section: Video Connected”章节。

## 5. 联系方式

在维护过程中遇到技术疑问或需要深度调整，请联系：

*   **技术对接人**：Aaron
*   **销售邮箱**：zhengran@zydsign.cn
*   **WhatsApp**：8615931359322

**祝您通过独立站斩获更多国际优质订单！**
