import React from 'react'

import Cards from '../components/Cards'
import Chat from '../components/Chat'
import InnerHeader from '../components/InnerHeader'
import Menu from '../components/Menu'

function Dashboard() {
  return (
    <div className='bg-[#F1F5F9]'>
       <InnerHeader/>
      <Cards/>
      <Chat/>
      <Menu/>
    </div>
  )
}

export default Dashboard
