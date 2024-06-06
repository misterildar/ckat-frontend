import { FC, useEffect, useState } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

import { arrayImages } from '../../utils/constants';

import styles from './style.module.scss';

export const Slider: FC = () => {
  const [images, setImages] = useState([arrayImages[0]]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImages(arrayImages);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect='fade'
        modules={[EffectFade, Autoplay, Navigation]}
        className='mySwiper'
      >
        {images.map((el, index) => (
          <SwiperSlide key={index}>
            <img className={styles.image} src={el} alt='photoImage' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
