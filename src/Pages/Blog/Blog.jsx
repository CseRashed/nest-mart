import React, { useEffect, useState } from 'react'
import img from '../../assets/recepie.png'
import { RxDashboard } from 'react-icons/rx'
import { TbAdjustmentsSearch } from 'react-icons/tb'
export default function Blog() {
    const [blogs, setBlogs]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then((res)=>res.json())
        .then((data)=>setBlogs(data))
    },[])
  return (
    <div >
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-2 md:gap-5 lg:gap-5'>
            <img src={img} alt="" />
            <h1 className='text-[#253D4E]   md:text-2xl lg:text-4xl font-bold'> Recips Articles</h1>
        </div>
        <div className='flex itce gap-4'>
            <div className='shadow rounded-md p-1 md:p-2 lg:p-3 flex gap-1 items-center  text-[#777777]'>
                <RxDashboard />
                <h1>Show: {blogs.length}</h1>
                <img src="" alt="" />
            </div>
            <div className='shadow rounded-md p-1 md:p-2 lg:p-3 flex gap-1 items-center text-[#777777]'>
                <TbAdjustmentsSearch />
                <h1>Sort: Featured</h1>
                <img src="" alt="" />
            </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5'>
        {
            blogs.map((b,idx)=><div className='shadow p-2 md:p-4 lg:p-4 rounded-2xl' key={idx}>
                <img className='rounded-xl' src={b.image} alt="" />
                <div className='flex flex-col items-center px-8 gap-2 md:gap-3 lg:gap-5 text-center'>
                    <p className='text-[#B6B6B6] mt-5'>{b.category}</p>
                <h1 className=' md:text-xl lg:text-2xl text-[#253D4E] font-bold'>{b.title}</h1>
                <div className='flex flex-row gap-5 text-[#B6B6B6]'>
                    <h>{b.date}</h>
                    <h>{b.views}</h>
                    <h>{b.readTime}</h>
                </div>
                </div>
            </div>)
        }
      </div>
    </div>
  )
}
