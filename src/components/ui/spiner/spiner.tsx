import { FC } from 'react';

import styles from './style.module.scss';

const Spinner: FC = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner__circle}></div>
    </div>
  );
};

export default Spinner;
