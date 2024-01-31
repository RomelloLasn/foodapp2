'use client'
import React from "react"
import { FaRegStar } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";
import { PiArrowFatLeftThin } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { FaFire } from "react-icons/fa";

const Shrimp = () => {
    return (
       <div>
        <div className="flex justify-between items-center mt-5 left-0 right-0 p-4">
            <a href="/"><PiArrowFatLeftThin className="w-7 h-7"/></a>
            <FaHeart className="w-5 h-5"/>
            </div>
            <div className='p-4 text-white rounded-md flex flex-col items-center'>
                <img src="https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-56 h-56 mt-2" />
                <h2 className="font-bold text-xl mt-7">Fried shrimp</h2>
                <div className='mt-7'>
                    <p className='text-center mb-7 text-gray-500'>This is my kind of breakfast egg sandwich and it takes under  5 minutes to make</p>
                </div>
                <div className="flex justify-start gap-1">
                <FaRegStar className="text-gray-500"/>
                <p className="text-gray-500">4,8(163)</p>
                <FaStopwatch className="text-gray-500"/>
                <p className="text-gray-500">20 min</p>
                <FaFire className="text-gray-500"/>
                <p className="text-gray-500">150 kcal</p>
                </div>
            </div>
        </div>
    )
} 

export default Shrimp