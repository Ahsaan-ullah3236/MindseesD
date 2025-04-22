"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/app/Footer/page"; 
import Lastbusinesses from "@/app/Lastbusinesses/page";
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
function page() {
  return (
    <>
      <div className="pherosection-main-container spacing-secton">
                <div className="pherosection-second-container cursor-pointer">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 mt-10">Case Studies</h1>
                    <p className="text-sm text-gray-900 mb-10 max-w-3xl">
                        Explore the comprehensive and insightful case studies of our remarkably successful projects.
                    </p>

                    <div className="inner-mian-container-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                        <div className="first-container rounded-2xl overflow-hidden group ">
                            <div className="overflow-hidden rounded-lg">
                                <Image
                                    src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/8b2819ae-4071-46ae-fb62-ec094913f000/w=640,q=75"
                                    alt="Case Study A"
                                    width={640}
                                    height={400}
                                    className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="pt-6 bg-white rounded-b-2xl px-1 pb-2">
                                <h2 className="text-md font-semibold text-gray-900 mb-2">
                                    Streamlining Software Solutions: Option A
                                </h2>
                                <p className=" text-gray-900 text-sm">
                                    Option A empowers founders, employees, and entrepreneurs to boost monthly revenue.
                                    It helps businesses start, grow, and scale by focusing on revenue growth and operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/portfolio">
                  <button className="flex items-center gap-2 text-[#00D280] pl-3 pr-3 border-2 rounded-lg border-[#00D280] mt-16 cursor-pointer transition-colors">
                 <ArrowLeftIcon className="w-6 h-6 text-bold font-bold " />
                </button>
               </Link>
             </div>
             <Lastbusinesses/>
             <Footer/>
    </>
  )
}

export default page
