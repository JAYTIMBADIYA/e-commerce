import React, {useState} from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import ListIcon from '@mui/icons-material/List';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';


import Cato from '../../../assets/Category.png'


import Data from '../../../assets/data'

import { useNavigate } from 'react-router-dom';





const label = { inputProps: { "aria-label": "Checkbox demo" } };





const Product = ({item}) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(Data);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false); // Step 1

  const toggleShareMenu = () => {
    setIsShareMenuOpen(!isShareMenuOpen); // Step 2
  };

  const shareUrl = window.location.href;
  const shareTitle = item?.ico2_text;

  const handleSearch = (event) => {
      const term = event.target.value;
      setSearchTerm(term);

      const filtered = Data.filter(item => item.head.toLowerCase().includes(term.toLowerCase()));
      console.log(filtered);
      setFilteredData(filtered);
  };

  const navigate = useNavigate();

  const handleClick = (route,data,index) => {
    switch (route) {
        case 'viewoffer':
            navigate('/viewoffer',{data: data[index], index: index});
            break;
        default:
            // Handle default case if needed
            break;
    }
}; 
  return (
    <>
      <div className="main-products flex flex-wrap ml-10 h-[auto] mb-96">
        <div className="sub-products basis-1/4 max-w-72 mt-5 shadow-2xl p-4 max-md:hidden">
          <div className="products flex justify-between">
            <h1 className="text-xl font-semibold">Products Category</h1>
            <i>
              <HorizontalRuleIcon />
            </i>
          </div>
          <div className="main-pro-list">
            <div className="products-list flex">
              <Checkbox {...label} defaultChecked className="bg-[#1CC0A0]" />
              <h2 className="mt-3 ml-3 text-[15px] text-[#1CC0A0] fonty-semibold">
                All Category
              </h2>
            </div>
            <div className="products-list flex">
              <Checkbox {...label} />
              <h2 className="mt-3 ml-3 text-[15px] text-[#000000] font-semibold">
                Products
              </h2>
            </div>
            <div className="products-list flex">
              <Checkbox {...label} />
              <h2 className="mt-3 ml-3 text-[15px] text-[#000000] font-semibold">
                Restaurants
              </h2>
            </div>
            <div className="products-list flex">
              <Checkbox {...label} />
              <h2 className="mt-3 ml-3 text-[15px] text-[#000000] font-semibold">
                Sport
              </h2>
            </div>
            <div className="products-list flex">
              <Checkbox {...label} />
              <h2 className="mt-3 ml-3 text-[15px] text-[#000000] font-semibold">
                Travel
              </h2>
            </div>
            <div className="products-list flex">
              <Checkbox {...label} />
              <h2 className="mt-3 ml-3 text-[15px] text-[#000000] font-semibold">
                Mobile top app
              </h2>
            </div>
            <div className="products-list flex">
              <Checkbox {...label} />
              <h2 className="mt-3 ml-3 text-[15px] text-[#000000] font-semibold">
                Healthy & beauty
              </h2>
            </div>
            <div className="products-list flex">
              <Checkbox {...label} />
              <h2 className="mt-3 ml-3 text-[15px] text-[#000000] font-semibold">
                Communal & internet
              </h2>
            </div>
            <div className="products-list flex">
              <Checkbox {...label} />
              <h2 className="mt-3 ml-3 text-[15px] text-[#000000] font-semibold">
                Texi
              </h2>
            </div>
            <hr className="h-[3px] bg-[#898989] mt-4" />
            <div className="other-pro-list mb-20">
              <div className="sub-pro-list text-xl font-semibold flex justify-between my-3 mx-3">
                <h1>Legs</h1>
                <i>
                  <AddIcon />
                </i>
              </div>
              <hr className="h-[3px] bg-[#898989]" />
              <div className="sub-pro-list text-xl font-semibold flex justify-between my-3 mx-3">
                <h1>Color</h1>
                <i>
                  <AddIcon />
                </i>
              </div>
              <hr className="h-[3px] bg-[#898989]" />
              <div className="sub-pro-list text-xl font-semibold flex justify-between my-3 mx-3">
                <h1>Duration</h1>
                <i>
                  <AddIcon />
                </i>
              </div>
              <hr className="h-[3px] bg-[#898989]" />
              <div className="sub-pro-list text-xl font-semibold flex justify-between my-3 mx-3">
                <h1>Price</h1>
                <i>
                  <AddIcon />
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-3/4 w-[100%]">
          <div className="main-offer flex justify-between mt-5">
            <div className="flex">
              <h1 className="text-3xl font-bold ml-5 mt-1 max-md:text-2xl">All Offers</h1>
              <form className="exam mt-2 ml-10 max-md:hidden">
                <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} className="w-[350px] sm:w[200px] rounded-md border border-gray-600 pl-6 py-1"/>
              </form>
            </div>
            <div className="flex">
              <img src={Cato} alt="" className="h-[30px] w-[30px] " />
              <a href="" className="ml-2"><i><ListIcon/></i></a>
            </div>
          </div>

          <div className="md:grid grid-cols-3 p-4 gap-5">
          {filteredData.map((item, index) => (
              <div className="main-box" key={index} >
                  <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md py-4 pl-3">
                    <div className="flex justify-between">
                      <div className="flex">
                        <img onClick={() => handleClick('img')}  src={item.logo1} alt="" />
                        <h1 className="mt-3 font-semibold">{item.name}</h1>
                      </div>
                      <div className={`discount  font-semibold border-2 rounded-l-lg px-1 ${item.dis === "-20%" ? "bg-[#FF0000]" : "bg-[#FFB800]"}`}>
                        <h2 className="text-white">{item.dis} <br /> Discount</h2>
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
                        <p className="mt-2 text-balance text-[#999CAD] max-md:text-sm">{item.text}</p>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-2 p-2 border-2 w-[90px]  rounded-full hover:bg-yellow-500 hover:shadow-lg hover:text-white duration-300 ease-in-out">
                          <i><item.ico_1/></i>
                          <p>{item.ico1_text}</p>
                        </div>
                        <div className="relative group"> 
                        <div className="flex gap-2 p-2 border-2 w-[90px]  rounded-full hover:bg-teal-400 hover:shadow-lg" onClick={toggleShareMenu}>
                          <i><item.ico_2/></i>
                          <p>{item.ico2_text}</p>
                        </div>
                        {isShareMenuOpen && (
                            <div className="absolute top-10 left-0 w-[170%] flex gap-5  p-2 rounded bg-white border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <FacebookShareButton url={shareUrl} quote={shareTitle}>
                                <FacebookIcon size={32} round />
                              </FacebookShareButton>
                              <TwitterShareButton url={shareUrl} title={shareTitle}>
                                <TwitterIcon size={32} round />
                              </TwitterShareButton>
                              <WhatsappShareButton url={shareUrl} title={shareTitle} separator=":: ">
                                <WhatsappIcon size={32} round />
                              </WhatsappShareButton>
                            </div>
                        )}
                        </div>
                        <div className="flex gap-2 p-2 border-2 w-[90px]  rounded-full hover:bg-blue-500 hover:shadow-lg hover:text-white duration-300 ease-in-out" onClick={() => handleClick('viewoffer',Data[index])}>
                          <i><item.ico_3/></i>
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

      {isShareMenuOpen && (
        <div className="share-menu">
          {/* Your share menu UI goes here */}
        </div>
      )}


    </>
  );
};

export default Product;
