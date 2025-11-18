import React, { useEffect, useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'

export default function HomeProducts() {
    const [products, setProducts] =useState([])
    useEffect(()=>{
        fetch('/product.json')
        .then((res)=>res.json())
        .then((data)=>setProducts(data))

    },[])
    console.log(products)
  return (
    <div className='mt-5 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-5 items-center justify-between'>
      {
        products.map((product,idx)=><div className='shadow p-3 rounded-xl' key={idx}>
          <div className='bg-[#B6B6B6]/15 rounded-xl '>
            <img className=' w-full h-full flex items-center ' src={product.img} alt="" />
          </div>
            <p className='text-[#ADADAD]'>{product.brand}</p>
            <h1 className='text-[#253D4E] font-bold line-clamp-1'>{product.productName}</h1>
            <div className='flex gap-8 my-2 md:my-4 lg:my-4'>
                <h1>{product.rating}</h1>
                <p className='text-[#B6B6B6]'>{product.stoke}</p>
            </div>
            <h1 className='mb-2 md:mb-4 lg:mb-4 text-[#B6B6B6]'>
            By <span className='text-[#3BB77E] font-medium'> {product.poweredBy}</span>
            </h1>
            <div className='flex justify-between'>
                <h1 className='text-[#3BB77E] font-bold'>${product.currentPrice} <span className='text-[#B6B6B6] text-xs line-through'>{product.oldPrice}</span> </h1>
            <button className='flex items-center bg-[#DEF9EC] px-2 py-1 rounded-xs text-[#3BB77E] font-medium gap-1'><IoCartOutline /> Add</button>
            </div>
        </div>)
      }
    </div>
  )
}
