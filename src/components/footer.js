import React from 'react'
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full min-h-[30vh] mt-[5vh] flex flex-col items-start justify-center 2sm:px-[7%] px-[15px] lg:px-[10%] bg-[#cacaca] py-[3vh]'>
            <span className='w-full flex items-start justify-between flex-wrap gap-y-7 gap-x-5'>
                <div className='flex items-center justify-center flex-col capitalize'>
                    <h2 className='font-semibold mb-2 text-[20px]'>location</h2>
                    <p>nigeria</p>
                    <p>japan</p>
                    <p>india</p>
                    <p className='uppercase'>usa</p>
                    <p>china</p>
                </div>


                <div className='flex items-center justify-center text-center flex-col capitalize'>
                    <h2 className='font-semibold mb-2 text-[20px]'>quick links</h2>
                    <p>home</p>
                    <p>about</p>
                    <p>gallery</p>
                    <p>review</p>
                    <p>team</p>
                    <p>order</p>
                </div>


                <div className='flex items-center justify-center text-center flex-col '>
                    <h2 className='font-semibold mb-2 text-[20px]'>contact</h2>
                    <p>+234 903 3811 434</p>
                    <p>+234 903 3811 434</p>
                    <p>osmondcode@gmail.com</p>
                    <p>osmondcode@gmail.com</p>
                </div>


                <div className='flex items-center justify-center text-center flex-col capitalize'>
                    <h2 className='font-semibold mb-2 text-[20px]'>our service</h2>
                    <p>fast delivery</p>
                    <p>easy payment</p>
                    <p>24 / 7 service</p>
                </div>


                <div className='flex items-center justify-center text-center flex-col capitalize'>
                    <h2 className='font-semibold mb-2 text-[20px]'>follows</h2>
                    <span className='flex items-center justify-around gap-x-2'>
                <p><FaFacebookF/></p>
                <p><FaWhatsapp/></p>
                <p><FaTwitter/></p>
                <p><FaInstagram/></p>
            </span>
                </div>
            </span>
            <span className='w-full flex items-center justify-center mt-4 text-[18px]'>
                Designed by <p className='text-green-800 font-semibold'>osmondcode</p>
            </span>
    </div>
  )
}

export default Footer