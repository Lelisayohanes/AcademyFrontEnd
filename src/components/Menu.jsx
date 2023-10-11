import React, { useState } from 'react';
import { GiTeacher } from "react-icons/gi";
import { PiStudentLight, PiSquaresFourDuotone } from "react-icons/pi";
import { IoSettingsOutline, IoHelpCircleOutline, IoAlbums, IoChevronDownSharp, IoBookOutline } from "react-icons/io5";
import { BsCalendar2Event } from "react-icons/bs"; 
import { FaRegCircleUser } from "react-icons/fa6";
function Menu() {
  const [showPortfolioItems, setShowPortfolioItems] = useState(false);
  const [showScheduleItems, setShowScheduleItems] = useState(false);

  return (
    <div className='m-[1.5rem] rounded-r-2xl'>
      <div className='flex flex-col gap-[1em]'>
        <a className='flex text-[1.4rem] gap-[0.5em] items-center' href='/'><PiSquaresFourDuotone />Dashboard</a>
        <a className='flex text-[1.4rem] gap-[0.5em] items-center' href='/courses' ><IoBookOutline />Courses</a>
        <a className='flex text-[1.4rem] gap-[0.5em] items-center' href='/users' ><FaRegCircleUser />Users</a>
        <a className='flex text-[1.4rem] gap-[0.5em] items-center' href='/students' ><PiStudentLight />Students</a>
        <a className='flex text-[1.4rem] gap-[0.5em] items-center' href='/teachers'><GiTeacher />Instructors</a>

        {/* Portfolio */}
        <a
          className='flex text-[1.4rem] gap-[0.5em] items-center cursor-pointer'
          onClick={() => setShowPortfolioItems(!showPortfolioItems)}
        >
          <IoAlbums />Portfolio <IoChevronDownSharp />
        </a>
        {showPortfolioItems && (
          <>
            <a className='flex text-[1.2rem] gap-[0.5em] items-center ml-4'>Student Portifolio</a>
            <a className='flex text-[1.2rem] gap-[0.5em] items-center ml-4'>Instructor Portifolio</a>
          </>
        )}

        {/* Schedules */}
        <a
          className='flex text-[1.4rem] gap-[0.5em] items-center cursor-pointer'
          onClick={() => setShowScheduleItems(!showScheduleItems)}
        >
          <BsCalendar2Event />Schedules <IoChevronDownSharp />
        </a>
        {showScheduleItems && (
          <>
            <a className='flex text-[1.2rem] gap-[0.5em] items-center ml-4'>Class Schedule</a>
            <a className='flex text-[1.2rem] gap-[0.5em] items-center ml-4'>Big Events</a>
            <a className='flex text-[1.2rem] gap-[0.5em] items-center ml-4'>Partner Show</a>
          </>
        )}

        <a className='flex text-[1.4rem] gap-[0.5em] items-center'><IoSettingsOutline />Setting</a>
        <a className='flex text-[1.4rem] gap-[0.5em] items-center'><IoHelpCircleOutline />Help</a>
      </div>
    </div>
  );
}

export default Menu;