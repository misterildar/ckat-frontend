import { FC } from 'react';

import { routes } from '../../utils/constants';
import { ButtonHeader } from '../ui/button-header/buttonHeader';

export const HeaderButtons: FC = () => {
  return (
    <>
      <ButtonHeader title='ГЛАВНАЯ' link={routes.home} />
      <ButtonHeader title='КОНТАКТЫ' link={routes.contacts} />
      <ButtonHeader title='О НАС' link={routes.about} />
      <ButtonHeader title='ЛИЧНЫЙ КАБИНЕТ' link={routes.profile} />
    </>
  );
};
