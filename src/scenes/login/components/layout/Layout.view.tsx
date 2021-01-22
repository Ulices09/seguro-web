import { FC } from 'react';
import {
  BaseSvg,
  PeopleSvg,
  BaseMobileSvg,
  LogoSvg,
  ClinicSvg,
  ShieldSvg,
  MobileSvg,
  MoneySvg,
} from 'assets/svg';
import styles from './Layout.module.scss';
import { Description } from 'components';

const Layout: FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-7">
          <div className={styles.content}>
            <img src={LogoSvg} alt="logo" className={styles.logo} />
            <img src={BaseSvg} alt="base" className={styles.base} />
            <img src={BaseMobileSvg} alt="base" className={styles.baseMobile} />
            <img src={PeopleSvg} alt="people" className={styles.people} />
            <div className={styles.info}>
              <span className={styles.title}>Seguro de</span>
              <br />
              <span className={`font-weight-bold ${styles.title}`}>Salud</span>
              <Description
                icon={ShieldSvg}
                text="Cómpralo de manera fácil"
                className="mb-3 mt-5"
              />
              <Description
                icon={MobileSvg}
                text="Cotiza y compra tu seguro 100% digital"
                className="mb-3"
              />
              <Description
                icon={MoneySvg}
                text="Hasta S/.12 millones de cobertura anual"
                className="mb-3"
              />
              <Description
                icon={ClinicSvg}
                text="Más de 300 clínicas en todo el Perú"
                className="mb-3"
              />
            </div>
          </div>
        </div>
        <div
          className="col-12 mt-5 mt-lg-0 col-lg-5"
          style={{ backgroundColor: 'cyan' }}
        >
          <h1>content</h1>
        </div>
      </div>
    </div>
  );
};

export default Layout;
