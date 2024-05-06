import React, { useState } from 'react'
import './Navbar.css'
import Logo from "../../assets/Logo.png"
import Face from '../../assets/Ellipse 94.png'


const Navbar = () => {

  return (
    <>
    <div className='navbar px-10 md:w-[100%]'>
        
        <div className='flex justify-between mt-3'>
            {/* navbar logo */}
            <div className='navbar-logo md:w-[100%]'>
                <img src={Logo} alt="" />
            </div>
            {/* navbar menu */}
            <ul className={`nav-menu flex gap-6 mt-3 cursor-pointer text-base font-semibold text-gray-400 max-md:hidden`}>
                <li>Home</li>
                <li>All Offers</li>
                <li>Partners</li>
                <li>Merchants</li>
                <li>Contact us</li>
            </ul>
            {/* navbar search bar */}
            <div className='reletive'>
                <div className='group max-md:hidden'>
                    <form className='exam mt-2'>
                    <input type="text"  placeholder='Search' className='w-[250px] sm:w[200px] rounded-md border border-gray-600 pl-6 py-1'  />
                    </form>    
                </div>
            </div>
            {/* navbar-icon */}
            <div className='navbar-icon flex gap-7 text-xl mt-3 text-gray-500 max-md:hidden'>
                <a href=""><i className="fa-solid fa-bell"></i></a>
                <a href=""><i className="fa-solid fa-heart"></i></a>
                <a href=""><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            {/* navber last */}
            <div className='navbar-face flex gap-4 cursor-pointer max-md:hidden'>
                <img src={Face} alt="" className='w-12 h-12' />
                <h5 className='font-bold text-emerald-500 text-xl mt-2'>100 Points</h5>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
