import { useEffect, useCallback, FC } from 'react';

import { useAuth } from '../hooks/use-auth';
import Form from '../components/form/form';
import { FormValues } from '../utils/types';
import { useFormHook } from '../hooks/use-form';
import { useAppDispatch } from '../hooks/hooks';
import { updateUser } from '../services/store/userSlice';

const ChangeProfileData: FC = () => {
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

  const dispatch = useAppDispatch();

  const updateUserData = (userData: FormValues) => {
    //TODO
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
    //TODO
    console.log(updateUserData(userData));

    try {
      await dispatch(updateUser(updateUserData(userData)));
    } catch (error) {
      // Ошибка уже обрабатывается в userSlice и отображается в компоненте Form
    }
  };

  return (
    <Form
      title='Основные данные'
      titleBottom='Изменить данные'
      getDataForm={changeUserData}
      isEmail={true}
      valueEmail={values.email ?? ''}
      valueLogin={values.username ?? ''}
    />
  );
};

export default ChangeProfileData;
