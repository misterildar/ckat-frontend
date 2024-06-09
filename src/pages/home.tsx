import { FC } from 'react';

import useDevice from '../hooks/useDevice';
import { arraySvg } from '../utils/constants';
import { Slider } from '../components/slider/slider';

import styles from './style.module.scss';

export const Home: FC = () => {
  const device = useDevice();

  const isMobile = device === 'mobile';

  const styleGrid = isMobile ? styles.home__grid_mobile : styles.home__grid;

  const styleImage = isMobile ? styles.home__image_mobile : styles.home__image;

  const fontSize = isMobile ? (
    <h4 className={styles.home__title}>
      Работаем с&nbsp;2012&nbsp;года, в&nbsp;наличии необходимые товары для
      электромонтажа и&nbsp;безопасности, а&nbsp;также многое другое.
    </h4>
  ) : (
    <h2 className={styles.home__title}>
      Работаем с&nbsp;2012&nbsp;года. Проконсультируем вас если возникнут
      вопросы. Подберем именно те&nbsp;товары, которые обеспечат максимально
      удобный монтаж, надежную защиту вас, ваших близких и&nbsp;вашего дома.
      Здесь вы&nbsp;можете подобрать розетки и&nbsp;выключатели различных цветов
      и&nbsp;дизайна. Если нужных цветов или количества вдруг не&nbsp;окажется
      в&nbsp;наличии оперативно привезем их&nbsp;для вас в&nbsp;течении
      2&nbsp;&mdash; 3&nbsp;рабочих дня
    </h2>
  );

  return (
    <div className={styles.home}>
      <Slider />
      <div className={styleGrid}>
        {arraySvg.map((svg, index) => (
          <img className={styleImage} src={svg} alt='photoImage' key={index} />
        ))}
      </div>
      <div className={styles.home__bottom}>{fontSize}</div>
    </div>
  );
};
