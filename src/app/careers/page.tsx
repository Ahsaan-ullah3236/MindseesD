"use client"
import Image from 'next/image';
import image from './career1.gif';
import React, { useRef, useEffect } from "react";
import Recruitment from './recruitment';
import Link from 'next/link';

function Page() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollable = scrollableRef.current;

        const updateHeight = () => {
            if (scrollable) {
                
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            const scrollable = scrollableRef.current;

            if (!section || !scrollable) return;

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollY = window.scrollY;

            if (
                scrollY >= sectionTop &&
                scrollY <= sectionTop + sectionHeight - window.innerHeight
            ) {
                const scrollOffset = scrollY - sectionTop;
                scrollable.scrollTop = scrollOffset;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
const perkData=[
    {
        title:"Attractive Salary Packages",
        decription:"We offer competitive salaries to recognize the value and expertise our employees bring to the table.",
    },
    {
        title:"Flexible Work Options",
        decription:"Our EAP provides confidential support for both personal and professional challenges, prioritizing your well-being.",
    },
    {
        title:"Employee Support Program",
        decription:"At MindSees, we emphasize trust and transparency in every interaction—whether with clients, partners, or within our team.",
    },
    {
        title:"Remote Work Options",
        decription:"Embracing remote work enables our team to collaborate and stay productive from anywhere.We provide competitive salaries as acknowledgment of the value and expertise our employees contribute.",
    },
    {
        title:"Company Events & Celebrations",
        decription:"We celebrate milestones and achievements through regular team events, fostering unity and a spirit of celebration.",
    },
    {
        title:"Fun Loving Activities",
        decription:"Each week, our vibrant academic groups center around activities that broaden the mind and stimulate intellectual growth.",
    },
    
]

    return (
        <div className=''>
            <div className="bg-[#002f46] py-20 spacing-secton">
            <div className='grid grid-cols-1 md:grid-cols-2  '>
            <div className=''>
            <div className="text-white  text-center md:text-left">
                        <h1 className="text-5xl font-bold mb-7">Let’s propel technology forward.</h1>
                        <p className="text-[19px] ">
                        Discover exciting career opportunities at MindSees, where innovation and passion come together. Join our team to work with experts, tackle challenging projects, and make a real impact in technology.
                        </p>
                        <div className="mt-13 flex justify-center md:justify-start">
                            <Link href="/careers/jobs">
                            <button className="bg-[#00D280] cursor-pointer text-white font-semibold px-5 py-4 text-lg rounded-sm hover:bg-[#00b96a] transition-colors">
                                See job Opportunities
                            </button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                        <Image
                            src={image}
                            alt="About Section"
                            width={350}
                            height={400}
                            className=""
                        />
                    </div>

                </div>
              
            </div>

            <div className=" mx-auto mt-12 spacing-secton">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14  mt-40 mb-10'>
            <div className=''>
            <div className=" text-center md:text-left">
                        <h1 className="text-5xl text-[#023047] font-bold mb-6">Looking for Visionary Talent.</h1>
                        <p className="text-lg text-[#023047] mt-12">
                        At MindSees, we are committed to transforming lives through innovative solutions. We are looking for individuals who align with and contribute to our vision. Our company promotes open communication, collaboration, and equal opportunities. We are passionate about growth and always excited to discover dynamic talent.
                        </p>
                        <p className="text-lg text-[#023047] pt-6">Join us to elevate both our companys standards and your own personal and professional growth.</p>
                    </div>
                </div>
                <div className=" flex justify-center">
                        <Image
                            src="https://kavelogics.com/careers/image-1-desktop.svg"
                            alt="About Section"
                            width={800}
                            height={550}
                            className=""
                        />
                    </div>
                </div>
           
            </div>

            <div
               
                className="relative mx-auto bg-linear-to-r/srgb from-[#033f5d] to-[#056ea3] mt-22 py-24 "
            >
                <Recruitment/>
                
            </div>


            <div className="main-container flex justify-center items-center text-center">
                <div className="inner-container w-full spacing-secton">
                    <h1 className="text-5xl text-[#023047] font-bold mt-22 mb-6">Employee Benefits & Perks
                    </h1>
                    <p className='text-lg text-[#023047] mx-auto max-w-4xl mb-12'>Enhance your journey at MindSees with our comprehensive employee benefits and perks. From competitive salaries to flexible work arrangements, we prioritize your well-being and professional development, fostering an environment where you can truly thrive.</p>
                    <div className="three-divs grid grid-cols-1 md:grid-cols-3 gap-8 my-12">

                        {perkData?.map((item,i)=>(

                        <div className="value-card p-8 bg-[#d6f1ff] rounded-sm " key={i}>
                            <h2 className=" font-semibold mt-4 text-[#00d280] " style={{fontSize:'22px', lineHeight:'25px'}}>{item?.title}</h2>
                            <p className="text-[#023047]  mt-6 mb-4" style={{fontSize:"16px" , lineHeight:'20px'}}>
                                {item?.decription}
                            </p>
                        </div>
                        ))}
                        
                    </div>
                    <Link href="/careers/jobs">
                    <button className="bg-[#00D280] cursor-pointer text-white px-4 py-4 mb-30 text-lg font-semibold rounded-sm transition-colors w-55">
                        See Job Opportunities
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page
