import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { authStorage } from '../store/storage';
import ROUTES from '../constants/routes';

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const { accessToken } = authStorage.get();

  if (accessToken) return <Component />;
  return <Navigate to={ROUTES.SIGN_IN} />;
};

export default PrivateRoute;
