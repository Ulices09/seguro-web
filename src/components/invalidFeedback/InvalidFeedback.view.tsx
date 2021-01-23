import { FC } from 'react';
import styles from './InvalidFeedback.module.scss';

const InvalidFeedback: FC = ({ children }) => (
  <span className={styles.invalid}>{children}</span>
);

export default InvalidFeedback;
