import React, { useState }  from "react";
import Chiken from "../../../assets/image 110.png";
import { useNavigate } from 'react-router-dom';
import OrderTotel from "../OrderTotal/OrderTotel";
import Cart1st from "../Cart1st/Cart1st";


const Cartpro = ({ cartItems }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleClick = (route) => {
    switch (route) {
        case 'alloffers':
            navigate('/alloffers');
            break;    
        default:
            // Handle default case if needed
            break;
    }
}; 

  if (!cartItems) {
    cartItems = [
      {
        it: "Product",
        qua: "Quantity",
        pri: "Price",
        off: "+10",
        poi: "Point",
        pic: Chiken,
        head: "Bucket L",
        hedid: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A cras aliquam orci turpis. Sagittis, velit quam lectus euismod. Molestie purus risus, faucibus pellentesque arcu non, morbi sed. Lectus odio in mattis eu.",
        qr: 10,
        shop: "Continue Shopping"
    },
    {
        it: "Product",
        qua: "Quantity",
        pri: "Price",
        off: "+10",
        poi: "Point",
        pic: Chiken,
        head: "Bucket L",
        hedid: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A cras aliquam orci turpis. Sagittis, velit quam lectus euismod. Molestie purus risus, faucibus pellentesque arcu non, morbi sed. Lectus odio in mattis eu.",
        qr: 10,
        shop: "Continue Shopping"
    },
    ];
  } 
    const [counts, setCounts] = useState(cartItems.map(() => 1));

    const updateQuantity = (index, amount) => {
      setCounts((prevCounts) =>
        prevCounts.map((count, i) => (i === index ? Math.max(count + amount, 1) : count))
      );
    };

    const subtotal = cartItems.reduce((sum, item, index) => sum + counts[index] * item.totalValue, 0);
    const taxes = subtotal * 0.05; // Example tax calculation (5% of total)
    const total = subtotal + taxes;

    const handlePromoCode = () => {
      // Handle promo code logic here
    };

    const handleCheckout = () => {
      // Handle checkout logic here
    };

    // const decNum = () => {
    //     if (count > 1) {
    //       setCount(count - 1);
    //     } else {
    //       setCount(1);
    //     }
    //   };
  return (
    <div className="h-[auto] mt-10 mb-20">
      <Cart1st currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div>
        <div>
          <div className="flex max-md:flex-wrap gap-2 mx-10">
            <div className="details basis-3/4 max-md:basis-full">
          {cartItems.map((item, index) => (
              <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-4 rounded-xl" key={index}>
                <div className="flex py-2">
                  <div className="basis-1/2">
                    <div>
                      <div className="text-center">
                        <p className="font-semibold text-[#999CAD] max-md:ml-36">Product</p>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/4">
                    <div>
                      <div className="text-center max-md:hidden">
                        <p className="font-semibold text-[#999CAD]">Quantity</p>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/4">
                    <div>
                      <div className="text-center max-md:hidden">
                        <p className="font-semibold text-[#999CAD]">Price</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-2 mx-3"/>
                <div className="w-[100%]  py-5 rounded-xl relative">
                  <div
                    style={{ background:"linear-gradient(to bottom, #2DC8D8, #ECF281)"}}
                    className="discount w-[8%] absolute font-semibold text-sm pl-3 border-2 rounded-r-lg px-1 max-md:hidden"
                  >
                    <h2 className="text-white"> +10 <br /> Point </h2>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="max-md:hidden">
                      <img src={item.cen_img} alt={item.head} className="mt-3 w-[160px] h-[130px] ml-4"/>
                    </div>
                    <div className="w-[30%] max-md:w-[100%]">
                      <div className="mt-2 ml-2 max-md:text-center">
                        <h1 className="text-xl font-semibold">{item.head}</h1>
                        <p className="mt-2 text-[#999CAD]">{item.text}</p>
                      </div>
                    </div>
                    <div className="bill ml-24 mt-3">
                      <div className="flex  gap-10 text-2xl  bg-[#F5F5F5] rounded-full p-1 justify-center text-center">
                        <button
                          className="p-1 rounded-full bg-white"
                          onClick={() => updateQuantity(index , 1)}
                        >
                          <i class="fa-solid fa-plus"></i>
                        </button>
                        <p className="mt-1 font-semibold">{item.count}</p>
                        <button className="p-1 rounded-full bg-white" onClick={() => updateQuantity(index, -1)}>
                          <i class="fa-solid fa-minus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="ml-20 mt-4">
                        <div className="flex gap-3 ml-14">
                            <h3 className="text-xl font-semibold">{item.totalValue} QAR</h3>
                            <a href="" className="mt-1" ><i class="fa-solid fa-trash"></i></a>
                        </div>
                        <div className="flex gap-2 text-[#1CC0A0] font-semibold mt-16 max-md:mt-8 max-md:text-center">
                            <a href=""><i class="fa-solid fa-arrow-left"></i></a>
                            <h2 className="cursor-pointer" onClick={() => handleClick('alloffers')} >Continue shopping</h2>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
 

            <div className="total basis-1/4 ml-3 max-md:basis-full max-md:ml-1">
              <OrderTotel
                subtotal={subtotal}
                taxes={taxes}
                total={total}
                onPromoCode={handlePromoCode}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpro;
