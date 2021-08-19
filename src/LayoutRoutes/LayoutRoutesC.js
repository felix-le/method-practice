import { lazy, Fragment } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { PrivateLayout, PublicLayout } from './Layouts';

import AccountPage from '../Pages/AccountPage';
import Dashboard from '../Pages/Dashboard';
import RegisterPage from '../Pages/RegisterPage';

const layoutRoutesConfig = [
  {
    exact: true,
    path: '/layoutroutes',
    component: () => <Redirect to='/layoutroutes/public/login' />,
  },
  {
    exact: true,
    path: '/layoutroutes/public',
    layout: PublicLayout,
    routes: [
      {
        exact: true,
        path: '/layoutroutes/public',
        component: () => <Redirect to='/layoutroutes/public/login' />,
      },
      {
        exact: true,
        path: '/layoutroutes/public/login',
        component: lazy(() => import('../Pages/LoginPage')),
      },
      {
        exact: true,
        path: '/layoutroutes/public/register',
        component: <RegisterPage />,
      },
    ],
  },
  {
    exact: true,
    path: '/layoutroutes/app',
    layout: PrivateLayout,
    routes: [
      {
        exact: true,
        path: '/layoutroutes/app',
        component: () => <Redirect to='/layoutroutes/app/dashboard' />,
      },
      {
        exact: true,
        path: '/layoutroutes/app/dashboard',
        component: () => <Dashboard />,
      },
      {
        exact: true,
        path: '/layoutroutes/app/account',
        component: () => <AccountPage />,
      },
    ],
  },
];

const renderRoutes = (routes) =>
  routes ? (
    <Switch>
      {routes.map((route, index) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Layout>
                {route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )}
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  ) : null;

function LayoutRoutesC() {
  return renderRoutes(layoutRoutesConfig);
}

export default LayoutRoutesC;
