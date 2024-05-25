import React from 'react'
import Cord from '../../../assets/Card.png'
import Line from '../../../assets/Line.png'

const Card = () => {
  return (
    <div>
      <div>
        <div>
            <ul className="flex gap-2 font-semibold my-9 mx-12">
              <li className="text-[#DDDFE4]"><a href=""> Home /</a> </li>
              <li className="text-[#DDDFE4]"><a href="" onClick={() => handleClick('Mycard')}>Account /</a></li>
              <li className="text-[#1CC0A0]"><a href="">My Card</a></li>
            </ul>
        </div>
        <div className='rewarded mx-9'>
            <div className=' md:grid grid-cols-2 gap-4'>
                <div className='max-lg:text-md max-sm:basis-0 py-10 mt-10'>
                    <div className="flex gap-5 text-2xl font-semibold">
                      <a href="">
                      <i class="fa-solid fa-credit-card text-[#2CD8D2]"></i>
                      </a>
                      <h1 className="text-[#43385B]">My Card</h1>
                    </div>
                    <h5 className='text-lg mt-14 text-ellipsis tracking-wider leading-relaxed text-gray-500 max-lg:text-md max-md:text-sm max-sm:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                    <button className='py-3 px-10 mt-10 bg-[#1CC0A0] trenp text-white text-xl my-4 rounded-lg max-lg:text-md max-md:text-sm max-md:py-2 max-md:px-5 max-sm:text-sm'>Add Member</button>
                </div>
                <div>
                    <div className='py-10 bg-[#F3F3F3] w-[90%] rounded-xl m-[auto]'>
                        <div className='flex justify-center'>
                            <img src={Cord} alt="" className='w-[550px]' />
                        </div>
                        <div className='flex justify-center'>
                            <img src={Line} alt="" className='w-[400px] mt-4' />
                        </div>
                        <h1 className='text-center mt-4 text-2xl'>1234567812345678</h1>
                    </div>
                </div>
            </div>  
    </div>
      </div>
    </div>
  )
}

export default Card
