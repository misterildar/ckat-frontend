import { useAppSelector } from './hooks';

export const useAuth = () => {
  const {
    user,
    email,
    username,
    password,
    isFailed,
    isRequest,
    accessToken,
    refreshToken,
    isAuthChecked,
  } = useAppSelector((state) => state.user);

  return {
    user,
    email,
    username,
    password,
    isFailed,
    isRequest,
    accessToken,
    refreshToken,
    isAuthChecked,
  };
};
