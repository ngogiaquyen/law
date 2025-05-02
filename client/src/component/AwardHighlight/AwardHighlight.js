import classNames from 'classnames/bind';
import styles from './AwardHighlight.module.scss';

const cx = classNames.bind(styles);

function AwardHighlight() {
  return (
    <div className={cx('container')}>
      <header className={cx('header')}>
        <nav className={cx('nav')}>
          <ul className={cx('navList')}>
            <li className={cx('logo', 'disabled')}>
              <img
                src="https://storage.googleapis.com/a1aa/image/ad46fe04-67bb-4d03-2a2f-0c40392ddb08.jpg"
                alt="G logo icon in gray"
                className={cx('icon')}
              />
              <span>Gutama™</span>
            </li>
            <li className={cx('logo', 'active')}>
              <img
                src="https://storage.googleapis.com/a1aa/image/5b958f2a-11aa-4faf-02cb-65bb34d46beb.jpg"
                alt="Butterfly logo icon in black"
                className={cx('icon')}
              />
              <span>Butterfly</span>
            </li>
            <li className={cx('logo', 'disabled')}>
              <img
                src="https://storage.googleapis.com/a1aa/image/7b765141-df8b-4d02-4e7c-df9ac0f507d7.jpg"
                alt="TheWritern logo icon in gray"
                className={cx('icon')}
              />
              <span>TheWritern</span>
            </li>
            <li className={cx('logo', 'disabled')}>
              <img
                src="https://storage.googleapis.com/a1aa/image/1a7a0b2f-9f52-4e10-6a3c-cd1eebc1a9bd.jpg"
                alt="Confins logo icon in gray"
                className={cx('icon')}
              />
              <span>Confins</span>
            </li>
            <li className={cx('logo', 'disabled')}>
              <img
                src="https://storage.googleapis.com/a1aa/image/4f2a5857-9c42-4df0-6028-0f56750807b2.jpg"
                alt="Globaltech logo icon in gray"
                className={cx('icon')}
              />
              <span>Globaltech™</span>
            </li>
            <li className={cx('logo', 'disabled')}>
              <img
                src="https://storage.googleapis.com/a1aa/image/8b2757dd-ffe3-4b7a-85c3-0e4fb8e06ac1.jpg"
                alt="Polyhexagon logo icon in gray"
                className={cx('icon')}
              />
              <span>Polyhexagon</span>
            </li>
          </ul>
        </nav>
      </header>

      <main className={cx('main')}>
        <div className={cx('content')}>
          <section className={cx('left')}>
            <h1>No. 2 on the 2024 A-List</h1>
            <p>
              Riesger Law Firm was ranked #2 on The American Lawyer’s A List, marking our eighth consecutive time in the
              top three on this prestigious list.
            </p>
          </section>
          <section className={cx('right')}>
            We feel the helplessness of those who have been scammed. Some people have had their life’s wealth taken away
            by scammers. That’s why we must take action and do something for the vulnerable. I hope you will see the
            information and contact us, Riesger is the team that really solves this problem
          </section>
        </div>
      </main>
    </div>
  );
}

export default AwardHighlight;
