import { FC } from 'react';
import { BaseSvg, PeopleSvg, BaseMobileSvg, LogoSvg } from 'assets/svg';
import styles from './Layout.module.scss';
import { InfoCarousel } from 'components';
import { items } from './data';

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.container}>
          <img src={BaseSvg} alt="base" className={styles.base} />
          <img src={BaseMobileSvg} alt="base" className={styles.baseMobile} />
          <img src={PeopleSvg} alt="people" className={styles.people} />
        </div>
      </div>
      <div className={styles.header}>
        <div className="container">
          <div className="row">
            <div className={`col ${styles.headerContent}`}>
              <img src={LogoSvg} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className={styles.info}>
              <span className={styles.title}>Seguro de</span>
              <br />
              <span className={`font-bold ${styles.title}`}>Salud</span>
              <InfoCarousel items={items} className="mt-4" />
            </div>
          </div>
          <div className={`col-12 col-lg-5 mb-5 ${styles.content}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
