// import LayoutRoutes from './LayoutRoutes';
import { BrowserRouter } from 'react-router-dom';
import LayoutRoutesC from './LayoutRoutes/LayoutRoutesC';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className='max-w-full min-h-screen'>
      <BrowserRouter>
        <LayoutRoutesC />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
