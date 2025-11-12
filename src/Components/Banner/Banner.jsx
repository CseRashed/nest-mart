import React from 'react'
import banner from '../../assets/banner.png'
export default function Banner() {
  return (
    <div className=''>
      <div className='absolute md:top-34  lg:top-46 top-30 flex flex-col  left-5 md:left-20 lg:left-28 gap-0 md:gap-5  '>
        <h1 className=' text-xl md:text-3xl lg:text-5xl font-bold text-[#253D4E]'>Fresh Vegetables <br />Big discount</h1>
        <p className='text-[#7E7E7E] text-xs md:text-xl lg:text-xl '>Save up to 50% off on your first order</p>
        <div>
            <input className='bg-white rounded-full w-56 md:w-56 lg:w-64 pr-20 border-none py-0.5 md:py-1 lg:py-2 px-4  outline-none text-[#7E7E7E]' type="text" placeholder='Search product' />
            <button className='bg-[#3BB77E] relative -left-18  text-white px-4 py-0.5  md:py-1 lg:py-2 rounded-full'>Search</button>
        </div>
      </div>
      <div >
    <img className='rounded-2xl mt-2 md:mt-5'  src={banner} alt="" />
      </div>
    </div>
  )
}
