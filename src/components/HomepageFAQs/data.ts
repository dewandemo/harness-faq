interface files {
  title: string;
  file: string;
}

interface HomepageFaq {
  module: string;
  path: string;
  iconUrl: string;
  files: files[];
}

export const FAQS: HomepageFaq[] = [
  {
    module: 'Continuous Integration',
    path: '/docs/continuous-integration',
    iconUrl: 'https://developer.harness.io/img/icon_ci_s.svg',
    files: [
      {
        title: 'What is build infrastructure and why do I need it for Harness CI?',
        file: '/docs/continuous-integration/build-infrastructure-001',
      },
      {
        title:
          'What kind of build infrastructure can I use? Which operating systems are supported?',
        file: '/docs/continuous-integration/build-infrastructure-002',
      },
      {
        title: 'Can I use multiple build infrastructures in one pipeline?',
        file: '/docs/continuous-integration/build-infrastructure-003',
      },
      {
        title: 'I have a MacOS build, do I have to use homebrew as the installer?',
        file: '/docs/continuous-integration/build-infrastructure-004',
      },
      {
        title:
          'What kind of build infrastructure can I use? Which operating systems are supported?',
        file: '/docs/continuous-integration/build-infrastructure-005',
      },
    ],
  },
  {
    module: 'Continuous Delivery',
    path: '/docs/continuous-delivery',
    iconUrl: 'https://developer.harness.io/img/icon_cd_s.svg',
    files: [
      {
        title:
          'Where can one find instanceKey and infrastructureMappingId values in Trigger Rollback API?',
        file: '/docs/continuous-delivery/general-faqs/general-001',
      },
      {
        title:
          'Does Harness support migration of entities such as overrides into GitX or store them remotely?',
        file: '/docs/continuous-delivery/general-faqs/general-002',
      },
      {
        title:
          'My definition of a service differs from the above standard definition. How will pricing work in my case?',
        file: '/docs/continuous-delivery/general-faqs/general-003',
      },
      {
        title: 'What is Harness GitOps?',
        file: '/docs/continuous-delivery/gitops-faqs/001-gitops-faqs',
      },
      {
        title: 'Can I use Harness GitOps images from a local registry?',
        file: '/docs/continuous-delivery/gitops-faqs/002-gitops-faqs',
      },
    ],
  },
  {
    module: 'Harness Platform',
    path: '/docs/platform',
    iconUrl: 'https://developer.harness.io/img/icon_harness_s.svg',
    files: [
      { title: 'Harness Subscriptions', file: '/docs/platform/platform-001' },
      { title: 'Access Control and RBAC FAQs', file: '/docs/platform/platform-002' },
      {
        title: 'General Pipeline FAQs',
        file: '/docs/platform/pipeline-faqs/platform-pipeline-001',
      },
      {
        title:
          'What Harness method does recommend to update all pipelines when underlying configs were updated in the Git repository?',
        file: '/docs/platform/pipeline-faqs/platform-pipeline-002',
      },
      {
        title:
          'How does bidirectional sync for Git Experience handle a default pipeline repo with branch protection?',
        file: '/docs/platform/pipeline-faqs/platform-pipeline-003',
      },
    ],
  },
];
