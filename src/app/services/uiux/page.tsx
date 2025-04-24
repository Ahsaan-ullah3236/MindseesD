"use client"
import React from "react"
import { Info } from "lucide-react";
import ServicesCustomBanner from "../components/servicesCustomBanner";
import bannerImage from "@/app/services/uiux/image/uiuxBanner.png"
import { FeatureList } from "../components/FeatureList";
import CustomSolutionCard from "../components/customSolutionCard";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page";
import Clientsline from "@/app/clientsline/page";
import CustomServiceDetail from "../components/customServiceDetail";
import CustomWhyChoose from "../components/customWhyChooseSection";
import { TechnologyGrid } from "../components/customTechnologiesSection";
import { FaqAccordion } from "../components/custonFAQ";

const UiUx=()=>{

    const faqs = [
        {
          question: "What sets MindSees' UI/UX design apart from others?",
          answer: "We prioritize user-centric design and integrate aesthetics and usability to enhance user engagement, navigation, and overall satisfaction.",
        },
        {
          question: "Can you update the current user interfaces and experiences?",
          answer: "Indeed. To develop more visually appealing and user-friendly interactions, we may modify and enhance your current interfaces.",
        },
        {
          question: "How does MindSees ensure the quality and accuracy of AI models?",
          answer: "In order to ensure that our UI/UX design appropriately conveys the essence, values, and goals of your brand, we conduct extensive research to fully understand your brand.",
        },
        {
          question: "What is the role of usability testing in UX/UI design?",
          answer: "Usability testing is important. We conduct extensive testing to identify issues and resolve them, guaranteeing a flawless user experience on all platforms and gadgets.",
        },
      
      ];

    const technologies = [
        { name: "Marvel", icon: "https://kavelogics.com/services/uiux/media/marvel-logo.svg" },
        { name: "Sketch", icon: "https://kavelogics.com/services/uiux/media/sketch-logo.svg"},
        { name: "Framer", icon: "https://kavelogics.com/services/uiux/media/framer-logo.svg"},
        { name: "Figma", icon: "https://kavelogics.com/services/uiux/media/figma-logo.svg" },
        { name: "Invision", icon: "https://kavelogics.com/services/uiux/media/invision-logo.svg" },
        { name: "Axure", icon: "https://kavelogics.com/services/uiux/media/axure-logo.svg"},
        { name: "Adobe XD", icon: "https://kavelogics.com/services/uiux/media/adobexd-logo.svg"},
        { name: "Webflow", icon: "https://kavelogics.com/services/uiux/media/webflow-logo.svg"},
        { name: "Balsamiq", icon: "https://kavelogics.com/services/uiux/media/balsamiq-logo.svg" },
      ];

       const features = [
    { title: 'Web UI/UX', subtitle: 'Design' },
    { title: 'Mobile UI/UX', subtitle: 'Design' },
    { title: 'Data', subtitle: 'Visualization' },
    { title: 'Wireframing &', subtitle: 'Prototyping' },
  ];

  const CustomWhyChooseData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "User-Centric Design",
      description:
        "Our team excels in crafting designs that place a high priority on meeting user needs and preferences, leading to interfaces that are both intuitive and engaging.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "Customized Solutions",
      description:
        "We customize our designs to match your brand identity and meet your business goals, guaranteeing that each solution is distinct and achieves its purpose effectively.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Cross-Platform Compatibility",
      description:
        "With a focus on seamless performance across various devices and platforms, our designs guarantee a consistent user experience for all users.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Prototyping & Testing",
      description:
        "We utilize prototyping & testing techniques to validate design concepts early in the process, saving time and resources while ensuring optimal usability.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Accessibility Compliance",
      description:
        "Our designs are crafted in compliance with accessibility standards, ensuring usability for individuals with disabilities and fostering inclusivity across all user demographics.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Continuous Support",
      description:
        "Beyond the initial design phase, we offer ongoing support and optimization services to keep your interfaces up-to-date and aligned with evolving user needs.",
    },
    
  ];
  const SolutionData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Web UI/UX Design",
      description:
        "Our web UI/UX design methodology follows to the finest standards for accessibility, compatibility, and usability.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "Mobile App Designing",
      description:
        "We specialize in designing visually stunning mobile apps that offer seamless user experiences across devices and platforms, driving engagement and satisfaction.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "UI/UX Audits",
      description:
        "We conduct thorough UI/UX audits for underperforming websites & apps, offering strategic recommendations to enhance usability and user satisfaction.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Prototyping & Wireframing",
      description:
        "We offer prototyping and wireframing services, allowing stakeholders to validate design concepts early, saving time and resources.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Responsive Design",
      description:
        "Our team ensures seamless adaptation to all devices with responsive design principles, maximizing accessibility and user engagement.",
    },
    
  ];
    return(
        <div>
            <ServicesCustomBanner
             heading={"UI/UX Designing"}
             description={
               "Get technical expertise with creative flair to craft cutting-edge and visually appealing user interfaces that increase conversions. Join us on a transformative journey to turn your vision into a captivating reality."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
            <FeatureList features={features}/>
            

            <CustomSolutionCard 
      heading="Our Unique UI/UX Design Solutions" 
      subHeading="We provide a wide range of UI/UX services to create plans that effectively retain customers. By offering a superior user experience, we assist brands through UI and UX design services that have a long-lasting effect and encourage customers to purchase their goods or services."
      Solution={SolutionData} 
    />

            <section className="py-16 text-center bg-white">
      <h2 className="text-5xl font-bold text-[#013a54] mb-4">Our UI/UX Design Process</h2>
      <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54]">
      At MindSees, we collaborate closely with your firm to craft best branding solutions. From inception to launch, your vision and website take center stage in our process.
      </p>

      <div className="relative flex justify-center gap-10 flex-wrap">
        <div className="flex justify-center gap-6 sm:gap-13 relative w-full">
         
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[72%] after:left-[89%] after:-translate-x-1/2 after:w-3 after:h-34 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">User Research</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[72%] after:left-[89%] after:rounded-sm after:-translate-x-1/2 after:w-3 after:h-35 after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Wireframing</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] "
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Prototyping</span>
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
                  <span className="font-bold text-[9px] sm:text-sm text-black">Personas</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[-134%] sm:after:top-[-90%] after:left-[80%] after:-translate-x-1/2 after:w-3 after:h-34 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#0575ad]  flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Design</span>
                </div>
              </div>
            </div>
        </div>
       
      </div>
            </section>

            <CustomServiceDetail
             heading={"Elevate Experiences With \nOur Best UI/UX Designers"}
             description={
               "Discover the pinnacle of user-centric design with our unparalleled expertise in UI/UX. From seamless navigation to visually stunning interfaces, our team crafts digital experiences that transcend expectations, embracing the fusion of aesthetics and functionality. Let your users embark on journeys defined by intuitive, captivating design."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/df7dff71-63cb-4988-48d9-940a5adf9100/w=1920,q=75"
           
             />
            <Clientsline/>
            
  
            <CustomWhyChoose 
      heading={"Why should you choose MindSees for UI/UX Designing"}
      CustomWhyChoose={CustomWhyChooseData} 
    />
    <TechnologyGrid technologies={technologies} />

    <FaqAccordion faqs={faqs} />
            <Stories/>
            <LastBusinessesSection/>


        </div>
    )
}
export default UiUx ;