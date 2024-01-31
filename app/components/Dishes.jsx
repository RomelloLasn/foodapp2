'use client'
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";




const Dishes = () => {
        return (
            <div className='mt-5'>
                <div className='flex'>
                <h1 className='text-xl mb-5'>New dishes</h1>
                <div className='ml-auto'>
                <a href="" className='flex items-center'>All <FaLongArrowAltRight /></a>
                </div>
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <a href="/Page2">
                        <div className='bg-[#353842] p-4 text-white rounded-md flex flex-col items-center'>
                            <img src="https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-28 px h-28 mt-2" />
                            <h2>Fried shrimp</h2>
                                <div className='flex justify-start gap-1'>
                                    <FaRegStar />
                                    <p className='mr-1'>4,8(163)</p>
                                    <FaStopwatch />
                                    <p>20min</p>
                                </div>
                            <p className='text-red-500'>€29.99</p>
                        </div>
                    </a>
                    <a href="">
                        <div className='bg-[#353842] p-4 text-white rounded-md flex flex-col items-center'>
                            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D    " alt="" className="w-28 px h-28 mt-2" />
                            <h2>Fried shrimp</h2>
                                <div className='flex justify-start gap-1'>
                                    <FaRegStar />
                                    <p className='mr-1'>4,8(163)</p>
                                    <FaStopwatch />
                                    <p>20min</p>
                                </div>
                            <p className='text-red-500'>€29.99</p>
                        </div>
                    </a>
                </div>
            </div>
          );
          }
          

export default Dishes