import { FC } from 'react';

import useDevice from '../hooks/useDevice';
import { Map } from '../components/ui/map-contacts/map';
import { MapPanorama } from '../components/ui/map-contacts/map-panorama';

import styles from './style.module.scss';

export const Contacts: FC = () => {
  const device = useDevice();

  const isMobile = device === 'mobile';

  const mapStyle = isMobile
    ? styles.contacts__map_mobile
    : styles.contacts__map;

  const contactsStyle = isMobile
    ? styles.contacts__container_mobile
    : styles.contacts__container;

  return (
    <div className={styles.wrapper}>
      <div className={contactsStyle}>
        <div className={mapStyle}>
          <MapPanorama />
        </div>
        <div className={mapStyle}>
          <Map />
        </div>
      </div>
    </div>
  );
};
