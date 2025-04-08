import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';
import { FAQS } from './data';

export default function HomepageFAQs() {
  return (
    <div className={styles.homepageFaqs}>
      <ul>
        {FAQS.map((item) => (
          <li key={item.module} className={styles.listItems}>
            <h4 className={styles.h4}>
              <img src={item.iconUrl} alt={`${item.module} icon`} />
              <p>{item.module}</p>
            </h4>

            <ul>
              {item.files.map((file) => {
                return (
                  <li key={file.title} className={styles.listItem}>
                    <Link to={file.file}>{file.title}</Link>
                  </li>
                );
              })}
            </ul>
            <Link to={item.path} className={styles.seeAll}>
              See All{' '}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
