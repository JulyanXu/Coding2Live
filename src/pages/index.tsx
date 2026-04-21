import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const focusAreas = [
  ['行业场景', '教育、法律、医疗、运营、产品等工作中的可落地方法。'],
  ['日常生活', '学习、写作、家庭管理和个人知识管理的 AI 协作范式。'],
  ['工作流', '从需求澄清到原型、数据处理、审查和发布的流程模板。'],
  ['案例库', '每篇条目都保留工具链、提示词、风险和英文来源链接。'],
];

function HomepageHeader(): ReactNode {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Vibe coding encyclopedia</p>
          <Heading as="h1" className={styles.heroTitle}>
            Coding2Live
          </Heading>
          <p className={styles.heroSubtitle}>
            收集、整理并验证全网高质量资料，把 vibe coding 转化为覆盖工作、学习和生活的可复用百科。
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              开始阅读
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/resources/source-policy">
              查看收录标准
            </Link>
          </div>
        </div>
        <div className={styles.visual} aria-label="Coding2Live knowledge map">
          <div className={styles.visualCore}>C2L</div>
          <span className={styles.nodeWork}>工作</span>
          <span className={styles.nodeLearn}>学习</span>
          <span className={styles.nodeLife}>生活</span>
          <span className={styles.nodeBuild}>项目</span>
        </div>
      </div>
    </header>
  );
}

function FocusGrid(): ReactNode {
  return (
    <section className={styles.focusSection}>
      <div className="container">
        <Heading as="h2">一期内容框架</Heading>
        <div className={styles.focusGrid}>
          {focusAreas.map(([title, body]) => (
            <article className={styles.focusItem} key={title}>
              <Heading as="h3">{title}</Heading>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarterList(): ReactNode {
  return (
    <section className={styles.starterSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">首批 10 个核心条目</Heading>
          <Link to="/docs/cases/personal-learning-assistant">进入案例库</Link>
        </div>
        <div className={styles.linkColumns}>
          <Link to="/docs/cases/personal-learning-assistant">个人学习助手</Link>
          <Link to="/docs/cases/writing-and-publishing">写作与出版</Link>
          <Link to="/docs/cases/excel-spreadsheet-automation">Excel/表格自动化</Link>
          <Link to="/docs/cases/small-business-operations">小企业运营</Link>
          <Link to="/docs/cases/teacher-lesson-prep">教师备课</Link>
          <Link to="/docs/cases/product-prototyping">产品原型</Link>
          <Link to="/docs/cases/data-analysis-starter">数据分析入门</Link>
          <Link to="/docs/cases/legal-contract-triage">法律/合同初筛</Link>
          <Link to="/docs/cases/medical-health-info-organizer">医疗健康信息整理</Link>
          <Link to="/docs/cases/home-life-automation">家庭与生活自动化</Link>
        </div>
      </div>
    </section>
  );
}

function SourcePromise(): ReactNode {
  return (
    <section className={styles.promiseSection}>
      <div className="container">
        <Heading as="h2">资料原则</Heading>
        <p>
          Coding2Live 不搬运全文，只保留摘要、结构化评价、实践路径和原始链接。首选官方文档、论文、知名开源项目和可复现案例。
        </p>
        <Link to="/docs/contributing">参与贡献</Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Coding2Live"
      description="覆盖工作、学习和生活的 vibe coding 百科">
      <HomepageHeader />
      <main>
        <FocusGrid />
        <StarterList />
        <SourcePromise />
      </main>
    </Layout>
  );
}
