import { FC } from 'react';

import { LogoLink } from './logo-link';
import { routes } from '../../utils/constants';
import useDevice from '../../hooks/useDevice';
import Hamburger from '../ui/hamburger/hamburger';
import { HeaderButtons } from './header-buttons';

import styles from './style.module.scss';

export const Header: FC = () => {
  const device = useDevice();

  const isDesktop = device === 'desktop';

  const isMobile = device === 'mobile';

  const isDesktopOrTablet = device === 'desktop' || device === 'tablet';

  const headerTitle = (
    <h2 className={styles.title}> ТОВАРЫ ДЛЯ ЭЛЕТРОМОНТАЖА </h2>
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LogoLink />
        {isDesktop && headerTitle}
        <nav className={styles.links}>
          {isMobile && <Hamburger link={routes.mobileMenu} />}
          {isDesktopOrTablet && <HeaderButtons />}
        </nav>
      </div>
    </div>
  );
};
