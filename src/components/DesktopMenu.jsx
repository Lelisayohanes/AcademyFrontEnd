import React from 'react'
import Menu from './Menu'
import { IoWoman } from 'react-icons/io5'
function DesktopMenu() {
    return (
        <div>
            <div className='bg-[#1C2434]  w-[18rem] h-full hidden md:flex flex-col  rounded-l-lg' >
            <div className='text-[1.6rem] flex m-[1em] items-center'><IoWoman />HAcedamy</div>
                <Menu />
            </div>
        </div>
    )
}

export default DesktopMenu
