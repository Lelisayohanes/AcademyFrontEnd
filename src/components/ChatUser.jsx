import React from 'react'

function ChatUser() {
    return (
        <div className='bg-white  py-4 px-8 flex gap-[1.5em]'>
            <div className='h-[3em] w-[4em] relative'>
                <img
                    className=""
                    src="../../src/assets/images/user/user-01.png"
                    alt="User Image"
                />
                <div className="absolute h-[0.75em] w-[0.75em] rounded-[50%] bg-blue-400 mt-[-1em] ml-[3.2em] z-[9999]"></div>
            </div>
            <div className='flex w-full justify-between items-center ml-[1em]'>
                <div>
                    <div className='text-[1.5rem]'>user name</div>
                    <div className=''>last message</div>
                </div>
                <div className='text-[#FFFFFF] flex justify-center	items-center rounded-[50%] bg-blue-400 w-[1.5em] h-[1.5em]'>2</div>
            </div>
        </div>
    )
}

export default ChatUser
