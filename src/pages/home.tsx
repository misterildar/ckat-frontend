import { FC } from 'react';

import useDevice from '../hooks/useDevice';
import { arraySvg } from '../utils/constants';
import { Slider } from '../components/slider/slider';
import { homeDescription } from '../utils/constants';

import styles from './style.module.scss';

export const Home: FC = () => {
  const device = useDevice();

  const isMobile = device === 'mobile';

  const styleGrid = isMobile ? styles.home__grid_mobile : styles.home__grid;

  const styleHome = isMobile ? styles.home__mobile : styles.home;

  const styleImage = isMobile ? styles.home__image_mobile : styles.home__image;

  const fontSize = isMobile ? (
    <h4 className={styles.home__title}>{homeDescription}</h4>
  ) : (
    <h2 className={styles.home__title}>{homeDescription}</h2>
  );

  return (
    <div className={styleHome}>
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
