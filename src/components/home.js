import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import Spaghetti from "./images/Classical_spaghetti_with_tomato_sauc-removebg-preview.png";

const Home = () => {
  return (
    <div className='w-full min-h-[90vh] flex flex-col md:flex-row  items-center md:justify-between justify-center 2sm:px-[7%] px-[15px] lg:px-[10%] pt-[20vh]' id='home'>
        <span className='md:w-[50%] w-full h-[80vh] flex items-start justify-center flex-col' data-aos='zoom-in'>
            <h1 className='text-[1.9rem] 2sm:text-[2.2rem] lg:text-[2.6rem] font-thin uppercase mb-4'>we don't make it <br/> until you <span className='font-bold text-green-800'>order it.</span></h1>
            <p className='font-extralight text-[20px] mb-4'>sometimes you've got to break the rules</p>
            <button className='py-2 rounded-sm text-[14px] font-semibold mb-4 mt-8 uppercase text-[#dedede] border-[2px] border-green-800 hover:bg-[#dedede] hover:text-green-800 duration-500 px-6 bg-green-800'>order now</button>
            <span className='flex gap-[10px] items-center justify-center mt-2'>
                <button className='w-[40px] duration-500 flex items-center justify-center hover:text-[#dedede] h-[40px] rounded-full bg-transparent hover:bg-green-800 text-[18px] text-green-800'><FaFacebookF/></button>
                <button className='w-[40px] duration-500 flex items-center justify-center hover:text-[#dedede] h-[40px] rounded-full bg-transparent hover:bg-green-800 text-[18px] text-green-800'><FaTwitter/></button>
                <button className='w-[40px] duration-500 flex items-center justify-center hover:text-[#dedede] h-[40px] rounded-full bg-transparent hover:bg-green-800 text-[18px] text-green-800'><FaInstagram/></button>
                <button className='w-[40px] duration-500 flex items-center justify-center hover:text-[#dedede] h-[40px] rounded-full bg-transparent hover:bg-green-800 text-[18px] text-green-800'><FaLinkedinIn/></button>
            </span>
        </span>
        <span className='w-fit h-[60vh] pb-24 flex items-center justify-center overflow-visible' data-aos='zoom-in'>
            <span className='lg:w-[420px] 2sm:w-[370px] w-[270px] lg:h-[420px] 2sm:h-[370px] h-[270px] shadow-xl shadow-[#333] relative rounded-full bg-green-800 flex items-center justify-center cursor-pointer pt-[20px]'>
            <img src={Spaghetti} alt='help' className='lg:w-[400px] 2sm:w-[350px] w-[250px] lg:h-[400px] 2sm:h-[350px] h-[250px]  object-cover overflow-visible absolute top-auto left-[9%]' data-aos='zoom-in'/>
            </span>
        </span>

    </div>
  )
}

export default Home