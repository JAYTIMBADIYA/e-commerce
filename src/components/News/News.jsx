import React from 'react'
import New1 from '../../assets/new1.png'
import New2 from '../../assets/new2.png'
import New3 from '../../assets/new3.png'
import New4 from '../../assets/new4.png'
import New5 from '../../assets/new5.png'
import New6 from '../../assets/new6.png'

const News = () => {
  return (
    <div className='news mx-9'>
        <div className='grid grid-cols-3 gap-10'>
            <div className='flex justify-center gap-10 p-5 drop-shadow-lg border rounded-md'>
                <img src={New1} alt="" className='w-16 h-16 mt-3' />
                <div className='news-text'>
                    <h2 className='text-lg font-semibold'>Great Selections</h2>
                    <p>We offer hundreds of products and <br /> services to choose from in lower <br /> prices as low as 25% to 50% off.</p>
                </div>
            </div>

            
            <div className='flex justify-center gap-10 p-5 drop-shadow-lg border rounded-md'>
                <img src={New2} alt="" className='w-16 h-16 mt-3' />
                <div className='news-text'>
                    <h2 className='text-lg font-semibold'>All-in-one Marketplace</h2>
                    <p>We offer hundreds of products and <br /> services to choose from in lower <br /> prices as low as 25% to 50% off.</p>
                </div>
            </div>

            
            <div className='flex justify-center gap-10 p-5 drop-shadow-lg border rounded-md'>
                <img src={New3} alt="" className='w-16 h-16 mt-3' />
                <div className='news-text'>
                    <h2 className='text-lg font-semibold'>Hundreds of Merchants</h2>
                    <p>We offer hundreds of products and <br /> services to choose from in lower <br /> prices as low as 25% to 50% off.</p>
                </div>
            </div>  

            <div className='flex justify-center gap-10 p-5 drop-shadow-lg border rounded-md'>
                <img src={New4} alt="" className='w-16 h-16 mt-3' />
                <div className='news-text'>
                    <h2 className='text-lg font-semibold'>Budget Friendly</h2>
                    <p>We offer hundreds of products and <br /> services to choose from in lower <br /> prices as low as 25% to 50% off.</p>
                </div>
            </div>  

            <div className='flex justify-center gap-10 p-5 drop-shadow-lg border rounded-md'>
                <img src={New5} alt="" className='w-16 h-16 mt-3' />
                <div className='news-text'>
                    <h2 className='text-lg font-semibold'>More Great Offers</h2>
                    <p>We offer hundreds of products and <br /> services to choose from in lower <br /> prices as low as 25% to 50% off.</p>
                </div>
            </div>  

            <div className='flex justify-center gap-10 p-5 drop-shadow-lg border rounded-md'>
                <img src={New6} alt="" className='w-16 h-16 mt-3' />
                <div className='news-text'>
                    <h2 className='text-lg font-semibold'>Easy to Shop + Navigate</h2>
                    <p>We offer hundreds of products and <br /> services to choose from in lower <br /> prices as low as 25% to 50% off.</p>
                </div>
            </div>            
        </div>
      
    </div>
  )
}

export default News
