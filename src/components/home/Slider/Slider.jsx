import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img_1 from '../../../assets/image 112.png'
import img_2 from '../../../assets/image 112 (1).png'
import img_3 from '../../../assets/image 112 (2).png'
import img_4 from '../../../assets/f2.jpg'
import img_5 from '../../../assets/f3.jpg'
import img_6 from '../../../assets/I3.jpg'
import img_7 from '../../../assets/f4.jpg'
import img_8 from '../../../assets/f5.jpg'
import img_9 from '../../../assets/f6.webp'
import img_10 from '../../../assets/f7.jpg'


import G_1 from '../../../assets/Burger_King_logo_(1999) 1.png'
import G_2 from '../../../assets/Starbucks_Corporation_Logo_2011 1.png'
import G_3 from '../../../assets/g3.jpg'
import G_4 from '../../../assets/lo-1.png'
import G_5 from '../../../assets/lo-2.png'
import G_6 from '../../../assets/lo-3.png'
import G_7 from '../../../assets/lo-4.png'

import Noti from '../../../assets/Notification.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider({props,img}) {
  return (
    <div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
            320:{
              slidesPerView: 1,
              spaceBetween: 5

            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
      >
        <SwiperSlide>
                <div className='relative shadow-xl rounded-b-lg'>
                    <img src={img_1} alt="" />
                    <div className='flex justify-between'>
                        <img className='w-16 h-16 p-2 bg-white rounded-full absolute top-56 left-5 shadow-xl max-sm:top-32 '  src={G_1} alt="" />
                        <img className='w-10 h-10 p-2 absolute right-5 top-60 top bg-white rounded-full shadow-xl max-sm:top-36 '  src={Noti} alt="" />
                    </div>
                    <div className="slider-text flex justify-between mx-5 mt-10 pb-3">
                        <h1 className='text-black font-semibold'>Burger King</h1>
                        <ul className='flex text-sm text-yellow-400'>
                            <h4 className='mr-3'>4.5</h4>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-regular fa-star-half-stroke"></i></li>
                        </ul>
                    </div>
                </div>

        </SwiperSlide>

        <SwiperSlide>
        <div className='relative shadow-xl rounded-b-lg'>
                    <img src={img_2} alt="" />
                    <div className='flex justify-between'>
                        <img className='w-16 h-16 p-2 bg-white rounded-full absolute top-56 left-5 shadow-xl max-sm:top-32 '  src={G_2} alt="" />
                        <img className='w-10 h-10 p-2 absolute right-5 top-60 top bg-white rounded-full shadow-xl max-sm:top-36 '  src={Noti} alt="" />
                    </div>
                    <div className="slider-text flex justify-between mx-5 mt-10 pb-3">
                        <h1 className='text-black font-semibold'>Starbucks</h1>
                        <ul className='flex text-sm text-yellow-400'>
                            <h4 className='mr-3'>4.5</h4>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-regular fa-star-half-stroke"></i></li>
                        </ul>
                    </div>
                </div>

        </SwiperSlide>

        <SwiperSlide>
        <div className='relative shadow-xl rounded-b-lg'>
                    <img src={img_3} alt="" />
                    <div className='flex justify-between'>
                        <img className='w-16 h-16 p-2 bg-white rounded-full absolute top-56 left-5 shadow-xl max-sm:top-32 '  src={G_3} alt="" />
                        <img className='w-10 h-10 p-2 absolute right-5 top-60 top bg-white rounded-full shadow-xl max-sm:top-36 '  src={Noti} alt="" />
                    </div>
                    <div className="slider-text flex justify-between mx-5 mt-10 pb-3">
                        <h1 className='text-black font-semibold'>Nike</h1>
                        <ul className='flex text-sm text-yellow-400'>
                            <h4 className='mr-3'>4.5</h4>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-regular fa-star-half-stroke"></i></li>
                        </ul>
                    </div>
                </div>

        </SwiperSlide>

        <SwiperSlide>
            <div className='relative shadow-xl rounded-b-lg my-5'>
                    <img src={img_4} alt="" />
                    <div className='flex justify-between'>
                        <img className='w-16 h-16 bg-contain p-1 bg-white rounded-full absolute top-56 left-5 shadow-xl max-sm:top-36 '  src={G_7} alt="" />
                        <img className='w-10 h-10 p-2 absolute right-5 top-60 top bg-white rounded-full shadow-xl max-sm:top-40'  src={Noti} alt="" />
                    </div>
                    <div className="slider-text flex justify-between mx-5 mt-10 pb-3">
                        <h1 className='text-black font-semibold'>Burger King</h1>
                        <ul className='flex text-sm text-yellow-400'>
                            <h4 className='mr-3'>4.5</h4>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-regular fa-star-half-stroke"></i></li>
                        </ul>
                    </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='relative shadow-xl rounded-b-lg'>
                    <img src={img_5} alt="" />
                    <div className='flex justify-between'>
                        <img className='w-16 h-16 p-2 bg-white rounded-full absolute top-48 left-5 shadow-xl max-sm:top-36 '  src={G_6} alt="" />
                        <img className='w-10 h-10 p-2 absolute right-5 top-52 bg-white rounded-full shadow-xl max-sm:top-40 '  src={Noti} alt="" />
                    </div>
                    <div className="slider-text flex justify-between mx-5 mt-10 pb-3">
                        <h1 className='text-black font-semibold'>Burger King</h1>
                        <ul className='flex text-sm text-yellow-400'>
                            <h4 className='mr-3'>4.5</h4>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-regular fa-star-half-stroke"></i></li>
                        </ul>
                    </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='relative shadow-xl rounded-b-lg'>
                    <img src={img_6} alt="" />
                    <div className='flex justify-between'>
                        <img className='w-16 h-16 p-2 bg-white rounded-full absolute top-48 left-5 shadow-xl max-sm:top-36 '  src={G_4} alt="" />
                        <img className='w-10 h-10 p-2 absolute right-5 top-52 top bg-white rounded-full shadow-xl max-sm:top-40 '  src={Noti} alt="" />
                    </div>
                    <div className="slider-text flex justify-between mx-5 mt-10 pb-3">
                        <h1 className='text-black font-semibold'>Burger King</h1>
                        <ul className='flex text-sm text-yellow-400'>
                            <h4 className='mr-3'>4.5</h4>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-regular fa-star-half-stroke"></i></li>
                        </ul>
                    </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='relative shadow-xl rounded-b-lg'>
                    <img src={img_7} alt="" />
                    <div className='flex justify-between'>
                        <img className='w-16 h-16 p-2 bg-white rounded-full absolute top-48 left-5 shadow-xl max-sm:top-36'  src={G_2} alt="" />
                        <img className='w-10 h-10 p-2 absolute right-5 top-52 top bg-white rounded-full shadow-xl max-sm:top-40'  src={Noti} alt="" />
                    </div>
                    <div className="slider-text flex justify-between mx-5 mt-10 pb-3">
                        <h1 className='text-black font-semibold'>Burger King</h1>
                        <ul className='flex text-sm text-yellow-400'>
                            <h4 className='mr-3'>4.5</h4>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-regular fa-star-half-stroke"></i></li>
                        </ul>
                    </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='relative shadow-xl rounded-b-lg'>
                    <img src={img_8} alt="" />
                    <div className='flex justify-between'>
                        <img className='w-16 h-16 p-2 bg-white rounded-full absolute top-48 left-5 shadow-xl max-sm:top-36'  src={G_5} alt="" />
                        <img className='w-10 h-10 p-2 absolute right-5 top-52 top bg-white rounded-full shadow-xl max-sm:top-40'  src={Noti} alt="" />
                    </div>
                    <div className="slider-text flex justify-between mx-5 mt-10 pb-3">
                        <h1 className='text-black font-semibold'>Burger King</h1>
                        <ul className='flex text-sm text-yellow-400'>
                            <h4 className='mr-3'>4.5</h4>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-regular fa-star-half-stroke"></i></li>
                        </ul>
                    </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='relative shadow-xl rounded-b-lg'>
                    <img src={img_9} alt="" />
                    <div className='flex justify-between'>
                        <img className='w-16 h-16 p-2 bg-white rounded-full absolute top-48 left-5 shadow-xl max-sm:top-36'  src={G_7} alt="" />
                        <img className='w-10 h-10 p-2 absolute right-5 top-52 top bg-white rounded-full shadow-xl max-sm:top-40'  src={Noti} alt="" />
                    </div>
                    <div className="slider-text flex justify-between mx-5 mt-10 pb-3">
                        <h1 className='text-black font-semibold'>Burger King</h1>
                        <ul className='flex text-sm text-yellow-400'>
                            <h4 className='mr-3'>4.5</h4>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-regular fa-star-half-stroke"></i></li>
                        </ul>
                    </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='relative shadow-xl rounded-b-lg'>
                    <img src={img_10} alt="" />
                    <div className='flex justify-between'>
                        <img className='w-16 h-16 p-2 bg-white rounded-full absolute top-48 left-5 shadow-xl max-sm:top-36'  src={G_1} alt="" />
                        <img className='w-10 h-10 p-2 absolute right-5 top-52 bg-white rounded-full shadow-xl max-sm:top-40'  src={Noti} alt="" />
                    </div>
                    <div className="slider-text flex justify-between mx-5 mt-10 pb-3">
                        <h1 className='text-black font-semibold'>Burger King</h1>
                        <ul className='flex text-sm text-yellow-400'>
                            <h4 className='mr-3'>4.5</h4>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-regular fa-star-half-stroke"></i></li>
                        </ul>
                    </div>
                </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

