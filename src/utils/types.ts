import { ReactNode } from 'react';

import { store } from '../services';

export type AppDispatch = typeof store.dispatch;

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

type TisFailed = { statusCode: number; message: ReactNode; error: string };

export type TuserSlice = {
  user: boolean | null;
  email: string | null | undefined;
  username: string | null | undefined;
  password: string;

  accessToken: string | null;
  refreshToken: string | null;

  isRequest: boolean | string;
  isFailed: TisFailed | boolean | null | unknown;

  isAuthChecked: boolean | string;
};

export type TonClose = {
  onClose?: () => void;
};

export type TUser = {
  username?: string | null;
  email?: string | null;
  password?: string;
  code?: string;
};

export type FormFields = {
  email: HTMLInputElement;
  password: HTMLInputElement;
  remember: HTMLInputElement;
};

export type FormValues = {
  username?: string;
  email?: string;
  password?: string;
};

export type TButton = {
  disabled?: boolean;
  isValid?: boolean;
  buttonText: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export type THamburger = {
  isOpen: boolean;
  onClick: () => void;
};

export type LoginFormProps = {
  title: string;
  isLogin?: boolean;
  isEmail?: boolean;
  titleBottom: string;
  valueEmail?: string;
  valueLogin?: string;
  isRegister?: boolean;
  getDataForm: (data: FormValues) => void;
};

export type YandexMapsWidgetProps = {
  orgId: string;
  orgName: string;
  city: string;
};

export type TButtonHeader = {
  title: string | boolean;
  link: string;
};

export type LinksProps = {
  isLogin: boolean;
  isRegister: boolean;
};

export type TProfileForm = {
  values: TUser;
  changeUserData: (userData: FormValues) => void;
};

export type TProfileActionsProps = {
  onLogout: () => void;
};

export type TInputFieldProps = {
  isText: string | undefined;
  text: string;
  type: string;
  value?: string | undefined;
  placeholder: string;
  register: any;
  registerOptions: any;
  isOnChange?: boolean;
  onChange?: (value: string) => void;
  inputName: string;
};

export type ErrorMessages = {
  username: (errors: {
    username: { type: string; message: string };
  }) => React.ReactNode | undefined;
  email: (errors: {
    email: { type: string; message: string };
  }) => React.ReactNode | undefined;
  password: (errors: {
    password: { type: string; message: string };
  }) => React.ReactNode | undefined;
}

export type ErrorMessageType = 'username' | 'email' | 'password';