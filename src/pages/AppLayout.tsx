import { Suspense } from 'react';
import SwitchRouter from './SwitchRouter';
import { authRoutes } from './routes';

const AppLayout = () => (
  <Suspense>
    <SwitchRouter routes={authRoutes} />
  </Suspense>
);

export default AppLayout;
