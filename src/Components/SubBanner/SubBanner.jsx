import React from 'react'
import { BiColor } from 'react-icons/bi'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function SubBanner() {
    const banners=[
        {title:'Everyday Fresh & Clean with Our Products',button:'Sho Now',img:'https://i.ibb.co.com/d4t0gFKB/alt.png'},
        {title:'Make your Breakfast Healthy and Easy',button:'Sho Now',img:'https://i.ibb.co.com/qFpBSKCt/alt-2.png'},
        {title:'The best Organic Products Online',button:'Sho Now',img:'https://i.ibb.co.com/sJ28PHBy/alt-3.png'},
    ]
  return (
    <div className='flex flex-col md:flex-row  lg:flex-row justify-between items-end  gap-5'>
      {
        banners.map((banner)=><div className='relative '>
           <div className='absolute bottom-8 md:bottom-2 lg:bottom-10 left-5 md:left-5 lg:left-10 w-42'>
             <h1 className='text-[#253D4E] font-bold text-xl'>{banner.title}</h1>
            <button className='mt-5 md:mt-3 lg:mt-5 flex items-center gap-1 px-4 md:px-2 lg:px-2 py-2 md:py-0.5 lg:py-1.5  bg-[#3BB77E] text-white  rounded-md md:rounded-md lg:rounded-md'  >{banner.button} <IoIosArrowRoundForward /></button>
           </div>
           <img src={banner.img} alt="" />
        </div>) 
      }
    </div>
  )
}
