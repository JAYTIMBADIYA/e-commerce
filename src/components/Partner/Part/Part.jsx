import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import ListIcon from '@mui/icons-material/List';
import Cato from '../../../assets/Category.png'
import Slider from "../../home/Slider/Slider";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Part = () => {
  return (
    <>
    <div className="main-offer flex justify-between mt-5 mx-9">
            <div className="flex">
              <h1 className="text-3xl font-bold ml-5 mt-1 max-md:text-2xl">All Offers</h1>
              <form className="exam mt-2  ml-20 max-md:hidden">
                <input type="text" placeholder="Search" className="w-[350px] sm:w[200px] rounded-md border border-gray-600 pl-6 py-1"/>
              </form>
            </div>
            <div className="flex">
              <img src={Cato} alt="" className="h-[30px] w-[30px] " />
              <a href="" className="ml-2"><i><ListIcon/></i></a>
            </div>
          </div>
      <Slider/>
      <Slider/>
      <Slider/>
      <Slider/>
    </>
  );
};

export default Part;
