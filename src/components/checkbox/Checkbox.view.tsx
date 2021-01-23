import { FC, InputHTMLAttributes, ReactNode } from 'react';
import styles from './Checkbox.module.scss';

type IProps = {
  text: ReactNode;
} & InputHTMLAttributes<any>;

const Checkbox: FC<IProps> = ({ text, className, ...rest }) => (
  <label className={`${styles.container} ${className}`}>
    {text}
    <input {...rest} type="checkbox" />
    <span className={styles.checkmark} />
  </label>
);

export default Checkbox;
