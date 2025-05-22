"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Lastbusinesses from "@/app/Lastbusinesses/page";
import React from 'react'
import Pagination from '../components/pagination';

import StreamliningSoftwareSolutionsOpstionA from "@/app/portfolio/images/StreamliningSoftwareSolutionsOpstionA.svg"
import StreamliningGlobalPaymen from "@/app/portfolio/images/StreamliningGlobalPaymen.svg"
import StreamliningHealthcareOperations from "@/app/portfolio/images/StreamliningHealthcareOperations.svg"
import SMPLCards from "@/app/portfolio/images/SMPLCards.svg"
import CustomizationMemorableExperiences from "@/app/portfolio/images/CustomizationMemorableExperiences.svg"
const Portfolio =()=> {

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 4;
    const CaseStudyData = [
        {
            image: StreamliningSoftwareSolutionsOpstionA,
            title: "Streamlining Software Solutions: Option A",
            description: "Option A empowers founders, employees, and entrepreneurs to boost monthly revenue. It helps businesses start, grow, and scale by focusing on revenue growth and operations.",
        },
        {
            image: StreamliningGlobalPaymen,
            title: "Streamlining Global Payments: Introducing PayMe",
            description: "PayMe is a user-friendly mobile app designed for global payments, facilitating seamless bill submission via mobile devices worldwide.",
        },
        {
            image: StreamliningHealthcareOperations,
            title: "Streamlining Healthcare Operations with Wellness",
            description: "Provides seamless pharmacy and nursing services, enhancing hospital efficiency. Simplifies processes for both patients and doctors, improving overall healthcare experiences.",
        },
        {
            image: SMPLCards,
            title: "SMPLCards: Interactive Learning through Quizzes and Flashcards",
            description: "SMPLCards, is a platform designed for students to efficiently create quizzes, study using flashcards, and generate notes through a user-friendly dashboard and website.",
        },
        {
            image: StreamliningHealthcareOperations,
            title: "Streamlining Healthcare Operations with Wellness",
            description: "Provides seamless pharmacy and nursing services, enhancing hospital efficiency. Simplifies processes for both patients and doctors, improving overall healthcare experiences.",
        },
        {
            image: CustomizationMemorableExperiences,
            title: "Personalized Tourism Packages: Easy Customization, Memorable",
            description: "Life Up Top, is a user-friendly platform that provides customizable global tourism packages for unforgettable travel adventures.",
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
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-10">Case Studies</h1>
                    <p className="text-[18px] text-gray-900 mb-10 max-w-3xl">
                        Explore the comprehensive and insightful case studies of our remarkably successful projects.
                    </p>

                    <div className="inner-mian-container-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                        {paginatedData?.map((item, i) => (
                            <div className="first-container rounded-lg overflow-hidden group " key={i}>
                                <Link href="/case-studies/opstionA" passHref>
                                    <div className="overflow-hidden rounded-lg">
                                        <Image
                                            src={item?.image}
                                            alt="Case Study A"
                                            width={640}
                                            height={400}
                                            className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </Link>

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
                <Pagination currentPage={currentPage} totalPages={totalPages} onNext={handleNext} onBack={handleBack} />

            </div>
            <Lastbusinesses />

        </>

    )
}

export default Portfolio;
