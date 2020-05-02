import { RouteConfig } from 'react-router-config';
import Fetch from './Fetch';
import Summary from './Summary';

const routes: RouteConfig[] = [
  {
    path: '/fetch',
    component: Fetch,
  },
  {
    path: '/',
    component: Summary,
  },
];

export default routes;
