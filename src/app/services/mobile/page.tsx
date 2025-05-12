"use client"
import React from "react"
import { Info } from "lucide-react";
import ServicesCustomBanner from "../components/servicesCustomBanner";
import bannerImage from "@/app/services/mobile/image/mobileBanner.png"
import bannerGig from "@/app/services/mobile/image/Untitled.gif"
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
          question: "Why is mobile app development important?",
          answer: "Mobile app development is crucial as it enables businesses to engage with their customers on the go, enhancing accessibility and user experience. It also helps increase brand visibility, improve customer retention, and drive business growth.",
        },
        {
          question: "How does MindSees guarantee the security of mobile apps?",
          answer: "MindSees ensures the security of mobile apps by implementing industry-leading encryption techniques, secure coding practices, and regular security audits. We prioritize data protection and ensure compliance with the latest security standards to safeguard user information.",
        },
        {
          question: "Can MindSees develop mobile apps for various industries?",
          answer: "Yes, MindSees specializes in developing mobile apps for a wide range of industries, including healthcare, e-commerce, education, and finance. Our team tailors solutions to meet the specific needs and challenges of each industry.",
        },
        {
          question: "What role does user experience play in mobile app development?",
          answer: "User experience is crucial in mobile app development as it ensures the app is intuitive, engaging, and easy to navigate. A positive user experience increases customer satisfaction, retention, and overall app success.",
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
        "We create mobile apps for iOS, Android, and cross-platform solutions, ensuring seamless compatibility and broad reach across various devices and operating systems.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "Customized Solutions",
      description:
        "We design custom mobile apps tailored to your specific needs, guiding the process from concept to completion to ensure alignment with your vision and goals.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "User-Centric Design",
      description:
        "Our mobile app development focuses on intuitive interfaces, smooth navigation, and engaging interactions to deliver exceptional user satisfaction.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Quality Assurance",
      description:
        "We prioritize quality by performing extensive testing and code reviews to ensure each mobile app meets the highest standards of performance, reliability, and security.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Scalability & Flexibility",
      description:
        "Scalable and adaptable mobile app solutions for startups and enterprises, built to evolve with your business needs and emerging technologies.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Timely Delivery & Support",
      description:
        "We deliver mobile apps on time, within budget, and with uncompromised quality. Our support team is available post-launch to promptly address any concerns.",
    },
    
  ];
  const SolutionData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Mobile App Development",
      description:
        "We offer customized mobile app development solutions tailored to client needs, including native, hybrid, and cross-platform options.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "iOS App Development",
      description:
        "We specialize in developing high-quality, user-friendly iOS applications that are compatible with all Apple devices, including iPhones, iPads, and Apple Watches.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Backend Development",
      description:
        "We create robust backend systems, APIs, and databases to support mobile app functionality, ensuring smooth data synchronization, storage, and retrieval.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "App Store Deployment",
      description:
        "We guide clients through app store submission, optimization, and compliance, ensuring successful deployment and increased visibility on platforms.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "App Maintenance",
      description:
        "We offer continuous maintenance and support services, including updates, bug fixes, performance optimization, security patches, and compatibility improvements.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Quality Assurance",
      description:
        "We perform extensive testing across multiple devices, platforms, and network conditions to identify and fix bugs, ensuring peak performance, security, and reliability.",
    },
    
  ];
    return(
        <div>
            <ServicesCustomBanner
             heading={"Mobile App Development"}
             description={
               "Transform your business with our mobile app expertise, harnessing the power of innovation. Join us on a journey to bring your vision to life and create a captivating reality."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerGig}
            />
            <FeatureList features={features}/>
            

            <CustomSolutionCard 
      heading="Our Innovative Mobile Development Solutions" 
      subHeading="Elevate your business with Kavelogics' mobile app development services. Our expert team works closely with clients to deliver innovative, customized mobile solutions. Whether you choose native, hybrid, or cross-platform development, we help you connect with your target audience and stay ahead in today's competitive market."
      Solution={SolutionData} 
    />

            <section className="py-16 text-center bg-white">
      <h2 className="text-5xl font-bold text-[#013a54] mb-4">Our Mobile Development Process</h2>
      <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54]">
      Our team of experts will design, develop, test, and launch custom mobile applications tailored to your needs. This collaborative effort involves front-end, back-end, and full-stack developers, business analysts, and quality assurance testers to ensure a seamless and successful result.
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
             heading={"Unlock Excellence With Our MAD Service"}
             description={
               "At MindSees, our team of developers, designers, and strategists is committed to delivering outstanding mobile solutions. By focusing on innovation and user-centric design, we ensure every app exceeds expectations. Trust us for your mobile app development needs and experience excellence from concept to launch."
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