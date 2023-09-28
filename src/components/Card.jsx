import React from 'react';
import { IoEyeOutline,IoArrowUpSharp } from "react-icons/io5";

function Card() {
  return (
    <div className="bg-white m-[1em] shadow-md py-4 px-8 flex flex-col justify-between">
      <div>
        <div className='flex bg-[#EFF2F7] h-[2em] w-[2em] text-[1.5rem] mb-[0.5em] text-[#3C50E0] justify-center items-center rounded-[50%] '><IoEyeOutline/></div>
        <div className='text-[1.75rem] font-bold' >$ 3,145K</div>
      </div>
      <div className='flex justify-between text-[1rem]'>
        <div className='text-gray-400'>Total Views</div>
        <div className='text-green-500 flex items-center gap-[0.5em]'> 0.14%  <IoArrowUpSharp/></div>
      </div>
    </div>
  );
}

export default Card;
