// src/app/about/page.tsx

import React from 'react';
import Image from 'next/image';
import image from "./image.png"
import Lastbusinesses from "@/app/Lastbusinesses/page";
import GlobalPressance from '@/app/globalPresance/page';
import Link from 'next/link';

const AboutPage = () => {
    const awardImages = [
        'brands1.f2880f28.png',
        'brand2.70e70a6c.png',
        'brand6.0207e26d.png',
        'brand4.491c26a3.png',
        'brand7.18f88ef7.png',
        'brand5.0149455e.png',
    ];
  

    return (
        <div >
            <div className="bg-[#002f46] py-16">
                <div className='max-w-7xl mx-auto'>
                <div className="spacing-secton  flex flex-col md:flex-row items-center justify-between gap-12 px-4">
                    {/* Left Text */}
                    <div className='grid grid-cols-1 md:grid-cols-3   '>
                        <div className='col-span-2'>
                        <div className="text-white text-center md:text-left">
                        <h1 className="text-4xl  font-bold mb-6">About Us</h1>
                        <p className="text-md leading-relaxed">
                            We transform your business ideas into tangible software solutions. We are top tech <br/>experts who help transform business concepts into real-world software solutions.
                        </p>
                        <div className="mt-16 flex justify-center md:justify-start">
                            <Link href={"/contact-us"}>
                            <button className="bg-[#00D280] cursor-pointer text-white px-4 py-3 text-md font-semibold rounded-sm hover:bg-[#00b96a] transition-colors">
                                Book Consultant

                            </button>
                            </Link>

                        </div>
                    </div>
                        </div>
                        <div className="flex justify-center">
                        <Image
                            src={image}
                            alt="About Section"
                            width={600}
                            height={400}
                            className="rounded-2xl object-fit shadow-lg -mt-8"
                        />
                    </div>

                    </div>
                    

                </div>
                </div>
            </div>



            
            <div className="py-30 max-w-7xl mx-auto ">
                <div className="spacing-secton flex flex-col md:flex-row items-center justify-between gap-12 px-4">
                    {/* Right Logos */}
                    <div className="lg:w-1/2 w-full bg-[#d6f1ff] rounded-lg px-6 py-12 min-h-[290px] flex items-center">
                        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
                            {awardImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="w-1/3 sm:w-1/4 md:w-1/6 transition-transform duration-300 hover:scale-105"
                                >
                                    <Image
                                        src={`https://kavelogics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F${img}&w=640&q=75`}
                                        alt={`Award ${idx + 1}`}
                                        width={100}
                                        height={100}
                                        className="w-full h-auto px-4"
                                        unoptimized
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl  font-bold text-[#002f46] mb-4">Who We Are?</h2>
                        <h3 className="text-lg font-semibold text-[#00D280] mb-4" style={{lineHeight:'-2px'}}>
                        Driving Business Growth With Tailored Software Solutions And Technical Expertise.
                        </h3>
                        <p className="text-gray-900 text-sm leading-relaxed">
                            At MindSees, we re your dedicated partners in digital success. With expertise in mobile app and website development, UI/UX and graphic design, SaaS-based solutions, and SEO services, we offer comprehensive digital solutions. Our creative team blends technical proficiency to exceed expectations, harnessing technology to elevate your brand and drive growth.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#023047] max-w-3xl mx-auto flex w-full rounded-2xl shadow-xl">
                <div className=" flex flex-col md:flex-row items-center gap-12 ">
                    {/* Left Text Content */}
                    <div className="md:w-2/2 text-white text-center md:text-left px-16 ">
                        <h2 className="text-4xl font-bold mb-4 mt-4">Our Mission</h2>
                        <p className="text-md pb-6">
                            We enable companies and organizations to drive growth with innovative technology solutions by connecting them with passionate and experienced engineers and solution providers.
                        </p>
                    </div>
                    {/* Right Image Content */}
                    <div className="md:w-1/2 flex justify-start md:justify-end">
                        <Image
                            src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/e3ea80d7-eb1f-47b7-67de-5bd1c75bb100/w=1200,q=75"
                            alt="Our Mission"
                            width={300}
                            height={220}
                            className="  shadow-xl object-cover "
                        />
                    </div>
                </div>
            </div>

            <div className="main-container max-w-4xl mx-auto flex justify-center items-center text-center py-12 px-4">
                <div className="inner-container">
                    <h1 className="text-4xl text-[#023047] font-semibold m-12">Our Values</h1>
                    <div className="three-divs grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="value-card p-6 bg-[#d6f1ff] pb-14 pt-5 rounded-sm shadow-sm">
                            <Image
                                src="https://kavelogics.com/about/innovation.svg"
                                width={30}
                                height={25}
                                alt="Innovation Icon"
                                className="mx-auto"
                            />
                            <h2 className="text-xl text-[#023047] font-semibold mt-4">Innovation</h2>
                            <p className="text-sm text-[#023047] mt-4">
                                We pioneer new ideas and technologies to deliver solutions that drive your business forward.
                            </p>
                        </div>

                        <div className="value-card p-6 bg-[#d6f1ff] pb-14 pt-5 rounded-sm shadow-sm">
                            <Image
                                src="https://kavelogics.com/about/centricity.svg"
                                width={40}
                                height={30}
                                alt="Customer-Centricity Icon"
                                className="mx-auto"
                            />
                            <h2 className="text-xl text-[#023047] font-semibold mt-4">Customer-Centricity</h2>
                            <p className="text-sm text-[#023047] mt-4">
                                Your needs and goals are our top priority, and we tailor our solutions to meet them perfectly.
                            </p>
                        </div>

                        <div className="value-card p-6 bg-[#d6f1ff] pb-14 pt-5 rounded-sm shadow-sm">
                            <Image
                                src="https://kavelogics.com/about/integrity.svg"
                                width={40}
                                height={30}
                                alt="Integrity Icon"
                                className="mx-auto"
                            />
                            <h2 className="text-xl text-[#023047] font-semibold mt-4">Integrity</h2>
                            <p className="text-sm text-[#023047] mt-4">
                                At Kavelogics, we prioritize trust and transparency in all interactions—with clients, partners, and within our team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* fifth page div / */}
            <div className=''>

            <div className="bg-[#002f46]  py-28 mt-16 spacing-secton">
                
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm ">
                    <div className='col-span-2 flex items-center justify-center'>
                        <div>
                            
                    <h1 className="text-3xl text-white font-bold mb-4 capitalize" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            We Are Growing Continuously
                        </h1>

                        <h2 className="text-lg font-semibold mb-1 text-[#00d280] italic">Growth Is Not Just A Goal — Its Our Reality</h2>
                        <p className=" text-sm text-gray-200">
                            Every day, we are expanding our expertise and refining our processes to deliver exceptional digital solutions.
                            With a dedicated team embracing innovation, we are continually evolving to exceed expectations and shape the future of technology.
                            Join us on this exciting journey as we empower businesses worldwide with cutting-edge solutions and unwavering commitment to excellence.
                        </p>
                        </div>
                    </div>

                        <div className="flex justify-center">
                        <Image
                            src="https://kavelogics.com/about/growth.svg"
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

            <GlobalPressance/>
            <Lastbusinesses/>
            
        </div>
    );
};

export default AboutPage;
