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
import Scustom  from "@/app/services/saas/image/Scustom.svg"
import  Scommerce from "@/app/services/saas/image/Scommerce.svg"
import SCRM  from "@/app/services/saas/image/SCRM.svg"
import SPerformance from "@/app/services/saas/image/SPerformance.svg"
import shopify from "@/app/services/saas/image/shopify.svg"
import bigcommerce from "@/app/services/saas/image/bigcommerce.svg"
import magento from "@/app/services/saas/image/magento.svg"
import Framer from "@/app/services/saas/image/Framer.svg"
import squarespace from "@/app/services/saas/image/squarespace.svg"
import prestashop from "@/app/services/saas/image/prestashop.svg"
import wordpress from "@/app/services/saas/image/wordpress.svg"
import webflow from "@/app/services/saas/image/webflow.svg"
import wix from "@/app/services/saas/image/wix.svg"

import Sexperties from "@/app/services/saas/image/Sexperties.svg"
import ScustomizedS from "@/app/services/saas/image/ScustomizedS.svg"
import Scentric from "@/app/services/saas/image/Scentric.svg"
import Sscalability from "@/app/services/saas/image/Sscalability.svg"
import Srobust from "@/app/services/saas/image/Srobust.svg"
import Ssupport from "@/app/services/saas/image/Ssupport.svg"


const SaaS=()=>{
    const faqs = [
        {
          question: "What is SaaS-based website development, and how does it differ from traditional website development?",
          answer: "SaaS-based website development involves building platforms that offer software as a service, allowing users to access applications via the web, while traditional website development focuses on creating static or dynamic websites for individual use without a subscription model.",
        },
        {
          question: "How flexible are SaaS-based websites in adapting to our unique business requirements?",
          answer: "SaaS-based websites are highly customizable, allowing tailored features and functionalities to meet your specific business needs.",
        },
        {
          question: "Can you describe the process of building a SaaS-based website?",
          answer: "The process of developing a SaaS-based website involves planning, designing, developing, testing, and deploying the platform, followed by continuous support and maintenance to ensure scalability and performance.",
        },
        {
          question: "What is the typical timeline for developing and launching a SaaS-based website?",
          answer: "The timeline for developing and launching a SaaS-based website typically ranges from a few months to a year, depending on complexity and customization requirements.",
        },
      
      ];
    const technologies = [
        { name: "Shopify", icon: shopify },
        { name: "Big Commerce", icon: bigcommerce},
        { name: "Magento", icon: magento},
        { name: "Framer", icon: Framer},
        { name: "Squarespace", icon: squarespace},
        { name: "Prestashop", icon: prestashop},
        { name: "WordPress", icon: wordpress},
        { name: "Webflow", icon: webflow},
        { name: "WIX e-Commerce", icon: wix },
      ];
       const features = [
    { title: 'Mobile Commerce', subtitle: 'Integration' },
    { title: 'Third Party', subtitle: 'Integration' },
    { title: 'Ongoing Support &', subtitle: 'Maintenance' },
    { title: 'Performance', subtitle: 'Optimization' },
  ];
  const CustomWhyChooseData = [
    {
      icon: Sexperties ,
      title: "Expertise in SaaS Solutions",
      description:
        "MindSees specializes in innovative SaaS-based solutions, using years of expertise to tackle unique industry challenges and meet specific business needs.",
    },
    {
      icon: ScustomizedS ,
      title: "Customized Solutions",
      description:
        "We customize SaaS-based solutions to align with your unique goals, working closely with you to understand your specific needs, whether you're a large enterprise or a startup.",
    },
    {
      icon: Scentric,
      title: "User-Centric Design",
      description:
        "We focus on delivering exceptional user experiences by designing intuitive interfaces that enhance engagement and drive conversions, ensuring a smooth and seamless user journey.",
    },
    {
      icon: Sscalability,
      title: "Scalability & Flexibility",
      description:
        "Our scalable SaaS solutions fuel your business growth by allowing you to easily add features, integrate tools, and manage higher traffic with ease and confidence.",
    },
    {
      icon: Srobust,
      title: "Robust Infrastructure",
      description:
        "We prioritize reliability in our SaaS solutions, ensuring high availability and uptime for your online store with robust infrastructure and advanced technologies.",
    },
    {
      icon: Ssupport,
      title: "Support & Maintenance",
      description:
        "We provide ongoing support and maintenance after launch, including security updates and performance optimization, to keep your SaaS platform secure and up-to-date.",
    },
    
  ];
  const SolutionData = [
    {
      icon: Scustom ,
      title: "Custom SaaS Development",
      description:
        "We offer customized SaaS development with flexible features designed to address the unique needs of your business.",
    },
    {
      icon: Scommerce,
      title: "M-commerce Development",
      description:
        "We create mobile-responsive e-commerce websites with integrated M-commerce functionality for a seamless shopping experience across all devices.",
    },
    {
      icon: SCRM,
      title: "CRM Integration",
      description:
        "We offer CRM-integrated systems to streamline customer interactions, sales processes, and marketing strategies, enhancing overall business efficiency.",
    },
    {
      icon: SPerformance,
      title: "Performance Optimization",
      description:
        "Our website development services are optimized for fast loading speeds and a smooth, seamless user experience.",
    },
    
  ];
    return(
        <div>
            <ServicesCustomBanner
             heading={"SaaS Based Website Development"}
             description={
               "Boost your online presence with our cutting-edge SaaS-based website development solutions. Let us guide you through a transformative journey to bring your vision to life."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
            <FeatureList features={features}/>
            

            <CustomSolutionCard 
      heading="Our Advanced SaaS Solutions" 
      subHeading="At MindSees, we understand the critical importance of having a robust online presence in today's competitive digital landscape. That's why we offer unparalleled expertise in SaaS-based website development, empowering businesses like yours to thrive in the ever-evolving online marketplace."
      Solution={SolutionData} 
    />

            <section className="py-16 text-center bg-white">
      <h2 className="text-5xl font-bold text-[#013a54] mb-4">Our SaaS Based Website Development Process</h2>
      <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54]">
      Success in SaaS-based website development requires a structured, collaborative approach. We provide high-quality solutions that surpass client expectations, fueling business growth and success.
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
             heading={"Simplify CRM with Innovative and Modern Solutions."}
             description={
               "Modern CRM solutions focus on simplicity for intuitive navigation, integrating advanced features to boost productivity and customer satisfaction in today's fast-paced business landscape."
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