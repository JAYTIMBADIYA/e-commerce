import React from "react";
import Group_1 from "../../../assets/Group 33528.png";
import Group_4 from "../../../assets/Group 33531.png";
import Group_3 from "../../../assets/Group 33530.png";
import Group_2 from "../../../assets/Group 33529.png";
import Group_5 from "../../../assets/Group 33704.png";
import Group_6 from "../../../assets/Group 33855.png";
import Group_7 from "../../../assets/Group 33856.png";
import Swap from "../../../assets/Swap.png";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";

const Transection = () => {
  return (
    <>
      <div className="bg-[#1CC0A0] py-3 mt-10">
        <div className="flex">
          <div>
            <img src={Swap} alt="" className="ml-10 mt-4"/>
          </div>
          <div className="merchants text-4xl ml-3 font-semibold mt-3 text-white">
            Transection
          </div>
        </div>
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={7}
            navigation
            className="px-20 "
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
            <SwiperSlide className="text-black">
              <img
                src={Group_1}
                alt=""
                className=" max-sm:w-[100%] max-sm:h-[auto]"
              />
              <p className="text-[15px] text-center mt-4 text-white">
                Resturents
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img
                src={Group_2}
                alt=""
                className="max-sm:w-[100%] max-sm:h-[auto]"
              />
              <p className="text-[15px] text-center mt-5  text-white">
                Resturents
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img
                src={Group_3}
                alt=""
                className="max-sm:w-[100%] max-sm:h-[auto]"
              />
              <p className="text-[15px] text-center mt-5  text-white">
                Clothing & shoes
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img src={Group_4} alt="" />
              <p className="text-[15px] text-center mt-5  text-white">
                Clothing & shoes
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img src={Group_5} alt="" />
              <p className="text-[15px] text-center mt-5  text-white">Sports</p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img src={Group_6} alt="" />
              <p className="text-[15px] text-center mt-5  text-white">
                Resturents
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img src={Group_7} alt="" />
              <p className="text-[15px] text-center mt-5  text-white">
                Healthy & beauty
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img src={Group_5} alt="" />
              <p className="text-[15px] text-center mt-5  text-white">
                Travels
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img src={Group_5} alt="" />
              <p className="text-[15px] text-center mt-5  text-white">Taxi</p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img src={Group_5} alt="" />
              <p className="text-[15px] text-center mt-5  text-white">
                Communal
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img src={Group_5} alt="" />
              <p className="text-[15px] text-center mt-5  text-white">Auto</p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img src={Group_5} alt="" />
              <p className="text-[15px] text-center mt-5  text-white">
                Reapair
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img src={Group_5} alt="" />
              <p className="text-[15px] text-center mt-5  text-white">
                Clothing & shoes
              </p>
            </SwiperSlide>
            <SwiperSlide className="text-black">
              <img src={Group_5} alt="" />
              <p className="text-[15px] text-center mt-5  text-white">
                Household
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Transection;
