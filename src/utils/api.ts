import { TUser } from './types';
import {
  setAuthChecked,
  setUser,
  ubdateTokenUser,
  getUser,
} from '../services/store/userSlice';
import { AppDispatch } from './types';

const baseUrl: string = 'http://localhost:3000/';

const checkErrorPromise = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const getRegister = (bodyData: TUser) => {
  return fetch(`${baseUrl}signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    } as HeadersInit,
    body: JSON.stringify(bodyData),
  }).then(checkErrorPromise);
};

const getLogin = (bodyData: TUser) => {
  return fetch(`${baseUrl}signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    } as HeadersInit,
    body: JSON.stringify(bodyData),
  }).then(checkErrorPromise);
};

const checkUserAuth = () => {
  return (dispatch: AppDispatch) => {
    if (localStorage.getItem('accessToken')) {
      dispatch(getUser());
      dispatch(ubdateTokenUser())
        .catch(() => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
    }
  };
};

const refreshToken = () => {
  return fetch(`${baseUrl}refresh-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  }).then(checkErrorPromise);
};

const fetchWithRefresh = async (url: string, options: RequestInit) => {
  try {
    const res = await fetch(url, options);
    return await checkErrorPromise(res);
  } catch (err) {
    if ((err as Error).message === 'jwt expired') {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem('refreshToken', refreshData.refreshToken);
      localStorage.setItem('accessToken', refreshData.accessToken);
      const res = await fetch(url, options);
      return await checkErrorPromise(res);
    } else {
      return Promise.reject(err);
    }
  }
};

const getUserData = () => {
  return fetchWithRefresh(`${baseUrl}users/me/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    } as HeadersInit,
  }).then((res) => {
    return res.id ? res : '';
  });
};

const getUpdateUserData = (bodyData: TUser) => {
  return fetchWithRefresh(`${baseUrl}users/me/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    } as HeadersInit,
    body: JSON.stringify(bodyData),
  }).then((res) => {
    return res.success ? res.user : '';
  });
};

export const api = {
  getUpdateUserData,
  checkUserAuth,
  refreshToken,
  getUserData,
  getRegister,
  getLogin,
};
