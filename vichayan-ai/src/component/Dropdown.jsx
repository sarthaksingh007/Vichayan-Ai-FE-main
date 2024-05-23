// src/components/Dropdown.js
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className=" flex flex-row justify-between  items-center w-full rounded-md border-2 border-gray-400 shadow-sm px-1 py-2 bg-transparent text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <CiGlobe className="text-lg mr-2"/>
          ENG
          <FaChevronDown className="text-base ml-2"/>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-500 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="#"
              className="text-gray-500 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              className="text-gray-500 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              License
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
