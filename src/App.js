// import LayoutRoutes from './LayoutRoutes';
import { BrowserRouter } from 'react-router-dom';
import LayoutRoutesC from './LayoutRoutes/LayoutRoutesC';

function App() {
  return (
    <div className='main mt-3'>
      <div className='max-w-screen-xl mx-auto my-2'>
        <h1 className='text-gray-500'>this is home screen</h1>
        <BrowserRouter>
          <LayoutRoutesC />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
