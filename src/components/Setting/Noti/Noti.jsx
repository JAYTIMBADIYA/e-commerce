import React from "react";
import Group_1 from '../../../assets/Group 33528.png'

const Noti = () => {
  return (
    <div className="mx-[160px]">
      <div>
        <div className="flex gap-5 mt-20 text-2xl font-semibold">
          <a href="">
            <i class="fa-solid fa-gear text-[#2CD8D2]"></i>
          </a>
          <h1 className="text-[#43385B]">Notification Settings</h1>
        </div>

        <div>
            <div>
                <div>
                    <img src={Group_1} alt="" />
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Noti;
