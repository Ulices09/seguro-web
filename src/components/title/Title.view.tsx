import { FC } from 'react';
import styles from './Title.module.scss';

type IProps = {
  text: string;
  secondText?: string;
  description?: string;
};

const Title: FC<IProps> = ({ text, secondText, description }) => {
  return (
    <>
      <span className={styles.text}>
        {text}
        {secondText && (
          <span className={styles.second}>&nbsp;{secondText}</span>
        )}
      </span>
      {description && <span>{description}</span>}
    </>
  );
};

export default Title;
