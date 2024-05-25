import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-solid-svg-icons';
import bell from "../../../assets/bel"
// import Noto from "../../../assets/Noto.png";

// const bell = [
//     {
//         poc: Noto,
//         title: "Password Updeted!",
//         time: "13 Min ago",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
//     },
//     {
//         poc: Noto,
//         title: "Password Updeted!",
//         time: "13 Min ago",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
//     },
//     {
//         poc: Noto,
//         title: "Password Updeted!",
//         time: "13 Min ago",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
//     },
//     {
//         poc: Noto,
//         title: "Password Updeted!",
//         time: "13 Min ago",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
//     },
//     {
//         poc: Noto,
//         title: "Password Updeted!",
//         time: "13 Min ago",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
//     },
//     {
//         poc: Noto,
//         title: "Password Updeted!",
//         time: "13 Min ago",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
//     },
//     {
//         poc: Noto,
//         title: "Password Updeted!",
//         time: "13 Min ago",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
//     },
//     {
//         poc: Noto,
//         title: "Password Updeted!",
//         time: "13 Min ago",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
//     },
//     {
//         poc: Noto,
//         title: "Password Updeted!",
//         time: "13 Min ago",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
//     },
// ]

const Updete = ({ notifications }) => {
  

  return (
    <div>
         {/* <a href="" onClick={() => bellClick("Bell")} className="relative">
                {bell.length > 0 && (
                    <span className="absolute top-[-80px] left-[1160px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                        {bell.length}
                    </span>
                )}
        </a> */}
        {notifications.map((item,index)=>(
            <div className="w-[70%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ml-52 rounded-xl mt-7" key={index}>
                <div className="flex">
                  <div className={ `w-[150px] h-[113px] ${index < 7 ? 'bg-[#1CC0A0]' : 'bg-[#DDDFE4]'} rounded-l-lg flex justify-center p-3 px-10`}>
                    <img src={item.poc} alt="" className="w-[50px] h-[70px] mt-2" />
                  </div>
                  <div className="px-6 py-3">
                    <div className="flex justify-between">
                      <h1 className="text-xl font-semibold">{item.title}</h1>
                      <p className="text-[#999CAD]">{item.time}</p>
                    </div>
                    <p className="mt-3 text-[16px] w-[100%] text-[#999CAD]">{item.text}</p>
                  </div>
                </div>
            </div>
        ))}
    </div>
  );
};

export default Updete;
