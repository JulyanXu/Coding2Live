---
title: 数据分析入门
description: 用 AI 协助提出问题、清洗数据、生成图表和解释结果。
category: workflows
tags: [data-analysis, python, charts]
audience: 数据分析初学者、运营、产品、研究人员
difficulty: beginner
source_urls:
  - https://pandas.pydata.org/docs/
  - https://jupyter.org/documentation
  - https://streamlit.io/docs
updated_at: 2026-04-21
---

# 数据分析入门

## 适用人群

适合已经有表格数据，但不知道如何提出分析问题、清洗数据和表达结论的人。

## 可解决的问题

- 把业务问题转成可计算指标。
- 识别缺失值、异常值和字段类型问题。
- 生成图表、解释趋势并形成报告。

## Vibe Coding 工作流

1. 明确业务问题和决策场景。
2. 让 AI 根据字段提出指标和分析假设。
3. 用 pandas 或表格工具清洗数据。
4. 用 Jupyter 记录代码、图表和解释。
5. 对经常更新的数据，用 Streamlit 做轻量仪表盘。

## 推荐工具

- Jupyter Notebook，用于探索式分析。
- pandas，用于数据清洗和计算。
- Streamlit，用于快速分享交互式结果。

## 示例提示词

```text
我有一份用户行为 CSV。请帮我设计入门分析流程：
1. 字段：user_id、signup_date、country、plan、last_active_at、revenue。
2. 目标：判断哪些用户更可能流失。
3. 输出：需要检查的数据质量问题、关键指标、pandas 分析步骤、3 张图表建议。
4. 每一步都说明为什么做，以及如何避免误读。
```

## 真实/参考项目

可以从一份 CSV 开始，用 Jupyter 完成探索，再用 Streamlit 做一个只包含核心指标的小仪表盘。

## 限制与风险

相关性不等于因果。AI 生成的解释必须回到数据定义和业务上下文核对。

## 来源

- pandas Documentation: https://pandas.pydata.org/docs/
- Jupyter Documentation: https://jupyter.org/documentation
- Streamlit Documentation: https://streamlit.io/docs
