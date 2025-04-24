"use client"
import React from "react"
import { Info } from "lucide-react";
import ServicesCustomBanner from "../components/servicesCustomBanner";
import bannerImage from "@/app/services/mobile/image/mobileBanner.png"
import { FeatureList } from "../components/FeatureList";
import CustomSolutionCard from "../components/customSolutionCard";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page";
import Clientsline from "@/app/clientsline/page";
import CustomServiceDetail from "../components/customServiceDetail";
import CustomWhyChoose from "../components/customWhyChooseSection";
import { TechnologyGrid } from "../components/customTechnologiesSection";
import { FaqAccordion } from "../components/custonFAQ";

const MobileAppDevelopment=()=>{


    const faqs = [
        {
          question: "What is the significance of mobile app development?",
          answer: "Mobile app development is the process of creating user-friendly applications that interface with smart devices to enhance convenience, control, and automation in daily life.",
        },
        {
          question: "How does Kavelogics ensure the security of mobile apps?",
          answer: "Security is vital in today's digital world. We employ robust encryption, secure coding practices, and regular upgrades to safeguard mobile apps and data.",
        },
        {
          question: "Can Kavelogics develop mobile apps for many industries?",
          answer: "Indeed. Kavelogics's industry-spanning experience enables us to develop solutions tailored to specific business requirements, ranging from healthcare to manufacturing.",
        },
        {
          question: "What is the role of user experience in developing mobile apps?",
          answer: "The user's experience is very important. We place a strong focus on intuitive design and seamless interactions to make mobile apps user-friendly and encourage adoption.",
        },
      
      ];

    const technologies = [
        { name: "React Native", icon: "https://kavelogics.com/services/mobile/media/react-native-logo.svg" },
        { name: "Flutter", icon: "https://kavelogics.com/services/mobile/media/flutter-logo.svg"},
        { name: "Ionic", icon: "https://kavelogics.com/services/mobile/media/ionic-logo.svg"},
        { name: "NativeScript", icon: "https://kavelogics.com/services/mobile/media/nativescript-logo.svg" },
        { name: "Swift", icon: "https://kavelogics.com/services/mobile/media/swift-logo.svg" },
        { name: "Angular", icon: "https://kavelogics.com/services/mobile/media/angular-logo.svg"},
        { name: "App Sheet", icon: "https://kavelogics.com/services/mobile/media/app-sheet-logo.svg"},
        { name: "jQuery", icon: "https://kavelogics.com/services/mobile/media/jquery-logo.svg"},
        { name: "Android Studio", icon: "https://kavelogics.com/services/mobile/media/android-studio-logo.svg" },
      ];

       const features = [
    { title: 'API Integration', subtitle: 'Services' },
    { title: 'Cross Platform', subtitle: 'App Development' },
    { title: 'Android App', subtitle: 'Development' },
    { title: 'iOS', subtitle: 'Applications' },
  ];

  const CustomWhyChooseData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Expertise Across Platforms",
      description:
        "We develop mobile apps for iOS, Android, and cross-platform solutions, ensuring compatibility and reach across diverse devices and operating systems.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "Customized Solutions",
      description:
        "We create custom mobile apps tailored to your unique needs, from conception to completion, ensuring alignment with your vision and objectives.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "User-Centric Design",
      description:
        "Our mobile app development prioritizes intuitive interfaces, seamless navigation, and engaging interactions for exceptional user satisfaction.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Quality Assurance",
      description:
        "We prioritize quality, conducting thorough testing and code reviews to ensure every mobile app meets high standards of performance, reliability, and security.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Scalability & Flexibility",
      description:
        "Scalable and adaptable mobile app solutions for startups and enterprises, designed to evolve with changing business needs and technologies.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Timely Delivery & Support",
      description:
        "We deliver mobile apps on time, within budget, and without compromising quality. Our support team is available post-launch to address any concerns promptly.",
    },
    
  ];
  const SolutionData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Mobile App Development",
      description:
        "We provide tailored mobile app development solutions based on client requirements, including native, hybrid, or cross-platform development.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "iOS App Development",
      description:
        "We provide expertise in developing high-quality, user-friendly iOS applications compatible with all Apple devices, including iPhones, iPads, and Apple Watches.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Backend Development",
      description:
        "We build robust backend systems, APIs, and databases to support mobile app functionality, ensuring seamless data synchronization, storage, and retrieval.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "App Store Deployment",
      description:
        "We assist clients with app store submission, optimization, and compliance to ensure successful deployment and visibility on platforms.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "App Maintenance",
      description:
        "We provide ongoing maintenance and support services, including updates, bug fixes, performance optimization, security patches, and compatibility enhancements.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Quality Assurance",
      description:
        "We conduct rigorous testing across various devices, platforms, and network conditions to identify and resolve bugs, ensuring optimal performance, security, and reliability.",
    },
    
  ];
    return(
        <div>
            <ServicesCustomBanner
             heading={"Mobile App Development"}
             description={
               "Revolutionize your business with our mobile app magic by unleashing the power of innovation. Join us on a transformative journey to turn your vision into a captivating reality."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
            <FeatureList features={features}/>
            

            <CustomSolutionCard 
      heading="Our Creative Mobile Development Solutions" 
      subHeading="Empower your business with our mobile app development services at Kavelogics. Our expert team collaborates closely with clients to deliver cutting-edge mobile solutions tailored to their needs. Choose from native, hybrid, or cross-platform development to reach your target audience effectively and stay ahead in today's competitive landscape."
      Solution={SolutionData} 
    />

            <section className="py-16 text-center bg-white">
      <h2 className="text-5xl font-bold text-[#013a54] mb-4">Our Mobile Development Process</h2>
      <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54]">
      Our team of professionals will design, build, test, and release new applications created especially for you using the power of bespoke mobile app development. It will take a collaborative effort from front-end, back-end, and full-stack developers, business analysts, and quality assurance testers to pull this off.
      </p>

      <div className="relative flex justify-center gap-10 flex-wrap">
        <div className="flex justify-center gap-6 sm:gap-13 relative w-full">
         
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[72%] after:left-[89%] after:-translate-x-1/2 after:w-3 after:h-34 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Research & Discovery</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[72%] after:left-[89%] after:rounded-sm after:-translate-x-1/2 after:w-3 after:h-35 after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Development</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] "
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Launch & Support</span>
                </div>
              </div>
            </div>
         
        </div>

        <div className="flex justify-center gap-7 sm:gap-14 mt-15 sm:mt-10 relative w-full">
          
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[-140%] sm:after:top-[-96%] after:left-[80%] after:-translate-x-1/2 after:w-3 after:h-36 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#0575ad] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Design</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[-134%] sm:after:top-[-90%] after:left-[80%] after:-translate-x-1/2 after:w-3 after:h-34 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#0575ad]  flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Testing</span>
                </div>
              </div>
            </div>
        </div>
       
      </div>
            </section>

            <CustomServiceDetail
             heading={"Unlock Excellence With \nOur MAD Service"}
             description={
               "At Kavelogics, our expert team of developers, designers, and strategists is dedicated to delivering exceptional mobile solutions. With a focus on innovation and user-centric design, we ensure that every app we create exceeds expectations. Trust Kavelogics for your mobile app development needs and experience excellence from concept to launch."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/f1984063-0f5e-42b5-7ed6-bf909e145300/w=1920,q=75"
           
             />
            <Clientsline/>
            
  
            <CustomWhyChoose 
      heading={"Why should you choose MindSees for Mobile App Development"}
      CustomWhyChoose={CustomWhyChooseData} 
    />
    <TechnologyGrid technologies={technologies} />

    <FaqAccordion faqs={faqs} />
            <Stories/>
            <LastBusinessesSection/>


        </div>
    )
}
export default MobileAppDevelopment ;