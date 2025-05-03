import classNames from 'classnames/bind';
import styles from './ContactPage.module.scss';
import ContactLegalForm from '~/component/ContactLegalForm/ContactLegalForm';
import FaqSection from '~/component/FaqSection/FaqSection';
import MapWithInfoBox from '~/component/MapWithInfoBox/MapWithInfoBox';

const cx = classNames.bind(styles);

function ContactPage() {
  return (
    <div className={cx('wrapper')}>
        <ContactLegalForm/>
        <FaqSection/>
        <MapWithInfoBox/>
    </div>
  );
}

export default ContactPage;
