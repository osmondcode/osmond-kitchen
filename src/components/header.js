import React from 'react'
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";

const Header = ({sidebarHandle}) => {
  return (
    <nav className='w-full h-[10vh] flex items-center justify-between absolute md:fixed top-0 left-0 z-50 2sm:px-[7%] px-[15px] lg:px-[10%] bg-[#dedede]'>
        <span className='w-fit flex flex-col text-justify mt-2'>
            <h1 className='uppercase text-[1.9rem] text-green-800 font-bold leading-5'>osmond</h1>
            <h2 className='text-[18px] uppercase font-semibold text-justify kitchen'>kitchen</h2>
        </span>
        <button className='flex md:hidden items-center justify-center p-1 border-[1px] border-green-800 rounded-md text-green-800 text-[21px]' onClick={sidebarHandle}>
            <FaBars/>
        </button>
        <span className='hidden md:flex items-center justify-center'>
            <a className='font-semibold hover:text-green-800 mr-4 text-[17px] uppercase' href='#home'>home</a>
            <a className='font-semibold hover:text-green-800 mr-4 text-[17px] uppercase' href='#about'>about</a>
            <a className='font-semibold hover:text-green-800 mr-4 text-[17px] uppercase' href='#gallery'>gallery</a>
            <a className='font-semibold hover:text-green-800 mr-4 text-[17px] uppercase' href='#review'>REVIEW</a>
            <a className='font-semibold hover:text-green-800 mr-4 text-[17px] uppercase' href='#team'>team</a>
            <a className='font-semibold hover:text-green-800 mr-4 text-[17px] uppercase' href='#order'>order</a>
        </span>
        <span className='hidden md:flex items-center justify-center gap-7'>
            <button className='text-[21px] w-[35px] rounded-md hover:bg-green-800 duration-500 flex items-center justify-center hover:text-[#dedede] h-[35px] text-green-800'><FaShoppingCart/></button>
            <button className='text-[21px] w-[35px] rounded-md hover:bg-green-800 duration-500 flex items-center justify-center hover:text-[#dedede] h-[35px] text-green-800'><FaUser/></button>
        </span>
    </nav>
  )
}

export default Header