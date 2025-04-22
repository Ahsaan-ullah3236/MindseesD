"use client"
import Image from 'next/image';
import image from './image.png';
import Footer from "@/app/Footer/page";
import React, { useRef, useEffect, useState } from "react";

function Page() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollableRef = useRef<HTMLDivElement>(null);
    const [componentHeight, setComponentHeight] = useState(0);

    useEffect(() => {
        const scrollable = scrollableRef.current;

        const updateHeight = () => {
            if (scrollable) {
                const scrollHeight = scrollable.scrollHeight;
                const clientHeight = scrollable.clientHeight;
                setComponentHeight(scrollHeight - clientHeight + window.innerHeight);
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

    return (
        <>
            {/* first  page div */}
            <div className="bg-[#002f46] py-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
                    {/* Left Text */}
                    <div className="text-white md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Lets Drive tech forward</h1>
                        <p className="text-lg md:text-xl leading-relaxed">
                            Explore exciting career opportunities at MindSees, where innovation meets passion. Join us to collaborate with experts, tackle challenging projects, and make a meaningful impact in technology.
                        </p>
                        <div className="mt-10 flex justify-center md:justify-start">
                            <button className="bg-[#00D280] text-white px-6 py-4 text-lg rounded-lg hover:bg-[#00b96a] transition-colors">
                                See job Opportunities
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src={image}
                            alt="About Section"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* second page div  */}
            <div className="py-16 mt-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Text */}
                    <div className="md:w-2/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Seeking Visionary Individuals</h1>
                        <p className="text-lg md:text-xl leading-relaxed mt-12">
                            At MindSees, we are dedicated to transform users lives through our innovative solutions. We seek individuals who share and contribute to our vision. Our company fosters an environment of open communication, collaboration, and equal opportunities. We are passionate about growth and always eager to discover dynamic talent.
                        </p>
                        <p className='text-lg md:text-xl leading-relaxed pt-6'>Join us to elevate not only our companys standards but also your own personal and professional benchmarks.</p>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src="https://kavelogics.com/careers/image-1-desktop.svg"
                            alt="About Section"
                            width={700}
                            height={500}
                            className="rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </div>


            {/* third page  */}
            <div
                ref={sectionRef}
                style={{ height: `${componentHeight}px` }}
                className="relative bg-[#26769f] mt-22 "
            >
                <div className="sticky top-0">
                    <div className="Topchoice-main-container p-18">
                        {/* ORIGINAL FLEX LAYOUT STARTS BELOW */}
                        <div className="Topchoice-second-container  flex flex-col lg:flex-row gap-2 mt-[-12] sm:p-12">
                            {/* RIGHT SIDE */}
                            <div className="Topchoice-right-container w-full lg:w-1/2 p-6 rounded-xl shadow-lg flex flex-col">
                                <div className='mt-12'>
                                    <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                                        Our Recruitment Process
                                    </h1>
                                    <p className="text-white text-xl sm:text-1xl font-semibold mt-4 sm:mt-12">
                                        At MindSees, our recruitment process is transparent and inclusive. We assess qualifications and cultural fit through initial screenings and interviews with key team members. We value open communication and provide timely feedback to ensure a positive experience. Join us in our commitment to innovation and excellence.
                                    </p>
                                </div>
                                <button className="text-[#00D280] text-xl text-left sm:text-xl font-semibold mt-4 sm:mt-12 hover:text-[#00b96a] transition-colors">
                                    See job opportunities
                                </button>
                            </div>

                            {/* LEFT SIDE */}
                            <div className="Topchoice-left-container lg:w-1/2 relative rounded-xl ">
                                <div
                                    ref={scrollableRef}
                                    className="overflow-y-auto max-h-[500px] sm:max-h-[600px] pl-6 pr-4 scrollbar-thin scrollbar-thumb-gray-400 custom-scrollbar"
                                >
                                    <div className="grid gap-6">
                                        {[
                                            {
                                                title: "01 Expertise & Innovation",
                                                description:
                                                    "Candidates submit their applications through our online portal. Our HR team carefully reviews each application to assess qualifications and alignment with our company values",
                                            },
                                            {
                                                title: "02 Quality Assurance:",
                                                description:
                                                    "Qualified candidates undergo an initial screening, which may include a phone interview or online assessment. This step helps us further evaluate candidates' skills and experiences.",
                                            },
                                            {
                                                title: "03 Client-Centric Solutions:",
                                                description:
                                                    "We prioritize your success through close collaboration, delivering tailored solutions that exceed expectations with innovation and efficiency to drive your business forward.",
                                            },
                                            {
                                                title: "04 Global Reach & Flexibility:",
                                                description:
                                                    "With global industry expertise, MindSees offers flexible engagement models—choose from dedicated teams or project-based solutions tailored to your project scope and budget needs.",
                                            },
                                        ].map((card, index) => (
                                            <div
                                                key={index}
                                                className="border border-gray-200 rounded-xl p-6 sm:p-12 shadow-md bg-white"
                                            >
                                                <div className="flex items-center gap-4">

                                                    <h1 className="text-2xl sm:text-3xl font-semibold text-[#00D280]">
                                                        {card.title}
                                                    </h1>
                                                </div>
                                                <p className="mt-6 sm:mt-8 text-sm sm:text-base font-bold text-gray-600">
                                                    {card.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* fourth  */}
            <div className="main-container flex justify-center items-center text-center">
                <div className="inner-container w-full max-w-7xl  rounded-lg shadow-md p-8 bg-white border-2 border-blue-800">
                    <h1 className="text-5xl font-semibold m-12">Employee Benefits & Perks
                    </h1>
                    <p className='text-lg mb-12'>Elevate your experience at MindSees with our comprehensive suite of employee benefits and perks. From competitive salaries to flexible work arrangements, we prioritize your well-being and professional growth, creating an environment where you can thrive</p>
                    <div className="three-divs grid grid-cols-1 md:grid-cols-3 gap-6 border-2 border-amber-400 m-12">

                        <div className="value-card p-6 bg-[#daecfa] rounded-lg shadow-sm">
                            <h2 className="text-xl font-bold mt-4 text-green-500">Competitive Salary Packages</h2>
                            <p className="text-gray-700 mt-2">
                                We provide competitive salaries as acknowledgment of the value and expertise our employees contribute.
                            </p>
                        </div>
                        <div className="value-card p-6 bg-[#daecfa] rounded-lg shadow-sm">
                            <h2 className="text-xl font-bold mt-4 text-green-500">Flexible Work Arrangements</h2>
                            <p className="text-gray-700 mt-2">
                                Our EAP ensures confidential support for personal and professional challenges, prioritizing your well-being.
                            </p>
                        </div>
                        <div className="value-card p-6 bg-[#daecfa] rounded-lg shadow-sm">
                            <h2 className="text-xl font-bold mt-4 text-green-500">Employee Assistance Program (EAP)</h2>
                            <p className="text-gray-700 mt-2">
                                At MindSees, we prioritize trust and transparency in all interactions—with clients, partners, and within our team.
                            </p>
                        </div>

                        <div className="value-card p-6 bg-[#daecfa] rounded-lg shadow-sm">
                            <h2 className="text-xl font-bold mt-4 text-green-500">Competitive Salary Packages</h2>
                            <p className="text-gray-700 mt-2">
                                We provide competitive salaries as acknowledgment of the value and expertise our employees contribute.
                            </p>
                        </div>
                        <div className="value-card p-6 bg-[#daecfa] rounded-lg shadow-sm">
                            <h2 className="text-xl font-bold mt-4 text-green-500">Flexible Work Arrangements</h2>
                            <p className="text-gray-700 mt-2">
                                Our EAP ensures confidential support for personal and professional challenges, prioritizing your well-being.
                            </p>
                        </div>
                        <div className="value-card p-6 bg-[#daecfa] rounded-lg shadow-sm">
                            <h2 className="text-xl font-bold mt-4 text-green-500">Employee Assistance Program (EAP)</h2>
                            <p className="text-gray-700 mt-2">
                                At MindSees, we prioritize trust and transparency in all interactions—with clients, partners, and within our team.
                            </p>
                        </div>
                    </div>


                    <button className="bg-[#00D280] text-white px-6 py-4 text-lg sm:text-xl rounded-lg hover:bg-[#00b96a] transition-colors w-full sm:w-auto">
                        Book Consultant
                    </button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Page
