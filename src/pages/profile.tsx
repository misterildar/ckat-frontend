import { useEffect, useCallback, FC } from 'react';

import useDevice from '../hooks/useDevice';
import Form from '../components/form/form';
import { FormValues } from '../utils/types';
import { useAuth } from '../hooks/use-auth';
import { useAppDispatch } from '../hooks/hooks';
import { useFormHook } from '../hooks/use-form';
import Button from '../components/ui/button/button';
import { logOutUser } from '../services/store/userSlice';
import { updateUser } from '../services/store/userSlice';

import styles from './style.module.scss';

const Profile: FC = () => {
  const device = useDevice();

  const dispatch = useAppDispatch();

  const { username, email } = useAuth();

  const { values, setValues } = useFormHook({
    username: '',
    email: '',
    password: '',
  });

  const updateValues = useCallback(() => {
    if (email && username) {
      setValues({ username, email });
    }
  }, [email, setValues, username]);

  useEffect(() => {
    updateValues();
  }, [updateValues]);

  const updateUserData = (userData: FormValues) => {
    const updatedData: FormValues = {};

    if (values.username !== userData.username) {
      updatedData['username'] = userData.username;
    }

    if (values.email !== userData.email) {
      updatedData['email'] = userData.email;
    }

    return updatedData;
  };

  const changeUserData = async (userData: FormValues) => {
    try {
      await dispatch(updateUser(updateUserData(userData)));
    } catch (error) {
      // Ошибка уже обрабатывается в userSlice и отображается в компоненте Form
    }
  };

  const isDesktop = device === 'desktop';

  const exitButton = isDesktop
    ? styles.profile__button
    : styles.profile__button_mobile;

  const logOut = () => {
    dispatch(logOutUser());
  };

  return (
    <div className={styles.profile__container}>
      <Form
        title='Основные данные'
        titleBottom='Изменить данные'
        getDataForm={changeUserData}
        isEmail={true}
        valueEmail={values.email ?? ''}
        valueLogin={values.username ?? ''}
      />
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
