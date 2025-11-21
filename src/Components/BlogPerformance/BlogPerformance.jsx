import React from 'react'
import img from '../../assets/about-5.png'
export default function BlogPerformance() {
  return (
    <div className=' my-7 md:mt-10 lg:mt-15'>
      <div className='flex flex-col md:flex-row lg:flex-row gap-8 items-center'>
        <img className='w-lg ' src={img} alt="" />
        <div>
            <h1 className='text-[#B6B6B6] font-medium'>Our Performance </h1>
            <h1 className='text-[#253D4E] text-2xl  md:text-2xl lg:text-3xl font-bold my-2 md:my-2  lg:my-5'>Your Partner for e-commerce grocery solution</h1>
            <p className='text-[#7E7E7E]'>
                Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            </p>
            <p className='text-[#7E7E7E] my-2 md:my-2  lg:my-5'>
                Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row lg:flex-row gap-4 justify-between mt-10'>
        <div>
            <h1 className='text-[#253D4E] text-xl font-bold mb-4'>
                Who we are
            </h1>
            <p className='text-[#7E7E7E]'>
                Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
            </p>
        </div>
        <div>
            <h1 className='text-[#253D4E] text-xl font-bold mb-4'>
                Our history
            </h1>
            <p className='text-[#7E7E7E]'>
                Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
            </p>
        </div>
        <div>
            <h1 className='text-[#253D4E] text-xl font-bold mb-4'>
                Our mission
            </h1>
            <p className='text-[#7E7E7E]'>
                Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
            </p>
        </div>
      </div>
    </div>
  )
}
