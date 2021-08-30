import { Link } from 'react-router-dom';
import { Menu as MenuIcon, AlertOctagon } from 'react-feather';
import Logo from 'src/logo.svg';
import Search from './Search';
import Modal from 'src/components/Modal';
import { useState } from 'react';

const TopBar = ({ onMobileNavOpen }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

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
      <div className='flex items-center space-x-2'>
        <Search />
        <div
          className='flex flex-col cursor-pointer justify-center items-center'
          onClick={handleOpenModal}
        >
          <AlertOctagon />
          <h2>Modal</h2>
        </div>
        <Modal show={openModal} handleShow={setOpenModal}>
          <h1>hello</h1>
        </Modal>
      </div>
    </div>
  );
};

export default TopBar;
