import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {
  platform: [
    {
      type: 'category',
      label: 'Platform',
      className: 'sidebar-platform',
      link: {
        type: 'doc',
        id: 'platform',
      },

      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'platform',
        },
      ],
    },
  ],
  continuousdelivery: [
    {
      type: 'category',
      label: 'Continuous Delivery',
      className: 'sidebar-cd',
      link: {
        type: 'doc',
        id: 'continuous-delivery',
      },

      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'continuous-delivery',
        },
      ],
    },
  ],
  continuousintegration: [
    {
      type: 'category',
      label: 'Continuous Integration',
      className: 'sidebar-ci',
      link: {
        type: 'doc',
        id: 'continuous-integration',
      },

      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'continuous-integration',
        },
      ],
    },
  ],
};

export default sidebars;
