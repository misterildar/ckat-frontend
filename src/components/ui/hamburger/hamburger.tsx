import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

const Hamburger: FC<{ link: string }> = ({ link }) => {
  return (
    <NavLink className={styles.hamburger} to={link}>
      <span></span>
      <span></span>
      <span></span>
    </NavLink>
  );
};

export default Hamburger;
