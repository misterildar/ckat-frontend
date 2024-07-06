import { FC } from 'react';

export const MapPanorama: FC = () => {
  return (
    <iframe
      src='https://yandex.ru/map-widget/v1/?ll=52.326549%2C54.896107&panorama%5Bdirection%5D=187.750473%2C-17.998250&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=52.311426%2C54.893799&panorama%5Bspan%5D=119.613104%2C60.000000&z=14'
      width='100%'
      height='100%'
      title='CKAT-Map-panorama'
      style={{ position: 'relative' }}
    ></iframe>
  );
};
