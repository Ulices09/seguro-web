import { FC, InputHTMLAttributes, ReactNode } from 'react';
import styles from './Checkbox.module.scss';

type IProps = {
  text: ReactNode;
  hasError?: boolean;
} & InputHTMLAttributes<any>;

const Checkbox: FC<IProps> = ({ text, hasError, className, ...rest }) => (
  <label className={`${styles.container} ${className}`}>
    {text}
    <input {...rest} type="checkbox" />
    <span className={`${styles.checkmark} ${hasError && styles.error}`} />
  </label>
);

export default Checkbox;
