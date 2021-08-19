// import LayoutRoutes from './LayoutRoutes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LayoutRoutesC from './LayoutRoutes/LayoutRoutesC';
const history = createBrowserHistory();
function App() {
  return (
    <div className='main'>
      <div className='max-w-md mx-auto my-0'>
        <h1>this is home screen</h1>
        <Router history={history}>
          <LayoutRoutesC />
        </Router>
      </div>
    </div>
  );
}

export default App;
