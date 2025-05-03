import classNames from 'classnames/bind';
import styles from './CasePage.module.scss';
import CaseBaner from '~/component/CaseBaner';
import LawServices from '~/component/LawServices';
import TetherCase from '~/component/TetherCase/TetherCase';

const cx = classNames.bind(styles);

function CasePage() {
  return (
    <div className={cx('wrapper')}>
      <CaseBaner/>
      <LawServices/>
      <TetherCase/>
    </div>
  );
}

export default CasePage;
