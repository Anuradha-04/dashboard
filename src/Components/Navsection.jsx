/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from 'react'

import { FaCaretDown } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import laptop from "../image/pic.jpg"

function Navsection() {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <div className='max-w-[1240px] md:flex justify-between mx-auto p-4'>
                {/* mobile */}
                <div className='md:hidden'>
                    <div className='flex justify-between'>
                        <div className='h-[50px] w-[55px]'>
                        <img src={laptop} alt='' />
                        </div>
                        <div>
                            <AiOutlineMenu className='text-2xl mx-4 block cursor-pointer' onClick={handleToggle} />
                        </div>
                    </div>
                    {toggle && (
                        <div className="absolute right-0 top-10 mt-10  h-screen w-full bg-white shadow-lg py-4 px-11 rounded">
                            <ul className="gap-10 text-[gray] font-semibold text-xl">
                                <li className='cursor-pointer p-6 hover:text-black  mt-2'>Home</li>
                                <li className='mt-4 cursor-pointer p-6 hover:text-black'>Availability</li>
                                <li className='mt-4 cursor-pointer p-6 hover:text-black'>Integrations</li>
                                <li className='mt-4 cursor-pointer p-6 hover:text-black'>Help</li>
                                <li className="cursor-pointer w-[15%] text-black mt-4 p-1 m text-center border border-slate-400 shadow-inner shadow-[gray] rounded-full bg-gray-300 ml-9 ">
                                    J
                                </li>
                                <li className='cursor-pointer mt-4 p-6 hover:text-black'>Account</li>
                            </ul>
                        </div>
                    )}
                </div>


                {/* desktop */}
                <div className='hidden md:block'>
                    <div className='h-[50px] w-[55px]'>
               <img src={laptop} alt='' />
                    </div>

                </div>
                <ul className='hidden md:flex justify-center gap-10 text-[gray]'>
                    <li className='cursor-pointer hover:text-black'>
                        Home
                    </li>
                    <li className='cursor-pointer hover:text-black'>
                        Availability
                    </li>
                    <li className='cursor-pointer hover:text-black'>
                        Integrations
                    </li>
                    <li className='cursor-pointer hover:text-black'>
                        Help

                    </li>
                    <FaCaretDown className='cursor-pointer mt-1 hover:text-black' />
                    <li className='h-9 w-9 p-1 text-black text-center border border-slate-600 shadow-inner shadow-[gray] rounded-full bg-gray-300 cursor-pointer'>
                        J
                    </li>
                    <li className='cursor-pointer hover:text-black'>
                        Account
                    </li>

                    <FaCaretDown className='cursor-pointer mt-1 hover:text-black' />
                </ul>


            </div>
            <div className='h-[0.5px] w-full bg-slate-300'>

            </div>
        </div>
    )
}

export default Navsection