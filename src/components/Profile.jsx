

import React, { useState } from 'react';
import { IoLogoFacebook, IoLogoYoutube, IoLogoInstagram } from 'react-icons/io5';
import ContuctInfo from './ContuctInfo';
import ProffessionalInfo from './ProffessionalInfo';
import PersonalInfo from './PersonalInfo';

const Profile = () => {

  const [profileData, setProfileData] = useState({
    coverImage: '../../src/assets/images/user/user-01.png',
    profileImage: '../../src/assets/images/user/user-01.png',
    username: 'lelisa',
    email: 'lelisa@gmail.com',
    bio: ' i am lelisa  ',
    firstname: 'John',
    lastname: 'Doe',
    gender: 'Male',
    birthday: '01/01/1990',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    phone: '01234567890',
    website: 'www.lelisa.com',
    facebook: 'www.facebook.com',
    instagram: 'www.instagram.com',
    youtube: 'www.youtube.com',
    position: 'Admin',
    company: 'Lelisa',
    profession: 'Instructor'
  });

  const [activeTab, setActiveTab] = useState('personal'); // Default to personal tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen w-[96%] md:w-[80%] mx-auto mt-2 lg:mt-[2em]">
      <div className="bg-cover bg-center h-24 md:h-60 ">
        <img
          src={profileData.coverImage || 'placeholder_cover_image.jpg'}
          alt="Cover"
          className="w-full h-full object-cover opacity-100 "
        />
      </div>
      <div className="p-6 max-w-3xl mx-auto mt-8 rounded-lg">
        <div className="flex justify-center -mt-24">
          <img
            src={profileData.profileImage || 'placeholder_profile_image.jpg'}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-3xl font-semibold">{profileData.username}</h1>
          <p className="text-gray-500">{profileData.profession}</p>
        </div>
      </div>
      <div className="text-center shadow-lg">
        <div className='flex justify-center flex-col md:flex-row lg:flex-nowrap '>
          <button
            className={`shadow-lg py-2 px-4 ${activeTab === 'personal' ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => handleTabChange('personal')}
          >
            Personal Information
          </button>
          <button
            className={`shadow-lg py-2 px-4 ${activeTab === 'professional' ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => handleTabChange('professional')}
          >
            Professional Experience
          </button>
          <button
            className={`shadow-lg py-2 px-4 ${activeTab === 'contact' ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => handleTabChange('contact')}
          >
            Contact Information
          </button>
        </div>
        <div>
          {activeTab === 'contact' && (
            <div>
              <ContuctInfo />
            </div>
          )}

          {activeTab === 'professional' && (
            <div>
              <ProffessionalInfo />
            </div>
          )}

          {activeTab === 'personal' && (
            <div>
              <PersonalInfo />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
