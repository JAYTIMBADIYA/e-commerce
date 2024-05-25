import React from "react";
import Portners from "../../../assets/two-confident.png";
import SupplySection from "../../home/Supply/Supply";
import Partners from "../../home/Partners/Partners";
import Abo1 from "../../../assets/image 124.png";
import Abo2 from '../../../assets/Illustration.png'

const Subitem1 = () => {
  return (
    <div className="h-[auto]">
      <div>
        <div>
          <div
            className="conta-img bg-no-repeat py-[100px] bg-cover  w-[-webkit-fill-available]"
            style={{ "background-image": `url(${Portners})` }}
          >
            <div className="text-[40px] font-semibold text-white flex justify-center">
              <p className="px-96 text-center leading-relaxed max-md:px-5">
                Become our partner and get benefits for yourself right now
              </p>
            </div>
            <div className="text-center mt-10">
              <button className="bg-[#1CC0A0] text-white px-10  py-3 rounded-md ">
                Become a partner
              </button>
            </div>
          </div>
          <SupplySection />
          <Partners />
          <div className="about-first mx-9 py-20">
            <div className="md:grid grid-cols-2">
              <div className="max-sm:text-sm">
                <h4 className="text-xl font-semibold text-amber-500">
                  About us
                </h4>
                <h3 className="text-4xl font-semibold my-2 leading-relaxed">
                  Welcome to Golalita{" "}
                </h3>
                <h5 className="text-lg text-ellipsis tracking-wider leading-relaxed text-gray-500">
                  Golalita offers you great products at unbeatable prices,{" "}
                  <br /> getaways that are unforgettable and services that you
                  will <br /> experience at all times.
                </h5>
                <h5 className="text-lg text-ellipsis tracking-wider leading-relaxed mt-7 text-gray-500">
                  Whatever you need, we make things happen from the <br />{" "}
                  comfort of your home, straight to real-life environment, we{" "}
                  <br /> pride our selves to bring you the best we offer.
                </h5>
                <button className="py-3 px-10 bg-[#1CC0A0] trenp text-white text-xl mt-10 rounded-lg max-sm:py-1 max-sm:px-5 max-sm:mt-1">
                  Shop now
                </button>
              </div>
              <div>
                <img src={Abo1} alt="" className="max-sm:mt-10" />
              </div>
            </div>
          </div>

          <div className="about-first mx-9 py-10">
            <div className="md:grid grid-cols-2">
              <div className="basis-1/2">
                <img src={Abo2} alt="" />
              </div>

              <div>
                <h3 className="text-3xl font-semibold  leading-relaxed text-[#312B3E]">
                  What you will get
                </h3>
                <div className="mt-10">
                  <h5 className="text-xl font-semibold">Bigger puchases</h5>
                  <p className="text-[16px]  text-[#43385B] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>

                <div className="mt-5">
                  <h5 className="text-xl font-semibold">Instant money</h5>
                  <p className="text-[16px]  text-[#43385B] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>

                <div className="mt-5">
                  <h5 className="text-xl font-semibold">Rewards Loyal Employee</h5>
                  <p className="text-[16px]  text-[#43385B] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>

                <div className="mt-5">
                  <h5 className="text-xl font-semibold">Great Offers Savings</h5>
                  <p className="text-[16px]  text-[#43385B] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
              </div>
            </div>
          </div>
              <div className="text-center">
                <button className=" py-3 px-10 bg-[#1CC0A0] text-white text-xl  rounded-lg max-sm:py-1 max-sm:px-5 max-sm:mt-1">
                  Become a partners
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Subitem1;
