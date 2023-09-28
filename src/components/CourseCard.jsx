import React from 'react';

function CourseCard() {
  return (
    <div className="bg-white shadow-md   flex flex-col rounded-2xl p-4 max-w-[240px] text-center">
      <h2 className="text-xl font-semibold">Course Title</h2>
      <p className="text-gray-600 mt-2">Course Description or here  Introduction goes here.  Introduction goes here.</p>
      <div className="mt-4 ">
        <h3 className="text-lg font-semibold">Course Modules</h3>
        <ul className="list-disc pl-4 mt-2 text-start">
          <li>Module 1: Topic 1</li>
          <li>Module 2: Topic 2</li>
          <li>Module 3: Topic 3</li>
          {/* Add more modules/topics */}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Course Details</h3>
        <ul className="list-disc pl-4 mt-2 text-start">
          <li>Duration: 8 weeks</li>
          <li>Price: $99</li>
          <li>Start Date: MM/DD/YYYY</li>
        </ul>
      </div>
      <div className="mt-4 flex justify-center">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
