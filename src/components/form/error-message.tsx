import { FC, ReactNode } from 'react';

import { ErrorMessages, ErrorMessageType } from '../../utils/types';

import styles from './style.module.scss';



const errorMessageObject: ErrorMessages = {
  username: (errors) => {
    if (errors?.username) {
      return (
        <p className={styles.text}>
          {(errors?.username?.message as string) || 'Error'}
        </p>
      );
    }
  },

  email: (errors) => {
    if (errors?.email && errors.email.type === 'required') {
      return <p className={styles.text}>Заполните адрес электронной почты</p>;
    }
    if (errors?.email && errors.email.type === 'pattern') {
      return <p className={styles.text}>{errors.email.message as ReactNode}</p>;
    }
  },

  password: (errors) => {
    if (errors?.password) {
      return (
        <p className={styles.text}>
          {(errors.password.message as string) || 'Error'}
        </p>
      );
    }
  },
};

const ErrorMessage: FC<{ error: any; type: ErrorMessageType }> = ({
  error,
  type,
}) => {
  let getErrorMessage;

  if (type !== undefined) {
    getErrorMessage = errorMessageObject[type];
  }

  let errorMessage;

  if (getErrorMessage) {
    errorMessage = getErrorMessage(error);
  }

  return <div style={{ height: 40 }}>{errorMessage}</div>;
};

export default ErrorMessage;
