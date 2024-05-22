import React from "react";
import Data from "../../../assets/data";


const Kfc2 = () => {
  const selectedData = Data.slice(0, 3);
  
  return (
    <div>
      <div className="w-[100%]">
        <div className="md:grid grid-cols-3 p-4 gap-10">
          {selectedData.map((item, index) => (
            <div
              className="main-box"
              key={index}
              onClick={() => handleClick("viewoffer", Data[index])}
            >
              <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md py-4 pl-3">
                <div className="flex justify-between">
                  <div className="flex">
                    <img
                      onClick={() => handleClick("img")}
                      src={item.logo1}
                      alt=""
                    />
                    <h1 className="mt-3 font-semibold">{item.name}</h1>
                  </div>
                  <div
                    className={`discount  font-semibold border-2 rounded-l-lg px-1 ${
                      item.dis === "-20%" ? "bg-[#FF0000]" : "bg-[#FFB800]"
                    }`}
                  >
                    <h2 className="text-white">
                      {item.dis} <br /> Discount
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center m-[auto] w-[300px] h-[150px] max-md:w-[200px] max-md:h-[100px]">
                  <img src={item.cen_img} alt="" />
                </div>
                <div className="font-semibold">
                  <h4 className="text-[#DDDFE4] line-through">{item.qar_1}</h4>
                  <h4 className="text-[#2DC8D8]">{item.qar_2}</h4>
                </div>
                <hr />

                <div className="mt-2">
                  <div>
                    <h1 className="text-xl font-semibold">{item.head}</h1>
                    <p className="mt-2 text-balance text-[#999CAD] max-md:text-sm">
                      {item.text}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2 p-2 border-2 w-[90px]  rounded-full">
                      <i>
                        <item.ico_1 />
                      </i>
                      <p>{item.ico1_text}</p>
                    </div>
                    <div className="flex gap-2 p-2 border-2 w-[90px]  rounded-full">
                      <i>
                        <item.ico_2 />
                      </i>
                      <p>{item.ico2_text}</p>
                    </div>
                    <div className="flex gap-2 p-2 border-2 w-[90px]  rounded-full">
                      <i>
                        <item.ico_3 />
                      </i>
                      <p>{item.ico3_text}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md py-4 pl-3 mt-10">
                <div className="flex justify-between">
                  <div className="flex">
                    <img
                      onClick={() => handleClick("img")}
                      src={item.logo1}
                      alt=""
                    />
                    <h1 className="mt-3 font-semibold">{item.name}</h1>
                  </div>
                  <div
                    className={`discount  font-semibold border-2 rounded-l-lg px-1 ${
                      item.dis === "-20%" ? "bg-[#FF0000]" : "bg-[#FFB800]"
                    }`}
                  >
                    <h2 className="text-white">
                      {item.dis} <br /> Discount
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center m-[auto] w-[300px] h-[150px] max-md:w-[200px] max-md:h-[100px]">
                  <img src={item.cen_img} alt="" />
                </div>
                <div className="font-semibold">
                  <h4 className="text-[#DDDFE4] line-through">{item.qar_1}</h4>
                  <h4 className="text-[#2DC8D8]">{item.qar_2}</h4>
                </div>
                <hr />

                <div className="mt-2">
                  <div>
                    <h1 className="text-xl font-semibold">{item.head}</h1>
                    <p className="mt-2 text-balance text-[#999CAD] max-md:text-sm">
                      {item.text}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2 p-2 border-2 w-[90px]  rounded-full">
                      <i>
                        <item.ico_1 />
                      </i>
                      <p>{item.ico1_text}</p>
                    </div>
                    <div className="flex gap-2 p-2 border-2 w-[90px]  rounded-full">
                      <i>
                        <item.ico_2 />
                      </i>
                      <p>{item.ico2_text}</p>
                    </div>
                    <div className="flex gap-2 p-2 border-2 w-[90px]  rounded-full">
                      <i>
                        <item.ico_3 />
                      </i>
                      <p>{item.ico3_text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kfc2;
