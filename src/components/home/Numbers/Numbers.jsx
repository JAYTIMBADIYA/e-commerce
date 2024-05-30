import React from 'react'

const Numbers = () => {
  return (
    <div className='numbers  mt-10'>
        <div className="md:grid grid-cols-4 justify-evenly py-10 bg-[#C4EEE6]">
            <div className='text-center'>
                <h1 className='text-7xl font-semibold text-emerald-500 max-sm:text-3xl'>1250</h1>
                <h3 className='text-xl mt-4 text-emerald-500 max-sm:text-[12px]'>Discounts + Offers</h3>
            </div>
            <div className='text-center'>
                <h1 className='text-7xl font-semibold text-emerald-500 max-sm:text-3xl'>2228</h1>
                <h3 className='text-xl mt-4 text-emerald-500 max-sm:text-[12px]'>Active Merchants</h3>
            </div>
            <div className='text-center'>
                <h1 className='text-7xl font-semibold text-emerald-500 max-sm:text-3xl'>5678</h1>
                <h3 className='text-xl mt-4 text-emerald-500 max-sm:text-[12px]'>Active Users</h3>
            </div>
            <div className='text-center'>
                <h1 className='text-7xl font-semibold text-emerald-500 max-sm:text-3xl'>3240</h1>
                <h3 className='text-xl mt-4 text-emerald-500 max-sm:text-[12px] max-sm:mt-1'>Average Spending OR</h3>
            </div>
        </div>
    </div>
  )
}

export default Numbers
