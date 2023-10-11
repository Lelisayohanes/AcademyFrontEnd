import React, { useState } from 'react';
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import { HiPlus } from "react-icons/hi2";
function Teacher() {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isAdding, setIsAdding] = useState(false);

    const data = [
        { studentId: '001', name: 'John Doe', age: 20, course: 'Mathematics', registrationDate: '2023-01-15' },
        { studentId: '002', name: 'Jane Smith', age: 22, course: 'Physics', registrationDate: '2023-02-20' },
        // Add more data entries here
    ];

    // Function to handle searching
    const handleSearch = () => {
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filtered);
    };

    // Function to clear search results
    const clearSearch = () => {
        setSearchText('');
        setFilteredData([]);
    };

    // Function to toggle the add form
    const toggleAddForm = () => {
        setIsAdding(!isAdding);
    };

    return (
        <div className='p-4'>
            <div className="flex justify-between space-x-4 mb-2">
                <div>
                <button
                    onClick={toggleAddForm}
                    className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg focus:outline-none"
                >
                    <div className='flex text-white items-center  '>Add Teacher<HiPlus/></div>
                </button>
                </div>
                <div>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="px-3 py-2 border  focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 text-gray-500  rounded-lg focus:outline-none ml-[-3em]"
                >
                    <IoSearchSharp/>
                </button>
                {/* <button
                    onClick={clearSearch}
                    className="px-4 py-2  focus:text-gray-500  rounded-lg focus:outline-none ml-[-3em] "
                >
                    <IoCloseSharp/>
                </button> */}
                </div>
            </div>
            
            <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Student ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Age
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Registration Date
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{item.studentId}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.age}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.course}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.registrationDate}</td>
                            </tr>
                        ))
                    ) : (
                        data.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{item.studentId}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.age}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.course}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.registrationDate}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Teacher;
