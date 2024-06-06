import { FC } from 'react';

import Iframe2Gis from '../components/reviews/2gis';
import YandexMapsWidget from '../components/reviews/yandex';

import styles from './style.module.scss';

export const About: FC = () => {
  return (
    <div>
      <div className={styles.about}>
        <h3 className={styles.about__title}>
          {' '}
          Работаем с&nbsp;2012&nbsp;года. Проконсультируем вас если возникнут
          вопросы. Подберем именно те&nbsp;товары, которые обеспечат максимально
          удобный монтаж, надежную защиту вас, ваших близких и&nbsp;вашего дома.
          Здесь вы&nbsp;можете подобрать розетки и&nbsp;выключатели различных
          цветов и&nbsp;дизайна. Если нужных цветов или количества вдруг
          не&nbsp;окажется в&nbsp;наличии оперативно привезем их&nbsp;для вас
          в&nbsp;течении 2&nbsp;&mdash; 3&nbsp;рабочих дня
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
