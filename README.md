# Coding2Live

Coding2Live 是一本面向工作、学习与生活的 vibe coding 百科。项目以中文主文组织内容，保留英文官方资料、开源项目和论文链接，帮助读者把 AI 协作、编程自动化和工具链实践转化为可复用方法。

## 一期内容

- Docusaurus 文档站，适配 GitHub Pages。
- 10 个核心案例：个人学习助手、写作与出版、Excel/表格自动化、小企业运营、教师备课、产品原型、数据分析入门、法律/合同初筛、医疗健康信息整理、家庭与生活自动化。
- 行业场景、日常生活、通用工作流、案例库、资料来源和贡献指南。
- 每篇条目包含适用人群、可解决的问题、vibe coding 工作流、推荐工具、示例提示词、参考项目、限制与风险、来源。

## 本地开发

```bash
npm install
npm run start
```

生产构建：

```bash
npm run build
npm run serve
```

## 内容原则

Coding2Live 不搬运全文，不复制受版权保护的大段内容。条目只做摘要、结构化评价、实践路径和来源链接；优先收录官方文档、论文、知名开源项目和可复现案例。

## 发布

推送到 `main` 分支后，GitHub Actions 会构建 Docusaurus 并发布到 GitHub Pages。
