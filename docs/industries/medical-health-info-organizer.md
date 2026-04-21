---
title: 医疗健康信息整理
description: 用 AI 整理症状记录、就诊问题和健康资料，避免把模型输出当诊断。
category: industries
tags: [health, medical, personal-records]
audience: 患者、家属、健康管理者
difficulty: beginner
source_urls:
  - https://medlineplus.gov/
  - https://www.cdc.gov/
  - https://www.who.int/
updated_at: 2026-04-21
---

# 医疗健康信息整理

## 适用人群

适合需要整理症状时间线、用药记录、检查报告问题清单和就诊沟通材料的个人或家属。

## 可解决的问题

- 把零散症状、检查日期、用药和生活事件整理成时间线。
- 生成就诊前问题清单，减少忘问关键问题。
- 把权威资料摘要成适合自己理解的阅读笔记。

## Vibe Coding 工作流

1. 记录事实：时间、症状、体温、药物、剂量、检查结果。
2. 让 AI 输出时间线和需要向医生确认的问题。
3. 对疾病知识只引用 MedlinePlus、CDC、WHO 等权威来源。
4. 把 AI 输出当沟通材料，不当诊断结论。
5. 就诊后更新记录，保留医生建议原文。

## 推荐工具

- 表格或笔记应用，用于记录症状和检查。
- OCR 工具，用于把报告转成可检索文本。
- 权威健康信息网站，用于核对常识性说明。

## 示例提示词

```text
请帮我把以下健康记录整理成就诊沟通材料：
1. 只整理事实和问题，不做诊断。
2. 输出症状时间线、已用药物、检查结果摘要。
3. 生成给医生的 8 个问题。
4. 标记哪些信息缺失会影响医生判断。
5. 如果提到健康知识，请建议我去 MedlinePlus、CDC 或 WHO 核对。
```

## 真实/参考项目

可以为家庭成员建立共享健康日志，用固定字段记录日期、症状、药物、照片、报告和医生反馈。

## 限制与风险

健康建议属于高风险场景。AI 可能错误解释症状和报告，紧急症状应立即联系当地急救或医疗机构。

## 来源

- MedlinePlus: https://medlineplus.gov/
- CDC: https://www.cdc.gov/
- WHO: https://www.who.int/
