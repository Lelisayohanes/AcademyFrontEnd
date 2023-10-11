import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  IoNotificationsOutline,
  IoChatboxEllipsesOutline,
  IoMenuSharp,
  IoArrowBackSharp,
  IoWoman,
  IoLogOutOutline,
  IoPersonCircleOutline,
  IoSettingsOutline,
  IoChevronDownSharp, // Import the ChevronDownSharp icon
} from 'react-icons/io5';
import Menu from './Menu';

function InnerHeader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <div className='flex w-100 flex-row grow gap-[1em]   '>
      <div className="bg-white shadow-md p-4 grow">
        <div className='flex justify-between  mx-auto'>
          <div className='flex justify-center items-center text-[2rem] '>
            <button className='md:hidden' onClick={openModal}><IoMenuSharp /></button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              className="bg-[#1C2434] text-[#DBE1EB] max-w-[18rem] h-full md:hidden"
              style={{ zIndex: 100 }}
            >
              <div>
              <div className='text-[1.8rem] pt-4 flex m-[1em] mt-[0] items-cebter '><IoWoman />HAcedamy</div>
              <Menu />
              </div>
             
            </Modal>
          </div>
          <div className='flex gap-[1rem] items-center '>
            <div className=' h-[2.5rem] w-[2.5rem] rounded-[50%] bg-[#EFF4FB] flex justify-center items-center text-[2rem] p-[8px] text-[#707F95]'>
              <IoNotificationsOutline />
            </div>
            <div className=' h-[2.5rem] w-[2.5rem] rounded-[50%] bg-[#EFF4FB] flex justify-center items-center text-[2rem] p-[8px] text-[#707F95]'>
              <IoChatboxEllipsesOutline />
            </div>
            <div className='relative'>
              <button
                className='flex flex-row items-center'
                onClick={toggleUserMenu}
              >
                <img
                  className="h-[3rem] w-[3rem] rounded-[50%] ml-[1em] z-20"
                  src="../../src/assets/images/user/user-01.png"
                  alt="User Image"
                />
                <IoChevronDownSharp className='text-[1.4em] lg:mr-[1em]'/>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-[1rem] w-[15rem] bg-white border border-gray-300 shadow-md ">
                  <div className="p-2">
                    <h3>John Doe</h3>
                  </div>
                  <ul className="divide-y divide-gray-300 ">
                    <li>
                      <a
                        className="block px-4 py-2 text-[1.2rem] text-blue-500 hover:underline flex items-center"
                        href='/profile'
                      >
                        <IoPersonCircleOutline className='inline-block text-2xl mr-2' />
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-4 py-2 text-[1.2rem] text-blue-500 hover:underline flex items-center"
                        href='/accountsetting'
                      >
                        <IoSettingsOutline className='inline-block text-xl mr-2' />
                        Account Settings
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-4 py-2 text-[1.2rem] text-red-500 hover:underline flex items-center"
                        href='/login'
                      >
                        <IoLogOutOutline className='inline-block text-xl mr-2' />
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnerHeader;
