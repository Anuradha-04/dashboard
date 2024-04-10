/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import pic2 from "../image/pic2.jpg"

function Footer() {
    return (
        <div className='mt-8 md:mt-0 mx-2 md:mx-0'>
            <div className='md:flex ml-[10%] mr-[11.5%] p-4'>
                What can i do as a team?
            </div>
            <div className='md:flex md:ml-[10%] p-3 justify-between mb-10'>
                <div className='shadow shadow-gray-800 border border-gray-300 p-[2%] ml-1 mx-[2%] flex flex-row'>
                    <div className='mt-4'>
                        <img src={pic2} height={400} width={400} className='rounded-lg' />
                    </div>
                    <div className='flex flex-col justify-center ml-3'>
                        <div className='p-1 mx-1 font-bold'>
                            Round Robin Scheduling
                        </div>
                        <div className='mt-[3%] mx-2 text-justify'>
                            Automatically assign meetings based on what makes the most sense for your team's goals - whether by availability, priority, or equity.
                        </div>
                        <div className='cursor-pointer mt-3 mx-1 p-1 text-blue-800'>
                            Watch Video
                        </div>
                    </div>
                </div>

                <div className='shadow shadow-gray-800 border border-gray-300 p-[2%] ml-1 mx-[2%] flex flex-row mt-4 md:mt-0'>
                    <div className='mt-4'>
                        <img src={pic2} height={400} width={400} className='rounded-lg' />
                    </div>
                    <div className='flex flex-col justify-center ml-3'>
                        <div className='p-1 mx-1 font-bold'>
                            Access Powerful Management Tools
                        </div>
                        <div className='mt-[3%] mx-2 text-justify'>
                            Get new and existing users up to speed and engaged with event type templates to make sure everyone's set up for efficient scheduling, all managed through one centralized billing solution
                        </div>
                        <div className='cursor-pointer mt-3 mx-1 p-1 text-blue-800'>
                            Watch Video
                        </div>
                    </div>
                </div>

                <div className='text-white bg-gray-700 p-3 px-5  rounded-lg md:w-[400px] w-full h-[50px] mt-3 md:mt-2'>
                    <button>
                        Getting started
                    </button>
                        <div className='ml-[105%] flex justify-center sm:font-bold text-[12px] text-white -mt-12 -p-1  px-3 pl-3 p-1 rounded-full bg-red-600'>
                            3
                        </div>
                </div>

            </div>

        </div>
    )
}

export default Footer