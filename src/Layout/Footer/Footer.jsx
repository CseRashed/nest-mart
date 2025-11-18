import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { IoHeadsetOutline, IoLocationOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { LuClock4 } from 'react-icons/lu';

function Footer() {
  const company =['About Us','Delivery Information','Privacy Policy','Terms & Conditions','Contact Us','Support Center','Careers'];
  const account =['Sign In','View Cart','My Wishlist','Track My Order','Help Ticket','Shipping Details','Compare products'];
  const corporate=['Become a Vendor','Affiliate Program','Farm Business','Farm Careers','Our Suppliers','Accessibility','Promotions'];
  const popular=['Milk & Flavoured Milk','Butter and Margarine','Eggs Substitutes','Marmalades','Sour Cream and Dips','Tea & Kombucha','Cheese'];
  return (
    <>
   <div className='grid grid-cols-2 md:grid-cols-3 justify-between lg:grid-cols-6  bg-green-100/50 px-2 py-4 '>
     <div>
       <div className="flex items-center gap-2">
          <img className="w-14" src={logo} alt="logo" />
          <div className="flex flex-col items-start">
           <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#3BB77E]">Nest</h1>
           <span className="text-xs">MART & GROCERY</span>
         </div>
       </div>
       <h1 className='text-[#253D4E] my-4.5 text-xs  '>Awesome grocery store website  template</h1>
       <h1 className='text-[#253D4E] flex text-xs gap-1 '> <span className='text-[#3BB77E]'><IoLocationOutline /></span> Address: 5171 W Campbell Ave undefined</h1>
       <p  className='text-[#253D4E] text-xs my-2.5'>Kent, Utah 53127 United States</p>
       <h1 className='text-[#253D4E] flex items-center gap-1 text-xs'> <span className='text-[#3BB77E]'><IoHeadsetOutline /></span> Call Us (+91)-540-025-124553</h1>
       <h1 className='text-[#253D4E] flex items-center gap-1 my-2.5 text-xs'><span className='text-[#3BB77E]'><HiOutlineMail /></span> Email sale@Nest.com</h1>
       <h1 className='text-[#253D4E] flex items-center gap-1 text-xs'><span className='text-[#3BB77E]'><LuClock4 /></span> Hours: 10:00 - 18:00, Mon - Sat</h1>
    </div>
    <div>
      <h1 className='text-[#253D4E] text-xl font-bold mb-4'>Company</h1>
      <ul className='flex flex-col gap-3'>
      {
        company.map((c,idx)=><Link className='text-[#253D4E] hover:text-orange-400' key={idx}>{c}</Link>)
      }
      </ul>
    </div>
    <div>
      <h1 className='text-[#253D4E] text-xl font-bold mb-4'>Account</h1>
      <ul className='flex flex-col gap-3'>
        {
          account.map((a,idx)=><Link className='text-[#253D4E] hover:text-orange-400' key={idx}>{a}</Link>)
        }
      </ul>
    </div>
    <div>
      <h1 className='text-[#253D4E] font-bold text-xl mb-4'>Corporate</h1>
      <ul className='flex flex-col gap-3'>
        {
          corporate.map((c,idx)=><Link className='text-[#253D4E] hover:text-orange-400' key={idx}>{c}</Link>)
        }
      </ul>
    </div>
    <div>
      <h1 className='text-[#253D4E] font-bold text-xl mb-4'>Popular</h1>
      <ul className='flex flex-col gap-3'>
        {
          popular.map((p,idx)=><Link className='text-[#253D4E] hover:text-orange-400' key={idx}>{p}</Link>)
        }
      </ul>
    </div>
    <div>
      <h1 className='text-[#253D4E] font-bold text-xl mb-4'>Install App</h1>
      <p className='text-[#253D4E] '>From App Store or Google Play</p>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <p className='text-[#253D4E]'>Secured Payment Gateways</p>
      <div>
        
      </div>
    </div>
   </div>
    </>
  )
}

export default Footer
