import { FC } from 'react';

import useDevice from '../../hooks/useDevice';
import { ContactDesctop } from './contact-desctop';
import { ContactTabletMobile } from './contact-tablet-mobile';

import styles from './style.module.scss';

export const Footer: FC = () => {
  const device = useDevice();

  const isDesktop = device === 'desktop';

  const footerText = isDesktop ? <ContactDesctop /> : <ContactTabletMobile />;

  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.container}>{footerText}</div>
      </div>
    </div>
  );
};
