---
title: Data Analysis Starter
description: Use AI to frame questions, clean data, generate charts, and explain results.
category: workflows
tags: [data-analysis, python, charts]
audience: Analysis beginners, operators, product teams, and researchers
difficulty: beginner
source_urls:
  - https://pandas.pydata.org/docs/
  - https://jupyter.org/documentation
  - https://streamlit.io/docs
updated_at: 2026-04-21
---

# Data Analysis Starter

## Audience

People who already have spreadsheet data but need help framing questions, cleaning data, and explaining findings.

## Problems Solved

- Convert business questions into computable metrics.
- Identify missing values, outliers, and field-type issues.
- Generate charts, explain trends, and form a report.

## Vibe Coding Workflow

1. Define the business question and decision context.
2. Ask AI to propose metrics and hypotheses from the fields.
3. Clean data with pandas or spreadsheet tools.
4. Use Jupyter to record code, charts, and interpretation.
5. Use Streamlit for a lightweight dashboard when data updates regularly.

## Recommended Tools

- Jupyter Notebook for exploratory analysis.
- pandas for cleaning and computation.
- Streamlit for sharing interactive results.

## Example Prompt

```text
I have a user behavior CSV. Design a beginner analysis workflow:
1. Fields: user_id, signup_date, country, plan, last_active_at, revenue.
2. Goal: understand which users may churn.
3. Output data-quality checks, key metrics, pandas steps, and 3 chart ideas.
4. Explain why each step matters and how to avoid misinterpretation.
```

## Reference Project

Start with a CSV, explore it in Jupyter, then build a small Streamlit dashboard with only core metrics.

## Limitations and Risks

Correlation is not causation. AI-generated explanations must be checked against data definitions and business context.

## Sources

- pandas Documentation: https://pandas.pydata.org/docs/
- Jupyter Documentation: https://jupyter.org/documentation
- Streamlit Documentation: https://streamlit.io/docs
