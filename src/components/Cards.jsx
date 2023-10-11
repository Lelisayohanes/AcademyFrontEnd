import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className=' w-[100%] flex flex-wrap md:flex-nowrap '>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Cards
