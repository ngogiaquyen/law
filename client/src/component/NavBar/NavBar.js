import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import routes from '~/configs';

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
  return (
    <nav className={cx('navbar')}>
      <div className={cx('logo')}>
        RIESGER
      </div>
      <ul className={cx('nav-links')}>
        {navs.map((nav, index) => (
          <li key={index}>
            <NavLink
              to={nav.to}
              activeClassName={cx('active')}
              className={cx('link')}
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className={cx('consult-button')}>
        <i className="fas fa-comment-alt"></i>
        <span>Free Consultation</span>
      </button>
    </nav>
  );
}

export default NavBar;
