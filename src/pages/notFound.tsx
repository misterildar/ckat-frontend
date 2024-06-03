import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => {
  return (
    <div>
      Выбранная страница не существует перейдите на домашную страницу{' '}
      <Link to='/'>Главная</Link>
    </div>
  );
};
