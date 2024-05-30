import React, { useState } from "react";
import Cart1st from "../Cart1st/Cart1st";
import OrderTotel from "../OrderTotal/OrderTotel";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const navigate = useNavigate(); 

  const handlePayNow = (route) => {
    switch (route) {
        case 'finalcart':
            navigate('/finalcart');
            break;   
        default:
            // Handle default case if needed
            break;
    }
}; 

  const [cartItems, setCartItems] = useState([
    { it: "Item 1", qua: 1, pri: 10, qr: 10, off: "10%", poi: "20", pic: "url", head: "Head 1", hedid: "Desc 1", shop: "Shop 1" },
    { it: "Item 2", qua: 2, pri: 10, qr: 10, off: "15%", poi: "30", pic: "url", head: "Head 2", hedid: "Desc 2", shop: "Shop 2" }
  ]);

  const [counts, setCounts] = useState(cartItems.map(() => 1));

  const updateQuantity = (index, amount) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? Math.max(count + amount, 1) : count))
    );
  };

  const subtotal = counts.reduce((sum, count, index) => sum + count * cartItems[index].qr, 0);
  const taxes = subtotal * 0.05; // Example tax calculation (5% of subtotal)
  const total = subtotal + taxes;

  const handlePromoCode = () => {
    // Handle promo code logic here
  };

  const handleCheckout = () => {
    // Handle checkout logic here
  };
  return (
    <div className="h-auto">
      <div className="max-md:hidden">
        <Cart1st currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>

      <div className="mx-10">
        <div className="flex max-md:justify-center">
          <div className="basis-3/4">
            <div className="mt-20">
              <div className="w-[90%] max-md:w-[100%]">
              <div
                  type="text"
                  className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 w-[100%] flex justify-between max-2xl:hidden max-xl:hidden max-lg:hidden max-md:visible"
                >
                  <div>
                    Shipping:
                    <span className="text-gray-500">
                      Ivana Franka 18, Kyiv 02098
                    </span>
                  </div>
                </div>
                <div
                  type="text"
                  className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 w-[100%] flex justify-between"
                >
                  <div>
                    Shipping:
                    <span className="text-gray-500">
                      Ivana Franka 18, Kyiv 02098
                    </span>
                  </div>
                  <div className="flex gap-2 text-[#1CC0A0] text-[16px]">
                    <a href="">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                    <p>Edit</p>
                  </div>
                </div>
                <div>
                  <form action="" className="mt-8">
                    <label className="text-xl font-semibold">Pay With</label>
                    <input
                      type="text"
                      placeholder="With Transfer"
                      className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 w-[100%]"
                    />
                  </form>
                </div>

                <div className="flex justify-center gap-5 mt-10">
                  <button className="bg-[#ffffff] text-[#1CC0A0] border-2 border-[#1CC0A0] mt-6 px-10  py-3 rounded-md ">
                    Return to cart
                  </button>

                  <button className="bg-[#1CC0A0] text-[#ffffff] mt-6 px-10  py-3 rounded-md" onClick={() => handlePayNow("finalcart")}>
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/4 ml-3 max-md:basis-full max-md:ml-1 mt-16 max-md:hidden">
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
  );
};

export default Order;
