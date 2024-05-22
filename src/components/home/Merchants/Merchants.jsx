import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Merchants.css';
import { Navigation, } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import A1 from '../../../assets/A1.png'
import A2 from '../../../assets/A2.png'
import A3 from '../../../assets/A3.png'
import A4 from '../../../assets/A4.png'
import A5 from '../../../assets/A5.png'
import A6 from '../../../assets/A6.png'
import A7 from '../../../assets/A7.png'
import A8 from '../../../assets/A8.png'
import A9 from '../../../assets/A9.png'
import A10 from '../../../assets/A10.png'
import A11 from '../../../assets/A11.png'
import A12 from '../../../assets/A12.png'
import A13 from '../../../assets/A13.png'
import A14 from '../../../assets/A14.png'
import A15 from '../../../assets/A15.svg'
import A16 from '../../../assets/A16.png'
import A17 from '../../../assets/A17.png'
import Slider from '../Slider/Slider';

const Merchants = () => {
  return (  
  <>

  <div className="merchants text-4xl mx-9 font-semibold mt-10">Category of Merchants</div>
    <div>
        <Swiper
       modules={[Navigation,]}
       spaceBetween={10}
       slidesPerView={7}
       navigation
       breakpoints={{
        270: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        534: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide className='text-black'>
        <img src={A1} alt="" className='max-sm:w-[100%] max-sm:h-[auto]'/>
        <p className='text-sm text-center mt-4 text-gray-600'>All Category</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A2} alt="" className='max-sm:w-[100%] max-sm:h-[auto]'/>
        <p className='text-sm text-center mt-5  text-gray-600'>Products</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A3} alt="" className='max-sm:w-[100%] max-sm:h-[auto]'/>
        <p className='text-sm text-center mt-5  text-gray-600'>Resturents</p>

      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A4} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Others</p>

      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A5} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Sports</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A6} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Mobile Top up</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A7} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Healthy & beauty</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A8} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Travels</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A9} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Taxi</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A10} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Communal</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A11} alt=""/>
        <p className='text-sm text-center mt-5  text-gray-600'>Auto</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A12} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Reapair</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A13} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Clothing & shoes</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A14} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Household</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A15} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Movies</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A16} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Animal</p>
      </SwiperSlide>
      <SwiperSlide className='text-black'>
        <img src={A17} alt="" />
        <p className='text-sm text-center mt-5  text-gray-600'>Books</p>
      </SwiperSlide>
    </Swiper>
    </div>

    <Slider/>
    </>
  )
}

export default Merchants
