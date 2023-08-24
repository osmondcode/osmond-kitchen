import React from 'react'
import { FaStar, FaStarHalf, FaFacebookF, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";
import reviewI from "./images/5b37801cdf77566b0c65b3812fab38b9 (1).jpg";
import reviewII from "./images/c92d1bcfad5c38f340b0e91d9e7465d7.jpg";
import reviewIII from "./images/c272b7e281f78d32957cb7e122d61ef7.jpg";
import reviewIV from "./images/c337a540968c7cd2494f16dc7b8e87e6.jpg";

const Review = () => {
  return (
    <div className='w-full min-h-screen 2sm:px-[7%] px-[15px] lg:px-[10%] flex flex-col items-center justify-start mt-[15vh] md:mt-0' id='review'>
        <h1 className='capitalize 2sm:text-[2.9rem] text-center text-[2rem] mb-[8vh] font-semibold' data-aos='zoom-in'>customer <span className='mono text-green-800 font-normal italic border-b-[5px] border-b-green-800 rounded-md '>review</span></h1>

        <div className='w-full flex flex-wrap md:flex-row items-center justify-center gap-y-[70px] gap-x-3'>
        <span className='w-[250px] h-[450px] px-4 flex flex-col items-center justify-between border-[3px] border-green-800 rounded-md overflow-visible relative cursor-pointer' data-aos='zoom-in'>
            <span className='w-full h-full  flex flex-col items-center justify-start absolute top-3 left-auto right-auto hover:translate-y-[-50px] duration-500 '>
                <span className='w-[150px] mb-5 h-[150px] rounded-full flex items-center justify-center border-[4px] border-gray-400 bg-green-800 overflow-hidden'>
                    <img src={reviewII} alt='reviewII'/>
                </span>
                <span className='bg-[#dedede] flex flex-col items-center justify-center'>
                    <h3 className='font-semibold mb-3 capitalize'>raheem chillwell</h3>
                    <span className='flex items-center justify-around gap-x-2 text-yellow-500 '>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalf/>
                    </span>
                </span>
            </span>
            <span className='flex items-center justify-around gap-x-2 mt-[200px]'>
                <p><FaFacebookF/></p>
                <p><FaWhatsapp/></p>
                <p><FaTwitter/></p>
                <p><FaInstagram/></p>
            </span>
            <p className='text-justify mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellendus et quae porro esse aliquam dignissimos vero hic, maxime exercitationem in itaque necessitatibus architecto..</p>
        </span>

        <span className='w-[250px] h-[450px] px-4 flex flex-col items-center justify-between border-[3px] border-green-800 rounded-md overflow-visible relative cursor-pointer' data-aos='zoom-in'>
            <span className='w-full h-full flex flex-col items-center justify-start absolute top-3 left-auto right-auto hover:translate-y-[-50px] duration-500 '>
                <span className='w-[150px] mb-5 h-[150px] rounded-full flex items-center justify-center border-[4px] border-gray-400 bg-green-800 overflow-hidden'>
                    <img src={reviewI} alt='reviewI'/>
                </span>
                <span className='bg-[#dedede] flex flex-col items-center justify-center'>
                    <h3 className='font-semibold mb-3 capitalize'>jonathan chris</h3>
                    <span className='flex items-center justify-around gap-x-2 text-yellow-500 '>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalf/>
                    </span>
                </span>
            </span>
            <span className='flex items-center justify-around gap-x-2 mt-[200px]'>
                <p><FaFacebookF/></p>
                <p><FaWhatsapp/></p>
                <p><FaTwitter/></p>
                <p><FaInstagram/></p>
            </span>
            <p className='text-justify mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellendus et quae porro esse aliquam dignissimos vero hic, maxime exercitationem in itaque necessitatibus architecto..</p>
        </span>

        <span className='w-[250px] h-[450px] px-4 flex flex-col items-center justify-between border-[3px] border-green-800 rounded-md overflow-visible relative cursor-pointer' data-aos='zoom-in'>
            <span className='w-full h-full flex flex-col items-center justify-start absolute top-3 left-auto right-auto hover:translate-y-[-50px] duration-500 '>
                <span className='w-[150px] mb-5 h-[150px] rounded-full flex items-center justify-center border-[4px] border-gray-400 bg-green-800 overflow-hidden'>
                    <img src={reviewIII} alt='reviewIII'/>
                </span>
                <span className='bg-[#dedede] flex flex-col items-center justify-center'>
                    <h3 className='font-semibold mb-3 capitalize'>philip amos</h3>
                    <span className='flex items-center justify-around gap-x-2 text-yellow-500 '>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalf/>
                    </span>
                </span>
            </span>
            <span className='flex items-center justify-around gap-x-2 mt-[200px]'>
                <p><FaFacebookF/></p>
                <p><FaWhatsapp/></p>
                <p><FaTwitter/></p>
                <p><FaInstagram/></p>
            </span>
            <p className='text-justify mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellendus et quae porro esse aliquam dignissimos vero hic, maxime exercitationem in itaque necessitatibus architecto..</p>
        </span>


        <span className='w-[250px] h-[450px] px-4 flex flex-col items-center justify-between border-[3px] border-green-800 rounded-md overflow-visible relative cursor-pointer' data-aos='zoom-in'>
            <span className='w-full h-full flex flex-col items-center justify-start absolute top-3 left-auto right-auto hover:translate-y-[-50px] duration-500 '>
                <span className='w-[150px] mb-5 h-[150px] rounded-full flex items-center justify-center border-[4px] border-gray-400 bg-green-800 overflow-hidden'>
                    <img src={reviewIV} alt='reviewIV'/>
                </span>
                <span className='bg-[#dedede] flex flex-col items-center justify-center'>
                    <h3 className='font-semibold mb-3 capitalize'>kim yui</h3>
                    <span className='flex items-center justify-around gap-x-2 text-yellow-500 '>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalf/>
                    </span>
                </span>
            </span>
            <span className='flex items-center justify-around gap-x-2 mt-[200px]'>
                <p><FaFacebookF/></p>
                <p><FaWhatsapp/></p>
                <p><FaTwitter/></p>
                <p><FaInstagram/></p>
            </span>
            <p className='text-justify mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellendus et quae porro esse aliquam dignissimos vero hic, maxime exercitationem in itaque necessitatibus architecto..</p>
        </span>
        </div>
    </div>
  )
}

export default Review