import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: '行业场景',
      items: [
        'industries/teacher-lesson-prep',
        'industries/legal-contract-triage',
        'industries/medical-health-info-organizer',
        'industries/small-business-operations',
        'industries/product-prototyping',
      ],
    },
    {
      type: 'category',
      label: '日常生活',
      items: [
        'life/personal-learning-assistant',
        'life/writing-and-publishing',
        'life/home-life-automation',
      ],
    },
    {
      type: 'category',
      label: '工作流',
      items: [
        'workflows/excel-spreadsheet-automation',
        'workflows/data-analysis-starter',
      ],
    },
    {
      type: 'category',
      label: '案例库',
      items: [
        'cases/personal-learning-assistant',
        'cases/writing-and-publishing',
        'cases/excel-spreadsheet-automation',
        'cases/small-business-operations',
        'cases/teacher-lesson-prep',
        'cases/product-prototyping',
        'cases/data-analysis-starter',
        'cases/legal-contract-triage',
        'cases/medical-health-info-organizer',
        'cases/home-life-automation',
      ],
    },
    {
      type: 'category',
      label: '资料来源',
      items: ['resources/source-policy', 'resources/project-index'],
    },
    'contributing',
  ],
};

export default sidebars;
