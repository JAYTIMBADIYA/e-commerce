import React from 'react'
import Cat_1 from '../../assets/Rectangle 2943.png'
import Cat_2 from '../../assets/Rectangle 2944.png'
import Cat_3 from '../../assets/Rectangle 2945.png'
import Cat_4 from '../../assets/Rectangle 2946.png'
import Cat_5 from '../../assets/Rectangle 2947.png'
import Cat_6 from '../../assets/Rectangle 2948.png'
import Cat_7 from '../../assets/Rectangle 2949.png'

const Popular = () => {
  return (
    <div className='popular mx-9'>
        <h3 className='text-4xl font-semibold'>Popular Category</h3>
        <div className='my-6'>
            <div className="grid grid-cols-3 gap-3">
                <div className='text-center py-32 item-center' style={{ backgroundImage: `url(${Cat_1})` }}>
                    <p className='text-white text-2xl font-semibold'>Products</p>
                </div>

                <div className='text-center py-32 item-center' style={{ backgroundImage: `url(${Cat_2})` }}>
                    <p className='text-white text-2xl font-semibold'>Sports</p>
                </div>

                <div className='text-center py-72 item-center row-span-2' style={{ backgroundImage: `url(${Cat_3})` }}>
                    <p className='text-white text-2xl font-semibold'>Clothing & shoes</p>
                </div>

                <div className='text-center py-72 item-center row-span-2' style={{ backgroundImage: `url(${Cat_4})` }}>
                    <p className='text-white text-2xl font-semibold'>Auto</p>
                </div>

                <div className='text-center py-32 item-center' style={{ backgroundImage: `url(${Cat_5})` }}>
                    <p className='text-white text-2xl font-semibold'>Restaurants</p>
                </div>

                <div className='text-center py-32 item-center' style={{ backgroundImage: `url(${Cat_6})` }}>
                    <p className='text-white text-2xl font-semibold'>Healthy & Beuty</p>
                </div>

                <div className='text-center py-32 item-center' style={{ backgroundImage: `url(${Cat_7})` }}>
                    <p className='text-white text-2xl font-semibold'>Appliances</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Popular



