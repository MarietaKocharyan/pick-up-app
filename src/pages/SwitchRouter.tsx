import { LazyExoticComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';

type RouteParams = {
  component: LazyExoticComponent<any> /* eslint-disable @typescript-eslint/no-explicit-any */;
  path?: string;
  isPrivate: boolean;
};

interface SwitchRouter {
  routes?: RouteParams[];
}

const renderRoute = (route: RouteParams, index: number): JSX.Element => {
  const { isPrivate, path, component: Component } = route;
  const element = isPrivate ? <PrivateRoute component={Component} /> : <Component />;
  return <Route key={index} path={path} element={element} />;
};

const SwitchRouter = ({ routes }: SwitchRouter): JSX.Element => (
  <Routes>{routes?.map(renderRoute)}</Routes>
);

export default SwitchRouter;
