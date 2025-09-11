import React from "react";
import { Outlet } from "react-router-dom";
import { SideBarLeft, SideBarRight } from "../../components";
const Public = () => {
  return (
    <div className="w-full flex overflow-y-auto bg-[#CED9D9] ">
      <div className="w-[240px] flex-none  ">
        <SideBarLeft />
      </div>
      <div className="flex-auto ">
        <Outlet />
      </div>
      <div className="w-[329px] flex-none ">
        <SideBarRight />
      </div>
    </div>
  );
};

export default Public;
