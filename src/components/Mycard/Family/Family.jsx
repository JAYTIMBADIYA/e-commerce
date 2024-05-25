import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";

import Swap2 from "../../../assets/Swap2.png";
import Eli_1 from "../../../assets/Ellipse 83.png";
import Eli_2 from "../../../assets/Ellipse 84.png";
import Eli_3 from "../../../assets/Ellipse 82.png";
import Eli_4 from "../../../assets/Ellipse 86.png";

const Family = () => {
  return (
    <>
      <div className="px-10 mt-20 py-10 bg-[#F3F3F3]">
        <div >
          <div className="flex">
            <div>
              <img src={Swap2} alt="" className=" mt-4" />
            </div>
            <div className="merchants text-2xl ml-3 font-semibold mt-3">
              Amount Transfer
            </div>
          </div>
          <p className="mt-3 text-[#999CAD] text-[16px]">
            Select member who you want make amount transfer
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={5}
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
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide className="text-black">
            <img
              src={Eli_1}
              alt=""
              className=" max-sm:w-[100%] max-sm:h-[auto]"
            />
            <p className="text-xl font-semibold text-center mt-4 text-[#999CAD]">
              Daughter
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <img
              src={Eli_2}
              alt=""
              className="max-sm:w-[100%] max-sm:h-[auto]"
            />
            <p className="text-xl font-semibold text-center mt-5 text-[#999CAD]">
              Son
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <img
              src={Eli_3}
              alt=""
              className="max-sm:w-[100%] max-sm:h-[auto]"
            />
            <p className="text-xl font-semibold text-center mt-5 text-[#999CAD]">
              Wife
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <img src={Eli_4} alt="" />
            <p className="text-xl font-semibold text-center mt-5 text-[#999CAD]">
              Granddad
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-black">
            <img src={Eli_1} alt="" />
            <p className="text-xl font-semibold text-center mt-5 text-[#999CAD]">
              Sports
            </p>
          </SwiperSlide>
        </Swiper>
        <div className="text-center">
          <button className="mt-16 px-10 py-3  bg-[#1CC0A0]  text-white font-semibold rounded-md">
            Add Member
          </button>
        </div>
      </div>
    </>
  );
};

export default Family;
