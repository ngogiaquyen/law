import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
import NavBar from '~/component/NavBar';
import Footer from '~/component/Footer';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
  return (
    <div className={cx('wrapper')}>
      <NavBar />
      <div className={cx('container')}>{children}</div>
      <Footer />
    </div>
  );
}

export default HeaderOnly;
