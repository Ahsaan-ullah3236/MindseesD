"use client"
import React from "react"
import Link from "next/link";
import {Building2,MapPin } from 'lucide-react';

const Jobs=()=>{

    return(
        <div>
<div className="relative w-full py-27 bg-[#023047]  overflow-hidden">
       
        <div className=" bg-blue/2000 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{lineHeight:"55px"}}>
            Search, Apply, and Get <br/>Your Dream Job
          </h1>
         

          <div className="search-bar flex w-full max-w-xl mt-8 sm:mt-12 gap-2 md:gap-0">
            <input
              type="text"
              placeholder="Search by role or keyword?"
              className="flex-grow px-4 py-2 sm:py-1 bg-white text-gray-500 text-base sm:text-lg rounded-md sm:rounded-l-md sm:rounded-r-none border border-gray-300 focus:outline-none"
            />
            <button className="bg-[#00d280] text-white px-4 sm:px-4 py-3 sm:py-4 rounded-md sm:rounded-r-md sm:rounded-l-none cursor-pointer ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={3} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="py-20 max-w-4xl mx-auto items-center">
        <div className="text-center text-[30px]">Current Openings</div>
        <div className="flex justify-center mt-2">

           <a href="https://www.google.com/maps/place/MindSees/@31.4642669,74.2988289,17z/data=!3m1!4b1!4m6!3m5!1s0x8562bef8b6b348af:0x2228a06e52354095!8m2!3d31.4642624!4d74.3014038!16s%2Fg%2F11mcwzy2ny?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D" target="_blank"
            rel="noopener noreferrer" className="mr-15">
              <div  className="text-gray-400 mt-1 flex" style={{fontSize:"16px"}}>
              <span className="mr-1"><Building2 className="h-4 mt-1 w-4 "/></span> MindSees
              </div>
                </a>
           <a href="https://www.google.com/maps/place/MindSees/@31.4642669,74.2988289,17z/data=!3m1!4b1!4m6!3m5!1s0x8562bef8b6b348af:0x2228a06e52354095!8m2!3d31.4642624!4d74.3014038!16s%2Fg%2F11mcwzy2ny?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D" target="_blank"
            rel="noopener noreferrer">
              <div  className="text-gray-400 mt-1 flex" style={{fontSize:"16px"}}>
              <span className="mr-1"><MapPin className="h-4 mt-1 w-4 "/></span> Lahore, Pakistan
              </div>
                </a>
        </div>
        <div className="flex justify-center flex-wrap py-20">
            <Link href="listings">
            <div className="h-14 rounded-full mb-4 flex items-center text-white bg-[#00d280] px-4 mr-4 font-semibold cursor-pointer">Social Media Management</div>
            </Link>
            <Link href="listings">
            <div className="h-14 rounded-full mb-4 flex items-center text-white bg-[#00d280] px-4 mr-4 font-semibold cursor-pointer">Business Development</div>
            </Link>
            <Link href="listings">
            <div className="h-14 rounded-full flex mb-4 items-center text-white bg-[#00d280] px-4 mr-4 font-semibold cursor-pointer">Graphic Designing</div>
            </Link>
            <Link href="listings">
            <div className="h-14 rounded-full flex mb-4 items-center text-white bg-[#00d280] px-4 mr-4 font-semibold cursor-pointer">Front-end Web Development</div>
        </Link>
        </div>

      </div>
        </div>
    )
}
export default Jobs;