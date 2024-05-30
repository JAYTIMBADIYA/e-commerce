import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart1st = ({ currentStep: propCurrentStep, setCurrentStep: propSetCurrentStep }) => {
  // const [currentStep, setCurrentStep] = useState(1);
  const [localCurrentStep, setLocalCurrentStep] = useState(propCurrentStep || 1);
  const navigate = useNavigate();

  const currentStep = propCurrentStep || localCurrentStep;
  const setCurrentStep = propSetCurrentStep || setLocalCurrentStep;

  useEffect(() => {
    if (currentStep === 1) {
      navigate("/review-order");
    } else if (currentStep === 2) {
      navigate("/address");
    } else if (currentStep === 3) {
      navigate("/confirm-order");
    } else if (currentStep === 4) {
      navigate("/finalcart");
    }
  }, [currentStep, navigate]);


  const gradientStyle = {
    background: "linear-gradient(to top, #ECF281 25%, #2DC8D8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
    // if (step === 2) {
    //   navigate("/address"); // Navigate to the Address component
    // } else if (step === 3) {
    //   navigate("/confirm-order"); // Navigate to the Confirm Order component
    // }
  };
  return (
    <div className="mx-12 h-[auto]">
      <div>
        <div>
          <div className="flex gap-5 mt-10 text-2xl font-semibold ">
            <a href="/">
              <i
                className="fa-solid fa-cart-shopping text-[#ECF281]"
                style={gradientStyle}
              ></i>
            </a>
            <h1 className="text-[#43385B]">My Cart</h1>
          </div>
        </div>

        <div className="flex items-center justify-between w-full  mx-auto p-4 max-md:hidden">
      <div className="flex-1">
        <div className="relative flex items-center">
          <div className="absolute inset-0 flex items-center">
            <div className={`line w-full border-t  border-2 ${currentStep >= 1 ? "border-green-600" : "border-zinc-300"}`}></div>
          </div>
          <div className={`relative flex items-center justify-center w-8 h-8 ml-[210px] bg-white border-2  ${ currentStep >= 2 ? "border-green-400" : "border-zinc-300" } rounded-full`} onClick={() => handleStepClick(1)}>
            <div className={`w-4 h-4 ${currentStep >= 1 ? "bg-green-400" : "bg-white"} rounded-full`}></div>
          </div>
        </div>
        <div className="mt-2 text-center text-xl font-semibold text-zinc-900" onClick={() => handleStepClick(1)}>Review Order</div>
      </div>
      <div className="flex-1">
        <div className="relative flex items-center">
          <div className="absolute inset-0 flex items-center">
            <div className={`w-full border-t border-2 ${ currentStep >= 2 ? "border-green-600" : "border-zinc-300" }`}></div>
          </div>
          <div className={`relative flex items-center justify-center w-8 h-8 ml-[210px] bg-white border-2 ${ currentStep >= 2 ? "border-green-400" : "border-zinc-300" } rounded-full`} onClick={() => handleStepClick(2)} >
          <div className={`w-4 h-4 ${currentStep >= 2 ? "bg-green-400" : "bg-white"} rounded-full`}></div>
          </div>
        </div> 
        <div className={`address mt-2 text-center text-xl font-semibold ${currentStep >= 2 ? "text-zinc-900" : "text-zinc-400"}`} onClick={() => handleStepClick(2)}>Address</div>
        </div>
      <div className="flex-1">
        <div className="relative flex items-center">
          <div className="absolute inset-0 flex items-center">
            <div className={`w-full border-t border-2 ${currentStep >= 3 ? "border-green-600" : "border-zinc-300"}`}></div>
          </div>
          <div className={`relative flex items-center justify-center w-8 h-8 ml-[210px] bg-white border-2 ${currentStep >= 3 ? "border-green-400" : "border-zinc-300"} rounded-full`} onClick={() => handleStepClick(3)}>
            <div className={`w-4 h-4 ${currentStep >= 3 ? "bg-green-400" : "bg-white"} rounded-full`}></div>
          </div>
        </div>
        <div className={`mt-2 text-center text-xl font-semibold ${currentStep >= 3 ? "text-zinc-900" : "text-zinc-400"}`}  onClick={() => handleStepClick(3)}>Confirm Order</div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Cart1st;
