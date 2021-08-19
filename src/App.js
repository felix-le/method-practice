// import LayoutRoutes from './LayoutRoutes';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LayoutRoutesC from './LayoutRoutes/LayoutRoutesC';
const history = createBrowserHistory();
function App() {
  return (
    <div className='main'>
      <div className='max-w-md mx-auto my-0'>
        <h1>this is home screen</h1>
        <BrowserRouter>
          <LayoutRoutesC />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
