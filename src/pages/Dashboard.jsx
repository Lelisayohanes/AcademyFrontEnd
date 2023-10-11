import React from 'react'

import Cards from '../components/Cards'
import Chat from '../components/Chat'
import InnerHeader from '../components/InnerHeader'
import DesktopMenu from '../components/DesktopMenu'
import StaffStatics from '../components/StaffStatics'

function Dashboard() {
  return (

    <div className='flex'>
      <div className='bg-[#1C2434] fixed top-0 left-0 w-[18rem] hidden md:flex h-screen overflow-y-auto z-10'>
        <DesktopMenu />
      </div>
      <div className='md:ml-64 w-[100%] relative  '>
        <div className='fixed top-0 left-0 w-full z-0' >
          <InnerHeader />
        </div>
        <div className='md:ml-[2rem] mt-20 overflow-y-auto h-screen bg-blue-500 pt-4 pl-4 '>
          <Cards />
          <div className='flex items-start'>
            <div className='w-65 flex-grow'>
              <StaffStatics />
            </div>
            <div className='w-35 flex-shrink'>
              <Chat />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
