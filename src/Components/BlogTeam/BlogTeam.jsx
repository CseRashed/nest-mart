import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import img1 from '../../assets/Main.png'
import img2 from '../../assets/Main-1.png'
export default function BlogTeam() {
  return (
    <div className='mt-5 md:mt-1 lg:mt-15'>
      <h1 className='text-[#253D4E] font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-5 md:mb-10 lg:mb-10'>Our Team</h1>
      <div className='flex flex-col md:flex-col lg:flex-row  gap-5'>
        <div className='flex-1'>
            <p className='text-[#3BB77E] '>Our Team</p>
            <h1 className='text-[#253D4E] text-xl md:text-2xl lg:text-4xl font-bold my-3 md:my-3 lg:my-5'>
                Meet Our Expert Team
            </h1>
            <p className='text-[#7E7E7E]'>
                Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
            </p>
            <p className='text-[#7E7E7E] my-3 md:my-3 lg:my-5'>
                Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
            </p>
            <button className='text-white bg-[#3BB77E] p-2 rounded-md'>
                View All Members
            </button>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row gap-5' >
            <div className=''>
                <img src={img1} alt="" />
                <div className='bg-white w-50 py-2  flex flex-col items-center gap-3 shadow rounded-md relative bottom-15  left-1/5 md:left-1/4 lg:left-1/4 text-center '>
                    <h1 className='text-[#253D4E] text-xl font-bold'>H. Merinda</h1>
                    <p className='text-[#7E7E7E]'>CEO & Co-Founder</p>
                    <div className='flex gap-3 text-[#3BB77E]'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>
            </div>
            <div>
                <img src={img2} alt="" />
                <div className='bg-white py-2 w-50 flex flex-col items-center gap-3 shadow rounded-md relative bottom-15 left-1/5 md:left-1/4 lg:left-1/4 text-center '>
                    <h1 className='text-[#253D4E] text-xl font-bold'>H. Merinda</h1>
                    <p className='text-[#7E7E7E]'>CEO & Co-Founder</p>
                    <div className='flex gap-3 text-[#3BB77E]'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
