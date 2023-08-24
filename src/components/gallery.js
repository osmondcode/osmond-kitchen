import React from 'react'
import seafood from "./images/36707ae692f909030c6db856b002aa00.jpg";
import samosa from "./images/4a199bd8d261c129d0b222b417aeb2a2.jpg";
import fish from "./images/5778d5c2e0a6e868ce953801f98158fb.jpg";
import spaghetti from "./images/c358fd94da12ec777a94d0d12796e17a.jpg";
import burger from "./images/cda2b0fdd05701873fe8c9b1fad7039f.jpg";
import chips from "./images/9e0ccfb7ee2fe01244137ba187cda842.jpg";

const Gallery = () => {
  return (
    <div className='w-full min-h-screen 2sm:px-[7%] px-[15px] lg:px-[10%] flex flex-col items-center justify-start' id='gallery'>
        <h1 className='capitalize 2sm:text-[2.9rem] text-[2.3rem] mb-[8vh] font-semibold' data-aos='zoom-in'>our <span className='mono text-green-800 font-normal italic border-b-[5px] border-b-green-800 rounded-md '>Gallery</span></h1>
        <span className='w-full flex flex-wrap md:flex-row items-center justify-center gap-y-8 gap-x-5'>
            <span className='w-[300px] h-[200px] flex items-center justify-center bg-green-800 rounded-md border-[2px] border-green-800 cursor-pointer overflow-hidden' data-aos='zoom-in'>
              <img src={seafood} alt='meals' className='w-full h-full hover:scale-[1.03] duration-500'/>
              <div className='absolute w-full h-full flex items-center justify-center flex-col z-40 text-white bg-black/80 px-3 opacity-0 hover:opacity-100 duration-500'>
                <h2 className='capitalize font-semibold text-[22px] mb-3 text-green-800'>sea food</h2>
                <p className='text-center text-[14px] mb-2'>Lorem ipsum dolor sit, amet  adipisicing elit amet consectetur adipisicing.</p>
                <button className='py-1 px-3 bg-green-800 text-[#dedede] hover:bg-[#dedede] hover:text-green-800 duration-500 rounded-sm border-[2px] border-green-800'>order now</button>
              </div>
            </span>


            <span className='w-[300px] h-[200px] flex items-center justify-center bg-green-800 rounded-md border-[2px] border-green-800 cursor-pointer overflow-hidden' data-aos='zoom-in'>
              <img src={samosa} alt='meals' className='w-full h-full hover:scale-[1.03] duration-500'/>
              <div className='absolute w-full h-full flex items-center justify-center flex-col z-40 text-white bg-black/80 px-3 opacity-0 hover:opacity-100 duration-500'>
                <h2 className='capitalize font-semibold text-[22px] mb-3 text-green-800'>samosa</h2>
                <p className='text-center text-[14px] mb-2'>Lorem ipsum dolor sit, amet  adipisicing elit amet consectetur adipisicing.</p>
                <button className='py-1 px-3 bg-green-800 text-[#dedede] hover:bg-[#dedede] hover:text-green-800 duration-500 rounded-sm border-[2px] border-green-800'>order now</button>
              </div>
            </span>


            <span className='w-[300px] h-[200px] flex items-center justify-center bg-green-800 rounded-md border-[2px] border-green-800 cursor-pointer overflow-hidden' data-aos='zoom-in'>
              <img src={fish} alt='meals' className='w-full h-full hover:scale-[1.03] duration-500'/>
              <div className='absolute w-full h-full flex items-center justify-center flex-col z-40 text-white bg-black/80 px-3 opacity-0 hover:opacity-100 duration-500'>
                <h2 className='capitalize font-semibold text-[22px] mb-3 text-green-800'>grilled fish</h2>
                <p className='text-center text-[14px] mb-2'>Lorem ipsum dolor sit, amet  adipisicing elit amet consectetur adipisicing.</p>
                <button className='py-1 px-3 bg-green-800 text-[#dedede] hover:bg-[#dedede] hover:text-green-800 duration-500 rounded-sm border-[2px] border-green-800'>order now</button>
              </div>
            </span>


            <span className='w-[300px] h-[200px] flex items-center justify-center bg-green-800 rounded-md border-[2px] border-green-800 cursor-pointer overflow-hidden' data-aos='zoom-in'>
              <img src={chips} alt='meals' className='w-full h-full hover:scale-[1.03] duration-500'/>
              <div className='absolute w-full h-full flex items-center justify-center flex-col z-40 text-white bg-black/80 px-3 opacity-0 hover:opacity-100 duration-500'>
                  <h2 className='capitalize font-semibold text-[22px] mb-3 text-green-800'>chicken & chips</h2>
                  <p className='text-center text-[14px] mb-2'>Lorem ipsum dolor sit, amet  adipisicing elit amet consectetur adipisicing.</p>
                  <button className='py-1 px-3 bg-green-800 text-[#dedede] hover:bg-[#dedede] hover:text-green-800 duration-500 rounded-sm border-[2px] border-green-800'>order now</button>
                </div>
            </span>


            <span className='w-[300px] h-[200px] flex items-center justify-center bg-green-800 rounded-md border-[2px] border-green-800 cursor-pointer overflow-hidden' data-aos='zoom-in'>
              <img src={burger} alt='meals' className='w-full h-full hover:scale-[1.03] duration-500'/>
              <div className='absolute w-full h-full flex items-center justify-center flex-col z-40 text-white bg-black/80 px-3 opacity-0 hover:opacity-100 duration-500'>
                  <h2 className='capitalize font-semibold text-[22px] mb-3 text-green-800'>burger & chips</h2>
                  <p className='text-center text-[14px] mb-2'>Lorem ipsum dolor sit, amet  adipisicing elit amet consectetur adipisicing.</p>
                  <button className='py-1 px-3 bg-green-800 text-[#dedede] hover:bg-[#dedede] hover:text-green-800 duration-500 rounded-sm border-[2px] border-green-800'>order now</button>
                </div>
            </span>


            <span className='w-[300px] h-[200px] flex items-center justify-center bg-green-800 rounded-md border-[2px] border-green-800 cursor-pointer overflow-hidden relative' data-aos='zoom-in'>
              <img src={spaghetti} alt='meals' className='w-full h-full hover:scale-[1.03] duration-500'/>
              <div className='absolute w-full h-full flex items-center justify-center flex-col z-40 text-white bg-black/80 px-3 opacity-0 hover:opacity-100 duration-500'>
                <h2 className='capitalize font-semibold text-[22px] mb-3 text-green-800'>spaghetti</h2>
                <p className='text-center text-[14px] mb-2'>Lorem ipsum dolor sit, amet  adipisicing elit amet consectetur adipisicing.</p>
                <button className='py-1 px-3 bg-green-800 text-[#dedede] hover:bg-[#dedede] hover:text-green-800 duration-500 rounded-sm border-[2px] border-green-800'>order now</button>
              </div>
            </span>
        </span>
    </div>
  )
}

export default Gallery