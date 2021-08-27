import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from 'react-feather';
import Logo from '../../../../logo.svg';
import Search from './Search';
const TopBar = ({ onMobileNavOpen }) => {
  return (
    <div className='bg-indigo-300 px-2 flex justify-between'>
      <div className='' style={{ minHeight: '60px' }}>
        <div
          className='lg:hidden flex items-center '
          style={{ height: '64px' }}
        >
          <MenuIcon className='cursor-pointer' onClick={onMobileNavOpen} />
        </div>
        <div className='hidden lg:flex items-center'>
          <Link to='/'>
            <img src={Logo} alt='Logo' className='w-24' />
          </Link>
        </div>
      </div>
      <div className='flex items-center'>
        <Search />
      </div>
    </div>
  );
};

export default TopBar;
