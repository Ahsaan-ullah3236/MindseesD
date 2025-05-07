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
            "Create tailored e-learning platforms to enhance student engagement and streamline the delivery of education.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "Virtual Classrooms",
          description:
            "Develop powerful virtual classroom solutions for interactive real-time learning and seamless remote education.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Data Analytics",
          description:
            "Provide data analytics to track student performance, identify patterns, and facilitate informed decision-making.",
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
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Troubleshooting Support",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Teaching Development Applications",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "E-Learning Modernization",
        }
      ];

      const benefitsData = [
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Enhanced Engagement",
          description:
            "Our LMS and gamified education services greatly enhance student interaction and participation, fostering a more engaging and effective learning experience.",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "Seamless Integration",
          description:
            "Our software integration services ensure that all your educational tools work together seamlessly, enhancing efficiency and creating a more cohesive learning environment.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Mobile Learning",
          description:
            "Our mobile learning applications provide on-the-go access, boosting flexibility, engagement, and participation while enhancing accessibility for students.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Improved Effeciency",
          description:
            "Our data center and network management optimize your operations, reducing downtime and improving efficiency, reliability, and performance.",
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
            "Our e-learning modernization upgrades your existing systems to enhance functionality, usability, user experience, and performance.",
        },
      ];

    return(
        <div>
             <CustomBanner 
             heading={"Innovative EdTech \nSoftware Solutions"}
             description={
               "EdTech is transforming education through interactive platforms and personalized learning, addressing a wide range of needs and making education accessible worldwide."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
                <CustomValue
                 heading="How MindSees Can Make an Impact in EdTech"
                 subheading="Discover how MindSees can revolutionize your educational operations with our customized digital solutions."
                 values={valueItems}
                />
                 <ServicePlatform
      title="Our EdTech Platform Services"
      subtitle="Learn how MindSees can improve learning outcomes and optimize operations with our all-encompassing suite of customized digital education solutions."
      imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/6cc9e570-ba59-43f8-5d0b-d358875aea00/w=3840,q=75"
      description="We specialize in modernizing e-learning software by incorporating the latest technologies, integrating third-party solutions, and migrating to robust infrastructures with enhanced architectural improvements. Our team delivers software modernization services that integrate cutting-edge advancements and feature upgrades to strengthen the digital capabilities of EdTech solutions."
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