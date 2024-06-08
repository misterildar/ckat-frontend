import { FC } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../../pages/login';
import { api } from '../../utils/api';
import { Home } from '../../pages/home';
import Profile from '../../pages/profile';
import { Header } from '../header/Header';
import { Footer } from '../footer/footer';
import { About } from '../../pages/about';
import Register from '../../pages/register';
import { NotFound } from '../../pages/notFound';
import { routes } from '../../utils/constants';
import { Contacts } from '../../pages/contacts';
import MobileMenu from '../../pages/mobile-menu';
import { useAppDispatch } from '../../hooks/hooks';
import { OnlyAuth, OnlyUnAuth } from '../protected-route/protected-route';

import styles from './style.module.scss';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(api.checkUserAuth());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.contacts} element={<Contacts />} />
          <Route path={routes.notFound} element={<NotFound />} />
          <Route path={routes.mobileMenu} element={<MobileMenu />} />
          <Route
            path={routes.register}
            element={<OnlyUnAuth component={<Register />} />}
          />
          <Route
            path={routes.login}
            element={<OnlyUnAuth component={<Login />} />}
          />
          <Route
            path={routes.profile}
            element={<OnlyAuth component={<Profile />} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
