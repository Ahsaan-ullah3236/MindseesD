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
import machinelearning from "@/app/services/ai/image/machinelerning.svg"
import customAi from "@/app/services/ai/image/customAI.svg"
import nlp from "@/app/services/ai/image/NLP.svg"
import computervision from "@/app/services/ai/image/computervision.svg"
import consulting from "@/app/services/ai/image/consulting.svg"
import experties from "@/app/services/ai/image/Expertise.svg"
import comprehensive from "@/app/services/ai/image/Comprehensive.svg"
import tailored from "@/app/services/ai/image/Tailored.svg"
import seamless from "@/app/services/ai/image/Seamless.svg"
import proven from "@/app/services/ai/image/Proven.svg"
import support from "@/app/services/ai/image/Support.svg"
import TensorFlow from "@/app/services/ai/image/tensorflow-logo.svg"
import MXNet from "@/app/services/ai/image/mxnet-logo.svg"
import Keras from "@/app/services/ai/image/keras-logo.svg"
import Scikit from "@/app/services/ai/image/Scikit-LearnLogo.svg"
import PyTorch from "@/app/services/ai/image/PyTorchLogo.svg"
import OpenCV from "@/app/services/ai/image/Opencv.svg"
import YOLO from "@/app/services/ai/image/YOLO.svg"
import Microsoft from "@/app/services/ai/image/microsoft-azure-logo.svg"
import Power from "@/app/services/ai/image/power-bi-logo.svg"
import AIDevelopment from "@/app/services/ai/image/AIDevelopment.png"
const Ai=()=>{

    const faqs = [
        {
          question: "What is AI Development, and How Can It Benefit Your Business?",
          answer: "AI development involves creating intelligent systems and software that can learn, reason, and make decisions. By leveraging machine learning, natural language processing, and other advanced technologies, AI enables businesses to automate tasks, enhance decision-making, improve customer experiences, and extract valuable insights from data.",
        },
        {
          question: "What AI Solutions Do We Offer?",
          answer: "Our AI solutions are designed to streamline operations, improve decision-making, and drive business growth through intelligent, data-driven innovations.",
        },
        {
          question: "How Does MindSees Guarantee the Quality and Accuracy of AI Models?",
          answer: "MindSees ensures the quality and accuracy of AI models through rigorous data preprocessing, advanced algorithm selection, and continuous testing. We also monitor model performance and optimize based on real-time feedback to deliver precise and reliable results.",
        },
        {
          question: "Can AI Be Seamlessly Integrated into My Existing Systems?",
          answer: "Yes, AI can be seamlessly integrated into your current systems to enhance functionality and performance. Our team ensures smooth integration with minimal disruption, optimizing your existing workflows for greater efficiency and value.",
        },
      
      ];

    const technologies = [
        { name: "TensorFlow", icon: TensorFlow },
        { name: "MXNet", icon: MXNet},
        { name: "Keras", icon: Keras},
        { name: "Scikit-Learn", icon: Scikit },
        { name: "PyTorch", icon: PyTorch},
        { name: "OpenCV", icon: OpenCV},
        { name: "YOLO", icon: YOLO},
        { name: "Microsoft Azure", icon: Microsoft},
        { name: "Power BI", icon: Power },
      ];

       const features = [
    { title: 'Web UI/UX', subtitle: 'Design' },
    { title: 'Mobile UI/UX', subtitle: 'Design' },
    { title: 'Data', subtitle: 'Visualization' },
    { title: 'Wireframing &', subtitle: 'Prototyping' },
  ];

  const CustomWhyChooseData = [
    {
      icon: experties,
      title: "Expertise & Innovation",
      description:
        "Custom development of AI algorithms and models designed to tackle specific business challenges and objectives, ensuring precise alignment with your organization's goals and requirements.",
    },
    {
      icon: comprehensive,
      title: "Comprehensive Approach",
      description:
        "Development and execution of machine learning models to automate workflows and uncover actionable insights from data.",
    },
    {
      icon: tailored,
      title: "Tailored Solution",
      description:
        "Development of applications that comprehend and generate human language, improving customer interactions and enhancing data processing capabilities.",
    },
    {
      icon: seamless,
      title: "Seamless Integration",
      description:
        "Building systems that process and analyze visual data, unlocking advanced image recognition, object detection, and intelligent decision-making.",
    },
    {
      icon: proven,
      title: "Proven Track Record",
      description:
        "Specialized expertise in AI strategy, implementation, and optimization to drive ROI and enhance your business competitiveness.",
    },
    {
      icon: support,
      title: "Support & Improvement",
      description:
        "Professional expertise in AI strategy, implementation, and optimization to drive ROI and enhance your business competitiveness.",
    },
    
  ];

  const SolutionData = [
    {
      icon:customAi ,
      title: "Custom AI Solutions",
      description:
        "Customized development of AI algorithms and models designed to tackle specific business challenges and objectives, ensuring seamless alignment with your organization's goals and needs.",
    },
    {
      icon: machinelearning,
      title: "Machine Learning",
      description:
        "Design and deployment of machine learning models to automate processes and extract actionable insights from data.",
    },
    {
      icon: nlp,
      title: "NLP",
      description:
        "Development of applications that comprehend and generate human language, elevating customer engagement and optimizing data processing capabilities.",
    },
    {
      icon: computervision,
      title: "Computer Vision Solutions",
      description:
        "Building intelligent systems that analyze visual information, unlocking capabilities in image recognition, object detection, and data-driven decisions.",
    },
    {
      icon: consulting,
      title: "AI Consulting Services",
      description:
        "Strategic guidance on AI adoption, deployment, and optimization to drive maximum ROI and sharpen your competitive edge.",
    },
    
  ];

    return(
        <div>
            <ServicesCustomBanner
             heading={"AI Development"}
             description={
               "Elevate your digital presence with our advanced AI development solutions. Begin a transformative journey to bring your vision to life with intelligent innovation."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
            <FeatureList features={features}/>
            

            <CustomSolutionCard 
      heading="Our Advanced AI Development Solutions" 
      subHeading="At MindSees, we understand the critical importance of leveraging artificial intelligence in today’s fast-evolving business landscape. We specialize in cutting-edge AI development, helping businesses thrive in an era fueled by intelligent technologies. Partner with us to transform your vision into innovative, AI-driven solutions that drive your business forward."
      Solution={SolutionData} 
    />

            <section className="py-16 text-center bg-white">
      <h2 className="text-5xl font-bold text-[#013a54] mb-4">Our AI Development Process</h2>
      <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54]">
      Our all-encompassing AI Development services are tailored to your specific needs, offering everything from bespoke AI solutions to seamless integration and continuous optimization. Partner with us to unlock AI’s full potential and maintain a competitive edge in today’s fast-paced landscape.
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
             heading={"Revolutionize Your Business with Cutting-Edge AI Solutions"}
             description={
               "Today’s AI solutions prioritize both simplicity and power, offering advanced features in an easy-to-use format. This balance empowers businesses to improve productivity, make smarter decisions, and enhance customer satisfaction in a rapidly evolving market."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={AIDevelopment}
           
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