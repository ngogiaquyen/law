import React from 'react';
import classNames from "classnames/bind";
import styles from "./FeaturedCases.module.scss";

const cx = classNames.bind(styles);

function FeaturedCases() {
  return (
    <main className={cx('container')}>
      {/* Left box */}
      <section className={cx('left-box')}>
        <h2 className={cx('heading')}>Featured Cases</h2>
        <div className={cx('divider')}>
          <div className={cx('line')}></div>
          <div className={cx('icon')}>
            <i className="fas fa-balance-scale"></i>
          </div>
          <div className={cx('line')}></div>
        </div>
        <p className={cx('description')}>
          Discover how Riesger Law Firm has successfully helped clients recover
          scammed and lost cryptocurrency. Our experienced legal team specializes
          in cryptocurrency recovery, using effective legal strategies to protect your asset
        </p>
        <button className={cx('view-all-button')} type="button">
          View All Cases
        </button>
      </section>

      {/* Top right case */}
      <section className={cx('right-top-case')}>
        <img
          alt="Person handing over euro banknotes to another person outdoors"
          className={cx('case-image')}
          src="https://storage.googleapis.com/a1aa/image/efc5cfe9-6c69-4b10-9892-5ba756e06d99.jpg"
        />
        <h3 className={cx('case-title')}>Family Lawyer</h3>
        <p className={cx('case-subtitle')}>
          From Devastation to Recovery: How Riesger Law Firm Helped Me Reclaim
          $60,000 After a Cryptocurrency Scam
        </p>
        <div className={cx('service-details-link')}>
          <a className={cx('service-link')} href="#">
            <span>Service Details</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* Bottom left case */}
      <section className={cx('bottom-left-case')}>
        <img
          alt="Man with glasses writing notes while looking at laptop in a cafe"
          className={cx('case-image')}
          src="https://storage.googleapis.com/a1aa/image/b42c3b6d-0ba0-4602-90a0-5f0f5123ab01.jpg"
        />
        <h3 className={cx('case-title')}>Frontier dispute</h3>
        <p className={cx('case-subtitle')}>How is Jack’s cryptocurrency investment?</p>
        <div className={cx('service-details-link')}>
          <a className={cx('service-link')} href="#">
            <span>Service Details</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* Bottom right case */}
      <section className={cx('bottom-right-case')}>
        <img
          alt="Man in apron looking stressed and rubbing eyes in workplace"
          className={cx('case-image')}
          src="https://storage.googleapis.com/a1aa/image/e108212d-4603-4520-f6f3-827d8f5c9389.jpg"
        />
        <h3 className={cx('case-title')}>Stock investment case</h3>
        <p className={cx('case-subtitle')}>Riesger Law Firm recovered $126,000 for me</p>
        <div className={cx('service-details-link')}>
          <a className={cx('service-link')} href="#">
            <span>Service Details</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </main>
  );
}

export default FeaturedCases;
