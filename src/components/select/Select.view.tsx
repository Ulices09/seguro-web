import { FC, SelectHTMLAttributes } from 'react';
import { ISelectItem } from 'common/types';
import styles from './Select.module.scss';

type IProps = {
  items: ISelectItem[];
} & SelectHTMLAttributes<any>;

const Select: FC<IProps> = ({ className, placeholder, items, ...rest }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <select className={`${styles.select} ${className}`} {...rest}>
        {items.map((item, index) => (
          <option key={index} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
