"use client";
import React from "react";
import CustomBanner from "../components/customBanner";
import bannerImage from "@/app/industries/edtech/image/edTechImage.png"
import CustomValue from "../components/customValue";
import ServicePlatform from "../components/customPlatformServices";
import Clientsline from "@/app/clientsline/page";
import BenefitsCard from "../components/customBenefitCard";
import Stories from "@/app/Stories/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";

const EdTech=()=>{
    const valueItems=[
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-1.svg",
          title: "E-learning Platforms",
          description:
            "Develop custom e-learning platforms to boost student engagement and streamline education delivery.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "Virtual Classrooms",
          description:
            "Create robust virtual classroom solutions for real-time interactive learning and remote education.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Data Analytics",
          description:
            "Provide data analytics to track student performance, identify trends, and support data-driven decisions.",
        },
      ]

      const scrollItems = [
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/medical-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/medical.svg",
          title: "LMS Development",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/management-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/management.svg",
          title: "Mobile Learning Applications",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Data Center & Network Management",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Education Software Integration",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "MVP Development",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "E-Learning Modernization",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "VLE Development",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Gamified Education Services",
        }
      ];

      const benefitsData = [
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Enhanced Engagement",
          description:
            "Our LMS and gamified education services significantly boost student interaction and participation, creating a more engaging and effective learning experience overall.",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "Seamless Integration",
          description:
            "Our software integration services ensure all your educational tools work together seamlessly and efficiently. This integration enhances the learning environment.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Mobile Learning",
          description:
            "Our mobile learning applications enable learning on the go, enhancing accessibility, flexibility, engagement, and participation for students.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Improved Effeciency",
          description:
            "Our data centre and network management streamline your operations, minimizing downtime and enhancing efficiency, reliability, and performance.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Reliable Support",
          description:
            "Our troubleshooting services provide quick resolution of technical issues, ensuring uninterrupted learning experiences for students.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Modernized E-learning",
          description:
            "Our e-learning modernization updates your existing systems for improved functionality, usability, user experience, and performance.",
        },
      ];

    return(
        <div>
             <CustomBanner 
             heading={"Innovative EdTech \nSoftware Solutions"}
             description={
               "EdTech is revolutionizing education with interactive platforms and personalized learning, catering to diverse needs and making learning globally accessible."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
                <CustomValue
                 heading="How MindSees Can Help in EdTech"
                 subheading="Explore how MindSees can transform your educational operations with our tailored digital solutions."
                 values={valueItems}
                />
                 <ServicePlatform
      title="Our EdTech Platform Services"
      subtitle="Discover how MindSees can enhance learning and streamline operations with our comprehensive suite of tailored digital education solutions."
      imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/6cc9e570-ba59-43f8-5d0b-d358875aea00/w=3840,q=75"
      description="We specialize in updating e-learning software with cutting-edge technologies, integrating third-party solutions, and migrating to robust infrastructures with enhanced architectural updates. Our team offers software modernization services, incorporating the latest technology updates and feature enhancements to strengthen the digital capabilities of educational technology (Edtech) services."
      scrollItems={scrollItems}
      buttonText="Let's discuss"
      buttonColor="#00d280"
      cardBgColor="#d6f1ff"
      cardHoverBgColor="#0575ad"
      cardBorderColor="#0575ad"
      textHoverColor="white"
    />
    <Clientsline/>
    <BenefitsCard 
          heading="Benefits of Having MindSees' EdTech Solutions" 
          benefits={benefitsData} 
        />
        <div className="mt-14 mb-20">
            <Stories/>
        
            </div>
            <LastBusinessesSection/>
        </div>
    )
}
export default EdTech;