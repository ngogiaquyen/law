import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
import NavBar from '~/component/NavBar';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {

  return (
    <div className={cx('wrapper')}>
      <NavBar />
      <div className={cx('container')}>{children}</div>
    </div>
  );
}

export default HeaderOnly;
