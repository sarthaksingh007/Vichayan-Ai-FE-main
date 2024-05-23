import React from "react";
import GoogleIcon from "../icons/GoogleIcon.jsx";
import Apple from "../icons/Apple.jsx";
import Microsoft from "../icons/Microsoft.jsx";
import { useNavigate } from "react-router-dom";
import Val from "./../assets/vichayan.png";
// import Vichayan from "./../assets/Vichayan.png";
const Login = () => {

    const navigate =useNavigate();
    const navigateHome=()=>{
        navigate('/home')
    }
  return (
    <div>
      <div className="font-[sans-serif] text-[#333]">
        <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
          <div className="flex justify-center  items-center max-w-7xl w-full">
            <div className="border bg-[#FFFFFF] border-gray-300 rounded-xl p-6  shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] sm:w-2/4 mx-auto w-full">
              <div className="relative">
                <img
                  src={Val}
                  alt=""
                  className="absolute top-[-27px] right-[-28px] w-1/4"
                />
              </div>
              <form className="space-y-6">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold">Welcome Back!</h3>
                  <p className="text-sm mt-4 text-gray-400">
                    Login to continue with{" "}
                    <b className="text-black">Vichayan AI</b>
                  </p>
                </div>
                <div className="flex flex-row sm:justify-evenly justify-center items-center pb-8">
                  <div className="flex flex-row justify-center items-center rounded-md bg-[#EEEEE4] p-2 m-1">
                    <GoogleIcon className="" />
                    <p className="ml-2 font-semibold sm:text-lg text-sm">
                      Google
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center rounded-md bg-[#EEEEE4] p-2 m-1">
                    <Apple className="" />
                    <p className="ml-2 font-semibold sm:text-lg text-sm">
                      Apple
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center rounded-md bg-[#EEEEE4] p-2 m-1">
                    <Microsoft className="" />
                    <p className="ml-2 font-semibold sm:text-lg text-sm">
                      Microsoft
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-sm mb-2 block">User name</label>
                  <div className="relative flex items-center">
                    <input
                      name="username"
                      type="text"
                      required
                      className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                      placeholder="Enter user name"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-sm mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                      placeholder="Enter password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                  {/*  */}
                  <div className="text-sm ">
                    <a
                      href="jajvascript:void(0);"
                      className="font-bold text-black hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div className="!mt-10">
                  <button
                    onClick={navigateHome}
                    type="button"
                    className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none"
                  >
                    Log in
                  </button>
                </div>
                <p className="text-sm !mt-10 text-center">
                  Don't have an account{" "}
                  <a
                    href="javascript:void(0);"
                    className=" hover:underline ml-1 whitespace-nowrap font-bold text-black"
                  >
                    Sign Up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
