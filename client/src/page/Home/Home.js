import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HeroSection from '~/component/HeroSection/HeroSection';
import AwardHighlight from '~/component/AwardHighlight/AwardHighlight';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('homepage')}>
      <HeroSection />
      <AwardHighlight />
    </div>
  );
}

export default Home;
