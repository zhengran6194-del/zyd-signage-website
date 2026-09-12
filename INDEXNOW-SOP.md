# ZYD IndexNow 收录推送 SOP

**版本**：v1.1（2026-09-12）
**适用**：Dalian Zhiyudao Signage & Tech. Co., Ltd. 独立站 https://zydsign.com
**关联**：`SEO-OPERATIONS-MANUAL.md`（阶段一：抓取与提交）、`CONTENT-PIPELINE.md`（发布节奏）、`scripts/indexnow-submit.ps1`（提交脚本）、`scripts/indexnow-urls.txt`（URL 清单）
**说明**：本文档是运营规范，不是网站页面。除 `public/` 下的 key 文件与 `scripts/` 下的提交脚本外，本 SOP 不新增任何网站代码或 schema。

---

## §0 当前状态（部署前必读）

| 项目 | 现状 | 证据 |
|---|---|---|
| key 文件（本地） | 已创建 | `public/9556efc61b037c23c2a35aa4fd12076f.txt`，32 字节，内容即 key，无换行 |
| key 文件（生产） | **未部署，404** | `https://www.zydsign.com/9556efc61b037c23c2a35aa4fd12076f.txt` → HTTP 404（2026-09-12 复核） |
| canonical 主机 | `www.zydsign.com` | `https://www.zydsign.com/` → HTTP 200；`https://zydsign.com/` 与 `https://zydsign.com/sitemap.xml` → HTTP 308 永久跳转 |
| sitemap URL 数量 | **21 条** | `https://www.zydsign.com/sitemap.xml` 中 `<loc>` 计数为 21（含 4 篇 `/guides/*`） |
| robots 是否屏蔽 key | 否 | `https://www.zydsign.com/robots.txt` 内容为 `User-Agent: *` / `Allow: /` |
| 提交脚本 | 已创建 | `scripts/indexnow-submit.ps1`（生产 key 预检失败即硬性中止），URL 清单 `scripts/indexnow-urls.txt` |
| `/guides` 索引页（生产） | **未部署，404** | `https://www.zydsign.com/guides` → HTTP 404（2026-09-12 实测）；4 篇子页均已 200 |

**结论**：key 文件必须先在 Vercel 部署成功（生产返回 200），IndexNow 才能完成 key 校验。在此之前提交会被接收但校验失败。

**最近一次脚本执行（2026-09-12）**：`scripts/indexnow-submit.ps1` 在生产 key 预检阶段检测到 **HTTP 404** 并按设计中止，**退出码 2，未发出任何提交**。这是预期行为，不是故障。

---

## §1 Key 文件规则

1. **路径**：`public/9556efc61b037c23c2a35aa4fd12076f.txt`
2. **文件名即 key**：文件名 = 32 位十六进制 key。
3. **文件内容 = key 本身**，不要写 JSON、不要加多余文字。
4. **不要带尾随换行**（当前文件为 32 字节，无 `\n`）。
5. **公开访问地址**：`https://www.zydsign.com/9556efc61b037c23c2a35aa4fd12076f.txt`
6. **部署方式**：Next.js 的 `public/` 目录内容直接映射到站点根路径。`git push` 后由 Vercel 自动构建并发布，无需改代码。
7. **不要删除或改名 key 文件**。改名等同于更换 key，需同步更新本 SOP 与所有提交脚本。

---

## §2 提交方式

### 2.0 通用规则（先读）

- 接口地址：`POST https://api.indexnow.org/indexnow`
- `Content-Type`：`application/json; charset=utf-8`
- `host` 必须与 `urlList` 中每个 URL 的主机一致。
- **本项目必须使用 `www.zydsign.com`**，因为 apex `zydsign.com` 返回 308 跳转；IndexNow 的 key 校验不依赖跟随跳转，用 apex 有校验失败风险。

### 2.1 单条提交（PowerShell）

