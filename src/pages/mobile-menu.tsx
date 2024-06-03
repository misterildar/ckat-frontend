import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../utils/constants';
import useDevice from '../hooks/useDevice';
import { ButtonHeader } from '../components/ui/button-header/buttonHeader';

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
      <ButtonHeader title='ГЛАВНАЯ' link={routes.home} />
      <ButtonHeader title='КОНТАКТЫ' link={routes.contacts} />
      <ButtonHeader title='О НАС' link={routes.about} />
      <ButtonHeader title='ЛИЧНЫЙ КАБИНЕТ' link={routes.profile} />
    </div>
  );
};

export default MobileMenu;
