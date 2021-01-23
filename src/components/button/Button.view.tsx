import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

const Button: FC<ButtonHTMLAttributes<any>> = ({
  children,
  className,
  ...rest
}) => (
  <button className={`font-bold ${styles.button} ${className || ''}`} {...rest}>
    {children}
  </button>
);

export default Button;
