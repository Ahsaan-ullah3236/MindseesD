// src/app/about/page.tsx

import React from 'react';
import Image from 'next/image';
import Lastbusinesses from "@/app/Lastbusinesses/page";
import GlobalPressance from '@/app/globalPresance/page';
import Link from 'next/link';
import AboutUsGif from "@/app/about/image/aboutus.gif"
import brandIcon1 from "@/app/about/image/ brand img 6 (1).svg"
import brandIcon2 from "@/app/about/image/ brand img 6 (2).svg"
import brandIcon3 from "@/app/about/image/ brand img 6 (3).svg"
import brandIcon4 from "@/app/about/image/ brand img 6 (4).svg"
import brandIcon5 from "@/app/about/image/ brand img 6 (5).svg"
import brandIcon6 from "@/app/about/image/ brand img 6 (6).svg"
import MissionImage from "@/app/about/image/MissionImage.png"
import GrowthGraph from "@/app/about/image/Growth Graph.png"
import clientIcon from "@/app/about/image/clientsvgfill.svg"
import integrityIcon from "@/app/about/image/integritysvgfill.svg"
import innovationIcon from "@/app/about/image/innovationsvgfill.svg"

const AboutPage = () => {
    const awardImages = [
        { image: brandIcon1 },
        { image: brandIcon2 },
        { image: brandIcon3 },
        { image: brandIcon4 },
        { image: brandIcon5 },
        { image: brandIcon6 },
    ];


    return (
        <div >
            <div className="bg-[#002f46] py-10 sm:py-20">
                <div className=' mx-auto'>
                    <div className="spacing-secton  flex flex-col md:flex-row items-center justify-between gap-12 px-4">
                        <div className='grid grid-cols-1 md:grid-cols-2   '>
                            <div className=''>
                                <div className="text-white  md:text-left">
                                    <h1 className="text-3xl sm:text-5xl font-semibold sm:text-bold  mb-9">About Us</h1>
                                    <p className="text-[18px]" style={{ lineHeight: "24px" }}>
                                        We transform your business ideas into tangible software solutions. We are top tech experts who help transform business concepts into real-world software solutions.
                                    </p>
                                    <div className="mt-18 flex  md:justify-start">
                                        <Link href={"/contact-us"}>
                                            <button className="bg-[#00D280] cursor-pointer text-white px-4 py-4 text-lg font-semibold rounded-sm hover:bg-[#00b96a] transition-colors">
                                                Book Consultant

                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center sm:justify-end h-[300px] w-full">
                                <Image
                                    src={AboutUsGif}
                                    alt="About Section"
                                    width={400}
                                    height={300}
                                    className="object-cover md:-mt-8"
                                />
                            </div>

                        </div>


                    </div>
                </div>
            </div>


            <div className="py-16 sm:py-30 mx-auto ">
                <div className="spacing-secton flex flex-col md:flex-row items-center justify-between gap-20 px-4">
                    <div className="lg:w-1/2 w-full bg-[#d6f1ff] rounded-lg px-6 py-1 min-h-[290px] flex items-center">
                        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
                            {awardImages.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="w-1/3 sm:w-1/4 md:w-1/4 transition-transform duration-300 hover:scale-105"
                                >
                                    <Image
                                        src={item?.image}
                                        alt={`Award ${idx + 1}`}
                                        width={100}
                                        height={100}
                                        className="h-30 object-fit w-30 px-4"

                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Content */}
                    <div className="text-center md:text-left md:w-1/2">
                        <h2 className="text-3xl sm:text-5xl font-semibold sm:text-bold  text-[#002f46] mb-5 -mt-8 sm:mt-0">Who We Are?</h2>
                        <h3 className="text-xl font-bold text-[#00D280] mb-8" style={{ lineHeight: '-2px' }}>
                            Transforming businesses through tailored software and expert-driven innovation.
                        </h3>
                        <p className="text-gray-900 text-[17px] font-medium leading-relaxed">
                            At MindSees, we are your trusted partners in digital growth. Specializing in mobile app and website development, UI/UX and graphic design, SaaS solutions, and SEO services, we deliver end-to-end digital strategies. Our creative and tech-savvy team combines innovation with technical expertise to elevate your brand and exceed expectations.
                        </p>
                    </div>
                </div>
            </div>


            <div className="bg-[#023047] max-w-4xl 2xl:max-w-7xl mx-auto flex w-full rounded-2xl shadow-xl  -mt-8 sm:-mt-12">
                <div className=" flex flex-col md:flex-row items-center gap-12 ">
                    {/* Left Text Content */}
                    <div className="md:w-2/2 text-white text-center md:text-left px-16 ">
                        <h2 className="text-3xl sm:text-5xl font-semibold sm:text-bold  mb-5 mt-8">Our Mission</h2>
                        <p className="text-[16px] md:text-[19px] pb-6" style={{ lineHeight: "25px" }}>
                            We help companies and organizations accelerate growth through innovative technology by connecting them with passionate, experienced engineers and solution experts.
                        </p>
                    </div>
                    {/* Right Image Content */}
                    <div className="md:w-1/2 flex justify-start md:justify-end">
                        <Image
                            src={MissionImage}
                            alt="Our Mission"
                            width={300}
                            height={220}
                            className="  shadow-xl object-cover "
                        />
                    </div>
                </div>
            </div>


            <div className="main-container spacing-secton mx-auto flex justify-center items-center text-center py-2 sm:py-12 px-4">
                <div className="inner-container">
                    <h1 className="text-3xl sm:text-5xl font-semibold sm:text-bold  text-[#023047] mt-8 sm:mt-14 mb-16">Our Values</h1>
                    <div className="three-divs grid grid-cols-1 md:grid-cols-3 gap-12 -mt-6 sm:mt-0">
                        <div className="value-card p-6 bg-[#d6f1ff] pb-15 pt-10 rounded-sm shadow-sm">
                            <Image
                                src={innovationIcon}
                                width={40}
                                height={30}
                                alt="Innovation Icon"
                                className="mx-auto"
                            />
                            <h2 className="text-xl text-[#023047] font-bold mt-6">Innovation</h2>
                            <p className="text-[14px] font-medium text-[#023047] mt-6" style={{ lineHeight: "21px" }}>
                                We innovate with new ideas and technologies to create solutions that accelerate your business growth.
                            </p>
                        </div>

                        <div className="value-card p-6 bg-[#d6f1ff] pb-15 pt-10 rounded-sm shadow-sm">
                            <Image
                                src={clientIcon}
                                width={40}
                                height={30}
                                alt="Customer-Centricity Icon"
                                className="mx-auto"
                            />
                            <h2 className="text-xl text-[#023047] font-bold mt-6">Customer-Centricity</h2>
                            <p className="text-[14px] font-medium text-[#023047] mt-6" style={{ lineHeight: "21px" }}>
                                We prioritize your needs and objectives, delivering solutions designed to meet them exactly.
                            </p>
                        </div>

                        <div className="value-card p-6 bg-[#d6f1ff] pb-15 pt-10 rounded-sm shadow-sm">
                            <Image
                                src={integrityIcon}
                                width={40}
                                height={30}
                                alt="Integrity Icon"
                                className="mx-auto"
                            />
                            <h2 className="text-xl text-[#023047] font-bold mt-6">Integrity</h2>
                            <p className="text-[14px] font-medium text-[#023047] mt-6" style={{ lineHeight: "21px" }}>
                                At MindSees, we believe in building trust and maintaining transparency in all our interactions—internally and externally.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* fifth page div / */}
            <div className=''>
                <div className="bg-[#002f46]  py-28 mt-16 spacing-secton">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm  ">
                        <div className='col-span-2 flex items-center justify-center'>
                            <div>
                                <h1 className="text-2xl sm:text-5xl font-semibold sm:text-bold  text-white  mb-6 capitalize -mt-14 sm:-mt-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Growing Stronger Every Day
                                </h1>

                                <h2 className="text-lg font-semibold mb-2 text-[#00d280] italic">We Don’t Just Aim for Growth — We Achieve It</h2>
                                <p className=" text-[16px] text-gray-200">
                                    Each day, we enhance our expertise and streamline our processes to provide exceptional digital solutions. With a dedicated team at the forefront of innovation, we are constantly evolving to surpass expectations and shape the future of technology. Join us on this exciting journey as we empower businesses globally with cutting-edge solutions and an unwavering commitment to excellence.
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex justify-center ml-6">
                            <Image
                                src={GrowthGraph}
                                alt="Growth Illustration"
                                width={500}
                                height={300}
                                className="rounded-2xl shadow-xl"
                            />
                        </div>

                    </div>
                </div>
            </div>


            {/* sixth page div */}


            <GlobalPressance />
            <Lastbusinesses />

        </div>
    );
};

export default AboutPage;
