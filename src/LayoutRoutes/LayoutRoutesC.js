import { lazy, Fragment, Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { PrivateLayout, PublicLayout } from "./Layouts";

import LoadingPage from "../Pages/LoadingPage";

import HomePage from "../Pages/HomePage";

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
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route path="/404" component={lazy(() => import("../Pages/Page404"))} />
      <Redirect to="/404" />
    </Switch>
  );
}
const layoutRoutesConfig = [
  {
    exact: true,
    path: "/",
    component: () => <Redirect to="/home" />,
  },
  {
    path: "/layoutroutes",
    layout: PublicLayout,
    component: RenderRoutes,
    routes: [
      {
        exact: true,
        path: "/layoutroutes/public",
        component: () => <Redirect to="/layoutroutes/public/login" />,
      },
      {
        exact: true,
        path: "/layoutroutes/public/login",
        component: lazy(() => import("../Pages/LoginPage")),
      },
      {
        exact: true,
        path: "/layoutroutes/public/register",
        component: lazy(() => import("../Pages/AccountPage")),
      },
    ],
  },
  {
    path: "/app",
    layout: PrivateLayout,
    component: RenderRoutes,
    routes: [
      {
        exact: true,
        path: "/app",
        component: () => <Redirect to="/app/dashboard" />,
      },
      {
        exact: true,
        path: "/app/dashboard",
        component: lazy(() => import("../Pages/Dashboard")),
      },
      {
        exact: true,
        path: "/app/account",
        component: lazy(() => import("../Pages/AccountPage")),
      },
    ],
  },
  {
    path: "*",
    layout: PublicLayout,
    component: RenderRoutes,
    routes: [
      {
        exact: true,
        path: "/home",
        component: HomePage,
      },
    ],
  },
];

// const renderRoutes = (routes) =>
//   routes ? (
//     <Suspense fallback={<LoadingPage />}>
//       <Switch>
//         {routes.map((route, index) => {
//           const Guard = route.guard || Fragment;
//           const Layout = route.layout || Fragment;
//           const Component = route.component;

//           return (
//             {RouteWithSubRoutes(route)}
//           );
//         })}
//       </Switch>
//     </Suspense>
//   ) : null;

function LayoutRoutesC() {
  return <RenderRoutes routes={layoutRoutesConfig} />;
}

export default LayoutRoutesC;