```powershell
$key = "9556efc61b037c23c2a35aa4fd12076f"
$body = @{
  host        = "www.zydsign.com"
  key         = $key
  keyLocation = "https://www.zydsign.com/$key.txt"
  urlList     = @("https://www.zydsign.com/guides/how-much-do-custom-channel-letters-cost")
} | ConvertTo-Json -Depth 5

$file = Join-Path $env:TEMP "indexnow-single.json"
Set-Content -Path $file -Value $body -Encoding UTF8

try {
  $r = Invoke-WebRequest -Uri "https://api.indexnow.org/indexnow" -Method Post `
       -ContentType "application/json; charset=utf-8" -InFile $file -UseBasicParsing -TimeoutSec 60
  "HTTP_STATUS=$($r.StatusCode)"
} catch {
  $resp = $_.Exception.Response
  if ($resp) { "HTTP_STATUS=$([int]$resp.StatusCode)" } else { "ERROR=$($_.Exception.Message)" }
}
```

### 2.2 批量提交（PowerShell，最多 10,000 条 / 次）

```powershell
$key = "9556efc61b037c23c2a35aa4fd12076f"
$urls = @(
  "https://www.zydsign.com/guides/how-much-do-custom-channel-letters-cost",
  "https://www.zydsign.com/guides/front-lit-vs-halo-lit-channel-letters",
  "https://www.zydsign.com/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs",
  "https://www.zydsign.com/guides/how-to-choose-the-right-sign-for-your-business"
)

$body = @{
  host        = "www.zydsign.com"
  key         = $key
  keyLocation = "https://www.zydsign.com/$key.txt"
  urlList     = $urls
} | ConvertTo-Json -Depth 5

$file = Join-Path $env:TEMP "indexnow-batch.json"
Set-Content -Path $file -Value $body -Encoding UTF8

