import React from "react";
import Lo_1 from "../../assets/Shipping.png";
import Lo_2 from "../../assets/Support.png";
import Lo_3 from "../../assets/Discount.png";
import Lo_4 from "../../assets/Total.png";

const SupplySection = () => {
  return (
    <div className="supply bg-gray-200">
      <div className="flex justify-around py-4 md:flex-wrap md:flex-nowrap">
        {/* First Item */}
        <div
          className="flex items-center flex-col gap-4 md:w-1/4 md:flex-grow"
          style={{ flexBasis: "200px" }}
        >
          <img src={Lo_1} alt="" />
          <div className="supply-text">
            <h5 className="text-xl">Get Free Shipping</h5>
            <p>Save QR 100 or more </p>
          </div>
        </div>

        {/* Second Item */}
        <div
          className="flex items-center flex-col gap-4 md:w-1/4 md:flex-grow"
          style={{ flexBasis: "200px" }}
        >
          <img src={Lo_2} alt="" />
          <div className="supply-text">
            <h5 className="text-xl">Support Online</h5>
            <p>Call : +974 4400 8888</p>
          </div>
        </div>

        {/* Third Item */}
        <div
          className="flex items-center flex-col gap-4 md:w-1/4 md:flex-grow"
          style={{ flexBasis: "200px" }}
        >
          <img src={Lo_3} alt="" />
          <div className="supply-text">
            <h5 className="text-xl">Discount</h5>
            <p>20% off on selections </p>
          </div>
        </div>

        {/* Fourth Item */}
        <div
          className="flex items-center flex-col gap-4 md:w-1/4 md:flex-grow"
          style={{ flexBasis: "200px" }}
        >
          <img src={Lo_4} alt="" />
          <div className="supply-text">
            <h5 className="text-xl">Money Back</h5>
            <p>100% Money Guarantee </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplySection;
