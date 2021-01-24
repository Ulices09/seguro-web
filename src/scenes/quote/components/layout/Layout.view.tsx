import { FC } from 'react';
import { LogoSvg, PeopleSvg } from 'assets/svg';
import styles from './Layout.module.scss';
import Header from '../header';

type IProps = {
  step: number;
  maxStep: number;
  title: string;
  secondTitle: string;
  textDescription: string;
  onBack: () => void;
};

const Layout: FC<IProps> = ({
  children,
  step,
  maxStep,
  title,
  secondTitle,
  textDescription,
  onBack,
}) => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.bgWrapper}>
        <div className={styles.background}>
          <img src={PeopleSvg} alt="people" className={styles.people} />
          <span className={styles.backgroundRight}></span>
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
          <div className="col-12 col-lg-5 " />
          <div className={`col-12 col-lg-7 px-0 ${styles.content}`}>
            <Header
              step={step}
              maxStep={maxStep}
              title={title}
              secondTitle={secondTitle}
              textDescription={textDescription}
              onBack={onBack}
            />
            <div style={{ padding: '0 15px' }}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
