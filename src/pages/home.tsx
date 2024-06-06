import { FC } from 'react';

import useDevice from '../hooks/useDevice';
import { arraySvg } from '../utils/constants';
import { Slider } from '../components/slider/slider';

import styles from './style.module.scss';

export const Home: FC = () => {
  const device = useDevice();

  const isMobile = device === 'mobile';

  const styleImage = isMobile ? styles.home__image_mobile : styles.home__image;

  const styleHome = isMobile ? styles.home__mobile : styles.home;

  const styleGrid = isMobile ? styles.home__grid_mobile : styles.home__grid;

  const fontSize = isMobile ? (
    <h4 className={styles.home__title_bottom}>
      Работаем с&nbsp;2012&nbsp;года, в&nbsp;наличии необходимые товары для
      электромонтажа и&nbsp;безопасности, а&nbsp;также многое другое.
    </h4>
  ) : (
    <h2 className={styles.home__title_bottom}>
      Работаем с&nbsp;2012&nbsp;года, в&nbsp;наличии необходимые товары для
      электромонтажа и&nbsp;безопасности, а&nbsp;также многое другое.
    </h2>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styleHome}>
        <Slider />
        <div className={styleGrid}>
          {arraySvg.map((svg, index) => (
            <img
              className={styleImage}
              src={svg}
              alt='photoImage'
              key={index}
            />
          ))}
        </div>
        <div className={styles.home__bottom}>{fontSize}</div>
      </div>
    </div>
  );
};
