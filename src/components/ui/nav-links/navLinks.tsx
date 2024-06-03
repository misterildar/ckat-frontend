import { FC } from 'react';

import { ButtonHeader } from '../button-header/buttonHeader';
import { routes } from '../../../utils/constants';

import styles from './style.module.scss';

const NavLinks: FC = () => {
  return (
    <div className={styles.navLinks}>
      <ButtonHeader title='ГЛАВНАЯ' link={routes.home} />
      <ButtonHeader title='КОНТАКТЫ' link={routes.contacts} />
      <ButtonHeader title='О НАС' link={routes.about} />
      <ButtonHeader title='ЛИЧНЫЙ КАБИНЕТ' link={routes.profile} />
    </div>
  );
};

export default NavLinks;
