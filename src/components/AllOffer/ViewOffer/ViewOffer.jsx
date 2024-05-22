import React, { useRef } from "react";
import Slider from "react-slick";
import kfc from "../../../assets/image 92.png";
import king from '../../../assets/Whopper Wednrsday.png'
import Lo1 from "../../../assets/lo-1.png";
import Lo2 from '../../../assets/Burger_King_logo_(1999) 1.png'

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ViewOffer = ({data,index}) => {
  const [count, setCount] = useState(1);

  const decNum = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  const navigate = useNavigate();


  const imgdata = [
    {
        piclogo: Lo1,
        pic: kfc,
    },
    {
        piclogo2: Lo2,
        pic2: king,
    }
]



  const handleClick = (route) => {
    switch (route) {
        case 'home':
            navigate('/home');
            break;
        case 'alloffers':
            navigate('/alloffers');
            break;    
        default:
            // Handle default case if needed
            break;
    }
}; 

   const ProductSliderBig = useRef();
   const ProductSliderSml = useRef();

  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  var productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
  };

  const goToSlide=(index)=>{
      ProductSliderBig.current.slickGoTo(index);
      ProductSliderSml.current.slickGoTo(index);
  }




  return (
    <div className="viewoffer h-[auto] mx-9 my-3 md:mx-2">
      <div>
        <div>
          <ul className="flex gap-3 ml-10">
            <li>
              <a href="" className="text-[#DDDFE4] font-semibold" onClick={() => handleClick('home')}>
                Home /
              </a>
            </li>
            <li>
              <a href="" className="text-[#DDDFE4] font-semibold" onClick={() => handleClick('alloffers')}>
                All offer /
              </a>
            </li>
            <li>
              <a href="" className="text-[#1CC0A0] font-semibold">
                View offer
              </a>
            </li>
          </ul>
        </div>
        <div className="md:grid grid-cols-2">
          <div>
            <div className="relative ml-10">
              <div  className="flex gap-4">
                <img src={Lo1} alt="" className="h-[60px] w-[60px] mt-3 ml-5" />
                <h1 className="mt-7 font-semibold">KFC</h1>
              </div>
              <a href="">
                <i className="fa-solid fa-crown text-white p-2 bg-yellow-400 rounded-full absolute top-0 left-14"></i>
              </a>
            </div>
            <div className="p-3 ">
              {imgdata.map((item, index) => (
              <div className="sliderwrapper p-5" key={index} >
              <Slider {...productSliderOptions} ref={ProductSliderBig} className="sliderBig mb-3">
                <div className="item ml-10">
                    <img src={item.pic} alt=""  className="max-md:mr-5"/>
                </div> 
                <div className="item ml-10">
                    <img src={item.pic} alt=""  className="max-md:mr-5"/>
                </div> 
                <div className="item ml-10">
                    <img src={item.pic} alt=""  className="max-md:mr-5"/>
                </div> 
                <div className="item ml-10">
                    <img src={item.pic} alt="" className="max-md:mr-5" />
                </div> 
                <div className="item ml-10">
                    <img src={item.pic} alt=""  className="max-md:mr-5"/>
                </div> 
              </Slider>
              <Slider {...productSliderSmlOptions} ref={ProductSliderSml} className="sliderSml mt-10 pr-3">
                <div className="item shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" onClick={() => goToSlide(1)}>
                    <img src={item.pic} alt="" className=""/>
                </div> 
                <div className="item shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" onClick={() => goToSlide(2)}>
                    <img src={item.pic} alt="" />
                </div> 
                <div className="item shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" onClick={() => goToSlide(3)}>
                    <img src={item.pic} alt="" />
                </div> 
                <div className="item shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" onClick={() => goToSlide(4)}>
                    <img src={item.pic} alt="" />
                </div> 
                <div className="item shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" onClick={() => goToSlide(5)}>
                    <img src={item.pic} alt="" />
                </div> 
              </Slider>
              </div>
            ))}

            </div>
          </div>

          <div className="ml-16 max-md:ml-1">
            <div className="">
              <p className="font-semibold text-2xl">Bucket L</p>
              <h6 className="text-[#999CAD] mt-6">price:</h6>
              <h5 className="font-semibold">10 QAR</h5>
            </div>
            <div className="flex flex-wrap mt-7 gap-20">
              <div className="flex  gap-10 text-2xl  bg-[#F5F5F5] rounded-full w-[180px] p-1 justify-center text-center">
                <button
                  className="p-1 rounded-full bg-white"
                  onClick={() => setCount(count + 1)}
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
                <p className="mt-1 font-semibold">{count}</p>
                <button className="p-1 rounded-full bg-white" onClick={decNum}>
                  <i class="fa-solid fa-minus"></i>
                </button>
              </div>
              <div>
                <button className="mt-1 px-10 py-3 bg-[#1CC0A0] text-white font-semibold rounded-md">
                  {" "}
                  Add to cart
                </button>
              </div>
            </div>
            <div className="mt-6">
              <h1>Overview</h1>
              <hr className="h-1 bg-[#1CC0A0] w-14" />
              <p className="w-[70%] mt-5 text-[#999CAD] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A cras
                aliquam orci turpis. Sagittis, velit quam lectus euismod.
                Molestie purus risus, faucibus pellentesque arcu non, morbi sed.
                Lectus odio in mattis eu.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.{" "}
              </p>
              <hr className="mt-10 mr-10" />
            </div>
            <div className="mt-4">
              <h1 className="text-[#1CC0A0]">Terms and Conditions</h1>
              <p className="w-[30%] text-[#999CAD] mt-1">
                30-day money back guarantee Chipping:2-3 Business Days
              </p>
            </div>
            <div className="flex gap-10 mt-3 ">
              <div className="flex gap-3 border-2 px-7 py-2 rounded-full text-[#999CAD] max-md:px-5 max-md:py-1 max-md:text-sm max-md:gap-1">
                <i className="fa-solid fa-star mt-2"></i>
                <p className="text-xl max-md:text-sm max-md:mt-1">star</p>
              </div>
              <div className="flex gap-3 border-2 px-7 py-2 rounded-full text-[#999CAD] max-md:px-5 max-md:py-1 max-md:gap-1">
                <i className="fa-solid fa-gift mt-2"></i>
                <p className="text-xl max-md:text-sm max-md:mt-1">Reddem</p>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-semibold text-[#43385B] max-md:text-xl">
                Share this Product
              </h1>
              <ul className="flex gap-5 text-2xl mt-3 max-md:text-xl ">
                <li>
                  <a href="">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOffer;
