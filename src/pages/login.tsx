import { FC } from 'react';

import Form from '../components/form/form';
import { routes } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';
import { FormValues } from '../utils/types';
import { loginUser } from '../services/store/userSlice';

import styles from './style.module.scss';

const Login: FC = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const login = async (data: FormValues) => {
    try {
      await dispatch(loginUser(data));
      navigate(routes.profile);
    } catch (error) {}
  };

  return (
    <div className={styles.profile__container}>
      <Form
        title='ВХОД'
        titleBottom='ВОЙТИ'
        getDataForm={login}
        isRegister={true}
      />
    </div>
  );
};

export default Login;
