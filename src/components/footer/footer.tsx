import { FC } from 'react';

import useDevice from '../../hooks/useDevice';

import styles from './style.module.scss';

export const Footer: FC = () => {
  const device = useDevice();

  const isDesktop = device === 'desktop';

  const contactsDesktop = (
    <>
      <div className={styles.title}>
        <h3>ЖДЕМ ВАС: </h3>
        <h3>ул. Шевченко 7 магазин электротоваров СКАТ </h3>
      </div>
      <div className={styles.title}>
        <h3>ОТВЕТИМ ПО ТЕЛЕФОНУ:</h3>
        <h3> 8-952-036-93-85 </h3>
        <h3> 40-66-33</h3>
      </div>
    </>
  );

  const contacts = (
    <>
      <div className={styles.title}>
        <h3>магазин электротоваров СКАТ </h3>
      </div>
      <div className={styles.title}>
        <h4>ТЕЛЕФОН:</h4>
        <h3> 40-66-33</h3>
      </div>
    </>
  );

  const footerText = isDesktop ? contactsDesktop : contacts;

  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.container}>{footerText}</div>
      </div>
    </div>
  );
};
