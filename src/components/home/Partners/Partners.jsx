import React from 'react'
import Group from '../../../assets/Group 33526.png'
import Group_1 from '../../../assets/Group 33528.png'
import Group_2 from '../../../assets/Group 33529.png'
import Group_3 from '../../../assets/Group 33530.png'
import Group_4 from '../../../assets/Group 33531.png'
import Group_5 from '../../../assets/Group 33704.png'
import Group_6 from '../../../assets/Group 33855.png'
import Group_7 from '../../../assets/Group 33856.png'

const Partners = () => {
  return (
    <div className='partners mx-9 mt-14'>
        <div className='flex gap-5 max-sm:text-sm'>
            <img className='w-16 h-16' src={Group} alt="" />
            <p className='mt-2 text-4xl font-bold'>Premium Partners</p>
        </div>

        <div className="partners-brand flex justify-between text-center text-xl text-gray-500 font-semibold mt-7 flex-wrap max-sm:text-center">
            <div className=''>
                <img src={Group_1} alt="Group 33528.png" className='max-sm:w-[100px] max-sm:h-[100px]' />
                <h3>McDonald's</h3>
            </div>
            <div className=''>
                <img src={Group_2} alt="" className='max-sm:w-[100px] max-sm:h-[100px]'/>
                <h3>KFC</h3>
            </div>
            <div className=''>
                <img src={Group_3} alt="" className='max-sm:w-[100px] max-sm:h-[100px]'/>
                <h3>Adidas</h3>
            </div>
            <div className=''>
                <img src={Group_4} alt="" className='max-sm:w-[100px] max-sm:h-[100px]'/>
                <h3>New Balance</h3>
            </div>
            <div className=''>
                <img src={Group_5} alt="" className='max-sm:w-[100px] max-sm:h-[100px]'/>
                <h3>Starbucks</h3>
            </div>
            <div className=''>
                <img src={Group_6} alt="" className='max-sm:w-[100px] max-sm:h-[100px]'/>
                <h3>Nike</h3>
            </div>
            <div className=''>
                <img src={Group_7} alt="" className='max-sm:w-[100px] max-sm:h-[100px]'/>
                <h3>Burger King</h3>
            </div>

        </div>
      
    </div>
  )
}

export default Partners
