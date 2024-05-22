import React from 'react'
import Logo from "../../assets/Logo.png"
import Abo3 from '../../assets/GooglePlay.png'
import Abo4 from '../../assets/App Store.png'

const Footer = () => {
  return (
    <>
    <div className='footer bg-[#312B3E] px-10 py-10 '>
            <div className='md:grid grid-cols-2 justify-between '>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <ul className='md:grid grid-cols-5 gap-20 text-sm text-[#999CAD] mt-3 font-semibold max:xl:hidden'>
                        <li><a href="" className='text-[#1CC0A0]'>Home</a></li>
                        <li><a href="">All Offers</a></li>
                        <li><a href="">Partners</a></li>
                        <li><a href="">Merchants</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                    <hr  className='mt-8 bg-[#43385B] h-1 border-t-0'/>
                </div>
            </div>

            <div>
                <div className='mt-4 md:grid grid-cols-5 gap-10'>
                    <div className=''>
                        <p className='text-white'>Check latest promotions and discounts at unbeatable prices. <br />
                         Be a member now.</p>
                         <form className='md:grid grid-cols-2 gap-3 mt-5 max-sm:gap-1'>
                            <input type="text" placeholder='Your emails' className='py-2 pl-2 px-10 rounded-md max-md:px-5 max-sm:px-' />
                            <button className='py-2 px-5 bg-[#1CC0A0] text-white rounded-md max-sm:px-1'>Subscribe</button>
                         </form>
                         <p className='text-white mt-5'>Download app:</p>
                         <div className='flex gap-4 mt-3 w-[100px]'>
                            <img src={Abo3} alt="" />
                            <img src={Abo4} alt="" />
                         </div>
                         <p className='text-white mt-5'>Follow us:</p>
                         <div className='text-white flex gap-6 text-2xl mt-3'>
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                            <a href=""><i className="fa-brands fa-twitter"></i></a>
                            <a href=""><i className="fa-brands fa-linkedin"></i></a>
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                            <a href=""><i className="fa-brands fa-youtube"></i></a>
                         </div>
                    </div>

                    <div className=" ml-12 max-sm:ml-0">
                        <div className='max-sm:ml-1'>
                            <h4 className='text-xl font-semibold text-white'>About us</h4>
                            <ul className='mt-3 leading-[45px] text-md text-[#999CAD] '>
                                <li>About us</li>
                                <li>Delivery Information</li>
                                <li>Privacy Policy</li>
                                <li>Term & Condition</li>
                                <li>Our Brands</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                    <div>
                            <h4 className='text-xl font-semibold text-white'>Our Supports</h4>
                            <ul className='mt-3 leading-[45px] text-md text-[#999CAD] '>
                                <li>Specials Offers</li>
                                <li>Our Merchants</li>
                                <li>Shipping & Returns</li>
                                <li>Affiliates</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                    <div>
                            <h4 className='text-xl font-semibold text-white'>Services</h4>
                            <ul className='mt-3 leading-[45px] text-md text-[#999CAD] '>
                                <li>My Accounts</li>
                                <li>Order History</li>
                                <li>Wish List</li>
                                <li>Gift Vouchers</li>
                                <li>Special Codes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="">
                    <div>
                            <h4 className='text-xl font-semibold text-white'>Merchants Offers</h4>
                            <ul className='mt-3 leading-[45px] text-md text-[#999CAD] '>
                                <li>Discounted Products</li>
                                <li>Trending Offers</li>
                                <li>Latest Promotions</li>
                                <li>Clearance Sale</li>
                                <li>25% - 50% Sale</li>
                            </ul>
                        </div>
                    </div>      
                </div>
            </div>
    </div>

    <div className='py-2 text-center bg-[#43385B]'>
        <p className='text-[#999CAD] text-base'>© 2021 Goalital | All rights reserved</p>
    </div>

    </>
  )
}

export default Footer
