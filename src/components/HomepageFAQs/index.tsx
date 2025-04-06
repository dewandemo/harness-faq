import Link from '@docusaurus/Link';
import styles from './styles.module.scss';
const FAQS = [
  {
    module: 'Continuous Delivery',
    link: '/docs/continuous-delivery',
    iconUrl: 'https://developer.harness.io/img/icon_ci_s.svg',
  },
  {
    module: 'Continuous Integration',
    link: '/docs/continuous-integration',
    iconUrl: 'https://developer.harness.io/img/icon_cd_s.svg',
  },
  {
    module: 'Harness Platform',
    link: '/docs/platform',
    iconUrl: 'https://developer.harness.io/img/icon_harness_s.svg',
  },
  {
    module: 'Infrastructure as Code Management',
    iconUrl: 'https://developer.harness.io/img/icon_iacm_s.svg',
    link: '/docs/continuous-delivery',
  },
  {
    module: 'Continuous Error Tracking',
    link: '/docs/continuous-integration',
    iconUrl: 'https://developer.harness.io/img/icon_cet_s.svg',
  },
  {
    module: 'Security Testing Orchestration',
    link: '/docs/platform',
    iconUrl: 'https://developer.harness.io/img/icon_sto_s.svg',
  },
  {
    module: 'Internal Developer Portal',
    link: '/docs/continuous-delivery',
    iconUrl: 'https://developer.harness.io/img/icon_idp_s.svg',
  },
  {
    module: 'Code Repository',
    link: '/docs/continuous-integration',
    iconUrl: 'https://developer.harness.io/img/icon_code_s.svg',
  },
  {
    module: 'Database DevOps',
    link: '/docs/platform',
    iconUrl: 'https://developer.harness.io/img/icon_dbdevops_s.svg',
  },
];
export default function HomepageFAQs() {
  return (
    <div className={styles.homepageFaqs}>
      <h4 className={styles.h4}>Modules FAQS</h4>
      <ul>
        {FAQS.map((item) => (
          <li>
            <div className={styles.listItem}>
              <img src={item.iconUrl}></img> <Link to={item.link}>{item.module}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
