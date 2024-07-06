import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import CKAT from '../../assets/icons/CKAT.png';
import { routes } from '../../utils/constants';

import styles from './style.module.scss';

export const LogoLink: FC = () => {
  return (
    <NavLink to={routes.home}>
      <img className={styles.logo} src={CKAT} alt='CKAT' />
    </NavLink>
  );
};
