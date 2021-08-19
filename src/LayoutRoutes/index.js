import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LayoutRoutesC from './LayoutRoutesC';

const history = createBrowserHistory();

const LayoutRoutes = () => {
  return (
    <>
      <h1>this is app page</h1>
      <Router history={history}>
        <LayoutRoutesC />
      </Router>
    </>
  );
};

export default LayoutRoutes;
