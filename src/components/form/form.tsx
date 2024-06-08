import { Link } from 'react-router-dom';
import { FC, ReactNode, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Spinner from '../ui/spiner/spiner';
import useDevice from '../../hooks/useDevice';
import { FormValues } from '../../utils/types';
import { routes } from '../../utils/constants';
import { useAuth } from '../../hooks/use-auth';
import { LoginFormProps } from '../../utils/types';

import styles from './style.module.scss';

const Form: FC<LoginFormProps> = ({
  title,
  valueEmail,
  valueLogin,
  getDataForm,
  titleBottom,
  isLogin = false,
  isEmail = false,
  isRegister = false,
}) => {
  const device = useDevice();

  const { isFailed, isRequest } = useAuth();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const isMobile = device === 'mobile';

  const dataButton = isRequest ? <Spinner /> : titleBottom;

  const inputStyle = isMobile ? styles.label__mobile : styles.label;

  const [formValues, setFormValues] = useState<FormValues>({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (valueEmail && valueLogin) {
      setFormValues((prevValues) => ({
        ...prevValues,
        username: valueLogin,
        email: valueEmail,
      }));
    }
  }, [valueEmail, valueLogin]);

  const errorMessageText = isFailed &&
    typeof isFailed === 'object' &&
    'message' in isFailed && <p>{isFailed.message as ReactNode}</p>;

  const errorMessage =
    errorMessageText !== 'Unauthorized' ? errorMessageText : '';

  const loginLink = isLogin && (
    <h3 className={styles.text__link}>
      У вас уже есть аккаунт?{' '}
      <Link to={routes.login} className={styles.link}>
        Войти
      </Link>
    </h3>
  );

  const registerLink = isRegister && (
    <h3 className={styles.text__link}>
      Еще нет аккаунта?{' '}
      <Link to={routes.register} className={styles.link}>
        Зарегистрироваться
      </Link>
    </h3>
  );

  const emailInput = isEmail && (
    <>
      <label>
        <div className={inputStyle}>
          {valueLogin && <h3 className={styles.text}>Email:&nbsp;&nbsp;</h3>}
          <input
            type='text'
            value={formValues.email}
            placeholder='Почта'
            className={styles.input}
            {...register('email', {
              required: 'Поле обязательно для заполнения',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Некорректный адрес электронной почты',
              },
            })}
            onChange={(e) => {
              setFormValues((prevValues) => ({
                ...prevValues,
                email: e.target.value,
              }));
            }}
          />
        </div>
      </label>
      <div style={{ height: 40 }}>
        {errors.email && errors.email.type === 'required' && (
          <p className={styles.text}>Заполните адрес электронной почты</p>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <p className={styles.text}>{errors.email.message as ReactNode}</p>
        )}
      </div>
    </>
  );

  const usernameInput = errors?.username && (
    <p className={styles.text}>
      {(errors?.username?.message as string) || 'Error'}
    </p>
  );

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    const loginFormData: FormValues = {
      username: data.username ?? '',
      email: data.email,
      password: data.password,
    };
    getDataForm(loginFormData);
    reset();
  };

  const isDisabledButtom = isValid ? styles.button_active : styles.button;

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <>
          <h2 className={styles.title}>{title}</h2>
          <label>
            <div className={inputStyle}>
              {valueLogin && (
                <h3 className={styles.text}>Login:&nbsp;&nbsp;</h3>
              )}
              <input
                type='text'
                value={formValues.username}
                placeholder='Логин'
                className={styles.input}
                {...register('username', {
                  required: 'Поле обязательно для заполнения',
                  minLength: {
                    value: 3,
                    message: 'Минимальная длина 3 символа',
                  },
                })}
                onChange={(e) => {
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    username: e.target.value,
                  }));
                }}
              />
            </div>
          </label>
          <div style={{ height: 40 }}>{usernameInput}</div>
          {emailInput}
          <label>
            <div className={inputStyle}>
              {valueLogin && <h3 className={styles.text}>Пароль:</h3>}
              <input
                type='text'
                placeholder='Пароль'
                className={styles.input}
                {...register('password', {
                  required: 'Поле обязательно для заполнения',
                  minLength: {
                    value: 6,
                    message: 'Минимальная длина пароля 6 символа',
                  },
                })}
              />
            </div>
          </label>
          <div style={{ height: 40 }}>
            {errors.password && (
              <p className={styles.text}>
                {(errors.password.message as string) || 'Error'}
              </p>
            )}
          </div>
          <button
            name='button'
            type='submit'
            disabled={!isValid}
            className={isDisabledButtom}
          >
            {dataButton}
          </button>
          {registerLink}
          {loginLink}
          {errorMessage}
        </>
      </form>
    </div>
  );
};

export default Form;
