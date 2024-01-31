'use client'
import React, { useState } from 'react';

import { FaCcMastercard,FaBars,FaMapMarker,FaHamburger,FaShoppingCart,FaInfoCircle,FaPlane } from 'react-icons/fa';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none transition duration-300 transform hover:scale-110"
      >< FaBars className='w-7 h-7 mb-5'/>
      </button>
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col absolute top-0 left-0 p-4 bg-gray-800 h-full z-10 justify-between`}>
          <button
         onClick={toggleMenu}
         className="text-white focus:outline-none transition duration-300 transform hover:scale-110"
       >< FaBars className='w-7 h-7'/>
       </button>
        <FaCcMastercard className='w-7 h-7'/>
        <FaShoppingCart className='w-7 h-7'/>
        <FaMapMarker className='w-7 h-7'/>
        <FaHamburger className='w-7 h-7'/>
        <FaPlane className='w-7 h-7'/>
        <FaInfoCircle className='w-7 h-7'/>
      </div>
    </div>
  );
};

export default BurgerMenu;
