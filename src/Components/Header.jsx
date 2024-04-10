import React, { useState } from 'react';

function Header() {

    const [selectedTab, setSelectedTab] = useState('All people');

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };


    return (
        <div className='shadow-xl'>
            <div className='ml-[10%] mr-[11.5%]'>
                <div className='flex justify-between'>
                    <div className='flex mt-4' >
                        <div className='font-bold '>
                            Admin Management
                        </div>
                        <div className='ml-6 text-gray-500'>
                            1/1 seats occupied</div>
                    </div>
                    <div>
                        <button className='mt-2 text-blue-800 text-[14px] border-blue-600 hover:bg-sky-400 hover:text-white shadow-inner shadow-blue-200 rounded-full p-2 px-4'>
                            + New User
                        </button>

                    </div>
                </div>

                <div className="md:flex items-center mt-5">
                    <div className="flex">
                        < div
                            className={`cursor-pointer mr-6 pb-4 text-gray-500 ${selectedTab === 'All people' && 'border-b-[4px] border-blue-600 text-black'
                                }`}
                            onClick={() => handleTabClick('All people')}
                        >
                            All people
                        </div>
                        <div
                            className={`cursor-pointer mr-6 pb-4 text-gray-500 ${selectedTab === 'Groups' && 'border-b-[4px] border-blue-600 text-black'
                                }`}
                            onClick={() => handleTabClick('Groups')}
                        >
                            Groups
                        </div>
                        <div
                            className={`cursor-pointer mr-6 pb-4 text-gray-500 ${selectedTab === 'Managed events' && 'border-b-[4px] border-blue-600 text-black'
                                }`}
                            onClick={() => handleTabClick('Managed events')}
                        >
                            Managed events
                        </div>
                        <div
                            className={`cursor-pointer mr-4 mb-4 bg-blue-600 text-white px-3 p-1 rounded-lg text-[12px] sm:font-bold ${selectedTab === 'Beta' && 'border-b-[4px] border-blue-600'
                                }`}
                            onClick={() => handleTabClick('Beta')}
                        >
                            BETA
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Header