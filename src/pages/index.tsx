import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type HomeCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  visualLabel: string;
  nodes: string[];
  signals: string[];
  frameTitle: string;
  frameItems: Array<[string, string]>;
  casesTitle: string;
  casesLink: string;
  cases: Array<[string, string]>;
  promiseTitle: string;
  promiseBody: string;
  promiseLink: string;
  layoutTitle: string;
  layoutDescription: string;
};

const copies: Record<'zh' | 'en', HomeCopy> = {
  zh: {
    eyebrow: 'Vibe coding encyclopedia',
    title: 'Coding2Live',
    subtitle:
      '把全网高质量资料、开源项目和真实场景整理成一套可复用的 AI 协作百科，服务工作、学习与日常生活。',
    primaryCta: '开始阅读',
    secondaryCta: '查看收录标准',
    visualLabel: 'Coding2Live 知识地图',
    nodes: ['工作', '学习', '生活', '项目'],
    signals: ['中文主文', '英文来源', '10 个首批案例', 'GitHub Pages'],
    frameTitle: '一期内容框架',
    frameItems: [
      ['行业场景', '教育、法律、医疗、运营、产品等领域的落地方法。'],
      ['日常生活', '学习、写作、家庭管理和个人知识管理的 AI 协作范式。'],
      ['工作流', '需求澄清、原型、自动化、数据处理和审查的复用模板。'],
      ['案例库', '每篇条目保留工具链、提示词、限制风险和英文来源。'],
    ],
    casesTitle: '首批 10 个核心条目',
    casesLink: '进入案例库',
    cases: [
      ['个人学习助手', '/docs/cases/personal-learning-assistant'],
      ['写作与出版', '/docs/cases/writing-and-publishing'],
      ['Excel/表格自动化', '/docs/cases/excel-spreadsheet-automation'],
      ['小企业运营', '/docs/cases/small-business-operations'],
      ['教师备课', '/docs/cases/teacher-lesson-prep'],
      ['产品原型', '/docs/cases/product-prototyping'],
      ['数据分析入门', '/docs/cases/data-analysis-starter'],
      ['法律/合同初筛', '/docs/cases/legal-contract-triage'],
      ['医疗健康信息整理', '/docs/cases/medical-health-info-organizer'],
      ['家庭与生活自动化', '/docs/cases/home-life-automation'],
    ],
    promiseTitle: '资料原则',
    promiseBody:
      'Coding2Live 不搬运全文，只保留摘要、结构化评价、实践路径和原始链接。首选官方文档、论文、知名开源项目和可复现案例。',
    promiseLink: '参与贡献',
    layoutTitle: 'Coding2Live',
    layoutDescription: '覆盖工作、学习和生活的 vibe coding 百科',
  },
  en: {
    eyebrow: 'Vibe coding encyclopedia',
    title: 'Coding2Live',
    subtitle:
      'A bilingual field guide that turns high-quality sources, open projects, and real scenarios into reusable AI collaboration playbooks for work, learning, and daily life.',
    primaryCta: 'Start reading',
    secondaryCta: 'Source policy',
    visualLabel: 'Coding2Live knowledge map',
    nodes: ['Work', 'Learning', 'Life', 'Projects'],
    signals: ['Chinese canon', 'English sources', '10 starter cases', 'GitHub Pages'],
    frameTitle: 'Phase one structure',
    frameItems: [
      ['Industries', 'Practical methods for education, legal, healthcare, operations, and product work.'],
      ['Daily Life', 'AI collaboration patterns for learning, writing, home systems, and personal knowledge.'],
      ['Workflows', 'Reusable templates for scoping, prototyping, automation, data work, and review.'],
      ['Case Library', 'Each entry keeps toolchains, prompts, limitations, risks, and source links together.'],
    ],
    casesTitle: '10 starter entries',
    casesLink: 'Open case library',
    cases: [
      ['Personal Learning Assistant', '/docs/cases/personal-learning-assistant'],
      ['Writing and Publishing', '/docs/cases/writing-and-publishing'],
      ['Excel and Spreadsheet Automation', '/docs/cases/excel-spreadsheet-automation'],
      ['Small Business Operations', '/docs/cases/small-business-operations'],
      ['Teacher Lesson Prep', '/docs/cases/teacher-lesson-prep'],
      ['Product Prototyping', '/docs/cases/product-prototyping'],
      ['Data Analysis Starter', '/docs/cases/data-analysis-starter'],
      ['Legal and Contract Triage', '/docs/cases/legal-contract-triage'],
      ['Medical Health Info Organizer', '/docs/cases/medical-health-info-organizer'],
      ['Home and Life Automation', '/docs/cases/home-life-automation'],
    ],
    promiseTitle: 'Source promise',
    promiseBody:
      'Coding2Live summarizes, evaluates, and links. It does not republish full articles. Priority goes to official docs, papers, reputable open-source projects, and reproducible examples.',
    promiseLink: 'Contribute',
    layoutTitle: 'Coding2Live',
    layoutDescription: 'A vibe coding encyclopedia for work, learning, and daily life',
  },
};

function useCopy(): HomeCopy {
  const {i18n} = useDocusaurusContext();
  return i18n.currentLocale.startsWith('en') ? copies.en : copies.zh;
}

function HomepageHeader({copy}: {copy: HomeCopy}): ReactNode {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <Heading as="h1" className={styles.heroTitle}>
            {copy.title}
          </Heading>
          <p className={styles.heroSubtitle}>{copy.subtitle}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              {copy.primaryCta}
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/resources/source-policy">
              {copy.secondaryCta}
            </Link>
          </div>
        </div>
        <div className={styles.visual} aria-label={copy.visualLabel}>
          <div className={styles.visualGrid}>
            {copy.nodes.map((node, index) => (
              <span className={styles.visualNode} key={node} data-index={index}>
                {node}
              </span>
            ))}
            <div className={styles.visualCore}>C2L</div>
          </div>
          <div className={styles.signalList}>
            {copy.signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function Framework({copy}: {copy: HomeCopy}): ReactNode {
  return (
    <section className={styles.frameworkSection}>
      <div className="container">
        <Heading as="h2">{copy.frameTitle}</Heading>
        <div className={styles.frameworkList}>
          {copy.frameItems.map(([title, body]) => (
            <article className={styles.frameworkItem} key={title}>
              <Heading as="h3">{title}</Heading>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarterList({copy}: {copy: HomeCopy}): ReactNode {
  return (
    <section className={styles.starterSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">{copy.casesTitle}</Heading>
          <Link to="/docs/cases/personal-learning-assistant">{copy.casesLink}</Link>
        </div>
        <div className={styles.linkColumns}>
          {copy.cases.map(([label, to], index) => (
            <Link to={to} key={to}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SourcePromise({copy}: {copy: HomeCopy}): ReactNode {
  return (
    <section className={styles.promiseSection}>
      <div className="container">
        <div className={styles.promiseInner}>
          <Heading as="h2">{copy.promiseTitle}</Heading>
          <p>{copy.promiseBody}</p>
          <Link to="/docs/contributing">{copy.promiseLink}</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const copy = useCopy();
  return (
    <Layout title={copy.layoutTitle} description={copy.layoutDescription}>
      <HomepageHeader copy={copy} />
      <main>
        <Framework copy={copy} />
        <StarterList copy={copy} />
        <SourcePromise copy={copy} />
      </main>
    </Layout>
  );
}
