import { FC } from 'react';
import Button from '../ui/button/button';
import useDevice from '../../hooks/useDevice';

import { TProfileActionsProps } from '../../utils/types';

import styles from './styles.module.scss';

export const ProfileActions: FC<TProfileActionsProps> = ({ onLogout }) => {
  const device = useDevice();

  const isDesktop = device === 'desktop';

  const exitButton = isDesktop
    ? styles.profile__button
    : styles.profile__button_mobile;

  return (
    <div className={exitButton}>
      <Button
        buttonText='ВЫЙТИ'
        disabled={false}
        isValid={true}
        type='button'
        onClick={onLogout}
      />
    </div>
  );
};
