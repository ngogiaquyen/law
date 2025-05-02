import routes from '~/configs';
import Home from '../page/Home';
import HeaderOnly from '~/Layouts/HeaderOnly';

export const publicRouters = [
  {
    component: Home,
    path: routes.home,
    layout: HeaderOnly,
  }
];

export const privateRouters = [];
