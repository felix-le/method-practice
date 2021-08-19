import { lazy, Fragment, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { PrivateLayout, PublicLayout } from './Layouts';

import LoadingPage from '../Pages/LoadingPage';

import HomePage from '../Pages/HomePage';
const layoutRoutesConfig = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to='/home' />,
  },
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('../Pages/Page404')),
  },
  {
    path: '/layoutroutes',
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
        component: lazy(() => import('../Pages/AccountPage')),
      },
      {
        component: () => <Redirect to='/404' />,
      },
    ],
  },
  {
    path: '/app',
    layout: PrivateLayout,
    routes: [
      {
        exact: true,
        path: '/app',
        component: () => <Redirect to='/app/dashboard' />,
      },
      {
        exact: true,
        path: '/app/dashboard',
        component: lazy(() => import('../Pages/Dashboard')),
      },
      {
        exact: true,
        path: '/app/account',
        component: lazy(() => import('../Pages/Dashboard')),
      },
      {
        component: () => <Redirect to='/404' />,
      },
    ],
  },
  {
    path: '*',
    layout: PublicLayout,
    routes: [
      {
        exact: true,
        path: '/home',
        component: HomePage,
      },
      {
        component: () => <Redirect to='/404' />,
      },
    ],
  },
];

const renderRoutes = (routes) =>
  routes ? (
    <Suspense fallback={<LoadingPage />}>
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
    </Suspense>
  ) : null;

function LayoutRoutesC() {
  return renderRoutes(layoutRoutesConfig);
}

export default LayoutRoutesC;
