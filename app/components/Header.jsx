'use client'
import React from 'react'
import { FaHamburger } from "react-icons/fa";

const Header = () => {
    return (
      <div className="flex items-center justify-between gap-12">
        <div>
          <h1 className='text-gray-500'>Good Morning</h1>
          <h2 className='text-xl'>Food Fighters</h2>
        </div>
        <div>
          <FaHamburger className='h-7 w-7'/>
        </div>
      </div>
    );
  };


export default Header 