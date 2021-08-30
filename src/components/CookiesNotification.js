import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import ReactDOM from 'react-dom';

const CookiesNotification = () => {
  const [open, setOpen] = useState(false);
  // portal modal-root element. always exist in index.html.
  // This el is used to append modal content in modal portal
  const portalEl = document.getElementById('cookies-notifi');

  const handleClose = () => {
    Cookies.set('consent', 'true');
    setOpen(false);
  };

  useEffect(() => {
    const consent = Cookies.get('consent');

    if (!consent) {
      setOpen(true);
    }
  }, []);

  if (!open) {
    return null;
  }

  return open
    ? ReactDOM.createPortal(
        <div className='bg-gray-500 max-w-[600px] p-3 left-0 bottom-0 fixed outline-none z-50'>
          <div className='flex flex-col'>
            <p className='text-white pb-2'>
              We use Cookies to ensure that we give you the best experience on
              our website. Read our <a href='#!'>Privacy Policy.</a>{' '}
            </p>
            <button
              onClick={handleClose}
              className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            >
              AGREE
            </button>
          </div>
        </div>,
        portalEl
      )
    : ReactDOM.createPortal('', portalEl);
};

export default React.memo(CookiesNotification);
