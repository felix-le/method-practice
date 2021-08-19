import { lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { PrivateLayout, PublicLayout } from './Layouts';
// import { useHistory } from 'react-router-dom';
import HomePage from '../Pages/HomePage';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) =>
        route.layout ? (
          <route.layout>
            <route.component {...props} routes={route.routes} />
          </route.layout>
        ) : (
          <route.component {...props} routes={route.routes} />
        )
      }
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={i} {...route} />;
      })}
      <Route component={() => <Redirect to='/404' />} />
    </Switch>
  );
}
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
    path: '/pub',
    layout: PublicLayout,
    component: RenderRoutes,
    routes: [
      {
        exact: true,
        path: '/pub',
        component: () => <Redirect to='/pub/login' />,
      },
      {
        exact: true,
        path: '/pub/login',
        component: lazy(() => import('../Pages/LoginPage')),
      },
      {
        exact: true,
        path: '/pub/register',
        component: lazy(() => import('../Pages/AccountPage')),
      },
    ],
  },
  {
    path: '/app',
    layout: PrivateLayout,
    component: RenderRoutes,
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
        component: lazy(() => import('../Pages/AccountPage')),
      },
    ],
  },
  {
    path: '*',
    layout: PublicLayout,
    component: RenderRoutes,
    routes: [
      {
        exact: true,
        path: '/home',
        component: HomePage,
      },
    ],
  },
];

function LayoutRoutesC() {
  // let history = useHistory();
  // console.log('🚀 ~ LayoutRoutesC ~ history', history);
  return <RenderRoutes routes={layoutRoutesConfig} />;
}

export default LayoutRoutesC;
