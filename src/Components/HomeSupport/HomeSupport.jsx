import React from 'react'
import logo1 from '../../assets/icon-1.png';
import logo2 from '../../assets/icon-2.png';
import logo3 from '../../assets/icon-3.png';
import logo4 from '../../assets/icon-4.png';
import logo5 from '../../assets/icon-5.png';
export default function HomeSupport() {
    const tickets=[
        {logo:`${logo1}`, title: 'Best prices & offers', description:'Orders $50 or more'},
        {logo:`${logo2}`, title: 'Free delivery', description:'24/7 amazing services'},
        {logo:`${logo3}`, title: 'Great daily deal', description:'When you sign up'},
        {logo:`${logo4}`, title: 'Wide assortment', description:'Mega Discounts'},
        {logo:`${logo5}`, title: 'Easy returns', description:'Within 30 days'},
    ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 my-5 md:my-10 lg:my-15 items-center gap-3'>
      {
        tickets.map((ticket,idx)=><div className='flex items-center justify-center gap-5 bg-[#F4F6FA] px-2 py-4 rounded-xl' key={idx}>
            <div>
               <img  width ='40px'src={ticket.logo} alt="" />
            </div>
            <div>
                <h1 className='font-medium'>{ticket.title}</h1>
                <p className='text-[#ADADAD]'>{ticket.description}</p>
            </div>
        </div>)
      }
    </div>
  )
}
