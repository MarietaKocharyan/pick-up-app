import { lazy } from 'react';
import ROUTES from '../constants/routes';

export const authRoutes = [
  {
    path: ROUTES.SIGN_IN,
    component: lazy(() => import('../pages/Auth/Login/')),
    isPrivate: false,
  },
  {
    path: ROUTES.SIGN_UP,
    component: lazy(() => import('../pages/Auth/Registration/')),
    isPrivate: false,
  },
];
