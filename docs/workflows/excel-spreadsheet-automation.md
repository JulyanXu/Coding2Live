---
title: Excel/表格自动化
description: 用 AI 把重复表格处理转成公式、脚本、透视表和报表流程。
category: workflows
tags: [excel, spreadsheet, automation]
audience: 财务、运营、行政、分析入门者
difficulty: beginner
source_urls:
  - https://support.microsoft.com/en-us/excel
  - https://support.google.com/docs/topic/9054603
  - https://pandas.pydata.org/docs/
updated_at: 2026-04-21
---

# Excel/表格自动化

## 适用人群

适合每天处理销售、库存、预算、名单、排班和报表的人。

## 可解决的问题

- 生成公式、清洗规则和透视表方案。
- 把多张表合并、去重、校验并输出报表。
- 将稳定流程迁移为 Python 或 Apps Script。

## Vibe Coding 工作流

1. 描述原始表结构、目标输出和异常数据样例。
2. 让 AI 先给公式方案，再给脚本方案。
3. 用小样本验证结果，再应用到完整数据。
4. 保存输入字段、处理步骤和验收规则。
5. 对月度重复任务建立脚本或模板。

## 推荐工具

- Microsoft Excel 或 Google Sheets，用于日常表格处理。
- pandas，用于更复杂的数据清洗和批处理。
- Apps Script，用于 Google Sheets 自动化。

## 示例提示词

```text
请帮我自动化这份销售表：
1. 原始列：订单号、日期、客户、商品、数量、单价、渠道。
2. 目标：按月份和渠道汇总销售额，标记重复订单号，找出缺失单价。
3. 先给 Excel 公式/透视表方案，再给 Python pandas 方案。
4. 输出每一步的校验方法。
5. 不要假设我能修改原始表字段。
```

## 真实/参考项目

可以把每月销售报表变成固定模板：导入原始数据、运行清洗脚本、生成汇总表和异常清单。

## 限制与风险

AI 可能误解列名或生成不适合本地语言设置的公式。关键财务数据必须抽样核对和保留原始文件。

## 来源

- Microsoft Excel Help: https://support.microsoft.com/en-us/excel
- Google Sheets Help: https://support.google.com/docs/topic/9054603
- pandas Documentation: https://pandas.pydata.org/docs/
