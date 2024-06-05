import { FC } from 'react';

import CKAT from '../../assets/icons/CKAT.png';
import { routes } from '../../utils/constants';
import useDevice from '../../hooks/useDevice';
import Hamburger from '../ui/hamburger/hamburger';
import { ButtonHeader } from '../../components/ui/button-header/buttonHeader';

import styles from './style.module.scss';

export const Header: FC = () => {
  const device = useDevice();

  const isDesktop = device === 'desktop';

  const isMobile = device === 'mobile';

  const isDesktopOrTablet = device === 'desktop' || device === 'tablet';

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={CKAT} alt='CKAT' />
        {isDesktop && (
          <h2 className={styles.title}> ТОВАРЫ ДЛЯ ЭЛЕТРОМОНТАЖА </h2>
        )}
        <nav className={styles.links}>
          {isMobile && (
            <>
              <Hamburger link={routes.mobileMenu} />
            </>
          )}
          {isDesktopOrTablet && (
            <>
              <ButtonHeader title='ГЛАВНАЯ' link={routes.home} />
              <ButtonHeader title='КОНТАКТЫ' link={routes.contacts} />
              <ButtonHeader title='О НАС' link={routes.about} />
              <ButtonHeader title='ЛИЧНЫЙ КАБИНЕТ' link={routes.profile} />
            </>
          )}
        </nav>
      </div>
    </div>
  );
};
