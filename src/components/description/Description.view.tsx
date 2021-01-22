import { FC } from 'react';
import { IDescriptionItem } from 'common/types';
import styles from './Description.module.scss';

type IProps = IDescriptionItem;

const Description: FC<IProps> = ({ icon, text, className }) => (
  <div className={`${styles.container} ${className}`}>
    <div className={styles.icon}>
      <img src={icon} alt="icon" className="mr-2" />
    </div>
    <span className={styles.text}>{text}</span>
  </div>
);

export default Description;
