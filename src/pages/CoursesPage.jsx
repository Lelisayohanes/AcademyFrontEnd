import React from 'react';
import InnerHeader from '../components/InnerHeader';
import Courses from '../components/Courses';
import DesktopMenu from '../components/DesktopMenu';

function CoursesPage() {
  const courses = [
    // Define your course data here
  ];

  return (
    <div className='flex'>
      <div className='fixed top-0 left-0 w-64 h-screen overflow-y-auto z-10'>
        <DesktopMenu />
      </div>
      <div className='ml-64 relative'>
        <div className='fixed top-0 left-0 w-full z-0'>
          <InnerHeader />
        </div>
        <div className='ml-[1em] mt-20 overflow-y-auto h-screen bg-blue-500'>
          <Courses />
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
