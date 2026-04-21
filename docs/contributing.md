---
title: 贡献指南
description: Coding2Live 的贡献流程、条目格式和资料引用规则。
category: meta
tags: [contribution, editorial, sources]
audience: 内容贡献者和维护者
difficulty: beginner
source_urls:
  - https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project
  - https://creativecommons.org/share-your-work/cclicenses/
updated_at: 2026-04-21
---

# 贡献指南

Coding2Live 欢迎贡献新条目、资料索引、案例修订和工具链验证结果。每次贡献都应让读者更容易复现，而不是只增加链接数量。

## 条目要求

- 使用中文主文，保留英文术语和英文来源链接。
- 每篇至少包含 2 个高质量来源，优先官方文档、论文、知名开源项目和可复现教程。
- 不搬运原文，不复制长篇截图或闭源课程内容。
- 明确限制与风险，尤其是法律、医疗、财务、安全等高影响领域。
- 示例提示词必须可直接改写使用，不能只写抽象建议。

## Frontmatter

```yaml
title: 条目标题
description: 一句话说明
category: cases
tags: [vibe-coding, workflow]
audience: 适用人群
difficulty: beginner
source_urls:
  - https://example.com
  - https://example.org
updated_at: 2026-04-21
```

## 审稿重点

审稿优先看三件事：资料是否可信、流程是否可复现、风险是否说清。工具推荐可以随时间更新，但不要把单一厂商能力写成通用规律。
