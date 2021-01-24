import { FC } from 'react';
import { Title } from 'components';
import { BackHeaderSvg } from 'assets/svg';
import styles from './Header.module.scss';

type IProps = {
  step: number;
  maxStep: number;
  title: string;
  secondTitle: string;
  textDescription: string;
  onBack: () => void;
};

const Header: FC<IProps> = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className="row">
          <div className="col-11 col-lg-6">
            <div className={styles.steps}>
              <img
                className="mr-3"
                src={BackHeaderSvg}
                style={{ cursor: 'pointer' }}
                alt="back"
                onClick={props.onBack}
              />
              <span className={styles.stepText}>PASO</span>
              <span className={styles.stepNumber}>{props.step}</span>
              <span className="mt-auto mb-auto">DE&nbsp; {props.maxStep}</span>
            </div>
            <Title
              text={props.title}
              secondText={props.secondTitle}
              description={props.textDescription}
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center m-0 mt-5">
        <div className="col-11 col-lg-6">{props.children}</div>
      </div>
    </>
  );
};

export default Header;
