import { useEffect, useCallback, FC } from 'react';

import Form from '../components/form/form';
import { FormValues } from '../utils/types';
import { useAuth } from '../hooks/use-auth';
import { useAppDispatch } from '../hooks/hooks';
import { updateUserData } from '../utils/utils';
import { useFormHook } from '../hooks/use-form';
import { logOutUser } from '../services/store/userSlice';
import { updateUser } from '../services/store/userSlice';
import { ProfileActions } from '../components/profile-actions/profile-actions';

import styles from './style.module.scss';

const Profile: FC = () => {
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

  const changeUserData = async (userData: FormValues) => {
    try {
      await dispatch(updateUser(updateUserData(values, userData)));
    } catch (error) {
      // Ошибка уже обрабатывается в userSlice и отображается в компоненте Form
    }
  };

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
      <ProfileActions onLogout={logOut} />
    </div>
  );
};

export default Profile;
