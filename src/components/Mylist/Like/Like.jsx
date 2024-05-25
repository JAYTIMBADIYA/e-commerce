import React from "react";
import Chiken from "../../../assets/image 110.png";

const List = [
    {
      off: "+10",
      poi: "Point",
      pic: Chiken,
      head: "Bucket L",
      prer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
      remo: "Remove",
      qar: "10 QAR",
      bon: "Add to cart"
    },
    {
        off: "+10",
        poi: "Point",
        pic: Chiken,
        head: "Bucket L",
        prer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        remo: "Remove",
        qar: "10 QAR",
        bon: "Add to cart"
      },
      {
        off: "+10",
        poi: "Point",
        pic: Chiken,
        head: "Bucket L",
        prer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        remo: "Remove",
        qar: "10 QAR",
        bon: "Add to cart"
      },
]


const Like = () => {
    const gradientStyle = {
        background: 'linear-gradient(to top, #ECF281 2%, #2DC8D8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
  return (
    <div className="mx-[200px] h-[auto] my-10">
      <div>
        <div>
          <div className="flex gap-5 mt-10 text-2xl font-semibold ">
            <a href="">
              <i className="fa-solid fa-heart text-[#2DC8D8]" style={gradientStyle}></i>
            </a>
            <h1 className="text-[#43385B]">My Wishlist</h1>
          </div>
          {List.map((item, index) => (
          <div className="mt-10 w-[90%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-5 rounded-xl ml-16 relative" key={index}>
            <div style={{ background: 'linear-gradient(to bottom, #2DC8D8, #ECF281)' }} className="discount w-[8%] absolute font-semibold text-xl pl-3 py-1 border-2 rounded-r-lg px-1">
                <h2 className="text-white">{item.off}<br />{item.poi}</h2>
            </div>
            <div className="flex">
              <div>
                <img src={item.pic} alt="" className="mt-3 w-[250px] h-[130px] ml-6"/>
              </div>
              <div>
                <h1 className="text-2xl font-semibold ml-10">{item.head}</h1>
                <p className="text-[16px] text-[#999CAD] w-[90%] ml-10 mt-2">{item.prer}</p>
                <div className="flex justify-between mt-5">
                  <div className="flex gap-3 text-[#1CC0A0] ml-10">
                    <i className="fa-solid fa-trash text-xl"></i>
                    <p className="text-xl">{item.remo}</p>
                  </div>
                  <div className="flex gap-8 mr-10 ">
                    <p className="text-xl font-semibold text-[#2DC8D8] mt-2">{item.qar}</p>
                      <button className="bg-[#1CC0A0] text-white px-10  py-3 rounded-md ">
                        {item.bon}
                      </button>
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

export default Like;
