import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContactUs.module.scss';

const cx = classNames.bind(styles);

function ContactUs() {
  return (
    <div className={cx('container')}>
      <img
        alt="Handshake between two people in a law office with legal books and scales of justice in background"
        className={cx('background-img')}
        src="https://storage.googleapis.com/a1aa/image/b7665968-2146-422b-158c-e5735792d318.jpg"
      />
      <div className={cx('content-left')}>
        <h1 className={cx('title')}>
          Please contact us
          <br />
          as soon as possible
        </h1>
        <p className={cx('description')}>
          If you are trying to recover your scammed cryptocurrency, please contact us as soon as possible. Don’t be
          discouraged or hesitant. We will accompany you on the road ahead.
        </p>
        <div className={cx('contact-info')}>
          <div className={cx('info-item')}>
            <div className={cx('icon-container')}>
              <i className="fas fa-mobile-alt text-lg"></i>
            </div>
            <div>
              <p className={cx('info-label')}>Our Phone</p>
              <p className={cx('info-text')}>+1(646)2457677</p>
            </div>
          </div>
          <div className={cx('info-item')}>
            <div className={cx('icon-container')}>
              <i className="fas fa-envelope text-lg"></i>
            </div>
            <div>
              <p className={cx('info-label')}>Email</p>
              <p className={cx('info-text')}>riesger@riesgerlegal.com</p>
            </div>
          </div>
          <div className={cx('info-item')}>
            <div className={cx('icon-container')}>
              <i className="fas fa-history text-lg"></i>
            </div>
            <div>
              <p className={cx('info-label')}>Office hour</p>
              <p className={cx('info-text')}>9AM - 5PM</p>
            </div>
          </div>
        </div>
        <button className={cx('consultation-btn')}>Online Consultation</button>
      </div>
      <form className={cx('form-right')}>
        <input className={cx('input-field')} placeholder="Name*" type="text" />
        <input className={cx('input-field')} placeholder="Email*" type="email" />
        <div className={cx('input-group')}>
          <input className={cx('input-field-half')} placeholder="Phone*" type="tel" />
          <input className={cx('input-field-half')} placeholder="WhatsApp" type="text" />
        </div>
        <input className={cx('input-field')} placeholder="Address*" type="text" />
        <textarea className={cx('textarea')} placeholder="Case description*" rows="5"></textarea>
        <button className={cx('submit-btn')} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
