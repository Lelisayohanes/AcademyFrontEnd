import React from 'react';
import InnerHeader from '../components/InnerHeader';
import DesktopMenu from '../components/DesktopMenu';

function TeacherPage() {
  return (
    <div className='my-4'>
      <div>
        <div className='flex h-screen md:gap-[1em]'>
          <div className='bg-blue-500 h-full'>
            <DesktopMenu />
          </div>
          <div className='flex flex-col w-full gap-[1em] mx-0'>
            <InnerHeader  />
            <div className='bg-red-500 h-full'>Teacher</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherPage;
