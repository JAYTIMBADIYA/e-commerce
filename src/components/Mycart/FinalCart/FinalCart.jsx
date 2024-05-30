import React, { useState } from "react";
import Cart1st from "../Cart1st/Cart1st";
import OrderTotel from "../OrderTotal/OrderTotel";
import Supply from "../../home/Supply/Supply"

const FinalCart = () => {
  const [currentStep, setCurrentStep] = useState(4);

  const [cartItems, setCartItems] = useState([
    {
      it: "Item 1",
      qua: 1,
      pri: 10,
      qr: 10,
      off: "10%",
      poi: "20",
      pic: "url",
      head: "Head 1",
      hedid: "Desc 1",
      shop: "Shop 1",
    },
    {
      it: "Item 2",
      qua: 2,
      pri: 10,
      qr: 10,
      off: "15%",
      poi: "30",
      pic: "url",
      head: "Head 2",
      hedid: "Desc 2",
      shop: "Shop 2",
    },
  ]);

  const [counts, setCounts] = useState(cartItems.map(() => 1));

  const updateQuantity = (index, amount) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) =>
        i === index ? Math.max(count + amount, 1) : count
      )
    );
  };

  const subtotal = counts.reduce(
    (sum, count, index) => sum + count * cartItems[index].qr,
    0
  );
  const taxes = subtotal * 0.05; // Example tax calculation (5% of subtotal)
  const total = subtotal + taxes;

  const handlePromoCode = () => {
    // Handle promo code logic here
  };

  const handleCheckout = () => {
    // Handle checkout logic here
  };

  const gradientStyle = {
    background: "linear-gradient(to top, #ECF281 10%, #2DC8D8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div>
      <div className="max-md:hidden">
      <Cart1st currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>

      <div className="mx-10 max-md:mx-2">
        <div className="flex max-md:justify-center">
          <div className="basis-3/4 mt-16">
            <div className="max-md:w-[100%]">
              <div className="bg-[#F3F3F3] w-[90%] px-5 py-2 rounded-xl max-md:w-[100%]">
                <h1 className="text-xl font-semibold text-[#312B3E]">
                  Order S00109
                </h1>
                <p className="text-[#312B3E] font-semibold text-[16px] mt-2">
                  <span className="text-[#1CC0A0]">Sign Up</span> to follow your order
                </p>
              </div>

              <div className="flex gap-5 mt-10 text-2xl font-semibold mx-2">
                <a href="/">
                  <i class="fa-solid fa-credit-card text-[#ECF281]" style={gradientStyle}></i>
                </a>
                <h1 className="text-[#43385B]">Payment Information</h1>
              </div>

              <div className="flex justify-between w-[50%] mt-5 text-[16px] mx-2 max-md:w-[100%]">
                <h2>Wire Transfer</h2>
                <h2 className="font-semibold">Total: 31.5 QAR</h2>
              </div>

              <div className="mx-2 mt-9 w-[90%] max-md:w-[100%]">
                <div className="bg-[#1CC0A0] py-5 pl-5 rounded-t-lg">
                  <div className="text-white">
                    <h1 className="text-xl font-semibold">Please make a payments to:</h1>
                    <div className="mt-2 font-semibold leading-relaxed">
                      <li>Bank</li>
                      <li>Account Number</li>
                      <li>Account Holder</li>
                    </div>
                  </div>
                </div>
                <div className="bg-[#C4EEE6] py-5 pl-5 rounded-b-lg">
                  <h1 className="text-[16px] font-semibold text-[#43385B]">Communications: S00109</h1>
                </div>

                <div
                  type="text"
                  className="border-[#DDDFE4] border-2 px-4 py-3 rounded-md  mt-9 w-[100%] flex justify-between"
                >
                  <div className="text-[#43385B] font-semibold">
                    Shipping:
                    <span className="text-gray-500">
                      Ivana Franka 18, Kyiv 02098
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/4 ml-4 max-md:basis-full max-md:ml-1 mt-16 max-md:hidden">
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
        <div className="mt-20">
          <Supply/>
        </div>
    </div>
  );
};

export default FinalCart;
