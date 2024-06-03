import { FC } from 'react';

import { YandexMapsWidgetProps } from '../../utils/types';

import styles from './styles.module.scss';

const YandexMapsWidget: FC<YandexMapsWidgetProps> = ({
  orgId,
  orgName,
  city,
}) => {
  const iframeStyle = {
    width: '100%',
    height: '100%',
    border: '1px solid #e6e6e6',
    borderRadius: '8px',
  };

  const mapUrl = `https://yandex.ru/maps-reviews-widget/${orgId}?comments`;
  const linkUrl = `https://yandex.ru/maps/org/${orgName}/${orgId}/`;

  return (
    <div className={styles.iframe}>
      <iframe
        style={iframeStyle}
        src={mapUrl}
        title={`${orgName} на карте ${city}`}
      />
      <a href={linkUrl} target='_blank' rel='noopener noreferrer'></a>
    </div>
  );
};

export default YandexMapsWidget;
