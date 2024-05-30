import React, { useState } from "react";
import Cart1st from "../Cart1st/Cart1st";
import OrderTotel from "../OrderTotal/OrderTotel";

const Address = () => {
  const [currentStep, setCurrentStep] = useState(2);

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
    <div>
      <Cart1st currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="address-content">
        <div className="mx-10 max-md:mx-1">
          <div className="flex max-md:justify-center">
            <div className="basis-3/4">
              <div>
                <div className="flex gap-5 mt-10 text-2xl font-semibold ">
                  <a href="/">
                    <i className="fa-solid fa-location-dot text-[#1CC0A0]"></i>
                  </a>
                  <h1 className="text-[#43385B]">
                    Your Address or
                    <span className="text-[#1CC0A0]">Log in</span>
                  </h1>
                </div>

                <div>
                  <form action="" className="w-[80%] max-md:w-[100%]">
                    <div className="flex flex-col mt-10">
                      <label htmlFor="" className="text-[16px] font-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Placeholder"
                        className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 "
                      />
                    </div>

                    <div className="flex max-md:flex-wrap gap-5">
                      <form className="flex flex-col mt-10 w-[50%] max-md:w-[100%]">
                        <label htmlFor="" className="text-[16px] font-semibold">
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="Placeholder"
                          className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 w-[100%]"
                        />
                      </form>

                      <form className="flex flex-col mt-10 w-[50%] max-md:w-[100%]">
                        <label htmlFor="" className="text-[16px] font-semibold">
                          Phone
                        </label>
                        <input
                          type="text"
                          placeholder="Placeholder"
                          className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 w-[100%]"
                        />
                      </form>
                    </div>

                    <div className="flex flex-col mt-10">
                      <label htmlFor="" className="text-[16px] font-semibold">
                        Street and Number
                      </label>
                      <input
                        type="text"
                        placeholder="Placeholder"
                        className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 "
                      />
                    </div>

                    <div className="flex max-md:flex-wrap gap-5">
                      <form className="flex flex-col mt-10 w-[50%] max-md:w-[100%]">
                        <label htmlFor="" className="text-[16px] font-semibold">
                          City
                        </label>
                        <input
                          type="text"
                          placeholder="Placeholder"
                          className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 w-[100%]"
                        />
                      </form>

                      <form className="flex flex-col mt-10 w-[50%] max-md:w-[100%]">
                        <label
                          htmlFor=""
                          className="text-[16px] font-semibold text-[#999CAD]"
                        >
                          Zip Code
                        </label>
                        <input
                          type="text"
                          placeholder="Placeholder"
                          className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 w-[100%]"
                        />
                      </form>
                    </div>

                    <form className="flex flex-col mt-10 w-[50%] max-md:w-[100%]">
                      <label htmlFor="" className="text-[16px] font-semibold">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 w-[97%]"
                      >
                        <option value="Country" className="text-[#999CAD]">
                          city
                        </option>
                        <option value="canada">India</option>
                        <option value="usa">USA</option>
                        <option value="usa">Canada</option>
                      </select>
                    </form>
                  </form>
                </div>

                <div className="flex gap-5 mt-10 text-xl font-semibold ">
                  <a href="/">
                    <i className="fa-solid fa-square-check text-[#1CC0A0]"></i>
                  </a>
                  <h1 className="">Ship to the same address</h1>
                </div>

                <div className="flex justify-center gap-5">
                  <button className="bg-[#ffffff] text-[#1CC0A0] border-2 border-[#1CC0A0] mt-6 px-10  py-3 rounded-md ">
                    Back
                  </button>

                  <button className="bg-[#1CC0A0] text-[#ffffff] mt-6 px-10  py-3 rounded-md ">
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="basis-1/4 ml-3 max-md:basis-full max-md:ml-1 mt-20 max-md:hidden">
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

export default Address;
