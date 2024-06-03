import { FC } from 'react';

import useDevice from '../hooks/useDevice';

import styles from './style.module.scss';

export const Contacts: FC = () => {
  const device = useDevice();

  const isMobile = device === 'mobile';

  const contactsStyle = isMobile
    ? styles.contacts__container_mobile
    : styles.contacts__container;

  return (
    <div className={styles.wrapper}>
      <div className={contactsStyle}>
        <div className={styles.contacts__map}>
          <iframe
            src='https://yandex.ru/map-widget/v1/?ll=52.326549%2C54.896107&panorama%5Bdirection%5D=187.750473%2C-17.998250&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=52.311426%2C54.893799&panorama%5Bspan%5D=119.613104%2C60.000000&z=14'
            width='100%'
            height='100%'
            title='CKAT-Map-panorama'
            style={{ position: 'relative' }}
          ></iframe>
        </div>
        <div className={styles.contacts__map}>
          <iframe
            width='100%'
            height='100%'
            title='CKAT-Map'
            src='https://yandex.ru/map-widget/v1/?um=constructor%3Aba484491a454c343f56175279e55281cd63dc27d48cc9e24e448d5415efaf572&amp;source=constructor'
          ></iframe>
        </div>
      </div>
    </div>
  );
};
