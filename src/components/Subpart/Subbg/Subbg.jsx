import React from "react";
import Crop from "../../../assets/cropped.png";
import Profile from "../../../assets/Profile Picture.png";

const Subbg = () => {

    const getCurrentFormattedDate = () => {
        const date = new Date();
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December',
        ];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`;
      };
    
      const currentFormattedDate = getCurrentFormattedDate();
  return (
    <div className="reletive ">
      <div>
        <div>
          <div
            className="conta-img bg-no-repeat pb-[250px] pt-10 bg-cover  w-[-webkit-fill-available] mt-10"
            style={{ "background-image": `url(${Crop})` }}
          >
            <div className="text-[40px] font-semibold text-white flex justify-center">
              <p className="px-96 text-center leading-relaxed max-md:px-5">
                What say about us
              </p>
            </div>
            <div className="text-center mt-4 text-white px-16 w-[60%] m-[auto] tracking-wide">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown. Lorem Ipsum has been
                the industry's standard dummy{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5  mx-auto">
          <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex ">
                  <div class="w-20 h-20 mr-3  rounded-full">
                    <img src={Profile} alt="" />
                  </div>
                  <h2 class="text-[#223263] font-semibold text-lg mt-1 ">
                     James Lawson
                     <ul className="flex gap-1 text-[#FFC833] text-[15px]">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                     </ul>
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-[15px] text-[#43385B]"> 
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lor L orem Ipsum is simply 
                  </p>
                  <p class="mt-5 text-[#9098B1]">
                    {currentFormattedDate}
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex ">
                  <div class="w-20 h-20 mr-3  rounded-full">
                    <img src={Profile} alt="" />
                  </div>
                  <h2 class="text-[#223263] font-semibold text-lg mt-1 ">
                     James Lawson
                     <ul className="flex gap-1 text-[#FFC833] text-[15px]">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                     </ul>
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-[15px] text-[#43385B]"> 
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lor L orem Ipsum is simply 
                  </p>
                  <p class="mt-5 text-[#9098B1]">
                    {currentFormattedDate}
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex ">
                  <div class="w-20 h-20 mr-3  rounded-full">
                    <img src={Profile} alt="" />
                  </div>
                  <h2 class="text-[#223263] font-semibold text-lg mt-1 ">
                     James Lawson
                     <ul className="flex gap-1 text-[#FFC833] text-[15px]">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                     </ul>
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-[15px] text-[#43385B]"> 
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lor L orem Ipsum is simply 
                  </p>
                  <p class="mt-5 text-[#9098B1]">
                    {currentFormattedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subbg;
