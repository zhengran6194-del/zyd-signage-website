# ZYD Signage — AI 提及基线（AI Mention Baseline）

本目录用于建立并追踪「买家在 AI 对话中是否提到 ZYD / zydsign.com」的月度基线。

## 协议（Protocol）

- **20 个买家问题**（`questions.csv`，q1–q20，英文原文），分为四类，每类 5 条：
  - q1–5 Selection（选型）
  - q6–10 Supplier（供应商）
  - q11–15 Comparison（对比）
  - q16–20 Process（流程）
- **每季度/每月同日重跑**：对每个问题分别向 **ChatGPT / Perplexity / Gemini** 发起提问，
  逐条记录结果。
- **提及（mentioned=1）**：回答正文中出现 ZYD、ZYD Signage 或域名 `zydsign.com`（含拼音/变体）。
- **引用（cited=1）**：回答给出的来源/链接列表中出现本站 URL（`zydsign.com` 任意页面）。
- 引用为 1 时填写 `cited_url`（具体被引用的页面 URL）。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| `questions.csv` | 20 条固定问题（q_id, category, question），不可随意改动 |
| `record-template.csv` | 每次抓取记录一行：date, platform, q_id, mentioned, cited, cited_url, competitors, notes |
| `record-YYYY-MM.csv` | 各期原始记录（如 `record-2026-09.csv`） |
| `summary-YYYY-MM.md` | 各期汇总报告（如 `summary-2026-09.md`） |
| `README.md` | 本说明 |

## 覆盖范围（Coverage）

- 2026-09 期 = **ChatGPT + Perplexity**（各 20 问，共 40 条）。
- **Gemini 未纳入本期**：账号不可用，未运行、未记录，未编造数据。
- 后续 Gemini 可用时：按同一套问题（q1–q20）在该平台补跑，追加至当月 `record-YYYY-MM.csv`，并更新对应 `summary-YYYY-MM.md` 与本文覆盖范围。


## 使用方法（How to Use）

1. 打开 ChatGPT / Perplexity / Gemini，逐条粘贴 `questions.csv` 中的问题（一次一问，保持原文）。
2. 对每个回答新建一行记录：
   - `date`：抓取日期（YYYY-MM-DD）
   - `platform`：chatgpt / perplexity / gemini
   - `q_id`：对应问题编号
   - `mentioned`：正文提到 ZYD/zydsign.com 填 1，否则 0
   - `cited`：来源含本站 URL 填 1，否则 0
   - `cited_url`：cited=1 时填写被引用的具体页面 URL
   - `competitors`：回答中出现的同行/竞品名称（逗号分隔；无则留空）
   - `notes`：备注（可选）
3. 建议开启「无痕/未登录」会话以减少个性化干扰；可每个平台跑 2 次取稳定结果。
4. 每次跑完另存为 `record-YYYY-MM.csv`（示例：`record-2026-09.csv`），保留月度历史。
5. 汇总时可统计：各平台提及率、引用率、常见被引页面、常见被提及同行。

## 判定示例

- 回答提到 "ZYD Signage is a Chinese manufacturer…" → mentioned=1
- 回答引用 `https://zydsign.com` 或 `https://zydsign.com/products/...` → cited=1，并在 cited_url 填写该 URL
- 回答提到 Alibaba 店铺 dlzydbs.en.alibaba.com 等第三方域名 → 不属于本站引用，计入 competitors/notes
