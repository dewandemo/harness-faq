import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Harness FAQ',
  tagline:
    'Solutions, integrations, and general knowledge provided by experts in the Harness Community.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Harness', // Usually your GitHub org/user name.
  projectName: 'FAQ', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  future: {
    experimental_faster: true,
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dewandemo/harness-faq',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://developer.harness.io/img/hdh-social-card.png',
    navbar: {
      title: 'FAQ',
      logo: {
        alt: 'Harness FAQs',
        src: 'img/logo.svg',
      },
      items: [
        {
          position: 'right',
          html: '<button class="button  button--nav">Suggest an idea</button>',
          href: 'https://ideas.harness.io/',
        },
        {
          position: 'right',
          html: '<button class="button button--cta">Contact support</button>',
          href: 'https://support.harness.io',
        },
        {
          href: 'https://github.com/dewandemo/harenss-faq',
          label: 'Visit Source',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Harness Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: ['docusaurus-plugin-sass'],
};

export default config;
