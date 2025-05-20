"use client"
import React from "react"
import { Info } from "lucide-react";
import ServicesCustomBanner from "../components/servicesCustomBanner";
import bannerImage from "@/app/services/uiux/image/uiuxBanner.gif"
import { FeatureList } from "../components/FeatureList";
import CustomSolutionCard from "../components/customSolutionCard";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page";
import Clientsline from "@/app/clientsline/page";
import CustomServiceDetail from "../components/customServiceDetail";
import CustomWhyChoose from "../components/customWhyChooseSection";
import { TechnologyGrid } from "../components/customTechnologiesSection";
import { FaqAccordion } from "../components/custonFAQ";
import design from "@/app/services/uiux/image/design.svg"
import designing from "@/app/services/uiux/image/designing.svg"
import audits from "@/app/services/uiux/image/audits.svg"
import Wireframing from "@/app/services/uiux/image/Wireframing.svg"
import centric from "@/app/services/uiux/image/Centric.svg"

import rdesign from "@/app/services/uiux/image/rdesign.svg"
import Continuous from "@/app/services/uiux/image/Continuous.png"
import Accessibility from "@/app/services/uiux/image/Accessibility.svg"
import customizedSolutions from "@/app/services/uiux/image/customizedSolutions.svg"
import prototyping from "@/app/services/uiux/image/prototyping.svg"
import crossPlatfrom from "@/app/services/uiux/image/crossPlatfrom.svg"
import marvelLogo from "@/app/services/uiux/image/marvelLogo.svg.svg"
import FramerLogo from "@/app/services/uiux/image/FramerLogo.svg"
import FigmaLogo from "@/app/services/uiux/image/FigmaLogo.svg"
import InvisionLogo from "@/app/services/uiux/image/InvisionLogo.svg"
import AxureLogo from "@/app/services/uiux/image/AxureLogo.svg"
import AdobeXDLogo from "@/app/services/uiux/image/AdobeXDLogo.svg"
import BalsamiqLogo from "@/app/services/uiux/image/BalsamiqLogo.svg"
import WebflowLogo from "@/app/services/uiux/image/WebflowLogo.svg"
import sketchLogo from "@/app/services/uiux/image/sketchLogo.svg"
const UiUx = () => {
  const faqs = [
    {
      question: "What Makes MindSees' UI/UX Design Stand Out?",
      answer: "At MindSees, we prioritize user-centric design, blending aesthetics with functionality to create intuitive, engaging experiences. Our custom solutions are tailored to your brand and business goals, ensuring impactful, accessible designs across all platforms.",
    },
    {
      question: "Can You Enhance Existing User Interfaces and Experiences?",
      answer: "Yes, we specialize in updating and optimizing existing user interfaces to improve usability and overall user experience. Our team focuses on modernizing designs while maintaining functionality and enhancing performance across all platforms.",
    },
    {
      question: "How Does MindSees Guarantee the Quality and Accuracy of AI Models?",
      answer: "At MindSees, we ensure the quality and accuracy of AI models through rigorous data preprocessing, continuous testing, and real-time validation. Our team uses advanced algorithms and monitors performance to optimize results and maintain precision.",
    },
    {
      question: "What Role Does Usability Testing Play in UX/UI Design?",
      answer: "Usability testing helps identify pain points and areas for improvement in a design by gathering feedback from real users. It ensures that the final product is intuitive, user-friendly, and aligns with user expectations, enhancing overall satisfaction.",
    },

  ];
  const technologies = [
    { name: "Marvel", icon: marvelLogo },
    { name: "Sketch", icon: sketchLogo },
    { name: "Framer", icon: FramerLogo },
    { name: "Figma", icon: FigmaLogo },
    { name: "Invision", icon: InvisionLogo },
    { name: "Axure", icon: AxureLogo },
    { name: "Adobe XD", icon: AdobeXDLogo },
    { name: "Webflow", icon: WebflowLogo },
    { name: "Balsamiq", icon: BalsamiqLogo },
  ];

  const features = [
    { title: 'Web UI/UX', subtitle: 'Design' },
    { title: 'Mobile UI/UX', subtitle: 'Design' },
    { title: 'Data', subtitle: 'Visualization' },
    { title: 'Wireframing &', subtitle: 'Prototyping' },
  ];
  const CustomWhyChooseData = [
    {
      icon: centric,
      title: "User-Centric Design",
      description:
        "Our team excels at creating designs that prioritize user needs and preferences, resulting in interfaces that are both intuitive and engaging.",
    },
    {
      icon: customizedSolutions,
      title: "Customized Solutions",
      description:
        "We tailor our designs to align with your brand identity and business goals, ensuring that each solution is unique and effectively fulfills its purpose.",
    },
    {
      icon: crossPlatfrom,
      title: "Cross-Platform Compatibility",
      description:
        "Focusing on seamless performance across devices and platforms, our designs ensure a consistent user experience for all users.",
    },
    {
      icon: prototyping,
      title: "Prototyping & Testing",
      description:
        "We use prototyping and testing techniques to validate design concepts early, saving time and resources while ensuring optimal usability.",
    },
    {
      icon: Accessibility,
      title: "Accessibility Compliance",
      description:
        "Our designs are crafted in compliance with accessibility standards, ensuring usability for individuals with disabilities and fostering inclusivity across all user demographics.",
    },
    {
      icon: Continuous,
      title: "Continuous Support",
      description:
        "Our designs adhere to accessibility standards, ensuring usability for individuals with disabilities and promoting inclusivity across all user demographics.",
    },

  ];
  const SolutionData = [
    {
      icon: design,
      title: "Web UI/UX Design",
      description:
        "Our web UI/UX design methodology adheres to the highest standards of accessibility, compatibility, and usability.",
    },
    {
      icon: designing,
      title: "Mobile App Designing",
      description:
        "We specialize in creating visually captivating mobile apps that deliver seamless user experiences across all devices and platforms, driving engagement and customer satisfaction.",
    },
    {
      icon: audits,
      title: "UI/UX Audits",
      description:
        "We perform comprehensive UI/UX audits for underperforming websites and apps, providing strategic recommendations to improve usability and boost user satisfaction.",
    },
    {
      icon: Wireframing,
      title: "Prototyping & Wireframing",
      description:
        "We provide prototyping and wireframing services, enabling stakeholders to validate design concepts early, saving both time and resources.",
    },
    {
      icon: rdesign,
      title: "Responsive Design",
      description:
        "Our team applies responsive design principles to ensure seamless adaptation across all devices, maximizing accessibility and enhancing user engagement.",
    },

  ];
  return (
    <div>
      <ServicesCustomBanner
        heading={"UI/UX Designing"}
        description={
          "Combine technical expertise with creative innovation to design cutting-edge, visually stunning user interfaces that boost conversions. Partner with us to transform your vision into a captivating, impactful reality."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={bannerImage}
      />
      <FeatureList features={features} />


      <CustomSolutionCard
        
        heading="Our Distinctive UI/UX Design Solutions"
        subHeading="We offer a comprehensive range of UI/UX services designed to create strategies that effectively retain customers. By delivering exceptional user experiences, we help brands through impactful UI and UX design services that drive long-term customer engagement and encourage purchasing decisions."
        Solution={SolutionData}
      />

      <section className="py-16 text-center bg-white">
        <h2 className="text-5xl font-bold text-[#013a54] mb-4 px-2">Our UI/UX Design Process</h2>
        <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54]">
          At MindSees, we work closely with your team to create the best branding solutions. From concept to launch, your vision and website are at the heart of our process, ensuring a seamless and impactful result.
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
        heading={"Elevate Your Experience with Our Top UI/UX Designers"}
        description={
          "Experience the pinnacle of user-centered design with our unmatched expertise in UI/UX. From seamless navigation to visually captivating interfaces, our team creates digital experiences that exceed expectations, blending aesthetics with functionality. Let your users embark on intuitive and engaging journeys defined by exceptional design."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/df7dff71-63cb-4988-48d9-940a5adf9100/w=1920,q=75"

      />
      <Clientsline />


      <CustomWhyChoose
        heading={"Why should you choose MindSees for UI/UX Designing"}
        CustomWhyChoose={CustomWhyChooseData}
      />
      <TechnologyGrid technologies={technologies} />

      <FaqAccordion faqs={faqs} />
      <Stories />
      <LastBusinessesSection />


    </div>
  )
}
export default UiUx;