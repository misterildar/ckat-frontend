import { FC } from 'react';

import styles from './style.module.scss';

export const ContactTabletMobile: FC = () => {
  return (
    <>
      <div className={styles.title}>
        <h3 className={styles.margin}>магазин электротоваров СКАТ </h3>
      </div>
      <div className={styles.title}>
        <h4 className={styles.margin}>ТЕЛЕФОН:</h4>
        <h3 className={styles.margin}> 40-66-33</h3>
      </div>
    </>
  );
};
