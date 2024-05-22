import React from 'react'
import Reward from '../../assets/image 123.png'
import Ship_1 from '../../assets/0fjGQmYCRW8.png'
import Ship_2 from '../../assets/0fjGQmYCRW8 (1).png'
import Ship_3 from '../../assets/0fjGQmYCRW8 (2).png'
import Ship_4 from '../../assets/0fjGQmYCRW8 (3).png'

const Rewarded = () => {
  return (
    <>
    <div className='rewarded mx-9 py-20'>
        <div className=' md:grid grid-cols-2 gap-4'>
            <div className='max-lg:text-md max-sm:basis-0'>
                <h4 className='text-xl font-semibold text-amber-500'>Get Rewarded</h4>
                <h3 className='text-4xl font-semibold my-3 leading-normal max-sm:text-sm'>Earn more discounts up to 20% <br /> to 50% off on selections</h3>
                <h5 className='text-lg text-ellipsis tracking-wider leading-relaxed text-gray-500 max-lg:text-md max-md:text-sm max-sm:text-sm'>Whatever you need, we offer a selection of items where you <br /> can go shopping online, avail services from our merchants, <br /> and experience getaways near you.</h5>
                <button className='py-3 px-10 bg-[#1CC0A0] trenp text-white text-xl my-4 rounded-lg max-lg:text-md max-md:text-sm max-md:py-2 max-md:px-5 max-sm:text-sm'>Start Shopping</button>
            </div>
            <div>
                <img src={Reward} alt="" />
            </div> 
        </div>  
    </div>

    <div className="rewarded-ship mx-9 py-12">
        <div className="md:grid grid-cols-4 gap-3 ">
            <div>
                <div className="main-ship shadow-xl">
                    <img src={Ship_1} alt="" className='w-[100%]'  />
                    <div className="main-ship-text text-center py-6 max-sm:text-sm">
                        <h3 className='text-xl font-semibold '>We offer great value in <br /> discounts and offers</h3>
                        <p className='mt-3 font-semibold text-amber-400'>Join Now and be a Member</p>
                    </div>
                </div>


            </div>
            <div>
                <div className="main-ship shadow-xl ">
                    <img src={Ship_2} alt="" className='w-[100%] ' />
                    <div className="main-ship-text text-center py-6 max-sm:text-sm">
                        <h3 className='text-xl font-semibold'>Experience comfort <br /> and enjoy getaways</h3>
                        <p className='mt-3 font-semibold text-amber-400'>Go and See our Offers</p>
                    </div>
                </div>

            </div>
            <div>
                <div className="main-ship shadow-xl">
                    <img src={Ship_3} alt="" className='w-[100%]'/>
                    <div className="main-ship-text text-center py-6 max-sm:text-sm">
                        <h3 className='text-xl font-semibold'>We care about your needs <br /> and we deliver quickly</h3>
                        <p className='mt-3 font-semibold text-amber-400'>Receive your Order Today</p>
                    </div>
                </div>

            </div>
            <div>
                <div className="main-ship shadow-xl">
                    <img src={Ship_4} alt="" className='w-[100%]'/>
                    <div className="main-ship-text text-center py-6 max-sm:text-sm">
                        <h3 className='text-xl font-semibold'>Discover places that <br /> are unforgettable</h3>
                        <p className='mt-3 font-semibold text-amber-400'>Book Yours GetAways</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default Rewarded
