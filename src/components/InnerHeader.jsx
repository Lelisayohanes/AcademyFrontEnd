import React, { useState } from 'react';
import Modal from 'react-modal';
import { IoNotificationsOutline, IoChatboxEllipsesOutline, IoMenuSharp, IoArrowBackSharp, IoWoman } from "react-icons/io5";
import Menu from './Menu';
// import { IoEyeOutline,IoArrowUpSharp } from "react-icons/io5";
function InnerHeader() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='flex w-100 flex-row grow gap-[1em]   '>
            {/* <div className='bg-[#1C2434]  max-w-[16rem] h-full hidden md:flex flex-col grow rounded-r-2xl '>
                <Menu/>
            </div> */}
            <div className="bg-white shadow-md p-4 grow">
                <div className='flex justify-between  mx-auto' >
                    <div className='flex justify-center items-center text-[2rem] ' >
                        <button className='md:hidden' onClick={openModal}><IoMenuSharp /></button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal"
                            className="bg-[#1C2434] text-[#DBE1EB] max-w-[18rem] h-full md:hidden"
                        >
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-center items-center m-[1em]'>
                                    <div className='text-[1.6rem] flex justify-center items-center'><IoWoman />HAcedamy</div>
                                </div>
                                <button onClick={closeModal}><IoArrowBackSharp className='mr-[0.5em] text-[1.8rem]' /></button>
                            </div>
                            <div>
                                <Menu />
                            </div>

                        </Modal>
                    </div>
                    <div className='flex gap-[1rem] items-center '>
                        <div className=' h-[2.5rem] w-[2.5rem] rounded-[50%] bg-[#EFF4FB] flex justify-center items-center text-[2rem] p-[8px] text-[#707F95]'>
                            <IoNotificationsOutline />
                        </div>
                        <div className=' h-[2.5rem] w-[2.5rem] rounded-[50%] bg-[#EFF4FB] flex justify-center items-center text-[2rem] p-[8px] text-[#707F95]'>
                            <IoChatboxEllipsesOutline />
                        </div>

                        <div className=''>
                            <img
                                className="h-[3rem] w-[3rem] rounded-[50%] ml-[1em]"
                                src="../../src/assets/images/user/user-01.png"
                                alt="User Image"
                            />
                        </div>

                    </div>

                </div>

            </div>
            
        </div>




    )
}

export default InnerHeader
