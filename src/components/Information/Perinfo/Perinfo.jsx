import React, { useState} from "react";
import Han from "../../../assets/Hand-1.png";
import Tot from "../../../assets/Total-1.png";
import Che from "../../../assets/Check-1.png";
import Cam from "../../../assets/IMAGE-105.png";
import ImagePicker from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css';

const Perinfo = () => {
  const [image, setImage] = useState(Cam);

  const handleImageChange = (newDataUri) => {
    setImage(newDataUri);
  };
  return (
    <div className="h-[auto]">
      <div className="supply bg-[#C4EEE6]">
        <div className="md:grid grid-cols-3 py-3">
          <div className="flex justify-center gap-5">
            <div>
              <img src={Che} alt="" />
            </div>
            <div className="mt-2 font-semibold text-[#1CC0A0]">
              <h2 className="text-xl">12 437</h2>
              <p>Available Point</p>
            </div>
          </div>

          <div className="flex justify-center gap-5 max-md:mt-4">
            <div>
              <img src={Han} alt="" />
            </div>
            <div className="mt-2 font-semibold text-[#1CC0A0]">
              <h2 className="text-xl">789</h2>
              <p>Point Used</p>
            </div>
          </div>

          <div className="flex justify-center gap-5 max-md:mt-4">
            <div>
              <img src={Tot} alt="" />
            </div>
            <div className="mt-2 font-semibold text-[#1CC0A0]">
              <h2 className="text-xl">QAR 238</h2>
              <p>Totel Saving</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 font-semibold my-9 mx-[160px] max-md:mx-[20px]">
        <p className="text-[#DDDFE4]">Home /</p>
        <p className="text-[#DDDFE4]">Account /</p>
        <p className="text-[#1CC0A0]">Information /</p>
        <p className="text-[#1CC0A0]">Security</p>
      </div>
      <div className="">
        <div className="mx-[160px] max-md:mx-[50px]">
          <div className="w-[200px] h-[200px] mb-20">
            <ImagePicker 
               config={{ borderRadius:'50%', width: '200px', height:'200px'  }}
               imageSrcProp={image}
               imageChanged={handleImageChange}
             />
          </div>
          <div className="">
            <div className="flex gap-5 mt-5 text-2xl font-semibold">
              <a href="">
                <i className="fa-solid fa-user text-[#2DC8D8]"></i>
              </a>
              <h1 className="text-[#43385B]">Personal Information</h1>
            </div>
            <div>
              <div className="md:grid grid-cols-2 mt-10">
                <form className="">
                  <input
                    type="text"
                    placeholder="No File Selected"
                    className="border-[#DDDFE4] border-2 pr-60 max-md:pr-20 pl-3 py-2 rounded-md  mt-2"
                  />
                  <button className="bg-[#1CC0A0] text-white px-10 max-md:px-5 py-2 rounded-md ml-5">
                    Submit
                  </button>
                </form>

                <form>
                  <input
                    type="text"
                    placeholder="No File Selected"
                    className="border-[#DDDFE4] border-2  w-[90%] pl-3 py-2 rounded-md  mt-2"
                  />
                </form>

                <form action="" className="flex flex-col mt-5">
                  <label htmlFor="" className="text-xl">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="kfc@info.com"
                    className="border-[#999CAD] border-2 w-[90%] pl-3 py-2 rounded-md  mt-2"
                  />
                </form>

                <form action="" className="flex flex-col mt-5">
                  <label htmlFor="" className="text-xl">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="border-[#DDDFE4] border-2 w-[90%] pl-3 py-2 rounded-md  mt-2"
                  />
                </form>
              </div>
              <hr className="mt-10" />

              <div className="flex gap-5 mt-5 text-2xl font-semibold">
                <a href="">
                  <i class="fa-solid fa-briefcase text-[#2DC8D8]"></i>
                </a>
                <h1 className="text-[#43385B]">Business Information</h1>
              </div>

              <div className="md:grid grid-cols-2 mt-9">
                <form action="" className="flex flex-col">
                  <label htmlFor="" className="text-xl">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="kfc@info.com"
                    className="border-[#999CAD] border-2 w-[90%] pl-3 py-2 rounded-md  mt-2"
                  />
                </form>
                <div>
                  <button className="bg-[#1CC0A0] text-white w-[25%] px-10 max-md:px-[6] max-md:w-[30%] py-3 mt-8 rounded-md ">
                    Submit
                  </button>
                </div>
              </div>

              <div className="flex gap-5 mt-16 text-2xl font-semibold ">
                <a href="">
                  <i class="fa-solid fa-location-dot text-[#2DC8D8]"></i>
                </a>
                <h1 className="text-[#43385B]">Address Information</h1>
              </div>

              <div className="md:grid grid-cols-2 mt-9">
                <form action="" className="flex flex-col mt-5">
                  <label htmlFor="" className="text-xl">
                    Street
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Street Name"
                    className="border-[#DDDFE4] border-2 w-[90%] pl-3 py-2 rounded-md  mt-2"
                  />
                </form>

                <form action="" className="flex flex-col mt-5">
                  <label htmlFor="" className="text-xl">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your city name"
                    className="border-[#DDDFE4] border-2 w-[90%] pl-3 py-2 rounded-md  mt-2"
                  />
                </form>

                <form action="" className="flex flex-col mt-5">
                  <label htmlFor="" className="text-xl">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Country Name"
                    className="border-[#DDDFE4] border-2 w-[90%] pl-3 py-2 rounded-md  mt-2"
                  />
                </form>
              </div>

              <div className="text-center mt-5">
              <button className="bg-[#1CC0A0] text-white  px-16 py-5 mt-8 rounded-md text-xl font-semibold">Save</button>
              </div>
              <hr className="mt-10"/>

              <div>
                <h1 className="text-4xl font-semibold text-[#43385B] mt-12">Security</h1>
              </div>
              
              <form className="flex flex-col mt-5">
                <label className="text-[#312B3E]">Password</label>
                <input type="password" className="border-[#999CAD] border-2 w-[40%] max-md:w-[100%] pl-3 py-2 rounded-md  mt-2" />
              </form>

              <div className=" mt-5">
              <button className="bg-[#FF406E] text-white  px-6 py-2 mt-3 rounded-md  font-semibold">Change Password</button>
              </div>

              <div className="flex flex-col mt-5">
                <p className="text-[#43385B] font-semibold">Two-factor authentication</p>
                <h2 className="p-3 pr-10 bg-[#F3F3F3] w-[55%] max-md:w-[100%] rounded-sm text-[#43385B] mt-4 mb-20"><i className="fa-solid fa-triangle-exclamation pr-2"></i>Two-factor authentication not enabled</h2>
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perinfo;
