import React from "react";
import Sidebar from "./../component/SideBar";
import Home from "./../pages/Home";

const SecondApp = () => {
  return (
    <div className="flex bg-[#EEEEE4] h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Home />
      </div>
    </div>
  );
};

export default SecondApp;
