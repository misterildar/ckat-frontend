import { FC } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

import { arrayImages } from '../../utils/constants';

import styles from './style.module.scss';

export const Slider: FC = () => {
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
        navigation={true}
        effect='fade'
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {arrayImages.map((el, index) => (
          <SwiperSlide key={index}>
            <img className={styles.image} src={el} alt='photoImage' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
