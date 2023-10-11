import React, { useState } from 'react';
import '../../src/style/PrivacySetting.css';

export default function PrivacySetting() {
  const [showCategories, setShowCategories] = useState({
    personalInfo: {
      anyone: false,
      teacher: false,
      student: false,
      specificUser: false,
      admin: false,
    },
    portfolio: {
      anyone: false,
      teacher: false,
      student: false,
      specificUser: false,
      admin: false,
    },
    updates: {
      anyone: false,
      teacher: false,
      student: false,
      specificUser: false,
      admin: false,
    },
  });

  // Additional state to track whether the dropdown is open or closed for each category
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const toggleAllOptions = (category, value) => {
    const updatedCategories = { ...showCategories };
    for (const key in updatedCategories[category]) {
      updatedCategories[category][key] = value;
    }
    setShowCategories(updatedCategories);
  };

  const toggleDropdown = (category) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Privacy Settings</h1>

      <div className="mb-4">
        {Object.keys(showCategories).map((category) => (
          <div key={category} className="privacy-category">
            <span className="text-lg font-medium" onClick={() => toggleDropdown(category)}>
              {`Who can see my ${category}`}
            </span>
            {/* Use isDropdownOpen to conditionally render the dropdown for the specific category */}
            {isDropdownOpen[category] && (
              <div className="dropdown flex flex-col py-4 gap-[2em]">
                 <div className='flex justify-between max-w-[20em] '>
                    Teacher
                    <label className="toggle">
                    <input
                        type="checkbox"
                        checked={showCategories[category].teacher}
                        onChange={(e) => setShowCategories({ ...showCategories, [category]: { ...showCategories[category], teacher: e.target.checked } })}
                    />
                    <span className="slider round"></span>
                    </label>
                </div>
                
                <div className='flex justify-between max-w-[20em] '>
                    Student
                    <label className="toggle">
                    <input
                        type="checkbox"
                        checked={showCategories[category].student}
                        onChange={(e) => setShowCategories({ ...showCategories, [category]: { ...showCategories[category], student: e.target.checked } })}
                    />
                    <span className="slider round"></span>
                    </label>
                   
                </div>
                <div className='flex justify-between max-w-[20em] '>
                    Specific User
                    <label className="toggle">
                    <input
                        type="checkbox"
                        checked={showCategories[category].specificUser}
                        onChange={(e) => setShowCategories({ ...showCategories, [category]: { ...showCategories[category], specificUser: e.target.checked } })}
                    />
                    <span className="slider round"></span>
                    </label>
                    
                </div>
                 <div className='flex justify-between max-w-[20em] '>
                 Admin
                    <label className="toggle">
                    <input
                        type="checkbox"
                        checked={showCategories[category].admin}
                        onChange={(e) => setShowCategories({ ...showCategories, [category]: { ...showCategories[category], admin: e.target.checked } })}
                    />
                    <span className="slider round"></span>
                    </label>
                    
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
