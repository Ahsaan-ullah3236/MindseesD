// src/app/about/Aboutherosection/page.tsx

import React from 'react';
import Image from 'next/image';
import image from './images/image.png';
import Lastbusinesses from "@/app/Lastbusinesses/page";
import Footer from "@/app/Footer/page"; 

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
        <>
            {/* About Hero Section */}
            <div className="bg-[#002f46] py-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
                    {/* Left Text */}
                    <div className="text-white md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
                        <p className="text-lg md:text-xl leading-relaxed">
                            We transform your business ideas into tangible software solutions. We are top tech experts who help transform business concepts into real-world software solutions.
                        </p>
                        <div className="mt-10 flex justify-center md:justify-start">
                            <button className="bg-[#00D280] text-white px-6 py-4 text-lg rounded-lg hover:bg-[#00b96a] transition-colors">
                                Book Consultant
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



            {/* second  */}
            {/* Awards & Who We Are Section */}
            <div className="py-30 ">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
                    {/* Right Logos */}
                    <div className="md:w-1/2 w-full bg-[#daecfa] rounded-2xl px-6 py-12 min-h-[350px] flex items-center">
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
                        <h2 className="text-3xl md:text-5xl font-bold text-[#002f46] mb-6">Who We Are?</h2>
                        <h3 className="text-xl font-semibold text-[#00D280] mb-4">
                            Driving business growth with tailored software solutions and technical expertise.
                        </h3>
                        <p className="text-gray-900 text-lg leading-relaxed">
                            At MindSees, we re your dedicated partners in digital success. With expertise in mobile app and website development, UI/UX and graphic design, SaaS-based solutions, and SEO services, we offer comprehensive digital solutions. Our creative team blends technical proficiency to exceed expectations, harnessing technology to elevate your brand and drive growth.
                        </p>
                    </div>
                </div>
            </div>



            {/* third */}
            <div className="bg-[#002f46] max-w-5xl mx-auto flex w-full rounded-2xl shadow-xl">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 ">
                    {/* Left Text Content */}
                    <div className="md:w-2/2 text-white text-center md:text-left px-16 ">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
                        <p className="text-lg md:text-xl leading-relaxed">
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
                            className="rounded-2xl shadow-xl object-cover "
                        />
                    </div>
                </div>
            </div>

            {/* fourth page div / */}
            <div className="main-container flex justify-center items-center text-center py-12 px-4">
                <div className="inner-container w-full max-w-6xl rounded-lg shadow-md p-8 bg-white">
                    <h1 className="text-5xl font-semibold m-12">Our Values</h1>
                    <div className="three-divs grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="value-card p-6 bg-[#daecfa] rounded-lg shadow-sm">
                            <Image
                                src="https://kavelogics.com/about/innovation.svg"
                                width={40}
                                height={35}
                                alt="Innovation Icon"
                                className="mx-auto"
                            />
                            <h2 className="text-xl font-semibold mt-4">Innovation</h2>
                            <p className="text-gray-700 mt-2">
                                We pioneer new ideas and technologies to deliver solutions that drive your business forward.
                            </p>
                        </div>

                        <div className="value-card p-6 bg-[#daecfa] rounded-lg shadow-sm">
                            <Image
                                src="https://kavelogics.com/about/centricity.svg"
                                width={40}
                                height={40}
                                alt="Customer-Centricity Icon"
                                className="mx-auto"
                            />
                            <h2 className="text-xl font-semibold mt-4">Customer-Centricity</h2>
                            <p className="text-gray-700 mt-2">
                                Your needs and goals are our top priority, and we tailor our solutions to meet them perfectly.
                            </p>
                        </div>

                        <div className="value-card p-6 bg-[#daecfa] rounded-lg shadow-sm">
                            <Image
                                src="https://kavelogics.com/about/integrity.svg"
                                width={40}
                                height={40}
                                alt="Integrity Icon"
                                className="mx-auto"
                            />
                            <h2 className="text-xl font-semibold mt-4">Integrity</h2>
                            <p className="text-gray-700 mt-2">
                                At Kavelogics, we prioritize trust and transparency in all interactions—with clients, partners, and within our team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* fifth page div / */}
            <div className="bg-[#002f46] py-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
                    {/* Left Text */}
                    <div className="text-white md:w-1/2 text-center md:text-left">
                        <h1 className="text-1xl md:text-3xl font-bold mb-4 capitalize" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            We Are Growing Continuously
                        </h1>

                        <h2 className="text-xl md:text-2xl font-bold mb-2 text-green-400">Growth is not just a goal — its our reality</h2>
                        <p className=" md:text-xl text-gray-200">
                            Every day, we are expanding our expertise and refining our processes to deliver exceptional digital solutions.
                            With a dedicated team embracing innovation, we are continually evolving to exceed expectations and shape the future of technology.
                            Join us on this exciting journey as we empower businesses worldwide with cutting-edge solutions and unwavering commitment to excellence.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 flex justify-center">
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



            {/* sixth page div */}

            <div className="presence-main-container bg-white mt-12">
                <div className="inner-container -lg p-6 md:p-10">

                    {/* Heading */}
                    <div className="first-inner-content-container text-center mb-16">
                        <h1
                            className="text-3xl md:text-5xl font-bold mb-8 capitalize text-center"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Our Global Presence
                        </h1>
                        <p className="text-1xl">
                            We serve clients worldwide, offering tailored software solutions to meet diverse requirements.
                        </p>
                    </div>

                    {/* Two-column Responsive Layout */}
                    <div className="flex flex-wrap">

                        {/* Right Side: Contact Info */}
                        <div className="w-full lg:w-1/2 p-6 rounded-xl">
                            <h2
                                className="text-xl font-semibold capitalize"
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                We Are Just An Email Away!
                            </h2>
                            <p className="text-blue-600 font-medium mb-6 cursor-pointer">info@mindsees.com</p>

                            <div className="logo mt-12">
                                <p className="text-gray-800 font-bold">Stay Connected!</p>
                                <div className="flex flex-wrap items-center space-x-4 mt-2">
                                    {[
                                        { href: "#", src: "https://kavelogics.com/v1.svg", alt: "Facebook" },
                                        { href: "#", src: "https://kavelogics.com/v3.svg", alt: "Instagram" },
                                        { href: "#", src: "https://kavelogics.com/linkedin.svg", alt: "LinkedIn" },
                                        { href: "#", src: "https://kavelogics.com/v2-new.svg", alt: "Twitter" },
                                        { href: "#", src: "https://kavelogics.com/yt.svg", alt: "YouTube" },
                                    ].map((icon, idx) => (
                                        <a
                                            key={idx}
                                            href={icon.href}
                                            className="hover:scale-110 transition-transform duration-200"
                                            aria-label={icon.alt}
                                        >
                                            <Image
                                                src={icon.src}
                                                alt={icon.alt}
                                                width={24}
                                                height={20}
                                                className="filter brightness-0"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Left Side: Offices */}
                        <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-between gap-6">
                            {/* Lahore Office */}
                            <div className="flex-1">
                                <Image
                                    src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/0684c436-a011-4772-9c75-e7f50e31f100/w=1200,q=75"
                                    height={200}
                                    width={200}
                                    alt="Lahore Office"
                                    className="rounded-xl  mb-4"
                                />
                                <h2
                                    className="text-xl font-bold capitalize mb-1"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    Lahore Office
                                </h2>
                                <p className="text-black font-bold mb-1">MindSees Technologies PVT LTD</p>
                                <p className="flex items-start text-sm text-gray-900">
                                    <Image
                                        src="https://kavelogics.com/icons/location.svg"
                                        alt="Location Icon"
                                        width={20}
                                        height={20}
                                        className="mr-2 mt-1 filter brightness-0"
                                    />
                                    1st Floor, 45-F Commercial Area, Punjab Cooperative Housing Society, Lahore, Pakistan
                                </p>
                            </div>

                            {/* USA Office */}
                            <div className="flex-1">
                                <Image
                                    src="https://kavelogics.com/about/offices/usa.svg"
                                    height={200}
                                    width={200}
                                    alt="USA Office"
                                    className="rounded-xl mb-4"
                                />
                                <h2
                                    className="text-xl font-bold capitalize mb-1"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    USA Office
                                </h2>
                                <p className="text-black font-bold mb-1">Kavelogics Technologies PVT LTD</p>
                                <p className="flex items-start text-sm text-gray-900">
                                    <Image
                                        src="https://kavelogics.com/icons/location.svg"
                                        alt="Location Icon"
                                        width={20}
                                        height={20}
                                        className="mr-2 mt-1 filter brightness-0"
                                    />
                                    45 F, Commercial Area, PCHS, Lahore, Punjab, Pakistan 55050
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Lastbusinesses/>
            <Footer/>
        </>
    );
};

export default AboutPage;
