import { useState } from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar';

const PublicLayout = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  console.log(
    '🚀 ~ file: index.js ~ line 7 ~ PublicLayout ~ isMobileNavOpen',
    isMobileNavOpen
  );

  return (
    <>
      <h1 className='mb-3'>Public Layout</h1>
      <div className='bg-gray-400  h-full overflow-hidden w-full'>
        <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />

        <div className='flex'>
          <div className='hidden lg:flex' style={{ maxWidth: '64px' }}>
            <NavBar
              onMobileClose={() => setMobileNavOpen(false)}
              openMobile={isMobileNavOpen}
            />
          </div>

          <div className='flex flex-grow-one overflow-hidden lg:pl-64'>
            <div className='flex flex-grow-one overflow-hidden'>
              <div className='flex-grow-one h-full overflow-auto'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicLayout;
