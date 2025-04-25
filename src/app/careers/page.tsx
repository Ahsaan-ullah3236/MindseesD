"use client"
import Image from 'next/image';
import image from './image.png';
import React, { useRef, useEffect } from "react";
import Recruitment from './recruitment';

function Page() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollableRef = useRef<HTMLDivElement>(null);
    // const [componentHeight, setComponentHeight] = useState(0);

    useEffect(() => {
        const scrollable = scrollableRef.current;

        const updateHeight = () => {
            if (scrollable) {
                // const scrollHeight = scrollable.scrollHeight;
                // const clientHeight = scrollable.clientHeight;
                // setComponentHeight(scrollHeight - clientHeight + window.innerHeight);
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
        title:"Competitive Salary Packages",
        decription:"We provide competitive salaries as acknowledgment of the value and expertise our employees contribute.",
    },
    {
        title:"Flexible Work Arrangements",
        decription:"Our EAP ensures confidential support for personal and professional challenges, prioritizing your well-being.",
    },
    {
        title:"Employee Assistance Program (EAP)",
        decription:"At MindSees, we prioritize trust and transparency in all interactions—with clients, partners, and within our team.",
    },
    {
        title:"Competitive Salary Packages",
        decription:"We provide competitive salaries as acknowledgment of the value and expertise our employees contribute.",
    },
    {
        title:"Flexible Work Arrangements",
        decription:"Our EAP ensures confidential support for personal and professional challenges, prioritizing your well-being.",
    },
    {
        title:"Employee Assistance Program (EAP)",
        decription:"At MindSees, we prioritize trust and transparency in all interactions—with clients, partners, and within our team.",
    },
    
]

    return (
        <div className=''>
            <div className="bg-[#002f46] py-16 spacing-secton">
            <div className='grid grid-cols-1 md:grid-cols-3  '>
            <div className='col-span-2'>
            <div className="text-white  text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-6">Lets Drive tech forward</h1>
                        <p className="text-sm leading-relaxed">
                            Explore exciting career opportunities at MindSees, where innovation meets passion.<br/>Join us to collaborate with experts, tackle challenging projects, and make a <br/>meaningful impact in technology.
                        </p>
                        <div className="mt-13 flex justify-center md:justify-start">
                            <button className="bg-[#00D280] text-white font-semibold px-3 py-3 text-md rounded-sm hover:bg-[#00b96a] transition-colors">
                                See job Opportunities
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                        <Image
                            src={image}
                            alt="About Section"
                            width={650}
                            height={400}
                            className="rounded-2xl shadow-lg"
                        />
                    </div>

                </div>
              
            </div>

            <div className="max-w-7xl mx-auto mt-12 spacing-secton">
            <div className='grid grid-cols-1 md:grid-cols-3  mt-40 mb-10'>
            <div className='col-span-2'>
            <div className=" text-center md:text-left">
                        <h1 className="text-4xl text-[#023047] font-bold mb-6 mt-4">Seeking Visionary Individuals</h1>
                        <p className="text-sm text-[#023047] mt-12">
                            At MindSees, we are dedicated to transform users lives through our innovative solutions. We <br/>seek individuals who share and contribute to our vision. Our company fosters an environment of<br/> open communication, collaboration, and equal opportunities. We are passionate about growth<br/> and always eager to discover dynamic talent.
                        </p>
                        <p className='text-sm text-[#023047] pt-6'>Join us to elevate not only our companys standards but also your own personal and professional<br/> benchmarks.</p>
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
               
                className="relative max-w-7xl mx-auto bg-linear-to-r/srgb from-[#033f5d] to-[#056ea3] mt-22 py-24 "
            >
                <Recruitment/>
                
            </div>


            <div className="main-container flex justify-center items-center text-center">
                <div className="inner-container w-full max-w-4xl">
                    <h1 className="text-3xl text-[#023047] font-bold mt-22 mb-4">Employee Benefits & Perks
                    </h1>
                    <p className='text-md text-[#023047] mb-12'>Elevate your experience at MindSees with our comprehensive suite of employee benefits and perks. From <br/>competitive salaries to flexible work arrangements, we prioritize your well-being and professional growth, creating<br/> an environment where you can thrive</p>
                    <div className="three-divs grid grid-cols-1 md:grid-cols-3 gap-6 m-12">

                        {perkData?.map((item,i)=>(

                        <div className="value-card p-4 bg-[#d6f1ff] rounded-sm " key={i}>
                            <h2 className=" font-semibold mt-4 text-[#00d280] " style={{fontSize:'17px', lineHeight:'20px'}}>{item?.title}</h2>
                            <p className="text-[#023047]  mt-4 mb-4" style={{fontSize:"13px"}}>
                                {item?.decription}
                            </p>
                        </div>
                        ))}
                        
                    </div>


                    <button className="bg-[#00D280] text-white px-4 py-3 mb-24 text-md font-semibold rounded-sm transition-colors w-50">
                        See Job Opportunities
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page
