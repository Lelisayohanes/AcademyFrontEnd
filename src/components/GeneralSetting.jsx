import React, { useState } from 'react';

export default function GeneralSetting() {
  // Sample user data for demonstration
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    role: 'Admin',
    profileImage: '../../src/assets/images/user/user-01.png', // Replace with the actual image URL
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleImageUpload = (e) => {
    // Handle image upload logic here
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Handle save changes logic here
    setIsEditing(false);
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">General Settings</h1>

      <div className="mb-4">
        <div className="mb-4">
          {/* <label className="block text-sm font-medium text-gray-700">Profile Image</label> */}
          <div className="flex items-center space-x-4">
            <img
              src={user.profileImage}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            {isEditing ? (
              <input
                type="file"
                onChange={handleImageUpload}
                className="py-2"
              />
            ) : null}
          </div>
        </div>

        <div className="mb-4 flex flex-wrap text-start">
          <div className="mb-4 w-full mr-8 ">
            {isEditing ? (
              <div className='text-start '>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md text-gray-700"
                  value={user.name}
                />
              </div>
            ) : (
              <div className="w-full px-3 py-2 rounded-md text-gray-700 text-start ">
                <div className="font-medium text-gray-700 font-semibold">Full Name</div>
                {user.name}
              </div>
            )}
          </div>

          <div className="mb-4 w-full ">
            {isEditing ? (
              <div className='text-start'>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full  py-2 border rounded-md text-gray-700"
                  value={user.email}
                  readOnly
                />
              </div>
            ) : (
              <div className="w-full px-3 py-2 rounded-md text-gray-700 text-start">
                <div className="font-medium text-gray-700 font-semibold">Email</div>
                {user.email}
              </div>
            )}
          </div>

          <div className="mb-4 w-full  ">
            {isEditing ? (
              <div className='text-start'>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md text-gray-700"
                  value={user.phone}
                />
              </div>
            ) : (
              <div className="w-full px-3 py-2 rounded-md text-gray-700 text-start">
                <div className="font-medium text-gray-700 font-semibold">Phone Number</div>
                {user.phone}
              </div>
            )}
          </div>

          <div className="mb-4 w-full  ">
            {isEditing ? (
              <div className='text-start'>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md text-gray-700"
                  value={user.role}
                  readOnly
                />
              </div>
            ) : (
              <div className="w-full px-3 py-2 rounded-md text-gray-700 text-start">
                <div className="font-medium text-gray-700 font-semibold">Role</div>
                {user.role}
              </div>
            )}
          </div>
        </div>

        {isEditing ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full sm:w-64"
            onClick={handleSaveClick}
          >
            Save Changes
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full sm:w-64"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
