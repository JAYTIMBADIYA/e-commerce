import React, { useState} from "react";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";


const label = { inputProps: { "aria-label": "Switch demo" } };

const Sett = () => {
  const [switchStates, setSwitchStates] = useState({
    0: false,
    1: true,
    2: true,
  });

  const handleSwitchChange = (index) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const intro = [
    {
      notihead: "Pause All",
      ico: false,
      dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    },
    {
      notihead: "Pause from Transactions",
      ico: true,
      dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    },
    {
      notihead: "Pause from all Merchant",
      ico: true,
      dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    },
  ];

  const navigate = useNavigate();

  const handleClick = (route) => {
    switch (route) {
        case 'Mycard':
            navigate('/Mycard');
            break;
        default:
            // Handle default case if needed
            break;
    }
};

  return (
    <>
      <div className="h-[auto]">
        <div className="mx-[160px] max-md:mx-[30px]">
          <div>
            <ul className="flex gap-2 font-semibold my-9 max-md:mx-[20px]">
              <li className="text-[#DDDFE4]"><a href=""> Home /</a> </li>
              <li className="text-[#DDDFE4]"><a href="" onClick={() => handleClick('Mycard')}>Account /</a></li>
              <li className="text-[#1CC0A0]"><a href="">Settings </a></li>
            </ul>

            <div className="flex gap-5 mt-5 text-2xl font-semibold">
              <a href="">
                <i class="fa-solid fa-gear text-[#2CD8D2]"></i>
              </a>
              <h1 className="text-[#43385B]">Notification Settings</h1>
            </div>

            <div className="mt-10">
              <div className="">
                {intro.map((item, index) => (
                  <div
                    className="w-[70%] max-md:w-[100%] p-6 my-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg"
                    key={index}
                  >
                    <div className="flex justify-between">
                      <p className="text-xl font-semibold max-sm:text-[15px ]">{item.notihead}</p>
                      <Switch
                        {...label}
                        checked={switchStates[index]}
                        onChange={() => handleSwitchChange(index)}
                      />
                    </div>
                    <div>
                      <p className="mt-5 text-[#999CAD] text-[15px] max-sm:hidden">
                        {item.dis}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>            
          </div>
        </div>
      </div>
    </>
  );
};

export default Sett;
