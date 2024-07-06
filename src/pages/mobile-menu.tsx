import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../utils/constants';
import useDevice from '../hooks/useDevice';
import { HeaderButtons } from '../components/header/header-buttons';

import styles from './style.module.scss';

const MobileMenu: FC = () => {
  const navigate = useNavigate();

  const device = useDevice();

  useEffect(() => {
    if (device === 'desktop') {
      navigate(routes.home);
    }
  }, [device, navigate]);

  return (
    <div className={styles.mobileMenu}>
      <HeaderButtons />
    </div>
  );
};

export default MobileMenu;
