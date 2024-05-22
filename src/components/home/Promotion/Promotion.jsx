import React from 'react'
import Pro from '../../../assets/pro.png'

const Promotion = () => {
  return (
    <div>
        <div className='rewarded mx-9 py-20'>
        <div className='md:grid grid-cols-2'>
            <div className=' mt-14 max-sm:text-[10px]'>
                <h4 className='text-xl font-semibold text-amber-500'>Subscribe Promotions</h4>
                <h3 className='text-4xl font-semibold my-3 leading-normal'>Subscribe Promotions</h3>
                <h5 className='text-lg text-ellipsis tracking-wider leading-relaxed text-gray-500'>Stay up to date when you subscribe to our newsletter every <br /> week. We will send you the latest information, promos and <br /> discounts from our merchants.</h5>
                <button className='py-3 px-10 bg-[#1CC0A0] trenp text-white text-xl my-10 rounded-lg '>Subscribe Newsletter</button>
            </div>
            <div>
                <img src={Pro} alt="" />
            </div> 
        </div>  
    </div>
      
    </div>
  )
}

export default Promotion
