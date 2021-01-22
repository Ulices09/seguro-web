import { FC } from 'react';
import styles from './Description.module.scss';

type IProps = {
  icon: string;
  text: string;
  className?: string;
};

const Description: FC<IProps> = ({ icon, text, className }) => (
  <div className={`${styles.container} ${className}`}>
    <div className={styles.icon}>
      <img src={icon} alt="icon" className="mr-2" />
    </div>
    <span>{text}</span>
  </div>
);

export default Description;
