import React, { useState } from "react";
import { Link } from "react-router-dom";
import Val from "./../assets/vicha.png";
import { FaPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { RiHome4Line } from "react-icons/ri";
import { CiTimer } from "react-icons/ci";
import { MdLibraryAdd } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineSupport } from "react-icons/hi";
import { RiMenu2Fill } from "react-icons/ri";
import plus from "./../assets/plus.png";
import Chan from "./../assets/chan.png";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between items-start rounded-r-lg h-screen">
      <div
        className={`fixed inset-0 z-30 ${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-800 bg-opacity-75`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`rounded-r-3xl flex flex-col justify-between h-full fixed inset-y-0 left-0 z-40 w-64 bg-white overflow-y-auto transition duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:inset-0`}
      >
        <div>
          <img
            src={Val}
            alt=""
            className="block mr-auto px-4 py-3 my-4 cursor-pointer"
          />
          <div className="border-2 border-black p-2 flex flex-row justify-between items-center rounded-lg w-11/12 mx-auto cursor-pointer">
            <p>New chat</p>
            <FaPlus className="" />
          </div>
          <nav className="mt-10">
            <Link
              to="/"
              className="px-4 py-3 mt-2 text-sm flex flex-row justify-start items-center font-semibold text-black rounded-lg w-11/12 mx-auto hover:bg-[#EEEEE4]"
            >
              <RiHome4Line className="text-xl mr-2" />
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-3 mt-2 text-sm flex flex-row justify-start items-center font-semibold text-black rounded-lg w-11/12 mx-auto hover:bg-[#EEEEE4]"
            >
              <CiTimer className="text-xl mr-2" />
              Activity
            </Link>
            <Link
              to="/contact"
              className="px-4 py-3 mt-2 text-sm flex flex-row justify-between items-center font-semibold text-black rounded-lg w-11/12 mx-auto hover:bg-[#EEEEE4]"
            >
              <div className="flex flex-row justify-start items-center">
                <MdLibraryAdd className="text-xl mr-2" />
                Library
              </div>
              <FaAngleDown />
            </Link>
          </nav>
        </div>
        <div>
          <div className="my-8">
            <Link
              to="/about"
              className="px-4 py-3 mt-2 text-sm flex flex-row justify-start items-center font-semibold text-gray-600 rounded-lg w-11/12 mx-auto hover:bg-[#EEEEE4]"
            >
              <IoSettingsOutline className="text-xl mr-2" />
              Setting
            </Link>
            <Link
              to="/about"
              className="px-4 py-3 mt-2 text-sm flex flex-row justify-start items-center font-semibold text-gray-600 rounded-lg w-11/12 mx-auto hover:bg-[#EEEEE4]"
            >
              <HiOutlineSupport className="text-xl mr-2" />
              Support
            </Link>
          </div>
          <div className="bg-[#EEEEE4] rounded-lg shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] w-11/12 mx-auto p-4 mb-10 flex flex-col justify-start items-center">
            <div className="flex flex-row justify-start items-center">
              <h1 className="text-black font-bold mr-7 text-xl">Vichayan</h1>
              <img src={plus} alt="" />
            </div>
            <p className="py-4 text-gray-600 text-justify">
              Upgrade for image upload, smarter AI, and more Pro Search
            </p>
            <button className="bg-[#E9A53F] w-full px-3 py-3 text-white text-sm font-bold mx-auto rounded-2xl">
              Get Vichayan Plus
            </button>
          </div>
          <div className="flex flex-row justify-between items-center m-2 p-2">
            <img src={Chan} alt="" className="p-1" />
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-black font-bold text-[10px]">Kanun Nayak</h1>
              <p className="text-gray-400 font-semibold text-[10px]">
                KanunNayak@gmail.com
              </p>
            </div>
            <MdLogout className="text-lg cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="md:ml-64 sm:hidden relative">
        <div className="flex items-center justify-between p-4 text-white md:hidden absolute top-0 left-0">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
          >
            <RiMenu2Fill className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
