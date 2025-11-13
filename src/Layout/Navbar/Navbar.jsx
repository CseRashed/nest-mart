import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import hot_deals from '../../assets/hot_deals.png'
import { Link } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'
import { RxCrossCircled } from 'react-icons/rx'

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)

    const navItems = [
        <Link to="/about">About</Link>,
        <Link to="/shop">Shop</Link>,
        <Link to="/mega-menu">Mega Menu</Link>,
        <Link to="/vendors">Vendors</Link>,
        <Link to="/blog">Blog</Link>,
        <Link to="/pages">Pages</Link>,
        <Link to="/contact">Contact</Link>
    ]

    return (
        <>
            {/* ------Mobile menu------ */}
            <div
                className={`fixed top-0 left-0 h-screen shadow-md bg-[#ECFFEC] z-50 transform transition-transform duration-300 ease-in-out 
                ${isOpen ? "translate-x-0 w-50" : "-translate-x-full w-50"}`}
            >
                <div onClick={() => setOpen(false)} className="flex justify-end mt-3 mr-3 text-2xl cursor-pointer hover:text-[#3BB77E] duration-400">
                    <RxCrossCircled />
                </div>

                <div className="flex flex-col gap-4 mt-10 items-center">
                    {navItems.map((item, idx) => (
                        <div className='hover:bg-[#3BB77E]/50 p-2 rounded-md  duration-400' key={idx} onClick={() => setOpen(false)}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* ------Main Navbar------ */}
            <div className='bg-white shadow-md'>
                <div className="flex justify-between items-center   relative z-40">
                    <div className="flex items-center gap-10">
                        {/* ------logo----- */}
                        <div className="flex items-center gap-2">
                            <img className="w-14" src={logo} alt="logo" />
                            <div className="flex flex-col items-start">
                                <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#3BB77E]">Nest</h1>
                                <span className="text-xs">MART & GROCERY</span>
                            </div>
                        </div>

                        <div className="hidden md:flex lg:flex text-[#253D4E] font-medium  items-center gap-2">
                            <img src={hot_deals} alt="hot_deals" />
                            <p>Hot Deals</p>
                        </div>
                    </div>

                    {/* -----lg device menubar---- */}
                    <div className="hidden md:hidden lg:flex gap-7 ">
                        {navItems.map((m, idx) => (
                            <div className='hover:bg-[#3BB77E]/50 p-2 rounded-md font-bold text-[#253D4E] duration-400' key={idx}>{m}</div>
                        ))}
                    </div>
                    <button className="py-2 px-6 bg-[#3BB77E] rounded-md text-white font-medium shadow-md 
transform transition-all duration-300 hover:scale-110 hover:bg-green-800 hover:shadow-lg">
                        Login
                    </button>


                    {/* ------small and medium device navbar icon------ */}
                </div>
                <div onClick={() => setOpen(true)} className="text-3xl font-black lg:hidden cursor-pointer">
                    <IoMenu />
                </div>
            </div>
        </>
    )
}
