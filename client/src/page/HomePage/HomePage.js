import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import HeroSection from '~/component/HeroSection/HeroSection';
import AwardHighlight from '~/component/AwardHighlight/AwardHighlight';
import FirmIntro from '~/component/FirmIntro/FirmIntro';
import StatsSection from '~/component/StatsSection';
import PracticeAreas from '~/component/PracticeAreas';
import Testimonial from '~/component/Testimonial';
import ContactUs from '~/component/ContactUs';
import FeaturedCases from '~/component/FeaturedCases';
import ExperiencedLawyers from '~/component/ExperiencedLawyers';

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx('wrapper')}>
      <HeroSection />
      <AwardHighlight />
      <FirmIntro />
      <StatsSection />
      <PracticeAreas />
      <Testimonial />
      <ContactUs/>
      <FeaturedCases/>
      <ExperiencedLawyers/>
    </div>
  );
}

export default HomePage;
