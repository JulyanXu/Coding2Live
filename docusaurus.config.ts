import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Coding2Live',
  tagline: '用 vibe coding 重新组织工作、学习与生活',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://julyanxu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Coding2Live/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JulyanXu',
  projectName: 'Coding2Live',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en-US'],
    localeConfigs: {
      'zh-Hans': {
        label: '中文',
        htmlLang: 'zh-Hans',
      },
      'en-US': {
        label: 'English',
        htmlLang: 'en-US',
        baseUrl: '/Coding2Live/en/',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/JulyanXu/Coding2Live/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Coding2Live',
      logo: {
        alt: 'Coding2Live Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '百科',
        },
        {to: '/docs/cases/personal-learning-assistant', label: '案例库', position: 'left'},
        {to: '/docs/resources/project-index', label: '项目索引', position: 'left'},
        {to: '/docs/resources/source-policy', label: '资料来源', position: 'left'},
        {to: '/docs/contributing', label: '贡献指南', position: 'left'},
        {
          href: 'https://github.com/JulyanXu/Coding2Live',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '百科',
          items: [
            {
              label: '入口',
              to: '/docs/intro',
            },
            {
              label: '案例库',
              to: '/docs/cases/personal-learning-assistant',
            },
          ],
        },
        {
          title: '资料',
          items: [
            {
              label: '收录标准',
              to: '/docs/resources/source-policy',
            },
            {
              label: '项目索引',
              to: '/docs/resources/project-index',
            },
          ],
        },
        {
          title: '协作',
          items: [
            {
              label: '贡献指南',
              to: '/docs/contributing',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/JulyanXu/Coding2Live',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Coding2Live contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
