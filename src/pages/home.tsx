import { FC } from 'react';

import { arraySvg } from '../utils/constants';
import { Slider } from '../components/slider/slider';
import useDevice from '../hooks/useDevice';

import styles from './style.module.scss';

export const Home: FC = () => {
  const device = useDevice();

  const isMobile = device === 'mobile';

  const styleImage = isMobile ? styles.home__image_mobile : styles.home__image;

  return (
    <div className={styles.wrapper}>
      <div className={styles.home}>
        <Slider />
        <div className={styles.home__vector}>
          <div className={styles.home__box}>
            {arraySvg.slice(0, 5).map((svg, index) => (
              <img
                className={styleImage}
                src={svg}
                alt='photoImage'
                key={index}
              />
            ))}
          </div>
          <div className={styles.home__box}>
            {arraySvg.slice(5, 10).map((svg, index) => (
              <img
                className={styleImage}
                src={svg}
                alt='photoImage'
                key={index}
              />
            ))}
          </div>
        </div>
        <div className={styles.home__bottom}>
          <h2 className={styles.home__title_bottom}>
            Работаем с 2012 года, в наличии необходимые товары для
            электромонтажа и безопасности, а также многое другое.
          </h2>
        </div>
      </div>
    </div>
  );
};
