import React from 'react'

function StaffStatics() {
    return (
        <div>
            <table class=" bg-white min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            percent
                        </th>
                        
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">

                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                            John Doe 
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            14%
                        </td>
                                                
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default StaffStatics
