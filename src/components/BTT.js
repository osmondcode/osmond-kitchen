import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const backToTop = () => {
  return (
    <div className='w-[50px] h-[50px] bg-green-800 flex md:hidden items-center justify-center text-[#dedede] fixed bottom-[30px] z-50 rounded-lg right-5'>
        <a href='#'>
            <FaArrowUp/>
        </a>
    </div>
  )
}

export default backToTop