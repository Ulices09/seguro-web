import React, { FC, useState } from 'react';
import { Description, Stepper } from 'components';
import { IDescriptionItem } from 'common/types';
import styles from './InfoCarousel.module.scss';

type IProps = {
  items: IDescriptionItem[];
  className?: string;
};

const InfoCarousel: FC<IProps> = ({ items, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(items[0]);

  const onChangeIndex = (position: number) => {
    if (position < 1 || position > items.length) return;
    const newIdex = position - 1;
    setActiveIndex(newIdex);
    setActiveItem(items[newIdex]);
  };

  return (
    <>
      <div className={`d-none d-md-block ${className}`}>
        {items.map((item, index) => (
          <Description
            key={index}
            icon={item.icon}
            text={item.text}
            className={item.className}
          />
        ))}
      </div>
      <div className={`d-block d-md-none ${className}`}>
        <Description
          icon={activeItem.icon}
          text={activeItem.text}
          className={`${styles.mcontainer} ${activeItem.className}`}
        />
        <Stepper
          position={activeIndex + 1}
          max={items.length}
          onChange={onChangeIndex}
        />
      </div>
    </>
  );
};

export default InfoCarousel;
