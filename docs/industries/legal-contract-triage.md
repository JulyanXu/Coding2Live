---
title: 法律/合同初筛
description: 用 AI 辅助整理合同重点、风险清单和审阅问题，但不替代律师判断。
category: industries
tags: [legal, contract, risk-review]
audience: 创业者、运营负责人、法务协作人员
difficulty: intermediate
source_urls:
  - https://www.americanbar.org/groups/business_law/resources/business-law-today/
  - https://www.law.cornell.edu/
  - https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
updated_at: 2026-04-21
---

# 法律/合同初筛

## 适用人群

适合需要在律师正式审阅前先整理合同摘要、关键义务、异常条款和沟通问题的团队。

## 可解决的问题

- 快速抽取合同双方、付款、期限、违约、保密和数据处理条款。
- 生成待确认问题清单，减少和律师沟通时的信息遗漏。
- 对照内部模板标记缺失条款。

## Vibe Coding 工作流

1. 去除合同中的敏感个人信息和不必要商业机密。
2. 让 AI 只做结构化摘要和问题提取，不给最终法律结论。
3. 把输出转成表格：条款、位置、风险类型、需要谁确认。
4. 对高风险条款要求 AI 引用原文位置，人工逐条核对。
5. 交给合格律师或法务做最终判断。

## 推荐工具

- 通用大模型，用于摘要、条款分类和问题生成。
- 文档差异工具，用于对比合同版本。
- Cornell Legal Information Institute，用于查找公开法律资料背景。

## 示例提示词

```text
请仅做合同初筛，不提供法律意见。基于下面合同文本输出：
1. 合同摘要，不超过 200 字。
2. 付款、期限、终止、违约、保密、知识产权、数据处理条款表。
3. 每条风险必须引用对应原文位置。
4. 生成 10 个应咨询律师或业务负责人的问题。
5. 标记你不确定或需要人工复核的地方。
```

## 真实/参考项目

可建立一个内部“合同初筛表”模板，将 AI 的结构化输出粘贴到表格中，再由业务、财务和法务分别补充意见。

## 限制与风险

AI 不能替代律师，也可能误解司法辖区、行业监管和合同上下文。不要上传高度敏感或受保密协议限制的合同到不合规服务。

## 来源

- American Bar Association Business Law Today: https://www.americanbar.org/groups/business_law/resources/business-law-today/
- Cornell Legal Information Institute: https://www.law.cornell.edu/
- Anthropic Prompt Engineering: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
