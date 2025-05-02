import routes from '~/configs';
import Home from '../page/HomePage';
import HeaderOnly from '~/Layouts/HeaderOnly';
import AboutPage from '~/page/AboutPage/AboutPage';
import TeamPage from '~/page/TeamPage/TeamPage';
import PracticeAeaPage from '~/page/PracticeAeaPage';
import HomePage from '../page/HomePage';
import CasePage from '~/page/CasePage';
import ContactPage from '~/page/ContactPage';

export const publicRouters = [
  {
    component: Home,
    path: routes.home,
    layout: HeaderOnly,
  },
  {
    component: AboutPage,
    path: routes.about,
    layout: HeaderOnly,
  },
  {
    component: TeamPage,
    path: routes.team,
    layout: HeaderOnly,
  },
  {
    component: PracticeAeaPage,
    path: routes.practiceArea,
    layout: HeaderOnly,
  },
  {
    component: CasePage,
    path: routes.Case,
    layout: HeaderOnly,
  },
  {
    component: ContactPage,
    path: routes.Contact,
    layout: HeaderOnly,
  },
];

export const privateRouters = [];
