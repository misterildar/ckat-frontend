import { FC } from 'react';

import Iframe2Gis from '../components/reviews/2gis';
import YandexMapsWidget from '../components/reviews/yandex';

import styles from './style.module.scss';

export const About: FC = () => {
  return (
    <div>
      <div className={styles.about}>
        <h3 className={styles.about__title}>
          Лучше всего о нас расскажут отзывы клиентов
        </h3>
        <h1 className={styles.about__title}>Отзывы о нас</h1>
        <div className={styles.about__container}>
          <Iframe2Gis size='big' theme='light' branchId='70000001006934973' />
          <YandexMapsWidget
            orgId='1142209207'
            orgName='Скат'
            city='Альметьевск'
          />
        </div>
      </div>
    </div>
  );
};
