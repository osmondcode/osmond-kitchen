import React from 'react'
import { FaFacebookF, FaWhatsapp, FaTwitter } from "react-icons/fa";
import chef from "./images/4edbe156d402ee920e349e691d02eba6.jpg";
import baker from "./images/8615c843156c4dd787528840543f7022.jpg";
import waiter from "./images/0226e93104943e9acd12b027d2c59e02.jpg";
import barman from "./images/8a0d4b91252652b65af9deb24ba37aeb.jpg";

const Team = () => {
  return (
    <div  className='w-full min-h-screen 2sm:px-[7%] px-[15px] lg:px-[10%] flex flex-col items-center justify-start mt-[15vh] md:mt-0' id='team'>
        <h1 className='capitalize 2sm:text-[2.9rem] text-center text-[2rem] mb-[18vh] font-semibold' data-aos='zoom-in'>our <span className='mono text-green-800 font-normal italic border-b-[5px] border-b-green-800 rounded-md '>team</span></h1>

        <div className='w-full flex flex-wrap md:flex-row items-center justify-center gap-y-[130px] gap-x-5'>
            <span className='w-[250px] h-[250px] flex flex-col relative items-center justify-center border-[3px] border-green-800 hover:rounded-lg cursor-pointer rounded-full' data-aos='zoom-in'>
                <span className='w-[210px] h-[210px] rounded-full bg-green-800 hover:translate-y-[-110px] hover:rounded-xl duration-500 absolute top-auto left-auto right-auto bottom-auto z-40 overflow-hidden'>
                    <img src={chef} alt='chef'/>
                </span>
                <h2 className='mt-[100px] text-[21px] capitalize font-semibold text-green-800'>chef</h2>
                <p className='text-center mb-2 mx-[25px]'>Lorem ipsum dolor sit, amet consectetur</p>
                <span className='flex items-center justify-around gap-x-2 '>
                <p><FaFacebookF/></p>
                <p><FaWhatsapp/></p>
                <p><FaTwitter/></p>
            </span>
            </span>

            <span className='w-[250px] h-[250px] flex flex-col relative items-center justify-center border-[3px] border-green-800 hover:rounded-lg cursor-pointer rounded-full' data-aos='zoom-in'>
                    <span className='w-[210px] h-[210px] rounded-full bg-green-800 flex items-center justify-center hover:translate-y-[-110px] hover:rounded-xl duration-500 absolute top-auto left-auto right-auto bottom-auto z-40 overflow-hidden'>
                        <img src={baker} alt='chef'/>
                    </span>
                <h2 className='mt-[100px] text-[21px] capitalize font-semibold text-green-800'>baker</h2>
                <p className='text-center mb-2 mx-[25px]'>Lorem ipsum dolor sit, amet consectetur</p>
                <span className='flex items-center justify-around gap-x-2 '>
                <p><FaFacebookF/></p>
                <p><FaWhatsapp/></p>
                <p><FaTwitter/></p>
            </span>
            </span>

            <span className='w-[250px] h-[250px] flex flex-col relative items-center justify-center border-[3px] border-green-800 hover:rounded-lg cursor-pointer rounded-full' data-aos='zoom-in'>
                <span className='w-[210px] h-[210px] rounded-full bg-green-800 hover:translate-y-[-110px] hover:rounded-xl duration-500 absolute top-auto left-auto right-auto bottom-auto z-40 overflow-hidden'>
                    <img src={waiter} alt='waiter' className='w-full h-full object-cover'/>
                </span>
                <h2 className='mt-[100px] text-[21px] capitalize font-semibold text-green-800'>waiter</h2>
                <p className='text-center mb-2 mx-[25px]'>Lorem ipsum dolor sit, amet consectetur</p>
                <span className='flex items-center justify-around gap-x-2 '>
                <p><FaFacebookF/></p>
                <p><FaWhatsapp/></p>
                <p><FaTwitter/></p>
            </span>
            </span>

            <span className='w-[250px] h-[250px] flex flex-col relative items-center justify-center border-[3px] border-green-800 hover:rounded-lg cursor-pointer rounded-full' data-aos='zoom-in'>
                <span className='w-[210px] h-[210px] rounded-full bg-green-800 hover:translate-y-[-110px] hover:rounded-xl duration-500 absolute top-auto left-auto right-auto bottom-auto z-40 overflow-hidden'>
                    <img src={barman} alt='barman'/>
                </span>
                <h2 className='mt-[100px] text-[21px] capitalize font-semibold text-green-800'>bar man</h2>
                <p className='text-center mb-2 mx-[25px]'>Lorem ipsum dolor sit, amet consectetur</p>
                <span className='flex items-center justify-around gap-x-2 '>
                <p><FaFacebookF/></p>
                <p><FaWhatsapp/></p>
                <p><FaTwitter/></p>
            </span>
            </span>
        </div>
    </div>
  )
}

export default Team