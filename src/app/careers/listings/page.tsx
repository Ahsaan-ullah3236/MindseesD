"use client"
import React from "react"

import { DollarSign, MapPin, Briefcase, Clock } from 'lucide-react';
import Link from "next/link";

const Listings = () => {

    const Responsibilities = [
        "Develop and implement social media strategies to enhance brand visibility and engagement across all platforms",
        "Create, schedule, and manage compelling content tailored to our target audience on channels like Facebook, Twitter, LinkedIn, and Instagram",
        "Monitor social media trends, analytics, and user interactions to optimize campaigns and drive traffic",
        "Collaborate with the marketing team to align social media efforts with overall business goals and promotions",
        "Engage with followers, respond to inquiries, and manage online communities to foster positive relationships"
    ]
    const Requirements = [
        "Proven experience in social media marketing, with a strong understanding of various platforms and tools",
        "Excellent communication skills, creativity, and ability to create engaging content tailored for diverse audiences",
        "Familiarity with analytics tools to track performance and optimize strategies for maximum impact",
    ]
    const PreferredQualifications = [
        "Recent graduates or final year students",
        "Learning focused individuals"
    ]
    const Offer = [
        "Hands-on experience working with popular SAAS-based platforms",
        "Opportunity for a full-time role after successful internship completion",
        "A collaborative and supportive work environment",
        "A 12 week program with a stipend of 10,000 rupees"
    ]

    return (
        <div>
            <div className="relative w-full pt-13 pb-20 bg-[#d6f1ff] spacing-secton overflow-hidden">
                <div className="text-3xl sm:text-5xl font-semibold sm:text-bold ">Social Media Management Internship Leading to Job</div>
                <div className="flex flex-wrap py-5">
                    <div className="h-11 rounded-full mb-4 flex items-center text-black bg-[#ffffff] border-1 border-black px-4 mr-4 text-sm font-base cursor-pointer">Social Media Management</div>
                    <div className="h-11 rounded-full mb-4 flex items-center text-black bg-[#ffffff] border-1 border-black px-4 mr-4 text-sm font-base cursor-pointer">Content Analysis</div>
                    <div className="h-11 rounded-full mb-4 flex items-center text-black bg-[#ffffff] border-1 border-black px-4 mr-4 text-sm font-base cursor-pointer">Email Marketing</div>

                </div>
                <div className="sm:flex">
                    <div className="w-full sm:w-[60%]">
                        <div className="flex justify-between mt-3">
                            <div className="flex">
                                <Clock className=" mt-3 text-blue-600 flex h-5 w-5" />
                                <div className="ml-3">
                                    <div className="text-gray-500 " style={{ fontSize: "12px" }}>Posted</div>
                                    <div className="text-black-500 font-semibold " style={{ fontSize: "15px" }}>October 1, 2024</div>
                                </div>
                            </div>
                            <div className="flex mr-[40px]">
                                <DollarSign className=" mt-3 text-blue-600 flex h-5 w-5" />
                                <div className="ml-3">
                                    <div className="text-gray-500 " style={{ fontSize: "12px" }}>Salary</div>
                                    <div className="text-black-500 font-semibold " style={{ fontSize: "15px" }}>10000 PKR</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-5">
                            <div className="flex">
                                <Briefcase className=" mt-3 text-blue-600 flex h-5 w-5" />
                                <div className="ml-3">
                                    <div className="text-gray-500 " style={{ fontSize: "12px" }}>Job Type</div>
                                    <div className="text-black-500 font-semibold " style={{ fontSize: "15px" }}>OnSite</div>
                                </div>
                            </div>
                            <div className="flex">
                                <MapPin className=" mt-3 text-blue-600 flex h-5 w-5" />
                                <div className="ml-3">
                                    <div className="text-gray-500 " style={{ fontSize: "12px" }}>Location</div>
                                    <div className="text-black-500 font-semibold " style={{ fontSize: "15px" }}>Lahore, Pakistan</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[40%]">
                        <div className="flex sm:justify-end sm:items-end h-[100%] mt-4">
                            <Link href="apply">
                                <div className="h-15 rounded-md flex items-center text-center justify-center text-white bg-[#00d280] w-40 font-semibold cursor-pointer">Apply Now</div>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
            <div className= "py-8 sm:py-14 spacing-secton">
                <div className="text-[25px] font-semibold">Job Description</div>
                <div className="h-[0.8px] bg-gray-200 w-full mt-2 "></div>
                <div className="text-[15px] text-gray-600 mt-6  ">We are seeking a motivated social media management intern to assist in developing and executing engaging content strategies across our platforms. This role offers hands-on experience in growing our online presence and interacting with our audience.</div>
                <div className="text-[25px] font-semibold mt-8 sm:mt-14">Responsibilities</div>
                <div className="h-[0.8px] bg-gray-200 w-full mt-2 mb-6 "></div>
                {Responsibilities?.map((item, i) => (
                    <div className="flex mt-3" key={i}>
                        <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 mr-2"></div>
                        <div className="text-[15px] text-gray-600">{item}</div>
                    </div>
                ))}
                <div className="text-[25px] font-semibold mt-8 sm:mt-14">Requirements</div>
                <div className="h-[0.8px] bg-gray-200 w-full mt-2 mb-6 "></div>
                {Requirements?.map((item, i) => (
                    <div className="flex mt-3" key={i}>
                        <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 mr-2"></div>
                        <div className="text-[15px] text-gray-600">{item}</div>
                    </div>
                ))}
                <div className="text-[25px] font-semibold mt-8 sm:mt-14">Preferred Qualifications</div>
                <div className="h-[0.8px] bg-gray-200 w-full mt-2 mb-6 "></div>
                {PreferredQualifications?.map((item, i) => (
                    <div className="flex mt-3" key={i}>
                        <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 mr-2"></div>
                        <div className="text-[15px] text-gray-600">{item}</div>
                    </div>
                ))}
                <div className="text-[25px] font-semibold mt-8 sm:mt-14">What We Offer</div>
                <div className="h-[0.8px] bg-gray-200 w-full mt-2 mb-6 "></div>
                {Offer?.map((item, i) => (
                    <div className="flex mt-3" key={i}>
                        <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 mr-2"></div>
                        <div className="text-[15px] text-gray-600">{item}</div>
                    </div>
                ))}
                <div className="flex justify-center mt-10">
                    <Link href="apply">
                        <div className="h-16 rounded-md flex items-center text-center justify-center text-[18px] text-white bg-[#00d280] w-60 font-semibold cursor-pointer">Apply for This Position</div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default Listings;