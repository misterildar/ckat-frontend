import { FC } from 'react';

import styles from './style.module.scss';

export const ContactDesctop: FC = () => {
  return (
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
};
