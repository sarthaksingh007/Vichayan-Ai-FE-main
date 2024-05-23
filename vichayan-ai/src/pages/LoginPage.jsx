import React from "react";
import Login from "../component/Login";
import LoginHeader from "./../component/LoginHeader";
const LoginPage = () => {
  return (
    <div className="bg-[#EEEEE4]">
      <LoginHeader />
      <Login />
      <div className="py-8 flex flex-row  justify-between mx-auto items-center sm:w-3/4 w-11/12  ">
        <p className="text-gray-400 sm:text-lg text-[11px]">
          Privacy policy
        </p>
        <p className="text-gray-400 sm:text-lg text-[11px]">
          Copyright © Tanumanasa Research Pvt Ltd 2024
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
