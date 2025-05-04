import React from 'react';
import classNames from 'classnames/bind';
import styles from './Testimonial.module.scss';

const cx = classNames.bind(styles);

function Testimonial() {
  return (
    <section className={cx('section')}>
      <h2 className={cx('title')}>What Client Say About Us</h2>
      <p className={cx('text')}>
        "In June 2023, I was induced to invest in cryptocurrency by a manager who claimed to be a cryptocurrency
        company. I was defrauded of $200,000 USDT and the company almost went bankrupt. Later, I met Riesger by chance
        and told them about my experience. Finally, Riesger went through various legal channels and efforts. What I want
        to say is, thank you Riesger, you are one of the greatest companies."
      </p>
      <img
        alt="Portrait of a middle-aged man with short gray hair and beard wearing a brown jacket and black shirt"
        className={cx('img')}
        src="https://storage.googleapis.com/a1aa/image/22ae83b7-c975-476e-19d3-ead1f6254ebb.jpg"
      />
      <p className={cx('name')}>John Brown</p>
      <p className={cx('role')}>Founder Classy</p>
      <div className={cx('indicators')}>
        <span className={cx('indicator-active')}></span>
        <span className={cx('indicator-inactive')}></span>
      </div>
    </section>
  );
}

export default Testimonial;
