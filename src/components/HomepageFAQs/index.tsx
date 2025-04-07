import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

const FAQS = [
  {
    module: 'Continuous Integration',
    path: '/docs/continuous-integration',
    iconUrl: 'https://developer.harness.io/img/icon_ci_s.svg',
    files: [
      { title: 'Build Infrastructure 1', file: 'build-infrastructure-001' },
      { title: 'Build Infrastructure 2', file: 'build-infrastructure-002' },
    ],
  },
  {
    module: 'Continuous Delivery',
    path: '/docs/continuous-delivery',
    iconUrl: 'https://developer.harness.io/img/icon_cd_s.svg',
    files: [
      { title: 'General FAQ', file: 'general-001' },
    ],
  },
  {
    module: 'Harness Platform',
    path: '/docs/platform',
    iconUrl: 'https://developer.harness.io/img/icon_harness_s.svg',
    files: [
      { title: 'Subscriptions', file: 'platform-001' },
      { title: 'Access Control', file: 'platform-002' },
    ],
  },
];

export default function HomepageFAQs() {
  return (
    <div className={styles.homepageFaqs}>
      <h4 className={styles.h4}>Modules FAQS</h4>
      <ul>
        {FAQS.map((item) => (
          <li key={item.module}>
            <div className={styles.listItem}>
              <img src={item.iconUrl} alt={`${item.module} icon`} />
              <Link to={item.path}>{item.module}</Link>
              <ul>
                {item.files.map((file) => {
                  const fileName = file.file.replace('.md', ''); // Removing the ".md" extension
                  return (
                    <li key={fileName}>
                      <Link to={`${item.path}/${fileName}`}>{file.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
