import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

export const NotFound: FC = () => {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.title}>
        Выбранная страница не существует перейдите на домашную страницу
      </h2>
      <Link to='/'>
        <h2>Главная</h2>
      </Link>
    </div>
  );
};
