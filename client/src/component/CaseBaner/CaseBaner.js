// CasePage.js
import classNames from 'classnames/bind';
import styles from './CaseBaner.module.scss';

const cx = classNames.bind(styles);

function CaseBaner() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('textSection')}>
            <h1 className={cx('title')}>Case</h1>
            <p className={cx('description')}>
              Discover how Riesger Law Firm has successfully helped clients recover scammed and lost cryptocurrency. Our
              experienced legal team specializes in cryptocurrency recovery, using effective legal strategies to protect
              your assets. See real case studies and learn more!
            </p>
            <nav className={cx('breadcrumb')}>
              <a href="#" className={cx('breadcrumbLink')}>
                Home
              </a>
              <span className={cx('separator')}>—</span>
              <span>Case</span>
            </nav>
          </div>
          <div className={cx('imageSection')}>
            <img
              src="https://storage.googleapis.com/a1aa/image/4ae26e75-b60b-4d8f-17b9-95c7e2d45f74.jpg"
              alt="Golden balance scale statue on a dark green background with subtle horizontal lines"
              className={cx('image')}
              width="400"
              height="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseBaner;
