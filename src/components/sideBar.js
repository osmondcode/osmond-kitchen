import React from 'react'
import { FaTimes } from "react-icons/fa";

const sideBar = ({sidebarHandle}) => {
  return (
    <div className='w-full h-screen flex md:hidden fixed z-[100] top-0 left-0 ' onClick={sidebarHandle}>
    <div className='2sm:w-[70%] w-[90%] h-screen z-[100] fixed bg-green-800 top-0 right-0 flex md:hidden items-start'>

        <button onClick={sidebarHandle} className='absolute top-5 right-5 flex items-center justify-center p-1 border-[1px] border-[#dedede] rounded-md text-[#dedede] text-[21px]'>
            <FaTimes/>
        </button>
        <nav className='w-full flex flex-col items-start justify-start text-[#dedede] mt-20 ml-5 gap-3'>
            <a className='font-semibold hover:text-green-800 mr-4 text-[17px] uppercase' href='#home'>home</a>
            <a className='font-semibold hover:text-green-800 mr-4 text-[17px] uppercase' href='#about'>about</a>
            <a className='font-semibold hover:text-green-800 mr-4 text-[17px] uppercase' href='#gallery'>gallery</a>
            <a className='font-semibold hover:text-green-800 mr-4 text-[17px] uppercase' href='#review'>REVIEW</a>
            <a className='font-semibold hover:text-green-800 mr-4 text-[17px] uppercase' href='#team'>team</a>
            <a className='font-semibold hover:text-green-800 mr-4 text-[17px] uppercase' href='#order'>order</a>
        </nav>
    </div>
    </div>
  )
}

export default sideBar