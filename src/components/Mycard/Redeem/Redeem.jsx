import React from "react";

const Redeem = () => {
  return (
    <>
      <div className="mt-10">
        <div >
          <div className="md:grid grid-cols-2">
            <div>
              <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[70%] max-md:w-[90%] max-md:ml-[30px] p-10 pt-20 pb-28 rounded-xl ml-[200px]">
                <div className="flex gap-5 text-2xl font-semibold">
                  <a href="">
                  <i class="fa-solid fa-wallet text-[#2CD8D2]"></i>
                  </a>
                  <h1 className="text-[#43385B]">Cash Out</h1>
                </div>
                <form action="" className="flex flex-col mt-10 ">
                    <label htmlFor="" className="text-xl font-semibold">Form</label>
                    <input type="text" placeholder="0 point" className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 w-[100%]"/>
                </form>
                <div>
                    <p className="text-center mt-3">Current balance: <b>12 437 Points</b> </p>
                </div>
                <form action="" className="flex flex-col mt-3 ">
                    <label htmlFor="" className="text-xl font-semibold">To</label>
                    <input type="text" placeholder="0 point" className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 w-[100%]"/>
                </form>
                <button className="mt-20 px-10 py-3 ml-[150px] bg-[#d9d9d9] text-white font-semibold rounded-md">
                  Submit
                </button>

              </div>
            </div>
            <div>
              <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[70%] max-md:w-[90%] max-md:ml-[30px] max-md:mt-10 p-10 pt-20 pb-28 rounded-xl ">
                <div className="flex gap-5 text-2xl font-semibold">
                  <a href="">
                  <i class="fa-solid fa-wallet text-[#2CD8D2]"></i>
                  </a>
                  <h1 className="text-[#43385B]">Redeem</h1>
                </div>
                <form action="" className="flex flex-col mt-10 ">
                    <label htmlFor="" className="text-xl font-semibold">Form</label>
                    <input type="text" placeholder="0 point" className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 w-[100%]"/>
                </form>
                <div>
                    <p className="text-center mt-3">Current balance: <b>12 437 Points</b> </p>
                </div>
                <form action="" className="flex flex-col mt-3 ">
                    <label htmlFor="" className="text-xl font-semibold">To</label>
                    <input type="text" placeholder="0 QAR" className="border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2 w-[100%]"/>
                </form>
                <div>
                    <p className="text-center mt-3">1 Point = 8 QAR</p>
                </div>
                <button className="mt-10 px-10 py-3 ml-[150px] bg-[#d9d9d9] text-white font-semibold rounded-md">
                  Submit
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Redeem;
