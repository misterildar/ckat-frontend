import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { TButtonHeader } from '../../../utils/types';

import styles from './styles.module.scss';

export const ButtonHeader: FC<TButtonHeader> = ({ title, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
    >
      <h5>{title}</h5>
    </NavLink>
  );
};
