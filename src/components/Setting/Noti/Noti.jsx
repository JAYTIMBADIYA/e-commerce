import React, { useState } from "react";
import Group_1 from "../../../assets/Group 33528.png";
import Group_4 from '../../../assets/Group 33531.png'
import Group_3 from '../../../assets/Group 33530.png'
import Group_2 from '../../../assets/Group 33529.png'
import Group_5 from '../../../assets/Group 33704.png'



import Vec from "../../../assets/Vector.png";
import Vec2 from "../../../assets/Vect.png"
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Noti = () => {
  const [switchStates, setSwitchStates] = useState({
    0: true,
    1: false,
    2: false,
    3: true,
    4: true,
  });

  const handleSwitchChange = (index) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const noti = [
    {
        logo: Group_1,
        vet: Vec2,
        notidis : "Resturent",
        ico: true
    },
    {
        logo: Group_4,
        vet: Vec,
        notidis : "Clothing & Shoes"
    },
    {
        logo: Group_3,
        vet: Vec,
        notidis : "Clothing & Shoes"
    },
    {
        logo: Group_2,
        vet: Vec2,
        notidis : "Resturent"
    },
    {
        logo: Group_5,
        vet: Vec2,
        notidis : "Resturent"
    },
  ]

  return (
    <div className="mx-[160px] max-md:mx-[30px]">
      <div>
        <div className="flex gap-5 mt-20 text-2xl font-semibold">
          <a href="">
            <i class="fa-solid fa-gear text-[#2CD8D2]"></i>
          </a>
          <h1 className="text-[#43385B]">All merchants notification</h1>
        </div>

        <div>
        {noti.map((item, index) => (
          <div className="flex justify-between w-[70%] max-md:w-[100%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-6 rounded-md p-2" key={index}>
            <div className="flex gap-7 max-md:gap-2 max-sm:gap-1">
              <img src={item.logo} alt="" className="w-[100px] h-[100px]" />
              <img src={item.vet} alt="" className="w-[40px] h-[40px] mt-5" />
              <h2 className="text-xl mt-7 font-semibold ml-5 max-md:text-sm max-sm:ml-2">{item.notidis}</h2>
            </div>
            <div className="mt-4">
              <Switch
                {...label}
                checked={switchStates[index]}
                onChange={() => handleSwitchChange(index)}
                />
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Noti;
