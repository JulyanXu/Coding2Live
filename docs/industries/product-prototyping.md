---
title: 产品原型
description: 用 vibe coding 从想法、用户故事、界面草图快速推进到可点击原型。
category: industries
tags: [product, prototype, design]
audience: 产品经理、设计师、创业者、独立开发者
difficulty: intermediate
source_urls:
  - https://www.figma.com/best-practices/
  - https://docs.github.com/en/copilot
  - https://playwright.dev/docs/intro
updated_at: 2026-04-21
---

# 产品原型

## 适用人群

适合需要快速把需求想法变成可评审、可测试、可迭代原型的产品、设计和创业团队。

## 可解决的问题

- 把模糊想法拆成用户故事、信息架构和关键流程。
- 生成低保真界面、可点击页面和交互说明。
- 用自动化测试检查原型基本路径是否可用。

## Vibe Coding 工作流

1. 写清目标用户、核心任务、成功指标和反例。
2. 让 AI 输出用户故事、页面清单和关键状态。
3. 用 Figma 或前端脚手架生成第一版原型。
4. 用 Playwright 检查导航、表单和响应式布局。
5. 基于用户反馈更新需求，而不是直接堆功能。

## 推荐工具

- Figma，用于设计稿和交互原型。
- GitHub Copilot 或 Codex，用于生成前端原型和测试。
- Playwright，用于自动验证关键用户路径。

## 示例提示词

```text
请把下面产品想法转成可实现的 MVP 原型规格：
1. 用户：自由职业者。
2. 问题：客户沟通、报价、里程碑和收款分散。
3. 输出：用户故事、页面结构、关键状态、空状态、错误状态。
4. 给出一版适合 3 天内实现的范围，不要加入支付以外的复杂集成。
5. 附上 Playwright 验收场景。
```

## 真实/参考项目

可以用 Docusaurus、Next.js 或 Vite 先做静态交互原型，再根据反馈决定是否接入真实后端。

## 限制与风险

AI 容易把原型扩张成完整产品。每次迭代都应明确“这次验证什么假设”，避免功能过载。

## 来源

- Figma Best Practices: https://www.figma.com/best-practices/
- GitHub Copilot Documentation: https://docs.github.com/en/copilot
- Playwright Documentation: https://playwright.dev/docs/intro
