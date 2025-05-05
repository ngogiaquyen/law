import React from 'react';
import classNames from 'classnames/bind';
import styles from './PracticeAreas.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faBalanceScale, faBriefcase, faGavel, faMoneyBill1Wave, faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PracticeAreas() {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>Law Services - Practice Areas</h2>
      <div className={cx('grid')}>
        <div className={cx('item')}>
          <FontAwesomeIcon className={cx('icon')} icon={faFileAlt} />
          <h3 className={cx('heading')}>Criminal Law</h3>
          <p className={cx('description')}>Everything will be alright; it is not that bad.</p>
          <a href="#" className={cx('link')}>
            Learn More
          </a>
        </div>
        <div className={cx('item')}>
          <FontAwesomeIcon className={cx('icon')} icon={faBalanceScale} />
          <h3 className={cx('heading')}>Family Law</h3>
          <p className={cx('description')}>Family is not just important; it means everything.</p>
        </div>
        <div className={cx('item')}>
          <FontAwesomeIcon className={cx('icon')} icon={faSearch} />

          <h3 className={cx('heading')}>Travel Accident</h3>
          <p className={cx('description')}>Life happens to you while you are busy making other plans.</p>
        </div>
        <div className={cx('item')}>
          <FontAwesomeIcon className={cx('icon')} icon={faMoneyBill1Wave} />
          <h3 className={cx('heading')}>Identity Theft</h3>
          <p className={cx('description')}>
            Theft is not just about taking things. It is about taking away the sense of security.
          </p>
        </div>
        <div className={cx('item')}>
          <FontAwesomeIcon className={cx('icon')} icon={faGavel} />
          <h3 className={cx('heading')}>Legal Advice</h3>
          <p className={cx('description')}>
            If you have a legal problem, it is important to seek the help of a qualified attorney.
          </p>
        </div>
        <div className={cx('item')}>
          <FontAwesomeIcon className={cx('icon')} icon={faBriefcase} />
          <h3 className={cx('heading')}>Fraud</h3>
          <p className={cx('description')}>
            Trust is the cornerstone of a market economy and must be protected from fraud.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PracticeAreas;
