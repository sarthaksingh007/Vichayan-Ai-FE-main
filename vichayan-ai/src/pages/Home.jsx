import React from "react";
import Vichaa from "./../assets/vichaa.png";
import { IoSend } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import { FiPaperclip } from "react-icons/fi";
import { PiLineVerticalBold } from "react-icons/pi";
const Home = () => {
  return (
    <div className="bg-[#EEEEE4]">
      <div className="mx-auto sm:w-3/4 w-full flex flex-col justify-center items-center sm:mt-24 mt-64">
        <img src={Vichaa} alt="" className="sm:w-1/12 w-1/4" />
        <h1 className="sm:text-3xl text-4xl font-bold my-5">How can I help you?</h1>
        <form action="" className="w-full ">
          <div className="flex flex-row justify-between items-center bg-white rounded-xl p-3 sm:w-3/4 w-11/12 mx-auto my-10">
            <input type="text" name="" id="" className="text-lg w-full focus:outline-none"/>
            <div className="flex  flex-row justify-between items-center">
              <FiPaperclip className="text-base " />
              <PiLineVerticalBold className="text-base mx-3" />
              <IoFilterSharp className="text-base " />
              <PiLineVerticalBold className="text-base mx-3" />
              <IoSend className="text-base " />
            </div>
          </div>
        </form>
        <div className="sm:flex hidden flex-row flex-wrap justify-center items-center">
          <div className="border-2 border-gray-400 rounded-xl p-3 w-2/5 m-3">
            <h1 className="text-black text-lg font-bold">
              Science & Technology
            </h1>
            <p className="text-gray-500 ">
              Research on scientific inquiry, technological innovation,
              engineering principles, and mathematical concepts.
            </p>
          </div>
          <div className="border-2 border-gray-400 rounded-xl p-3 w-2/5 m-3">
            <h1 className="text-black text-lg font-bold">Society & Humanity</h1>
            <p className="text-gray-500 ">
              Research on human society, behavior, culture, and interactions
              such as psychology, sociology, anthropology.
            </p>
          </div>
          <div className="border-2 border-gray-400 rounded-xl p-3 w-2/5 m-3">
            <h1 className="text-black text-lg font-bold">Health Science</h1>
            <p className="text-gray-500 ">
              Research focuses on the study of human health, well-being,
              diseases, medical treatments, and healthcare systems.
            </p>
          </div>
          <div className="border-2 border-gray-400 rounded-xl p-3 w-2/5 m-3">
            <h1 className="text-black text-lg font-bold">
              Earth & Environment
            </h1>
            <p className="text-gray-500 ">
              Research involves the study of the Earth's natural systems,
              environmental processes, ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
