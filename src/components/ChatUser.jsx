
export default ChatUser

import React from 'react';

function ChatUser({ user }) {
    return (
        <div className='bg-white py-2 px-8 flex gap-[1.5em]'>
            <div className='h-[3em] w-[4em] relative'>
                <img
                    className=""
                    src={user.image}
                    alt="User Image"
                />
                {user.unreadMessages > 0 && (
                    <div className="absolute h-[0.75em] w-[0.75em]  rounded-[50%] bg-blue-400 mt-[-1em] ml-[3.2em] z-[9999]"></div>
                )}
            </div>
            <div className='flex w-full justify-between items-center ml-[1em]'>
                <div>
                    <div className='font-semibold'>{user.name}</div>
                    <div className='text-[1rem]'>{user.lastMessage}</div>
                </div>
                {user.unreadMessages > 0 && (
                    <div className='text-[#FFFFFF] flex justify-center items-center rounded-[50%] bg-blue-400 w-[1.5em] h-[1.5em]'>
                        {user.unreadMessages}
                    </div>
                )}
            </div>
        </div>
    );
}


