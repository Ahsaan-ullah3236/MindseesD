"use client"
import {useState} from 'react';
import Image from 'next/image';
import Lastbusinesses from "@/app/Lastbusinesses/page";
import React from 'react'
import Pagination from '../components/pagination';

function page() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
  
    const CaseStudyData=[
        {
            image:"https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/8b2819ae-4071-46ae-fb62-ec094913f000/w=640,q=75",
            title:"Streamlining Software Solutions: Option A",
            description:"Option A empowers founders, employees, and entrepreneurs to boost monthly revenue. It helps businesses start, grow, and scale by focusing on revenue growth and operations.",
        },
        {
            image:"https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/849b4d4d-3c52-42b1-ae33-b12149e71700/w=640,q=75",
            title:"Streamlining Global Payments: Introducing PayMe",
            description:"PayMe is a user-friendly mobile app designed for global payments, facilitating seamless bill submission via mobile devices worldwide.",
        },
        {
            image:"https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/bec28dd1-3315-42a3-d6c2-ff86cd945500/w=640,q=75",
            title:"Streamlining Healthcare Operations with Wellness",
            description:"Provides seamless pharmacy and nursing services, enhancing hospital efficiency. Simplifies processes for both patients and doctors, improving overall healthcare experiences.",
        },
        {
            image:"https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/15f2ed10-cb5d-4b31-74ab-25f304e2c200/w=640,q=75",
            title:"SMPLCards: Interactive Learning through Quizzes and Flashcards",
            description:"SMPLCards, is a platform designed for students to efficiently create quizzes, study using flashcards, and generate notes through a user-friendly dashboard and website.",
        },
        {
            image:"https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/e2412777-4571-47c2-c489-9cbf1d48fc00/w=640,q=75",
            title:"Streamlining Healthcare Operations with Wellness",
            description:"Provides seamless pharmacy and nursing services, enhancing hospital efficiency. Simplifies processes for both patients and doctors, improving overall healthcare experiences.",
        },
        {
            image:"https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/9f19faec-46bf-488b-5d2f-83460157c900/w=640,q=75",
            title:"Personalized Tourism Packages: Easy Customization, Memorable",
            description:"Life Up Top, is a user-friendly platform that provides customizable global tourism packages for unforgettable travel adventures.",
        },
    ]
    const totalPages = Math.ceil(CaseStudyData.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } 
  };
  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const paginatedData = CaseStudyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
    return (
       
         <>
            <div className="pherosection-main-container spacing-secton">
                <div className="pherosection-second-container ">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 mt-10">Case Studies</h1>
                    <p className="text-[18px] text-gray-900 mb-10 max-w-3xl">
                        Explore the comprehensive and insightful case studies of our remarkably successful projects.
                    </p>

                    <div className="inner-mian-container-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                        {paginatedData?.map((item, i)=>(
                            <div className="first-container rounded-lg overflow-hidden group " key={i}>
                            <div className="overflow-hidden rounded-lg">
                                <Image
                                    src={item?.image}
                                    alt="Case Study A"
                                    width={640}
                                    height={400}
                                    className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="pt-6 bg-white rounded-b-2xl px-1 pb-2">
                                <h2 className="text-md font-semibold text-gray-900 mb-2">
                                    {item?.title}
                                </h2>
                                <p className="text-gray-900 text-sm">
                                    {item?.description}
                                </p>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onNext={handleNext}  onBack={handleBack}/>
                
             </div>
             <Lastbusinesses/>
            
         </>

    )
}

export default page
