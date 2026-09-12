# ZYD 询盘承接 SOP（Inquiry Handling SOP）

**版本**：v1.0（2026-09-09）
**适用**：Dalian Zhiyudao Signage & Tech. Co., Ltd. 外贸团队（多名询盘角色，值班表见 §2）
**关联**：SEO-OPERATIONS-MANUAL.md §7.1 / §8 / §10
**说明**：本文档是运营规范，不是网站页面；不新增任何网站代码或 schema。

## §1 询盘来源清单与每日检查顺序

每日（含周末值班日）按以下顺序检查，逐条确认“已读、已登记、已首复或已标记跟进”。

| 顺序 | 来源 | 位置/方式 | 检查动作 |
|---|---|---|---|
| 1 | 独立站 Contact 表单 | 表单提交后生成 WhatsApp 深链或 mailto（代码：`src/app/contact/page.tsx:44-81`） | 打开 WhatsApp / 邮箱，确认消息已到达，登记到 lead-log |
| 2 | WhatsApp 直聊 | +86 159 3135 9322（Aaron 对外号码，见 `src/config/site.ts`） | 逐条回复；未回复的做待办标记 |
| 3 | 业务邮箱 | zhengran@zydsign.cn | 检查收件箱与垃圾箱；表单 mailto 的询盘可能在此到达 |
| 4 | Alibaba 询盘 | Alibaba 商家后台 | 按平台 SLA 尽快响应，同时登记 lead-log |

**检查基线**：每条询盘在“收到时间”后 30 分钟内完成首次人工响应（内部目标）；<2h 为良好；<12h 为及格线。超时走 §5 升级路径。

## §2 值班与交接规则

1. **默认负责人**：Aaron。所有 WhatsApp 与业务邮箱询盘默认由 Aaron 承接。
2. **值班表**：每周一在团队共享表更新本周值班人；每日值班人负责 §1 的 4 项检查。
3. **休假/离线交接**：离岗前把「值班人、待回复询盘清单、承诺事项、报价底稿」写入 lead-log 交接区，并在团队群@下一值班人确认收到。
4. **手机推送提醒**：WhatsApp 保持桌面与手机端通知开启；业务邮箱绑定手机推送；Alibaba App 开启询盘推送。值班人的手机推送必须处于可用状态，不能只依赖网页端。
5. **无法响应时**：值班人 15 分钟内联系备份负责人；备份负责人同样超时则按 §5 上报。

## §3 lead-log 登记表

每条询盘登记一行。字段如下（可直接复制为表格/CSV 列头）：

| 收到时间 | 来源 | UTM | 姓名 | 公司 | 国家 | 产品 | 数量 | 规格 | 负责人 | 首复时间 | 报价承诺 | 状态 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [YYYY-MM-DD HH:MM] | [表单/WhatsApp/邮箱/Alibaba] | [utm_source 等，无则留空] | [真实姓名] | [公司名] | [国家] | [产品名] | [数量] | [尺寸/材质/灯光等] | [负责人] | [YYYY-MM-DD HH:MM] | [报价时限] | [跟进中/已报价/已成交/已流失] |

**一行完整示例（全部占位，勿直接当真实客户使用）**：

| 收到时间 | 来源 | UTM | 姓名 | 公司 | 国家 | 产品 | 数量 | 规格 | 负责人 | 首复时间 | 报价承诺 | 状态 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [2026-XX-XX 09:30] | [表单] | [utm_source=linkedin] | [Name] | [Company] | [Country] | [pylon sign] | [2 pcs] | [H 8 m, illuminated, artwork to confirm] | [Aaron] | [2026-XX-XX 09:55] | [Quotation within 2 working days] | [跟进中] |

## §4 30 分钟首复模板

### 4.1 英文版（可直接复制发送；中文解释见 4.2）

```
Hi [First Name],

Thank you for your inquiry about [product/service] for [Company / project].

To make sure the quotation we prepare is comparable and accurate, could you
help confirm the following two points?

1. [Question 1, e.g. Overall size, quantity, and viewing distance of the sign]
2. [Question 2, e.g. Preferred lighting / finish / mounting surface, if known]

You can see a related project here:
[Project or product page URL, e.g. https://zydsign.com/products/outdoor-pylon-monument-sign]

We will review your details and come back with a written quotation / next-step
proposal by [date/time commitment, e.g. within 2 working days]. If anything is
still undecided, we will list it as an open item instead of guessing.

Best regards,
Aaron
Dalian Zhiyudao Signage & Tech. Co., Ltd.
WhatsApp: +86 159 3135 9322
zhengran@zydsign.cn
https://zydsign.com
```

### 4.2 中文要点（发送前自检）

- 称呼用询盘中的**真实姓名**，不要只写 “Dear Sir/Madam”。
- 开头**确认收到**并点出对方提到的产品或项目。
- 只提**两个澄清问题**（多了会拖慢首复）：优先问“尺寸/数量/用途”和“灯光/材质/安装”。
- 附带**1 条相关产品或案例链接**，帮助对方建立信任。
- 明确**报价或下一步的时限承诺**（如 “within 2 working days”），并把不确定项标为 open item。
- 事实口径：Dalian Zhiyudao Signage & Tech. Co., Ltd.；EST. 2006；20,000㎡ 生产基地；Global DDP；MOQ 1；Lead Time 7–14 天——只在确认真实时使用，不承诺无法兑现的交期。

## §5 SLA 计时与超时升级路径

| 时间点 | 状态 | 动作 |
|---|---|---|
| 0 min | 收到询盘 | 值班人登记 lead-log 收到时间，开始计时 |
| 目标 30 min（内部） | 良好 | 发送 §4 首复，登记首复时间 |
| >2h | 提醒 | 值班人未首复 → 提醒备份负责人接手；在团队群记录一次提醒 |
| >12h | 上报 | 仍未首复 → 上报 Aaron / 主管，由其直接回复或指派；在 lead-log 状态列标记“超时已升级” |
| 报价时限 | 按承诺执行 | 承诺时限前完成书面报价；无法按时则提前告知新的时间点 |

**计时口径**：以值班人收到并确认可读的时点开始；节假日值班规则见 §2。

## §6 每周复盘清单（每周 30 分钟）

按 lead-log 汇总并记录：

- [ ] 本周询盘总量与每日分布
- [ ] 有效询盘数（有明确产品/数量/国家线索）
- [ ] 按来源拆分数量（表单/WhatsApp/邮箱/Alibaba）
- [ ] 响应时长统计：30 min / 2h / 12h 各达标几条
- [ ] 报价承诺兑现情况（几条按时、几条延期及原因）
- [ ] 丢失原因（未回复、报价慢、价格、交期、无跟进、其他）——只写可核实原因，不编造
- [ ] 下周改一件事（如：某来源响应提速、补一份常用报价底稿）

## §7 红线

1. **不编造报价与交期**：价格、运费、交期未与工厂确认前不报数；模板中使用时限承诺前先确认可兑现。
2. **不虚构案例**：对外只引用真实案例（如官网项目页中已发布的案例），不把未发生的项目写成案例。
3. **不确定信息统一口径**：“需与工厂确认”——尺寸公差、材质等级、认证、涂层体系、安装条件等未核实项，一律先写 open item 再内部确认。
4. 不虚构客户、询盘原文或历史统计；lead-log 示例均为占位符。
