import React from 'react';
import InnerHeader from '../components/InnerHeader';
import DesktopMenu from '../components/DesktopMenu';
import Student from '../components/Student';
import User from '../components/User';

function UserPage() {
  const courses = [
    // Define your course data here
  ];

  return (
    <div className='flex'>
      <div className='bg-[#1C2434] fixed top-0 left-0 w-[18rem] hidden md:flex h-screen overflow-y-auto z-10'>
        <DesktopMenu />
      </div>
      <div className='md:ml-64 w-[100%] relative  '>
        <div className='fixed top-0 left-0 w-full z-0' >
          <InnerHeader />
        </div>
        <div className='ml-[1em] mt-20 overflow-y-auto h-screen bg-blue-500 pt-4 pl-4'>
          <User/>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
