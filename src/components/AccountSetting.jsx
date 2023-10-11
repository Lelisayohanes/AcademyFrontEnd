import React, { useState } from 'react';
import { GoLock } from "react-icons/go";
import { IoSettingsOutline, IoNotificationsOutline,IoLanguageOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import GeneralSetting from './GeneralSetting';
import PrivacySetting from './PrivacySetting';
function AccountSetting() {
    const [selectedTab, setSelectedTab] = useState('general');
    const [username, setUsername] = useState('JohnDoe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('This is my bio');
    const [profileImage, setProfileImage] = useState('profile-image-url.jpg');

    const handleUpdate = () => {
        // Handle updating user settings (e.g., send a request to the server).
    };

    return (
        <div className=" bg-white flex flex-col mx-2 md:mx-4 ">
            <div className="py-8 px-2  rounded-lg  w-[100%]">
                <h1 className="text-2xl font-semibold self-start">Account Settings</h1>
                <div className='w-[100%]'>
                    <div className='flex flex-col gap-[2em] md:gap-[0em] md:flex-row min-w-[100%] mt-4 md:ml-4'>
                        <div className=' w-full md:w-1/4 border-b-2 sm:border-b-0 md:border-r-2 md:border-gray-100  '>
                            <div className='flex justify-between md:flex-col gap-[1em] text-sm lg:text-xl'>
                                <div className='flex items-center flex-col sm:flex-row gap-[1em] hover:cursor-pointer'><IoSettingsOutline/><a onClick={() => setSelectedTab('general')}>General</a></div>
                                <div className='flex items-center flex-col sm:flex-row gap-[1em] hover:cursor-pointer'><GoLock/><a onClick={() => setSelectedTab('privacy')}>Privacy</a></div>
                                <div className='flex items-center flex-col sm:flex-row gap-[1em] hover:cursor-pointer'><IoNotificationsOutline/><a onClick={() => setSelectedTab('notifications')} ><div className=''>Notifications</div></a></div>
                                <div className='flex items-center flex-col sm:flex-row gap-[1em] hover:cursor-pointer'><IoLanguageOutline/><a onClick={() => setSelectedTab('language')}>Language</a></div>
                                <div className='flex items-center flex-col sm:flex-row gap-[1em] hover:cursor-pointer'><FaPeopleGroup/><a onClick={() => setSelectedTab('group')}>Groups</a></div>
                            </div>
                        </div>
                        <div className=' w-full md:w-3/4 ml-2 md:ml-8'>
                            {selectedTab === 'general' && (
                                <div>
                                    <GeneralSetting/>
                                </div>
                            )}
                            {selectedTab === 'privacy' && (
                                <div>
                                    {/* Render the content for the Privacy tab here */}
                                    <PrivacySetting/>
                                </div>
                            )}
                            {selectedTab === 'notifications' && (
                                <div>
                                    {/* Render the content for the Notifications tab here */}
                                    <p>Notification Settings</p>
                                </div>
                            )}
                            {selectedTab === 'language' && (
                                <div>
                                    {/* Render the content for the Language tab here */}
                                    <p>Language Settings</p>
                                </div>
                            )}
                            {selectedTab === 'group' && (
                                <div>
                                    {/* Render the content for the Language tab here */}
                                    <p>group</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountSetting;
