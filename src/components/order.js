import React from 'react'
import order from "./images/718e9b10235be1129880b403a5ac509a.jpg";

const Order = () => {
  return (
    <div className='w-full min-h-[90vh] 2sm:px-[7%] px-[15px] lg:px-[10%] flex flex-col items-center justify-start mt-[15vh] md:mt-0' id='order'>

        <h1 className='capitalize 2sm:text-[2.9rem] text-center text-[2rem] mb-[8vh] font-semibold' data-aos='zoom-in'><span className='mono text-green-800 font-normal italic border-b-[5px] border-b-green-800 rounded-md '>order</span> now</h1>

        <div className='w-full flex lg:flex-row flex-col items-center justify-between gap-y-10'>
            <span className='md:w-[45%] w-full h-[60vh] hidden 2sm:flex flex-col items-center overflow-hidden justify-center' data-aos='zoom-in'>
                <img src={order} alt='order'/>
            </span>

            <span className='md:max-w-[53%] xl:w-[45%] w-full min-h-[60vh] flex flex-col items-center justify-cente'>
                <form className='w-full flex flex-col flex-wrap items-start justify-start gap-4 px-2 pt-[5vh]'>

                    <div className='w-full flex flex-col sm:flex-row gap-3 items-baseline justify-between '>
                        <span className='md:w-[250px] sm:w-[45%] w-full mx-1' data-aos='zoom-in'>
                            <p className='font-light'>Name</p>
                            <input type='text' required placeholder='Enter your name' className='text-[16px] px-2 py-1 mt-1 rounded-sm outline-none md:w-[200px] w-full'/>
                        </span>

                        <span className='md:w-[250px] sm:w-[45%] w-full mx-1' data-aos='zoom-in'>
                            <p className='font-light'>Phone</p>
                            <input type='text' required placeholder='Enter your phone numder' className='text-[16px] px-2 py-1 mt-1 rounded-sm outline-none md:w-[200px] w-full'/>
                        </span>
                    </div>

                    <div className=' w-full flex flex-col sm:flex-row gap-3 items-baseline justify-between '>
                        <span className='md:w-[250px] sm:w-[45%] w-full mx-1' data-aos='zoom-in'>
                            <p className='font-light'>Email</p>
                            <input type='text' required placeholder='Enter your email address' className='text-[16px] px-2 py-1 mt-1 rounded-sm outline-none md:w-[200px] w-full'/>
                        </span>

                        <span className='md:w-[250px] sm:w-[45%] w-full mx-1' data-aos='zoom-in'>
                            <p className='font-light'>Order (Drinks)</p>
                            <input type='text' required placeholder='Enter your order (drinks)' className='text-[16px] px-2 py-1 mt-1 rounded-sm outline-none md:w-[200px] w-full'/>
                        </span>
                    </div>

                    <div className=' w-full flex flex-col sm:flex-row gap-3 items-baseline justify-between '>
                        <span className='md:w-[250px] sm:w-[45%] w-full mx-1' data-aos='zoom-in'>
                            <p className='font-light'>Order (Food & Snacks)</p>
                            <input type='text' required placeholder='Enter your order (food & snacks)' className='text-[16px] px-2 py-1 mt-1 rounded-sm outline-none md:w-[200px] w-full'/>
                        </span>

                        <span className='md:w-[250px] sm:w-[45%] w-full mx-1' data-aos='zoom-in'>
                            <p className='font-light'>Address</p>
                            <input type='text' required placeholder='Enter your address' className='text-[16px] px-2 py-1 mt-1 rounded-sm outline-none md:w-[200px] w-full'/>
                        </span>
                    </div>
                        
                    <button className='px-5 py-1 mt-3 bg-green-800 text-[#dedede] capitalize text-[20px] rounded-md hover:bg-[#dedede] hover:text-green-800 duration-500 border-[2px] border-green-800' data-aos='zoom-in'>order now</button>

                </form>
            </span>
        </div>

    </div>
  )
}

export default Order