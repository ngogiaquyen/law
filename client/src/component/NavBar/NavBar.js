import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import routes from '~/configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import useScrollDirection from '~/hooks/useScrollDirection';

const cx = classNames.bind(styles);

const navs = [
  {
    to: routes.home,
    title: 'Home',
  },
  {
    to: routes.about,
    title: 'About',
  },
  {
    to: routes.team,
    title: 'Team',
  },
  {
    to: routes.practiceArea,
    title: 'Practice area',
  },
  {
    to: routes.Case,
    title: 'Case',
  },
  {
    to: routes.Contact,
    title: 'Contact',
  },
];

function NavBar() {
  const scrollDirection = useScrollDirection();

  return (
    <nav className={cx('navbar', { show: scrollDirection })}>
      <div className={cx('nav-content')}>
        <div className={cx('logo')}>RIESGER</div>
        <ul className={cx('nav-links')}>
          {navs.map((nav, index) => (
            <li key={index}>
              <NavLink to={nav.to} activeClassName={cx('active')} className={cx('link')}>
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className={cx('consult-button')}>
          <FontAwesomeIcon icon={faMessage} />
          <span>Free Consultation</span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
