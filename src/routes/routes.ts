import { RouteConfig } from 'react-router-config';
import Summary from './Summary';
import BreedList from './Fetch/BreedList';
import BreedImages from './Fetch/BreedImages';

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Summary,
  },
  {
    path: '/fetch-breed/teste',
    component: BreedImages,
  },
  {
    path: '/fetch-breed',
    component: BreedList,
  },
];

export default routes;
