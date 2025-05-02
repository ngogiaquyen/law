import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('container')}>
        <div className={cx('top-section')}>
          <div className={cx('brand')}>
            <h2 className={cx('brand-title')}>RIESGER</h2>
            <p className={cx('brand-description')}>
              Experienced, skilled, knowledgeable, adept, compassionate.
            </p>
          </div>
          <div className={cx('newsletter')}>
            <h3 className={cx('newsletter-title')}>Subscribe Our Newsletter</h3>
            <form className={cx('newsletter-form')} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email"
                className={cx('newsletter-input')}
                required
                aria-label="Email"
              />
              <button type="submit" className={cx('newsletter-button')}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={cx('bottom-section')}>
        <div className={cx('column')}>
          <h4 className={cx('column-title')}>Menu</h4>
          <ul className={cx('column-list')}>
            <li>About</li>
            <li>Team</li>
            <li>Practice area</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={cx('column')}>
          <h4 className={cx('column-title')}>Useful Links</h4>
          <ul className={cx('column-list')}>
            <li>Case</li>
          </ul>
        </div>
        <div className={cx('column')}>
          <h4 className={cx('column-title')}>Follow Us</h4>
          <ul className={cx('column-list')}>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className={cx('column')}>
          <h4 className={cx('column-title')}>Contact Us</h4>
          <div className={cx('contact-item')}>
            <div className={cx('contact-icon')}>
              <i className="fas fa-envelope"></i>
            </div>
            <div className={cx('contact-details')}>
              <p>Email</p>
              <p>riesger@riesgerlegal.com</p>
            </div>
          </div>
          <div className={cx('contact-item')}>
            <div className={cx('contact-icon')}>
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className={cx('contact-details')}>
              <p>Phone</p>
              <p className={cx('phone-number')}>+1(646)2457677</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
