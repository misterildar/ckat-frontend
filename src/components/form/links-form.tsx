import { FC } from 'react';
import { Link } from 'react-router-dom';

import { LinksProps } from '../../utils/types';
import { routes } from '../../utils/constants';

import styles from './style.module.scss';

export const LinksForm: FC<LinksProps> = ({ isLogin, isRegister }) => {
  const loginLink = isLogin && (
    <h3 className={styles.text__link}>
      У вас уже есть аккаунт?
      <Link to={routes.login} className={styles.link}>
        Войти
      </Link>
    </h3>
  );

  const registerLink = isRegister && (
    <h3 className={styles.text__link}>
      Еще нет аккаунта?
      <Link to={routes.register} className={styles.link}>
        Зарегистрироваться
      </Link>
    </h3>
  );

  return (
    <>
      {loginLink}
      {registerLink}
    </>
  );
};
