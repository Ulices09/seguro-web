import { FC } from 'react';
import styles from './Title.module.scss';

type IProps = {
  text: string;
  secondText?: string;
};

const Title: FC<IProps> = ({ text, secondText }) => {
  return (
    <span className={styles.text}>
      {text}
      {secondText && <span className={styles.second}>&nbsp;{secondText}</span>}
    </span>
  );
};

export default Title;
