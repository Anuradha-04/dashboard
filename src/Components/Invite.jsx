import React from 'react'

function Invite() {
    return (

        <div className='mx-5 md:mx-0'>
            <div className='md:flex justify-center'>

                <div className='font-bold text-2xl mt-[5%] ml-3'>
                    Start building your organization
                </div>
            </div>

            <div className='md:flex justify-center mt-[2%] ml-3 '>
                Invite users to unlock unique team scheduling features starting as low as $12 per user/mo.
            </div>
            <div className='md:flex justify-center'>
                <button className='mt-8 bg-blue-600 rounded-full p-3 text-white px-3 text-[12px] sm:font-bold'>
                    Invite Users
                </button>
            </div>
            <div className='flex justify-center ml-[98.5%] -rotate-90 '>
                <div className='hidden md:block flex justify-center text-black shadow-sm shadow-gray-400 bg-white p-4 md:-mt-7 -mt-16  px-12 rounded-lg w-[130%]'>
                    <button>
                        Feedback
                    </button>
                </div>
            </div>
            <div className='h-[1px] mx-[10%] mt-[10%] w-[full] bg-gray-300 hidden md:block'>

            </div>

        </div>
    )
}

export default Invite
