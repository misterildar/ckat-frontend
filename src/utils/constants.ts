import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.png';
import image7 from '../assets/images/image7.png';
import image8 from '../assets/images/image8.png';

import svg1 from '../assets/icons/1.svg';
import svg2 from '../assets/icons/2.svg';
import svg3 from '../assets/icons/3.svg';
import svg4 from '../assets/icons/4.svg';
import svg5 from '../assets/icons/5.svg';
import svg6 from '../assets/icons/6.svg';
import svg7 from '../assets/icons/7.svg';
import svg8 from '../assets/icons/8.svg';
import svg9 from '../assets/icons/9.svg';
import svg10 from '../assets/icons/10.svg';

export const routes = {
  home: '/',
  notFound: '*',
  about: '/about',
  login: '/login',
  contacts: '/contacts',
  register: '/register',
  profile: '/profile',
  mobileMenu: '/mobile-menu',
  changeProfileData: '/change-profile-data',
};

export const loadingRoutes = [
  routes.login,
  routes.register,
  routes.profile,
  routes.changeProfileData,
];

export const MIN_DESKTOP_WIDTH = 1280;
export const MAX_MOBILE_WIDTH = 768;

export enum TDevice {
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  MOBILE = 'mobile',
}

export const arrayImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

export const arraySvg = [
  svg10,
  svg2,
  svg3,
  svg1,
  svg5,
  svg6,
  svg7,
  svg8,
  svg9,
  svg4,
];

export const arrHomeTitle = [
  'Кабели и провода',
  'Светотехника',
  'Розетки и Выключатели',
  'Щитовое оборудование',
  'Ручной инструмент',
  'Сопутствующие товары',
];

export const aboutDescription =
  'Работаем с 2012 года.  Проконсультируем вас если возникнут вопросы.   Подберем именно те товары, которые обеспечат максимально удобный монтаж, надежную защиту вас, ваших близких и вашего дома.   Здесь вы можете подобрать розетки и выключатели различных цветов и дизайна.   Если нужных цветов или количества вдруг не окажется в наличии оперативно привезем их для вас в течении 2 - 3 рабочих дня.';
