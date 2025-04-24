"use client"
import React from "react"
import { Info } from "lucide-react";
import ServicesCustomBanner from "../components/servicesCustomBanner";
import bannerImage from "@/app/services/saas/image/saasBanner.png"
import { FeatureList } from "../components/FeatureList";
import CustomSolutionCard from "../components/customSolutionCard";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page";
import Clientsline from "@/app/clientsline/page";
import CustomServiceDetail from "../components/customServiceDetail";
import CustomWhyChoose from "../components/customWhyChooseSection";
import { TechnologyGrid } from "../components/customTechnologiesSection";
import { FaqAccordion } from "../components/custonFAQ";

const SaaS=()=>{

    const faqs = [
        {
          question: "What is SaaS-based website development, and how does it differ from traditional website development?",
          answer: "SaaS-based website development refers to the creation of websites or web applications that are hosted and accessed remotely through the internet. Unlike traditional website development where the software is installed locally on a user's device, SaaS solutions are centrally hosted and managed by the service provider. This model offers advantages such as accessibility from anywhere with an internet connection, automatic updates, and scalability to accommodate growing business needs.",
        },
        {
          question: "How customizable are SaaS-based websites to fit our specific business needs?",
          answer: "Our SaaS-based websites are highly customizable to meet the unique requirements of each client. We offer a range of customization options, including branding, user interface design, feature integration, and workflow optimization, ensuring that the final product aligns perfectly with your business goals and objectives.",
        },
        {
          question: "Can you explain the process of developing a SaaS-based website?",
          answer: "Our development process typically begins with requirements gathering, where we work closely with clients to understand their objectives and business needs. From there, we move on to design, development, testing, and deployment phases, following agile methodologies to ensure flexibility and transparency throughout the project lifecycle.",
        },
        {
          question: "How long does it typically take to develop and launch a SaaS-based website?",
          answer: "The timeline for developing and launching a SaaS-based website can vary depending on the complexity of the project and the specific requirements involved. However, we strive to deliver high-quality solutions in a timely manner, and we'll provide you with a clear timeline and regular updates throughout the development process to keep you informed every step of the way.",
        },
      
      ];

    const technologies = [
        { name: "Shopify", icon: "https://kavelogics.com/services/saas/tech/shopify.svg" },
        { name: "Big Commerce", icon: "https://kavelogics.com/services/saas/tech/big-commerce.svg"},
        { name: "Magento", icon: "https://kavelogics.com/services/saas/tech/magento.svg"},
        { name: "Framer", icon: "https://kavelogics.com/services/saas/tech/framer.svg" },
        { name: "Squarespace", icon: "https://kavelogics.com/services/saas/tech/squarespace.svg" },
        { name: "Prestashop", icon: "https://kavelogics.com/services/saas/tech/prestashop.svg"},
        { name: "WordPress", icon: "https://kavelogics.com/services/saas/tech/wordpress.svg"},
        { name: "Webflow", icon: "https://kavelogics.com/services/saas/tech/webflow.svg"},
        { name: "WIX e-Commerce", icon: "https://kavelogics.com/services/saas/tech/wix.svg" },
      ];

       const features = [
    { title: 'Mobile Commerce', subtitle: 'Integration' },
    { title: 'Third Party', subtitle: 'Integration' },
    { title: 'Ongoing Support &', subtitle: 'Maintenance' },
    { title: 'Performance', subtitle: 'Optimization' },
  ];

  const CustomWhyChooseData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Expertise in SaaS Solutions",
      description:
        "Kavelogics specializes in cutting-edge SaaS based solutions, leveraging years of experience to address unique industry requirements and challenges.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "Customized Solutions",
      description:
        "We tailor SaaS based solutions to your unique goals. Close collaboration ensures we understand your specific requirements, whether you're a major corporation or a startup.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "User-Centric Design",
      description:
        "We prioritize user experience in all our designs. Our expert team craft intuitive interfaces that drive engagement and conversions, resulting in a seamless user experience.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Scalability & Flexibility",
      description:
        "Our scalable SaaS solutions boost your business growth by enabling you to add features, integrate tools, and handle increased traffic with confidence.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Robust Infrastructure",
      description:
        "We prioritize reliability in SaaS solutions. With robust infrastructure and cutting-edge technologies, our SaaS platforms ensure high availability and uptime for your online store.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Support & Maintenance",
      description:
        "We offer continuous support and maintenance post-launch. From security updates to performance optimization, we ensure your SaaS platform stays secure and up-to-date.",
    },
    
  ];

  const SolutionData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Custom SaaS Development",
      description:
        "We provide tailored SaaS development with customizable features to meet business-specific needs.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "M-commerce Development",
      description:
        "We develop mobile responsive e-commerce sites with integrated M-commerce for seamless shopping.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "CRM Integration",
      description:
        "We provide CRM integrated systems to manage customer interactions, sales, and marketing efforts.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Performance Optimization",
      description:
        "Our optimized website development services ensure fast loading times and a seamless user experience.",
    },
    
  ];
    return(
        <div>
            <ServicesCustomBanner
             heading={"SaaS Based Website Development"}
             description={
               "Enhance your digital footprint with our state-of-the-art SaaS-based Website Development solutions. Join us on a transformative journey to turn your vision into a captivating reality."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
            <FeatureList features={features}/>
            

            <CustomSolutionCard 
      heading="Our Cutting-Edge SaaS Solutions" 
      subHeading="At Kavelogics, we understand the critical importance of having a robust online presence in today's competitive digital landscape. That's why we offer unparalleled expertise in SaaS-based website development, empowering businesses like yours to thrive in the ever-evolving online marketplace."
      Solution={SolutionData} 
    />

            <section className="py-16 text-center bg-white">
      <h2 className="text-5xl font-bold text-[#013a54] mb-4">Our SaaS Based Website Development Process</h2>
      <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54]">
      Success in SaaS-based website development hinges on a systematic and collaborative approach. We deliver high-quality solutions that exceed client expectations, driving business growth and success.
      </p>

      <div className="relative flex justify-center gap-10 flex-wrap">
        <div className="flex justify-center gap-6 sm:gap-13 relative w-full">
         
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[72%] after:left-[89%] after:-translate-x-1/2 after:w-3 after:h-34 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Project Initiation</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[72%] after:left-[89%] after:rounded-sm after:-translate-x-1/2 after:w-3 after:h-35 after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Design & Architecture</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] "
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Integration & Customization</span>
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
                  <span className="font-bold text-[9px] sm:text-sm text-black">Launch & Support</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[-134%] sm:after:top-[-90%] after:left-[80%] after:-translate-x-1/2 after:w-3 after:h-34 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#0575ad]  flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Quality Assurance</span>
                </div>
              </div>
            </div>
        </div>
       
      </div>
            </section>

            <CustomServiceDetail
             heading={"Streamline CRM With Simple & Modern Solutions"}
             description={
               "Modern CRM solutions prioritize simplicity for intuitive navigation while incorporating the latest features. Striking a balance between ease of use and advanced functionality, these systems empower businesses for enhanced productivity and customer satisfaction in today's fast-paced environment."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/6fd07c4b-00f0-44cf-40c6-e6fa8d218100/w=1920,q=75"
           
             />
            <Clientsline/>
            
  
            <CustomWhyChoose 
      heading={"Why should you choose MindSees for SaaS Based Solutions"}
      CustomWhyChoose={CustomWhyChooseData} 
    />
    <TechnologyGrid technologies={technologies} />

    <FaqAccordion faqs={faqs} />
            <Stories/>
            <LastBusinessesSection/>


        </div>
    )
}
export default SaaS ;