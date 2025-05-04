import classNames from 'classnames/bind';
import styles from './AwardHighlight.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function AwardHighlight() {
  return (
    <div className={cx('container')}>
      <header className={cx('header')}>
        <nav className={cx('nav')}>
          <ul className={cx('navList')}>
            <li className={cx('logo', 'disabled')}>
              <img
                src={images.slideImgTemp}
                alt="G logo icon in gray"
                className={cx('img')}
              />
            </li>
            <li className={cx('logo', 'disabled')}>
              <img
                src={images.slideImgTemp}
                alt="G logo img in gray"
                className={cx('img')}
              />
            </li>
            <li className={cx('logo', 'disabled')}>
              <img
                src={images.slideImgTemp}
                alt="G logo img in gray"
                className={cx('img')}
              />
            </li>
            <li className={cx('logo', 'disabled')}>
              <img
                src={images.slideImgTemp}
                alt="G logo img in gray"
                className={cx('img')}
              />
            </li>
            <li className={cx('logo', 'disabled')}>
              <img
                src={images.slideImgTemp}
                alt="G logo img in gray"
                className={cx('img')}
              />
            </li>
            <li className={cx('logo', 'disabled')}>
              <img
                src={images.slideImgTemp}
                alt="G logo img in gray"
                className={cx('img')}
              />
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
