import { FC } from 'react';
// import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../hooks/hooks';
import Button from '../components/ui/button/button';
import ChangeProfileData from './change-profile-data';
import { logOutUser } from '../services/store/userSlice';
import useDevice from '../hooks/useDevice';

import styles from './style.module.scss';
// import { routes } from '../utils/constants';

const Profile: FC = () => {
  const dispatch = useAppDispatch();

  // const navigate = useNavigate();

  const device = useDevice();

  const isDesktop = device === 'desktop';

  const exitButton = isDesktop
    ? styles.profile__button
    : styles.profile__button_mobile;

  const logOut = () => {
    dispatch(logOutUser());
  };

  return (
    <div className={styles.profile__container}>
      <ChangeProfileData />
      <div className={exitButton}>
        <Button
          buttonText='ВЫЙТИ'
          disabled={false}
          isValid={true}
          type='button'
          onClick={logOut}
        />
      </div>
    </div>
  );
};

export default Profile;
