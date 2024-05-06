import React from 'react'

const Numbers = () => {
  return (
    <div className='numbers  mt-10'>
        <div className="number-text flex justify-evenly py-10 bg-[#C4EEE6]">
            <div className='text-center'>
                <h1 className='text-7xl font-semibold text-emerald-500'>1250</h1>
                <h3 className='text-xl mt-4 text-emerald-500'>Discounts + Offers</h3>
            </div>
            <div className='text-center'>
                <h1 className='text-7xl font-semibold text-emerald-500'>2228</h1>
                <h3 className='text-xl mt-4 text-emerald-500'>Active Merchants</h3>
            </div>
            <div className='text-center'>
                <h1 className='text-7xl font-semibold text-emerald-500'>3240</h1>
                <h3 className='text-xl mt-4 text-emerald-500'>Active Users</h3>
            </div>
            <div className='text-center'>
                <h1 className='text-7xl font-semibold text-emerald-500'>5678</h1>
                <h3 className='text-xl mt-4 text-emerald-500'>Average Spending OR</h3>
            </div>
        </div>
    </div>
  )
}

export default Numbers
