"use client"
import React from "react"
import { Info } from "lucide-react";
import ServicesCustomBanner from "../components/servicesCustomBanner";
import bannerImage from "@/app/services/ai/image/aiBannerImage.png"
import { FeatureList } from "../components/FeatureList";
import CustomSolutionCard from "../components/customSolutionCard";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page";
import Clientsline from "@/app/clientsline/page";
import CustomServiceDetail from "../components/customServiceDetail";
import CustomWhyChoose from "../components/customWhyChooseSection";
import { TechnologyGrid } from "../components/customTechnologiesSection";
import { FaqAccordion } from "../components/custonFAQ";
const Ai=()=>{

    const faqs = [
        {
          question: "What is AI Development, and how can it benefit my business??",
          answer: "AI development involves creating intelligent software that can learn, reason, and make decisions. It benefits your business by automating processes, enhancing decision-making, improving customer experiences, and providing insights from data.",
        },
        {
          question: "What types of AI solutions do you offer?",
          answer: "We offer custom AI solutions, machine learning development, natural language processing (NLP), computer vision solutions, and AI consulting services. These solutions are tailored to meet your specific business needs and objectives.",
        },
        {
          question: "How does Kavelogics ensure the quality and accuracy of AI models?",
          answer: "We conduct rigorous testing and validation of AI models using real-world data. Our quality assurance process ensures that the models meet performance, accuracy, and security standards before deployment",
        },
        {
          question: "Can AI be integrated into my existing systems?",
          answer: "Yes, our AI solutions are designed for seamless integration into your existing systems and applications, ensuring minimal disruption and maximum efficiency.",
        },
      
      ];

    const technologies = [
        { name: "TensorFlow", icon: "https://kavelogics.com/services/ai/media/tensorflow-logo.svg" },
        { name: "MXNet", icon: "https://kavelogics.com/services/ai/media/mxnet-logo.svg"},
        { name: "Keras", icon: "https://kavelogics.com/services/ai/media/keras-logo.svg"},
        { name: "Scikit-Learn", icon: "https://kavelogics.com/services/ai/media/scikit-learn-logo.svg" },
        { name: "PyTorch", icon: "https://kavelogics.com/services/ai/media/pytorch-logo.svg" },
        { name: "OpenCV", icon: "https://kavelogics.com/services/ai/media/opencv-logo.svg "},
        { name: "YOLO", icon: "https://kavelogics.com/services/ai/media/yolo-logo.svg"},
        { name: "Microsoft Azure", icon: "https://kavelogics.com/services/ai/media/microsoft-azure-logo.svg"},
        { name: "Power BI", icon: "https://kavelogics.com/services/ai/media/power-bi-logo.svg" },
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
      title: "Expertise & Innovation",
      description:
        "Tailored development of AI algorithms and models to address specific business challenges and objectives, ensuring precise alignment with organizational goals and requirements.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "Comprehensive Approach",
      description:
        "Design and implementation of machine learning models to automate processes and derive actionable insights from data.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Tailored Solution",
      description:
        "Development of applications that understand and generate human language, enhancing customer interaction and data processing capabilities.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Seamless Integration",
      description:
        "Creation of systems that interpret and analyze visual data, enabling advanced image recognition, object detection, and decision-making capabilities.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Proven Track Record",
      description:
        "Expert guidance on AI strategy, implementation, and optimization to maximize ROI and business competitiveness.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Support & Improvement",
      description:
        "Expert guidance on AI strategy, implementation, and optimization to maximize ROI and business competitiveness.",
    },
    
  ];
  const SolutionData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Custom AI Solutions",
      description:
        "Tailored development of AI algorithms and models to address specific business challenges and objectives, ensuring precise alignment with organizational goals and requirements.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "Machine Learning",
      description:
        "Design and implementation of machine learning models to automate processes and derive actionable insights from data.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "NLP",
      description:
        "Development of applications that understand and generate human language, enhancing customer interaction and data processing capabilities.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Computer Vision Solutions",
      description:
        "Creation of systems that interpret and analyze visual data, enabling advanced image recognition, object detection, and decision-making capabilities.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "AI Consulting Services",
      description:
        "Expert guidance on AI strategy, implementation, and optimization to maximize ROI and business competitiveness.",
    },
    
  ];
    return(
        <div>
            <ServicesCustomBanner
             heading={"AI Development"}
             description={
               "Enhance your digital presence with our cutting-edge AI Development solutions. Embark on a transformative journey to turn your vision into intelligent reality."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
            <FeatureList features={features}/>
            

            <CustomSolutionCard 
      heading="Our Advanced AI Development Solutions" 
      subHeading="At MindSees, we recognize the pivotal role of harnessing artificial intelligence in today's dynamic business environment. That's why we specialize in cutting-edge AI development, empowering businesses to excel in an era driven by intelligent technologies. Partner with us to transform your vision into innovative AI-powered solutions that propel your business forward."
      Solution={SolutionData} 
    />

            <section className="py-16 text-center bg-white">
      <h2 className="text-5xl font-bold text-[#013a54] mb-4">Our AI Development Process</h2>
      <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54]">
      Our comprehensive AI Development services are crafted to meet your unique needs, from custom AI solutions to seamless integration and ongoing optimization. Partner with us to unlock the full potential of AI and stay ahead in todays competitive landscape.
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
             heading={"Transform Your Business \nwith AI Solutions"}
             description={
               "Modern AI solutions prioritize simplicity and effectiveness, integrating advanced features while maintaining ease of use. By striking a balance between user-friendly interfaces and powerful functionalities, these AI systems empower businesses to enhance productivity, improve decision-making, and drive customer satisfaction in today's fast-paced environment."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/c23718a1-02af-4581-5cc1-93d939042e00/w=1920,q=75"
           
             />
            <Clientsline/>
            
  
            <CustomWhyChoose 
      heading={"Why should you choose MindSees for AI Development"}
      CustomWhyChoose={CustomWhyChooseData} 
    />
    <TechnologyGrid technologies={technologies} />

    <FaqAccordion faqs={faqs} />
            <Stories/>
            <LastBusinessesSection/>


        </div>
    )
}
export default Ai;