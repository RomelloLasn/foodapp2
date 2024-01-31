'use client'
import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";
import { GiSandwich } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";

const Categorys = () => {
    return (
        <div className='mt-7 '>
          <div className='flex items-center'>
            <div className='mt-5'>
              <h1 className='text-xl mr-60'>Categories</h1>
            </div>
            <div className='ml-1 mt-7'>
              <a href="" className='flex items-center'>All <FaArrowRightLong className='ml-1' /></a>
            </div>
          </div>
          <div className='flex items-center ml-1 gap-8 mt-5'>
            <a href="" className='flex items-center border rounded p-3 text-xl'><FaHamburger />Burger</a>
            <a href="" className='flex items-center border rounded p-3 text-xl'><GiSandwich />Sandwich</a>
          </div>
        </div>
      );
}

export default Categorys