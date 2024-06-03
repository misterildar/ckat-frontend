import { FC } from 'react';

import { TButton } from '../../../utils/types';

import styles from './styles.module.scss';

const Button: FC<TButton> = ({
  disabled = false,
  isValid = false,
  buttonText,
  type,
  onClick = () => {},
}) => {
  const isDisabledButtom = isValid ? styles.button__active : styles.button;
  return (
    <button
      name='button'
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={isDisabledButtom}
    >
      {buttonText}
    </button>
  );
};

export default Button;
