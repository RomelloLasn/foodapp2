'use client'
import React from 'react'
import { FaConciergeBell } from "react-icons/fa";
import { GiDiceSixFacesFour } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='flex justify-between items-center mt-5 fixed bottom-0 left-0 right-0 p-4'>
          <FaConciergeBell className='w-7 h-7' />
          <GiDiceSixFacesFour className='w-7 h-7' />
          <FaHeart className='w-7 h-7' />
          <FaShoppingCart className='w-7 h-7' />
        </div>
    )
}


export default Footer