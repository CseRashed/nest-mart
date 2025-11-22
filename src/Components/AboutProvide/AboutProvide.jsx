import React from 'react'
import img1 from '../../assets/icon-1.png'
import img2 from '../../assets/icon-2.png'
import img3 from '../../assets/icon-3.png'
import img4 from '../../assets/icon-4.png'
import img5 from '../../assets/icon-5.png'
import img6 from '../../assets/icon-6.png'
export default function AboutProvide() {
    const cart =[
        {img:`${img1}`, 
        title:'Best Prices and offers',
        description:'There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration in some form',
        button:'Read more'

        },
        {img:`${img2}`, 
        title:'Wide Assortment',
        description:'Wide AThere are many variations of passages of Lorem Ipsum available, but th majority have suffered alteration in some form',
        button:'Read more'

        },
        {img:`${img3}`, 
        title:'Free Delivery',
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
        button:'Read more'

        },
        {img:`${img4}`, 
        title:'Easy Returns',
        description:'There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration in some form',
        button:'Read more'

        },
        {img:`${img5}`, 
        title:'100% Satisfaction',
        description:'There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration in some form',
        button:'Read more'

        },
        {img:`${img6}`, 
        title:'Great Daily Deal',
        description:'There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration in some form',
        button:'Read more'

        },
    ]
  return (
    <div>
      <h1 className='text-[#253D4E] text-center my-15 text-xl md:text-2xl lg:text-4xl font-bold'>What We Provide</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center'>
    {
        cart.map((c,idx)=><div className='flex flex-col items-center shadow p-2 rounded-xl ' key={idx}>
            <img src={c.img} alt="" />
            <h1 className='my-4 text-[#253D4E] font-bold'>{c.title}</h1>
            <p className='text-[#7E7E7E]'>{c.description}</p>
            <button className='text-[#3BB77E] my-6'>{c.button}</button>
        </div>)
    }
      </div>
    </div>
  )
}
