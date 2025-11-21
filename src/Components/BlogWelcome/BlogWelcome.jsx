import React from 'react'
import img1 from '../../assets/about_left.png'
import img2 from '../../assets/about-1.png'
import img3 from '../../assets/about-2.png'
import img4 from '../../assets/about-3.png'
export default function BlogWelcome() {
    const img =[
        <img src={img2} alt="" />,
        <img src={img3} alt="" />,
        <img src={img4} alt="" />
    ]
  return (
    <div className='flex flex-col md:flex-row lg:flex-row  gap-10 items-center justify-between'>
      <img className='w-lg md:w-96 h-72 md:h-full lg:w-lg' src={img1} alt="" />
      <div>
        <h1 className='text-[#253D4E] text-xl md:text-2xl lg:text-4xl font-bold'>Welcome to nest</h1>
        <p className='my-2 md:my-2 lg:my-5 text-[#7E7E7E]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio odio tempora molestiae in facilis adipisci? Cumque reprehenderit minima omnis? Fugiat distinctio amet aliquid!</p>
        <p className='my-2 md:my-2 lg:my-5 text-[#7E7E7E]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio autem magnam, minima dolorum error fugiat, nulla natus cupiditate assumenda ea? Beatae, quisquam.
        </p>
        <div className='flex gap-2 md:gap-3 lg:gap-4 justify-between'>
            {
                img.map((m)=><div className='w-28 md:w-28 lg:w-full'>{m}</div>)
            }
        </div>
      </div>
    </div>
  )
}
