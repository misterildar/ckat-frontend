import { FC } from 'react';

import Iframe2Gis from '../components/reviews/2gis';
import { aboutDescription } from '../utils/constants';
import YandexMapsWidget from '../components/reviews/yandex';

import styles from './style.module.scss';

export const About: FC = () => {
  return (
    <div>
      <div className={styles.about}>
        <h3 className={styles.about__title}>{aboutDescription}</h3>
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
