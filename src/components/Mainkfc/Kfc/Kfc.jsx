import React from "react";
import Owner from "../../../assets/image 97.png";
import Map from '../../../assets/image 100.png'
import { useNavigate } from 'react-router-dom';


const Kfc = () => {

  const navigate = useNavigate();

  const handleClick = (route) => {
    switch (route) {
        case 'Kfc2':
            navigate('/Kfc2');
            break;
        case 'KfcPro':
            navigate('/KfcPro');
            break;
        default:
            // Handle default case if needed
            break;
    }
};
  return (
    <div className="main-kfc h-[auto]">
      <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] mx-5 p-10 rounded-2xl">
        <div>
          <img src={Owner} alt="" className="w-[-webkit-fill-available] " />
        </div>
        <div className="flex flex-wrap mt-10">
          <div className="basis-2/3">
            <div>
              <div className="flex gap-10">
                <div className="flex gap-7">
                  <a href=""><i className="fa-solid fa-crown text-white p-2 mt-1 bg-yellow-400 rounded-full"></i></a>
                  <h1 className="text-3xl font-semibold">KFC</h1>
                </div>
                <div>
                <ul className='flex text-sm text-yellow-400 mt-2'>
                    <h4 className='mr-3'>4.5</h4>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-regular fa-star-half-stroke"></i></li>
                </ul>
                </div>
              </div>
              <div className="mt-7">
                <h1 className="font-bold text-2xl">Overview <hr className="h-1 bg-[#1CC0A0] w-[110px]" /></h1>
                <p className="mt-10 text-[#999CAD] w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quaerat cum dolor magnam minima molestias, voluptates aliquid rem dolores officia reprehenderit voluptatem quos maiores error. Voluptates commodi facere nemo quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus magnam necessitatibus ut, nam enim quae ipsa rem nulla sit nemo vitae odio cupiditate voluptate quidem aliquam asperiores! Nulla, ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit eum accusantium excepturi velit praesentium qui eligendi illum, quibusdam blanditiis? Et rerum doloremque voluptate aliquam, similique vel blanditiis deleniti deserunt! Sapiente! Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div>
                <div className="w-[100%] rounded-xl">
                    <iframe className="w-[100%] h-[200px] rounded-2xl" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Qatar+(Ecommerce)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
                </div>
                <div className="mt-7 flex gap-5">
                    <div>
                        <div className="flex gap-4">
                           <a href=""><i className="fa-solid fa-location-dot text-2xl text-[#1CC0A0]"></i></a>
                           <p className="text-xl font-bold text-[#43385B]">Al Mahar St. 23, Doha, Qatar</p>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <a href=""><i class="fa-solid fa-phone text-2xl text-[#1CC0A0]"></i></a>
                            <p className="text-xl font-bold text-[#43385B]">+974 (084) 567 4321</p> 
                        </div>
                        <div className="flex gap-4 mt-4">
                           <a href=""><i class="fa-solid fa-envelope text-2xl text-[#1CC0A0]"></i></a>
                           <p className="text-xl font-bold text-[#43385B]">kfc@info.com</p>
                        </div>
                    </div>
                    <div className="mt-12">
                    <button class="flex   text-[#1CC0A0]  border-2 border-emerald-300 py-2 px-3 rounded-full"><i className="fa-solid fa-angles-right mt-1 mr-3"></i> Get Directions</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-10">
        <div>
          <ul className="flex justify-center gap-7 text-xl">
            <li><a href="" onClick={() => handleClick('Kfc2')}>Offers</a></li>
            <li><a href="" onClick={() => handleClick('KfcPro')}>Products</a></li>
          </ul>
        </div>

      </div>
      
    </div>
  );
};

export default Kfc;
