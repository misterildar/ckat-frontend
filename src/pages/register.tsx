import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../components/form/form';
import { FormValues } from '../utils/types';
import { routes } from '../utils/constants';
import { useAppDispatch } from '../hooks/hooks';
import { registerUser } from '../services/store/userSlice';

import styles from './style.module.scss';

const Register: FC = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const register = async (userData: FormValues) => {
    try {
      await dispatch(registerUser(userData));
      navigate(routes.login);
    } catch (error) {
      // Ошибка уже обрабатывается в userSlice и отображается в компоненте Form
    }
  };

  return (
    <div className={styles.profile__container}>
      <Form
        isLogin={true}
        isEmail={true}
        title='РЕГИСТРАЦИЯ'
        getDataForm={register}
        titleBottom='ЗАРЕГИСТРИРОВАТЬСЯ'
      />
    </div>
  );
};

export default Register;
