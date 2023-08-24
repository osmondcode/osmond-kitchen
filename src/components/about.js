import React from 'react'
import Beef from "./images/Breakfast_Food_Buffet_Dish_Dinner_PNG_-_Free_Download-removebg-preview.png";

const About = () => {
  return (
    <div className='w-full min-h-screen 2sm:px-[7%] px-[15px] lg:px-[10%] flex flex-col-reverse md:flex-row items-center justify-between gap-5' id='about'>
        <span className='w-fit h-[60vh] pb-24 flex items-center justify-center overflow-visible mt-[15vh]' data-aos='zoom-in'>
            <span className='lg:w-[400px] 2sm:w-[350px] w-[250px] lg:h-[400px] 2sm:h-[350px] h-[250px] rounded-full shadow-xl shadow-[#333] bg-green-800 cursor-pointer flex items-center justify-center pt-[15px] pl-[15px]'>

                <img src={Beef} alt='help' className='lg:w-[360px] 2sm:w-[330px] w-[230px] lg:h-[360px] 2sm:h-[330px] h-[230px]  object-cover' data-aos='zoom-in'/>
                </span>
        </span>
        <span className='md:w-[45%] w-full h-[60vh] flex flex-col items-start justify-center' data-aos='zoom-in'>
            <h1 className='text-[2.3rem] capitalize font-semibold mb-5'><span className='text-green-800 mono italic font-normal'>About</span> us</h1>
            <h2 className='text-[23px] font-bold mb-4'>Why Choose us?</h2>
            <p className='text-justify mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellendus et quae porro esse aliquam dignissimos vero hic, maxime exercitationem in itaque necessitatibus nesciunt nostrum molestias qui consequatur ratione non recusandae ea autem atque eveniet laborum maiores. Corrupti veritatis pariatur, architecto..</p>
            <button className='py-1 px-3 bg-green-800 text-[#dedede] hover:bg-[#dedede] hover:text-green-800 duration-500 rounded-sm border-[2px] border-green-800'>Make your order</button>
        </span>
    </div>
  )
}

export default About