try {
  $r = Invoke-WebRequest -Uri "https://api.indexnow.org/indexnow" -Method Post `
       -ContentType "application/json; charset=utf-8" -InFile $file -UseBasicParsing -TimeoutSec 60
  "HTTP_STATUS=$($r.StatusCode)"
} catch {
  $resp = $_.Exception.Response
  if ($resp) { "HTTP_STATUS=$([int]$resp.StatusCode)" } else { "ERROR=$($_.Exception.Message)" }
}
```

### 2.3 curl 示例（macOS / Linux / Git Bash）

```bash
KEY=9556efc61b037c23c2a35aa4fd12076f
curl -s -o /dev/null -w "%{http_code}\n" -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{\"host\":\"www.zydsign.com\",\"key\":\"$KEY\",\"keyLocation\":\"https://www.zydsign.com/$KEY.txt\",\"urlList\":[\"https://www.zydsign.com/guides/front-lit-vs-halo-lit-channel-letters\"]}"
```

### 2.4 提交前自检（每次都要做）

```powershell
# 1) key 文件必须在生产返回 200，且内容等于 key
$key = "9556efc61b037c23c2a35aa4fd12076f"
(Invoke-WebRequest "https://www.zydsign.com/$key.txt" -UseBasicParsing).Content

# 2) 待提交 URL 必须能返回 200（不要提交 404 / 跳转页）
(Invoke-WebRequest "https://www.zydsign.com/guides/front-lit-vs-halo-lit-channel-letters" -UseBasicParsing).StatusCode
```

第 1 步返回 404 时，**不要提交**，先完成部署。

### 2.5 推荐用法：使用提交脚本（一键）

日常提交统一使用脚本，不要手写 JSON。脚本会自动完成 §2.4 的两项自检，并在任何一项失败时中止。

```powershell
# A. 批量提交（部署完成后使用，URL 清单见 §6.2）
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/indexnow-submit.ps1 -UrlsFile scripts/indexnow-urls.txt

# B. 少量/单条提交
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/indexnow-submit.ps1 -Urls "https://www.zydsign.com/guides/front-lit-vs-halo-lit-channel-letters"

# C. 只做预检并打印将要发送的 payload，不发送请求
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/indexnow-submit.ps1 -UrlsFile scripts/indexnow-urls.txt -DryRun
```

脚本行为：

| 步骤 | 行为 | 失败时 |
|---|---|---|
| 1 | 从 `public/` 自动发现 32 位十六进制 key 文件，校验文件名与内容一致 | 退出码 5，不提交 |
| 2 | 请求生产 `keyLocation`，要求 HTTP 200 且正文等于 key | **退出码 2，硬性中止，不提交** |
| 3 | 逐个请求待提交 URL，要求 HTTP 200 | 退出码 3，不提交（可用 `-Force` 跳过该项检查） |
| 4 | POST 到 `https://api.indexnow.org/indexnow`，打印真实状态码、响应体与 `X-MSEdge-Ref` | 非 2xx 时退出码 4 |

退出码：`0` 已接受（200/202）｜`2` 生产 key 预检失败｜`3` 目标 URL 非 200｜`4` API 返回非 2xx｜`5` 输入错误（无 URL、key 非法、主机不匹配）。

脚本以 UTF-8 **无 BOM** 写入请求体（带 BOM 可能导致 API 返回 400）。脚本不修改任何网站代码。

---

## §3 返回码含义

| 状态码 | 含义 | 处理动作 |
|---|---|---|
| `200 OK` | URL 已提交且已接受 | 记录到提交台账 |
| `202 Accepted` | 请求已被接收，进入处理队列；**不等于已收录** | 记录；在 key 未部署完成前，此类结果视为“待重新提交” |
| `400 Bad Request` | 请求格式错误（JSON 结构、缺字段等） | 检查 `host` / `key` / `keyLocation` / `urlList` 拼写与 JSON 结构 |
| `403 Forbidden` | key 校验失败：key 无效，或 `keyLocation` 无法访问 | 确认 key 文件已在生产返回 200，且文件名与内容完全等于 key |
| `422 Unprocessable Entity` | URL 不属于 `host`，或 URL 格式非法 | 确认所有 URL 主机与 `host` 一致（本项目统一用 `www.zydsign.com`） |
| `429 Too Many Requests` | 提交过于频繁 | 停止提交，改到下一个工作日；不要循环重试 |

**边界说明**：IndexNow 只负责把 URL 通知给搜索引擎，不保证收录、不保证排名。返回 200/202 不代表页面已进入索引，收录结果仍需在 GSC / Bing 网站管理员后台观察。

---

## §4 每周提交清单

**执行频率**：每周一次（建议与 `SEO-OPERATIONS-MANUAL.md` 的每周内容发布同一天执行）。

| 顺序 | 提交对象 | 判断条件 | URL 来源 | 记录字段 |
|---|---|---|---|---|
| 1 | 本周**新增**指南/文章页 | 本周首次发布 | 新建页面实际 URL | 提交日期、URL、返回码 |
| 2 | 本周**更新**的既有页 | 正文/事实/日期有实质修改 | 被修改页面 URL | 提交日期、URL、返回码、更新摘要 |
| 3 | 本周**新增**产品页 | 新增品类详情页 | 新页面 URL | 提交日期、URL、返回码 |
| 4 | `sitemap.xml` 中新增但**从未提交**的 URL | 与提交台账比对后仍缺失 | `https://www.zydsign.com/sitemap.xml` | 提交日期、URL、返回码 |

**台账字段**（建议单独维护，或在本文档下方追加）：

| 提交日期 | host | URL | 返回码 | 备注 |
|---|---|---|---|---|
| [YYYY-MM-DD] | www.zydsign.com | [完整 URL] | [200/202/4xx] | [新增/更新；异常说明] |

**不应提交的内容**：

- 返回 404 / 5xx 的 URL；
- 仅改样式、未改内容的页面（避免噪音提交）；
- apex `zydsign.com` 形式的 URL（会 308 跳转）；
- 同一批 URL 一天内重复提交。

**当前已提交过的 URL**（避免重复提交，可先增量更新）：见 §5。

---

## §5 首次提交记录（真实）

**提交时间**：2026-09-12（响应头 `Date: Sat, 12 Sep 2026 06:31:25 GMT`）
**接口**：`POST https://api.indexnow.org/indexnow`
**请求体**：

```json
{
  "host": "www.zydsign.com",
  "key": "9556efc61b037c23c2a35aa4fd12076f",
  "keyLocation": "https://www.zydsign.com/9556efc61b037c23c2a35aa4fd12076f.txt",
  "urlList": [
    "https://www.zydsign.com/guides/how-much-do-custom-channel-letters-cost",
    "https://www.zydsign.com/guides/front-lit-vs-halo-lit-channel-letters",
    "https://www.zydsign.com/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs",
    "https://www.zydsign.com/guides/how-to-choose-the-right-sign-for-your-business"
  ]
}
```

**真实返回**：

```text
HTTP_STATUS=202
RESPONSE_BODY=（空）
Content-Length: 0
X-MSEdge-Ref: Ref A: 4B5D05F5FFF948ED9B316F1838E4F26F Ref B: TYO601100908062 Ref C: 2026-09-12T06:31:24Z
```

**结果判读**：服务端返回 `202 Accepted`，请求格式与主机校验通过，进入处理队列。

**未完成部分（必须继续处理）**：本次提交时 key 文件在生产环境返回 **404**（未部署），IndexNow 后续校验 key 时会失败，因此**本次提交不能视为生效**。完成部署后，需按 §2.2 对这 4 个 URL 重新提交，并重新记录返回码。

---

## §6 部署后验收（Deploy-then-Verify）

key 文件一旦上线，按本章执行即可完成“一键重提交”。

### 6.1 前置条件（全部满足才可提交）

| 编号 | 检查项 | 期望结果 | 检查命令 |
|---|---|---|---|
| P1 | key 文件已在生产部署 | `https://www.zydsign.com/9556efc61b037c23c2a35aa4fd12076f.txt` → `200`，正文 = `9556efc61b037c23c2a35aa4fd12076f` | `(Invoke-WebRequest "https://www.zydsign.com/9556efc61b037c23c2a35aa4fd12076f.txt" -UseBasicParsing).Content` |
| P2 | `/guides` 索引页已部署 | `https://www.zydsign.com/guides` → `200` | `(Invoke-WebRequest "https://www.zydsign.com/guides" -UseBasicParsing).StatusCode` |
| P3 | Key 未被 robots 屏蔽 | `robots.txt` 为 `Allow: /` | 见 §0 |

P1 或 P2 未满足时**不要提交**：脚本会在预检阶段中止（退出码 2 / 3），这是设计行为。

### 6.2 需重提交的 URL 清单

下表为本次需要重新提交的 URL。前 4 篇指南曾在 key 未部署时被提交过一次（返回 202，未通过 key 校验），必须重提交。清单同步维护在 `scripts/indexnow-urls.txt`。

| 分组 | URL | 2026-09-12 实测状态 | 说明 |
|---|---|---|---|
| 指南 | `https://www.zydsign.com/guides/how-much-do-custom-channel-letters-cost` | 200 | 首次提交未通过 key 校验，需重提交 |
| 指南 | `https://www.zydsign.com/guides/front-lit-vs-halo-lit-channel-letters` | 200 | 同上 |
| 指南 | `https://www.zydsign.com/guides/304-stainless-steel-vs-galvanized-steel-outdoor-signs` | 200 | 同上 |
| 指南 | `https://www.zydsign.com/guides/how-to-choose-the-right-sign-for-your-business` | 200 | 同上 |
| 指南索引 | `https://www.zydsign.com/guides` | **404** | 新增页面，**必须先部署**；未部署时脚本预检会中止 |
| 新品页 | `https://www.zydsign.com/products/outdoor-waste-bin` | 200 | 新增品类页 |
| 新品页 | `https://www.zydsign.com/products/custom-planter-box` | 200 | 新增品类页 |
| 更新页 | `https://www.zydsign.com/` | 200 | 首页更新 |
| 更新页 | `https://www.zydsign.com/products` | 200 | 产品总览更新 |
| 更新页 | `https://www.zydsign.com/products/architectural-wayfinding-system` | 200 | 详情页更新 |
| 更新页 | `https://www.zydsign.com/products/complete-signage-system` | 200 | 详情页更新 |
| 更新页 | `https://www.zydsign.com/products/custom-halo-lit-letters` | 200 | 详情页更新 |
| 更新页 | `https://www.zydsign.com/products/custom-landscape-furniture` | 200 | 详情页更新 |
| 更新页 | `https://www.zydsign.com/products/custom-led-neon-sign` | 200 | 详情页更新 |
| 更新页 | `https://www.zydsign.com/products/medical-care-signage` | 200 | 详情页更新 |
| 更新页 | `https://www.zydsign.com/products/metal-acrylic-logo-sign` | 200 | 详情页更新 |
| 更新页 | `https://www.zydsign.com/products/outdoor-pylon-monument-sign` | 200 | 详情页更新 |
| 更新页 | `https://www.zydsign.com/products/ultra-slim-led-light-box` | 200 | 详情页更新 |

合计 18 条（4 指南 + 1 索引 + 2 新品 + 11 更新页）。

### 6.3 执行步骤

1. 完成部署：提交 `public/9556efc61b037c23c2a35aa4fd12076f.txt` 与 `/guides` 页面，push，等待 Vercel 构建完成。
2. 完成 §6.1 的 P1 / P2 检查。
3. 执行提交：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/indexnow-submit.ps1 -UrlsFile scripts/indexnow-urls.txt
```

4. 把脚本打印的真实 HTTP 状态码逐条填入 §6.4 记录表。
5. 在 Bing 网站管理员后台确认 IndexNow 状态（见 §6.5）。

### 6.4 返回码记录表（执行后填写真实值）

| 提交日期 | host | 分组 | URL 数量 | 真实 HTTP 状态码 | 响应体 / X-MSEdge-Ref | 执行人 |
|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | www.zydsign.com | 指南 / 索引 / 新品 / 更新页 | [N] | [200/202/4xx] | [粘贴脚本输出] | [姓名] |

单条 URL 级记录（可选，异常时填写）：

| 提交日期 | URL | 状态码 | 说明 |
|---|---|---|---|
| [YYYY-MM-DD] | [完整 URL] | [200/202/4xx] | [异常或跳过原因] |

### 6.5 收录确认（重要）

- `200` / `202` 仅表示 **IndexNow 已接收请求**，**不等于页面已被收录或排名**。
- 必须在 **Bing 网站管理员后台（Bing Webmaster Tools）** 确认 IndexNow 提交记录、key 状态与 URL 检查结果。
- Google 不参与 IndexNow，Google 收录仍需通过 GSC 观察。
- 按 `SEO-OPERATIONS-MANUAL.md` 阶段一纪律：判据是“能抓取、能提交、能记录、能响应”，不以短期收录量证明成功。

### 6.6 本次未完成项与待人工步骤

| 未完成项 | 原因 | 待人工步骤 |
|---|---|---|
| 未执行有效提交 | 生产 key 文件返回 404，脚本按设计中止（退出码 2） | 部署 key 文件后重跑 §6.3 |
| `/guides` 索引页不可提交 | 生产返回 404 | 部署该页后再提交 |
| 无法从本地触发部署 | Vercel 无可用连接账号 | 由用户/前端成员 push 或手动触发 Vercel 构建 |
| 收录情况未知 | 尚未通过 key 校验 | 部署并重提交后在 Bing 后台确认 |

---

## §7 常见问题

**Q：可以换 key 吗？**
A：可以，但必须同时更新 key 文件名/内容、本 SOP、以及所有提交脚本中的 `key` 与 `keyLocation`。换 key 后旧 key 文件应删除。

**Q：为什么用 `www.zydsign.com` 而不是 `zydsign.com`？**
A：生产环境 apex 域名返回 308 永久跳转到 `www`。IndexNow 要求 `keyLocation` 与提交 URL 同主机，使用实际返回 200 的 `www` 主机更稳妥。

**Q：`robots.txt` 里写的是 apex 域名，需要改吗？**
A：已处理（工作区改动，尚未部署）。`src/app/robots.ts` 的 `Host` / `Sitemap` 已由 `siteConfig.url`（apex）改为硬编码 `https://www.zydsign.com`，与 canonical 主机一致。注意区分：

- **代码现状**：工作区已使用 `www`（由前端成员修改，非本 SOP 作者改动）；
- **生产现状**：2026-09-12 实测仍为 apex（`Host: https://zydsign.com`），需部署后才会变为 `www`。

部署后请复测 `https://www.zydsign.com/robots.txt` 确认已切换。

**Q：提交后多久见效？**
A：IndexNow 不承诺时效。按 `SEO-OPERATIONS-MANUAL.md` 阶段一的纪律，判据是“能抓取、能提交、能记录、能响应”，不以短期收录量作为成功标准。
