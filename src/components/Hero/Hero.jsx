import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Hero.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper 
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="dcdc parallax-bg absolute left-0 right-0 w-[100%] h-[100%] bg-center bg-cover"
          style={{
            'background-image':
              'url(https://s3-alpha-sig.figma.com/img/0959/aed2/9165a0af7025c221f25161485daae699?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nS3AMPwW55smjbeoT6l7l2loWu4q-shl79dw8nF7O8C43rTkstUxPEwekx6YsUv8xallzKCXJ5~a6EavQ~g~qDk7gc0X3o-mRZkvuN43MS-L4euzLTnxNB8hNnX4fU1KRQU9n1Ccr7~0X7TLxZJiaSrCqDn~yXLZvBkCue3qXI6Wr18bwC~oVKHbFyw6TSSH~QpCqftjVwO5BaN5LrNM6peNiZda1PaB0QYgjIN6p98RRCYnvfKa0MiYhzUvwM2al9DCz4Q6ggNGRZzu47y8QvYTJWMCQSEUaKZYe2AHEZ~FWIRoDIhOrVE~Mc-Yv07i6CSDW~c0ejAAzQp32ztZkw__)',
              
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title text-center text-9xl font-bold  m-auto text-white max-md:text-4xl w-[80%] h-[50%] " data-swiper-parallax="-300">
            Sale Summer <br />Start Today
          </div>
          <div className="subtitle text-center mt-28" data-swiper-parallax="200">
            <button className='py-3 px-16 bg-[rgb(28,192,160)] text-white rounded-md'>Shop Now</button> 
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="title text-center text-9xl font-bold  m-auto text-gray-200 max-md:text-8xl w-[80%] h-[50%] " data-swiper-parallax="-300">
            Sale Summer <br />Start Today
          </div>
          <div className="subtitle text-center mt-28" data-swiper-parallax="-200">
            <button className='py-2 px-10 bg-[#1CC0A0] text-white'>Shop Now</button> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="title text-center text-9xl font-bold  m-auto text-gray-200 max-md:text-8xl w-[80%] h-[50%] " data-swiper-parallax="-300">
            Sale Summer <br />Start Today
          </div>
          <div className="subtitle text-center mt-28" data-swiper-parallax="-200">
            <button className='py-2 px-10 bg-[#1CC0A0] trenp text-white'>Shop Now</button> 
          </div> 
        </SwiperSlide>
      </Swiper>
    </>
  );
}
