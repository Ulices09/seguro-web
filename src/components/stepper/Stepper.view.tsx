import { FC } from 'react';
import { BackSvg, NextSvg } from 'assets/svg';
import styles from './Stepper.module.scss';

type IProps = {
  position: number;
  max: number;
  onChange: (position: number) => void;
};

const Stepper: FC<IProps> = ({ position, max, onChange }) => {
  return (
    <div>
      <img
        src={BackSvg}
        alt="prev"
        className={`mr-3 ${position === 1 && styles.disabled}`}
        onClick={() => onChange(position - 1)}
      />
      <span className={`mr-2 ${styles.text}`}>{position}</span>
      <span className={styles.text}>/</span>
      <span className={`ml-2 ${styles.text}`}>{max}</span>
      <img
        src={NextSvg}
        alt="next"
        className={`ml-3 ${position === max && styles.disabled}`}
        onClick={() => onChange(position + 1)}
      />
    </div>
  );
};

export default Stepper;
