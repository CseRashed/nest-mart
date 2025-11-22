import React from 'react'
import banner from '../../assets/about_subscribe.png'

export default function AboutSubscribe() {
  return (
    <div className='relative '>
   <img className='rounded-md md:rounded-xl lg:rounded-2xl mt-4 md:mt-5'  src={banner} alt="" />

      <div className='absolute bottom-2 md:bottom-7  lg:bottom-15 left-5 md:left-10 lg:left-15  '>
              <h1 className=' text-xs md:text-3xl lg:text-4xl font-bold text-[#253D4E]'>Stay home & get your daily <br />needs from our shop</h1>
              <p className='text-[#7E7E7E] text-xs md:text-xl lg:text-xl  md:my-2 lg:my-5 '>Start You'r Daily Shopping with <span className='text-[#3BB77E]'>Nest Mart</span></p>
              <div >
                  <input className='bg-white rounded-full w-32  md:w-56 lg:w-64 pr-15 border-none py-0 md:py-1 text-xs md:text-xs lg:text-xl lg:py-2   px-2 outline-none text-[#7E7E7E]' type="text" placeholder='Your email address' />
                  <button className='bg-[#3BB77E] shadow-md 
transform transition-all duration-300 hover:bg-green-800 hover:shadow-lg cursor-pointer relative -left-10  text-white px-2 py-0 text-xs md:text-xs lg:text-xl  md:py-1 lg:py-2 rounded-full mt-1'>Subscribe</button>
              </div>
            </div>
            <div >
            </div>
    </div>
  )
}
